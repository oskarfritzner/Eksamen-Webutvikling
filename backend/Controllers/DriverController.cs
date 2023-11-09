using Microsoft.AspNetCore.Mvc;
using backend.Models;
using backend.Data;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace backend.Controllers
{
    [ApiController] // Indicates that this controller responds to web API requests.
    [Route("[controller]")] // Defines the route template for the controller.
    public class DriversController : ControllerBase
    {
        private readonly AppDbContext _context; // Database context for EF Core operations.

        // Constructor to inject the database context.
        public DriversController(AppDbContext context)
        {
            _context = context;
        }

        // GET: api/drivers
        // This action method responds to HTTP GET requests and returns a list of drivers.
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Driver>>> GetDrivers()
        {
            // Asynchronously gets the list of drivers and returns it.
            return await _context.Drivers.ToListAsync();
        }

        // GET: api/drivers/5
        // This action method responds to HTTP GET requests with an ID and returns a specific driver.
        [HttpGet("{id}")]
        public async Task<ActionResult<Driver>> GetDriver(int id)
        {
            // Asynchronously finds a driver by ID.
            var driver = await _context.Drivers.FindAsync(id);

            // If the driver is not found, return HTTP 404 Not Found.
            if (driver == null)
            {
                return NotFound();
            }

            // If the driver is found, return the driver object.
            return driver;
        }

// POST: api/drivers
// This action method responds to HTTP POST requests to add a new driver.
[HttpPost]
public async Task<ActionResult<Driver>> PostDriver([FromBody] Driver driver, [FromQuery] string imageUrl)
{
    // Validate the input here as necessary, e.g., check if imageUrl is a valid URL, etc.

    // If you want to ensure the imageUrl is not null or empty, handle that case:
    if (string.IsNullOrEmpty(imageUrl))
    {
        return BadRequest("Image URL must be provided.");
    }

    // Set the driver's image to the provided URL
    driver.Image = imageUrl;

    // Adds the new driver to the context.
    _context.Drivers.Add(driver);
    // Asynchronously saves the changes to the database.
    await _context.SaveChangesAsync();

    // Returns a HTTP 201 Created response with the location header set to the URI of the new driver.
    return CreatedAtAction(nameof(GetDriver), new { id = driver.Id }, driver);
}


        // PUT: api/drivers/5
        // This action method responds to HTTP PUT requests to update an existing driver.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutDriver(int id, Driver driver)
        {
            // If the ID in the URL does not match the ID in the driver object, return HTTP 400 Bad Request.
            if (id != driver.Id)
            {
                return BadRequest();
            }

            // Sets the state of the driver in the context to Modified so that it will be updated in the database.
            _context.Entry(driver).State = EntityState.Modified;

            try
            {
                // Asynchronously saves the changes to the database.
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                // If there's an issue saving changes, check if the driver still exists. If not, return HTTP 404 Not Found.
                if (!DriverExists(id))
                {
                    return NotFound();
                }
                else
                {
                    // If there's a concurrency issue, rethrow the exception.
                    throw;
                }
            }

            // Return a HTTP 204 No Content response if update is successful.
            return NoContent();
        }

        // DELETE: api/drivers/5
        // This action method responds to HTTP DELETE requests to remove an existing driver.
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteDriver(int id)
        {
            // Asynchronously finds the driver by ID.
            var driver = await _context.Drivers.FindAsync(id);
            // If the driver doesn't exist, return HTTP 404 Not Found.
            if (driver == null)
            {
                return NotFound();
            }

            // Remove the driver from the context.
            _context.Drivers.Remove(driver);
            // Asynchronously saves the changes to the database.
            await _context.SaveChangesAsync();

            // Return a HTTP 204 No Content response if the delete is successful.
            return NoContent();
        }

        // Helper method to check if a driver exists by ID.
        private bool DriverExists(int id)
        {
            // Check if any driver matches the provided ID.
            return _context.Drivers.Any(e => e.Id == id);
        }

        // Other controller actions can be added here.
    }
}
