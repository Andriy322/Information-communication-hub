using System.Collections.Generic;

namespace InformationCommunicationHub.Models
{
    public class TokenInfo
    {
        public int UserId { get; set; }
        public Dictionary<int, bool> AssistanceOptions { get; set; }
    }
}
