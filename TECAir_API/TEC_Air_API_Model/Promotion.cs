using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
namespace TEC_Air_API_Model
{
    public class Promotion
    {
        [DatabaseGeneratedAttribute(DatabaseGeneratedOption.Identity), Key]
        public int promotion_code { get; set; }
        public string description { get; set; }
        public string title { get; set; }
        public int day { get; set; }
        public int month { get; set; }
        public int year { get; set; }
        public int discount { get; set; }
    }
}
