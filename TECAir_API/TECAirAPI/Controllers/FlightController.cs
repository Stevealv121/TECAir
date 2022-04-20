﻿using Microsoft.AspNetCore.Mvc;
using TEC_Air_API_Model;
using TECAir_API_Data.Repositories;

namespace TECAirAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FlightController : Controller
    {
        private readonly IFlightRepository _flightRepository;

        public FlightController(IFlightRepository flightRepository)
        {
            _flightRepository = flightRepository;
        }
        [HttpGet]
        public async Task<IActionResult> GetAllFlights()
        {
            return Ok(await _flightRepository.GetAllFlights());
        }
        [Route("FlightsandRoutes")]
        [HttpGet]
        public async Task<IActionResult> GetAllFlightsandRoutes()
        {
            return Ok(await _flightRepository.GetAllFlightandRoutes());
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetFlightDetails(int id)
        {
            return Ok(await _flightRepository.GetFlightDetails(id));
        }
        [HttpGet("{origin}/{destination}")]
        public async Task<IActionResult> GetFlightByLocation(string origin, string destination)
        {
            return Ok(await _flightRepository.GetFlightByLocation(origin, destination));
        }
        [HttpGet("FlightRouteAirplane/{origin}/{destination}")]
        public async Task<IActionResult> GetFlightAirplaneByLocation(string origin, string destination)
        {
            return Ok(await _flightRepository.GetFlightAirplaneByLocation(origin, destination));
        }
        [HttpGet("Baggage/{flight_id}")]
        public async Task<IActionResult> GetBaggagebyFlight(int flight_id)
        {
            return Ok(await _flightRepository.GetBaggageByFlight(flight_id));
        }
        [HttpGet("Users/{flight_id}")]
        public async Task<IActionResult> GetUsersbyFlight(int flight_id)
        {
            return Ok(await _flightRepository.GetUsersByFlight(flight_id));
        }
        [HttpGet("Capacity/{flight_id}")]
        public async Task<IActionResult> GetFlightCapacity(int flight_id)
        {
            return Ok(await _flightRepository.GetFlightCapacity(flight_id));
        }
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
        [HttpDelete("{ID}")]
        public async Task<IActionResult> DeleteFlight(int ID)
        {

            await _flightRepository.DeleteFlight(new Flight { id = ID });

            return NoContent();
        }
    }
}
