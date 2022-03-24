class ChristmasDinner {
    // Създаваме списък с продукти
    constructor(budget) {
        this.budget = budget; // this.budget автоматично извиква set-ъра
        this.products = []; // продуктът е масив, като винаги ще има две свойства - име и цена
        this.dishes = []; // празен масив
        this.guests = {}; // празен обект
    }

    // Валидацията става с get and set
    // Свойстовото budget всъщност е get-ър и set-ър
    get budget() {
        return this._budget; // _budget - наименование на private property, като важното е, да не е budget, защото иначе влизаме в рекурсия
    }
    // _budget пази стойността и когато тя ни потрябва я взимаме от get-ъра
    // _budget не се инициализира директно в конструктора, защото по този начин заобикаляме валидатора

    set budget(value) {
        if (value < 0) {
            throw new Error("The budget cannot be a negative number"); // Хвърляме грешка при по-малко от 0
        }
        return this._budget = value; // _budget - наименование на private property, 
    }

    // Method
    shopping(product) {
        let [item, price] = product;
        if (this._budget < price) {
            throw new Error("Not enough money to buy this product");
        }

        // При преминаване на проверката следва добавянето в масива
        this.products.push(item); // пушваме масив от string
        this._budget -= price;
        return `You have successfully bought ${item}!`;
    }

    // Method
    recipes(recipe) {
        const productsList = recipe.productsList;
        const recipeName = recipe.recipeName;

        productsList.forEach((el) => {
            if (!this.products.includes(el)) {
                throw new Error("We do not have this product");
            }
        });

        // При преминаване на проверката следва добавянето в масива
        this.dishes.push({ recipeName, productsList }); // пушваме масива, вкарваме ги в един обект и ги пушваме вътре
        return `${recipeName} has been successfully cooked!`;
    }

    // Method
    inviteGuests(name, dish) {
        if (!this.dishes.values(dish)) {
            return "We do not have this dish";
        } else if (this.guests[name]) {
            throw new Error("This guest has already been invited");
        }
        
        this.guests[name] = dish;
        return `You have successfully invited ${name}!`;
    }

    // Method
    showAttendance() {
        let result = [];
        for (const name in this.guests) {
            let dish = this.guests[name];
            let products = this.dishes.find((el) => el.recipeName == dish)
            result.push(`${name} will eat ${dish}, which consists of ${products.productsList.join(', ')}`);
        }
        return result.join('\n').trimEnd();
    }
}

// Example for check how works our code
let dinner = new ChristmasDinner(300);
console.log(dinner.shopping(['Salt', 1]));
console.log(dinner.shopping(['Beans', 3]));
console.log(dinner.shopping(['Cabbage', 4]));
console.log(dinner.shopping(['Rice', 2]));
console.log(dinner.shopping(['Savory', 1]));
console.log(dinner.shopping(['Peppers', 1]));
console.log(dinner.shopping(['Fruits', 40]));
console.log(dinner.shopping(['Honey', 10]));
console.log(dinner.recipes({
    recipeName: 'Oshav',
    productsList: ['Fruits', 'Honey']
}));
console.log(dinner.recipes({
    recipeName: 'Folded cabbage leaves filled with rice',
    productsList: ['Cabbage', 'Rice', 'Salt', 'Savory']
}));
console.log(dinner.recipes({
    recipeName: 'Peppers filled with beans',
    productsList: ['Beans', 'Peppers', 'Salt']
}));
console.log(dinner.inviteGuests('Ivan', 'Oshav'));
console.log(dinner.inviteGuests('Petar', 'Folded cabbage leaves filled with rice'));
console.log(dinner.inviteGuests('Georgi', 'Peppers filled with beans'));
console.log(dinner.showAttendance());


// class
// constructor
// this
// forEach