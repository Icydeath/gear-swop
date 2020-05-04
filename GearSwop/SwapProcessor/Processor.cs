using System.Collections.Generic;

namespace GearSwop.SwapProcessor
{
    public interface IProcessor
    {
        Swap StartProcessing(Swap formResponse);
    }
    
    public class Processor: IProcessor
    {
        public Swap StartProcessing(Swap formResponse)
        {
            return new Swap
            {
                CharacterName = formResponse.CharacterName,
                Job = formResponse.Job,
                FileContent = new LuaFile
                {
                    JobSetup = "Warrior Job Setup goes here eventually",
                    Sets = GenerateGearSets()
                }
            };
        }
    
        private List<GearSet> GenerateGearSets()
        {
            return new List<GearSet>
            {
                new GearSet {
                    Main = "Hardcoded mainhand weapon.",
                    Sub = "Hardcoded sub weapon."
                }
            };
        }
    }
}