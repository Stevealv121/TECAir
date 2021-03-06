using Microsoft.AspNetCore.Mvc;
using TEC_Air_API_Model;
using TECAir_API_Data.Repositories;

namespace TECAirAPI.Controllers
{
    /// <summary>
    /// Flight_Stopover API controller
    /// </summary>
    [Route("api/[controller]")]
    [ApiController]
    public class Flight_StopoverController : Controller
    {
        private readonly IFlight_StopoverRepository _flight_stopoverRepository;

        public Flight_StopoverController(IFlight_StopoverRepository flight_stopoverRepository)
        {
            _flight_stopoverRepository = flight_stopoverRepository;
        }
        /// <summary>
        /// Get all Flight_Stopovers
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        public async Task<IActionResult> GetAllReservation()
        {
            return Ok(await _flight_stopoverRepository.GetAllFlightStopovers());
        }
        /// <summary>
        /// Get Flight_Stopovers by flight id
        /// </summary>
        /// <param name="flight_id"></param>
        /// <returns></returns>
        [HttpGet("{flight_id}")]
        public async Task<IActionResult> GetFlight_StopoverDetails(int flight_id)
        {
            return Ok(await _flight_stopoverRepository.GetFlightStopoverDetails(flight_id));
        }
        /// <summary>
        /// Post Flight_Stopovers
        /// </summary>
        /// <param name="flight_stopover"></param>
        /// <returns></returns>
        [HttpPost]
        public async Task<IActionResult> CreateFlight_Stopover([FromBody] Flight_Stopover flight_stopover)
        {
            if (flight_stopover == null)
                return BadRequest();
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            var created = await _flight_stopoverRepository.InsertFlightStopover(flight_stopover);

            return Created("created", created);
        }
        /// <summary>
        /// Put Flight_Stopovers
        /// </summary>
        /// <param name="flight_stopover"></param>
        /// <returns></returns>
        [HttpPut]
        public async Task<IActionResult> UpdateReservation([FromBody] Flight_Stopover flight_stopover)
        {
            if (flight_stopover == null)
                return BadRequest();
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            await _flight_stopoverRepository.UpdateFlightStopover(flight_stopover);

            return NoContent();
        }
        /// <summary>
        /// Delete Flight_Stopovers by flight id
        /// </summary>
        /// <param name="Flight_ID"></param>
        /// <returns></returns>
        [HttpDelete("{Flight_ID}")]
        public async Task<IActionResult> DeleteReservation(int Flight_ID)
        {

            await _flight_stopoverRepository.DeleteFlightStopover(new Flight_Stopover { flight_id = Flight_ID });

            return NoContent();
        }

    }
}
