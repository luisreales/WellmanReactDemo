using System.ComponentModel.DataAnnotations;
using WellmanReactCore.Server.Models;

namespace WellmanReactCore.Server.ViewModel
{
    public class CreateActivityViewModel
    {
        [Required]
        public int WellId { get; set; }

        [Required]
        public ActivityType ActivityType { get; set; }

        [Required]
        public string DrillingActivityCodeSet { get; set; }

        [Required]
        public string ActivityName { get; set; }

        public bool IsManagedPressureDrilling { get; set; }

        [Required]
        public int WellboreId { get; set; }
    }
}
