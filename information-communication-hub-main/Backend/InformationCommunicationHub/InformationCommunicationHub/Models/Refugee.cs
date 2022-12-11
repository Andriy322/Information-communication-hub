  using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

#nullable disable

namespace InformationCommunicationHub.Models
{
    [Table("Refugee")]
    public partial class Refugee
    {
        public Refugee()
        {
            Requests = new HashSet<Request>();
        }

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

        [Column("city")]
        [StringLength(50)]
        public string City { get; set; }

        [Column("user_token")]
        [StringLength(1000)]
        public string UserToken { get; set; }

        [ForeignKey(nameof(UserType))]
        [InverseProperty("Refugees")]
        public virtual UserType UserTypeNavigation { get; set; }

        [InverseProperty(nameof(Request.User))]
        public virtual ICollection<Request> Requests { get; set; }
    }
}
