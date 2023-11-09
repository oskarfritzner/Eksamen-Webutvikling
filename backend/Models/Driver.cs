using System.Collections.Generic;

namespace backend.Models
{
    public class Driver
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int Age { get; set; }
        public string Nationality { get; set; }
        public string Image { get; set; } // Path or URL to the image of the person
    }
}

