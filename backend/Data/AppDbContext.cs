using Microsoft.EntityFrameworkCore;
using backend.Models;
using System.Text.Json;
using System.Collections.Generic;

namespace backend.Data
{
    // AppDbContext class inherits from DbContext, representing a session with the database.
    public class AppDbContext : DbContext
    {
        // Constructor accepting DbContextOptions and passing it to the base DbContext class.
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
        {
        }

        // DbSet properties representing tables in the database.
        public DbSet<Driver> Drivers { get; set; }
        public DbSet<Team> Teams { get; set; }
        public DbSet<Race> Races { get; set; }
        public DbSet<Question> Questions { get; set; }
        public DbSet<Participant> Participants { get; set; }

        // Method to configure the model objects.
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            // Configures JSON serialization for the Answers property in Question.
            // This is useful for storing complex properties (like lists) in a single database column.
            modelBuilder.Entity<Question>()
                .Property(q => q.Answers)
                .HasConversion(
                    v => JsonSerializer.Serialize(v, (JsonSerializerOptions)null),
                    v => JsonSerializer.Deserialize<List<string>>(v, (JsonSerializerOptions)null));
        }
    }
}
