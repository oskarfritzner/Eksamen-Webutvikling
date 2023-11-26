using Microsoft.AspNetCore.Mvc;
using backend.Models;
using backend.Data;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using System.Linq;

namespace backend.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class RacesController : ControllerBase
    {
        private readonly AppDbContext _context;

        public RacesController(AppDbContext context)
        {
            _context = context;
        }

        // Retrieves all races
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Race>>> GetRaces()
        {
            return await _context.Races.ToListAsync();
        }

        // Retrieves a specific race by ID
        [HttpGet("{id}")]
        public async Task<ActionResult<Race>> GetRace(int id)
        {
            var race = await _context.Races.FindAsync(id);
            if (race == null)
            {
                return NotFound();
            }
            return race;
        }

        // Adds a new race
        [HttpPost]
        public async Task<ActionResult<Race>> PostRace(Race race)
        {
            _context.Races.Add(race);
            await _context.SaveChangesAsync();
            return CreatedAtAction(nameof(GetRace), new { id = race.Id }, race);
        }

        // Updates an existing race
        [HttpPut("{id}")]
        public async Task<IActionResult> PutRace(int id, Race race)
        {
            if (id != race.Id)
            {
                return BadRequest();
            }
            _context.Entry(race).State = EntityState.Modified;
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!RaceExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }
            return NoContent();
        }

        // Deletes a race
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteRace(int id)
        {
            var race = await _context.Races.FindAsync(id);
            if (race == null)
            {
                return NotFound();
            }
            _context.Races.Remove(race);
            await _context.SaveChangesAsync();
            return NoContent();
        }

        // Checks if a Race exists
        private bool RaceExists(int id)
        {
            return _context.Races.Any(e => e.Id == id);
        }
    }
}
