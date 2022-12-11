using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

#nullable disable

namespace InformationCommunicationHub.Models
{
    [Table("AssistanceType")]
    public partial class AssistanceType
    {
        public AssistanceType()
        {
            Requests = new HashSet<Request>();
        }

        [Key]
        [Column("id")]
        public int Id { get; set; }

        [Required]
        [Column("assistance_type")]
        [StringLength(50)]
        public string AssistanceType1 { get; set; }

        [InverseProperty(nameof(Request.Assistance))]
        public virtual ICollection<Request> Requests { get; set; }
    }
}
