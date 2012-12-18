
lib.force_javascript = TEXT
lib.force_javascript {
	value = Diese Seite ist nur verf&uuml;gbar, wenn Sie JavaScript aktivieren!
	wrap = <div id="force_javascript"> | </div>
}


page {
  headerData {
    	10 = TEXT
    	20 = TEXT
	30 = TEXT
	40 = TEXT
	50 = TEXT
	60 = TEXT
	70 = TEXT
	80 = TEXT
	90 = TEXT
	100 = TEXT
	110 = TEXT
	
    	10.value = <meta name="viewport" content="width=device-width, initial-scale=1.0">
	20.value = <!-- Le HTML5 shim, for IE6-8 support of HTML5 elements -->
	30.value = <!--[if lt IE 9]>
	40.value = <script src="http://html5shim.googlecode.com/svn/trunk/html5.js"></script>
	50.value = <![endif]-->
	60.value = <!-- Le fav and touch icons -->
	70.value = <!--link rel="shortcut icon" href="../assets/ico/favicon.ico">
	80.value = <link rel="apple-touch-icon-precomposed" sizes="144x144" href="../assets/ico/apple-touch-icon-144-precomposed.png">
	90.value = <link rel="apple-touch-icon-precomposed" sizes="114x114" href="../assets/ico/apple-touch-icon-114-precomposed.png">
	100.value = <link rel="apple-touch-icon-precomposed" sizes="72x72" href="../assets/ico/apple-touch-icon-72-precomposed.png">
	110.value = <link rel="apple-touch-icon-precomposed" href="../assets/ico/apple-touch-icon-57-precomposed.png" -->
  }
}
config {
	typolinkCheckRootline=1
	typolinkEnableLinksAcrossDomains = 1
	doctype = <!DOCTYPE html>
	simulateStaticDocuments = 0
	baseURL = http://easy.aomame.ch/
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
page.meta.abstract.field = abstract
page.meta.keywords.field = keywords
page.meta.description.field = description