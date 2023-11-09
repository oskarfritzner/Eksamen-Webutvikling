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
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<Team>()
                .HasMany(t => t.Drivers)
                .WithOne()
                .HasForeignKey(d => d.TeamId) // Assuming there's a TeamId foreign key in the Driver model
                .OnDelete(DeleteBehavior.Restrict); // Prevent cascade delete

            modelBuilder.Entity<Race>()
                .HasOne(r => r.Winner)
                .WithOne()
                .HasForeignKey<Race>(r => r.WinnerId)
                .OnDelete(DeleteBehavior.Restrict); // Prevent cascade delete if a winner is deleted

            // Add any additional model configuration here
        }
    }
}
