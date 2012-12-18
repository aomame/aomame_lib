#############
# TEMPLATES #
# --------- #
#  MAIN TEMPLATE # 
page.210 {
	file.stdWrap.cObject = CASE
	file.stdWrap.cObject {
		# slide the template
		key.data = levelfield:-1, backend_layout_next_level, slide
		key.override.field = backend_layout
		# default template file
		default = TEXT
		default.value = {$aomame.path.html}1_col.html
		# template file for backend-layout with ID 2
		1 = TEXT
		1.value = {$aomame.path.html}1_col.html
		2 = TEXT
		2.value = {$aomame.path.html}2_col.html
		3 = TEXT
		3.value = {$aomame.path.html}3_col.html
		4 = TEXT
		4.value = {$aomame.path.html}1_col_nav.html
		5 = TEXT
		5.value = {$aomame.path.html}2_col_nav.html
		6 = TEXT
		6.value = {$aomame.path.html}no_header.html
		7 = TEXT
		7.value = {$aomame.path.html}no_header_with_nav.html
	}
	
	partialRootPath = {$aomame.path.html}partials/
	layoutRootPath = {$aomame.path.html}layouts/
}


#page.110.print.file = 




#JS Files
#page.includeJS
page.includeJSFooter {
  jquery = {$aomame.path.js}jquery_1-7-1.js
  jquery.forceOnTop = 1
  cookie = {$aomame.path.js}jquery.cookie.js
  bootstrap = {$aomame.path.js}bootstrap.js
  bootstrap_button = {$aomame.path.js}bootstrap_button.js
  bootstrap_collapse = {$aomame.path.js}bootstrap_collapse.js
  bootstrap_carousel = {$aomame.path.js}bootstrap_carousel.js
  bootstrap_tooltip = {$aomame.path.js}bootstrap_tooltip.js
  script = {$aomame.path.js}script.js
  footerfix = {$aomame.path.js}footerfix.js
  analytics = {$aomame.path.js}analytics.js
}


#CSS Files
page.includeCSS {
	bootstrap = {$aomame.path.css}bootstrap.css
	style = {$aomame.path.css}style.css
	theme = {$aomame.path.css}themes/theme_default.css
	news = {$aomame.path.css}news.css
}