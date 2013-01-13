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
config {
	index_enable = 0
	spamProtectEmailAddresses = 0
	admPanel = 0
	
	#charset
	metaCharset = {$aomame.head.charset}
	additionalHeaders = Content-Type:text/html;charset={$aomame.head.charset}
	
	doctype = <!DOCTYPE html>
	
	#realURL
	simulateStaticDocuments = {$aomame.ext.realurl.simulateStaticDocument}
	baseURL = {$aomame.head.baseURL}
	tx_realurl_enable = {$aomame.ext.realurl.realurl_enable}
	prefixLocalAnchors = all
	
	#cache settings
	cache_period = 604800
	cache = 1
	no_cache = 0
	
	#performance
	compressJs = 1
	inlineStyle2TempFile = 1
	compressCss = 1
	
	# do not render title tag to head
	noPageTitle = 0
	
	#no borders attribut in img tags - alerts warnings in html5 doctypes
	disableImgBorderAttr = 1
	
	headerComment (
		# > Webdesign by Aomame designs : www.aomame.ch #
	)
	
}

#language
<INCLUDE_TYPOSCRIPT: source="FILE: typo3conf/ext/aomame/template/00_global_source/ts/page/setup.language.ts">	

print.config {
	index_enable = 0
	index_externals = 0
}


#---------------------------------------------------------------------
#  Build Body Tag
#---------------------------------------------------------------------
<INCLUDE_TYPOSCRIPT: source="FILE: typo3conf/ext/aomame/template/00_global_source/ts/page/setup.body_tag.ts">
lib.body_tag.30.value = <body class="pid_{TSFE:id} lang_{register:language} layout_{register:be_layout}" bgcolor="#ffffff" leftmargin="0" topmargin="0" marginwidth="0" marginheight="0" onload="javascript:window.print()">
print.bodyTagCObject < lib.body_tag



#---------------------------------------------------------------------
#  Print Info Header
#---------------------------------------------------------------------
<INCLUDE_TYPOSCRIPT: source="FILE: typo3conf/ext/aomame/template/00_global_source/ts/page/setup.store.ts">
print.10 = COA
print.10 {
	10 < lib.store.divider
	
	20 < lib.store.website
	20.wrap = <div class="pih_data website_title">|:&nbsp;</div>
	
	30 = TEXT
	30 {
		typolink {
			parameter < lib.store.uid
			additionalParams = &type=0
			additionalParams.insertData = 1
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
<INCLUDE_TYPOSCRIPT: source="FILE: typo3conf/ext/aomame/template/00_global_source/ts/page/setup.content.ts">
print.20 < lib.content_layout

<INCLUDE_TYPOSCRIPT: source="FILE: typo3conf/ext/aomame/template/00_global_source/ts/page/setup.footer.ts">
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
		print = {$aomame.path.global}css/print/print.css
	}
	
	includeJSFooterlibs {
		jquery = {$aomame.path.global}js/lib/jquery-{$aomame.head.jquery_version}.min.js
	}
	
	includeJSFooter {
		print = {$aomame.path.global}js/print/links.js
	}
}

