using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TEC_Air_API_Model;

namespace TECAir_API_Data.Repositories
{
    public interface IFlight_StopoverRepository
    {
        Task<IEnumerable<Flight_Stopover>> GetAllFlightStopovers();
        Task<Flight_Stopover> GetFlightStopoverDetails(int flght_id);
        Task<bool> InsertFlightStopover(Flight_Stopover flightStopover);
        Task<bool> UpdateFlightStopover(Flight_Stopover flightStopover);
        Task<bool> DeleteFlightStopover(Flight_Stopover flightStopover);
    }
}
