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


switch (lang) {
  case 'ru':
    lang = 'Понедельник,Вторник,Среда,Четверг,Пятница,Суббота,Воскресенье';
    console.log(lang.split(','));
    break;
  case 'en':
    lang = 'Monday,Tuesday,Wednesday,Thursday,Friday,Saturday,Sunday';
    console.log(lang.split(','));
    break;
  default: lang = "Неверные данные";
}


// let russian = {
//    1: ['Понедельник'],
//    2: ['Вторник'],
//    3: ['Среда'],
//    4: ['Четверг'],
//    5: ['Пятница'],
//    6: ['Суббота'],
//    7: ['Воскресенье'],
// };

//  let english = {
//    1: ['Monday'],
//    2: ['Tuesday'],
//    3: ['Wednesday'],
//    4: ['Thursday'],
//    5: ['Friday'],
//    6: ['Saturday'],
//    7: ['Sunday'],
//  };

// if (lang === 'ru') {
//   console.log(russian);
// }
// if (lang === 'en') {
//   console.log(english);
// }




let lang1 = { 
  ru: ['Понедельник','Вторник','Среда','Четверг','Пятница','Суббота','Воскресенье'] ,
  en: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
};
lang1[lang];
console.log(lang.split(','));
// let ru = new Array('Понедельник,Вторник,Среда,Четверг,Пятница,Суббота,Воскресенье');
// let en = new Array('Monday,Tuesday,Wednesday,Thursday,Friday,Saturday,Sunday');
//'Monday,Tuesday,Wednesday,Thursday,Friday,Saturday,Sunday'
//'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'
//'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'


let namePerson = prompt('Укажите Ваше имя');


if (namePerson === 'Артем') {
  console.log('директор');
} else if (namePerson === 'Максим') {
  console.log('преподаватель');
} else {
  console.log('студент');
}




