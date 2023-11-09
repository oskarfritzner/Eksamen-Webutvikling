using System.Collections.Generic;

namespace backend.Models
{
    public class Driver
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int Age { get; set; }
        public string Nationality { get; set; }
        public string Image { get; set; } // Path to the image of the person

        // New properties
        public int? TeamId { get; set; } // Nullable if a driver might not belong to a team
        public Team Team { get; set; }

        // Collection of races won by the driver
        public ICollection<Race> RacesWon { get; set; } = new List<Race>();
    }
}
