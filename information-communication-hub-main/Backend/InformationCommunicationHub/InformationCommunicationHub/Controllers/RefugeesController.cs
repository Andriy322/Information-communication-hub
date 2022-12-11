using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using InformationCommunicationHub.Models;
using InformationCommunicationHub.Entities;
using InformationCommunicationHub.Patterns;
using System.Web;

namespace InformationCommunicationHub.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class RefugeesController : ControllerBase
    {
        private readonly HubContext _context;
        TokenComposer tokenComposer = TokenComposer.getInstance(new Dictionary<string, IAssistanceTokenStrategy>{
            {"legal", new LegalAssistance()},
            {"medical", new MedicalAssistance()},
            { "social", new SocialAssistance()},
            { "employment", new EmploymentAssistance()}
        });

        public RefugeesController(HubContext context)
        {
            _context = context;
        }

        [HttpPost]
        public async Task<ActionResult> Login(LoginBody loginBody)
        {
            var refugee = _context.Refugees.FirstOrDefault(r => r.NameSurname == loginBody.UserInit && r.Password == loginBody.Password);
            var admin = _context.AdminUsers.FirstOrDefault(a => a.NameSurname == loginBody.UserInit && a.Password == loginBody.Password);
            LoginResponse response;

            if (refugee != null)
            {
                response = new LoginResponse { isAdmin = false, userId = refugee.Id, userInit = refugee.NameSurname, userToken = refugee.UserToken };
                return new JsonResult(response);
            }
            if (admin != null)
            {
                response = new LoginResponse { isAdmin = true, userId = admin.Id, userInit = admin.NameSurname, userToken = null };
                return new JsonResult(response);
            }

            return BadRequest("User with such credentials doesn't exist in the system");
        }

        // GET: api/Refugees
        [HttpGet]
        public async Task<ActionResult<IEnumerable<RefugeeInfo>>> GetRefugees()
        {
            var refugees = await _context.Refugees
                .Include(x => x.UserTypeNavigation)
                .ToListAsync();

            var res = refugees.Select(r => new RefugeeInfo { Refugee = r, AssistanceData = TokenComposer.ConvertTokenToDict(r.UserToken) });

            return new JsonResult(res);
        }

        // GET: api/Refugees/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Refugee>> GetRefugee(int id)
        {
            var refugee = await _context.Refugees.FindAsync(id);

            if (refugee == null)
            {
                return NotFound();
            }

            return refugee;
        }

        [HttpGet("{userId}/{assistanceType}/{token}")]
        public async Task<ActionResult> ServiceOn(int userId, string assistanceType, string token)
        {
            token = HttpUtility.UrlDecode(token);
            var decrypted = EncryptionHelper.Decrypt(token);
            var res = TokenComposer.IsOn(assistanceType, decrypted);
            var response = new IsOnAssistanceResponse { on = res, type = assistanceType, userId = userId };
            return new JsonResult(response);
        }

        [HttpPut]
        public async Task<IActionResult> ChangeAssistance(ChangeAssistanceRequest data)
        {
            var request = new Request { CreationDate = DateTime.Now, UserId = data.userId };
            var user = _context.Refugees.First(r => r.Id == data.userId);

            request.Comment = user.UserToken == null ? "creation" : "change";
            _context.Requests.Add(request);

            var oldToken = user.UserToken;

            var newToken = tokenComposer.CreateToken(data.userId, data.assistanse);
            var encrypted = EncryptionHelper.Encrypt(newToken);

            _context.Refugees.First(r => r.Id == data.userId).UserToken = encrypted;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!RefugeeExists(data.userId))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            var response = new ChangeAssistanceResponse { userId = data.userId, userToken = encrypted };
            return new JsonResult(response);
        }


        // PUT: api/Refugees/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutRefugee(int id, Refugee refugee)
        {
            if (id != refugee.Id)
            {
                return BadRequest();
            }

            /*Create token and assign it*/

            _context.Entry(refugee).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!RefugeeExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Refugees
        [HttpPost]
        public async Task<ActionResult<Refugee>> PostRefugee(Refugee refugee)
        {
          
            refugee.UserType = 3;
            _context.Refugees.Add(refugee);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetRefugee", new { id = refugee.Id }, refugee);
        }

        // DELETE: api/Refugees/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteRefugee(int id)
        {
            var refugee = await _context.Refugees.FindAsync(id);
            if (refugee == null)
            {
                return NotFound();
            }

            _context.Refugees.Remove(refugee);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool RefugeeExists(int id)
        {
            return _context.Refugees.Any(e => e.Id == id);
        }
    }
}
