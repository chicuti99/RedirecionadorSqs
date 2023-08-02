using System;
using System.Collections.Generic;
using OrderSheet.Model;

namespace OrderSheet.Model
{
    public class  ItemPedido
    {
        public int id { get; set; }
        public string quantidade { get; set; }
        public string descricao { get; set; }
        public double total { get; set; }
        public List<CategoriaComplemento> categoriacomplemento { get; set; }
        public ObservacaoItemPedido observacao { get; set; }
        public bool showheader { get; set; }

        // public bool HaveComplements
        // {
        //     get { return CategoriaComplemento != null && CategoriaComplemento.Any(); }
        // }

        public bool HaveObs
        {
            get { return observacao != null; }
        }
    }
}
