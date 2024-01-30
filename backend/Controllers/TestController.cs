using Microsoft.AspNetCore.Mvc;

using backend.Models;
using backend.Data;

namespace backend.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class TestController : ControllerBase
    {

        private readonly DatabaseContext _context;
        private readonly ILogger<Test> _logger;

        public TestController(DatabaseContext context, ILogger<Test> logger)
        {
            _context = context;
            _logger = logger;
        }



 

        

        

        [HttpGet(Name = "GetTest")]
        public IEnumerable<Brand> Get()
        {
            IEnumerable<Brand> b = _context.Brands.ToArray();
            
            foreach(var foo in b)
            {
                Console.WriteLine("test " + foo);
            }

            return b;
            
            /*  return Enumerable.Range(1, 5).Select(index => new WeatherForecast
            {
                Date = DateOnly.FromDateTime(DateTime.Now.AddDays(index)),
                TemperatureC = Random.Shared.Next(-20, 55),
                Summary = Summaries[Random.Shared.Next(Summaries.Length)]
            })
            .ToArray(); */
        }
    }
}
