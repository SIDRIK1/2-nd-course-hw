let i = 0 

for (i ; i<2; i++){
    console.log('Привет')
}


// task 2


for (j=1 ; j<6; j++){
    console.log(j)
}

// task 3

for (l=7; l<=22; l++){
    console.log(l)
}

// task 4
let obj = {
    "Коля" : "200",
    'Вася' : '300',
    'Петя' : '400'
}


for (key in obj ){
    console.log(`Имя сотрудника- ${key}, зарплата - ${obj[key]}`)
}

// task 5

let n =1000

while( n>50){
    n/=2
    console.log(n)
}

// task 6

function getFridays(year, month) {
  let fridays = [];
  let date = new Date(year, month, 1);
  
  // Перебираем все дни месяца
  while (date.getMonth() === month) {
    if (date.getDay() === 5) { // 5 - пятница
      fridays.push(new Date(date));
    }
    date.setDate(date.getDate() + 1);
  }
  
  return fridays;
}

function printFridayReports(year, month) {
  const fridays = getFridays(year, month);
  fridays.forEach((friday, index) => {
    const day = friday.getDate();
    console.log(`Пятница ${index + 1}: ${friday.toLocaleDateString()}. Необходимо подготовить еженедельный отчет.`);
  });
}



