
(function($) {
$("document").ready(function(){
		
		//force javascript
		//$('#force_javascript').hide();
		//$('#page').show();
		
		
		//grid background fix
		if($('.content_background > .promotion_box')){
			 $('.content_background > .promotion_box').parent()
									.removeClass('content_background')
									.addClass('promotion_box_frame');
		}
		
		if($('.content_background > .tripple_promo_box')){
			 $('.content_background > .tripple_promo_box').parent()
									.removeClass('content_background')
									.addClass('tripple_box_frame');
		}
		
		if($('.content_background > .news_item_container')){
			 $('.content_background > .news_item_container').parent()
									.removeClass('content_background')
									.addClass('no_box_frame');
		}
		
		if($('.content_background > .news-single-item')){
			 $('.content_background > .news-single-item').parent()
									.removeClass('content_background')
									.addClass('no_box_frame');
		}
		
		if($('.content_background > .tripple_promo_box')){
			 $('.content_background > .tripple_promo_box').parent()
									.removeClass('content_background')
									.addClass('no_box_frame');
		}
		
		
		
		
		
		//  TABLES   //
		$('tbody').find('tr:even').addClass('even');
     		$('tbody').find('tr:odd').addClass('odd');
		
		// Contains Text fixes
		$('#uid91 b:contains("Features")').addClass('table_theme');
		$('#uid92 b:contains("Features")').addClass('table_theme');
		
		
		//  THEMES  //
		
		//set theme cookie
		
		if( $.cookie('theme') == null ) { 
    			$.cookie( 'theme', 'blue',  { expires: 7, path: '/' } );
		}
		$('#theme_white').click(function(){
			$.cookie( 'theme', 'white',  { expires: 7, path: '/' } );
		});
		$('#theme_grey').click(function(){
			$.cookie( 'theme', 'grey',  { expires: 7, path: '/' } );
		});
		$('#theme_blue').click(function(){
			$.cookie( 'theme', 'blue',  { expires: 7, path: '/' } );
		});
		
		
		//add CSS files to header
		if( $.cookie('theme') == 'grey' ) {
			$('head').append('<link rel="stylesheet" href="typo3conf/ext/aomame/template/aomame/main_template/css/themes/theme_grey.css" type="text/css" />');
		}
		if( $.cookie('theme') == 'blue' ) {
			$('head').append('<link rel="stylesheet" href="typo3conf/ext/aomame/template/aomame/main_template/css/themes/theme_blue.css" type="text/css" />');
		}
		if( $.cookie('theme') == 'white' ) {
			$('head').append('<link rel="stylesheet" href="typo3conf/ext/aomame/template/aomame/main_template/css/themes/theme_white.css" type="text/css" />');
			if($(window).width() > 1450){
				$('div#head_content').addClass('aomame_face');
			}
		}
		
		
		// show theme select
		$('#theme_inner_menu').mouseover(function(){
			$('#theme_select').animate({
				right: '102px',
				width:	'85px',
			}, 500);
			$('.theme_box').show();
			$('#theme_select').removeClass('invisible');
			$('#theme_select').addClass('visible');
			
		});
		
		//hide theme select
		$('body').click(function(e) {
			if (!$(e.target).is('#theme_menu') && !$(e.target).is('#theme_inner_menu') && !$(e.target).is('#theme_select') && !$(e.target).is('.theme_box')) {
        			$('#theme_select').stop(true, true);
				$('#theme_select').animate({
					right: '0px',
					width:	'0px'
				
				}, 500, function(){
					$('#theme_select').addClass('invisible');
				});
				$('.theme_box').hide(500);
			}
		});
		
		//  reload the page when theme is changed
		$('.theme_box').click(function(){
			location.reload();
		});
		
		
		
		
		/* DOMAIN CHECK FORM */
		
		$('#yourdomain').click(function(){
			if($(this).val() == 'Ihre Wunsch-Domain'){
				$(this).val('');
			}
		});
		
		
		/* CONTACTFORM AUTOFILL */
		typo3	 = getURLParam('typo3offer');
		magento = getURLParam('magentooffer');
		hosting = getURLParam('hostingoffer');
		wp	 = getURLParam('wp');
		mp	 = getURLParam('mp');
		ext	 = getURLParam('ext');
		support = getURLParam('support');
		seo 	 = getURLParam('seo');
		domain  = getURLParam('domain');
		others	 = getURLParam('others');
		
		/* fill inputs */
		if (domain != 'null') {
			$('#website').val(getURLParam('domain'));
		}
		
		/* fill checkboxes */
		if (typo3 	!= 'null'){	$('#interests-website').attr('checked', true); }
		if (magento 	!= 'null'){	$('#interests-webshop').attr('checked', true); }
		if (hosting 	!= 'null'){	$('#interests-hosting').attr('checked', true); }
		if (wp 	!= 'null'){	$('#interests-wordpress').attr('checked', true); }
		if (mp		!= 'null'){	$('#interests-mobile').attr('checked', true); }
		if (ext 	!= 'null'){	$('#interests-extension').attr('checked', true); }
		if (support 	!= 'null'){	$('#interests-support').attr('checked', true); }
		if (seo 	!= 'null'){	$('#interests-seo').attr('checked', true); }
		if (domain 	!= 'null'){	$('#interests-domain').attr('checked', true); }
		if (others 	!= 'null'){	$('#interests-others').attr('checked', true); }
		
		
});

function getURLParam(name){
    return decodeURI(
        (RegExp(name + '=' + '(.+?)(&|$)').exec(location.search)||[,null])[1]
    );
}


})(jQuery);

