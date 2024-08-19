namespace WellmanReactCore.Server.Domain;

public record CreateWellDto(
    string WellName,
    string WellStatus,
    int WellLicenseNumber,
    bool CreateWellbore,
    string? WellboreName,
    string? WellboreStatus,
    string? SurfaceUWI,
    string? BottomUWI,
    string GeographicArea,
    string Afe,
    string EmailReporting,
    string UserGroups,
    int Ground,
    int CutOrFill,
    int KBToGround
);