using Microsoft.AspNetCore.Mvc;
using backend.Models;
using backend.Data;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using System.Linq;

namespace backend.Controllers
{
    /// <summary>
    /// Controller for managing F1 drivers in the system
    /// </summary>
    [ApiController]
    [Route("[controller]")]
    public class DriversController : ControllerBase
    {
        private readonly AppDbContext _context;

        /// <summary>
        /// Initializes a new instance of the DriversController
        /// </summary>
        /// <param name="context">The database context</param>
        public DriversController(AppDbContext context)
        {
            _context = context;
        }

        /// <summary>
        /// Gets all F1 drivers
        /// </summary>
        /// <returns>A list of all F1 drivers</returns>
        /// <response code="200">Returns the list of drivers</response>
        [HttpGet]
        [ProducesResponseType(StatusCodes.Status200OK)]
        public async Task<ActionResult<IEnumerable<Driver>>> GetDrivers()
        {
            return await _context.Drivers.ToListAsync();
        }

        /// <summary>
        /// Gets a specific F1 driver by their ID
        /// </summary>
        /// <param name="id">The ID of the driver to retrieve</param>
        /// <returns>The requested driver</returns>
        /// <response code="200">Returns the requested driver</response>
        /// <response code="404">If the driver is not found</response>
        [HttpGet("{id}")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public async Task<ActionResult<Driver>> GetDriver(int id)
        {
            var driver = await _context.Drivers.FindAsync(id);
            if (driver == null)
            {
                return NotFound();
            }
            return driver;
        }

        /// <summary>
        /// Creates a new F1 driver
        /// </summary>
        /// <param name="driver">The driver information to create</param>
        /// <returns>The created driver</returns>
        /// <response code="201">Returns the newly created driver</response>
        /// <response code="400">If the driver data is invalid</response>
        [HttpPost]
        [ProducesResponseType(StatusCodes.Status201Created)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public async Task<ActionResult<Driver>> PostDriver(Driver driver)
        {
            _context.Drivers.Add(driver);
            await _context.SaveChangesAsync();
            return CreatedAtAction(nameof(GetDriver), new { id = driver.Id }, driver);
        }

        /// <summary>
        /// Updates an existing F1 driver
        /// </summary>
        /// <param name="id">The ID of the driver to update</param>
        /// <param name="driverUpdate">The updated driver information</param>
        /// <returns>No content if successful</returns>
        /// <response code="204">If the driver was successfully updated</response>
        /// <response code="400">If the ID in the URL doesn't match the body</response>
        /// <response code="404">If the driver is not found</response>
        [HttpPut("{id}")]
        [ProducesResponseType(StatusCodes.Status204NoContent)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
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

        /// <summary>
        /// Deletes a specific F1 driver
        /// </summary>
        /// <param name="id">The ID of the driver to delete</param>
        /// <returns>No content if successful</returns>
        /// <response code="204">If the driver was successfully deleted</response>
        /// <response code="404">If the driver is not found</response>
        [HttpDelete("{id}")]
        [ProducesResponseType(StatusCodes.Status204NoContent)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
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

        private bool DriverExists(int id)
        {
            return _context.Drivers.Any(e => e.Id == id);
        }
    }
}
