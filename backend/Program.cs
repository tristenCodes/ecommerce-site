var builder = WebApplication.CreateBuilder(args);

// Creates a builder and does some MODEL VIEW CONTROLLER (MVC) related stuff

builder.Services.AddCors(); //Here we add COR's, which stands for Cross Origin Resource Sharing, which acts as middleware between front and backend

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
