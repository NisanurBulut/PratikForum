using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace PratikForumAPI.Models
{
    public class TaskList
    {
        [Key]
        public int TaskListId { get; set; }
        public string Title { get; set; }
    }
}
