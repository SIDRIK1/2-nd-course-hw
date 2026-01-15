
function mathQuiz() {

    let num1 = Math.floor(Math.random() * 20) + 1;
    let num2 = Math.floor(Math.random() * 20) + 1;


    const operation = Math.floor(Math.random() * 4);
    let correctAnswer;
    let operationSign;

    switch (operation) {
        case 0:
            correctAnswer = num1 + num2;
            operationSign = '+';
            break;
        case 1:
            correctAnswer = num1 - num2;
            operationSign = '-';
            break;
        case 2:
            correctAnswer = num1 * num2;
            operationSign = '*';
            break;
        case 3:
            num2 = Math.floor(Math.random() * 10) + 1;
            num1 = num2 * (Math.floor(Math.random() * 10) + 1);
            correctAnswer = num1 / num2;
            operationSign = '÷';
            break;
    }


    const userAnswer = prompt(`${num1} ${operationSign} ${num2} = ?`);


    if (parseFloat(userAnswer) === correctAnswer) {
        alert('✅ Правильно! Молодец!');
    } else {
        alert(`❌ Неправильно! Правильный ответ: ${num1} ${operationSign} ${num2} = ${correctAnswer}`);
    }


    if (confirm('Хочешь еще задачу?')) {
        mathQuiz();
    }
}




// task 1
let mas = [1, 5, 4, 10, 0, 3]

for (i = 0; i < mas.length; i++) {
    if (mas[i] == 10) {
        break
    }
    console.log(mas[i])
}

// task 2

let mas1 = [1, 5, 4, 10, 0, 3]

console.log(mas1.indexOf(4))

// task 3

let mas2 = [1, 3, 5, 10, 20]

console.log(mas2.join(' '))

// task 4

let mas3 = []

for (i = 0; i <= 2; i++) {
    mas3[i] = []
    for (j = 0; j <= 2; j++) {
        mas3[i][j] = 1
    }
}

// task 5

let mas4 = [1, 1, 1]

mas4.push(2)
mas4.push(2)
mas4.push(2)

// task 6

let mas5 = [9, 8, 7, 'a', 6, 5]

const mas51 = mas5.filter(num => /\d/.test(num))

let mas52 = mas51.sort()

// task 7

// let mas6 = [9, 8, 7, 6, 5]

// let userNumbner = prompt('Угадайте число из массива! Введите число: ')

// if (mas6.includes(Number(userNumbner))) {
//     alert('Угадал')

// } else {
//     alert('Не угадал!')
// }

// task 8 

let stroka = 'abcdef'

let revStroka = stroka.split('').reverse().join('')
console.log(revStroka)
// task 9

let mas7 = [[1, 2, 3], [4, 5, 6]]

let mas71 = []

for (i = 0; i < 2; i++) {
    for (j = 0; j <= 2; j++) {
        mas71.push(j)
    }

}

console.log(mas71)

// task 10

const ranMas = []

for (let i = 0; i < 8; i++) {
    ranMas.push(Math.floor(Math.random() * 10) + 1)
}

for (let i = 0; i < ranMas.length - 1; i++) {
    let sum = ranMas[i] + ranMas[i + 1]
    console.log(`Сумма элементов ${ranMas[i]} + ${ranMas[i + 1]} = ${sum}`)
}

// task 11

function kvadtratMas(mas8) {
    return mas8.map(num => num * num)
}

//  task 12

function bigStroka(mas9) {
    let masLenght = []
    for (i = 0; i < mas9.length; i++) {
        masLenght.push(mas9[i].length)
    }
    return masLenght
}

// task 13

function otrizNum(mas10) {
    return mas10.filter(num => num < 0)
}

// task 14

let randMas = []

for (let i = 0; i < 10; i++) {
    randMas.push(Math.floor(Math.random() * 10) + 1)
}

let chetMas = []

for (i = 0; i < ranMas.length; i++) {
    if (ranMas[i] % 2) {
        chetMas.push(ranMas[i])
    }
}

console.log(`Исходный массив ${ranMas} \n Массив из четных чисел ${chetMas} `)

// task 15

let randMas2 = []
let sum1 = 0

for (let i = 0; i < 6; i++) {
    randMas2.push(Math.floor(Math.random() * 10) + 1)
}

for (i = 0; i < randMas2.length; i++) {
    sum1 += randMas2[i]
}

let average = sum1 / randMas2.length

console.log(average)
