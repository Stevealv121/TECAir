using Microsoft.AspNetCore.Mvc;
using TEC_Air_API_Model;
using TECAir_API_Data.Repositories;

namespace TECAirAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BaggageController : Controller
    {
        private readonly IBaggageRepository _baggageRepository;

        public BaggageController(IBaggageRepository baggageRepository)
        {
            _baggageRepository = baggageRepository;
        }
        [HttpGet]
        public async Task<IActionResult> GetAllBaggage()
        {
            return Ok(await _baggageRepository.GetAllBaggage());
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetBaggageDetails(int id)
        {
            return Ok(await _baggageRepository.GetBaggageDetails(id));
        }
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
        [HttpDelete("{ID}")]
        public async Task<IActionResult> DeleteBaggage(int ID)
        {

            await _baggageRepository.DeleteBaggage(new Baggage { id = ID });

            return NoContent();
        }
    }
}
