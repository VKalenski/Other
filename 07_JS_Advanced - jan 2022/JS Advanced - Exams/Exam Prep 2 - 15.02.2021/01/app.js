function solution() {

    // Attach event listeners to input form
    // Създаваме масив с трите списъка, които ще манипулирам
    const [gifts, sent, discarded] = document.querySelectorAll('section ul'); // в скобите са нови променливи
    const input = document.querySelector('input');
    document.querySelector('button').addEventListener('click', addGift); // достъпваме бутона и създаваме препратка към нова функция addGift

    // Create gift elements with buttons
    function addGift() {
        const name = input.value; // взимаме стойността на input-a от HTML
        input.value = ''; // по този начин изчистваме value -> правим го празен string

        const element = e('li', name, 'gift'); // втори параметър е: name, който е text content; трябва да има и трети параметър, който се явява class gift (който е string)
        const sendBtn = e('button', 'Send', 'sendButton'); // създаване на бутон
        const discardBtn = e('button', 'Discard', 'discardButton'); // създаване на бутон

        // След като сме създали тези два бутони, трябва да ги закачим към element
        element.appendChild(sendBtn);
        element.appendChild(discardBtn);

        // След като сме създали element и сме прикрепили два бутона е необходимо да го вкараме в списъка с подаръци - gifts
        gifts.appendChild(element);

        // Логика за бутони, които изпращат
        sendBtn.addEventListener('click', () => sendGift(name, element)) // () => ... - това е анонимна функция
        discardBtn.addEventListener('click', () => discardGift(name, element)) // () => ... - това е анонимна функция

        // Необходимо е да сортираме добавените подаръци
        sortGifts();
    }

    // Logic for sending gifts
    function sendGift(name, gift) {
        // remove element from original list
        gift.remove();

        // create new list item -> това го правим, за да махнем бутоните
        const element = e('li', name, 'gift');

        // add element to new list
        sent.appendChild(element);
    }

    // Logic for discarding gifts
    function discardGift(name, gift) {
        // remove element from original list
        gift.remove();

        // create new list item -> това го правим, за да махнем бутоните
        const element = e('li', name, 'gift');

        // discarded element to new list
        discarded.appendChild(element);
    }

    // Sort gifts list
    function sortGifts() {
        // Използваме Array заради judge
        Array.from(gifts.children)
            .sort((a, b) => a.textContent.localeCompare(b.textContent))
            .forEach(g => gifts.appendChild(g)); // Обхождаме всеки елемент с цел след това да се сортират по азбучен ред
        // textContent хваща текста на всички children елементи
    }

    // Създаваме и изнасяме допълнителна функция - utility function
    function e(type, content, className) {
        const result = document.createElement(type);
        result.textContent = content;
        if (className) {
            result.className = className;
        }

        return result;
    }

    // Какво използвахме:

    // const;
    // document - object;

    // querySelector - method;
    // querySelectorAll - method;
    // addEventListener - method;
    // appendChild - method;
    // createElement - method;
    // remove - method;
    // from - method;
    // sort - method;
    // forEach - method;

    // Array - Interface;

    // () => - anonymous function;    
}