using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TEC_Air_API_Model
{
    public class Flight
    {
        public int id { get; set; }
        public int boarding_gate { get; set; }
        public int price { get; set; }
        public bool status { get; set; }
        public int route_code { get; set; }
        public string airplane_plate { get; set; }

    }
}
