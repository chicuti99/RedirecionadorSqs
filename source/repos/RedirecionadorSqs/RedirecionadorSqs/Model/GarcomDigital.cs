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

        private string _token;
        public string TOKEN;

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
                            Console.WriteLine(content);
                            Console.WriteLine(Utils.ParseHttpContent<Auth>(content).ToUsuario().ToString());
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
    }
}
