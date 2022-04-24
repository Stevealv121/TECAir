using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;

namespace TEC_Air_API_Model
{
    public class Airplane
    {
        [Key]
        public string plate { get; set; }
        public string model { get; set; }
    }
}
