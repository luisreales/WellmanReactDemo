
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;


namespace WellmanReactCore.Server.Models
{
    public class DailyCost
    {
        [Key]
        public required string Id { get; set; }

        public required string Vendor { get; set; }

        public string Ticket { get; set; }

        [Column(TypeName = "decimal(18,2)")]
        public required decimal Amount { get; set; }

        public string Comment { get; set; }

        public DailyCost() { }


    }
}
