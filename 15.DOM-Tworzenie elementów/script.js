const root = document.getElementById('root');

// Zadanie 1:
const div1 = document.createElement('div');
div1.innerText = 'To jest nowy element';
root.appendChild(div1);

// Zadanie 2:
const ul1 = document.createElement('ul');
for (let owoc of ['jablko', 'arbuz', 'pomarancza', 'winogrono', 'pomelo', 'kiwi']) {
	const o = document.createElement('li');
	o.innerText = owoc;
	ul1.appendChild(o);
}
root.appendChild(ul1);

// Zadanie 3:
ul1.addEventListener('click', () =>
	[...ul1.children].filter((e, i) => i % 2 == 0).forEach((e) => e.parentElement.removeChild(e))
);

// Zadanie 4:
const button1 = document.createElement('button');
button1.innerText = 'usun mnie';
button1.onclick = () => root.removeChild(button1);
root.appendChild(button1);

// Zadanie 5:
for (let i = 0, limit = Math.random() * 10; i < limit; i++) {
	const div = document.createElement('div');
	div.innerText = `To jest div numer ${i}`;
	root.appendChild(div);
}

// Zadanie 6:
const obj1 = {
	div1: 'to jest div',
	span1: 'to jest span',
	div2: {
		div3: 'to jest div',
	},
	span2: 'to jest span',
};
const func1 = (obj) => {
	const ret = [];
	for (let el in obj) {
		let elm = document.createElement(el.substr(0, el.length - 1));
		if (typeof obj[el] === 'object') elm.appendChild(...func1(obj[el]));
		else elm.innerText = obj[el];
		ret.push(elm);
	}
	return ret;
};
for (let el of func1(obj1)) root.appendChild(el);

// Zadanie 7:
const ul2 = document.createElement('ul');
const ul3 = document.createElement('ul');
for (let owoc of ['jablko', 'arbuz', 'pomarancza', 'winogrono', 'pomelo', 'kiwi']) {
	const o = document.createElement('li');
	o.innerText = owoc;
	ul2.appendChild(o);
}
const func2 = (el1, el2, btn1, btn2) => {
	console.log(el1, el2, el1.lastElementChild);
	const last = el1.lastElementChild;
	el1.removeChild(last);
	el2.appendChild(last);
	btn2.disabled = false;
	if (el1.children.length === 0) btn1.disabled = true;
};
const b1 = document.createElement('button');
b1.innerText = 'click';
b1.onclick = () => func2(ul2, ul3, b1, b2);
const b2 = document.createElement('button');
b2.innerText = 'click';
b2.onclick = () => func2(ul3, ul2, b2, b1);
b2.disabled = true;

root.appendChild(ul2);
root.appendChild(b1);
root.appendChild(ul3);
root.appendChild(b2);

// Zadanie 8:
const form = document.createElement('div');

const create = (name) => {
	const label = document.createElement('span');
	label.innerText = name;
	const input = document.createElement('input');
	input.type = 'text';
	input.style.display = 'inline-block';
	form.appendChild(label);
	form.appendChild(input);
	return input;
};
const name = create('Nazwa elementu');
const value = create('Tekst elementu');
const color = create('Kolor elementu');
const amm = create('Ile razy');

const b3 = document.createElement('button');
b3.innerText = 'Utwórz';
b3.onclick = () => {
	for (let i = 0; i < Number(amm.value); i++) {
		const temp = document.createElement(name.value);
		temp.innerText = value.value;
		temp.style.color = color.value;
		root.appendChild(temp);
	}
};
form.appendChild(b3);
root.appendChild(form);

// Zadanie 9:
const heading = document.createElement('div');
heading.className = 'heading';
const content = document.createElement('div');
content.className = 'content';
const tablecont = document.createElement('div');
const b4 = document.createElement('button');
b4.innerText = 'Więcej';
const b5 = document.createElement('button');
b5.innerText = 'Utwórz';
const newSpan = (text) => {
	const sp = document.createElement('span');
	sp.innerText = text;
	heading.appendChild(sp);
};
const addRow = () => {
	const d = document.createElement('div');
	for (let i = 0; i < 4; i++) {
		const inp = document.createElement('input');
		d.appendChild(inp);
	}
	content.appendChild(d);
};
newSpan('Imię');
newSpan('Nazwisko');
newSpan('Wiek');
newSpan('Ilość dzieci');
addRow();
b4.onclick = () => addRow();
b5.onclick = () => {
	const table = document.createElement('table');
	table.id = 'temp-table';
	const th = document.createElement('tr');
	for (let item of ['Imię', 'Nazwisko', 'Wiek', 'Ilość dzieci']) {
		const td = document.createElement('th');
		td.innerText = item;
		th.appendChild(td);
	}
	table.appendChild(th);
	for (let row of [...content.children]) {
		const tr = document.createElement('tr');
		for (let inp of [...row.children]) {
			const td = document.createElement('td');
			td.innerText = inp.value;
			tr.appendChild(td);
		}
		table.appendChild(tr);
	}
	tablecont.appendChild(table);
	uppercase();
};
heading.appendChild(b4);
heading.appendChild(b5);

root.appendChild(heading);
root.appendChild(content);
root.appendChild(tablecont);

// Zadanie 10:
function uppercase() {
	for (let row of [...document.getElementById('temp-table').children])
		for (let el of [...row.children])
			if (el.innerText)
				el.innerText = el.innerText[0].toUpperCase() + el.innerText.substr(1, el.innerText.length);
}

// Zadanie 11:
const func3 = (str) => str.match(/[0-9]/g).reduce((a, b) => +a + +b);

for (let i = 0, limit = func3('1,3'); i < limit; i++) {
	const d = document.createElement('div');
	d.innerText = limit;
	root.appendChild(d);
}

// Zadanie 12:
const func4 = (str) => ({
	pole: str,
});
const obj = func4('test');
obj.check = function () {
	console.log(this.pole);
	if (this.pole.indexOf('Ala') !== -1) this.pole = this.pole.replace('Ala', 'Ola');
	else {
		const d = document.createElement('div');
		d.innerText = 'Nie znaleziono ali';
		root.appendChild(d);
	}
};
obj.check();

// Zadanie 13:
const func5 = (tab) => tab.map((e) => e.length);
const func6 = (tab) => tab.reduce((a, b) => a + b);
const func7 = (tab) => func6(tab) / tab.length;

console.log(func6(func5(['haha', 'benc', 'hihi'])), func7(func5(['haha', 'benc', 'hihi'])));

// Zadanie 14:
let obj2 = {
	name: '',
	surname: '',
	age: '',
};
const func8 = (name, surname, age) => {
	const old = Object.assign({}, obj2);
	obj2 = { name, surname, age, namel: name.length, surnamel: surname.length, agel: age.length };
	console.log(obj2);
	if (name.length > 5 || surname.length > 5 || age.length > 5) {
		const d = document.createElement('button');
		d.innerText = 'RETURN TO PREVIOUS OBJ';
		d.onclick = () => console.log((obj2 = old));
		root.appendChild(d);
	}
};
func8('aaaaaaa', 'ddd', 'ssd');
