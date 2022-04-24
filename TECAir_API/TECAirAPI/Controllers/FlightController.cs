using Microsoft.AspNetCore.Mvc;
using TEC_Air_API_Model;
using TECAir_API_Data.Repositories;

namespace TECAirAPI.Controllers
{
    /// <summary>
    /// Flight API controller
    /// </summary>
    [Route("api/[controller]")]
    [ApiController]
    public class FlightController : Controller
    {
        private readonly IFlightRepository _flightRepository;

        public FlightController(IFlightRepository flightRepository)
        {
            _flightRepository = flightRepository;
        }
        /// <summary>
        /// Get all flights
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        public async Task<IActionResult> GetAllFlights()
        {
            return Ok(await _flightRepository.GetAllFlights());
        }
        /// <summary>
        /// Get flights and routes 
        /// </summary>
        /// <returns></returns>
        [Route("FlightsandRoutes")]
        [HttpGet]
        public async Task<IActionResult> GetAllFlightsandRoutes()
        {
            return Ok(await _flightRepository.GetAllFlightandRoutes());
        }
        /// <summary>
        /// Get flight by id
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        [HttpGet("{id}")]
        public async Task<IActionResult> GetFlightDetails(int id)
        {
            return Ok(await _flightRepository.GetFlightDetails(id));
        }
        /// <summary>
        /// Get flights and routes by origin and destination
        /// </summary>
        /// <param name="origin"></param>
        /// <param name="destination"></param>
        /// <returns></returns>
        [HttpGet("{origin}/{destination}")]
        public async Task<IActionResult> GetFlightByLocation(string origin, string destination)
        {
            return Ok(await _flightRepository.GetFlightByLocation(origin, destination));
        }
        /// <summary>
        /// Get flight, routes, airplanes by origin and destination
        /// </summary>
        /// <param name="origin"></param>
        /// <param name="destination"></param>
        /// <returns></returns>
        [HttpGet("FlightRouteAirplane/{origin}/{destination}")]
        public async Task<IActionResult> GetFlightAirplaneByLocation(string origin, string destination)
        {
            return Ok(await _flightRepository.GetFlightAirplaneByLocation(origin, destination));
        }
        /// <summary>
        /// Get baggage by flight id
        /// </summary>
        /// <param name="flight_id"></param>
        /// <returns></returns>
        [HttpGet("Baggage/{flight_id}")]
        public async Task<IActionResult> GetBaggagebyFlight(int flight_id)
        {
            return Ok(await _flightRepository.GetBaggageByFlight(flight_id));
        }
        /// <summary>
        /// Get users by flight id
        /// </summary>
        /// <param name="flight_id"></param>
        /// <returns></returns>
        [HttpGet("Users/{flight_id}")]
        public async Task<IActionResult> GetUsersbyFlight(int flight_id)
        {
            return Ok(await _flightRepository.GetUsersByFlight(flight_id));
        }
        /// <summary>
        /// Get flight capacity
        /// </summary>
        /// <param name="flight_id"></param>
        /// <returns></returns>
        [HttpGet("Capacity/{flight_id}")]
        public async Task<IActionResult> GetFlightCapacity(int flight_id)
        {
            return Ok(await _flightRepository.GetFlightCapacity(flight_id));
        }
        /// <summary>
        /// Post flight
        /// </summary>
        /// <param name="flight"></param>
        /// <returns></returns>
        [HttpPost]
        public async Task<IActionResult> CreateFlight([FromBody] Flight flight)
        {
            if (flight == null)
                return BadRequest();
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            var created = await _flightRepository.InsertFlight(flight);

            return Created("created", created);
        }
        /// <summary>
        /// Put flight
        /// </summary>
        /// <param name="flight"></param>
        /// <returns></returns>
        [HttpPut]
        public async Task<IActionResult> UpdateFlight([FromBody] Flight flight)
        {
            if (flight == null)
                return BadRequest();
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            await _flightRepository.UpdateFlight(flight);

            return NoContent();
        }
        /// <summary>
        /// Delete flight
        /// </summary>
        /// <param name="ID"></param>
        /// <returns></returns>
        [HttpDelete("{ID}")]
        public async Task<IActionResult> DeleteFlight(int ID)
        {

            await _flightRepository.DeleteFlight(new Flight { id = ID });

            return NoContent();
        }
    }
}
