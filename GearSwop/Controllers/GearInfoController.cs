using System.Collections.Generic;
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

        [HttpGet("itemMap")]
        public List<ItemMap> GetItemMap()
        {
            var itemMap = _gearInfoWorkflow.GetItemMap();
            return itemMap;
        }
        
        [HttpGet("gearSuggestions/{job}/{slot}/{queryString}")]
        public List<string> GetGearSuggestions(string job, string slot, string queryString)
        {
            return _gearInfoWorkflow.GetGearSuggestions(job, slot, queryString);
        }
    }
}