using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace TEC_Air_API_Model
{
    /// <summary>
    /// Relationship model between baggage, user and flight
    /// </summary>
    [Keyless]
    public class Has
    {
        [ForeignKey("Baggage")]
        public int baggage_id { get; set; }
        [ForeignKey("User")]
        public int user_id { get; set; }
        public int price { get; set; }
        [ForeignKey("Flight")]
        public int flight_id { get; set; }
        public Flight? Flight { get; set; }
        public Baggage? Baggage { get; set; }
        public User? User { get; set; }

    }
}
