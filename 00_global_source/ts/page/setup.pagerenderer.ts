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
#  Build the page : You can overwrite and add entries in your
#  local pagerenderer.
#    ->  [your_template]/main_template/ts/page/setup.pagerenderer.ts
#  
#---------------------------------------------------------------------
lib.pagerenderer = COA
lib.pagerenderer {
	
		
	
	#build the fancyheader
	100.if.isTrue = {$aomame.page.header.fancyheader.active}
	100 < lib.fancyheader
	
		
	#main navigation
	200.if.isTrue = {$aomame.page.nav.firstlevel.active}
	200 < lib.main_navigation
	
	
	
	#header
	500.if.isTrue = {$aomame.page.header.active}
	500 < lib.header
	
	
	
	#build the breadcrump nav
	800.if.isTrue = {$aomame.page.nav.breadcrumb.active}
	800 < lib.breadcrumb
	
	
	
	#content
	1000.if.isTrue = {$aomame.page.content.active}
	1000 < lib.content_layout
	
	
	
	#footer
	1500.if.isTrue = {$aomame.page.footer.active}
	1500 < lib.footer
	
	
	#add the copyright with the link to your company (hidden by default but nice for linkbuilding)
	5000.if.isTrue = {$aomame.option.copyright.active}
	5000 < lib.store.copyright
	
}

page = PAGE
page.10 < lib.pagerenderer