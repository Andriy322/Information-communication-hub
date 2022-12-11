using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

#nullable disable

namespace InformationCommunicationHub.Models
{
    [Table("UserType")]
    public partial class UserType
    {
        public UserType()
        {
            AdminUsers = new HashSet<AdminUser>();
            Refugees = new HashSet<Refugee>();
        }

        [Key]
        [Column("id")]
        public int Id { get; set; }

        [Required]
        [Column("user_type")]
        [StringLength(50)]
        public string UserType1 { get; set; }

        [InverseProperty(nameof(AdminUser.UserTypeNavigation))]
        public virtual ICollection<AdminUser> AdminUsers { get; set; }

        [InverseProperty(nameof(Refugee.UserTypeNavigation))]
        public virtual ICollection<Refugee> Refugees { get; set; }
    }
}
