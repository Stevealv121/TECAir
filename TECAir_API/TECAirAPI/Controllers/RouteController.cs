using Microsoft.AspNetCore.Mvc;
using TECAir_API_Data.Repositories;
using TEC_Air_API_Model;
using Route = TEC_Air_API_Model.Route;

namespace TECAirAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RouteController : Controller
    {
        private readonly IRouteRepository _routeRepository;

        public RouteController(IRouteRepository routeRepository)
        {
            _routeRepository = routeRepository;
        }
        [HttpGet]
        public async Task<IActionResult> GetAllRoutes()
        {
            return Ok(await _routeRepository.GetAllRoutes());
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetRouteDetails(int id)
        {
            return Ok(await _routeRepository.GetRouteDetails(id));
        }
        [HttpPost]
        public async Task<IActionResult> CreateRoute([FromBody]Route route)
        {
            if (route == null)
                return BadRequest();
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            var created = await _routeRepository.InsertRoute(route);

            return Created("created", created);
        }

        [HttpPut]
        public async Task<IActionResult> UpdateRoute([FromBody] Route route)
        {
            if (route == null)
                return BadRequest();
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            await _routeRepository.UpdateRoute(route);

            return NoContent();
        }
        [HttpDelete("{ID}")]
        public async Task<IActionResult> DeleteRoute(int ID)
        {
            
            await _routeRepository.DeleteRoute(new Route { route_code = ID});

            return NoContent();
        }
    }
}
