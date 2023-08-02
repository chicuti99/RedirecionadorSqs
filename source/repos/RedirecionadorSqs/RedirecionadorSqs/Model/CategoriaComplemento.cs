using System;
using System.Collections.Generic;

namespace OrderSheet.Model
{
    public class CategoriaComplemento
    {
        public string id { get; set; }
        public string nome { get; set; }
        public List<Complemento> complementos { get; set; }
    }
}
