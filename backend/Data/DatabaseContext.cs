using backend.Models;

using Microsoft.EntityFrameworkCore;
namespace backend.Data;

public class DatabaseContext : DbContext
{
    public DbSet<Brand> Brands { get; set; } = null!;

    public DatabaseContext(DbContextOptions<DatabaseContext> options) : base(options)
    {
        Console.WriteLine("t");
    }


    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
        /*writing the connection string openly is bad
         * practice, typically use a secret or env var or some shi
        */
        optionsBuilder.UseSqlServer(@"Data Source=bikestoresdemo.database.windows.net;Database=BikeStores;Integrated Security=false;User ID=DTAdmin;Password=SupremeAdmins4028;");
    }
}