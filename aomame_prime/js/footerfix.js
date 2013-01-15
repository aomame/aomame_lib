/*
* Title: Footor fix to bottom
* Descrption: If the HTML content in a browserwindow isn't heigh enough 
* 			  to fill the screen-height, the footer won't be at the bottom of a screen.
* 			  Therefor use this script to set a position to the footer on any event 
* 			  that changes the height of a document,  
* Dependencies: jQuery > 1.7.0
* Author: Crausaz Patrick <support#aomame.ch>
* Date: 16.12.2012
* Version: 1.2.1
*/

//initial call
setDifference();

//if window size changes
$(window).resize(function() {
	setDifference();
});

//on bootstrap tab [show]
$('a[data-toggle="tab"]').on('shown', function (e) {
	setDifference();
});

//on bootstrap collapse [hidden]
$('a[data-toggle="collapse"]').on('hidden', function (e) {
	setDifference();
});

//on bootstrap collapse [show]
$('a[data-toggle="collapse"]').on('shown', function (e) {
	setDifference();
});

//set the position of the footer
function setDifference(){
	var difference = $(window).height()-$('body').height();
	if(difference > 0){
		$('footer').css({
			'top': difference,
			'position': 'relative'
		})
	}
	return false;
}