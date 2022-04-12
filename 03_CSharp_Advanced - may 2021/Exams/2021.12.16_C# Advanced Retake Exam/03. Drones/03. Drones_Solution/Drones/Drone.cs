namespace Drones
{
    public class Drone
    {
        public Drone(string name, string brand, int range)
        {
            this.Name = name;
            this.Brand = brand;
            this.Range = range;
        }
        public string Name { get; set; }
        public string Brand { get; set; }
        public int Range { get; set; }

        public override string ToString()
        {
            return $"Drone: {Name} \n\r" +
                   $"Manufactured by: { Brand} \n\r" +
                   $"Range: { Range} \n\r" +
                   $"kilometers";
        }
    }
}