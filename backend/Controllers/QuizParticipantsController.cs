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

        // Retrieves all participants
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Participant>>> GetParticipants()
        {
            return await _context.Participants.ToListAsync();
        }

        // Adds a new participant
        [HttpPost]
        public async Task<ActionResult<Participant>> PostParticipant([FromBody] Participant participant)
        {
            _context.Participants.Add(participant);
            await _context.SaveChangesAsync();
            return Ok(participant);
        }
    }
}
