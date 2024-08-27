using WellmanReactCore.Server.Domain;
using WellmanReactCore.Server.Models;

namespace WellmanReactCore.Server.Services;

public interface IActivityService
{
    Task<string> CreateActivityAsync(CreateActivityDto dto);
    Task<List<Activity>> GetActivitiesAsync();
    Task<IEnumerable<Activity>> GetActivitiesByWellIdAsync(int wellId);
    Task<Activity> GetActivityByIdAsync(int activityId);
}

