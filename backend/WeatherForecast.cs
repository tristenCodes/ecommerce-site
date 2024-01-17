namespace backend
{
    /*
     
     Dyl's documentation - The default template made this bullshit, use it as a point of study, ask ChatGPT about getters and setters in c#
     
     */
    public class WeatherForecast
    {
        public DateOnly Date { get; set; }

        public int TemperatureC { get; set; }

        public int TemperatureF => 32 + (int)(TemperatureC / 0.5556);

        public string? Summary { get; set; }
    }
}
