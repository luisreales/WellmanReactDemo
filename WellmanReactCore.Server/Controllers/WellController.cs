using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WellmanReactCore.Server.Models;
using WellmanReactCore.Server.ViewModel;

namespace WellmanReactCore.Server.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class WellController : ControllerBase
    {
        private readonly WellmanContext _context;

        public WellController(WellmanContext wellmanContext)
        {
            _context = wellmanContext;
        }

        [HttpPost("createWell")]
        public async Task<IActionResult> CreateWell([FromBody] CreateWellViewModel model)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            // Create the Well entity
            var well = new Well
            {
                WellName = model.WellName,
                Status = Enum.Parse<WellStatus>(model.WellStatus),
                WellLicenceNumber = int.Parse(model.WellLicenseNumber),
                GeographicArea = model.GeographicArea,
                Ground = model.Ground,
                CutOrFill = model.CutOrFill,
                KBToGround = model.KBToGround
            };

            _context.Wells.Add(well);
            await _context.SaveChangesAsync();

            // If CreateWellbore is true, create the WellBore entity
            if (model.CreateWellbore)
            {
                var wellBore = new WellBore
                {
                    WellName = model.WellboreName,
                    Status = model.WellboreStatus,
                    WellId = well.WellId // Link to the created Well
                };

                _context.WellBores.Add(wellBore);
                await _context.SaveChangesAsync();
            }

            return Ok(new { well.WellId });
        }
    }
}
