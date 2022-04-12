using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TEC_Air_API_Model
{
    public class Promotion
    {
        public int promotion_code { get; set; }
        public string description { get; set; }
        public string title { get; set; }
        public int day { get; set; }
        public int month { get; set; }
        public int year { get; set; }
        public int discount { get; set; }
    }
}
