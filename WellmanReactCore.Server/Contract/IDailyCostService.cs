using WellmanReactCore.Server.Models;

namespace WellmanReactCore.Server.Contract;

public interface IDailyCostService
{
    void CreateDailyCost(DailyCost dailyCost);
}
