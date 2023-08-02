using System;

public class ObservacaoItemPedido
{
	public string obs { get; set; }

	public ObservacaoItemPedido (string obs)
	{
		this.obs = $"Obs: {obs}";
	}
}
