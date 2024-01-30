using backend.Data;
using backend.Models;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);


//using DatabaseContext context = new DatabaseContext();

/* Example adding to database with dbcontext object
Brand versace = new Brand()
{
    //Id = 1,  cant insert explicit value, this is primary key autogen i think
    Name = "Versace"
};
Brand lovehate = new Brand()
{
    //Id = 1,  cant insert explicit value, this is primary key autogen i think
    Name = "LoveHate"
};
Brand gucci = new Brand()
{
    //Id = 1,  cant insert explicit value, this is primary key autogen i think
    Name = "Gucci"
};
Brand patek = new Brand()
{
    //Id = 1,  cant insert explicit value, this is primary key autogen i think
    Name = "Patek"
};
context.Brands.Add(versace);
context.Brands.Add(lovehate);
context.Brands.Add(gucci);
context.Brands.Add(patek);
context.SaveChanges();
*/


/*var brands = context.Brands.Where(x => x.Name.Length < 6).OrderBy(x => x.Name);

Console.WriteLine("Tersely named brands\n");
foreach(var brand in brands)
{
    Console.WriteLine($"Brand Id : {brand.Id}");
    Console.WriteLine($"Brand Name : {brand.Name}");
}*/



// Creates a builder and does some MODEL VIEW CONTROLLER (MVC) related stuff

builder.Services.AddCors(); //Here we add COR's, which stands for Cross Origin Resource Sharing, which acts as middleware between front and backend

/*
DatabaseContext context2 = new DatabaseContext();
 builder.Services.AddDbContext<DatabaseContext>(options =>
   options.UseSqlServer(Configuration.GetConnectionString("DefaultConnection")));*/



var connectionString = "Data Source=bikestoresdemo.database.windows.net;Database=BikeStores;Integrated Security=false;User ID=DTAdmin;Password=SupremeAdmins4028;";
//the golden line that ties everything together , dependency injection container
builder.Services.AddDbContext<DatabaseContext>(x => x.UseSqlServer(connectionString));




builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.UseCors(builder => builder.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader());  //This enables CORS for everywhere I think, good for us, bad for big project


app.MapControllers();

app.Run();
