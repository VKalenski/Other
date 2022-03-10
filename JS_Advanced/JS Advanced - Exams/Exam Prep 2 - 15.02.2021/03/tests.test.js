const dealership = require('./03.Dealership');
const expect = require('chai').expect;

describe('test', () => {
    describe('newCarCost', () => {
        // model is suported -> price rediced by model value
        it('returns discounted price', () => {
            expect(dealership.newCarCost('Audi A4 B8', 30000)).to.equal(15000); // лявата част трябва да е равна на дясната, т.е. след to.equal
        });

        // model is not suported -> no discount
        it('returns original price when model unsuported', () => {
            expect(dealership.newCarCost(['a'], 1)).to.equal(1);
        });
    });

    describe('carEquipment', () => {
        // single element, single pick
        it('single element, single pick', () => {
            expect(dealership.carEquipment(['a'], [0])).to.deep.equal(['a']);
        });

        // test overloading - multiple elements, multiple picks
        it('single element, single pick', () => {
            expect(dealership.carEquipment(['a', 'b', 'c'], [0, 2])).to.deep.equal(['a', 'c']);
        });

        it('single element, single pick', () => {
            expect(dealership.carEquipment(['a', 'b', 'c'], [1])).to.deep.equal(['b']);
        });
    });

    describe('euroCategory', () => {
        // category is below threshold - необходим ни е, за да разберем какво става, когато сме под границата
        it('category is below threshold', () => {
            expect(dealership.euroCategory(1)).to.equal('Your euro category is low, so there is no discount from the final price!');
        });

        // category is above threshold - необходим ни е, за да разберем какво става, когато преминем границата
        it('category is above threshold', () => {
            expect(dealership.euroCategory(5)).to.equal(`We have added 5% discount to the final price: 14250.`);
        });

        // category is at threshold (edge case - граничен случай) - необходим ни е, защото при промяна в основния код не се наблюдава покриване на гранчния случай
        it('category is above threshold', () => {
            expect(dealership.euroCategory(4)).to.equal(`We have added 5% discount to the final price: 14250.`);
        });
    });
});

// describe - синтаксис от Mocha. Приема два параметъра: първият е името на категорията (test), а вторият: функция - () => 
// it - синтаксис от Mocha or Chai
// expect - синтаксис от Mocha or Chai

// За да напишем тестовете гледаме само спецификацията
// Само ако нещо в спецификацията не е ясно, тогава гледаме кода
// Важно е да хванем граничните случаи
// Ако счупим основния код и тестовете минават - значи тестовете не са покрили част от сценариите