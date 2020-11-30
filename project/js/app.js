window.addEventListener('DOMContentLoaded', () => {
	const explore = document.querySelector('.explore');
	const options = document.querySelector('.gov1-options');
	const buttons = document.querySelectorAll('[data-js-page]');
	const page = document.querySelectorAll('.page');
	console.log(buttons);

	page.forEach((pg) => {
		pg.addEventListener('click', (e) => {
			var goal_page = e.target.getAttribute('data-js-page');
			console.log(goal_page);
			pg.classList.remove('active');
			document
				.querySelector(".page[data-page='" + goal_page + "']")
				.classList.add('active');
		});
	});

	explore.addEventListener('touchend', () => {
		options.classList.toggle('show');
	});
});
