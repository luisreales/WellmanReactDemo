using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Net;
using WellmanReactCore.Server.Models;
using WellmanReactCore.Server.ViewModel;

namespace WellmanReactCore.Server.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ActivityController : Controller
    {
        private readonly WellmanContext _context;

        public ActivityController(WellmanContext context)
        {
            _context = context;
        }

        // Endpoint to create a new Activity
        [HttpPost("createActivity")]
        public async Task<IActionResult> CreateActivity([FromBody] CreateActivityViewModel model)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            // Create the Activity entity
            var activity = new Activity
            {
                WellId = model.WellId,
                ActivityType = model.ActivityType,
                DrillingActivityCodeSet = model.DrillingActivityCodeSet,
                ActivityName = model.ActivityName,
                IsManagedPressureDrilling = model.IsManagedPressureDrilling,
                WellboreId = model.WellboreId
            };

            _context.Activities.Add(activity);
            await _context.SaveChangesAsync();

            return Ok(new { activity.ActivityId });
        }

        // Endpoint to get a list of Activities for a specific Well
        [HttpGet("getListActivity/{wellId}")]
        public async Task<IActionResult> GetListActivity(int wellId)
        {
            var activities = await _context.Activities
                                            .Where(a => a.WellId == wellId)
                                            .ToListAsync();

            if (activities == null || !activities.Any())
            {
                return NotFound("No activities found for the specified Well.");
            }

            return Ok(activities);
        }

        [HttpGet("getAllActivities")]
        public async Task<IActionResult> GetAllActivities()
        {
            var activities = await _context.Activities.ToListAsync();

            if (activities == null || !activities.Any())
            {
                return NotFound("No activities found.");
            }

            return Ok(activities);
        }
    }
}
