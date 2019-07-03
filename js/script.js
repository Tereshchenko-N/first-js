let money = +prompt ('Ваш месячный доход?'),
  income = 'Freelance',
  addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую'),
  deposit = confirm('Есть ли у вас депозит в банке?'),
  mission = 100000,
  monthExpenses = prompt('Какие обязательные ежемесячные расходы у вас есть?'),
  moneyExpenses = +prompt('Во сколько это обойдется?'),
  monthExpenses2 = prompt('Какие обязательные ежемесячные расходы у вас есть?'),
  moneyExpenses2 = +prompt('Во сколько это обойдется?'),
  budgetMonth = (money - moneyExpenses - moneyExpenses2),
  period = (mission / budgetMonth),
  budgetDay = (budgetMonth / 30);


let showTypeof = function(item){
  console.log(item, typeof item);
};

showTypeof(money);
showTypeof(income);
showTypeof(deposit);


function getStatusIncome(){
  if (budgetDay >= 800) {
    return('Высокий уровень дохода');
  } else if (budgetDay >= 300 && budgetDay < 800) {
    return('Средний уровень дохода');
  } else if (budgetDay >= 0 && budgetDay < 300) {
    return('Низкий уровень дохода');
  } else {
    return('Что-то пошло не так.');
  }
}

function getExpensesMonth() {
 return(moneyExpenses + moneyExpenses2);
}

function getAccumulatedMonth() {
 return (money - (getExpensesMonth()));
}

let accumulatedMonth = getAccumulatedMonth();

function getTargetMonth() {
  return (mission / accumulatedMonth);
}

function moneyforPeriod(){
  return ((getTargetMonth() * (getAccumulatedMonth())));
}

console.log('getStatusIncome(): ', getStatusIncome());
console.log('Накопления за период: ', moneyforPeriod());
console.log('Срок достижения цели: ', Math.floor(getTargetMonth()));