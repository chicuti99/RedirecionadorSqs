using System;
using System.IO;
using Newtonsoft.Json;
using RedirecionadorSqs.Model;

namespace Login
{
    class Tela_Login
    {
        public string Login { get; set; }
        public string senha { get; set; }
        public bool controle = true;
        public static void  Main()
        {
            bool Continue = false;
           var tela = new Tela_Login();
            var garcom = new GarcomDigital();

            do
            {
                Console.WriteLine("Digite seu login ");
                string login = Console.ReadLine();
                Console.WriteLine("\nDigite sua senha ");
                string senha = Console.ReadLine();
                Continue = garcom.Login(login, senha);
                Console.Clear();

            } while (!Continue);

            Console.WriteLine($"Selecione a opção desejada \n1 para ver a lista de impressoras e seus pedidos\n2 para SQS\n3 a qualquer momento para encerrar");
            var opcao = Console.ReadLine();
            switch(opcao)
            {
                case "1":
                    tela.GetPrinters();
                    break;
                case "2":
                    garcom.SendMessageSqs(21);
                    break;
            }
            

        }

        public void GetPrinters()
        {
            var garcom = new GarcomDigital();
            List<Printer> printers = garcom.GetAvaliablePrinters();
            Task.Run(() => GetControle());
            do
            {
                
                foreach (var printer in printers)
                {
                    Console.WriteLine($"{garcom.GetOrdersForPrinterSqs(printer.id,printer.name
                        )} \n");
                }
                Thread.Sleep(1000);

            } while (controle);
        }


        public void GetControle()
        {
            while(controle)
            {
                var key = Console.ReadKey(intercept: true);
                if(key.KeyChar == '3')
                {
                    controle = false;
                }
            }
        }
    }
}