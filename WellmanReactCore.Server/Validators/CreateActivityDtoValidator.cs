using FluentValidation;
using WellmanReactCore.Server.Domain;

namespace WellmanReactCore.Server.Validators;

public class CreateActivityDtoValidator : AbstractValidator<CreateActivityDto>
{
    public CreateActivityDtoValidator()
    {
        RuleFor(x => x.Name)
            .NotEmpty().WithMessage("Activity name is required.")
            .Length(2, 100).WithMessage("Activity name must be between 2 and 100 characters.");

        RuleFor(x => x.DrillingActivityCodeSet)
            .NotEmpty().WithMessage("Drilling activity code is required.")
            .Length(2, 50).WithMessage("Drilling activity code must be between 2 and 50 characters.");

        RuleFor(x => x.ActivityType)
            .GreaterThan(0).WithMessage("Activity type must be a positive integer.");

        RuleFor(x => x.AfeNumber)
            .GreaterThanOrEqualTo(0).WithMessage("AFE number must be a non-negative integer.");

        RuleFor(x => x.IsManagedPressureDrilling)
            .Must(x => x == true || x == false).WithMessage("Invalid value for IsManagedPressureDrilling.");

        RuleFor(x => x.ActivityManagers)
            .Must(x => x != null && x.GetType() == typeof(string)).WithMessage("Activity managers must be a valid string.");

        RuleFor(x => x.FieldReportManagers)
            .Must(x => x != null && x.GetType() == typeof(string)).WithMessage("Field report managers must be a valid string.");
    }

    private bool BeAValidManagerList(List<string>? managers)
    {
        return managers != null && managers.All(m => !string.IsNullOrWhiteSpace(m));
    }
}
