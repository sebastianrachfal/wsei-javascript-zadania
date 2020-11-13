// Zadanie 1:
const tab = ['ala', 1, 2, 'ma', 3, 4, 'kota'];
for (let item of tab) console.log(item);

// Zadanie 2:
console.log(tab[0], tab[1]);
console.log(tab[tab.length - 1]);
for (let item of tab) console.log(item);
for (let i = 0; i < tab.length; i += 2) console.log(tab[i]);
console.log(tab.filter((e) => typeof e === 'string'));
console.log(tab.filter((e) => typeof e === 'number'));

// Zadanie 3:
const numTab = [1, 2, 3, 4, 5, 6];

console.log(numTab.reduce((a, b) => a + b));
console.log(numTab.reduce((a, b) => a - b));
console.log(numTab.reduce((a, b) => a + b) / numTab.length);
for (const item of numTab) if (item % 2 === 0) console.log(item);
for (const item of numTab) if (item % 2 === 1) console.log(item);
console.log(numTab.sort((a, b) => a - b).reverse()[0]);
console.log(numTab.sort((a, b) => a - b)[0]);
for (const item of numTab.reverse()) console.log(item);

// Zadanie 4:
const sumFunc = (tab) => console.log(tab.reduce((a, b) => a + b));

// Zadanie 5:
const avgTabMult = (tab) => {
  const avg = tab.reduce((a, b) => a + b) / tab.length;
  for (const item of tab) console.log(item * avg);
};

// Zadanie 6:
const evenAvg = (tab) => {
  const evenTab = tab.filter((e) => e % 2 === 0);
  return evenTab.reduce((a, b) => a + b) / evenTab.length;
};

// Zadanie 7:
const printSorted = (tab) => {
  for (const item of tab.sort((a, b) => a - b)) console.log(item);
};

// Zadanie 8:
//const indexSum = (t1, t2) => (t1.length > t2.length ? t1 : t2).map((a, b) => b + (!!(t1.length > t2.length ? t2 : t1)[b] ? b : 0));
const sumArrays = (t1, t2) => (t1.length > t2.length ? t1 : t2).map((a, b) => a + (!!(t1.length > t2.length ? t2 : t1)[b] ? (t1.length > t2.length ? t2 : t1)[b] : 0));

// Zadanie 9:
const excludeItem = (tab, item) => tab.filter((e) => e !== item);

// Zadanie 10:
const oppositeNumber = (tab) => tab.map((e) => e * -1);
