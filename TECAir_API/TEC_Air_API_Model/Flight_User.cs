using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TEC_Air_API_Model
{
    /// <summary>
    /// Join model beetween Flight and User
    /// </summary>
    public class Flight_User
    {
        public int user_id { get; set; }
        public string first_name { get; set; }
        public string? second_name { get; set; }
        public string first_surname { get; set; }
        public string? second_surname { get; set; }
    }
}
