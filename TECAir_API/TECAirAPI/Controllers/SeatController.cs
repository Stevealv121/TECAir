using Microsoft.AspNetCore.Mvc;
using TEC_Air_API_Model;
using TECAir_API_Data.Repositories;

namespace TECAirAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SeatController : Controller
    {
        private readonly ISeatRepository _seatRepository;

        public SeatController(ISeatRepository seatRepository)
        {
            _seatRepository = seatRepository;
        }
        [HttpGet]
        public async Task<IActionResult> GetAllSeat()
        {
            return Ok(await _seatRepository.GetAllSeats());
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetSeatDetails(int id)
        {
            return Ok(await _seatRepository.GetSeatDetails(id));
        }
        [HttpGet("Plate/{airplane_Plate}")]
        public async Task<IActionResult> GetSeatDetailsbyPlate(string airplane_Plate)
        {
            return Ok(await _seatRepository.GetSeatDetailsbyPlate(airplane_Plate));
        }
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
        [HttpDelete("{ID}")]
        public async Task<IActionResult> DeleteSeat(int ID)
        {

            await _seatRepository.DeleteSeat(new Seat { id = ID });

            return NoContent();
        }
    }
}
