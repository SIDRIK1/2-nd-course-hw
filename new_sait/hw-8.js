function playRockPaperScissors() {
    
    const options = ["камень", "ножницы", "бумага"];
    
    
    let userChoice = prompt(
        "Выберите: камень, ножницы или бумага?\n(Введите точно: 'камень', 'ножницы' или 'бумага')"
    );
    
    // Проверка ввода
    if (!options.includes(userChoice.toLowerCase())) {
        alert("❌ Неверный выбор! Играйте заново.");
        return;
    }
    
    userChoice = userChoice.toLowerCase();
    
    
    const computerIndex = Math.floor(Math.random() * 3);
    const computerChoice = options[computerIndex];
    
    
    let result = "";
    if (userChoice === computerChoice) {
        result = "🤝 Ничья!";
    } else if (
        (userChoice === "камень" && computerChoice === "ножницы") ||
        (userChoice === "ножницы" && computerChoice === "бумага") ||
        (userChoice === "бумага" && computerChoice === "камень")
    ) {
        result = "🎉 Вы победили!";
    } else {
        result = "😢 Компьютер победил!";
    }
    
    
    alert(
        `Ваш выбор: ${userChoice}\n` +
        `Компьютер: ${computerChoice}\n\n` +
        `${result}`
    );
}









// task 1

const people = [
    { name: 'Глеб', age: 29 },
    { name: 'Анна', age: 17 },
    { name: 'Олег', age: 7 },
    { name: 'Оксана', age: 47 }
];

console.log(people.sort((a, b) => (a.age - b.age)))


// task 2

function isPositive(number) {
    return number > 0
}

function isMalep(person) {
    return person.gender === 'male'
}

function filter(arr, callback) {

    let result = []

    for (let i = 0; i < arr.length; i++) {
        
        let shouldInclude = callback(arr[i]);
        
        
        if (shouldInclude) {
            result.push(arr[i]);
        }
    }
    
    return result;
    
}

// task 3

let startTime = Date.now();
let intervalId = setInterval(() => {
    let currentTime = new Date().toLocaleString();
    console.log("Текущая дата:", currentTime);
}, 3000);

setTimeout(() => {
    clearInterval(intervalId);
    console.log("30 секунд прошло");
}, 30000);

// task 4

function delayForSecond(callback) {
    
    setTimeout(callback, 1000);
}

delayForSecond(function () {
   console.log('Привет, Глеб!');
});

// task 5 

sayHi.bind(null, 'Глеб')