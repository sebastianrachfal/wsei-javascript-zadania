// Zadanie 1:
const listItems = document.querySelectorAll('.list');
console.log(listItems);

// Zadanie 2:
const getElsByParam = (a) => document.getElementsByTagName(a);
const els = getElsByParam('li');
console.log(els);

// Zadanie 3:
const idList = document.getElementById('list');
console.log(idList);

// Zadanie 4:
const printItems = (items) => {
  if (!!items.length) for (let item of items) console.log(item);
  else console.log(items);
};
printItems(document.getElementsByTagName('li'));
printItems(document.getElementsByTagName('ul'));
printItems(document.getElementsByTagName('span'));
printItems(document.querySelectorAll('div.list>span'));
printItems(document.querySelectorAll('div#spans>span'));
