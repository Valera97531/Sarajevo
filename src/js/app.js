import * as flsFunctions from "./modules/function.js";
flsFunctions.isWebp();


document.addEventListener('DOMContentLoaded', () => {
	const burger = document.querySelector('.burger'),
		headerMenu = document.querySelector('.header__nav');

	burger.addEventListener('click', () => {
		burger.classList.toggle('_active');
		document.body.classList.toggle('_lock');
		headerMenu.classList.toggle('_active');
	});

	const headerLink = document.querySelectorAll('.header__link');

	headerLink.forEach(link => {
		link.addEventListener('click', () => {
			burger.classList.remove('_active');
			document.body.classList.remove('_lock');
			headerMenu.classList.remove('_active');
		});
	});
});