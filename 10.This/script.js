function Person(name, surname, age, country, city) {
  [this.name, this.surname, this.age, this.country, this.city] = [name, surname, age, country, city];
  this.changeAge = (age) => (this.age = age);
  this.changeCity = (city) => (this.city = city);
}

// Zadanie 1:
const person = new Person('Ania', 'A', 11, 'Poland', 'Krakow', 'PL');
const person2 = new Person('Ania', 'B', 11, 'Poland', 'Krakow', 'PL');

const showAll = (p) => {
  for (const key in p) console.log(key + ': ' + p[key]);
};

showAll(person);
showAll(person2);

const addAge = (p) => p.age++;

addAge(person);
addAge(person);
addAge(person2);
showAll(person);
showAll(person2);

// Zadanie 2:
person.favMeal = person2.favMeal = [];
person.addMeal = person2.addMeal = function (m) {
  this.favMeal.push(m);
};
person.showMeal = person2.showMeal = function () {
  for (let item of this.favMeal) console.log(this.name + ' lubi ' + item);
};
person.addMeal('zupy');
person2.addMeal('makarony');
person.showMeal();
person.showMeal();

// Zadanie 3:
function Calculator() {
  this.memory = [];
  this.sum = () => this.memory.reduce((a, b) => a + b);
  this.sub = () => this.memory.reduce((a, b) => a - b);
  this.mul = () => this.memory.reduce((a, b) => a * b);
  this.div = () => {
    if (this.memory.includes(0)) {
      console.error("You cant't divide by zero.");
      return undefined;
    }
    return this.memory.reduce((a, b) => a / b);
  };
  this.addNumbers = (a, b) => this.memory.push(a, b);
}
const calc = new Calculator();
calc.addNumbers(1, 2);
calc.addNumbers(4, 1);
console.log(calc.sum(), calc.sub(), calc.mul(), calc.div());

// Zadanie 4:
function Ladder() {
  this.currentStep = 0;
  this.stepHigher = () => this.currentStep++;
  this.stepLower = () => Math.min(0, --this.currentStep);
  this.showStep = () => console.log(this.currentStep == 0 ? 'Jesteś na ziemi!' : 'Jesteś na ' + this.currentStep + '. stopniu!');
}
const ladder = new Ladder();
ladder.showStep();
ladder.stepHigher();
ladder.stepHigher();
ladder.stepHigher();
ladder.stepLower();
ladder.stepLower();
ladder.showStep();
