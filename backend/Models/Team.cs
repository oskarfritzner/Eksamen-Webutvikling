
/* Team table */

namespace backend.Models
{
    public class Team
    {
        public int Id { get; set; }
        public string Manufacturer { get; set; }
        public string Image { get; set; }
        public string? Driver1 { get; set; } // ? letting it be nullable
        public string? Driver2 { get; set; } // also nullable
    }
}
