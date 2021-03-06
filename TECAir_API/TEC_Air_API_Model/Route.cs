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
    /// Entity model for routes
    /// </summary>
    public class Route
    {
        [DatabaseGeneratedAttribute(DatabaseGeneratedOption.Identity), Key]
        public int route_code { get; set; }
        public string origin { get; set; }
        public string destination { get; set; }
        public int year { get; set; }
        public int month { get; set; }
        public int day { get; set; }
        public int hours { get; set; }
        public string minutes { get; set; }

    }
}
