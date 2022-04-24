using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace TEC_Air_API_Model
{
    [Keyless]
    public class AppliesTo
    {
        [ForeignKey("Promotion")]
        public int promotion_code { get; set; }
        [ForeignKey("Flight")]
        public int flight_id { get; set; }
        public int final_price { get; set; }
        public Promotion? Promotion { get; set; }
        public Flight? Flight { get; set; }
    }
}
