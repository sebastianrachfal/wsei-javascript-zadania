// Zadanie 1:
let car = {};
car.name = 'BMW';
car.wheels = 4;
car.seats = 5;
console.log(car.name, car.seats, car.wheels);

// Zadanie 2:
car.changeName = function (name) {
  this.name = name;
};

// Zadanie 3:
const obj = {
  tabSum: function (tab) {
    this.sum = tab.reduce((a, b) => a + b);
    console.log(this.sum);
  },
};

// Zadanie 4:
car = { name: 'BMW', wheels: 4, seats: 5 };
for (const [key, val] of Object.entries(car)) console.log(`${key}: ${val}`);

// Zadanie 5:
car.obj1 = { name: 'object' };
console.log(car.obj1.name);

// Zadanie 6:
car.random = 5;
car.sayHello = () => console.log('Hello');
