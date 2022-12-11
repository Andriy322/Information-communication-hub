
using System.Collections.Generic;

namespace InformationCommunicationHub.Entities
{
    public class ChangeAssistanceRequest
    {
        public int userId { get; set; }
        public Dictionary<string, bool> assistanse { get; set; }
    }

    public class ChangeAssistanceResponse
    {
        public string userToken { get; set; }
        public int userId { get; set; }
    }

    public class IsOnAssistanceResponse
    {
        public bool on { get; set; }
        public string type { get; set; }
        public int userId { get; set; }

    }
}
