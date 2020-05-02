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
        List<ItemMap> GetItemMap();
    }
    
    public class GearInfoWorkflow: IGearInfoWorkflow
    {
        private Dictionary<int, Item> AllItems;
        private List<ItemMap> MappedItems;
        
        public GearInfoWorkflow()
        {
            AllItems = ParseItemJson();
            MappedItems = MapItems(AllItems);
        }
        
        public Item GetGearInfo(int itemId)
        {
            return AllItems[itemId];
        }

        public List<ItemMap> GetItemMap()
        {
            return MappedItems;
        }

        public List<ItemMap> MapItems(Dictionary<int, Item> dictionary)
        {
            var result = new List<ItemMap>();
            foreach (var item in dictionary)
            {
                result.Add(new ItemMap
                {
                    ItemId = item.Key,
                    ItemShortName = item.Value.Name,
                    ItemLongName = item.Value.LName
                });
            }

            return result;
        }

        public Dictionary<int, Item> ParseItemJson()
        {
            const string filePath = @"./GearRepository/items.json";
            var streamReader = File.OpenText(filePath);
            var itemsText = streamReader.ReadToEnd();

            return JsonConvert.DeserializeObject<Dictionary<int, Item>>(itemsText);
        }
    }

    public class ItemMap
    {
        public int ItemId { get; set; }
        public string ItemShortName { get; set; }
        public string ItemLongName { get; set; }
    }
    
}