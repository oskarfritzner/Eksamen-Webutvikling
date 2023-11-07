public class Team
{
    public int Id { get; set; }
    public string Manufacturer { get; set; } // e.g., Ferrari
    public string Image { get; set; } // Path to the image of the car
    public int Driver1Id { get; set; } // Assuming this is a foreign key to a Driver
    public int Driver2Id { get; set; } // Assuming this is a foreign key to a Driver
    public Driver Driver1 { get; set; }
    public Driver Driver2 { get; set; }
}