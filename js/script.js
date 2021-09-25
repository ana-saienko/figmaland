const navSlide = () => {
	const burger = document.querySelector('.burger');
	const nav = document.querySelector('.header__nav');

	burger.addEventListener('click', () => {
		nav.classList.toggle('nav-active');

		burger.classList.toggle('burger-active');
	});
}

navSlide();