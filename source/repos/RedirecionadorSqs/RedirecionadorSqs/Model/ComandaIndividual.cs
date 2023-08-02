using System;
using System.Collections.Generic;
using OrderSheet.Model;
public class ComandaIndividual
{
    public string Id { get; set; }
    public string mesa { get; set; }
    public string datafechamento { get; set; }
    public string nomerestaurante { get; set;}
    public string nomecliente { get; set;}
    public List<ItemPedido> itens { get; set; }
    public double total { get; set; }
    public double totalpedido { get; set; }
}
