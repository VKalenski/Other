namespace Drones
{
    public class Airfield
    {
        public Airfield(string name, int capacity, double landingStrip)
        {
            this.Name = name;
            this.Capacity = capacity;
            this.LandingStrip = landingStrip;
        }
        public string Name { get; set; }
        public int Capacity { get; set; }
        public double LandingStrip { get; set; }


    }
}