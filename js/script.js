let money = 4000,
  income = 'Freelance',
  addExpenses = 'Taxi, Food, Coffee',
  mass = addExpenses.split(', '),
  deposit = true,
  mission = 15000,
  period = 5;
let budgetDay = money / 30;

console.log(mass);
console.log(typeof (money));
console.log(typeof (income));
console.log(typeof (deposit));

console.log(income.length);


console.log(addExpenses.toLowerCase());

console.log('Goal to earn:', mission);
console.log('Month period: ', period);
console.log('day budget:', budgetDay);
console.log('remainder:', money % 30);


