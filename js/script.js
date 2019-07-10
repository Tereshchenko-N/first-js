'use strict';
let money;
let start = function () {
  do {
    money = prompt('Ваш месячный доход?', 50000);
  }
  while (isNaN(money) || money == '' || money == null);
  money = +money;
};
start();

let appData = {
  icome: {},
  addIncome: [],
  expenses: [],
  addExpenses: [],
  deposit: false,
  mission: 100000,
  period: 3,
  budget: money,
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

          appData.expenses[monthExpenses] = Number(sum);
        }
      },

    getExpensesMonth: function() {
    for (let key in appData.expenses) {
      appData.expensesMonth = +appData.expenses[key];
     
    }
}, 
   getBudget: function() {
   appData.result = appData.budget - appData.expensesMonth;
   appData.budgetMonth = money - appData.expensesMonth;
   appData.budgetDay = appData.budgetMonth / 30;
   
},
  getTargetMonth: function () {
    return Math.ceil(appData.mission / appData.getBudget());
  },

  getStatusIncome: function () {
  if (appData.budgetDay >= 800) {
    return('Высокий уровень дохода');
  } else if (appData.budgetDay >= 300 && appData.budgetDay < 800) {
    return('Средний уровень дохода');
  } else if (appData.budgetDay >= 0 && appData.budgetDay < 300) {
    return('Низкий уровень дохода');
  } else {
    return('Что-то пошло не так.');
  }
}

};

for(let key in appData) {
  console.log('Наша программа включает в себя данные: '+key);
}


appData.asking();
appData.getExpensesMonth();
appData.getBudget();


let budgetPeriod = function () {
  return appData.mission / appData.budgetMonth;
};

let accumulatedMonth = appData.result;

let getTargetMonth = function() {
   return Math.ceil(appData.mission / accumulatedMonth);
   
};
if (getTargetMonth() >= 0){
  console.log('Срок достижения цели: ', getTargetMonth(), 'месяца');
} else if (getTargetMonth() <= -1) {
  console.log('Цель не будет достигнута');
}

let moneyforPeriod = function() {
   return appData.getBudget() * budgetPeriod();
};

console.log('Уровень Дохода: ', appData.getStatusIncome());
console.log('Расходы за месяц: ', appData.expensesMonth);

