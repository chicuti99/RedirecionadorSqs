using OrderSheet.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection.Metadata;
using System.Text;
using System.Threading.Tasks;

namespace RedirecionadorSqs.Model
{
    public class Auth
    {
        public User user { get; set; }
        public string token { get; set; }

        public Usuario ToUsuario()
        {
            var usuario = new Usuario();
            usuario.usuario = user.email;
            usuario.admin = user.admin;
            usuario.token = token;
            usuario.NomeRestaurante = user.fantasy_name;
            return usuario;
        }
    }
}
