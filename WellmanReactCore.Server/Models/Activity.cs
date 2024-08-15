using System.ComponentModel.DataAnnotations;

namespace WellmanReactCore.Server.Models
{
    public class Activity
    {
        [Key]
        public string Id { get; set; }

        public string Name { get; set; }

        public string DrillingActivityCodeSet { get; set; }

        public int ActivityType { get; set; }

        public int AfeNumber { get; set; }

        public bool IsManagedPressureDrilling { get; set; }


    }
}
