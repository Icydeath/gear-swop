using GearSwop.GearRepository;
using Microsoft.AspNetCore.Mvc;

namespace GearSwop.Controllers
{
    public class GearInfoController : ControllerBase
    {
        private readonly IGearInfoWorkflow _gearInfoWorkflow;

        public GearInfoController(IGearInfoWorkflow gearInfoWorkflow)
        {
            _gearInfoWorkflow = gearInfoWorkflow;
        }
        
        [HttpGet("gearInfo/{itemId}")]
        public Item GetSwap(int itemId)
        {
            var gearInfo = _gearInfoWorkflow.GetGearInfo(itemId);
            return gearInfo;
        }
    }
}