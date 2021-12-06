using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Penny_Earned_App.Data;
using Penny_Earned_App.Models;

namespace Penny_Earned_App.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class UserLoginsController : ControllerBase
    {
        private readonly APIDBContext _context;

        public UserLoginsController(APIDBContext context)
        {
            _context = context;
        }

        // GET: /UserLogins
        [HttpGet]
        public async Task<ActionResult<IEnumerable<UserLogin>>> GetUserLogins()
        {
            return await _context.UserLogins.ToListAsync();
        }

        // GET: /UserLogins/5
        [HttpGet("{id}")]
        public async Task<ActionResult<UserLogin>> GetUserLogin(int id)
        {
            var userLogin = await _context.UserLogins.FindAsync(id);

            if (userLogin == null)
            {
                return NotFound();
            }

            return userLogin;
        }

        // PUT: /UserLogins/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutUserLogin(int id, UserLogin userLogin)
        {
            if (id != userLogin.UserLoginId)
            {
                return BadRequest();
            }

            _context.Entry(userLogin).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!UserLoginExists(id))
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

        // POST: /UserLogins
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<UserLogin>> PostUserLogin(UserLogin userLogin)
        {
            _context.UserLogins.Add(userLogin);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetUserLogin", new { id = userLogin.UserLoginId }, userLogin);
        }

        // DELETE: /UserLogins/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteUserLogin(int id)
        {
            var userLogin = await _context.UserLogins.FindAsync(id);
            if (userLogin == null)
            {
                return NotFound();
            }

            _context.UserLogins.Remove(userLogin);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool UserLoginExists(int id)
        {
            return _context.UserLogins.Any(e => e.UserLoginId == id);
        }
    }
}
