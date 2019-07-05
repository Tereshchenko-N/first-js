let myNameFunc = function(yourName) {
  yourName = prompt('Введите Ваше имя', '   Ипполит   ').trim();
  alert('Привет,' + yourName + '!');
  
  if (typeof yourName == 'string') {
      console.log(yourName.length > 30 ? yourName.slice(0, 30) + '...' : yourName);
    } else {
      alert('Некорректные данные');
    }
  if (yourName.length > 10){
    yourName.slice(0 , 10);
  }
};

myNameFunc();
