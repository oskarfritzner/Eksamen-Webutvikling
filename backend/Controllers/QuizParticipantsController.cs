using Microsoft.AspNetCore.Mvc;
using backend.Models;
using backend.Data;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace backend.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ParticipantsController : ControllerBase
    {
        private readonly AppDbContext _context;

        public ParticipantsController(AppDbContext context)
        {
            _context = context;
        }

        // GET: api/participants
        // Retrieves all participants. Useful for administrative purposes.
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Participant>>> GetParticipants()
        {
            return await _context.Participants.ToListAsync();
        }

        // POST: api/participants
        // Adds a new participant's quiz results to the database.
        [HttpPost]
        public async Task<ActionResult<Participant>> PostParticipant([FromBody] Participant participant)
        {
            _context.Participants.Add(participant);
            await _context.SaveChangesAsync();

            // Return the participant data without a location header.
            // This simplifies the response and avoids the need for a separate GET method.
            return Ok(participant);
        }
    }
}
