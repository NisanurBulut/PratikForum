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
    public class YorumsController : ControllerBase
    {
        private readonly PratikForumAPIDBContext _context;

        public YorumsController(PratikForumAPIDBContext context)
        {
            _context = context;
        }

        // GET: api/Yorums
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Yorum>>> GetYorum()
        {
            return await _context.Yorum.ToListAsync();
        }

        // GET: api/Yorums/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Yorum>> GetYorum(int id)
        {
            var yorum = await _context.Yorum.FindAsync(id);

            if (yorum == null)
            {
                return NotFound();
            }

            return yorum;
        }

        // PUT: api/Yorums/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutYorum(int id, Yorum yorum)
        {
            if (id != yorum.YorumId)
            {
                return BadRequest();
            }

            _context.Entry(yorum).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!YorumExists(id))
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

        // POST: api/Yorums
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<Yorum>> PostYorum(Yorum yorum)
        {
            _context.Yorum.Add(yorum);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetYorum", new { id = yorum.YorumId }, yorum);
        }

        // DELETE: api/Yorums/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Yorum>> DeleteYorum(int id)
        {
            var yorum = await _context.Yorum.FindAsync(id);
            if (yorum == null)
            {
                return NotFound();
            }

            _context.Yorum.Remove(yorum);
            await _context.SaveChangesAsync();

            return yorum;
        }

        private bool YorumExists(int id)
        {
            return _context.Yorum.Any(e => e.YorumId == id);
        }
    }
}
