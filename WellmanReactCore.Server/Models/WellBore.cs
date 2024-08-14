using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace WellmanReactCore.Server.Models
{
    public class WellBore
    {
        [Key] // Unique identifier for WellBore
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)] // Auto-incrementing primary key
        public int WellBoreId { get; set; }

        [Required]
        public string WellName { get; set; }

        [Required]
        public string Status { get; set; }

        // Foreign key reference to Well
        [Required]
        public int WellId { get; set; } // This is the foreign key

        [ForeignKey("WellId")]
        public Well Well { get; set; } // Navigation property
    }
}
