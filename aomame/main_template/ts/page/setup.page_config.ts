
lib.force_javascript = TEXT
lib.force_javascript {
	value = Diese Seite ist nur verf&uuml;gbar, wenn Sie JavaScript aktivieren!
	wrap = <div id="force_javascript"> | </div>
}

config {
	doctype = <!DOCTYPE html>
	simulateStaticDocuments = 0
	baseURL = {$aomame.head.baseURL}
	tx_realurl_enable = 1
	prefixLocalAnchors = all
	language = de
	locale_all = de_DE.UTF-8
	htmlTag_langKey = de
}




[globalVar = GP:L = 3]
config {
	htmlTag_langKey = en
	sys_language_uid = 4
	language = en
	locale_all = en_GB
}

plugin.meta.language = en
[global]



[globalVar = GP:L = 3]
config {
	htmlTag_langKey = th
	sys_language_uid = 3
	language = th
	locale_all = th_TH
}

plugin.meta.language = th
[global]

#Metag Tags
page.meta.keywords.field = keywords
page.meta.description.field = description