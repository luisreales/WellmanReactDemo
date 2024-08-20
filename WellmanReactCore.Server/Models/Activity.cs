using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace WellmanReactCore.Server.Models
{
    public class Activity
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int ActivityId { get; set; } // Primary Key

        [Required]
        public int WellId { get; set; } // Foreign Key to Well

        [Required]
        public ActivityType ActivityType { get; set; } // Enum for Activity Type

        [Required]
        public string DrillingActivityCodeSet { get; set; } // Drilling Activity Code Set

        [Required]
        public string ActivityName { get; set; } // Name of the Activity

        public bool IsManagedPressureDrilling { get; set; } // Indicates if it's Managed Pressure Drilling

        [Required]
        public int WellboreId { get; set; } // Foreign Key to Wellbore

        // Navigation Properties
        [ForeignKey("WellId")]
        public Well Well { get; set; } // Navigation property to Well

        [ForeignKey("WellboreId")]
        public WellBore WellBore { get; set; } // Navigation property to Wellbore

    }
}
