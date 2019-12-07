$(document).ready(function($){
	$(".homepage-slides").owlCarousel({
		items:1,
		autoplay:false,
		nav:true,
		dots:true,
		navText:['<i class="fas fa-arrow-left"></i>','<i class="fas fa-arrow-right"></i>'],
		animateOut: 'fadeOut',
	});
});