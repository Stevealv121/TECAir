using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TEC_Air_API_Model;

namespace TECAir_API_Data.Repositories
{
    public interface IFlightRepository
    {
        Task<IEnumerable<Flight>> GetAllFlights();
        Task<IEnumerable<Flight_Route>> GetAllFlightandRoutes();
        Task<Flight> GetFlightDetails(int id);
        Task<IEnumerable<Flight_Route>> GetFlightByLocation(string _origin, string _destination);
        Task<IEnumerable<Flight_Route_Airplane>> GetFlightAirplaneByLocation(string _origin, string _destination);
        Task<IEnumerable<Flight_User>> GetUsersByFlight(int id);
        Task<IEnumerable<Flight_Baggage>> GetBaggageByFlight(int id);
        Task<int> GetFlightCapacity(int id);
        Task<int> InsertFlight(Flight flight);
        Task<bool> UpdateFlight(Flight flight);
        Task<bool> DeleteFlight(Flight flight);
    }
}
