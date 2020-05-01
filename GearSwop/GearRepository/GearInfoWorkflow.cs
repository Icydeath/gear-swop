using System.Collections.Generic;
using System.IO;
using System.Text.Json;
using Newtonsoft.Json;

namespace GearSwop.GearRepository
{
    
    public interface IGearInfoWorkflow
    {
        Item GetGearInfo(int itemId);
        Dictionary<int, Item> ParseItemJson();
    }
    
    public class GearInfoWorkflow: IGearInfoWorkflow
    {
        private Dictionary<int, Item> AllItems;
        
        public GearInfoWorkflow()
        {
            AllItems = ParseItemJson();
        }
        
        public Item GetGearInfo(int itemId)
        {
            return AllItems[itemId];
        }

        public Dictionary<int, Item> ParseItemJson()
        {
            const string filePath = @"./GearRepository/items.json";
            var streamReader = File.OpenText(filePath);
            var itemsText = streamReader.ReadToEnd();

            return JsonConvert.DeserializeObject<Dictionary<int, Item>>(itemsText);
        }
    }
}