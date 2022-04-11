using System;
using System.Collections.Generic;
using System.Linq;

namespace FishingNet
{
    public class Net
    {
        ICollection<Fish> fishList;

        public Net(string material, int capacity)
        {
            this.Material = material;
            this.Capacity = capacity;
            this.fishList = new List<Fish>();
        }
        public string Material { get; set; }
        public int Capacity { get; set; }

        public int Count 
        { 
            get
            {
                return this.fishList.Count;
            }   
        }

        public string AddFish(Fish fish)
        {
            if (string.IsNullOrWhiteSpace(fish.FishType) || fish.Length <= 0 || fish.Weight <= 0)
            {
                return $"Invalid fish.";
            }
            else if (fishList.Count >= Capacity)
            {
                return "Fishing net is full.";
            }            

            this.fishList.Add(fish);

            return $"Successfully added {fish} to the fishing net.";
        }

        public bool ReleaseFish(double weight)
        {
            var fish = this.fishList.FirstOrDefault(e => e.Weight == weight);
            if (fish != null)
            {
                return this.fishList.Remove(fish);
            }
            return false;
        }

        Fish GetFish(string fishType)
        {
            string returnFish = null;
            if (returnFish)
            {

            }
            return returnFish;
        }
    }
}