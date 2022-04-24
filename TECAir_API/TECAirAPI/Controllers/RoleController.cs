using Microsoft.AspNetCore.Mvc;
using TEC_Air_API_Model;
using TECAir_API_Data.Repositories;

namespace TECAirAPI.Controllers
{
    /// <summary>
    /// Role API controller
    /// </summary>
    [Route("api/[controller]")]
    [ApiController]
    public class RoleController : Controller
    {
        private readonly IRoleRepository _roleRepository;

        public RoleController(IRoleRepository roleRepository)
        {
            _roleRepository = roleRepository;
        }
        /// <summary>
        /// Get all roles
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        public async Task<IActionResult> GetAllRoles()
        {
            return Ok(await _roleRepository.GetAllRoles());
        }
        /// <summary>
        /// Get role by name
        /// </summary>
        /// <param name="name"></param>
        /// <returns></returns>
        [HttpGet("{name}")]
        public async Task<IActionResult> GetRouteDetails(string name)
        {
            return Ok(await _roleRepository.GetRoleDetails(name));
        }
        /// <summary>
        /// Post role
        /// </summary>
        /// <param name="role"></param>
        /// <returns></returns>
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
        /// <summary>
        /// Put role
        /// </summary>
        /// <param name="role"></param>
        /// <returns></returns>
        [HttpPut]
        public async Task<IActionResult> UpdateRole([FromBody] Role role)
        {
            if (role == null)
                return BadRequest();
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            await _roleRepository.UpdateRole(role);

            return NoContent();
        }
        /// <summary>
        /// Delete role
        /// </summary>
        /// <param name="Name"></param>
        /// <returns></returns>
        [HttpDelete("{Name}")]
        public async Task<IActionResult> DeleteRole(string Name)
        {

            await _roleRepository.DeleteRole(new Role { name = Name });

            return NoContent();
        }

    }
}
