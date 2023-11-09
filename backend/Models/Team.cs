namespace backend.Models
{
    public class Team
    {
        public int Id { get; set; }
        public string Manufacturer { get; set; } // e.g., Ferrari
        public string Image { get; set; } // Path to the image of the car
    }
}
