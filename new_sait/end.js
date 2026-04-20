

let originalColor = '#202027'
let currentColor = originalColor

const colors = [
    '#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEAA7',
    '#DDA0DD', '#98D8C8', '#F7DC6F', '#BB8FCE', '#F8C471',
    '#82CCDD', '#EC7063', '#A3E4D7', '#F1948A', '#85C1E9'
]

function syncChangeColor(newColor) {
    // Фоны блоков
    document.querySelectorAll('.about, .mini-game, .header').forEach(el => {
        el.style.backgroundColor = newColor;
        el.style.color = newColor;
    });

    // Звезды SVG
    document.querySelectorAll('.header__star-img path').forEach(path => {
        path.style.fill = newColor;
    });

    // ✅ ИЗМЕНЕНО: .header__wrapper-content
    document.querySelectorAll('.header__wrapper-content').forEach(el => {
        el.style.color = newColor;
    });

    // ✅ ИЗМЕНЕНО: ВСЕ элементы в .header__wrapper-content
    document.querySelectorAll('.header__footer .header__wrapper-content *').forEach(el => {
        el.style.color = newColor;
    });

    currentColor = newColor;
}

async function startColorGame() {
    while (true) {
        const choice = prompt(
            `🎨 НАСТРОЙКА ФОНА\n\n` +
            `Текущий цвет: ${currentColor}\n\n` +
            `1 - Случайный однотонный фон\n` +
            `2 - Вернуть изначальный фон\n` +
            `0 - Оставить этот фон\n\n` +
            `Выбор (0-2):`
        );

        if (choice === null) break; // ESC

        switch (choice) {
            case '1':
                const randomColor = colors[Math.floor(Math.random() * colors.length)];
                syncChangeColor(randomColor);
                alert(`🎉 Новый фон!\n${randomColor}`);
                break;
            case '2':
                syncChangeColor(originalColor);
                alert('🔄 Изначальный фон восстановлен!');
                break;
            case '0':
                alert(`😍 Фон ${currentColor} оставлен!`);
                return;
            default:
                alert('❌ Введите 0, 1 или 2!');
        }
    }
}