using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
namespace TEC_Air_API_Model
{
    /// <summary>
    /// Entity model for users
    /// </summary>
    public class User
    {
        [Key]
        public int id { get; set; }
        public string email { get; set; }
        public string first_name { get; set; }
        public string? second_name { get; set; }
        public string first_surname { get; set; }
        public string? second_surname { get; set; }
        public int phone { get; set; }
        public string? university { get; set; }
        public int? student_id { get; set; }
        [ForeignKey("Role")]
        public string role_name { get; set; }
        public string password { get; set; }
        public Role? Role { get; set; }



    }
}
