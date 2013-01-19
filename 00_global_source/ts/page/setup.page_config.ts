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
#  Configuration of TYPO3 - page.config. and global config.
#  Metatags config and TYPO3 EDITPANEL settings
#
#---------------------------------------------------------------------

page.typeNum = 0

config {
	
	admPanel = {$aomame.option.sys.allow_admin_panel}
	
	#charset
	metaCharset = {$aomame.head.charset}
	additionalHeaders = Content-Type:text/html;charset={$aomame.head.charset}
	
	doctype = <!DOCTYPE html>
	#html5
	
	#realURL
	simulateStaticDocuments = {$aomame.ext.realurl.simulateStaticDocument}
	baseURL = {$aomame.head.baseURL}
	tx_realurl_enable = {$aomame.ext.realurl.realurl_enable}
	prefixLocalAnchors = all
	
	#language
	#settings in setup.language.ts
	
	# indexierung
	index_enable = {$aomame.ext.search.enable_indexing}
	index_externals = {$aomame.ext.search.index_externals}
	index_metatags = {$aomame.ext.search.index_metatags}
	
	
	#cache settings
	cache_period = 604800
	cache = 1
	no_cache = 0
	
	#spam protection
	spamProtectEmailAddresses = 1
	spamProtectEmailAddresses_atSubst = @<span class="hidden">anti-spam-mail</span>
	notification_email_urlmode = all # shorten all links in emails to max 76 chars
	
	
	# links
	intTarget =	_top
	extTarget = _blank
	uniqueLinkVars = 1
	#typolinkEnableLinksAcrossDomains = 1
	#typolinkCheckRootline = 1
	#content_from_pid_allowOutsideDomain = 1
	
	
	#performance
	compressJs = 1
	inlineStyle2TempFile = 1
	compressCss = 0
	
	# do not render title tag to head
	noPageTitle = 2
	
	#no borders attribut in img tags - alerts warnings in html5 doctypes
	disableImgBorderAttr = 1
	
	headerComment (
		# > Webdesign by Aomame designs : www.aomame.ch #
	)
	
}


#Metag Tags
page.meta {
	keywords {
		field = keywords
		#override.data = register:newsKeywords   ¬> by Geroge Ringers news extension 
	}
	abstract.field = abstract
	description.field = description
	robots = INDEX,FOLLOW
}

#page.30 = EDITPANEL
#page.30.if.isTrue = {$aomame.option.sys.editpanel.active}
#page.30 {
#	allow = {$aomame.option.sys.editpanel.allow}
#	edit.displayRecords = 1
#	label = Abschnitt: <b>&s</b>
#	line = 1
#	onlyCurrentPid = 1
#	printBeforeContent = 1
#}