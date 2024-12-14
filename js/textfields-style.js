// Событие DOMContentLoaded срабатывает, когда HTML-документ полностью загружен и разобран
document.addEventListener('DOMContentLoaded', (event) => {
    // Получаем элементы текстовых полей по их идентификаторам
    const textInput = document.getElementById('textInput');
    const textInput2 = document.getElementById('textInput2');
    const textInput3 = document.getElementById('textInput3');

    // Добавляем обработчик события 'keydown' к первому текстовому полю
    //e - это параметр функции, который представляет объект события. Когда происходит событие, объект 
    //события содержит информацию о событии (клавиша)
    textInput.addEventListener('keydown', (e) => {
        // Проверяем, нажата ли клавиша Enter (код клавиши 13 или имя 'Enter')
        if (e.key === 'Enter') {
            // Перемещаем фокус на второе текстовое поле
            textInput2.focus();
        }
    });

    textInput2.addEventListener('keydown', (r) => {
        // Проверяем, нажата ли клавиша Enter (код клавиши 13 или имя 'Enter')
        if (r.key === 'Enter') {
            // Перемещаем фокус на второе текстовое поле
            textInput3.focus();
        }
    });
});

//первая буква всегда заглавная в текстовом поле
document.addEventListener('DOMContentLoaded', (event) => {
    const textInputs = [
        document.getElementById('textInput'),
        document.getElementById('textInput2'),
        document.getElementById('textInput3')
    ];
    
    textInputs.forEach(input => {
        input.addEventListener('input', () => {
            input.value = input.value.charAt(0).toUpperCase() + input.value.slice(1);
        });
    });
});


document.addEventListener('DOMContentLoaded', (event) => {
    const dropdown = document.getElementById('dropdown');
    

    dropdown.addEventListener('change', () => {
        const textInput = document.getElementById('textInput');
        const textInput2 = document.getElementById('textInput2');
        const textInput3 = document.getElementById('textInput3');
        const textInputLabel = document.getElementById('textInputLabel');
        const textInput2Label = document.getElementById('textInput2Label');
        const textInput3Label = document.getElementById('textInput3Label');
        const dropdownLabel = document.getElementById('dropdownLabel');
        const cupFoneForm = document.getElementById('fone');
       
        if (dropdown.value === 'option1') { // День
            textInput.style.backgroundColor = 'white';
            textInput.style.color = 'black';
            textInput2.style.backgroundColor = 'white';
            textInput2.style.color = 'black';
            textInput3.style.backgroundColor = 'white';
            textInput3.style.color = 'black';
            
           
            textInputLabel.style.color = 'black';
            textInput2Label.style.color = 'black';
            textInput3Label.style.color = 'black';
            dropdownLabel.style.color = 'black';

            dropdown.style.backgroundColor = 'white';
            dropdown.style.color = 'black';
            dropdown.style.border = '2px solid black';

            cupFoneForm.style.backgroundColor = '#5da130'; 

        } else if (dropdown.value === 'option2') { // Ночь
            textInput.style.backgroundColor = 'black';
            textInput.style.color = 'white';
            textInput2.style.backgroundColor = 'black';
            textInput2.style.color = 'white';
            textInput3.style.backgroundColor = 'black';
            textInput3.style.color = 'white';


            textInputLabel.style.color = 'white';
            textInput2Label.style.color = 'white';
            textInput3Label.style.color = 'white';
            dropdownLabel.style.color = 'white';

            dropdown.style.backgroundColor = 'black';
            dropdown.style.color = 'white';
            dropdown.style.border = '2px solid white';

            cupFoneForm.style.backgroundColor = '#192b0d';

          
        } else if (dropdown.value === 'option3') { // Серпия
            textInput.style.backgroundColor = '#302608';
            textInput.style.color = 'white';
            textInput2.style.backgroundColor = '#302608';
            textInput2.style.color = 'white';
            textInput3.style.backgroundColor = '#302608';
            textInput3.style.color = 'white';

            textInputLabel.style.color = 'white';
            textInput2Label.style.color = 'white';
            textInput3Label.style.color = 'white';
            dropdownLabel.style.color = 'white';

            dropdown.style.backgroundColor = '#302608';
            dropdown.style.color = 'white';
            dropdown.style.border = '2px solid white';

            cupFoneForm.style.backgroundColor = '#4d4d00';
        }
    });
});
