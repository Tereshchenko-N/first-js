let lang = prompt('Выберите язык: введите ru или en'),
  rus = ['Понедельник','Вторник','Среда','Четверг','Пятница','Суббота','Воскресенье'],
  eng = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];

if (lang === 'ru') {
  console.log(rus);
} else if (lang === 'en') {
  console.log(eng);
} else {
  console.log("Некорректно выбран язык. Нужно ввести en или ru");
  alert("Некорректно выбран язык. Нужно ввести en или ru");
}


let namePerson = prompt('Укажите Ваше имя');


if (namePerson === 'Артем') {
  console.log('директор');
} else if (namePerson === 'Максим') {
  console.log('преподаватель');
} else {
  console.log('студент');
}
