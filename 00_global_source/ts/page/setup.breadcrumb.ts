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

lib.breadcrumb = COA
lib.breadcrumb.if.isTrue = {$aomame.page.nav.breadcrumb.active}
lib.breadcrumb {
	
	10 = HMENU
	10 {
		special = rootline
	  
	    # Traverse the pagetree starting at the rootpage (0) and ending at the current page (-1)
	    special.range = {$aomame.page.nav.breadcrumb.entryLevel}|-1
	  
	    includeNotInMenu = 1
	  
	    1 = TMENU
	    1 {
	    	noBlur = 1
	    	wrap = <div class="rootline">|</div>
	    	
	    	# Append spaces and >> to normal linked breadcrumb items
	    	NO.allWrap = |&#32;&raquo;&#32;
	    	NO.stdWrap.htmlSpecialChars = 1
	    	
	    	CUR = 1
	    	CUR {
	    		allWrap = <span class="active">|</span>
	    		doNotLinkIt = 1
	    	}
	    	
	    }
	}
	
	stdWrap {
  		wrap = <section class="breadcrumb_grid"><div class="{$aomame.page.settings.layout.container}"><div class="{$aomame.page.settings.layout.row}"><div class="breadcrumb"><div class="{$aomame.page.nav.breadcrumb.size}">|</div></div></div></div></section>
  		required = 1
	}
}


[globalVar = TSFE:id={$aomame.page.settings.rootpage_uid}] && [globalVar = LIT:1 = {$aomame.page.nav.breadcrumb.hide_on_rootpage}]
lib.breadcrumb >
[global]