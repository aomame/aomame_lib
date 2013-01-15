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
#  Build new page object for the print site
#---------------------------------------------------------------------
print = PAGE
print.if.isTrue = {$aomame.option.print.active}
print.typeNum = {$aomame.option.print.type_num}


#---------------------------------------------------------------------
#  Config
#---------------------------------------------------------------------
print.config {
	spamProtectEmailAddresses = 0
	admPanel = 0
	
	index_enable = 0
	index_externals = 0
}


#---------------------------------------------------------------------
#  Build Body Tag
#---------------------------------------------------------------------
print.bodyTagCObject < lib.body_tag.print



#---------------------------------------------------------------------
#  Print Info Header
#---------------------------------------------------------------------
print.10 = COA
print.10 {
	10 < lib.store.divider
	
	20 < lib.store.website
	20.wrap = <div class="pih_data website_title">|:&nbsp;</div>
	
	30 = TEXT
	30 {
		typolink {
			parameter < lib.store.uid
			#additionalParams = &type=0
			#additionalParams.insertData = 1
			#returnLast = url
		}
		wrap = <div class="pih_data page_title">|</div>
	}
	
	40 < lib.store.clear
	
	50 < lib.store.divider
	
	wrap = <div class="print_info_header">|</div>
}



#---------------------------------------------------------------------
#  Build Content
#---------------------------------------------------------------------

#do not render showbiz plugin on print page
[globalVar = TSFE:type = {$aomame.option.print.type_num}]
	plugin.tx_aomameshowbiz_pi1 >
[global]

print.20 < lib.content_layout

print.30 < lib.mainfooter

print.40 < lib.store.divider
print.40.stdWrap.outerWrap = <div class="last_divider">|</div>

print.50 = TEXT
print.50.value = <div class="linkcontainer"><div class="lc_header"><h1>Links</h1></div><ol class="content_links"></ol></div>



#---------------------------------------------------------------------
#  Include CSS / JS Files 
#---------------------------------------------------------------------
print {	 
	includeCSS {
		global_print = {$aomame.path.global}css/print/print.css
		local_print = {$aomame.path.local}css/print.css
	}
	
	includeJSFooterlibs {
		jquery = {$aomame.path.global}js/lib/jquery-{$aomame.head.jquery_version}.min.js
	}
	
	includeJSFooter {
		print = {$aomame.path.global}js/print/links.js
	}
}

