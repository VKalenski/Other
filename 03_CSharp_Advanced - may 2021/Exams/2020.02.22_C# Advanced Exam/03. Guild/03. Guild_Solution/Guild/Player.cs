using System.Text;

namespace Guild
{
    public class Player
    {
        private const string DEFAULT_RANK = "Trial";
        private const string DEFAULT_DISCREPTION = "n/a";

        public Player(string name, string _class)
        {
            Name = name;
            Class = _class;
            Rank = DEFAULT_RANK;
            Description = DEFAULT_DISCREPTION;
        }

        public string Name { get; private set; }

        public string Class { get; private set; }

        public string Rank { get; set; }

        public string Description { get; set; }

        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.AppendLine($"Player {Name}: {Class}");
            sb.AppendLine($"Rank: {Rank}");
            sb.AppendLine($"Description: {Description}");
            return sb.ToString().TrimEnd();
        }
    }
}