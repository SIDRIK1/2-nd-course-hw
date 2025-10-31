// task 1
let password = 'пароль'
let user_passwd = prompt('Введите пароль: ')

alert(password == user_passwd ? 'Пароль введен верно' : "Пароль введен неправильно")

// task 2 

let c = 15

if (c > 0 && c < 10) {
    console.log('Верно')
} else {
    console.log('Неверно')
}

//  task 3 

let d = 16
let e = 20

if (d > 100 || e > 100) {
    console.log('Верно')
} else {
    console.log('Неверно')
}

// task 4 

let a = '2'
let b = '3'

alert(Number(a) + Number(b))

// task 5

let monthNumber = Number(prompt('Введите номер месяца: '))

switch (monthNumber){
    case 1 :
        console.log('Месяц принадлежит зиме')
        break
    case 2 :
        console.log('Месяц принадлежит зиме')
        break
    case 3 :
        console.log('Месяц принадлежит весне')
        break
    case 4 :
        console.log('Месяц принадлежит весне')
        break
    case 5 :
        console.log('Месяц принадлежит весне')
        break
    case 6 :
        console.log('Месяц принадлежит к лету')
        break
    case 7 :
        console.log('Месяц принадлежит к лету')
        break
    case 8 :
        console.log('Месяц принадлежит к лету')
        break
    case 9 :
        console.log('Месяц принадлежит осени')
        break
    case 10 :
        console.log('Месяц принадлежит осени')
        break
    case 11 :
        console.log('Месяц принадлежит осени')
        break
    case 12 :
        console.log('Месяц принадлежит зиме')
        break
   
}