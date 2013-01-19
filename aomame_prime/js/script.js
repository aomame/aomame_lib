$("document").ready(function(){

	$('ul.sf-menu').superfish({
		    hoverClass:    'sfHover',          // the class applied to hovered list items 
		    pathClass:     'overideThisToUse', // the class you have applied to list items that lead to the current page 
		    pathLevels:    1,                  // the number of levels of submenus that remain open or are restored using pathClass 
		    delay:         1000,                // the delay in milliseconds that the mouse can remain outside a submenu without it closing 
		    animation:     {opacity:'show'},   // an object equivalent to first parameter of jQuery’s .animate() method 
		    speed:         'normal',           // speed of the animation. Equivalent to second parameter of jQuery’s .animate() method 
		    autoArrows:    true,               // if true, arrow mark-up generated automatically = cleaner source code at expense of initialisation performance 
		    dropShadows:   false,               // completely disable drop shadows by setting this to false 
		    disableHI:     false              // set to true to disable hoverIntent detection 
		    //onInit:        function(){},       // callback function fires once Superfish is initialised – 'this' is the containing ul 
		    //onBeforeShow:  function(){},       // callback function fires just before reveal animation begins – 'this' is the ul about to open 
		    //onShow:        function(){},       // callback function fires once reveal animation completed – 'this' is the opened ul 
		    //onHide:        function(){}        // callback function fires after a sub-menu has closed – 'this' is the ul that just closed 		
	}); 

	
	
	//show fancyheader if one of those cases is true
	if(getURLParam("ofh")){	
		openFancyHeader();
		$('section.fancyheader_grid .fh_tab').addClass('open');
	}
	
	//Fancyheader & Login Handling
	var open_param = '&ofh=1';
	
	//add parameter to links
	href = $('.addofhparam a').attr('href');
	$('.addofhparam:first-child').attr('href', href+open_param);
	
	//add parameter to forms
	action = $('.felogin form').attr('action');
	$('.felogin form').attr('action', action+open_param);
	
	
	$(window).load(function(){
		$('.socialbuttons').delay(800).fadeIn(1000);
			
			//Facebook Like doesen't work in FireFox if it's initial call is on display: none;
			//var like_box = $('.fb-like-inactive', '.socialbuttons');
			//like_box.removeClass('fb-like-inactive');
			//like_box.addClass("fb-like");
			//FB.XFBML.parse();	
			
		
	
	});

});



function openFancyHeader(){
	$('section.fancyheader_grid .container').show();
}

function getURLParam(sParam){
    var sPageURL = window.location.search.substring(1);
    var sURLVariables = sPageURL.split('&');
    for (var i = 0; i < sURLVariables.length; i++)
    {
        var sParameterName = sURLVariables[i].split('=');
        if (sParameterName[0] == sParam)
        {
            return sParameterName[1];
        }
    }
}