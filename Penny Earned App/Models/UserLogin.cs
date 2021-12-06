using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

#nullable disable

namespace Penny_Earned_App.Models
{
    public partial class UserLogin
    {
        public UserLogin()
        {
            Goals = new HashSet<Goal>();
            Users = new HashSet<User>();
        }

        [Key]
        public int UserLoginId { get; set; }
        [Required]
        [StringLength(255)]
        public string UserName { get; set; }
        [Required]
        [StringLength(255)]
        public string Password { get; set; }

        [InverseProperty(nameof(Goal.UserLogin))]
        public virtual ICollection<Goal> Goals { get; set; }
        [InverseProperty(nameof(User.UserLogin))]
        public virtual ICollection<User> Users { get; set; }
    }
}
