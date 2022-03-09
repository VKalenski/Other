
// Създаване на бутони, избирайки ги по id
function attachEvents() {
    document.getElementById('submit').addEventListener('click', sendMessage);
    document.getElementById('refresh').addEventListener('click', getMessage);
}

attachEvents()

// Създаване на метод за изпращане на съобщения
async function sendMessage() {
    const author = document.getElementById('author').value;
    const content = document.getElementById('content').value;

    // Добавени са и ограничаващи съобщения - alert
    if (author == '' || content == '') {
        return alert('All fields are required!');
    }

    // С fetch достъпваме сървъра, за да можем да правим заявки
    await fetch('http://localhost:3030/jsonstore/messenger', {
        method: 'post',
        headers: { 'Content-Type': 'applications/json' },
        body: JSON.stringify({ author, content })
    });

    document.getElementById('author').value = '';
    document.getElementById('content').value = '';

    getMessage();
}

// Създаване на метод за показване на съобщенията
async function getMessage() {
    const response = await fetch('http://localhost:3030/jsonstore/messenger');
    const data = await response.json();

    const messages = document.getElementById('messages');

    // Неизвестно...
    messages.value = Object.values(data)
        //
        .map((e) => `${e.author}: ${e.content}`)
        .join('\n');
    console.log(Object.values(data))
}