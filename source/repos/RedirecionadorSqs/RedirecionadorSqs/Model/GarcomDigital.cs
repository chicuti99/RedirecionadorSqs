using OrderSheet.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Net.Http;
using Newtonsoft.Json.Linq;
using Amazon;
using Amazon.SQS;
using Amazon.SQS.Model;
using Login;

namespace RedirecionadorSqs.Model
{
    
    internal class GarcomDigital
    {
        private readonly String BASE_URL = "https://backend.takeat.app";

        public static string TOKEN;
        public static List<Printer> printers;
        public Auth usuario;
        public bool Login (string username, string password)
        {
            using (HttpClient client = new HttpClient())
            {
                InitClient(client,true);
                var login = new Login(username, password);
                using (var response = client.PostAsync("/public/sessions/restaurants", Utils.GetStringContent<Login>(login)).Result)
                {
                    using(var content = response.Content)
                    {
                        if (response.IsSuccessStatusCode)
                        {
                            usuario = Utils.ParseHttpContent<Auth>(content);
                            TOKEN = usuario.token;
                            return true;
                        }
                        else
                        {
                            return false;
                        }
                    }

                }
            }
        }

        private void InitClient(HttpClient client, bool ignoreToken = false)
        {
            client.BaseAddress = new Uri(BASE_URL);

            if (!ignoreToken)
                client.DefaultRequestHeaders.Add("Authorization", $"Bearer {TOKEN}");
        }

        public List<Printer> GetAvaliablePrinters()
        {
            using (var client = new HttpClient())
            {
                InitClient(client);

                using (var response = client.GetAsync("/restaurants/printers").Result)
                {
                    if (response.IsSuccessStatusCode)
                    {
                        using (var content = response.Content)
                        {
                          return Utils.ParseHttpContent<List<Printer>>(content);   
                        }
                    }
                    else
                    {
                        return printers;
                    }
                }
            }
            //return null;
        }



        public string GetOrdersForPrinterSqs(int idImpressora,string impressora)
        {
            using (var client = new HttpClient())
            {
                InitClient(client);
                using (var response = client.GetAsync($"/restaurants/printers/printer-queue/{idImpressora}?print_status=pending").Result)
                {
                    if (response.IsSuccessStatusCode)
                    {
                        var result = response.Content.ReadAsStringAsync().Result;
                        using (var content = response.Content)
                        {
                            var printItens = Utils.ParseHttpContent<List<PrintItem>>(content);
                            if (printItens.Count > 0)
                            {
                                if (!File.Exists("json.txt")) File.WriteAllText("json.txt", content.ReadAsStringAsync().Result);
                                else File.AppendAllText("json.txt", content.ReadAsStringAsync().Result);
                                return $"Tem pedidos {printItens.Count.ToString()} na fila da impressora {impressora}({idImpressora.ToString()})";
                            }
                            else return $"Não tem pedidos na fila da impressora {impressora}({idImpressora.ToString()})";
                        }
                    }
                    else
                    {
                        return null;
                    }
                }
            }
        }



        public async Task SendMessageSqs(int idimpressora)
    {
        using (var client = new HttpClient())
        {
            var tela = new Tela_Login();
            InitClient(client);
            using (var response = client.GetAsync($"/restaurants/printers/printer-queue/{idimpressora}?print_status=pending").Result)
            {
                if (response.IsSuccessStatusCode)
                {
                    Task.Run(() => tela.GetControle());
                    do
                    {
                        using (var content = response.Content)
                        {
                            var verificador = Utils.ParseHttpContent<List<PrintItem>>(content);
                            if (verificador.Count > 0)
                            {
                                var conteudo = await response.Content.ReadAsStringAsync();
                                var cliente = new AmazonSQSClient("AKIAT2Y2IFGXOO2XHZEV", "eWdAVEPOp8kCUe6+pS0g2Pzqg4sfR/jmwaOpD4Yd", RegionEndpoint.SAEast1);
                                    var request = new SendMessageRequest
                                    {
                                        QueueUrl = "https://sqs.sa-east-1.amazonaws.com/263658678702/MinhaFila",
                                        MessageBody = conteudo,
                                        MessageAttributes = new Dictionary<string, MessageAttributeValue>
                                {
                                    {
                                        "Restaurante", new MessageAttributeValue {DataType = "String", StringValue = usuario.user.name.ToLower() }
                                    }
                                }
                                };
                                Console.WriteLine($"{verificador.Count} iten enviados");
                                await cliente.SendMessageAsync(request);
                                foreach (var item in verificador) RemoveFromQueue(item.id);
                             }
                            else Console.WriteLine("Nenhuma mensagem enviada");

                            } 
                    }while(tela.controle);
                }
            }
    }  
}

        public void RemoveFromQueue(int printId)
        {
            using (var client = new HttpClient())
            {
                InitClient(client);
                var response = client.PutAsync($"/restaurants/printers/printer-queue/{printId}/done", null).Result;
            }
        }


    }
}


