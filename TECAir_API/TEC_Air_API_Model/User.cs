using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TEC_Air_API_Model
{
    public class User
    {
        public int id { get; set; }
        public string email { get; set; }
        public string first_name { get; set; }
        public string? second_name { get; set; }
        public string first_surname { get; set; }
        public string? second_surname { get; set; }
        public int phone { get; set; }
        public string? university { get; set; }
        public int? student_id { get; set; }
        public string role_name { get; set; }
        public string password { get; set; }



    }
}
