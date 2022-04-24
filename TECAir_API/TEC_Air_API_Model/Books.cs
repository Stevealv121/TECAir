using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace TEC_Air_API_Model
{
    /// <summary>
    /// Relatioship model between user and flight
    /// </summary>
    [Keyless]
    public class Books
    {
        [ForeignKey("User")]
        public int user_id { get; set; }
        [ForeignKey("Flight")]
        public int flight_id { get; set; }
        public Flight? flight { get; set; }
        public User? user { get; set; }

    }
}
