
function randomNumberGame() {

    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    const randomNumber = getRandomInt(1, 100);

    for (i = 6; i > 0; i--) {

        let userNumbner = Number(prompt('Введите число от 1 до 100: '))

        if (userNumbner == '') {
            break
        }

        if (randomNumber > userNumbner) {
            alert(`Число меньше загаданного осталось попыток ${i}`)
        }

        if (randomNumber < userNumbner) {
            alert(`Число большего загаданного осталось попыток ${i}`)
        }

        if (randomNumber == userNumbner) {
            alert('Вы молодец, угадали загаданное число')
            break
        }

        if (randomNumber != userNumbner && i == 1) {
            alert('Попробуй снова!')
        }

    }
}


// task 1

function minValue(a, b) {
    

    if (a < b) {
        return a
    } else if (a > b) {
        return b
    } else {
        return a
    }

}

//  task 2

function chetnost(a) {
    return (a % 2 == 0) ? 'Число четное' : 'Чсило нечетное'
}

// task 3

function kvadrat(a) {
    console.log(a ** 2)
    return a ** 2
}

// task 4

function age() {
    let age = Number(prompt('Сколько вам лет: '))

    if (age < 0) {
        alert('Вы ввели неправильное значение')
    } else if (age >= 0 && age <= 12) {
        alert('Привет, друг!')
    } else {
        alert('Добро пожаловать!')
    }

}

// task 5

function isNan(a, b) {
   

    function isNumber(value) {
        return typeof value === 'number' && !isNaN(value);
    }

    if (isNumber(a) && isNumber(b)) {
        return a * b
    } else {
        return 'Одно или оба значения не являются числом'
    }
}

// task 6

function kub() {
    let a = Number(prompt('Введите число: '))
    

    function isNumber(value) {
        return typeof value === 'number' && !isNaN(value);
    }

    if (isNumber(a)) {
        return `${a} в кубе равняется ${a ** 3}`
    } else {
        return 'Переданный параметр не является числом'
    }
}

// task 7 

function getArea() {
    return 3.14 * (this.radius ** 2)
}

function getPerimetr() {
    return 2 * 3.14 * this.radius
}

let circle1 = {
    radius: 15,
    getArea: getArea,
    getPerimetr: getPerimetr
}

let circle2 = {
    radius: 20,
    getArea: getArea,
    getPerimetr: getPerimetr
}