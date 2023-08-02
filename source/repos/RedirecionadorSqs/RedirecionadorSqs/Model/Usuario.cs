using System;

namespace OrderSheet.Model
{
    public class Usuario
    {
        public string usuario { get; set; }
        public string senha { get; set; }
        public bool admin { get; set; }
        public string token { get; set; }
        public string NomeRestaurante { get; set; }
        public DateTime ultimologin { get; set; }

    }

}