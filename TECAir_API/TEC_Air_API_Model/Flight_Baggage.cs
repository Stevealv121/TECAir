using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TEC_Air_API_Model
{
    public class Flight_Baggage
    {
        public int user_id { get; set; }
        public int baggage_id { get; set; }
        public string first_name { get; set; }
        public string? second_name { get; set; }
        public string first_surname { get; set; }
        public string? second_surname { get; set; }
        public int price { get; set; }
    }
}
