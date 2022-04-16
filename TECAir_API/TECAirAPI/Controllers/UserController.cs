using Microsoft.AspNetCore.Mvc;
using TEC_Air_API_Model;
using TECAir_API_Data.Repositories;

namespace TECAirAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : Controller
    {
        private readonly IUserRepository _userRepository;

        public UserController(IUserRepository userRepository)
        {
            _userRepository = userRepository;
        }
        [HttpGet]
        public async Task<IActionResult> GetAllUsers()
        {
            return Ok(await _userRepository.GetAllUsers());
        }

        [HttpGet("{email}/{password}")]
        public async Task<IActionResult> GetUserDetails(string email, string password)
        {
            return Ok(await _userRepository.GetUserDetails(email, password));
        }
        [HttpPost]
        public async Task<IActionResult> CreateUser([FromBody]User usr)
        {
            if (usr == null)
                return BadRequest();
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            var created = await _userRepository.InsertUser(usr);

            return Created("created", created);
        }

        [HttpPut]
        public async Task<IActionResult> UpdateUser([FromBody] User usr)
        {
            if (usr == null)
                return BadRequest();
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            await _userRepository.UpdateUser(usr);

            return NoContent();
        }
        [HttpDelete("{ID}")]
        public async Task<IActionResult> DeleteUser(int ID)
        {
            
            await _userRepository.DeleteUser(new User { id = ID});

            return NoContent();
        }

    }
}
