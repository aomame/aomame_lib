$('document').ready(function(){
	$('section.fancyheader_grid').prependTo('body');
	
	$trigger = $('.fh_tab');
	$fh_container = $('section.fancyheader_grid .container');
	
	$trigger.fadeIn(800);
	
	$trigger.click(function(){
		$fh_container.stop(true,true).slideToggle(400, function(){
			$trigger.toggleClass('open');
		});
	});
	
});
