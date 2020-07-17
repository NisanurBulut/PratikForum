using Microsoft.AspNetCore.Mvc.RazorPages;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace PratikForumAPI.Models
{
    public class BankAccount
    {
        [Key]
        public int BankAccountID { get; set; }
        public int BankID { get; set; }
        [Required]
        [Column(TypeName ="nvarchar(20)")]
        public string AccountNumber { get; set; }
        [Column(TypeName = "nvarchar(100)")]
        [Required]
        public int AccountHolder { get; set; }
        [Required]
        [Column(TypeName ="nvarchar(20)")]
        public string IFSC { get; set; }
    }
}
