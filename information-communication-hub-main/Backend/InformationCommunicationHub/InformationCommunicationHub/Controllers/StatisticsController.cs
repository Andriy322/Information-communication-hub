using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using InformationCommunicationHub.Models;
using InformationCommunicationHub.Entities;
using InformationCommunicationHub.Patterns;
using System.Web;
using System;
using System.Linq;


namespace InformationCommunicationHub.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class StatisticsController : ControllerBase
    {
        private readonly HubContext _context;

        public StatisticsController(HubContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult> Stats(int userId = -1, string requestType = "", DateTime? from = null, DateTime? to = null)
        {
            var requests = _context.Requests.AsQueryable().ToList();
            RequestStorage<Request> storage = new TokenRequestStorage(requests);
            if (userId != -1)
                storage = new FilteredByUserId(storage, userId);

            if(requestType != "" && Enum.TryParse(requestType.ToLower(), out TokenRequestType tokenRequestType)){
                storage = new FilteredByRequestType(storage, tokenRequestType);
            }

            if(from != null || to != null)
            {
                storage = new FilteredByDate(storage, from, to);
            }

            return new JsonResult(storage.GetContent());
        }

    }
}
