using Microsoft.EntityFrameworkCore;
using WellmanReactCore.Server.Contract;
using WellmanReactCore.Server.Domain;
using WellmanReactCore.Server.Models;

namespace WellmanReactCore.Server.Services;

public class WellService : IWellService
{
    private readonly WellmanContext _context;

    public WellService(WellmanContext context)
    {
        _context = context;
    }

    public async Task<int> CreateWellAsync(CreateWellDto dto)
    {
        var well = new Well
        {
            WellName = dto.WellName,
            Status = Enum.Parse<WellStatus>(dto.WellStatus),
            WellLicenceNumber = dto.WellLicenseNumber,
            GeographicArea = dto.GeographicArea,
            Ground = dto.Ground,
            CutOrFill = dto.CutOrFill,
            KBToGround = dto.KBToGround
        };

        _context.Wells.Add(well);
        await _context.SaveChangesAsync();

        if (dto.CreateWellbore)
        {
            var wellBore = new WellBore
            {
                
                WellName = dto.WellboreName,
                Status = dto.WellboreStatus,
                WellId = well.WellId,
                //SurfaceUWI = dto.SurfaceUWI,
                //BottomUWI = dto.BottomUWI
            };

            _context.WellBores.Add(wellBore);
            await _context.SaveChangesAsync();
        }

        return well.WellId;
    }

    public async Task<List<Well>> GetWellsAsync()
    {
        return await _context.Wells.ToListAsync();
    }
}

