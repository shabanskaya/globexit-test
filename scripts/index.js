const button = document.querySelector('.form__button');
const form = document.querySelector('.form')
const inputColor = document.querySelector('.form__color');
const inputNumber = document.querySelector('.form__number');
const array = Array.from(document.querySelectorAll('.table__data'));


function colorAlmostAll(color, n) {
	array.forEach((item, index) => {
		if (index != n) {
			item.style.backgroundColor = color;
		};
	});
}

function submitForm(event) {
	event.preventDefault();
	let color = inputColor.value;
	let num = Number(inputNumber.value) - 1;
	array[num].style.backgroundColor = '#ffffff';
	colorAlmostAll(color, num);
}

form.addEventListener('submit', submitForm);