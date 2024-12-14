document.addEventListener('DOMContentLoaded', (event) => {
    const showResultsButton = document.getElementById('resultButton');
    const resultsModal = document.getElementById('resultsModal');
    const closeSpan = document.querySelector('.close');
    const resultsTableBody = document.querySelector('#resultsTable tbody');

    showResultsButton.addEventListener('click', () => {
        const labels = [
            document.getElementById('textInputLabel').innerText,
            document.getElementById('textInput2Label').innerText,
            document.getElementById('textInput3Label').innerText
        ];

        const inputs = [
            document.getElementById('textInput').value,
            document.getElementById('textInput2').value,
            document.getElementById('textInput3').value
        ];

        resultsTableBody.innerHTML = ''; // Очистка текущих результатов

        labels.forEach((label, index) => {
            const row = document.createElement('tr');
            const cellLabel = document.createElement('td');
            const cellInput = document.createElement('td');
            cellLabel.textContent = label;
            cellInput.textContent = inputs[index];
            row.appendChild(cellLabel);
            row.appendChild(cellInput);
            resultsTableBody.appendChild(row);
        });

        resultsModal.style.display = 'block'; // Показ всплывающего окна
    });

    closeSpan.addEventListener('click', () => {
        resultsModal.style.display = 'none'; // Скрытие всплывающего окна
    });

    window.addEventListener('click', (event) => {
        if (event.target === resultsModal) {
            resultsModal.style.display = 'none'; // Скрытие окна при клике вне его
        }
    });
});
