using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using WellmanReactCore.Server.Domain;

namespace WellmanReactCore.Server.Models
{
    public class Well
    {
        [Key] // Explicitly marks this property as the primary key
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)] // Auto-incrementing primary key
        public int WellId { get; set; }

        [Required]
        public string WellName { get; set; }

        [Required]
        public WellStatus Status { get; set; }

        [Required]
        public int WellLicenceNumber { get; set; }

        [Required]
        public string GeographicArea { get; set; }  // You will populate this via an API call (Country > City).

        [Required]
        public int Ground { get; set; }

        [Required]
        public int CutOrFill { get; set; }

        [Required]
        public int KBToGround { get; set; }
        // Navigation property for the related WellBore entities
        public ICollection<WellBore> WellBores { get; set; }
        public ICollection<Activity> Activities { get; set; } // Navigation property to Activity
    }
}
