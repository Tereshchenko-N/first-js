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

console.log('Возможные расходы:', addExpenses.split(','));
console.log(typeof (money));
console.log(typeof (income));
console.log(typeof (deposit));
  
console.log('Месячный бюджет:', budgetMonth);
console.log('Период месяцев для выполнения цели:', parseInt(period));
console.log('Дневной бюджет:', Math.ceil(budgetDay));

if (budgetDay >= 800) {
  console.log('Высокий уровень дохода');
} else if (budgetDay >= 300) {
  console.log('Средний уровень дохода');
} else if (budgetDay >= 0) {
  console.log('Низкий уровень дохода');
} else {
  console.log('Что-то пошло не так.');
}