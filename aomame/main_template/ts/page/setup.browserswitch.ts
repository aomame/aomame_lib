

[browser = msie] && [version = < 9.0]
# IE Version lower than 9
lib.ie_depricated = COA
lib.ie_depricated {
	10 = TEXT
	10.value = Internet Explorer versions lower than IE-9 won't be supported for this website, because the internet explorer fails to comply with the current web standards. 
	wrap = <div id="depricated">|</div>
}

config.doctype = xhtml_strict
config.doctypeSwitch = true
config.xhtml_cleaning = all
config.htmlTag_langKey = de


[global]

