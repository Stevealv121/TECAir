using Microsoft.AspNetCore.Mvc;
using TEC_Air_API_Model;
using TECAir_API_Data.Repositories;

namespace TECAirAPI.Controllers
{
    /// <summary>
    /// Airplane API controller
    /// </summary>
    [Route("api/[controller]")]
    [ApiController]
    public class AirplaneController : Controller
    {
        private readonly IAirplaneRepository _airplaneRepository;

        public AirplaneController(IAirplaneRepository airplaneRepository)
        {
            _airplaneRepository = airplaneRepository;
        }
        /// <summary>
        /// Get all aiplanes
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        public async Task<IActionResult> GetAllAirplanes()
        {
            return Ok(await _airplaneRepository.GetAllAirplanes());
        }
        /// <summary>
        /// Get aiplane by plate
        /// </summary>
        /// <param name="plate"></param>
        /// <returns></returns>
        [HttpGet("{plate}")]
        public async Task<IActionResult> GetAirplaneDetails(string plate)
        {
            return Ok(await _airplaneRepository.GetAirplaneDetails(plate));
        }
        /// <summary>
        /// Post airplane
        /// </summary>
        /// <param name="airplane"></param>
        /// <returns></returns>
        [HttpPost]
        public async Task<IActionResult> CreateAirplane([FromBody] Airplane airplane)
        {
            if (airplane == null)
                return BadRequest();
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            var created = await _airplaneRepository.InsertAirplane(airplane);

            return Created("created", created);
        }
        /// <summary>
        /// Put airplane
        /// </summary>
        /// <param name="airplane"></param>
        /// <returns></returns>
        [HttpPut]
        public async Task<IActionResult> UpdateAirplane([FromBody] Airplane airplane)
        {
            if (airplane == null)
                return BadRequest();
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            await _airplaneRepository.UpdateAirplane(airplane);

            return NoContent();
        }
        /// <summary>
        /// Delete airplane by plate
        /// </summary>
        /// <param name="Plate"></param>
        /// <returns></returns>
        [HttpDelete("{Plate}")]
        public async Task<IActionResult> DeleteAirplane(string Plate)
        {

            await _airplaneRepository.DeleteAirplane(new Airplane { plate = Plate });

            return NoContent();
        }
    }
}
