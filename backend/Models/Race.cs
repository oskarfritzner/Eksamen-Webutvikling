public class Race
{
    public int Id { get; set; }
    public string WinnerName { get; set; }
    public TimeSpan WinnerTime { get; set; } // TimeSpan is typically used for time durations
    public string GrandPrix { get; set; } // Country where the race took place
    public int NumberOfLaps { get; set; }
}