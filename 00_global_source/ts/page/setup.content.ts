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

lib.content_left < styles.content.get
lib.content_middle < styles.content.getRight
lib.content_right < styles.content.getBorder

lib.content_layout = COA
lib.content_layout {
	10 = CASE
   	10 {
	   	key.field = backend_layout
	   	key.ifEmpty.data = levelfield:-2, backend_layout_next_level, slide
			
		default = COA
	 	default {
	 		#10 < lib.content_middle
	 		10 < styles.content.getRight
	 		10.wrap = <div class="{$aomame.page.content.columns.1_col.middle} col_middle">|</div>
	 		20 < lib.store.clear
	 	}
	 
		 #single col layout
		 1 = COA
		 1 {
		 	#10 < lib.content_middle
		 	10 < styles.content.getRight
		 	10.wrap = <div class="{$aomame.page.content.columns.1_col.middle} col_middle">|</div>
		 	20 < lib.store.clear
		 }
	 
		 #doble col layout
		 2 = COA
		 2 {
		 	#10 < lib.content_left
		 	10 < styles.content.get
		 	10.wrap = <div class="{$aomame.page.content.columns.2_col.left} col_left">|</div>
		 	20 < lib.content_right
		 	20.wrap = <div class="{$aomame.page.content.columns.2_col.right} col_right">|</div>
		 	30 < lib.store.clear
		 }
		 
		 #tripple col layout
		 3 = COA
		 3{
		 	10 < lib.content_left
		 	10.wrap = <div class="{$aomame.page.content.columns.3_col.left} col_left">|</div>
		 	20 < lib.content_middle
		 	20.wrap = <div class="{$aomame.page.content.columns.3_col.middle} col_middle">|</div>
		 	30 < lib.content_right
		 	30.wrap = <div class="{$aomame.page.content.columns.3_col.right} col_right">|</div>
		 	40 < lib.store.clear
		 }
		 
		 #single col with nav
		 4 = COA
		 4{
		 	10 < lib.nav_secondlevel
		 	10.wrap = <div class="{$aomame.page.content.columns.1_col_nav.nav} col_nav">|</div>
		 	20 < lib.content_middle
		 	20.wrap = <div class="{$aomame.page.content.columns.1_col_nav.middle} col_middle">|</div>
		 	30 < lib.store.clear
		 }
		 
		 #double col with nav
		 5 = COA
		 5{
		 	10 < lib.nav_secondlevel
		 	10.wrap = <div class="{$aomame.page.content.columns.2_col_nav.nav} col_nav">|</div>
		 	20 < lib.content_left
		 	20.wrap = <div class="{$aomame.page.content.columns.2_col_nav.left} col_left">|</div>
		 	30 < lib.content_right
		 	30.wrap = <div class="{$aomame.page.content.columns.2_col_nav.right} col_right">|</div>
		 	40 < lib.store.clear
		 }
		 
		 #without header
		 6 = COA
		 6{
		 	
		 }
		 
		 #without header, with nav
		 7 = COA
		 7{
		 	
		 } 
    }
    	
    wrap = <section class="content_grid"><div class="{$aomame.page.settings.layout.container}"><div class="{$aomame.page.settings.layout.row}"><div class="content">|</div></div></div></section>
}