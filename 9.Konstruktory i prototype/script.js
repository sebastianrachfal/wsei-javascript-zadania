// Zadanie 1:
function Person(name, surname, age, country, city, language) {
  [this.name, this.surname, this.age, this.country, this.city, this.language] = [name, surname, age, country, city, language];
  this.changeAge = (age) => (this.age = age);
  this.changeCity = (city) => (this.city = city);
}
const people = [
  new Person('Seba', 'a', 12, 'Poland', 'Kraków', 'PL'),
  new Person('Artur', 'a', 12, 'Poland', 'Kraków', 'PL'),
  new Person('Kuba', 'a', 12, 'Poland', 'Kraków', 'PL'),
  new Person('Ola', 'a', 12, 'Poland', 'Kraków', 'PL'),
  new Person('Ala', 'a', 12, 'Poland', 'Kraków', 'PL'),
];
console.log(people);
people[2].changeAge(23);
people[3].changeCity('Szczecin');
console.log(people);

// Zadanie 2:
function Calculator() {
  this.memory = [];
  this.clear = () => (this.memory = []);
  this.print = () => this.memory.forEach((e) => console.log(`${e.a} ${e.op} ${e.b} = ${e.result}`));
  this.sum = (a, b) => calculate(a, b, a + b, '+');
  this.sub = (a, b) => calculate(a, b, a - b, '-');
  this.mul = (a, b) => calculate(a, b, a * b, '*');
  this.div = (a, b) => calculate(a, b, a / b, '/');
  const calculate = (a, b, result, op) => this.memory.push({ a, b, result, op }).result;
}
const cal1 = new Calculator();
const cal2 = new Calculator();
cal1.sum(2, 3);
cal1.sub(3, 4);
cal2.mul(3, 5);
cal2.div(1, 0);
cal1.print();
cal2.clear();
cal2.print();

// Zadanie 3:
class GameA {
  randomizeNum() {
    GameA.prototype.num = Math.round(Math.random() * 10);
    console.log('New num: ' + GameA.prototype.num);
    GameB.prototype.checkGameAStatus();
  }
}
class GameB {
  checkGameAStatus() {
    let num = GameB.prototype.num;
    if (!!!num) GameB.prototype.num = GameA.prototype.num;
    else if (GameA.prototype.num - num === 5) {
      console.log('Number larger by 5');
      return;
    } else GameB.prototype.num = GameA.prototype.num;
    setTimeout(() => GameA.prototype.randomizeNum(), 1000);
  }
}
GameA.prototype.randomizeNum();
