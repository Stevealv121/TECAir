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
        /// <summary>
        /// Get all users
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        public async Task<IActionResult> GetAllUsers()
        {
            return Ok(await _userRepository.GetAllUsers());
        }
        /// <summary>
        /// Get user by email and password
        /// </summary>
        /// <param name="email"></param>
        /// <param name="password"></param>
        /// <returns></returns>
        [HttpGet("{email}/{password}")]
        public async Task<IActionResult> GetUserDetails(string email, string password)
        {
            return Ok(await _userRepository.GetUserDetails(email, password));
        }
        /// <summary>
        /// Post user
        /// </summary>
        /// <param name="usr"></param>
        /// <returns></returns>
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
        /// <summary>
        /// Put user
        /// </summary>
        /// <param name="usr"></param>
        /// <returns></returns>
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
        /// <summary>
        /// Delete user by id
        /// </summary>
        /// <param name="ID"></param>
        /// <returns></returns>
        [HttpDelete("{ID}")]
        public async Task<IActionResult> DeleteUser(int ID)
        {
            
            await _userRepository.DeleteUser(new User { id = ID});

            return NoContent();
        }

    }
}
