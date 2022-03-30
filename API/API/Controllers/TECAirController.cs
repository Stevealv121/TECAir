using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    public class TECAirController : ControllerBase
    {
        [Route("api/test")]
        [HttpGet]
        public string Test()
        {
            return "hihi";
        }

        [Route("api/estado/maleta/{id}")]
        [HttpGet("{id}")]
        public ActionResult<string> Gettest(int? id)
        {
            
            return "hi from " + id;
        }
    }

}