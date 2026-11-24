const btn = document.getElementById('deploy-btn');
const statusText = document.getElementById('status-text');
const runCountSpan = document.getElementById('run-count');

let count = 0;

btn.addEventListener('click', () => {
    btn.disabled = true;
    btn.textContent = 'Выполняется проверка...';
    statusText.style.color = '#fbbf24';
    statusText.textContent = '⏳ Проверка index.html, style.css и script.js...';

    setTimeout(() => {
        count++;
        runCountSpan.textContent = count;
        statusText.style.color = '#4ade80';
        statusText.textContent = '✅ Все проверки пройдены! Сайт готов к деплою.';
        btn.textContent = 'Запустить повторно';
        btn.disabled = false;
    }, 1200);
});