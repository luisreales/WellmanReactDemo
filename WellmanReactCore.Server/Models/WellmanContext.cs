using Microsoft.EntityFrameworkCore;
using static System.Runtime.InteropServices.JavaScript.JSType;

namespace WellmanReactCore.Server.Models
{
    public class WellmanContext:DbContext
    {
        public WellmanContext(DbContextOptions<WellmanContext> options) : base(options) { } 

        public DbSet<Well> Wells { get; set; }
        public DbSet<WellBore> WellBores { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
        }

    }
}
