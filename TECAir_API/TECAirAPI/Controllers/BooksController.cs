using Microsoft.AspNetCore.Mvc;
using TEC_Air_API_Model;
using TECAir_API_Data.Repositories;

namespace TECAirAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BooksController : Controller
    {
        private readonly IBooksRepository _booksRepository;

        public BooksController(IBooksRepository booksRepository)
        {
            _booksRepository = booksRepository;
        }
        [HttpGet]
        public async Task<IActionResult> GetAllReservation()
        {
            return Ok(await _booksRepository.GetAllReservation());
        }

        [HttpGet("{flight_id}")]
        public async Task<IActionResult> GetReservationDetails(int flight_id)
        {
            return Ok(await _booksRepository.GetReservationDetails(flight_id));
        }
        [HttpPost]
        public async Task<IActionResult> CreateFlight([FromBody] Books reservation)
        {
            if (reservation == null)
                return BadRequest();
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            var created = await _booksRepository.InsertReservation(reservation);

            return Created("created", created);
        }

        [HttpPut]
        public async Task<IActionResult> UpdateReservation([FromBody] Books reservation)
        {
            if (reservation == null)
                return BadRequest();
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            await _booksRepository.UpdateReservation(reservation);

            return NoContent();
        }
        [HttpDelete("{Usr_ID}")]
        public async Task<IActionResult> DeleteReservation(int Usr_ID)
        {

            await _booksRepository.DeleteReservation(new Books { user_id = Usr_ID });

            return NoContent();
        }
        [HttpDelete("Flight/{flight_ID}")]
        public async Task<IActionResult> DeleteReservationFlight(int flight_ID)
        {

            await _booksRepository.DeleteReservationFlight(new Books { flight_id = flight_ID });

            return NoContent();
        }
    }
}
