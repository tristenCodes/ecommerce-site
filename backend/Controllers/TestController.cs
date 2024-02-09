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



        /*
        [Route("Test/Extra/{id?}")]
        public IActionResult ReturnData(int id )
        {
            Console.WriteLine($"received id ${id}");
            return (IActionResult)ControllerContext.RouteData;
        }
        */



        [HttpGet("{id}")]
        public IEnumerable<Brand> Get(int id)
        {
            //was IEnumerable<Brand>
            Console.WriteLine($"Received id with value {id}");

            IEnumerable<Brand> b = _context.Brands.ToArray();
           // Console.WriteLine("received name is " + Name);
            foreach(var foo in b)
            {
                Console.WriteLine("test " + foo.ToString());
            }

            return b;
            
           
        }
    }
}
