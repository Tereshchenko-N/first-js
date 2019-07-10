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
  income: [],
  addIncome: [],
  expenses: [],
  addExpenses: [],
  deposit: false,
  percentDeposit: 0,
  moneyDeposit: 0,
  mission: 100000,
  period: 3,
  budget: money,
  budgetDay: 0,
  budgetMonth: 0,
  expensesMonth: 0, 
  asking: function() {
      
        let expResult;
        let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую',
          'кофе,чай,шоколадки');
          appData.addExpenses = addExpenses.split(',');
          
         

        for(let key in appData.addExpenses) {
          expResult = appData.addExpenses[key].charAt(0).toUpperCase() + appData.addExpenses[key].slice(1);
          appData.addExpenses.push(expResult);
          
        }
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
        
        if(confirm('Есть ли у вас дополнительный источник зароботка?')) {
          let itemIncome;
          let cashIncome;
          do {
           itemIncome = prompt('Какой у вас дополнительный зароботок?', 'Таксую');
          }
          while (Number(itemIncome) || itemIncome == '' || itemIncome == null);

          do {
           cashIncome = prompt('Сколько вы на этом зарабатываете в месяц?', 10000);
          }
          while (isNaN(cashIncome) || cashIncome == '' || cashIncome == null);

      appData.income[itemIncome] = cashIncome;
    }
      appData.deposit = confirm('Есть ли у вас депозит в банке?');
      }, 
      
     
    getExpensesMonth: function() {
    for (let key in appData.expenses) {
      appData.expensesMonth += +appData.expenses[key];
     
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
},

  getInfoDeposit: function () {
    if(appData.deposit) {
     
      do {
        appData.percentDeposit = prompt ('Какой годовой процент?', 10);
      }
      while (isNaN(appData.percentDeposit) || appData.percentDeposit == '' || appData.percentDeposit == null);
      do {
        appData.moneyDeposit = prompt ('Какая сумма заложена?', 10000);
      }
       while (isNaN(appData.moneyDeposit) || appData.moneyDeposit == '' || appData.moneyDeposit == null);

    }
  },

  calcSavedMoney: function() {
    return appData.budgetMonth * appData.period;
  }

};

for(let key in appData) {
  console.log('Наша программа включает в себя данные: '+key);
}


appData.asking();
appData.getExpensesMonth();
appData.getBudget();
appData.getInfoDeposit();

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


console.log(appData.addExpenses.splice(3, 6).join(', '));
