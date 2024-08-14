namespace WellmanReactCore.Server.ViewModel
{
    using System.ComponentModel.DataAnnotations;

    public class CreateWellViewModel
    {
        [Required]
        public string WellName { get; set; }

        [Required]
        public string WellStatus { get; set; }

        [Required]
        public string WellLicenseNumber { get; set; }

        public bool CreateWellbore { get; set; } // Flag to create Wellbore or not

        public string WellboreName { get; set; }

        public string WellboreStatus { get; set; }

        public string SurfaceUWI { get; set; }

        public string BottomUWI { get; set; }

        public string GeographicArea { get; set; }

        public string Afe { get; set; }

        public string EmailReporting { get; set; }

        public string UserGroups { get; set; }

        [Required]
        public int Ground { get; set; }

        [Required]
        public int CutOrFill { get; set; }

        [Required]
        public int KBToGround { get; set; }
    }

}
