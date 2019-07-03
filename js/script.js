'use strict';
let money = +prompt ('Ваш месячный доход?', 50000),
  income = 'Freelance',
  addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую'),
  deposit = confirm('Есть ли у вас депозит в банке?'),
  mission = 100000,
  monthExpenses = prompt('Какие обязательные ежемесячные расходы у вас есть?'),
  moneyExpenses = +prompt('Во сколько это обойдется?', 2500),
  monthExpenses2 = prompt('Какие обязательные ежемесячные расходы у вас есть?'),
  moneyExpenses2 = +prompt('Во сколько это обойдется?', 2500);
  
  
let budgetMonth = function() {
  return money - moneyExpenses - moneyExpenses2;
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

showTypeof(money);
showTypeof(income);
showTypeof(deposit);


function getStatusIncome(){
  if (budgetDay() >= 800) {
    return('Высокий уровень дохода');
  } else if (budgetDay() >= 300 && budgetDay() < 800) {
    return('Средний уровень дохода');
  } else if (budgetDay() >= 0 && budgetDay() < 300) {
    return('Низкий уровень дохода');
  } else {
    return('Что-то пошло не так.');
  }
}
let getExpensesMonth = function() {
   return (moneyExpenses + moneyExpenses2);
};

//let expensesAmount = getExpensesMonth();

let getAccumulatedMonth = function() {
   return (money - getExpensesMonth());
};

let accumulatedMonth = getAccumulatedMonth();

let getTargetMonth = function() {
   return Math.ceil(mission / accumulatedMonth);
};

let moneyforPeriod = function() {
   return getAccumulatedMonth() * budgetPeriod();
};


console.log('getStatusIncome(): ', getStatusIncome());
console.log('Накопления за период: ', moneyforPeriod());
console.log('Срок достижения цели: ', (getTargetMonth()));