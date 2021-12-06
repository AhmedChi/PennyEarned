using IdentityServer4.EntityFramework.Options;
using Microsoft.AspNetCore.ApiAuthorization.IdentityServer;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;
using Penny_Earned_App.Models;

namespace Penny_Earned_App.Data
{
    public class APIDBContext : ApiAuthorizationDbContext<ApplicationUser>
    {
        public virtual DbSet<UserLogin> UserLogins { get; set; }
        public virtual DbSet<User> Users { get; set; }
        public virtual DbSet<Goal> Goals{ get; set; }
        public virtual DbSet<Transaction> Transactions { get; set; }
        

        public APIDBContext(DbContextOptions options,
            IOptions<OperationalStoreOptions> operationalStoreOptions) : base(options, operationalStoreOptions)
        {

        }
    }
}
