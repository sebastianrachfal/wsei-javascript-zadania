// Zadanie 1:
console.log(document.getElementById('buz').parentElement);
console.log(document.getElementById('baz').previousElementSibling);
console.log(document.getElementById('foo').children);
console.log(document.getElementById('foo').parentElement);
console.log(document.getElementById('foo').children[0]);
console.log(document.getElementById('foo').children[1]);

// Zadanie 2:
const func1 = (el) =>
	el.addEventListener('click', (e) =>
		console.log(e.target.children[0].children[0].children[0].children[1].children[0].children[0].innerText)
	);
func1(document.getElementById('ex2'));

// Zadanie 3:
const func2 = () => {
	for (let el of [...document.getElementById('ex3').children])
		el.children[0].addEventListener(
			'click',
			() => (el.children[1].style.display = el.children[1].style.display == 'none' ? 'inherit' : 'none')
		);
};
func2();

// Zadanie 4:
const func3 = () => {
	for (let el of [...document.getElementById('ex3').children])
		el.children[0].addEventListener(
			'click',
			() => (el.style.backgroundColor = '#' + Math.floor(Math.random() * 16777215).toString(16))
		);
};
func3();

// Zadanie 5:
let counter = 0;
const ex5c = document.getElementById('ex5').children;
const list = ex5c[3];
ex5c[0].addEventListener('mouseover', () => changeList('red'));
ex5c[1].addEventListener('mouseover', () => changeList('green'));
ex5c[2].addEventListener('mouseover', () => changeList('blue'));

const changeList = (color) => {
	switch (counter++) {
		case 0:
			list.children[0].style.backgroundColor = color;
			break;
		case 1:
			list.children[list.children.length - 1].style.backgroundColor = color;
			break;
		case 2:
			for (let i = 0; i < list.children.length; i++)
				if (i % 2 === 0) list.children[i].style.backgroundColor = color;
			break;
		case 3:
			for (let el of list.children) el.style.backgroundColor = color;
			break;
		case 4:
			list.style.backgroundColor = color;
			break;
		default:
			counter = 0;
			changeList(color);
			break;
	}
};

// Zadanie 6:
const ex6 = document.getElementById('ex6');
const one = ex6.firstElementChild.firstElementChild.firstElementChild;
const two = ex6.firstElementChild.parentElement.firstElementChild.firstElementChild.nextSibling.parentElement;
const three =
	ex6.parentElement.firstElementChild.parentElement.children[1].firstElementChild.firstElementChild.firstElementChild;
console.log(one, two, three);
