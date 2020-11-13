// Zadanie 1:
const func1 = () => console.log('Udało się!');

// Zadanie 2:
const func2 = (param) => console.log(param);

// Zadanie 3:
const func3 = (tab) => {
  for (const item of tab) console.log(item);
};

// Zadanie 4:
const func4 = (string) => {
  let count = 0;
  let itv = setInterval(() => {
    console.log(string);
    if (++count >= 5) {
      clearInterval(itv);
      console.log('Koniec');
    }
  }, 3000);
};
