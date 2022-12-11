using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using InformationCommunicationHub.Models;
using System.Diagnostics;

namespace InformationCommunicationHub.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AssistanceTypesController : ControllerBase
    {
        private readonly HubContext _context;

        public AssistanceTypesController(HubContext context)
        {
            _context = context;
        }

        // GET: api/AssistanceTypes
        [HttpGet]
        public async Task<ActionResult<IEnumerable<AssistanceType>>> GetAssistanceTypes()
        {
            return await _context.AssistanceTypes.ToListAsync();
        }

        // GET: api/AssistanceTypes/5
        [HttpGet("{id}")]
        public async Task<ActionResult<AssistanceType>> GetAssistanceType(int id)
        {
            var assistanceType = await _context.AssistanceTypes.FindAsync(id);

            if (assistanceType == null)
            {
                return NotFound();
            }

            return assistanceType;
        }

        // PUT: api/AssistanceTypes/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutAssistanceType(int id, AssistanceType assistanceType)
        {
            if (id != assistanceType.Id)
            {
                return BadRequest();
            }

            _context.Entry(assistanceType).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!AssistanceTypeExists(id))
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

        // POST: api/AssistanceTypes
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult> PostAssistanceType(AssistanceType assistanceType)
        {
            _context.AssistanceTypes.Add(assistanceType);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetAssistanceType", new { id = assistanceType.Id }, assistanceType);
        }

        
        // DELETE: api/AssistanceTypes/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteAssistanceType(int id)
        {
            var assistanceType = await _context.AssistanceTypes.FindAsync(id);
            if (assistanceType == null)
            {
                return NotFound();
            }

            _context.AssistanceTypes.Remove(assistanceType);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool AssistanceTypeExists(int id)
        {
            return _context.AssistanceTypes.Any(e => e.Id == id);
        }
    }
}
