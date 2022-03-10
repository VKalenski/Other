window.addEventListener('load', solve);

function solve() {

    // Logic for getting information from the hired form   
    const addBtn = document.getElementById('add-worker');
    const firstName = document.getElementById('fname');
    const lastName = document.getElementById('lname');
    const email = document.getElementById('email');
    const dataOfBirth = document.getElementById('birth');
    const position = document.getElementById('position');
    const salary = document.getElementById('salary');
    const newBody = document.getElementById('tbody');

    // Attach event listeners to input form
    addBtn.addEventListener('click', (e) => {
        e.preventDefault();
    })

    let fName = firstName.value;
    let lName = lastName.value;
    let eMail = email.value;
    let dOfBirth = dataOfBirth.value;
    let pos = position.value;
    let sal = Number(salary.value);

    firstName.value = '';
    lastName.value = '';
    email.value = '';
    dataOfBirth.value = '';
    position.value = '';
    salary.value = '';
    newBody.value = '';

    let rowElement = document.createElement('tr'); // Създаване на цял нов ред
    let firstNameCell = document.createElement('td'); // Създаване на колона в реда
    let lastNameCell = document.createElement('td'); // Създаване на колона в реда
    let emailCell = document.createElement('td'); // Създаване на колона в реда
    let dataOfBirthCell = document.createElement('td'); // Създаване на колона в реда
    let positionCell = document.createElement('td'); // Създаване на колона в реда
    let salaryCell = document.createElement('td'); // Създаване на колона в реда  

    firstNameCell.textContent = fName.value;
    lastNameCell.textContent = lName.value;
    emailCell.textContent = eMail.value;
    dataOfBirthCell.textContent = dOfBirth.value;
    positionCell.textContent = pos.value;
    salaryCell.textContent = sal.value;

    rowElement.appendChild(firstNameCell);
    rowElement.appendChild(lastNameCell);
    rowElement.appendChild(emailCell);
    rowElement.appendChild(dataOfBirthCell);
    rowElement.appendChild(positionCell);
    rowElement.appendChild(salaryCell);

    newBody.appendChild(rowElement);



    //     const fName = firstName.value;
    //     const lName = lastName.value;
    //     const eMail = email.value;
    //     const dOfBirth = dataOfBirth.value;
    //     const pos = position.value;
    //     const sal = salary.value;

    //     firstName.value = ''; // по този начин изчистваме value -> правим го празен string
    //     lastName.value = ''; // по този начин изчистваме value -> правим го празен string
    //     email.value = ''; // по този начин изчистваме value -> правим го празен string
    //     dataOfBirth.value = ''; // по този начин изчистваме value -> правим го празен string
    //     position.value = ''; // по този начин изчистваме value -> правим го празен string
    //     salary.value = ''; // по този начин изчистваме value -> правим го празен string

    //     const element = e('submit', fName, lName, eMail, dOfBirth, pos, sal, 'tbl-content')
    // }


    // Logic for Edit button - remove person from list and salary change


    //     // Logic for Fired button - remove person from list

    // //     function e(type, content, className) {
    // //         const result = document.createElement(type);
    // //         result.textContent = content;
    // //         if (className) {
    // //             result.className = className;
    // //         }

    // //         return result;
    // //     }



}
// solve()