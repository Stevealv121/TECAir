using Microsoft.AspNetCore.Mvc;
using TEC_Air_API_Model;
using TECAir_API_Data.Repositories;

namespace TECAirAPI.Controllers
{
    /// <summary>
    /// Books API controller
    /// </summary>
    [Route("api/[controller]")]
    [ApiController]
    public class BooksController : Controller
    {
        private readonly IBooksRepository _booksRepository;

        public BooksController(IBooksRepository booksRepository)
        {
            _booksRepository = booksRepository;
        }
        /// <summary>
        /// Get all Books
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        public async Task<IActionResult> GetAllReservation()
        {
            return Ok(await _booksRepository.GetAllReservation());
        }
        /// <summary>
        /// Get Books by flight id
        /// </summary>
        /// <param name="flight_id"></param>
        /// <returns></returns>
        [HttpGet("{flight_id}")]
        public async Task<IActionResult> GetReservationDetails(int flight_id)
        {
            return Ok(await _booksRepository.GetReservationDetails(flight_id));
        }
        /// <summary>
        /// Get books by user id
        /// </summary>
        /// <param name="user_id"></param>
        /// <returns></returns>
        [HttpGet("ByUser/{user_id}")]
        public async Task<IActionResult> GetReservationDetailsbyUser(int user_id)
        {
            return Ok(await _booksRepository.GetReservationDetailsbyUser(user_id));
        }
        /// <summary>
        /// Post books
        /// </summary>
        /// <param name="reservation"></param>
        /// <returns></returns>
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
        /// <summary>
        /// Put Books
        /// </summary>
        /// <param name="reservation"></param>
        /// <returns></returns>
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
        /// <summary>
        /// Delete Books by user id
        /// </summary>
        /// <param name="Usr_ID"></param>
        /// <returns></returns>
        [HttpDelete("{Usr_ID}")]
        public async Task<IActionResult> DeleteReservation(int Usr_ID)
        {

            await _booksRepository.DeleteReservation(new Books { user_id = Usr_ID });

            return NoContent();
        }
        /// <summary>
        /// DElete Books by flight id
        /// </summary>
        /// <param name="flight_ID"></param>
        /// <returns></returns>
        [HttpDelete("Flight/{flight_ID}")]
        public async Task<IActionResult> DeleteReservationFlight(int flight_ID)
        {

            await _booksRepository.DeleteReservationFlight(new Books { flight_id = flight_ID });

            return NoContent();
        }
    }
}
