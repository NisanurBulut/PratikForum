﻿using System;
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
    public class BankController : ControllerBase
    {
        private readonly PratikForumAPIDBContext _context;

        public BankController(PratikForumAPIDBContext context)
        {
            _context = context;
        }

        // GET: api/Bank
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Bank>>> GetBanks()
        {
            return await _context.Banks.ToListAsync();
        }
        // GET: api/Bank/5
        //[HttpGet("getBankPuanDetail/{id}")]
        //public async Task<IEnumerable<Puan>> getBankPuanDetail(int id)
        //{
        //    var bankPuanList = await _context.Puan.Where(a=>a.BankID==id).ToListAsync();

        //    return bankPuanList;
        //}
        // GET: api/Bank/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Bank>> GetBank(int id)
        {
            var bank = await _context.Banks.FindAsync(id);

            if (bank == null)
            {
                return NotFound();
            }

            return bank;
        }

        // PUT: api/Bank/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutBank(int id, Bank bank)
        {
            if (id != bank.BankID)
            {
                return BadRequest();
            }

            _context.Entry(bank).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!BankExists(id))
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

        // POST: api/Bank
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<Bank>> PostBank(Bank bank)
        {
            _context.Banks.Add(bank);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetBank", new { id = bank.BankID }, bank);
        }
        
        // DELETE: api/Bank/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Bank>> DeleteBank(int id)
        {
            var bankHesaplar = await _context.BankAccounts.Where(a => a.BankID == id).ToListAsync();
           
            _context.BankAccounts.RemoveRange(bankHesaplar);
            await _context.SaveChangesAsync();

            var bankYorumlar = await _context.BankYorum.Where(a => a.BankID == id).ToListAsync();

            _context.BankYorum.RemoveRange(bankYorumlar);
            await _context.SaveChangesAsync();

            var bank = await _context.Banks.FindAsync(id);
            if (bank == null)
            {
                return NotFound();
            }

            _context.Banks.Remove(bank);
            await _context.SaveChangesAsync();

            return bank;
        }

        private bool BankExists(int id)
        {
            return _context.Banks.Any(e => e.BankID == id);
        }
    }
}
