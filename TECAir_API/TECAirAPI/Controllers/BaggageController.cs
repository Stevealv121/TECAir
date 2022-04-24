using Microsoft.AspNetCore.Mvc;
using TEC_Air_API_Model;
using TECAir_API_Data.Repositories;

namespace TECAirAPI.Controllers
{
    /// <summary>
    /// Baggage API controller
    /// </summary>
    [Route("api/[controller]")]
    [ApiController]
    public class BaggageController : Controller
    {
        private readonly IBaggageRepository _baggageRepository;

        public BaggageController(IBaggageRepository baggageRepository)
        {
            _baggageRepository = baggageRepository;
        }
        /// <summary>
        /// Get all baggage
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        public async Task<IActionResult> GetAllBaggage()
        {
            return Ok(await _baggageRepository.GetAllBaggage());
        }
        /// <summary>
        /// Get baggage by id
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        [HttpGet("{id}")]
        public async Task<IActionResult> GetBaggageDetails(int id)
        {
            return Ok(await _baggageRepository.GetBaggageDetails(id));
        }
        /// <summary>
        /// Post baggage
        /// </summary>
        /// <param name="baggage"></param>
        /// <returns></returns>
        [HttpPost]
        public async Task<IActionResult> CreateBaggege([FromBody] Baggage baggage)
        {
            if (baggage == null)
                return BadRequest();
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            var created = await _baggageRepository.InsertBaggage(baggage);

            return Created("created", created);
        }
        /// <summary>
        /// Put baggage
        /// </summary>
        /// <param name="baggage"></param>
        /// <returns></returns>
        [HttpPut]
        public async Task<IActionResult> UpdateBaggage([FromBody] Baggage baggage)
        {
            if (baggage == null)
                return BadRequest();
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            await _baggageRepository.UpdateBaggage(baggage);

            return NoContent();
        }
        /// <summary>
        /// Delete baggage by id
        /// </summary>
        /// <param name="ID"></param>
        /// <returns></returns>
        [HttpDelete("{ID}")]
        public async Task<IActionResult> DeleteBaggage(int ID)
        {

            await _baggageRepository.DeleteBaggage(new Baggage { id = ID });

            return NoContent();
        }
    }
}
