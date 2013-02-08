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
		excludeUidList = {$aomame.ext.news.view.detail.pid},{$aomame.page.nav.breadcrumb.exclude_uid_list}
	  
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
	
	#show the news title in the breadcrumb nav
	20 = RECORDS
    20 {
        if.isTrue.data = GP:tx_news_pi1|news
        dontCheckPid = 1
        tables = tx_news_domain_model_news
        source.data = GP:tx_news_pi1|news
        source.intval = 1
        conf.tx_news_domain_model_news = TEXT
        conf.tx_news_domain_model_news {
            field = title
            htmlSpecialChars = 1
        }
        wrap =  |
    }
    
    wrap = <div class="rootline">|</div>
	stdWrap {
  		wrap = <section class="breadcrumb_grid"><div class="{$aomame.page.settings.layout.container}"><div class="{$aomame.page.settings.layout.row}"><div class="breadcrumb"><div class="{$aomame.page.nav.breadcrumb.size}">|</div></div></div></div></section>
  		required = 1
	}
}

# aomame main config; if no breadcrumb on rootpage
[globalVar = TSFE:id={$aomame.page.settings.rootpage_uid}] && [globalVar = LIT:1 = {$aomame.page.nav.breadcrumb.hide_on_rootpage}]
lib.breadcrumb >
[global]