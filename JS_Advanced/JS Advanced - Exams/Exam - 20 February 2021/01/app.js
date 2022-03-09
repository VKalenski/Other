function solve() {

    // const
    // document.by something
    // addEventListener
    // 

    const sectionInMain = document.querySelector('main>section');
    const button = document.querySelector('button');

    // Създаване на бутон, връщащ действие
    button.addEventListener('click', function (ev) {
        ev.preventDefault();
        [creator, title, category] = Array.from(ev.target.parentNode.querySelectorAll('input'));

        // Създаване на елемент content
        const content = ev.target.parentNode.querySelector('textarea');

        // Създаване на елемент article
        const article = createElement('article');

        // Създаване на елемент h1
        const h1 = createElement('h1', title.value,);

        // Селектира всички параграфи в html-а, с id = 'category'
        const p1 = createElement('p', 'Category:');
        createElement('strong', category.value, undefined, p1);

        // Селектира всички параграфи в html-а с tag name
        const p2 = createElement('p', 'Creator:');
        createElement('strong', creator.value, undefined, p2);

        // Създаването на HTML елементи в .js се нарича Factory Pattern
        const p3 = createElement('p', content.value)
        const div = createElement('div', undefined, 'buttons');
        const deleteBtn = createElement('button', 'Delete', "btn delete", div);
        const archiveBtn = createElement('button', 'Archive', "btn archive", div);

        //...
        [h1, p1, p2, p3, div].forEach((el) => article.appendChild(el));
        sectionInMain.appendChild(article);
        [creator, title, category, content].forEach((el) => el.value = '');

        // Създаване на действие - бутон със съответните функции
        deleteBtn.addEventListener('click', onClickDelete);
        archiveBtn.addEventListener('click', onClickArchive);

        // Създаване на функция за изтриване
        function onClickDelete() {
            article.parentNode.removeChild(article);
        }

        // Създаване на функция за архивиране
        function onClickArchive() {
            const ol = document.querySelector('ol');
            createElement('li', h1.textContent, undefined, ol);
            Array.from(ol.querySelectorAll('li')).sort((a, b) =>
                a.textContent.localeCompare(b.textContent)).forEach(li => ol.appendChild(li))

            article.parentNode.removeChild(article);
        }
    });

    // Създаване на... тип, съдържание, ..., добавяне
    function createElement(type, content, attribute, appender) {
        const el = document.createElement(type);
        if (attribute) {
            el.setAttribute('class', attribute);
            el.textContent = content;
        } else if (content) {
            el.textContent = content;
        }
        if (appender) {
            appender.appendChild(el);
        }
        return el;
    }
}