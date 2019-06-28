let money = 4000,
  income = 'Freelance',
  addExpenses = 'Taxi, Food, Coffee',
  mass = addExpenses.split(', '),
  deposit = true,
  mission = 15000,
  period = 5;
let budgetDay = money / 30;


console.log(typeof (money));
console.log(typeof (income));
console.log(typeof (deposit));

console.log(income.length);

console.log('Month period: ', period);
console.log('Goal to earn:', mission);

console.log(addExpenses.toLowerCase().split(','));

console.log('day budget:', budgetDay);
console.log('remainder:', money % 30);


