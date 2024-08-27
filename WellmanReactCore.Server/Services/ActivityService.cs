using Microsoft.EntityFrameworkCore;
using WellmanReactCore.Server.Domain;
using WellmanReactCore.Server.Models;

namespace WellmanReactCore.Server.Services
{
    public class ActivityService : IActivityService
    {
        private readonly WellmanContext _wellmanContext;

        public ActivityService(WellmanContext wellmanContext)
        {
            _wellmanContext = wellmanContext;
        }

        public async Task<string> CreateActivityAsync(CreateActivityDto dto)
        {
            var activity = new Activity
            {

                ActivityName = dto.Name,
                DrillingActivityCodeSet = dto.DrillingActivityCodeSet,
                ActivityType = (ActivityType)dto.ActivityType,
                IsManagedPressureDrilling = dto.IsManagedPressureDrilling
            };

            _wellmanContext.Activities.Add(activity);
            await _wellmanContext.SaveChangesAsync();
            return activity.ActivityId.ToString();
        }

        public async Task<List<Activity>> GetActivitiesAsync()
        {
            return await _wellmanContext.Activities.ToListAsync();
        }

        public async Task<IEnumerable<Activity>> GetActivitiesByWellIdAsync(int wellId)
        {
            return await _wellmanContext.Activities
                                 .Where(a => a.WellId == wellId)
                                 .ToListAsync();
        }

        public async Task<Activity> GetActivityByIdAsync(int activityId)
        {
            return await _wellmanContext.Activities
                                 .FirstOrDefaultAsync(a => a.ActivityId == activityId);
        }
    }
}
