using InformationCommunicationHub.Entities;
using InformationCommunicationHub.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace InformationCommunicationHub.Patterns
{
    
    public interface IAssistanceTokenStrategy
    {
        string CreateToken(int refugeeId);
    }


    public class EmploymentAssistance : IAssistanceTokenStrategy
    {
        private string _id = "employment";

        public string CreateToken(int refugeeId)
        {
            return IsAllowed(refugeeId) ? $"{_id}=true;" : string.Empty;
        }

        private bool IsAllowed(int refugeeId) => true;
    }

    public class LegalAssistance : IAssistanceTokenStrategy
    {
        private string _id = "legal";

        public string CreateToken(int refugeeId)
        {
            return IsAllowed(refugeeId) ? $"{_id}=true;" : string.Empty;
        }

        private bool IsAllowed(int refugeeId) => true;
    }

    public class SocialAssistance : IAssistanceTokenStrategy
    {
        private string _id = "social";

        public string CreateToken(int refugeeId)
        {
            return IsAllowed(refugeeId) ? $"{_id}=true;" : string.Empty;
        }

        private bool IsAllowed(int refugeeId) => true;
    }

    public class MedicalAssistance : IAssistanceTokenStrategy
    {
        private string _id = "medical";

        public string CreateToken(int refugeeId)
        {
            return IsAllowed(refugeeId) ? $"{_id}=true;" : string.Empty;
        }

        private bool IsAllowed(int refugeeId) => true;
    }

    public class TokenComposer
    {
        private static TokenComposer _instance;
        private Dictionary<string, IAssistanceTokenStrategy> _strategies;
        private static object _syncRoot = new object();

        protected TokenComposer(Dictionary<string, IAssistanceTokenStrategy> strategies)
        {
            _strategies = strategies;
        }

        public static TokenComposer getInstance(Dictionary<string, IAssistanceTokenStrategy> strategies)
        {
            if (_instance == null)
            {
                lock (_syncRoot)
                {
                    if (_instance == null)
                        _instance = new TokenComposer(strategies);
                }
            }
            return _instance;
        }

        public void AddTokenCreationStrategy(string strategyId, IAssistanceTokenStrategy strategy)
        {
            if(!_strategies.ContainsKey(strategyId))
                _strategies.Add(strategyId, strategy);
        }

        public void RemoveTokenCreationStrategy(string strategyId)
        {
            if (_strategies.ContainsKey(strategyId))
                _strategies.Remove(strategyId);
        }

        public string CreateToken(int refugeeId, Dictionary<string, bool> options)
        {
            var _token = new StringBuilder();

            foreach (var option in options)
            {
                if (option.Value && _strategies.ContainsKey(option.Key))
                    _token.Append(_strategies[option.Key].CreateToken(refugeeId));
            }

            return _token.ToString();
        }

        public static Dictionary<string, bool> ConvertTokenToDict(string token)
        {

            var res = new Dictionary<string, bool>();
            if (string.IsNullOrWhiteSpace(token))
                return res;

            token = EncryptionHelper.Decrypt(token);

            var tokenParts = token.Split(';', StringSplitOptions.RemoveEmptyEntries);

            foreach (var tokenPart in tokenParts)
            {
                var keyValuePair = tokenPart.Split('=');
                res.Add(keyValuePair[0], bool.Parse(keyValuePair[1]));
            }
            foreach (var strategy in _instance._strategies)
            {
                if (!res.ContainsKey(strategy.Key)){
                    res.Add(strategy.Key, false);
                }

            }

            return res;
        }

        public static bool IsOn(string assistanceType, string token)
        {
            var neededPart = token.Split(';').FirstOrDefault(p => p.Contains(assistanceType));
            if (neededPart == null)
                return false;

            return bool.Parse(neededPart.Split('=')[1]);

        }
    }

}
