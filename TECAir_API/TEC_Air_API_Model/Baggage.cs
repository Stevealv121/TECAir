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
    /// Entity model for baggage
    /// </summary>
    public class Baggage
    {
        [DatabaseGeneratedAttribute(DatabaseGeneratedOption.Identity),Key]
        public int id { get; set; }
        public string color { get; set; }
        public int weight { get; set; }

    }
}
