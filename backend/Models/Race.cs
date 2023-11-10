namespace backend.Models
{
    public class Race
    {
        public int Id { get; set; }
        public string Winner { get; set; }
        public string WinnerTime { get; set; } // Changed to string
        public string GrandPrix { get; set; }
        public int NumberOfLaps { get; set; }
    }
}
