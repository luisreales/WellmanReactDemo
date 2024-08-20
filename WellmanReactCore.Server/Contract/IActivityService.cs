using WellmanReactCore.Server.Domain;
using WellmanReactCore.Server.Models;

namespace WellmanReactCore.Server.Services;

public interface IActivityService
{
    Task<string> CreateActivityAsync(CreateActivityDto dto);
    Task<List<Activity>> GetActivitiesAsync();
}

