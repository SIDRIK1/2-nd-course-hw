// game 3

function reverseText() {
    let textUser = prompt("Введите текст для игры: ")
    let reversedText = textUser.split('').reverse().join('')
    return alert(`Ваш текст: ${reversedText}`)

}

// game 4

function game4Quiz() {

    const quiz = [
        {
            question: "Какой цвет небо?",
            options: ["1. Красный", "2. Синий", "3. Зеленый"],
            correctAnswer: 2
        },
        {
            question: "Сколько дней в неделе?",
            options: ["1. Шесть", "2. Семь", "3. Восемь"],
            correctAnswer: 2
        },
        {
            question: "Сколько у человека пальцев на одной руке?",
            options: ["1. Четыре", "2. Пять", "3. Шесть"],
            correctAnswer: 2
        }
    ];

    let correctAnswers = 0;

    
    for (let i = 0; i < quiz.length; i++) {
        
        let questionText = `Вопрос ${i + 1}:\n${quiz[i].question}\n`;
        for (let j = 0; j < quiz[i].options.length; j++) {
            questionText += quiz[i].options[j] + "\n";
        }

        
        let userAnswer = prompt(questionText);
        let answerNum = parseInt(userAnswer);

        
        if (answerNum === quiz[i].correctAnswer) {
            correctAnswers++;
            alert("✅ Правильно!");
        } else {
            alert(`❌ Неправильно! Правильный ответ: ${quiz[i].options[quiz[i].correctAnswer - 1]}`);
        }
    }

    
    alert(`🎉 Игра окончена!\nВы ответили правильно на ${correctAnswers} из ${quiz.length} вопросов!`);

}



// task 1

'js'.toUpperCase()

// task 2

function newMasStroka(mas, stroka) {

    let newMasStr = []
    stroka.toLowerCase()

    mas.forEach(element => {
        element.toLowerCase()

        if (element.startWith(stroka)) {
            newMasStr.push(element)
        }
    })

    return newMasStr
}

// task 3

let chislo = 32.58884

console.log(Math.floor(chislo))
console.log(Math.ceil(chislo))
console.log(Math.round(chislo))

// task 4 

let masRandChisl = [52, 53, 49, 77, 21, 32]


console.log(Math.max(...masRandChisl))
console.log(Math.min(...masRandChisl))

// task 5

let MathRandomChisloOt1Do10 = Math.floor(Math.random() * 10 + 1)

// task 6

function randMasChils(chislo) {

    let polovina = chislo / 2
    let randmas = []

    for (i = 0; i <= polovina; i++) {
        randmas.push(Math.floor(Math.random() * polovina + 1))
    }

    return randmas
}

// task 7

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// task 8

console.log(Date())

// task 9

let nowDate = new Date()

console.log(nowDate)

let Days73 = 73 * 60 * 60 * 24 * 1000

console.log(Days73)

let DateAfter73Days = new Date(+nowDate + Days73)

console.log(DateAfter73Days)

// task 10

function formatDate(date) {

    const months = [
        'января', 'февраля', 'марта', 'апреля', 'мая', 'июня',
        'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'
    ];

    const weekdays = [
        'воскресенье', 'понедельник', 'вторник', 'среда',
        'четверг', 'пятница', 'суббота'
    ];


    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();
    const weekday = weekdays[date.getDay()];

    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const seconds = date.getSeconds().toString().padStart(2, '0');


    const datePart = `Дата: ${day} ${month} ${year} — это ${weekday}.`;
    const timePart = `Время: ${hours}:${minutes}:${seconds}`;

    return `${datePart}\n${timePart}`;
}

// 

let DateTest = new Date()

let hourstest = DateTest.getHours().toString().padStart(2, '0')

console.log(hourstest)