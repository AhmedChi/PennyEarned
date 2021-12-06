using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

#nullable disable

namespace Penny_Earned_App.Models
{
    public partial class PennyEarnedDatabaseContext : DbContext
    {
        public PennyEarnedDatabaseContext()
        {
        }

        public PennyEarnedDatabaseContext(DbContextOptions<PennyEarnedDatabaseContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Goal> Goals { get; set; }
        public virtual DbSet<Transaction> Transactions { get; set; }
        public virtual DbSet<User> Users { get; set; }
        public virtual DbSet<UserLogin> UserLogins { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
                optionsBuilder.UseSqlServer("Server=Kyoto;Database=PennyEarnedDatabase;Trusted_Connection=True;");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasAnnotation("Relational:Collation", "Latin1_General_CI_AS");

            modelBuilder.Entity<Goal>(entity =>
            {
                entity.Property(e => e.Description).IsUnicode(false);

                entity.Property(e => e.Title).IsUnicode(false);

                entity.HasOne(d => d.UserLogin)
                    .WithMany(p => p.Goals)
                    .HasForeignKey(d => d.UserLoginId)
                    .HasConstraintName("FK__Goals__UserLogin__619B8048");
            });

            modelBuilder.Entity<Transaction>(entity =>
            {
                entity.HasOne(d => d.Goal)
                    .WithMany(p => p.Transactions)
                    .HasForeignKey(d => d.GoalId)
                    .HasConstraintName("FK__Transacti__GoalI__6477ECF3");
            });

            modelBuilder.Entity<User>(entity =>
            {
                entity.Property(e => e.FirstName).IsUnicode(false);

                entity.Property(e => e.LastName).IsUnicode(false);

                entity.HasOne(d => d.UserLogin)
                    .WithMany(p => p.Users)
                    .HasForeignKey(d => d.UserLoginId)
                    .HasConstraintName("FK__Users__UserLogin__5EBF139D");
            });

            modelBuilder.Entity<UserLogin>(entity =>
            {
                entity.Property(e => e.Password).IsUnicode(false);

                entity.Property(e => e.UserName).IsUnicode(false);
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
