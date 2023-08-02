using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RedirecionadorSqs.Model
{
    public class User
    {
        public int id {  get; set; }    
        public string name { get; set; }
        public string fantasy_name { get; set; }
        public string email { get; set; }
        public bool admin { get; set; }
        public bool opened { get; set; }
        public string phone { get; set; }
        public bool has_service_tax { get; set; }

    }
}
