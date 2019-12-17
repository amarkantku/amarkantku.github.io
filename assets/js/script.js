$('.navbar').on('click', 'a[href^="#"]', function (event) {
	console.log(event);
    event.preventDefault();
    let top = 0;
    if(event.target.hash === '#skills') {
    	top = -20;
    }
    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top + top
    }, 500);
});