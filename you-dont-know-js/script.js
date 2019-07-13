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

let list = document.querySelectorAll('ul');
let listItem = document.querySelectorAll('li');


list[1].insertBefore(listItem[8],listItem[15]);
list[1].insertBefore(listItem[12], listItem[10]);
list[1].insertBefore(listItem[14], listItem[10]);
list[1].insertBefore(listItem[15], listItem[8]);

list[4].insertBefore(listItem[45], listItem[38]);
list[4].insertBefore(listItem[39], listItem[38]);
list[4].insertBefore(listItem[40], listItem[38]);
list[4].insertBefore(listItem[41], listItem[44]);
