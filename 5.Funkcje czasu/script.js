// Zadanie 1:
for (let i = 1; i <= 15; i++) setTimeout(() => console.log('Cześć po raz ' + i), 3000 * i);

// Zadanie 2:
const tab = [1, 2, 3, 4];
setTimeout(() => {
  for (const item of tab) console.log(item);
  for (let i = 1; i <= tab.length; i++) setTimeout(() => console.log(tab[i - 1]), 3000 * i);
}, 2000);
