
page.typeNum = 0

config {
	metaCharset = {$aomame.head.charset}
	additionalHeaders = Content-Type:text/html;charset=utf-8
	typolinkCheckRootline = 1
	typolinkEnableLinksAcrossDomains = 1
	doctype = <!DOCTYPE html>
	simulateStaticDocuments = {$aomame.ext.realurl.simulateStaticDocument}
	baseURL = {$aomame.head.baseURL}
	tx_realurl_enable = {$aomame.ext.realurl.realurl_enable}
	prefixLocalAnchors = all
	language = {$aomame.ext.language.default_language}
	locale_all = {$aomame.ext.language.locale_all}
	htmlTag_langKey = {$aomame.ext.language.htmlTag_langKey}
	admPanel = {$aomame.option.sys.allow_admin_panel}
}


#Metag Tags
page.meta {
	abstract.field = abstract
	keywords.field = keywords
	description.field = description
}