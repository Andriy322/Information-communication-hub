namespace InformationCommunicationHub.Entities
{
    public class LoginResponse
    {
        public string userToken { get; set; }
        public bool isAdmin { get; set; }
        public string userInit { get; set; }
        public int userId { get; set; }
    }
}
