using Microsoft.AspNetCore.Mvc;

namespace GearSwop.Controllers
{
    [ApiController]
    [Route("swap")]
    public class SwapController : ControllerBase
    {
        [HttpGet]
        public Swap GetSwap()
        {
            return new Swap("Exclore", "Warrior");
        }
    }
}