//смена языка
document.addEventListener('DOMContentLoaded', (event) => {
    const russianButton = document.getElementById('russianButton');
    const englishButton = document.getElementById('englishButton');
    const resultButton = document.getElementById('resultButton');

    englishButton.addEventListener('click', () => {
        // Изменение текста в label
        document.querySelector('label[for="dropdown"]').innerText = 'Choose a styling option:';
        document.querySelector('label[for="textInput"]').innerText = 'What kind of tea do you prefer?';
        document.querySelector('label[for="textInput2"]').innerText = 'What do you prefer to drink tea with?';
        document.querySelector('label[for="textInput3"]').innerText = 'The country of origin of your favorite tea:';


        // Изменение текста в кнопках
        russianButton.innerText = 'Russian';
        resultButton.innerText = 'Show Results';

        // Изменение опций в выпадающем списке
        const dropdown = document.getElementById('dropdown');

        const updateOptions = [
            { value: 'option1', text: 'Day' },
            { value: 'option2', text: 'Night' },
            { value: 'option3', text: 'Twilight' }
        ];
        dropdown.innerHTML = ''; // Очистка текущих опций
        updateOptions.forEach(option => {
            const newOption = document.createElement('option');
            newOption.value = option.value;
            newOption.text = option.text;
            dropdown.add(newOption);
        });
        
        
    });

    russianButton.addEventListener('click', () => {
        // Изменение текста в label
        document.querySelector('label[for="dropdown"]').innerText = 'Выберите вариант стилизации:';
        document.querySelector('label[for="textInput"]').innerText = 'Ваш любимый сорт чая:';
        document.querySelector('label[for="textInput2"]').innerText = 'С чем вы предпочитаете пить чай?';
        document.querySelector('label[for="textInput3"]').innerText = 'Страна-производитель вашего любимого чая:';


        // Изменение текста в кнопках
        russianButton.innerText = 'Русский';
        resultButton.innerText = 'Показать результаты';

        // Изменение опций в выпадающем списке
        const dropdown = document.getElementById('dropdown');

        const updateOptions = [
            { value: 'option1', text: 'День' },
            { value: 'option2', text: 'Ночь' },
            { value: 'option3', text: 'Серпия' }
        ];
        dropdown.innerHTML = ''; // Очистка текущих опций
        updateOptions.forEach(option => {
            const newOption = document.createElement('option');
            newOption.value = option.value;
            newOption.text = option.text;
            dropdown.add(newOption);
        });
        
        
    });

});

//показать результаты




