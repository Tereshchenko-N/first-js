'use strict';
let collect = document.querySelectorAll('.books'),
 elem = document.querySelectorAll('.book');
 

collect[0].appendChild(elem[1]);
collect[0].appendChild(elem[0]);
collect[0].appendChild(elem[4]);
collect[0].appendChild(elem[3]);
collect[0].appendChild(elem[5]);
collect[0].appendChild(elem[2]);


let image = function () {
  document.body.style.background = 'url(./image/you-dont-know-js.jpg) center';
 
};

document.addEventListener("DOMContentLoaded", image);

let newTitle = document.querySelectorAll('h2');


newTitle[2].textContent = 'Книга 3. this и Прототипы Объектов';
newTitle[2].setAttribute('style', 'color: darkkhaki');

let body = document.querySelector('body');
let removeAdv = document.querySelector('.adv');
body.removeChild(removeAdv);


let listItem = document.querySelectorAll('li');
elem[0].classList.add('second');
elem[5].classList.add('fifth');

let secondElem = document.querySelector('.second');
let fifthElem = document.querySelector('.fifth');



secondElem.appendChild(listItem[8]);
secondElem.appendChild(listItem[10]);
secondElem.appendChild(listItem[11]);
secondElem.appendChild(listItem[13]);
secondElem.appendChild(listItem[15]);
secondElem.appendChild(listItem[8]);
secondElem.appendChild(listItem[16]);

fifthElem.appendChild(listItem[36]);
fifthElem.appendChild(listItem[37]);
fifthElem.appendChild(listItem[45]);
fifthElem.appendChild(listItem[39]);
fifthElem.appendChild(listItem[40]);
fifthElem.appendChild(listItem[38]);
fifthElem.appendChild(listItem[42]);
fifthElem.appendChild(listItem[43]);
fifthElem.appendChild(listItem[41]);
fifthElem.appendChild(listItem[44]);
fifthElem.appendChild(listItem[46]);