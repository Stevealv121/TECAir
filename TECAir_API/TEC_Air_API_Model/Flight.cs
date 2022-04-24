using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
namespace TEC_Air_API_Model
{
    public class Flight
    {
        [Key]
        public int id { get; set; }
        public int boarding_gate { get; set; }
        public int price { get; set; }
        public bool status { get; set; }
        [ForeignKey("Route")]
        public int route_code { get; set; }
        [ForeignKey("Airplane")]
        public string airplane_plate { get; set; }
        public string duration  { get; set; }
        public Route? Route { get; set; }
        public Airplane? Airplane { get; set; }
    }
}
