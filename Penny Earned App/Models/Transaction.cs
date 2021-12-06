using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

#nullable disable

namespace Penny_Earned_App.Models
{
    public partial class Transaction
    {
        [Key]
        public int TransactionId { get; set; }
        public int? GoalId { get; set; }
        public int? TransactionAmount { get; set; }
        [Column(TypeName = "datetime")]
        public DateTime? CreatedAt { get; set; }

        [ForeignKey(nameof(GoalId))]
        [InverseProperty("Transactions")]
        public virtual Goal Goal { get; set; }
    }
}
