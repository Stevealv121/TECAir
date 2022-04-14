using Microsoft.AspNetCore.Mvc;
using TEC_Air_API_Model;
using TECAir_API_Data.Repositories;

namespace TECAirAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AppliesToController : Controller
    {
        private readonly IAppliesToRepository _appliestoRepository;

        public AppliesToController(IAppliesToRepository appliestoRepository)
        {
            _appliestoRepository = appliestoRepository;
        }
        [HttpGet]
        public async Task<IActionResult> GetAllUserBaggage()
        {
            return Ok(await _appliestoRepository.GetAllAppliesTo());
        }

        [HttpGet("{promo_code}")]
        public async Task<IActionResult> GetAppliesToDetails(int promo_code)
        {
            return Ok(await _appliestoRepository.GetAppliesToDetails(promo_code));
        }


        [HttpGet("Price/{flght_id}")]
        public async Task<IActionResult> GetPrice(int flght_id)
        {
            return Ok(await _appliestoRepository.GetAppliesToPrice(flght_id));
        }

        [HttpPost]
        public async Task<IActionResult> CreateAppliesTo([FromBody] AppliesTo appliesto)
        {
            if (appliesto == null)
                return BadRequest();
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            var created = await _appliestoRepository.InsertAppliesTo(appliesto);

            return Created("created", created);
        }

        [HttpPut]
        public async Task<IActionResult> UpdateAppliesTo([FromBody] AppliesTo appliesto)
        {
            if (appliesto == null)
                return BadRequest();
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            await _appliestoRepository.UpdateAppliesTo(appliesto);

            return NoContent();
        }
        [HttpDelete("{flght_id}")]
        public async Task<IActionResult> DeleteUserBaggage(int flght_id)
        {

            await _appliestoRepository.DeleteAppliesTo(new AppliesTo { flight_id = flght_id });

            return NoContent();
        }
    }
}
