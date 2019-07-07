'use strict';
let money;
let start = function() {
    do {
     money = prompt('Ваш месячный доход?');
   }
   while (isNaN(money) || money == '' || money == null);
  money = +money;
  console.log(money);
};
start();

let appData = {
  income: {},
  addIncome: [],
  addExpenses: [],
  deposit: false,
  misson: 100000,
  period: 3,
  budget: money,
  expenses: {},
  budgetDay: 0,
  budgetMonth: 0,
  expensesMonth: 0,
  asking: function() {
 let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
     appData.addExpenses = addExpenses.toLowerCase().split(',');
     appData.deposit = confirm('Есть ли у вас депозит в банке?');
    
     
     for (let i = 0; i < 2; i++) {
      let monthExpenses;
      let sum;

      do {
        monthExpenses = prompt('Какие обязательные ежемесячные расходы у вас есть?', 'Coffee');
      }
      while (Number(monthExpenses) || monthExpenses == '' || monthExpenses == null);

      do {
        sum = prompt('Во сколько это обойдется?', 2500);
      }
      while (isNaN(sum) || sum == '' || sum == null);
      
      appData.expenses[monthExpenses] = sum; 
      
  
  }
    }, 
    

  getAccumulatedMonth: function() {
   return money - appData.expenses;
},
  getTargetMonth: function() {
   return Math.ceil(appData.mission / appData.getAccumulatedMonth());
   
}, 
  getStatusIncome: function() {
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
};
appData.asking();
appData.getExpensesMonth();



let expensesAmount = appData.getExpensesMonth();
  
let budgetMonth = function() {
  return money - expensesAmount;
};
let budgetPeriod = function () {
  return appData.mission / budgetMonth();
};
let budgetDay = function() {
   return budgetMonth() / 30;
};
  if (budgetDay() <= -1) {
    console.log('Что-то пошло не так');
  }

let accumulatedMonth = appData.getAccumulatedMonth();

let moneyforPeriod = function() {
   return appData.getAccumulatedMonth() * budgetPeriod();
};


console.log('getStatusIncome(): ', appData.getStatusIncome());
console.log('Накопления за период: ', accumulatedMonth);


if (appData.getTargetMonth() >= 0){
  console.log('Срок достижения цели: ', appData.getTargetMonth());
} else if (appData.getTargetMonth() <= -1) {
  console.log('Цель не будет достигнута');
}

