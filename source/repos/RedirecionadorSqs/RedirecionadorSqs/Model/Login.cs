using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RedirecionadorSqs.Model
{
    
    public class Login
    {
        public String email { get; set; }
        public String password { get; set; }

        public Login(string email, string password)
        {
            this.email = email;
            this.password = password;
        }
    }
}
