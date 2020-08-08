using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace PratikForumAPI.Models
{
    public class Task
    {
        [Key]
        public int TaskId { get; set; }
        public int TasklistId { get; set; }
        public string Description { get; set; }
 
        public bool Completed { get; set; } = false;
    }
}
