using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TEC_Air_API_Model;

namespace TECAir_API_Data.Repositories
{
    public interface ISeatRepository
    {
        Task<IEnumerable<Seat>> GetAllSeats();
        Task<Seat> GetSeatDetails(int id);
        Task<IEnumerable<Seat>> GetSeatDetailsbyPlate(string airplane_plate);
        Task<bool> InsertSeat(Seat seat);
        Task<bool> UpdateSeat(Seat seat);
        Task<bool> DeleteSeat(Seat seat);
    }
}
