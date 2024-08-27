using System.Net;
using Microsoft.AspNetCore.Mvc;
using WellmanReactCore.Server.Domain;
using WellmanReactCore.Server.Services;

namespace WellmanReactCore.Server.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ActivityController : ControllerBase
    {
        private readonly IActivityService _activityService;

        public ActivityController(IActivityService activityService)
        {
            _activityService = activityService;
        }

        [HttpPost]
        public async Task<IActionResult> Create([FromBody] CreateActivityDto dto)
        {
            try
            {
                var activityId = await _activityService.CreateActivityAsync(dto);
                return Ok(new { ActivityId = activityId });
            }
            catch
            {
                return StatusCode((int)HttpStatusCode.InternalServerError);
            }
        }

        [HttpGet]
        public async Task<IActionResult> Get()
        {
            try
            {
                var result = await _activityService.GetActivitiesAsync();
                return Ok(result);
            }
            catch
            {
                return StatusCode((int)HttpStatusCode.InternalServerError);
            }
        }

        [HttpGet("getListActivity/{wellId}")]
        public async Task<IActionResult> GetListActivity(int wellId)
        {
            try
            {
                var activities = await _activityService.GetActivitiesByWellIdAsync(wellId);
                if (activities == null || !activities.Any())
                {
                    return NotFound("No activities found for the specified Well.");
                }

                return Ok(activities);
            }
            catch
            {
                return StatusCode((int)HttpStatusCode.InternalServerError);
            }
        }

        [HttpGet("{activityId}")]
        public async Task<IActionResult> GetActivityById(int activityId)
        {
            try
            {
                var activity = await _activityService.GetActivityByIdAsync(activityId);
                if (activity == null)
                {
                    return NotFound($"Activity with ID {activityId} not found.");
                }
                return Ok(activity);
            }
            catch
            {
                return StatusCode((int)HttpStatusCode.InternalServerError);
            }
        }
    }
}