using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

#nullable disable

namespace Penny_Earned_App.Models
{
    public partial class User
    {
        [Key]
        public int UserId { get; set; }
        public int? UserLoginId { get; set; }
        [StringLength(255)]
        public string FirstName { get; set; }
        [StringLength(255)]
        public string LastName { get; set; }

        [ForeignKey(nameof(UserLoginId))]
        [InverseProperty("Users")]
        public virtual UserLogin UserLogin { get; set; }
    }
}
