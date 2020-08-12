using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace PratikForumAPI.Models
{
    public class Contact
    {
        [Key]
        public int ContactId { get; set; }
        public string FullName { get; set; }
        public string Email { get; set; }
        public string Mobile { get; set; }
        public string City { get; set; }
        public int Department { get; set; }
        public int Gender { get; set; }
        public bool IsPermanent { get; set; }
        public DateTime HireDate { get; set; }
    }
}
