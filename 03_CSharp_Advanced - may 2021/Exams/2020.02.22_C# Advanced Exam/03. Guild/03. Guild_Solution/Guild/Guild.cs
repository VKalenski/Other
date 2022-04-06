using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Guild
{
    public class Guild
    {
        private const string RANK_MEMBER = "Member";
        private const string RANK_TRIAL = "Trial";

        public Guild(string name, int capacity)
        {
            Name = name;
            Capacity = capacity;
            Roster = new HashSet<Player>();
        }

        public HashSet<Player> Roster { get; set; }

        public string Name { get; set; }

        public int Capacity { get; private set; }

        public int Count => Roster.Count;

        public void AddPlayer(Player player)
        {
            if (Count < Capacity)
            {
                Roster.Add(player);
            }
        }

        public bool RemovePlayer(string name)
        {
            Player playerToRemove = Roster.FirstOrDefault(p => p.Name == name);

            if (playerToRemove != null)
            {
                Roster.Remove(playerToRemove);
                return true;
            }

            return false;
        }

        public void PromotePlayer(string name)
        {
            Player playerToChangeRank = Roster.FirstOrDefault(p => p.Name == name);

            if (playerToChangeRank != null)
            {
                playerToChangeRank.Rank = RANK_MEMBER;
            }
        }

        public void DemotePlayer(string name)
        {
            Player playerToChangeRank = Roster.FirstOrDefault(p => p.Name == name);

            if (playerToChangeRank != null)
            {
                playerToChangeRank.Rank = RANK_TRIAL;
            }
        }

        public Player[] KickPlayersByClass(string _class)
        {
            Player[] removedPlayers = Roster.Where(p => p.Class == _class).ToArray();

            if (removedPlayers != null)
            {
                Roster = Roster.Where(p => p.Class != _class).ToHashSet();
            }

            return removedPlayers;
        }

        public string Report()
        {
            StringBuilder sb = new StringBuilder();
            sb.AppendLine($"Players in the guild: {Name}");
            foreach (Player player in Roster)
            {
                sb.AppendLine($"{player}");
            }

            return sb.ToString().TrimEnd();
        }
    }
}
