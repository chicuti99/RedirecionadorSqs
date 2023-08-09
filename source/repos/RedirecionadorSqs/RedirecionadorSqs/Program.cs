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

        public static void  Main()
        {
            //Console.WriteLine("Digite seu login ");
            //string login = Console.ReadLine();
            //Console.WriteLine("\nDigite sua senha ");
            //string senha = Console.ReadLine();

            var garcom = new GarcomDigital();
            garcom.Login("foodies@foodies.com", "123456");
            List<Printer> printers = garcom.GetAvaliablePrinters();
            do
            {
                foreach (var printer in printers)
                {
                    Console.WriteLine(garcom.GetOrdersForPrinterSqs(printer.id) + "\n");

                }
                Thread.Sleep(1000);
            } while (true);
            Console.ReadKey();

        }
    }
}