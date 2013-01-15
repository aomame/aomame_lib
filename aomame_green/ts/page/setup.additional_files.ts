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
#
#  This file supplements the {global}setup.file.ts
#  You can add here any css, less, js ... files or 
#  meta tags for local use
#
#---------------------------------------------------------------------


page {

	headerData {
		#-----------------------------------------------------------------
		# 501 - 700 : space for additional local files
		#-----------------------------------------------------------------
		# Only add files within this range !
		#-----------------------------------------------------------------
		
	}

  
	includeJS {
		
	}
  
  	includeJSFooterlibs {
		
	}
  
	includeJSFooter {
		#cookie = {$aomame.path.global}js/lib/jquery.cookie.js
		#analytics = {$aomame.path.local}js/analytics.js
		jquery_color = {$aomame.path.global}js/lib/jquery.color.js
  		superfish = {$aomame.path.global}plugin/superfish/js/superfish.js
		fancyheader = {$aomame.path.global}js/header/fancyheader.js
		script = {$aomame.path.local}js/script.js
	}
  
	includeCSS {
		prime_style = {$aomame.path.local}css/style.css
		fancyheader = {$aomame.path.global}css/header/fancyheader.css
	}
}