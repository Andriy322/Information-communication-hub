using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

#nullable disable

namespace InformationCommunicationHub.Models
{
    [Table("AdminUser")]
    public partial class AdminUser
    {
        [Key]
        [Column("id")]
        public int Id { get; set; }

        [Column("user_type")]
        public int UserType { get; set; }

        [Required]
        [Column("name_surname")]
        [StringLength(100)]
        public string NameSurname { get; set; }

        [Required]
        [Column("password")]
        [StringLength(50)]
        public string Password { get; set; }

        [ForeignKey(nameof(UserType))]
        [InverseProperty("AdminUsers")]
        public virtual UserType UserTypeNavigation { get; set; }
    }
}
