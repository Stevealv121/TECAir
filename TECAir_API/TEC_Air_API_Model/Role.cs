using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
namespace TEC_Air_API_Model
{
    /// <summary>
    /// Entity model for roles
    /// </summary>
    public class Role
    {
        [Key]
        public string name { get; set; }
        public string description { get; set; }
    }
}
