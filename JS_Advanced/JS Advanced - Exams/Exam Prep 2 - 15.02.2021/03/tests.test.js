const dealership = require('./03.Dealership');
const expect = require('chai').expect;

describe('test', () => {
    it('works', () => {
        expect(1).to.equal(1); // функцията it отново приема два параметъра: името на категорията и функция, която да се изпълни
    }); // т.е. ако функцията () => хвърли грешка, mocha казва, че теста не е минал
}); // за да хвърли грешка използваме expect, който идва от chai


// describe - синтаксис от Mocha. Приема два параметъра: първият е името на категорията (test), а вторият: функция - () => ...;









// const { assert } = require('chai');
// const dealership = require('./03.Dealership.js');

// describe('Dealer Ship Testing', () => {
//     it('New CarCost', () => {
//         assert.equal(dealership.newCarCost('Audi A4 B8', 100000), 85000);
//         assert.equal(dealership.newCarCost('B', 1), 1);
//     });

//     it('Car Equipment', () => {
//         assert.deepEqual(dealership.carEquipment(
//             ['a', 'b', 'c', 'd'], []), []);

//         assert.deepEqual(dealership.carEquipment(
//             ['a', 'b', 'c', 'd'], [0, 2, 3]), ['a', 'c', 'd']);
//     });

//     it('Euro Category', () => {
//         assert.equal(dealership.euroCategory(3),
//             'Your euro category is low, so there is no discount from the final price!');

//         assert.equal(dealership.euroCategory(4),
//             `We have added 5% discount to the final price: 14250.`);

//         assert.equal(dealership.euroCategory(5),
//             `We have added 5% discount to the final price: 14250.`)
//     });
// });