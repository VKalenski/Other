﻿using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace CocktailParty
{
    public class Cocktail
    {
        private List<Ingredient> ingredients;
        public Cocktail(string name, int capacity, int maxAlcoholLevel)
        {
            this.Name = name;
            this.Capacity = capacity;
            this.MaxAlcoholLevel = maxAlcoholLevel;
            ingredients = new List<Ingredient>();
        }
        public string Name { get; set; }
        public int Capacity { get; set; }
        public int MaxAlcoholLevel { get; set; }
        public int CurrentAlcoholLevel => ingredients.Sum(alcohol => alcohol.Alcohol);

        public void Add(Ingredient ingredient)
        {
            bool isIngredient = false;

            foreach (Ingredient element in ingredients)
            {
                if (element.Name == ingredient.Name)
                {
                    isIngredient = true;
                }
            }
            if (!isIngredient)
            {
                if (ingredients.Count < Capacity && CurrentAlcoholLevel <= MaxAlcoholLevel)
                {
                    ingredients.Add(ingredient);
                }
            }
        }
        public bool Remove(string name)
        {
            bool isIngredient = false;

            foreach (Ingredient ingredient in ingredients)
            {
                if (ingredient.Name == name)
                {
                    isIngredient = true;
                }
            }
            if (isIngredient)
            {
                ingredients.Remove(ingredients.FirstOrDefault(ingredient => ingredient.Name == name));
                return true;
            }

            return false;
        }        
        public Ingredient FindIngredient(string name)
        {
            return ingredients.FirstOrDefault(n => n.Name == name);            
        }
        public Ingredient GetMostAlcoholicIngredient()
        {
            return ingredients.OrderByDescending(i => i.Alcohol).FirstOrDefault();
        }   
        public string Report()
        {
            StringBuilder sb = new StringBuilder();

            sb.AppendLine($"Cocktail: {Name} - Current Alcohol Level: {CurrentAlcoholLevel}\r\n");
            
            foreach (Ingredient ingredient in ingredients)
            {              
                sb.AppendLine(ingredient.ToString());
            }
            return sb.ToString().TrimEnd();
        }
    }
}