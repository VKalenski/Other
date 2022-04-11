using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace TheRace
{
    public class Race
    {
        readonly List<Racer> data;
        public Race(string name, int capacity)
        {
            this.Name = name;
            this.Capacity = capacity;
            data = new List<Racer>();
        }
        public string Name { get; set; }
        public int Capacity { get; set; }
        public int Count 
        { 
            get 
            {
                return data.Count;
            } 
        }
        public void Add(Racer racer)
        {
            if (data.Count < Capacity)
            {
                data.Add(racer);
            }
        }
        public bool Remove(string name)
        {
            Racer currentRacer = data.FirstOrDefault(x => x.Name == name);
            if (currentRacer != null)
            {
                data.Remove(currentRacer);
                return true;
            }
            else
            {
                return false;
            }          
        }
        public Racer GetOldestRacer()
        {
            return data.OrderByDescending(r => r.Age).FirstOrDefault();
        }
        public Racer GetRacer(string name)
        {
            return data.FirstOrDefault(x => x.Name == name);
        }
        public Racer GetFastestRacer()
        {            
            return data.OrderByDescending(r => r.Car.Speed).FirstOrDefault();
        }
        public string Report()
        {
            StringBuilder sb = new StringBuilder();

            sb.AppendLine($"Racers participating at {this.Name}:");

            foreach (var racer in data)
            {
                sb.AppendLine(racer.ToString());
            }

            return sb.ToString().TrimEnd();            
        }
    }
}