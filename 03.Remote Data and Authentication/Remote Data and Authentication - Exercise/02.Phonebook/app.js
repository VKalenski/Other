
// Създаване на бутони, избирайки ги по id
function attachEvents() {
    document.getElementById('btnLoad').addEventListener('click', loadPosts);
    document.getElementById('btnCreate').addEventListener('click', createPost);
}

attachEvents();

// С fetch достъпваме сървъра, за да можем да правим заявки
async function loadPosts() {
    const ul = document.getElementById('phonebook');
    const response = await fetch('http://localhost:3030/jsonstore/phonebook');
    const data = await response.json();

    // Неизвестно...
    ul.innerHTML = ''

    // За добавяне на елементи чрез обхождане
    Object.values(data)
        .map(createElement)
        .forEach((p) => ul.appendChild(p))
}

// Създаване на функция за изтриване на данни
async function deletePost(event) {
    const id = event.target.parentNode.id;
    const url = `http://localhost:3030/jsonstore/phonebook/` + id

    // Дефиниране на заявката
    const response = await fetch(url, {
        method: 'delete',
        headers: { 'Content-Type': 'application/json' },
    })
    event.target.parentNode.remove();
}

// Дефиниране на функция за записване на данни на сървъра
async function createPost() {
    const person = document.getElementById('person').value;
    const phone = document.getElementById('phone').value;

    if (person && phone) {
        const response = await fetch('http://localhost:3030/jsonstore/phonebook', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ person, phone })
        });

        loadPosts();

        // Изписване на предупредително съобщение
    } else {
        return alert('All fileds are required!');
    }
}

// Създаване...
function createElement({ person, phone, _id }) {
    const contact = document.createElement('li');
    contact.setAttribute('id', _id);
    contact.textContent = `${person}: ${phone}`;

    const delBtn = document.createElement('button');
    delBtn.textContent = 'Delete';
    delBtn.addEventListener('click', deletePost);
    contact.append(delBtn);

    return contact;
}