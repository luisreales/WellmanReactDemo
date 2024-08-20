namespace WellmanReactCore.Server.Domain;
public record CreateActivityDto(
    string? Id,
    string Name,
    string DrillingActivityCodeSet,
    int ActivityType,
    int AfeNumber,
    bool IsManagedPressureDrilling,
    string? ActivityManagers,
    string? FieldReportManagers
);
