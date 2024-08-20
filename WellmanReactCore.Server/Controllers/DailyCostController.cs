using System.Net;
using Microsoft.AspNetCore.Mvc;
using WellmanReactCore.Server.Contract;
using WellmanReactCore.Server.Models;

namespace WellmanReactCore.Server.Controllers;

[ApiController]
[Route("[controller]")]
public class DailyCostController : ControllerBase
{
    private readonly IDailyCostService _dailyCostService;

    public DailyCostController(IDailyCostService dailyCostService)
    {
        _dailyCostService = dailyCostService;
    }

    [HttpPost]
    public IActionResult Create(DailyCost dailyCost)
    {
        try
        {
            _dailyCostService.CreateDailyCost(dailyCost);
            return StatusCode((int)HttpStatusCode.OK);
        }
        catch
        {
            return StatusCode((int)HttpStatusCode.InternalServerError);
        }
    }
}
