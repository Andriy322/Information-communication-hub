using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

#nullable disable

namespace InformationCommunicationHub.Models
{
    [Table("Request")]
    public partial class Request
    {
        [Key]
        [Column("id")]
        public int Id { get; set; }

        [Column("user_id")]
        public int UserId { get; set; }

        [Column("assistance_id")]
        public int AssistanceId { get; set; }

        [Column("do_enable_assistance_module")]
        public bool DoEnableAssistanceModule { get; set; }

        [Column("creation_date", TypeName = "datetime")]
        public DateTime? CreationDate { get; set; }

        [Column("comment")]
        [StringLength(500)]
        public string Comment { get; set; }

        [ForeignKey(nameof(AssistanceId))]
        [InverseProperty(nameof(AssistanceType.Requests))]
        public virtual AssistanceType Assistance { get; set; }

        [ForeignKey(nameof(UserId))]
        [InverseProperty(nameof(Refugee.Requests))]
        public virtual Refugee User { get; set; }
    }
}
