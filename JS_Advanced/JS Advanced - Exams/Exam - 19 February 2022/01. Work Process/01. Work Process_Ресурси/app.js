window.addEventListener('load', solve);

function solve() {
    // Get elements by Id
    let fnameInputElement = document.getElementById('fname'); // Референция към съответен DOM обект
    let lnameInputElement = document.getElementById('lname'); // Референция към съответен DOM обект
    let emailInputElement = document.getElementById('email'); // Референция към съответен DOM обект
    let birthInputElement = document.getElementById('birth'); // Референция към съответен DOM обект
    let positionInputElement = document.getElementById('position'); // Референция към съответен DOM обект
    let salaryInputElement = document.getElementById('salary'); // Референция към съответен DOM обект
    let sumSalaray = document.getElementById('sum'); // Референция към съответен DOM обект

    // Create new variable    
    let sum = 0; // Деклариране на нова променлива

    // Create add button
    let addWorkerButton = document.getElementById('add-worker');
    addWorkerButton.addEventListener('click', (eventOne) => {
        eventOne.preventDefault(); // Stop default refresh

        let fname = fnameInputElement.value; // Присвояване на стойност
        let lname = lnameInputElement.value; // Присвояване на стойност
        let email = emailInputElement.value; // Присвояване на стойност
        let birth = birthInputElement.value; // Присвояване на стойност
        let position = positionInputElement.value; // Присвояване на стойност
        let salary = salaryInputElement.value; // Присвояване на стойност

        // Check for empty fields
        if (fname != '' && lname != '' && email != '' && birth != '' && position != '' && salary != '') { 
            let firstTable = document.querySelector('.tbl-header table'); // Създаване на нова таблица
            let tableBodyElement = document.createElement('tbody');
            tableBodyElement.id = 'tbody';

            // Create table row with fields and buttons 
            let tableRow = document.createElement('tr'); // Създаване на нов ред

            let td1 = document.createElement('td'); // Създаване на нова колона в реда
            td1.textContent = fname; // Прехвърляне на стойност

            let td2 = document.createElement('td'); // Създаване на нова колона в реда
            td2.textContent = lname; // Прехвърляне на стойност

            let td3 = document.createElement('td'); // Създаване на нова колона в реда
            td3.textContent = email; // Прехвърляне на стойност

            let td4 = document.createElement('td'); // Създаване на нова колона в реда
            td4.textContent = birth; // Прехвърляне на стойност

            let td5 = document.createElement('td'); // Създаване на нова колона в реда
            td5.textContent = position; // Прехвърляне на стойност

            let td6 = document.createElement('td'); // Създаване на нова колона в реда
            td6.textContent = salary; // Прехвърляне на стойност

            tableRow.appendChild(td1); // Привързване към родител
            tableRow.appendChild(td2); // Привързване към родител
            tableRow.appendChild(td3); // Привързване към родител
            tableRow.appendChild(td4); // Привързване към родител
            tableRow.appendChild(td5); // Привързване към родител
            tableRow.appendChild(td6); // Привързване към родител

            let largeTD = document.createElement('td'); // Създаване на нова колона
            
            // Create Fired button
            let btnFired = document.createElement('button'); // Създаване на нов бутон
            btnFired.textContent = 'Fired'; // Надпис на бутона
            btnFired.classList.add('fired'); // 

            // Create Edit button
            let btnEdit = document.createElement('button'); // Създаване на нов бутон
            btnEdit.textContent = 'Edit'; // Надпис на бутона
            btnEdit.classList.add('edit'); //      

            largeTD.appendChild(btnFired); // Привързване към родител
            largeTD.appendChild(btnEdit); // Привързване към родител

            tableRow.appendChild(largeTD); // Привързване към родител

            tableBodyElement.appendChild(tableRow); // Привързване към родител
            firstTable.appendChild(tableBodyElement); // Привързване към родител

            // Logic for empty fields
            fnameInputElement.value = '';
            lnameInputElement.value = '';
            emailInputElement.value = '';
            birthInputElement.value = '';
            positionInputElement.value = '';
            salaryInputElement.value = '';

            // Logic for salary
            sum += Number(salary); // Присвояване на стойност
            sumSalaray.textContent = sum.toFixed(2);

            // Logic for Edit button
            btnEdit.addEventListener('click', (eventTwo) => {
                fnameInputElement.value = fname;
                lnameInputElement.value = lname;
                emailInputElement.value = email;
                birthInputElement.value = birth;
                positionInputElement.value = position;
                salaryInputElement.value = salary;

                sum -= Number(salary);
                sumSalaray.textContent = sum.toFixed(2);

                eventTwo.target.parentNode.parentNode.remove();
            });

            // Logic for Fired button
            btnFired.addEventListener('click', (eventNext) => {
                eventNext.target.parentNode.parentNode.remove();
                let salary = Number(eventNext.target.parentNode.parentNode.querySelector('td:nth-child(6)').textContent);
                sum -= Number(salary);
                sumSalaray.textContent = sum.toFixed(2);
            });
        };
    });
};

// classList
// target
// parentNode