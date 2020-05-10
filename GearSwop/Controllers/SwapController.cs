using System.Collections.Generic;
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

        [HttpPost]
        public IActionResult PostSwap(GearSwapRequest request)
        {
            var result = processor.ProcessGearSwap(request);
            Response.Headers.Add("Content-Disposition", $"attachment; filename=\"{result.CharacterName}_{result.Job}.lua\"");
            return Content(result.FileContent, "text/plain");
        }
    }

    public class GearSwapRequest
    {
        public string CharacterName { get; set; }
        public string CharacterJob { get; set; }
        public List<GearSet> GearSets { get; set; }
    }
}
