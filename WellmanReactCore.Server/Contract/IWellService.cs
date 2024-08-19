using WellmanReactCore.Server.Domain;
namespace WellmanReactCore.Server.Contract;

public interface IWellService
{
    Task<int> CreateWellAsync(CreateWellDto dto);
}