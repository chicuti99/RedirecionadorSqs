using System;
using System.Collections.Generic;

public class Mesa
{
	public string mesa { get; set; }
	public int tamanho { get; set; }	
	public string comanda { get; set; }
	public string datafechamento { get; set; }
	public string nomerestaurante { get; set; }
	public double TaxaDeServico { get; set; }
	public double totalmesa { get; set; }
	public double totalpago { get; set; }
	public double totalrestante { get; set; }
	public int numeroclientes { get; set; }
	public double discount_total { get; set; }
	public List<NovoPedido> pedidospendentes { get; set; }
	public List<NovoPedido> pedidosfechados {get; set; }
}
