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
#  Prime breadcrumb with searchform
#
#---------------------------------------------------------------------

lib.breadcrumb {
	
	20 < lib.store.divider
	
	30= COA
	30 {
		
		10 = COA
		10 {
			
			10 < lib.store.title
			10.wrap = <h1>|</h1>
		
			20 < lib.breadcrumb.10
			
			wrap = <div class="span8">|</div>
		}
		
		20 < lib.searchform
		20.wrap = <div class="span4">|</div>
		
		wrap = <div class="{$aomame.page.settings.layout.row} bc_bottom">|</div>
	}
	
	40 < lib.store.divider
	
}
lib.breadcrumb.10 >