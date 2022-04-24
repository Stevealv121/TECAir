using Microsoft.AspNetCore.Mvc;
using TEC_Air_API_Model;
using TECAir_API_Data.Repositories;

namespace TECAirAPI.Controllers
{
    /// <summary>
    /// Promotion API controller
    /// </summary>
    [Route("api/[controller]")]
    [ApiController]
    public class PromotionController : Controller
    {
        private readonly IPromotionRepository _promotionRepository;

        public PromotionController(IPromotionRepository promotionRepository)
        {
            _promotionRepository = promotionRepository;
        }
        /// <summary>
        /// Get all promotions
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        public async Task<IActionResult> GetAllPromotion()
        {
            return Ok(await _promotionRepository.GetAllPromotions());
        }
        /// <summary>
        /// Get promotion by code
        /// </summary>
        /// <param name="promotion_code"></param>
        /// <returns></returns>
        [HttpGet("{promotion_code}")]
        public async Task<IActionResult> GetAirplaneDetails(int promotion_code)
        {
            return Ok(await _promotionRepository.GetPromotionDetails(promotion_code));
        }
        /// <summary>
        /// Post promotion
        /// </summary>
        /// <param name="promotion"></param>
        /// <returns></returns>
        [HttpPost]
        public async Task<IActionResult> CreatePromotion([FromBody] Promotion promotion)
        {
            if (promotion == null)
                return BadRequest();
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            var created = await _promotionRepository.InsertPromotion(promotion);

            return Created("created", created);
        }
        /// <summary>
        /// Put promotion
        /// </summary>
        /// <param name="promotion"></param>
        /// <returns></returns>
        [HttpPut]
        public async Task<IActionResult> UpdatePromotion([FromBody] Promotion promotion)
        {
            if (promotion == null)
                return BadRequest();
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            await _promotionRepository.UpdatePromotion(promotion);

            return NoContent();
        }
        /// <summary>
        /// Delete promotion by code
        /// </summary>
        /// <param name="promo_code"></param>
        /// <returns></returns>
        [HttpDelete("{promo_code}")]
        public async Task<IActionResult> DeletePromotion(int promo_code)
        {

            await _promotionRepository.DeletePromotion(new Promotion { promotion_code = promo_code });

            return NoContent();
        }
    }
}
