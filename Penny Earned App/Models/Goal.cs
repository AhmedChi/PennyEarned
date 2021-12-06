using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

#nullable disable

namespace Penny_Earned_App.Models
{
    public partial class Goal
    {
        public Goal()
        {
            Transactions = new HashSet<Transaction>();
        }

        [Key]
        public int GoalId { get; set; }
        [StringLength(255)]
        public string Title { get; set; }
        [StringLength(255)]
        public string Description { get; set; }
        public int? UserLoginId { get; set; }
        public int? AmountTowardGoal { get; set; }
        public int? GoalAmount { get; set; }
        public bool? IsCompleted { get; set; }
        [Column(TypeName = "datetime")]
        public DateTime? CreatedAt { get; set; }

        [ForeignKey(nameof(UserLoginId))]
        [InverseProperty("Goals")]
        public virtual UserLogin UserLogin { get; set; }
        [InverseProperty(nameof(Transaction.Goal))]
        public virtual ICollection<Transaction> Transactions { get; set; }
    }
}
