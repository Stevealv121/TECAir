using Microsoft.AspNetCore.Mvc;
using TEC_Air_API_Model;
using TECAir_API_Data.Repositories;

namespace TECAirAPI.Controllers
{
    [Route("api/role/[controller]")]
    [ApiController]
    public class RoleController : Controller
    {
        private readonly IRoleRepository _roleRepository;

        public RoleController(IRoleRepository roleRepository)
        {
            _roleRepository = roleRepository;
        }
        [HttpGet]
        public async Task<IActionResult> GetAllRoles()
        {
            return Ok(await _roleRepository.GetAllRoles());
        }

        [HttpGet("{name}")]
        public async Task<IActionResult> GetRouteDetails(string name)
        {
            return Ok(await _roleRepository.GetRoleDetails(name));
        }
        [HttpPost]
        public async Task<IActionResult> CreateRole([FromBody] Role role)
        {
            if (role == null)
                return BadRequest();
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            var created = await _roleRepository.InsertRole(role);

            return Created("created", created);
        }

        [HttpPut]
        public async Task<IActionResult> UpdateRoute([FromBody] Role role)
        {
            if (role == null)
                return BadRequest();
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            await _roleRepository.UpdateRole(role);

            return NoContent();
        }
        [HttpDelete("{Name}")]
        public async Task<IActionResult> DeleteRoute(string Name)
        {

            await _roleRepository.DeleteRole(new Role { name = Name });

            return NoContent();
        }

    }
}
