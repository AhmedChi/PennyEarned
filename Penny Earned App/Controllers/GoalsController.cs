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
    public class GoalsController : ControllerBase
    {
        private readonly APIDBContext _context;

        public GoalsController(APIDBContext context)
        {
            _context = context;
        }

        // GET: /Goals
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Goal>>> GetGoals()
        {
            return await _context.Goals.ToListAsync();
        }

        // GET: /Goals/GetPieChartData
        [HttpGet]
        [Route("/goals/GetPieChartData")]
        public async Task<ActionResult<object[]>> GetPieChartData()
        {
            var data = await _context.Goals.ToListAsync();

            var chart = new Chart
            {
                cols = new object[]
                {
                    new { id = "goal", type = "string", label = "Goal" },
                    new { id = "pecentages", type = "string", label = "Pecentage of Total Savings" }
                }
            };

            var rows = new object[] { };

            foreach (var goal in data)
            {
                rows = rows
                    .Concat(new object[]
                        {
                            new { c = new object[] { new { v = goal.Title }, new { v = goal.AmountTowardGoal } } }
                        })
                        .ToArray();
            }

            chart.rows = rows;

            return new JsonResult(chart);
        }

        // GET: /Goals/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Goal>> GetGoal(int id)
        {
            var goal = await _context.Goals.FindAsync(id);

            if (goal == null)
            {
                return NotFound();
            }

            return goal;
        }

        // PUT: /Goals/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutGoal(int id, Goal goal)
        {
            if (id != goal.GoalId)
            {
                return BadRequest();
            }

            _context.Entry(goal).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!GoalExists(id))
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

        // POST: /Goals
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Goal>> PostGoal(Goal goal)
        {
            _context.Goals.Add(goal);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetGoal", new { id = goal.GoalId }, goal);
        }

        // DELETE: /Goals/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteGoal(int id)
        {
            var goal = await _context.Goals.FindAsync(id);
            if (goal == null)
            {
                return NotFound();
            }

            _context.Goals.Remove(goal);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool GoalExists(int id)
        {
            return _context.Goals.Any(e => e.GoalId == id);
        }
    }
}
