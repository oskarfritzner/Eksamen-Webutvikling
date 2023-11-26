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
    public class DriversController : ControllerBase
    {
        private readonly AppDbContext _context;

        public DriversController(AppDbContext context)
        {
            _context = context;
        }

        // GET: api/drivers - Get all drivers
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Driver>>> GetDrivers()
        {
            return await _context.Drivers.ToListAsync();
        }

        // GET: api/drivers/{id} - Get a specific driver by ID
        [HttpGet("{id}")]
        public async Task<ActionResult<Driver>> GetDriver(int id)
        {
            var driver = await _context.Drivers.FindAsync(id);
            if (driver == null)
            {
                return NotFound();
            }
            return driver;
        }

        // POST: api/drivers - Add a new driver
        [HttpPost]
        public async Task<ActionResult<Driver>> PostDriver(Driver driver)
        {
            _context.Drivers.Add(driver);
            await _context.SaveChangesAsync();
            return CreatedAtAction(nameof(GetDriver), new { id = driver.Id }, driver);
        }

        // PUT: api/drivers/{id} - Update a driver
        [HttpPut("{id}")]
        public async Task<IActionResult> PutDriver(int id, [FromBody] Driver driverUpdate)
        {
            if (id != driverUpdate.Id)
            {
                return BadRequest();
            }

            _context.Entry(driverUpdate).State = EntityState.Modified;
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!DriverExists(id))
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

        // DELETE: api/drivers/{id} - Delete a driver
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteDriver(int id)
        {
            var driver = await _context.Drivers.FindAsync(id);
            if (driver == null)
            {
                return NotFound();
            }
            _context.Drivers.Remove(driver);
            await _context.SaveChangesAsync();
            return NoContent();
        }

        // Check if a Driver exists
        private bool DriverExists(int id)
        {
            return _context.Drivers.Any(e => e.Id == id);
        }
    }
}
