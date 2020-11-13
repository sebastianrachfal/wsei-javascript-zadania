// Zadanie 1:
let a = 12,
  b = 23;
if (a > b) console.log(a);
else console.log(b);

// Zadanie 2:
let c = 12,
  d = 22,
  e = 11;
if (c > d && c > e) console.log(c);
else if (d > c && d > e) console.log(d);
else console.log(e);

// Zadanie 3:
for (let i = 0; i < 10; i++) console.log('Lubie JavaScript');

// Zadanie 4:
let result = 0;
for (let i = 1; i <= 10; i++) result += i;
console.log(result);

// Zadanie 5:
let n = 6;
for (let i = 0; i <= n; i++) console.log(i + ' - ' + (i % 2 === 0 ? 'parzysta' : 'nieparzysta'));

// Zadanie 6:
for (let i = 0; i < 10; i++) for (let j = 0; j < 2; j++) console.log('i= ' + i + ', j= ' + j);

// Zadanie 7:
for (let i = 0; i <= 100; i++) console.log((i % 3 == 0 ? 'Fizz' : '') + (i % 5 == 0 ? 'Buzz' : '') + (i % 3 == 0 || i % 5 == 0 ? '' : i));

// Zadanie 8:
// a)
for (let i = 1; i <= 5; i++) console.log('*'.repeat(i));

// b)
for (let i = 0; i < 5; i++) console.log(' '.repeat(4 - i) + '* '.repeat(i) + '*');

// c)
for (let i = 0; i < 5; i++) console.log(' '.repeat(4 - i) + '**'.repeat(i) + '*');

// d)
for (let i = 0; i < 5; i++) {
  let s = '*'.repeat(1 + i);
  for (let j = i + 1; j < 5; j++) s += j;
  console.log(s);
}
console.log('-----');
for (let i = 4; i >= 0; i--) {
  let s = '*'.repeat(1 + i);
  for (let j = i + 1; j < 5; j++) s += j;
  console.log(s);
}

// e)
for (let i = 0; i < 5; i++) console.log(' '.repeat(4 - i) + '* '.repeat(i) + '*');
for (let i = 0; i < 3; i++) console.log('    *');
