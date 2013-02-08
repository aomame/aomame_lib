$("document").ready(function(){
	
	$('ul.sf-menu').superfish({
		    hoverClass:    'sfHover',          // the class applied to hovered list items 
		    pathClass:     'overideThisToUse', // the class you have applied to list items that lead to the current page 
		    pathLevels:    1,                  // the number of levels of submenus that remain open or are restored using pathClass 
		    delay:         1000,                // the delay in milliseconds that the mouse can remain outside a submenu without it closing 
		    animation:     {opacity:'show'},   // an object equivalent to first parameter of jQuery�s .animate() method 
		    speed:         'normal',           // speed of the animation. Equivalent to second parameter of jQuery�s .animate() method 
		    autoArrows:    true,               // if true, arrow mark-up generated automatically = cleaner source code at expense of initialisation performance 
		    dropShadows:   false,               // completely disable drop shadows by setting this to false 
		    disableHI:     false              // set to true to disable hoverIntent detection 
		    //onInit:        function(){},       // callback function fires once Superfish is initialised � 'this' is the containing ul 
		    //onBeforeShow:  function(){},       // callback function fires just before reveal animation begins � 'this' is the ul about to open 
		    //onShow:        function(){},       // callback function fires once reveal animation completed � 'this' is the opened ul 
		    //onHide:        function(){}        // callback function fires after a sub-menu has closed � 'this' is the ul that just closed 		
	}); 

	
	
	// smoothe facein of social buttons, because the scripts take some time to get all requests.		
	$(window).load(function(){
		$('.socialbuttons').delay(800).fadeIn(1000);
	});
	
	
	//fancyheader login
	
	
	//login with Aomame (felogin)
	$('.felogin_tab').click(function(){
		var fadespeed = 400;
		
		$('.fancyheader_grid .tx-dixeasylogin-pi1').fadeOut(fadespeed, function(){
			$('.fancyheader_grid .tx-dixeasylogin-pi1 .felogin').addClass('ao_login');
			var div = $('.fancyheader_grid .tx-dixeasylogin-pi1 .felogin').hide();
			$(this).replaceWith(div);
			div.fadeIn(fadespeed);
		});
		
		$('.content_grid .tx-dixeasylogin-pi1').fadeOut(fadespeed, function(){
			$('.content_grid .tx-dixeasylogin-pi1 .felogin').addClass('ao_login');
			var div = $('.content_grid .tx-dixeasylogin-pi1 .felogin').hide();
			div.find('.span6').removeClass('span6').addClass('span2');
			$(this).replaceWith(div);
			div.fadeIn(fadespeed);
		});
	});
	
	//felogin: display error handling
	if($('.alert_grid')){
		//store the first alert as object and remove any other
		var alert = $('body').find('.alert_grid').eq(0);
		$('body').find('.alert_grid').eq(1).remove();
		
		//insert any alert before the content grid		
		$('.content_grid').before(alert);
			
		
	}
	
	//ao login - forgot password
	if(getURLParam('tx_felogin_pi1%5Bforgot%5D') || getURLParam('tx_felogin_pi1[forgot]')){
		
		//display block to .felogin and replace the facebook/google login  
		var content_login = $('.content_grid .tx-dixeasylogin-pi1 .felogin').show();
		var fancyheader_login = content_login.clone();
		$('.content_grid .tx-dixeasylogin-pi1 .felogin').addClass('ao_login');
		$('.fancyheader_grid .tx-dixeasylogin-pi1').replaceWith(fancyheader_login);
		$('.content_grid .tx-dixeasylogin-pi1').replaceWith(content_login);
		
		
		//activate tab 3 (with the forget login content)
		$('.nav-tabs li').removeClass('active');
		$('.tab-content div').removeClass('active');
		$('.nav-tabs li:eq(2)').addClass('active');
		$('.tab-content').find('.tab-pane').eq(2).addClass('active');
	}	
	
	
	// login field
	//*************
	var clearMePrevious = '';

	// clear input on focus
	$('.felogin_clear_focus').focus(function() {
		if($(this).val()==$(this).attr('title')) {
			clearMePrevious = $(this).val();
			$(this).val('');
		}
	});

	// if field is empty afterward, add text again
	$('.felogin_clear_focus').blur(function() {
		if($(this).val()=='') {
			$(this).val(clearMePrevious);
		}
	});
	
	
	
	// user image hover: to settings
	$('section.fancyheader_grid .felogin .ao_userimage').hover(function(){
		$('section.fancyheader_grid .felogin .ao_profile_setting').stop().show().css('opacity', '1');
	},function(){
		$('section.fancyheader_grid .felogin .ao_profile_setting').fadeOut(1000);
	});
	
	
	//warning on deleting profile
	$('#datamints_feuser_85_userdelete_wrapper input').change(function(){
		if($(this).is(':checked')){
			$('#datamints_feuser_85_submit_wrapper input').toggleClass('btn-inverse').addClass('btn-danger');
			handlePopover();
		}else{
			$('#datamints_feuser_85_submit_wrapper input').toggleClass('btn-danger').addClass('btn-inverse');
			handlePopover();
		}
	});
	
	$('.tx-datamintsfeuser-pi1 .btn').popover('disable');
	
	
	
});


function handlePopover(){
	if ($(".tx-datamintsfeuser-pi1 .btn-danger")[0]){
		$('.tx-datamintsfeuser-pi1 .btn').popover('enable');
	}else{
		$('.tx-datamintsfeuser-pi1 .btn').popover('disable');
	}
}

function openFancyHeader(){
	$('section.fancyheader_grid .container').show();
	$('section.fancyheader_grid .fh_tab').addClass('open');
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

