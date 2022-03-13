window.addEventListener('load', solve);

function solve() {
    const addButtonElement = document.getElementById('add'); // референция към съответен DOM обект
    const modelInputElement = document.getElementById('model'); // референция към съответен DOM обект
    const yearInputElement = document.getElementById('year'); // референция към съответен DOM обект
    const descriptionInputElement = document.getElementById('description'); // референция към съответен DOM обект
    const priceInputElement = document.getElementById('price'); // референция към съответен DOM обект
    const furnitureListElement = document.getElementById('furniture-list'); // референция към съответен DOM обект

    addButtonElement.addEventListener('click', (e) => {
        e.preventDefault(); // default-тното поведение е рефреш на страницата и с това ние спираме това действие

        let model = modelInputElement.value;
        let description = descriptionInputElement.value;
        let year = Number(yearInputElement.value); // parse-ваме към number
        let price = Number(priceInputElement.value); // parse-ваме към number

        modelInputElement.value = ''; // празен string
        descriptionInputElement.value = ''; // празен string
        yearInputElement.value = ''; // празен number
        priceInputElement.value = ''; // празен number

        // Ако if проверките не са изпълнени, няма да продължим изпълнението на кода
        if (!model || !description) { // проверка в случай, че model and description ги няма
            return;
        }

        if (year <= 0 || price <= 0) {
            return;
        }

        let rowElement = document.createElement('tr'); // 
        let modelCellElement = document.createElement('td'); // 
        let priceCellElement = document.createElement('td'); // 
        let actionsCellElement = document.createElement('td'); // 
        let infoButtonElement = document.createElement('button'); // 
        let buyButtonElement = document.createElement('button'); // 
        let contentsRowElement = document.createElement('tr'); // 
        let yearContentElement = document.createElement('td'); // 
        let descriptionContentElement = document.createElement('td'); // 
        let totalPriceElement = document.querySelector('.total-price'); //

        modelCellElement.textContent = model;
        priceCellElement.textContent = price.toFixed(2);

        infoButtonElement.textContent = 'More Info';
        infoButtonElement.classList.add('moreBtn');
        infoButtonElement.addEventListener('click', (e) => {
            if (e.currentTarget.textContent == 'More Info') {
                contentsRowElement.style.display = 'contents';
                e.currentTarget.textContent = 'Less Info';
            } else {
                contentsRowElement.style.display = 'none';
                e.currentTarget.textContent = 'More Info';
            }
        });

        buyButtonElement.textContent = 'Buy it';
        buyButtonElement.classList.add('buyBtn');
        buyButtonElement.addEventListener('click', (e) => {
            let currentTotalPrice = Number(totalPriceElement.textContent);
            let totalPrice = currentTotalPrice + price;
            totalPriceElement.textContent = totalPrice.toFixed(2);

            rowElement.remove();
            contentsRowElement.remove();
        });

        actionsCellElement.appendChild(infoButtonElement);
        actionsCellElement.appendChild(buyButtonElement);

        rowElement.classList.add('info');

        rowElement.appendChild(modelCellElement);
        rowElement.appendChild(priceCellElement);
        rowElement.appendChild(actionsCellElement);

        yearContentElement.textContent = `Year: ${year}`;
        descriptionContentElement.setAttribute('colspan', 3);
        descriptionContentElement.textContent = `Description: ${description}`;

        contentsRowElement.classList.add('hide');
        contentsRowElement.style.display = 'none';

        contentsRowElement.appendChild(yearContentElement);
        contentsRowElement.appendChild(descriptionContentElement);

        furnitureListElement.appendChild(rowElement);
        furnitureListElement.appendChild(contentsRowElement);
    });
}

// const
