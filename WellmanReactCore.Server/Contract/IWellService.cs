using WellmanReactCore.Server.Domain;
using WellmanReactCore.Server.Models;
namespace WellmanReactCore.Server.Contract;

public interface IWellService
{
    Task<int> CreateWellAsync(CreateWellDto dto);
    Task<List<Well>> GetWellsAsync();
    Task<Well> GetWellByIdAsync(int id);
}