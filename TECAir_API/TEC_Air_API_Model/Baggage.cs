using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
namespace TEC_Air_API_Model
{
    public class Baggage
    {
        [Key]
        public int id { get; set; }
        public string color { get; set; }
        public int weight { get; set; }

    }
}
