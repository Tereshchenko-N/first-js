'use strict';

let start = document.getElementById('start'),
  cancel = document.getElementById('cancel'),
  btnPlus = document.getElementsByTagName('button'),
  btnIncome = btnPlus[0],
  btnExpenses = btnPlus[1],
  checkBox = document.querySelector('#deposit-check'),
  budgetMonth = document.getElementsByClassName('budget_month-value')[0],
  budgetDay = document.getElementsByClassName('budget_day-value')[0],
  expMonth = document.getElementsByClassName('expenses_month-value')[0],
  additionalIncome = document.getElementsByClassName('additional_income-value')[0],
  additionalExpenses = document.getElementsByClassName('additional_expenses-value')[0],
  incomePeriod = document.getElementsByClassName('income_period-value')[0],
  targetMonth = document.getElementsByClassName('target_month-value')[0],
  salaryAmount = document.querySelector('.salary-amount'),
  incomeTitle = document.getElementsByClassName('income-title')[1],
  incomeAmount = document.querySelector('.income-amount'),
  additionalIncomeItem = document.querySelectorAll('.additional_income-item'),
  expensesTitle = document.getElementsByClassName('expenses-title')[1],
  expensesItems = document.querySelectorAll('.expenses-items'),
  additionalExpensesItem = document.querySelector('.additional_expenses-item'),
  targetAmount = document.querySelector('.target-amount'),
  periodSelect = document.querySelector('.period-select'),
  incomeItem = document.querySelectorAll('.income-items'),
  periodAmount = document.querySelector('.period-amount'),
  expensesAmount = document.querySelector('.expenses-amount'),
  allIncomeTitle = document.querySelectorAll('.income-title'),
  allIncomeAmount = document.querySelectorAll('.income-amount'),
  allExpensesTitle = document.querySelectorAll('.expenses-title'),
  allExpensesAmount = document.querySelectorAll('.expenses-amount');


console.log(allExpensesTitle);
let appData = {
  income: [],
  addIncome: [],
  incomeMonth: 0,
  expenses: [],
  addExpenses: [],
  deposit: false,
  percentDeposit: 0,
  moneyDeposit: 0,
  budget: 0,
  budgetDay: 0,
  budgetMonth: 0,
  expensesMonth: 0,  
  start: function () {
  
    if(salaryAmount.value === '') {
     
      start.removeEventListener('click', appData.start);
      return;
    } 
    start.setAttribute('style', 'display: none');
    cancel.setAttribute('style', 'display: block');
    
    salaryAmount.setAttribute('disabled', 'disabled');
    incomeAmount.setAttribute('disabled', 'disabled');
    additionalIncomeItem[0].setAttribute('disabled', 'disabled');
    additionalIncomeItem[1].setAttribute('disabled', 'disabled');
    expensesAmount.setAttribute('disabled', 'disabled');
    additionalExpensesItem.setAttribute('disabled', 'disabled');
    targetAmount.setAttribute('disabled', 'disabled');
    expensesTitle.setAttribute('disabled', 'disabled');
    incomeTitle.setAttribute('disabled', 'disabled');
    allIncomeTitle.setAttribute('disabled', 'disabled');
    allIncomeAmount.setAttribute('disabled', 'disabled');
    allExpensesTitle.setAttribute('disabled', 'disabled');
    allExpensesAmount.setAttribute('disabled', 'disabled');

    appData.budget = +salaryAmount.value;


    appData.getExpenses();
    appData.getIncome(); 
    appData.getExpensesMonth();
    appData.getInfoDeposit();
    appData.getAddExpenses();
    appData.getAddIncome(); 
    appData.getBudget();

    appData.showResult();
},

showResult: function(){
  budgetMonth.value = appData.budgetMonth;
  budgetDay.value = appData.budgetDay;
  expMonth.value = appData.expensesMonth;
  additionalExpenses.value = appData.addExpenses.join(', ');
  additionalIncome.value = appData.addIncome.join(', ');  
  targetMonth.value = Math.ceil(appData.getTargetMonth());
  incomePeriod.value = appData.calcSavedMoney();
  incomeItem.value = appData.getIncome();
},

addExpensesBlock: function() {
  let cloneExpensesItem = expensesItems[0].cloneNode(true);
  expensesItems[0].parentNode.insertBefore(cloneExpensesItem, btnExpenses);
  expensesItems = document.querySelectorAll('.expenses-items');
  if(expensesItems.length === 3) {
    btnExpenses.style.display = 'none';
  }
},

addIncomeBlock: function () {
  let cloneIncomeItem = incomeItem[0].cloneNode(true);
  incomeItem[0].parentNode.insertBefore(cloneIncomeItem, btnIncome);
  incomeItem = document.querySelectorAll('.income-items');
  if (incomeItem.length === 3) {
    btnIncome.style.display = 'none';
  }
},

getExpenses: function() {
  expensesItems.forEach(function (item) {
    let itemExpenses = item.querySelector('.expenses-title').value;
    let cashExpenses = item.querySelector('.expenses-amount').value;
    if(itemExpenses !== '' && cashExpenses !== ''){
      appData.expenses[itemExpenses] = cashExpenses;
    }
  });
},

getIncome: function() {
  incomeItem.forEach(function (item){
    let itemIncome = item.querySelector('.income-title').value;
    let cashIncome = item.querySelector('.income-amount').value;
    if(itemIncome !== '' && cashIncome !== ''){
      appData.income[itemIncome] = cashIncome;
    }
  });

    for(let key in appData.income) {
      appData.incomeMonth += +appData.income[key];
    }
},


getAddExpenses: function() {
  let addExpenses = additionalExpensesItem.value.split(',');
  addExpenses.forEach(function(item){
    item = item.trim();
    if (item !== ''){
      appData.addExpenses.push(item);
    }
  });
},


getAddIncome: function() {
  additionalIncomeItem.forEach(function(item){
    let itemValue = item.value.trim();
    if(itemValue !== ''){
      appData.addIncome.push(itemValue);
    }
  });
}, 



  asking: function() {
      
        let expResult;
   
        for(let key in appData.addExpenses) {
          appData.addExpenses[key] = appData.addExpenses[key].trim();
          expResult = appData.addExpenses[key].charAt(0).toUpperCase() + appData.addExpenses[key].slice(1);
          appData.addExpenses.push(expResult);
          
        }
          appData.deposit = confirm('Есть ли у вас депозит в банке?');
      }, 
      
     
    getExpensesMonth: function() {
    for (let key in appData.expenses) {
      appData.expensesMonth += +appData.expenses[key];
     
    }
}, 
   getBudget: function() {
   appData.result = appData.budget + appData.incomeMonth - appData.expensesMonth;
   appData.budgetMonth = appData.budget + appData.incomeMonth - appData.expensesMonth;
   appData.budgetDay = Math.ceil(appData.budgetMonth / 30);
   
},
  getTargetMonth: function () {
    return targetAmount.value / appData.budgetMonth;
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
    return appData.budgetMonth * periodSelect.value;
  },
 
};

start.addEventListener('click', appData.start);

btnExpenses.addEventListener('click', appData.addExpensesBlock);
btnIncome.addEventListener('click', appData.addIncomeBlock);

let budgetPeriod = function () {
  return targetAmount.value / appData.budgetMonth;
};

let accumulatedMonth = appData.result;

let getTargetMonth = function() {
  return Math.ceil(targetAmount.value / accumulatedMonth);
   
};

// if (getTargetMonth() >= 0){
//   console.log('Срок достижения цели: ', getTargetMonth(), 'месяца');
// } else if (getTargetMonth() <= -1) {
//   console.log('Цель не будет достигнута');
// }

let moneyforPeriod = function() {
   return appData.getBudget() * budgetPeriod();
};


//настройка ползунка 

periodSelect.addEventListener('change', function ()  {
  periodAmount.innerHTML = periodSelect.value;
});

periodSelect.addEventListener('change', function () {
  incomePeriod.value = appData.calcSavedMoney();
});

