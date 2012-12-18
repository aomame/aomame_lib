//Footor fix to bottom
var difference = $(window).height()-$('body').height();

if(difference > 0){
	$('footer').css({
		'top': difference-17,
		'position': 'relative'
	})
}

//if window height changes
$(window).resize(function() {
	var difference = $(window).height()-$('body').height();
	if(difference > 0){
		$('footer').css({
			'top': difference-27,
			'position': 'relative'
		})
	}
});

	