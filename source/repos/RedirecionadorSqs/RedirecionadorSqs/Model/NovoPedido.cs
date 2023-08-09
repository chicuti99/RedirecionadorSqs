using System;
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

}