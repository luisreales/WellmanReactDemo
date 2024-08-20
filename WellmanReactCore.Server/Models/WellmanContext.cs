using Microsoft.EntityFrameworkCore;
using static System.Runtime.InteropServices.JavaScript.JSType;

namespace WellmanReactCore.Server.Models
{
    public class WellmanContext:DbContext
    {
        public WellmanContext(DbContextOptions<WellmanContext> options) : base(options) { } 

        public DbSet<Well> Wells { get; set; }
        public DbSet<WellBore> WellBores { get; set; }

        public DbSet<DailyCost> DailyCosts { get; set; }

        public DbSet<Activity> Activities { get; set; }


        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Activity>()
             .HasOne(a => a.Well)
             .WithMany(w => w.Activities)
             .HasForeignKey(a => a.WellId)
             .OnDelete(DeleteBehavior.NoAction);  // or DeleteBehavior.NoAction

            base.OnModelCreating(modelBuilder);
        }

    }
}
