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
    /// Model for flight stopovers
    /// </summary>
    [Keyless]
    public class Flight_Stopover
    {
        [ForeignKey("Flight")]
        public int flight_id { get; set; }
        public string stopover { get; set; }
        public Flight? Flight { get; set; }


    }
}
