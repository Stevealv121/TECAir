using Microsoft.AspNetCore.Mvc;
using TEC_Air_API_Model;
using TECAir_API_Data.Repositories;

namespace TECAirAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class HasController : Controller
    {
        private readonly IHasRepository _hasRepository;

        public HasController(IHasRepository hasRepository)
        {
            _hasRepository = hasRepository;
        }
        [HttpGet]
        public async Task<IActionResult> GetAllUserBaggage()
        {
            return Ok(await _hasRepository.GetAllUserBaggage());
        }
        
        [HttpGet("{usr_id}")]
        public async Task<IActionResult> GetUserBaggageDetails(int usr_id)
        {
            return Ok(await _hasRepository.GetUserBaggageDetails(usr_id));
        }

        
        [HttpGet("Price/{usr_id}")]
        public async Task<IActionResult> GetPrice(int usr_id)
        {
            return Ok(await _hasRepository.GetUserBaggagePrice(usr_id));
        }

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
        [HttpDelete("{usr_id}")]
        public async Task<IActionResult> DeleteUserBaggage(int usr_id)
        {

            await _hasRepository.DeleteUserBaggage(new Has { user_id = usr_id });

            return NoContent();
        }
    }
}
