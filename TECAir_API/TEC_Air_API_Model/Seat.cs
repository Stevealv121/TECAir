using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TEC_Air_API_Model
{
    public class Seat
    {
        public int id { get; set; }
        public string description { get; set; }
        public bool state { get; set; }
        public int user_id { get; set; }
        public string airplane_plate { get; set; }


    }
}
