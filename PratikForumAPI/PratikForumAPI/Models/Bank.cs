﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace PratikForumAPI.Models
{
    public class Bank
    {
        [Key]
        public int BankID { get; set; }
        [Column(TypeName="nvarchar(100)")]
        public string BankName { get; set; }
        [Column(TypeName = "nvarchar(400)")]
        public string Aciklama { get; set; }
        public double Puan { get; set; }
        public int PuanlamaSayisi { get; set; }
    }
}
