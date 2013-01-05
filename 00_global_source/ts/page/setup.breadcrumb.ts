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
  		wrap = <div class="{$aomame.page.layout.bootstrap.class.rows}"><div class="{$aomame.page.nav.breadcrumb.size} breadcrumb">|</div></div>
  		required = 1
	}
}


[globalVar = TSFE:id={$aomame.page.settings.rootpage_uid}] && [globalVar = LIT:1 = {$aomame.page.nav.breadcrumb.hide_on_rootpage}]
lib.breadcrumb >
[global]