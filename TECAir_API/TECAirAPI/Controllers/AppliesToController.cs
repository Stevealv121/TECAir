using Microsoft.AspNetCore.Mvc;
using TEC_Air_API_Model;
using TECAir_API_Data.Repositories;

namespace TECAirAPI.Controllers
{
    /// <summary>
    /// AppliesTo API controller
    /// </summary>
    [Route("api/[controller]")]
    [ApiController]
    public class AppliesToController : Controller
    {
        private readonly IAppliesToRepository _appliestoRepository;

        public AppliesToController(IAppliesToRepository appliestoRepository)
        {
            _appliestoRepository = appliestoRepository;
        }
        /// <summary>
        /// Get all AppliesTo
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        public async Task<IActionResult> GetAllUserBaggage()
        {
            return Ok(await _appliestoRepository.GetAllAppliesTo());
        }
        /// <summary>
        /// Get applies to by promotion code
        /// </summary>
        /// <param name="promo_code"></param>
        /// <returns></returns>
        [HttpGet("{promo_code}")]
        public async Task<IActionResult> GetAppliesToDetails(int promo_code)
        {
            return Ok(await _appliestoRepository.GetAppliesToDetails(promo_code));
        }

        /// <summary>
        /// Get Applies to by flight id
        /// </summary>
        /// <param name="flght_id"></param>
        /// <returns></returns>
        [HttpGet("PromotionandAppliesTo/{flght_id}")]
        public async Task<IActionResult> GetPrice(int flght_id)
        {
            return Ok(await _appliestoRepository.GetPromoAppliesTo(flght_id));
        }
        /// <summary>
        /// Post applies to
        /// </summary>
        /// <param name="appliesto"></param>
        /// <returns></returns>
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
        /// <summary>
        /// Put applies to
        /// </summary>
        /// <param name="appliesto"></param>
        /// <returns></returns>
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
        /// <summary>
        /// Delete applies to by flight id
        /// </summary>
        /// <param name="flght_id"></param>
        /// <returns></returns>
        [HttpDelete("{flght_id}")]
        public async Task<IActionResult> DeleteUserBaggage(int flght_id)
        {

            await _appliestoRepository.DeleteAppliesTo(new AppliesTo { flight_id = flght_id });

            return NoContent();
        }
    }
}
