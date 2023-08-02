using System;

public class ObjetoImpressao
{
	public int id {  get; set; }
	public TipoImpressao tipo { get; set; }
	public NovoPedido pedido { get; set; }
	public Mesa mesa { get ; set; }
	public ComandaIndividual comanda { get; set; }
}
