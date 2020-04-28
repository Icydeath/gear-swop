using System.Collections.Generic;

namespace GearSwop.SwapProcessor
{
    public interface IProcessor
    {
        Swap StartProcessing(string item);
    }
    
    public class Processor: IProcessor
    {
        public Swap StartProcessing(string item)
        {
            return new Swap()
            {
                CharacterName = item,
                Job = item,
                FileContent = new LuaFile()
            };
        }
    
        private List<GearSet> GenerateGearSet()
        {
            return new List<GearSet>();
        }
    }
}