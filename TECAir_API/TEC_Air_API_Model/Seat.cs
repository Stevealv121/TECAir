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
    /// Entity model for airplane seats
    /// </summary>
    public class Seat
    {
        [Key]
        public int id { get; set; }
        public string description { get; set; }
        public bool state { get; set; }
        [ForeignKey("User")]
        public int user_id { get; set; }
        [ForeignKey("Airplane")]
        public string airplane_plate { get; set; }
        public User? User { get; set; }
        public Airplane? Airplane { get; set; }


    }
}
