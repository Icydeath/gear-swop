namespace GearSwop
{
    public class Swap
    {
        public Swap(string characterName, string job)
        {
            CharacterName = characterName;
            Job = job;
        }

        public string CharacterName { get; }
        public string Job { get; }
        public LuaFile FileContent { get; set; }
    }
}