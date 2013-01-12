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


lib.header = COA
lib.header.if.isTrue = {$aomame.page.header.active}
lib.header {
	10 < styles.content.get
	10 {
		select.where = colPos= {$aomame.page.header.colPos}
		
		stdWrap {
			required = 1
			wrap = <div class="{$aomame.page.settings.layout.container}">|</div>
			wrap {
				override = 
				override.if.isFalse.cObject = COA
			}
			outerWrap = <header class="header_grid">|</header>
			outerWrap {
				override = <header class="header_grid hero-unit">|</header>
				override.if.isTrue = {$aomame.page.header.use_bootstrap_hero_unit}
			}
		}
		slide = {$aomame.page.header.slide}	
	}
}