using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace PratikForumAPI.Models
{
    public class BankYorum
    {
        [Key]
        public int YorumID { get; set; }
        public int BankID { get; set; }
        [Column(TypeName = "nvarchar(400)")]
        public int Yildiz { get; set; }
        public string Yorum { get; set; }
    }
}
