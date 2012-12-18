#############
# TEMPLATES #
# --------- #
#  MAIN TEMPLATE #
page.10.template.file = {$aomame.path.html}template.html   
page.10.print.file = 




#JS Files
#page.includeJS
page.includeJSFooter {
  jquery = {$aomame.path.js}jquery_1-7-2.js
  jquery.forceOnTop = 1
  cookie = {$aomame.path.js}jquery.cookie.js
  slick = {$aomame.path.js}slick/slick.js
  script = {$aomame.path.js}script.js
  analytics = {$aomame.path.js}analytics.js
}


#CSS Files
page.includeCSS {
	layout= {$aomame.path.css}style.css
	slick = {$aomame.path.css}slick.css
}


[browser = msie] && [version = < 9.0]
page.10.template.file = {$aomame.path.html}ie_depricated.html
page.includeCSS.ie_depricated = {$aomame.path.css}ie_depricated.css
[global]