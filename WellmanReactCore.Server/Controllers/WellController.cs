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
        private readonly IWellService _wellService;

        public WellController(IWellService wellService)
        {
            _wellService = wellService;
        }


        [HttpGet]
        public async Task<IActionResult> Get()
        {
            try
            {
                var wells = await _wellService.GetWellsAsync();
                return Ok(wells);
            }
            catch (Exception ex)
            {
                return StatusCode((int)HttpStatusCode.InternalServerError, ex.Message);
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

        [HttpGet("{id}")]
        public async Task<IActionResult> Get(int id)
        {
            try
            {
                var well = await _wellService.GetWellByIdAsync(id);
                if (well == null)
                {
                    return NotFound($"Well with ID {id} not found.");
                }
                return Ok(well);
            }
            catch (Exception ex)
            {
                return StatusCode((int)HttpStatusCode.InternalServerError, ex.Message);
            }
        }
    }
}
