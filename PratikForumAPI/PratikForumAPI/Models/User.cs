using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace PratikForumAPI.Models
{
    public class User
    {
        [Key]
        public int UserID { get; set; }
        [Column(TypeName ="nvarchar(75)")]
        public string Name { get; set; }
        [Column(TypeName = "nvarchar(75)")]
        public string Surname { get; set; }
        [Column(TypeName = "nvarchar(6)")]
        public string Password { get; set; }
        //public string PasswordHash { get; set; }
        //[Column(TypeName = "nvarchar(175)")]
        //public string Email { get; set; }
        //[Column(TypeName = "nvarchar(10)")]
        //public string PhoneNumber { get; set; }

    }
}
