using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TEC_Air_API_Model;

namespace TECAir_API_Data.Repositories
{
    /// <summary>
    /// Interface for Flight relationship on database
    /// </summary>
    public interface IFlightRepository
    {
        /// <summary>
        /// Get all flights from database
        /// </summary>
        /// <returns>Array of Flight type objects</returns>
        Task<IEnumerable<Flight>> GetAllFlights();
        /// <summary>
        /// Get Flights and assigned routes
        /// </summary>
        /// <returns>Array of FLight_Route type object</returns>
        Task<IEnumerable<Flight_Route>> GetAllFlightandRoutes();
        /// <summary>
        /// Get flight info by flight id
        /// </summary>
        /// <param name="id">Flight id</param>
        /// <returns>Flight type object</returns>
        Task<Flight> GetFlightDetails(int id);
        /// <summary>
        /// Get flights and routes with specified origin and destination
        /// </summary>
        /// <param name="_origin">Origin</param>
        /// <param name="_destination">Destination</param>
        /// <returns>Flight_Route type object</returns>
        Task<IEnumerable<Flight_Route>> GetFlightByLocation(string _origin, string _destination);
        /// <summary>
        /// Get flights, routes and airplane info with specified origin and destination
        /// </summary>
        /// <param name="_origin">Origin</param>
        /// <param name="_destination">Destination</param>
        /// <returns>Array of Flight_Route_Airplane type object</returns>
        Task<IEnumerable<Flight_Route_Airplane>> GetFlightAirplaneByLocation(string _origin, string _destination);
        /// <summary>
        /// Get users information by flight id
        /// </summary>
        /// <param name="id">Flight id</param>
        /// <returns>Array of Flight_User type object</returns>
        Task<IEnumerable<Flight_User>> GetUsersByFlight(int id);
        /// <summary>
        /// Get all baggages by flight id
        /// </summary>
        /// <param name="id">flight id</param>
        /// <returns>Array of Flight_Baggage object</returns>
        Task<IEnumerable<Flight_Baggage>> GetBaggageByFlight(int id);
        /// <summary>
        /// Get flight capacity by flight id
        /// </summary>
        /// <param name="id">Flight id</param>
        /// <returns>Total seats</returns>
        Task<int> GetFlightCapacity(int id);
        /// <summary>
        /// Isert flight to databse
        /// </summary>
        /// <param name="flight">Flight type object</param>
        /// <returns>Flight id</returns>
        Task<int> InsertFlight(Flight flight);
        /// <summary>
        /// Update existing flight
        /// </summary>
        /// <param name="flight">Flight type object</param>
        /// <returns>true if updated</returns>
        Task<bool> UpdateFlight(Flight flight);
        /// <summary>
        /// Delete existing flight
        /// </summary>
        /// <param name="flight">Flight type object</param>
        /// <returns>true if deleted</returns>
        Task<bool> DeleteFlight(Flight flight);
    }
}
