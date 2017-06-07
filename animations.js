// Lock navbar to top on scrollin past it
$(document).scroll(function() {
	var y = $(this).scrollTop();
	if (y > 85) {
		$('#minibrand-box').animate({width: 'show'});
	} else {
		$('#minibrand-box').animate({width: 'hide'});
	}
});


// Products page animations
$(document).ready(function(){

	$(".filter-button").click(function(){
		var value = $(this).attr('data-filter');
		
		if($(this).hasClass("active-btn")) {

		}

		else if($(".active-btn").attr('data-filter') == "all") {
			$(".filter-button").removeClass("active-btn");
			$(this).addClass("active-btn");
			if(value == "all") {
				$(".filter").show(400);
			}
			else {
				$(".filter").not('.'+value).hide(400);
			}
		}

		else {
			$(".filter-button").removeClass("active-btn");
			$(this).addClass("active-btn");
			if(value == "all") {
				$(".filter").show(400);
			}
			else {
				$(".filter").show(400);
				$(".filter").not('.'+value).delay(400).hide(400);
			}
		}  

	});
});


// remove outline on button after clicking in Chrome on OS X
$(document).ready(function(){
	$('.btn').mouseup(function() { this.blur() })
});