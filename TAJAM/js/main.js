/*$('.sidebar__btn').on('click', function(e){
    e.preventDefault();
    $('.sidebar').toggleClass('sidebar__active');
    $('.content').toggleClass('content__active');
})*/

const anchors = document.querySelectorAll('a[href*="#"]');

for(let anchor of anchors){
	anchor.addEventListener('click', function(e){
		e.preventDefault();
		const blockId = anchor.getAttribute('href');
		document.querySelector('' + blockId).scrollIntoView({
			behavior: 'smooth',
			block:'start'
		})
	})
}

let cursor = document.querySelector('.cursor');
let cursor2 = document.querySelector('.cursor2');
document.addEventListener('mousemove', function(e){
	cursor.style.cssText = cursor2.style.cssText = 'left: ' + e.clientX + 'px; top: ' +  e.clientY + 'px;';
});