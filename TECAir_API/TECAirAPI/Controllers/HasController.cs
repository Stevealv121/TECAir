using Microsoft.AspNetCore.Mvc;
using TEC_Air_API_Model;
using TECAir_API_Data.Repositories;

namespace TECAirAPI.Controllers
{
    /// <summary>
    /// Has API controller
    /// </summary>
    [Route("api/[controller]")]
    [ApiController]
    public class HasController : Controller
    {
        private readonly IHasRepository _hasRepository;

        public HasController(IHasRepository hasRepository)
        {
            _hasRepository = hasRepository;
        }
        /// <summary>
        /// Get all has relations
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        public async Task<IActionResult> GetAllUserBaggage()
        {
            return Ok(await _hasRepository.GetAllUserBaggage());
        }
        /// <summary>
        /// Get Has by user id
        /// </summary>
        /// <param name="usr_id"></param>
        /// <returns></returns>
        [HttpGet("{usr_id}")]
        public async Task<IActionResult> GetUserBaggageDetails(int usr_id)
        {
            return Ok(await _hasRepository.GetUserBaggageDetails(usr_id));
        }

        /// <summary>
        /// Get baggage price by user id
        /// </summary>
        /// <param name="usr_id"></param>
        /// <returns></returns>
        [HttpGet("Price/{usr_id}")]
        public async Task<IActionResult> GetPrice(int usr_id)
        {
            return Ok(await _hasRepository.GetUserBaggagePrice(usr_id));
        }
        /// <summary>
        /// Post has relation
        /// </summary>
        /// <param name="has"></param>
        /// <returns></returns>
        [HttpPost]
        public async Task<IActionResult> CreateUserBaggage([FromBody] Has has)
        {
            if (has == null)
                return BadRequest();
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            var created = await _hasRepository.InsertUserBaggage(has);

            return Created("created", created);
        }
        /// <summary>
        /// Put has relation
        /// </summary>
        /// <param name="has"></param>
        /// <returns></returns>
        [HttpPut]
        public async Task<IActionResult> UpdateUserBaggage([FromBody] Has has)
        {
            if (has == null)
                return BadRequest();
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            await _hasRepository.UpdateUserBaggage(has);

            return NoContent();
        }
        /// <summary>
        /// Delete Has by flight id and user id
        /// </summary>
        /// <param name="usr_id"></param>
        /// <param name="flght_id"></param>
        /// <returns></returns>
        [HttpDelete("{usr_id}/{flght_id}")]
        public async Task<IActionResult> DeleteUserBaggage(int usr_id, int flght_id)
        {

            await _hasRepository.DeleteUserBaggage(new Has { user_id = usr_id, flight_id = flght_id });

            return NoContent();
        }
        /// <summary>
        /// Delete has by baggage id
        /// </summary>
        /// <param name="baggage_ID"></param>
        /// <returns></returns>
        [HttpDelete("Baggage/{baggage_ID}")]
        public async Task<IActionResult> DeleteBaggagebyId(int baggage_ID)
        {

            await _hasRepository.DeleteBaggagebyId(new Has { baggage_id = baggage_ID });

            return NoContent();
        }
    }
}
