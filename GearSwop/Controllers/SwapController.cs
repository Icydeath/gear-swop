using System.Text.Json;
using GearSwop.SwapProcessor;
using Microsoft.AspNetCore.Mvc;

namespace GearSwop.Controllers
{
    [ApiController]
    [Route("swap")]
    public class SwapController : ControllerBase
    {
        private readonly IProcessor processor;

        public SwapController(IProcessor processor)
        {
            this.processor = processor;
        }

        /*[HttpGet]
        public string GetSwap()
        {
            return "taco";
        }*/

        [HttpPost]
        public IActionResult PostSwap([FromBody] Swap formResponse)
        {
            return Ok(processor.StartProcessing(formResponse));
        }
    }
}