using Microsoft.AspNetCore.Mvc;
using TEC_Air_API_Model;
using TECAir_API_Data.Repositories;

namespace TECAirAPI.Controllers
{
    /// <summary>
    /// Seat API controller
    /// </summary>
    [Route("api/[controller]")]
    [ApiController]
    public class SeatController : Controller
    {
        private readonly ISeatRepository _seatRepository;

        public SeatController(ISeatRepository seatRepository)
        {
            _seatRepository = seatRepository;
        }
        /// <summary>
        /// Get all seats
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        public async Task<IActionResult> GetAllSeat()
        {
            return Ok(await _seatRepository.GetAllSeats());
        }
        /// <summary>
        /// Get seat by id
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        [HttpGet("{id}")]
        public async Task<IActionResult> GetSeatDetails(int id)
        {
            return Ok(await _seatRepository.GetSeatDetails(id));
        }
        /// <summary>
        /// Get seats by plane plate
        /// </summary>
        /// <param name="airplane_Plate"></param>
        /// <returns></returns>
        [HttpGet("Plate/{airplane_Plate}")]
        public async Task<IActionResult> GetSeatDetailsbyPlate(string airplane_Plate)
        {
            return Ok(await _seatRepository.GetSeatDetailsbyPlate(airplane_Plate));
        }
        /// <summary>
        /// Post seat
        /// </summary>
        /// <param name="seat"></param>
        /// <returns></returns>
        [HttpPost]
        public async Task<IActionResult> CreateSeat([FromBody] Seat seat)
        {
            if (seat == null)
                return BadRequest();
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            var created = await _seatRepository.InsertSeat(seat);

            return Created("created", created);
        }
        /// <summary>
        /// Put seat
        /// </summary>
        /// <param name="seat"></param>
        /// <returns></returns>
        [HttpPut]
        public async Task<IActionResult> UpdateSeat([FromBody] Seat seat)
        {
            if (seat == null)
                return BadRequest();
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            await _seatRepository.UpdateSeat(seat);

            return NoContent();
        }
        /// <summary>
        /// Delete seat by id
        /// </summary>
        /// <param name="ID"></param>
        /// <returns></returns>
        [HttpDelete("{ID}")]
        public async Task<IActionResult> DeleteSeat(int ID)
        {

            await _seatRepository.DeleteSeat(new Seat { id = ID });

            return NoContent();
        }
    }
}
