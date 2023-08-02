using System;
using System.Collections.Generic;
using OrderSheet.Model;

public class NovoPedido
{
    
        public int id { get; set; }
        public int tamanho { get; set; }

        public static bool ItemNull { get; set; } = false;

        public String numero { get; set; }
        public String mesa { get; set; }
        public String hora { get; set; }
        public String nomeCliente { get; set; } //input_client
        public String telefoneCliente { get; set; }
        public String situacao { get; set; }
        public double total { get; set; }
        public double totalServicos { get; set; }
        public List<ItemPedido> itens { get; set; }
        public bool isEntrega { get; set; }
        public string DescricaoEntrega { get; set; }
        public string NomeRestaurante { get; set; } //restaurant_name
        public string TipoPedido { get; set; } //order_type
        public string MesaOrComanda { get; set; } // table_type
        // public bool HaveComplements
        // {
        //     get { return itens != null && itens.Any(item => item.HaveComplements); }
        // }

        // public bool HaveObs
        // {
        //     get { return itens != null && itens.Any(item => item.HaveObs); }
        // }




        public static string MetodoPagamento { get; set; }
        public string GetNomeClienteFormatado
        {
            get
            {
                if (!String.IsNullOrEmpty(nomeCliente))
                {
                    return $"Cliente: " + nomeCliente;
                }
                return "";
            }
        }
        public string NomeGarcom { get; set; } //input_waiter
        public string GetNomeGarcomFormatado
        {
            get
            {
                if (!String.IsNullOrEmpty(NomeGarcom))
                {

                    return $"Garçom: " + NomeGarcom;
                }
                return "";
            }
        }
        public string Order_Type { get; set; }//


        // public List<ItemPedido> GetItensFormatados()
        // {
        //     if (itens?.Count > 0)
        //     {
        //         itens.ForEach(it => { it.ShowHeader = false; });

        //         itens[0].ShowHeader = true;
        //         return itens;
        //     }

        //     else NovoPedido.ItemNull = false;
        //     return new List<ItemPedido>();
        // }
    }

