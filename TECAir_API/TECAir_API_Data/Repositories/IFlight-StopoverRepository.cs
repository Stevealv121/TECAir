using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TEC_Air_API_Model;

namespace TECAir_API_Data.Repositories
{
    /// <summary>
    /// Interface for Flight_Stopover relationship on database
    /// </summary>
    public interface IFlight_StopoverRepository
    {
        /// <summary>
        /// Get all stopovers from database
        /// </summary>
        /// <returns>Array of Flight_Stopover type objects</returns>
        Task<IEnumerable<Flight_Stopover>> GetAllFlightStopovers();
        /// <summary>
        /// Get stopovers from specific flight by flight id
        /// </summary>
        /// <param name="flght_id">flight id</param>
        /// <returns>Array of strings with flight stopovers</returns>
        Task<IEnumerable<string>> GetFlightStopoverDetails(int flght_id);
        /// <summary>
        /// Insert Flight_Stopover to databas
        /// </summary>
        /// <param name="flightStopover">Flight_Stopover type object</param>
        /// <returns>true if inserted</returns>
        Task<bool> InsertFlightStopover(Flight_Stopover flightStopover);
        /// <summary>
        /// Update existing flight stopover on database
        /// </summary>
        /// <param name="flightStopover">Flight_Stopover type object</param>
        /// <returns>true if updated</returns>
        Task<bool> UpdateFlightStopover(Flight_Stopover flightStopover);
        /// <summary>
        /// Delete existing stopover from database
        /// </summary>
        /// <param name="flightStopover">Flight_Stopover type object</param>
        /// <returns>true if deleted</returns>
        Task<bool> DeleteFlightStopover(Flight_Stopover flightStopover);
    }
}
