using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using PratikForumAPI.Models;

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
        public DbSet<User> User { get; set; }
        public DbSet<BankYorum> BankYorum { get; set; }
        public DbSet<TaskList> TaskList { get; set; }
        public DbSet<Task> Task { get; set; }
        public DbSet<PratikForumAPI.Models.Contact> Contact { get; set; }

    }
}
