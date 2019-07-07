'use strict';
let money,
  income = 'Freelance',
  addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую'),
  deposit = confirm('Есть ли у вас депозит в банке?'),
  mission = 100000,
  monthExpenses,
  monthExpenses2;

let start = function () {
  do {
    money = prompt('Ваш месячный доход?');
  }
  while (isNaN(money) || money == '' || money == null);
  money = +money;
  console.log(money);
};
start();

 
let getExpensesMonth = function () {
  let sum = 0;

  for (let i = 0; i < 2; i++) {
    if (i === 0) {
      monthExpenses = prompt('Какие обязательные ежемесячные расходы у вас есть?');
    } else if (i === 1) {
      monthExpenses2 = prompt('Какие обязательные ежемесячные расходы у вас есть?');
    }

    do {
      sum = prompt('Во сколько это обойдется?');
    }
    while (isNaN(sum) || sum == '' || sum == null);
  }

  return sum;
};

let expensesAmount = getExpensesMonth();


let budgetMonth = function() {
  return money - expensesAmount;
};
let budgetPeriod = function () {
  return mission / budgetMonth();
};
let budgetDay = function() {
  return budgetMonth() / 30;
};

let showTypeof = function(item){
  console.log(item, typeof item);
};

showTypeof(income);
showTypeof(deposit);


function getStatusIncome() {
  if (budgetDay() >= 800) {
    return ('Высокий уровень дохода');
  } else if (budgetDay() >= 300 && budgetDay() < 800) {
    return ('Средний уровень дохода');
  } else if (budgetDay() >= 0 && budgetDay() < 300) {
    return ('Низкий уровень дохода');
  } else {
    return ('Что-то пошло не так.');
  }
}

let getAccumulatedMonth = function() {
   return money - expensesAmount;
};

let accumulatedMonth = getAccumulatedMonth();

let getTargetMonth = function() {
   return Math.ceil(mission / accumulatedMonth);
};

if (getTargetMonth() >= 0) {
  console.log('Срок достижения цели: ', getTargetMonth());
} else if (getTargetMonth() <= -1) {
  console.log('Цель не будет достигнута');
}

let moneyforPeriod = function() {
   return getAccumulatedMonth() * budgetPeriod();
};

console.log('getStatusIncome(): ', getStatusIncome());
console.log('Накопления за период: ', moneyforPeriod());
console.log('Срок достижения цели: ', getTargetMonth());