using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TEC_Air_API_Model;

namespace TECAir_API_Data.Repositories
{
    public interface IBooksRepository
    {
        Task<IEnumerable<Books>> GetAllReservation();
        Task<Books> GetReservationDetails(int flght_id);
        Task<bool> InsertReservation(Books reservation);
        Task<bool> UpdateReservation(Books reservation);
        Task<bool> DeleteReservation(Books reservation);
    }
}
