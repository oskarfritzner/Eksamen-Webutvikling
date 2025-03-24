using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

/* Driver table */

namespace backend.Models
{
    /// <summary>
    /// Represents a Formula 1 driver in the system
    /// </summary>
    public class Driver
    {
        /// <summary>
        /// The unique identifier for the driver
        /// </summary>
        public int Id { get; set; }

        /// <summary>
        /// The full name of the driver
        /// </summary>
        /// <example>Max Verstappen</example>
        [Required]
        [StringLength(100)]
        public string Name { get; set; } = string.Empty;

        /// <summary>
        /// The age of the driver
        /// </summary>
        /// <example>26</example>
        [Range(16, 100)]
        public int Age { get; set; }

        /// <summary>
        /// The nationality of the driver
        /// </summary>
        /// <example>Dutch</example>
        [Required]
        [StringLength(50)]
        public string Nationality { get; set; } = string.Empty;

        /// <summary>
        /// The URL to the driver's profile image
        /// </summary>
        /// <example>/images/drivers/max-verstappen.jpg</example>
        [Required]
        [Url]
        public string Image { get; set; } = string.Empty;

        /// <summary>
        /// Creates a new instance of the Driver class with default values
        /// </summary>
        public Driver()
        {
            Name = string.Empty;
            Nationality = string.Empty;
            Image = string.Empty;
            Age = 0;
        }
    }
}

