namespace backend.Models
{
    public class Race
    {
        public int Id { get; set; }
        public TimeSpan WinnerTime { get; set; } // TimeSpan is typically used for time durations
        public string GrandPrix { get; set; } // Name or location of the Grand Prix
        public int NumberOfLaps { get; set; }

        // Foreign key to associate the winning driver
        public int WinnerId { get; set; }
        // Navigation property for the winning driver
        public Driver Winner { get; set; }
    }
}
