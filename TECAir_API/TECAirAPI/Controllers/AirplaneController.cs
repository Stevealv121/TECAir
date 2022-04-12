using Microsoft.AspNetCore.Mvc;
using TEC_Air_API_Model;
using TECAir_API_Data.Repositories;

namespace TECAirAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AirplaneController : Controller
    {
        private readonly IAirplaneRepository _airplaneRepository;

        public AirplaneController(IAirplaneRepository airplaneRepository)
        {
            _airplaneRepository = airplaneRepository;
        }
        [HttpGet]
        public async Task<IActionResult> GetAllAirplanes()
        {
            return Ok(await _airplaneRepository.GetAllAirplanes());
        }

        [HttpGet("{plate}")]
        public async Task<IActionResult> GetAirplaneDetails(string plate)
        {
            return Ok(await _airplaneRepository.GetAirplaneDetails(plate));
        }
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
        [HttpDelete("{Plate}")]
        public async Task<IActionResult> DeleteAirplane(string Plate)
        {

            await _airplaneRepository.DeleteAirplane(new Airplane { plate = Plate });

            return NoContent();
        }
    }
}
