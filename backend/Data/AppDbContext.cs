using Microsoft.EntityFrameworkCore;
using backend.Models;

namespace backend.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
        {
        }

        public DbSet<Driver> Drivers { get; set; }
        public DbSet<Team> Teams { get; set; }
        public DbSet<Race> Races { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            // If you're not configuring any relationships, this method can be empty
            // But you still need to call the base method
            base.OnModelCreating(modelBuilder);

            // No further configuration is necessary since there are no relationships
        }
    }
}
