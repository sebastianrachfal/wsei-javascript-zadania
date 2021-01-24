// Zadanie 1:
document.getElementById('test-event').addEventListener('click', (e) => console.log(e));
// document.addEventListener('mousemove', (e) => console.log(e));
document.getElementById('test-event').addEventListener('mouseover', (e) => console.log(e));
// document.addEventListener('keydown', (e) => console.log(e));
// document.addEventListener('scroll', (e) => console.log(e));
document.getElementById('input-test').addEventListener('input', (e) => console.log(e));

// Zadanie 2:
document
	.getElementById('ex2')
	.addEventListener(
		'click',
		(e) => (document.getElementById('span-ex2').innerText = e.target.getAttribute('data-text'))
	);

// Zadanie 3:
(function (el) {
	el.addEventListener('mouseover', (e) => (e.target.style.backgroundColor = 'blue'));
	el.addEventListener('mouseout', (e) => (e.target.style.backgroundColor = 'red'));
})(document.getElementById('ex3'));

// Zadanie 4:
const errorel = document.getElementById('ex3-err');
document.getElementById('input-test').addEventListener('input', (e) => {
	if (e.target.value.match(/[0-9]/)) errorel.innerText = 'Nie możesz wpisać numeru';
	else errorel.innerText = '';
});

// Zadanie 5:
let counter = 0;
const spanex5 = document.getElementById('ex5');
document.getElementById('ex5-button').addEventListener('click', function () {
	if (++counter > 10) document.getElementById('ex5-button').removeEventListener('click', this);
	else spanex5.innerText = counter;
});

// Zadanie 6:
document.addEventListener(
	'scroll',
	(e) => (document.body.style.backgroundColor = window.pageYOffset >= 200 ? 'red' : 'white')
);

// Zadanie 7:
const calc = document.getElementById('calculator');
const input = calc.firstElementChild;
let calcstring = '';
for (let el of [...calc.children[3].children])
	el.addEventListener('click', (e) => {
		calcstring += e.target.innerText;
		calculate();
	});
for (let el of [...calc.children[4].children])
	el.addEventListener('click', (e) => {
		if (!calcstring.match(/[*+-\/]/) && calcstring.length > 0) {
			calcstring += e.target.innerText;
			calculate();
		}
	});
function calculate() {
	console.log(calcstring);
	try {
		if (!calcstring.match(/[*+-\/]/)) throw new Error();
		input.value = calcstring = '' + eval(calcstring);
	} catch (e) {
		input.value = calcstring;
	}
}
