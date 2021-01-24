// Zadanie !:
const func1 = (els) => [...els].map((e) => e.tagName);
console.log(func1(document.getElementsByClassName('more-divs')));

// Zadanie 2:
const func2 = (el) => {
	console.log(el.innerHTML);
	console.log(el.outerHTML);
	console.log(el.className);
	console.log(el.classList);
	console.log(el.dataset);
};
func2(document.getElementsByClassName('short-list')[0]);

// Zadanie 3:
const func3 = (el, param1, param2, param3) => ({
	sum: +el.getAttribute(param1) + +el.getAttribute(param2),
	diff: +el.getAttribute(param2) - +el.getAttribute(param3),
});
console.log(func3(document.getElementById('datasetCheck'), 'data-numberOne', 'data-numberTwo', 'data-number-three'));

// Zadanie 4:
document.getElementById('spanText').innerText = 'dowolny';

// Zadanie 5:
document.getElementById('spanText').className = 'dowolna';

// Zadanie 6:
const func4 = (el) => {
	for (let c of el.className.split(' ')) console.log(c);
	console.log(el.className.replace(/ /g, '+'));
	el.className = '';
	console.log('Usunięto wszystkie klasy');
};
func4(document.getElementById('classes'));

// Zadanie 7:
const func5 = (els) => {
	for (let el of [...els]) if (!el.getAttribute('data-text')) el.setAttribute('data-text', 'text');
};
func5(document.querySelectorAll('#longList>li'));

// Zadanie 8:
const func6 = (obj) => (document.getElementById('myDiv').className = obj.newClass);
const func7 = (newClass) => func6({ newClass });
func7('nazwa-klasy');

// Zadanie 9:
const func8 = (cl) => (document.getElementById('numbers').className = Number(cl) % 2 === 0 ? 'even' : 'odd');
func8(Math.round(Math.random() * 10));

// Zadanie 10:
const func9 = (el) => [...el.children].map((e) => e.innerText);
console.log(func9(document.getElementById('longList')));

// Zadanie 11:
const func10 = (els) =>
	[...els].forEach(
		(e) => (e.setAttribute('data-old-value', e.innerText) || true) && (e.innerText = Math.round(Math.random() * 10))
	);
func10(document.querySelectorAll('#longList>*'));
