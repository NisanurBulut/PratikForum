using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using PratikForumAPI.Models;

namespace PratikForumAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PuansController : ControllerBase
    {
        private readonly PratikForumAPIDBContext _context;

        public PuansController(PratikForumAPIDBContext context)
        {
            _context = context;
        }

        // GET: api/Puans
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Puan>>> GetPuan()
        {
            return await _context.Puan.ToListAsync();
        }

        // GET: api/Puans/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Puan>> GetPuan(int id)
        {
            var puan = await _context.Puan.FindAsync(id);

            if (puan == null)
            {
                return NotFound();
            }

            return puan;
        }

        // PUT: api/Puans/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutPuan(int id, Puan puan)
        {
            if (id != puan.PuanId)
            {
                return BadRequest();
            }

            _context.Entry(puan).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!PuanExists(id))
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

        // POST: api/Puans
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<Puan>> PostPuan(Puan puan)
        {
            _context.Puan.Add(puan);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetPuan", new { id = puan.PuanId }, puan);
        }

        // DELETE: api/Puans/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Puan>> DeletePuan(int id)
        {
            var puan = await _context.Puan.FindAsync(id);
            if (puan == null)
            {
                return NotFound();
            }

            _context.Puan.Remove(puan);
            await _context.SaveChangesAsync();

            return puan;
        }

        private bool PuanExists(int id)
        {
            return _context.Puan.Any(e => e.PuanId == id);
        }
    }
}
