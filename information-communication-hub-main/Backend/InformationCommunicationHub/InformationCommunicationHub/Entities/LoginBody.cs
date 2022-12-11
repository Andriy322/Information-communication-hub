using Newtonsoft.Json;

namespace InformationCommunicationHub.Entities
{
    public class LoginBody
    {
        [JsonProperty("userInit")]
        public string UserInit { get; set; }
        [JsonProperty("password")]
        public string Password { get; set; }
    }
}
