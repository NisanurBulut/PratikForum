﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace PratikForumAPI.Models
{
    public class Puan
    {
        [Key]
        public int PuanId { get; set; }
        public int BankID { get; set; }
        public int BankPuan { get; set; }
    }
}
