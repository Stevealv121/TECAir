using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace TEC_Air_API_Model
{
    /// <summary>
    /// Database context for TecAir airline
    /// </summary>
    public class TecAirContext: DbContext
    {
        public TecAirContext(DbContextOptions<TecAirContext> options): base(options)
        {
        }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            
            modelBuilder.UseSerialColumns();
        }
        public DbSet<Airplane> AIRPLANE { get; set; }
        public DbSet<AppliesTo> AppliesTo { get; set; }
        public DbSet<Baggage> BAGGAGE { get; set; }
        public DbSet<Books> Books { get; set; }
        public DbSet<Flight> FLIGHT { get; set; }
        public DbSet<Flight_Stopover> Flight_Stopover { get; set; }
        public DbSet<Has> Has { get; set; }
        public DbSet<Promotion> PROMOTION { get; set; }
        public DbSet<Role> ROLE { get; set; }
        public DbSet<Route> ROUTE { get; set; }
        public DbSet<Seat> SEAT { get; set; }
        public DbSet<User> USER { get; set; }
    }
}
