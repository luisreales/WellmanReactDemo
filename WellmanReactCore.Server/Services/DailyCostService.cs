using WellmanReactCore.Server.Contract;
using WellmanReactCore.Server.Models;

namespace WellmanReactCore.Server.Services;

public class DailyCostService : IDailyCostService
{
    private readonly WellmanContext _wellmanContext;

    public DailyCostService(WellmanContext wellmanContext)
    {
        _wellmanContext = wellmanContext;
    }

    public void CreateDailyCost(DailyCost dailyCost)
    {
        dailyCost.Id = Guid.NewGuid().ToString();
        _wellmanContext.Add(dailyCost);
        _wellmanContext.SaveChanges();
    }
}
