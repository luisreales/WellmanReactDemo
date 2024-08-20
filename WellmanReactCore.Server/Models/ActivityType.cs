using System.ComponentModel.DataAnnotations;

namespace WellmanReactCore.Server.Models
{
    public enum ActivityType
    {
        [Display(Name = "[Well - Completion]")]
        Completion = 1,

        [Display(Name = "[Well - Construction]")]
        Construction = 2,

        [Display(Name = "[Well - Drilling]")]
        Drilling = 3,

        [Display(Name = "[Pipe - Construction]")]
        PipeConstruction = 4,

        [Display(Name = "[Pad - Construction]")]
        PadConstruction = 5,

        [Display(Name = "[Facility - Construction]")]
        FacilityConstruction = 6,

        [Display(Name = "[All Activities]")]
        AllActivities = 7
    }
}
