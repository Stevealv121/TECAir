namespace API.Models
{
    public class Route
    {
        public int route_code { get; set; }
        public string origin { get; set; }
        public string destination { get; set; }
        public List<string> stopovers { get; set; }
        public int day { get; set; }
        public int month { get; set; }
        public int year { get; set; }
        public int hours { get; set; }
        public int minutes { get; set; }
    }
}
