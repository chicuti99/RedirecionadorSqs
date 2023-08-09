using OrderSheet.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Net.Http;
using Newtonsoft.Json.Linq;

namespace RedirecionadorSqs.Model
{
    
    internal class GarcomDigital
    {
        private readonly String BASE_URL = "https://backend.takeat.app";

        public static string TOKEN;
        public static List<Printer> printers;
        public Usuario Login (string username, string password)
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
                            Auth usuario = Utils.ParseHttpContent<Auth>(content);
                            TOKEN = usuario.token;
                            return Utils.ParseHttpContent<Auth>(content).ToUsuario();
                        }
                        else
                        {
                            throw new Exception(response.StatusCode.ToString());
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



        public string GetOrdersForPrinterSqs(int idImpressora)
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
                            if (printItens.Count > 0) return $"Tem pedidos {printItens.Count.ToString()} na fila da impressora {idImpressora.ToString()}";
                            else return $"Não tem pedidos na fila da impressora {idImpressora.ToString()}";
                        }
                    }
                    else
                    {
                        return null;
                    }
                }
            }
        }


    }
}
