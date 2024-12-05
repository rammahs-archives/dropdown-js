const listHeadings = document.querySelectorAll('footer section div h4');

listHeadings.forEach((heading) => {
	const list = heading.nextElementSibling;

	heading.addEventListener('click', () => {
		list.classList.toggle('show');
	});
});

const heart = document.querySelector('.heart-count');
const button = document.querySelectorAll('button');

button.forEach((button) => {
	button.addEventListener('click', () => {
		if (button.classList.contains('liked')) {
			heart.innerText = parseInt(heart.innerText) - 1;
			button.classList.remove('liked');
		} else {
			heart.innerText = parseInt(heart.innerText) + 1;
			button.classList.add('liked');
		}
	});
})
heart.innerText = '0';
