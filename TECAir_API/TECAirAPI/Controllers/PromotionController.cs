using Microsoft.AspNetCore.Mvc;
using TEC_Air_API_Model;
using TECAir_API_Data.Repositories;

namespace TECAirAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PromotionController : Controller
    {
        private readonly IPromotionRepository _promotionRepository;

        public PromotionController(IPromotionRepository promotionRepository)
        {
            _promotionRepository = promotionRepository;
        }
        [HttpGet]
        public async Task<IActionResult> GetAllPromotion()
        {
            return Ok(await _promotionRepository.GetAllPromotions());
        }

        [HttpGet("{promotion_code}")]
        public async Task<IActionResult> GetAirplaneDetails(int promotion_code)
        {
            return Ok(await _promotionRepository.GetPromotionDetails(promotion_code));
        }
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
        [HttpDelete("{promo_code}")]
        public async Task<IActionResult> DeletePromotion(int promo_code)
        {

            await _promotionRepository.DeletePromotion(new Promotion { promotion_code = promo_code });

            return NoContent();
        }
    }
}
