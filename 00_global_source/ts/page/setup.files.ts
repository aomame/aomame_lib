#---------------------------------------------------------------------
#
# (c) 2013 Patrick crausaz <support@aomame.ch>
# 
#  This script is part of the Aomame template library, which is 
#  free software; you can redistribute it and/or modify
#  it under the terms of the GNU General Public License as published by
#  the Free Software Foundation; either version 2 of the License, or
#  (at your option) any later version.
#
#  The GNU General Public License can be found at
#  http://www.gnu.org/copyleft/gpl.html.
#
#---------------------------------------------------------------------

#---------------------------------------------------------------------
#  less files - meta tags - title tag - favicon - other specials
#---------------------------------------------------------------------
page {
  headerData {
  	
  	
  	#-----------------------------------------------------------
    # 1 - 100 : space for meta and browser settings and page title 
    #-----------------------------------------------------------
    
  	10 = COA
	10 {
		10=TEXT
		10.value = {$aomame.page.settings.site_name}:&nbsp;
		20 < lib.store.title
		wrap = <title>|</title>
	}
	
	20 = TEXT
    20.value = <meta name="viewport" content="width=device-width, initial-scale=1.0">
    20.if.isTrue = {$aomame.page.settings.layout.responsive}
    
    49 = TEXT
	49.value = <!-- Le HTML5 shim, for IE6-8 support of HTML5 elements -->
	50 = TEXT
	50.value = <script src="http://html5shim.googlecode.com/svn/trunk/html5.js"></script>
	50.wrap = <!--[if lt IE 9]> | <![endif]-->
	
	
	60 = TEXT
	60.value = <link type="image/x-icon" href="{$aomame.path.local}img/{$aomame.head.favicon.file}" rel="icon">
	60.if.isTrue = {$aomame.head.favicon.active}
	
	
    #-----------------------------------------------------------
    # 101 - 200 : space for bootstrap files
    #-----------------------------------------------------------
    # Include Bootstrap Framework
  	110 = TEXT
  	110.value = <link rel="stylesheet/less" type="text/css" href="{$aomame.path.local}less/bootstrap.less" />
	111 = TEXT
	111.value = <link rel="stylesheet/less" type="text/css" href="{$aomame.path.local}less/responsive.less" />
	111.if.isTrue = {$aomame.page.settings.layout.responsive}
	
	
	#-----------------------------------------------------------
    # 201 - 300 : space for theme files
    #-----------------------------------------------------------
	210 = TEXT
  	210.value = <link rel="stylesheet/less" type="text/css" href="{$aomame.path.global}css/nav/superfish/theme_{$aomame.page.settings.layout.style}.less" />
	210.if {
		value = 5
		equals = {$aomame.page.nav.firstlevel.type}
	}
	
	220 = TEXT
	220.value = <link rel="stylesheet/less" type="text/css" href="{$aomame.path.local}less/theme.less" />
	
	
	#-----------------------------------------------------------
	# 501 - 700 : space for additional files - local settings
	#-----------------------------------------------------------
	# Do not add files within this range !
	#-----------------------------------------------------------
	
	#-----------------------------------------------------------
	# 1010 : include last! - less rendering
	#-----------------------------------------------------------
	1010 = TEXT
	1010.value = <script type="text/javascript" src="{$aomame.path.global}js/lib/less-{$aomame.head.less_version}.min.js"></script>
  }


  #---------------------------------------------------------------------
  #  JavaScript Librarys 
  #---------------------------------------------------------------------
  includeJSFooterlibs {
	jquery = {$aomame.path.global}js/lib/jquery-{$aomame.head.jquery_version}.min.js
	
	bootstrap = {$aomame.path.global}bootstrap/js/bootstrap.min.js
  }


  #---------------------------------------------------------------------
  #  Global Scripts
  #---------------------------------------------------------------------
  includeJSFooter {
  	fancybox = {$aomame.path.global}js/plugin/jquery.fancybox.js
	fancybox.if.isTrue = {$aomame.ext.lightbox.active}
	
	fancybox_settings = {$aomame.path.local}js/lightbox.js
	fancybox_settings.if.isTrue = {$aomame.ext.lightbox.active}
	
	google_plus = {$aomame.path.global}js/social/google_plus.js
	google_plus.if{
		isTrue = {$aomame.option.social.includeJs.google_plus}
	}
	
	facebook_like = {$aomame.path.global}js/social/facebook_like.js
	facebook_like.if{
		isTrue = {$aomame.option.social.includeJs.facebook}
	}
	
	twitter_button = {$aomame.path.global}js/social/twitter_button.js
	twitter_button.if{
		isTrue = {$aomame.option.social.includeJs.twitter}
	}
  }
  
  
  #---------------------------------------------------------------------
  #  Global Styles
  #---------------------------------------------------------------------
  includeCSS {
  	fancybox = {$aomame.path.global}css/plugin/fancybox.css
  	fancybox.if.isTrue = {$aomame.ext.lightbox.active}
	
	custom_frames = {$aomame.path.global}css/content/custom_frames.css
	
	header = {$aomame.path.global}css/header/theme_{$aomame.page.settings.layout.style}.css
	header.if.isTrue = {$aomame.page.header.active}
	
	content = {$aomame.path.global}css/content/theme_{$aomame.page.settings.layout.style}.css
	
  }
}