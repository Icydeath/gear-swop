namespace GearSwop
{
    public class Swap
    {
        public Swap(string characterName, string job)
        {
            CharacterName = characterName;
            Job = job;
        }

        private string CharacterName { get; }
        private string Job { get; }
        public LuaFile FileContent { get; set; }
    }
}