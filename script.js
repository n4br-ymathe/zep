let stars = document.getElemenById('stars');
let meteorid = document.getElemenById('meteorid');
let	rocket = document.getElemenById('rocket');
let text = document.getElemenById('text');
let button = document.getElemenById('button');

window.addEventListener('scroll', function(){
	let value = window.scrollY;
	stars.style.left = value * 1 + 'px';
	rocket.style.top = value * -0.5 + 'px';
	text.style.marginBottom = value * 1 + 'px';
	button.style.marginBottom = value * 1 + 'px';

});