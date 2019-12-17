$('.navbar').on('click', 'a[href^="#"]', function (event) {
	console.log(event);
    event.preventDefault();
    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
});