using Microsoft.AspNetCore.Mvc;
using TECAir_API_Data.Repositories;
using TEC_Air_API_Model;
using Route = TEC_Air_API_Model.Route;

namespace TECAirAPI.Controllers
{
    /// <summary>
    /// Route API controller
    /// </summary>
    [Route("api/[controller]")]
    [ApiController]
    public class RouteController : Controller
    {
        private readonly IRouteRepository _routeRepository;

        public RouteController(IRouteRepository routeRepository)
        {
            _routeRepository = routeRepository;
        }
        /// <summary>
        /// Get all routes
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        public async Task<IActionResult> GetAllRoutes()
        {
            return Ok(await _routeRepository.GetAllRoutes());
        }
        /// <summary>
        /// Get route by id
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        [HttpGet("{id}")]
        public async Task<IActionResult> GetRouteDetails(int id)
        {
            return Ok(await _routeRepository.GetRouteDetails(id));
        }
        /// <summary>
        /// Post routes
        /// </summary>
        /// <param name="route"></param>
        /// <returns></returns>
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
        /// <summary>
        /// Put routes
        /// </summary>
        /// <param name="route"></param>
        /// <returns></returns>
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
        /// <summary>
        /// Delete route by id
        /// </summary>
        /// <param name="ID"></param>
        /// <returns></returns>
        [HttpDelete("{ID}")]
        public async Task<IActionResult> DeleteRoute(int ID)
        {
            
            await _routeRepository.DeleteRoute(new Route { route_code = ID});

            return NoContent();
        }
    }
}
