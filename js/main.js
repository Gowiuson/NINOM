$(document).ready(function() {
	$(".head-maine.owl-carousel").owlCarousel({
	  	items: 4,
	  	margin: 30,
	  	loop: true,
        nav: false,
	  	dots: false,
	  	autoplay: true,
	  	autoplayTimeout: 5000,
	  	responsive:{
	        0:{
	            items:1,
	        },
	        600:{
	            items:1,
	        },
	        1200:{
	            items:1,
	        }
	    }
	});
	$(".test-maine.owl-carousel").owlCarousel({
		items: 4,
		margin: 30,
		loop: true,
	  nav: false,
		dots: false,
		autoplay: true,
		autoplayTimeout: 5000,
		responsive:{
		  0:{
			  items:1,
		  },
		  600:{
			  items:1,
		  },
		  1200:{
			  items:1,
		  }
	  }
  });
});