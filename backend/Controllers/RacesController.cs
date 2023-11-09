using Microsoft.AspNetCore.Mvc;
using backend.Models;
using backend.Data;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using System.Linq;


namespace backend.Controllers {

[ApiController]
[Route("[controller]")]

public class RacesController : ControllerBase
{
    private readonly AppDbContext _context;

    public RacesController(AppDbContext context)
    {
        _context = context;
    }

    // GET: api/races
    // Retrieves all races, including the winner's details.
    [HttpGet]
    public async Task<ActionResult<IEnumerable<Race>>> GetRaces()
    {
        // Includes Winner navigation property in the query to fetch race winner details.
        return await _context.Races.Include(r => r.Winner).ToListAsync();
    }

    // GET: api/races/5
    // Retrieves a single race by ID, including the winner's details.
    [HttpGet("{id}")]
    public async Task<ActionResult<Race>> GetRace(int id)
    {
        // Finds a single race including Winner details where the race ID matches.
        var race = await _context.Races.Include(r => r.Winner).SingleOrDefaultAsync(r => r.Id == id);

        if (race == null)
        {
            // If not found, return 404 Not Found.
            return NotFound();
        }

        // If found, return the race.
        return race;
    }

    // POST: api/races
    // Creates a new race.
    [HttpPost]
    public async Task<ActionResult<Race>> PostRace(Race race)
    {
        // Add the race to the database context.
        _context.Races.Add(race);
        // Save the changes asynchronously.
        await _context.SaveChangesAsync();

        // Return a 201 Created response, with a route to the new race.
        return CreatedAtAction(nameof(GetRace), new { id = race.Id }, race);
    }

    // PUT: api/races/5
    // Updates an existing race.
    [HttpPut("{id}")]
    public async Task<IActionResult> PutRace(int id, Race race)
    {
        if (id != race.Id)
        {
            // If the ID doesn't match, return 400 Bad Request.
            return BadRequest();
        }

        // Mark the entity as modified.
        _context.Entry(race).State = EntityState.Modified;

        try
        {
            // Attempt to save changes asynchronously.
            await _context.SaveChangesAsync();
        }
        catch (DbUpdateConcurrencyException)
        {
            if (!RaceExists(id))
            {
                // If the race doesn't exist, return 404 Not Found.
                return NotFound();
            }
            else
            {
                // If there's another issue, rethrow the exception.
                throw;
            }
        }

        // If successful, return 204 No Content.
        return NoContent();
    }

    // DELETE: api/races/5
    // Deletes a race.
    [HttpDelete("{id}")]
    public async Task<IActionResult> DeleteRace(int id)
    {
        var race = await _context.Races.FindAsync(id);
        if (race == null)
        {
            // If not found, return 404 Not Found.
            return NotFound();
        }

        // Remove the race from the database context.
        _context.Races.Remove(race);
        // Save the changes asynchronously.
        await _context.SaveChangesAsync();

        // If successful, return 204 No Content.
        return NoContent();
    }

    // Helper method to check if a race exists.
    private bool RaceExists(int id)
    {
        // Check if any race matches the provided ID.
        return _context.Races.Any(e => e.Id == id);
    }
}

}
