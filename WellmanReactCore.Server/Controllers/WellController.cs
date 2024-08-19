using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Net;
using WellmanReactCore.Server.Contract;
using WellmanReactCore.Server.Domain;
using WellmanReactCore.Server.Models;

namespace WellmanReactCore.Server.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class WellController : ControllerBase
    {
        private readonly WellmanContext _context;
        private readonly IWellService _wellService;

        public WellController(WellmanContext wellmanContext, IWellService wellService)
        {
            _context = wellmanContext;
            _wellService = wellService;
        }



        // POST: DailyCostController/Create
        [HttpGet]
        public IActionResult Get()
        {
            var result = new List<Well>();
            try
            {
                result = _context.Wells.ToList();

                return Ok(result);
            }
            catch
            {
                return StatusCode((int)HttpStatusCode.InternalServerError);
            }

        }

        [HttpPost("createWell")]
        public async Task<IActionResult> CreateWell([FromBody] CreateWellDto dto)
        {
            try
            {
                var wellId = await _wellService.CreateWellAsync(dto);
                return Ok(new { WellId = wellId });
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Internal server error: {ex.Message}");
            }
        }
    }
}
