namespace backend.Models
{
    public class Race
    {
    public int Id { get; set; }
    public string Winner { get; set; }
    public TimeSpan WinnerTime { get; set; } // TimeSpan is suitable for time durations
    public string GrandPrix { get; set; } // The country or location where the race took place
    public int NumberOfLaps { get; set; }

    }
}
