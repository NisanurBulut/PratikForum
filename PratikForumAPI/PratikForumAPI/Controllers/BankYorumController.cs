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
    public class BankYorumController : ControllerBase
    {
        private readonly PratikForumAPIDBContext _context;

        public BankYorumController(PratikForumAPIDBContext context)
        {
            _context = context;
        }

        // GET: api/BankYorum
        [HttpGet]
        public async Task<ActionResult<IEnumerable<BankYorum>>> GetBankYorum()
        {
            return await _context.BankYorum.ToListAsync();
        }
        // GET: api/GetBankPuan/5
        [HttpGet("BankPuan/{id}")]
        public async Task<ActionResult<IEnumerable<PuanDetay>>> GetBankPuan(int id)
        {
            var result= await _context.BankYorum.Where(a => a.BankID == id).ToListAsync();

            var resultGroup = result.GroupBy(a => a.Yildiz).Select(cl => new PuanDetay
            {
                BankID = cl.First().BankID,
                Puan = (cl.Count()*100)/result.Count,
                Yildiz = cl.Key
            }).ToList();
            //burada puan yüzdesel hesaplanmalı

            return resultGroup;
        }
        
        // GET: api/BankYorum/5
        [HttpGet("{id}")]
        public async Task<ActionResult<IEnumerable<BankYorum>>> GetBankYorum(int id)
        {
           return await _context.BankYorum.Where(a=>a.BankID==id).ToListAsync();
        }

        // PUT: api/BankYorum/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutBankYorum(int id, BankYorum bankYorum)
        {
            if (id != bankYorum.YorumID)
            {
                return BadRequest();
            }

            _context.Entry(bankYorum).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!BankYorumExists(id))
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

        // POST: api/BankYorum
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<BankYorum>> PostBankYorum(BankYorum bankYorum)
        {
            _context.BankYorum.Add(bankYorum);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetBankYorum", new { id = bankYorum.YorumID }, bankYorum);
        }

        // DELETE: api/BankYorum/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<BankYorum>> DeleteBankYorum(int id)
        {
            var bankYorum = await _context.BankYorum.FindAsync(id);
            if (bankYorum == null)
            {
                return NotFound();
            }

            _context.BankYorum.Remove(bankYorum);
            await _context.SaveChangesAsync();

            return bankYorum;
        }

        private bool BankYorumExists(int id)
        {
            return _context.BankYorum.Any(e => e.YorumID == id);
        }
    }
}
