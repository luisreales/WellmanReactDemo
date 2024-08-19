using FluentValidation;
using WellmanReactCore.Server.Domain;
using WellmanReactCore.Server.Models;

namespace WellmanReactCore.Server.Validators;

public class CreateWellDtoValidator : AbstractValidator<CreateWellDto>
{
    public CreateWellDtoValidator()
    {
        RuleFor(x => x.WellName)
            .NotEmpty().WithMessage("Well name is required.")
            .Length(2, 100).WithMessage("Well name must be between 2 and 100 characters.");

        RuleFor(x => x.WellStatus)
            .NotEmpty().WithMessage("Well status is required.")
            .Must(BeAValidStatus).WithMessage("Invalid well status.");

        RuleFor(x => x.WellLicenseNumber)
            .GreaterThan(0).WithMessage("License number must be greater than zero.");

        RuleFor(x => x.GeographicArea)
            .NotEmpty().WithMessage("Geographic area is required.");

        RuleFor(x => x.Ground)
            .GreaterThan(0).WithMessage("Ground must be greater than zero.");

        RuleFor(x => x.CutOrFill)
            .GreaterThan(0).WithMessage("Cut or Fill must be greater than zero.");

        RuleFor(x => x.KBToGround)
            .GreaterThan(0).WithMessage("KB to Ground must be greater than zero.");

        When(x => x.CreateWellbore, () =>
        {
            RuleFor(x => x.WellboreName)
                .NotEmpty().WithMessage("Wellbore name is required when creating a wellbore.");

            RuleFor(x => x.WellboreStatus)
                .NotEmpty().WithMessage("Wellbore status is required when creating a wellbore.");

            RuleFor(x => x.SurfaceUWI)
                .NotEmpty().WithMessage("Surface UWI is required when creating a wellbore.");

            RuleFor(x => x.BottomUWI)
                .NotEmpty().WithMessage("Bottom UWI is required when creating a wellbore.");
        });
    }

    private bool BeAValidStatus(string status)
    {
        return Enum.TryParse<WellStatus>(status, out _);
    }
}
