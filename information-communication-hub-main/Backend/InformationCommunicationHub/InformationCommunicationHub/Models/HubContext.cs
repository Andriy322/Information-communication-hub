using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

#nullable disable

namespace InformationCommunicationHub.Models
{
    public partial class HubContext : DbContext
    {
        public HubContext()
        {
        }

        public HubContext(DbContextOptions<HubContext> options)
            : base(options)
        {
        }

        public virtual DbSet<AdminUser> AdminUsers { get; set; }
        public virtual DbSet<AssistanceType> AssistanceTypes { get; set; }
        public virtual DbSet<Refugee> Refugees { get; set; }
        public virtual DbSet<Request> Requests { get; set; }
        public virtual DbSet<UserType> UserTypes { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
                optionsBuilder.UseSqlServer("Server=DESKTOP-RF20N3J;Database=InformationCommunicationHubDatabase;Password=;Trusted_Connection=True;MultipleActiveResultSets=true");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<AdminUser>(entity =>
            {
                entity.Property(e => e.NameSurname).IsUnicode(false);

                entity.Property(e => e.Password).IsUnicode(false);

                entity.HasOne(d => d.UserTypeNavigation)
                    .WithMany(p => p.AdminUsers)
                    .HasForeignKey(d => d.UserType)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_AdminUser_UserType");
            });

            modelBuilder.Entity<AssistanceType>(entity =>
            {
                entity.Property(e => e.AssistanceType1).IsUnicode(false);
            });

            modelBuilder.Entity<Refugee>(entity =>
            {
                entity.Property(e => e.City).IsUnicode(false);

                entity.Property(e => e.NameSurname).IsUnicode(false);

                entity.Property(e => e.Password).IsUnicode(false);

                entity.Property(e => e.UserToken).IsUnicode(false);

                entity.HasOne(d => d.UserTypeNavigation)
                    .WithMany(p => p.Refugees)
                    .HasForeignKey(d => d.UserType)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_Refugee_UserType");
            });

            modelBuilder.Entity<Request>(entity =>
            {
                entity.Property(e => e.Comment).IsUnicode(false);


                entity.HasOne(d => d.Assistance)
                    .WithMany(p => p.Requests)
                    .HasForeignKey(d => d.AssistanceId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_Request_AssistanceType");

                entity.HasOne(d => d.User)
                    .WithMany(p => p.Requests)
                    .HasForeignKey(d => d.UserId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_Request_Refugee");
            });

            modelBuilder.Entity<UserType>(entity =>
            {
                entity.Property(e => e.UserType1).IsUnicode(false);
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
