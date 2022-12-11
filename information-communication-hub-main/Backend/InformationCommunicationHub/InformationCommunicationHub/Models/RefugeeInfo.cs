using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace InformationCommunicationHub.Models
{
    public class RefugeeInfo
    {
        public Refugee Refugee { get; set; }
        public Dictionary<string, bool> AssistanceData { get; set; }
    }
}
