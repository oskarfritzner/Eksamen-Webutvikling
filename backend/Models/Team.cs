namespace backend.Models
{
    public class Team
    {
        public int Id { get; set; }
        public string Manufacturer { get; set; } // e.g., Ferrari
        public string Image { get; set; } // Path to the image of the car

        // Assuming a team can have up to 5 drivers
        public ICollection<Driver> Drivers { get; set; } = new List<Driver>();
    }
}
