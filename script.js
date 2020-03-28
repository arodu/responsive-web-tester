const resBtns = document.querySelectorAll('.resButton');
const resetBtn = document.querySelector('.resetButton');
const view = document.querySelector('.wrapper');
const responsiveView = document.querySelector('.responsiveView');

const urlParams = new URLSearchParams(window.location.search);

if( urlParams.has('url') ){
	let url = urlParams.get('url')
	responsiveView.src = url;

	let input = document.getElementById('input-url')
	input.value = url;
}

resBtns.forEach(button => {
	button.addEventListener('click', () => {
		view.style.width = button.value;
		button.classList.add('active');
		removeActive(button, resBtns);
	});
});

const removeActive = (el, array) => {
	array.forEach(element => {
		if (el !== element) {
			element.classList.remove('active');
		}
	});
};
