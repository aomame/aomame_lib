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
#  Fancyheader is a hidden header that can be slided down and up 
#  by hitting the tab button. You can show any content here.
#  
#  Fancyheader requires the fancyheader.js -> {global}/js/header/fancyheader.js
#  
#---------------------------------------------------------------------

lib.fancyheader = COA
lib.fancyheader.if.isTrue = {$aomame.page.header.fancyheader.active}
lib.fancyheader {
	
	10 < styles.content.get
	10.select {
		pidInList = {$aomame.page.header.fancyheader.pid}
		where = colPos= {$aomame.page.header.fancyheader.colPos}
	}
	10.wrap = <div class="{$aomame.page.settings.layout.container}"><div class="{$aomame.page.settings.layout.row}">|</div></div>
	
	
	20 = HTML
	20.value = <div class="fh_tab"><p>{$aomame.page.header.fancyheader.tab.content}</p></div>
	
	wrap = <section class="fancyheader_grid {$aomame.page.header.fancyheader.visibility}">|</section>
}