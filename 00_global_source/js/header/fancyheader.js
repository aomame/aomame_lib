$('document').ready(function(){
	
	$('section.fancyheader').prependTo('body');
	
	$('.fh_tab').toggle(function(){
		$('section.fancyheader .container').slideDown(400, function() {
			$('section.fancyheader .container').height($('section.fancyheader').height());
			$('.fh_tab').css('background-position', '0 -45px');
		  });
		
	},function(){
		$('section.fancyheader .container').slideUp(200, function(){
			$('.fh_tab').css('background-position', '0 0');
		});
	});	
	
	
	
});