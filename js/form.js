document.getElementById("TeaServery").onsubmit = function(event) {
    event.preventDefault(); // Предотвращаем отправку формы по умолчанию

    ////Создает новый объект FormData из формы, вызвавшей событие (event.target). Этот объект содержит все данные формы.
    const data = Object.fromEntries(formData.entries());
    const formData = new FormData(event.target); 
    //Преобразует объект FormData в обычный объект JavaScript. formData.entries() возвращает итератор 
    //с парами ключ-значение для каждого элемента формы, а Object.fromEntries() создает из них объект.

    // Валидация данных
    if (!data.textInput || !data.textInput2 || !data.textInput3) {
        alert("Пожалуйста, заполните все обязательные поля.");
        return;
    }

    // Получение существующих данных
    let results = JSON.parse(localStorage.getItem('TeaServery')) || [];
    //localStorage.getItem('TeaServery'): Получает строку данных, сохраненную в локальном хранилище браузера под ключом 'TeaServery'.
    //JSON.parse(): Преобразует эту строку в объект JavaScript.
    //let results = ... || [];: Если данных под ключом 'TeaServery' нет (возвращают null), то переменной results присваивается пустой массив [].

    // Добавление новых данных
    results.push(data);

    // Сохранение данных в localStorage
    localStorage.setItem('TeaServery', JSON.stringify(results));

    // Очистка формы
    event.target.reset();
};