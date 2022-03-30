namespace API.Models
{
    public class Flight
    {
        public int id { get; set; }
        public int boarding_gate { get; set; }
        public int price { get; set; }
        public string status { get; set; }
        public Route route { get; set; }
        public Airplane airplane { get; set; }
        public Promotion promotions { get; set; }



    }
}
