using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PratikForumAPI.Models
{
    public class PratikForumAPIDBContext:DbContext
    {
        public PratikForumAPIDBContext(DbContextOptions<PratikForumAPIDBContext> options):base(options)
        {
            // kurucu
        }
        public DbSet<Bank> Banks { get; set; }
        public DbSet<BankAccount> BankAccounts { get; set; }
    }
}
