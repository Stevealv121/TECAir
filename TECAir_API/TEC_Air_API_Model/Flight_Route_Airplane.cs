using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TEC_Air_API_Model
{
    public class Flight_Route_Airplane
    {
        public int id { get; set; }
        public int boarding_gate { get; set; }
        public int price { get; set; }
        public bool status { get; set; }
        public int route_code { get; set; }
        public string airplane_plate { get; set; }
        public string origin { get; set; }
        public string destination { get; set; }
        public int year { get; set; }
        public int month { get; set; }
        public int day { get; set; }
        public int hours { get; set; }
        public string minutes { get; set; }
        public string model { get; set; }
    }
}
