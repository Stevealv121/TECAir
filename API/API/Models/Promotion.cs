namespace API.Models
{
    public class Promotion
    {
        public int promotion_code { get; set; }
        public int discount { get; set; }
        public int day { get; set; }
        public int month { get; set; }
        public int year { get; set; }
    }
}
