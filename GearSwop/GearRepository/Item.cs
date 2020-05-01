using System.Collections.Generic;

namespace GearSwop.GearRepository
{
    public class Item
    {
        private string ItemId { get; set; }
        public string Name { get; set; }
        public string LName { get; set; }
        public List<string> Slots { get; set; }
        public List<string> Jobs { get; set; }
        public List<string> Flags { get; set; }
        public int Lvl { get; set; }
        public string Description { get; set; }
        public int ItemLevel { get; set; }
    }
}