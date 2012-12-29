#############
# TEMPLATES #
# --------- #
#  MAIN TEMPLATE # 
page.110 {
	file.stdWrap.cObject = CASE
	file.stdWrap.cObject {
		# slide the template
		key.data = levelfield:-1, backend_layout_next_level, slide
		key.override.field = backend_layout
		# default template file
		default = TEXT
		default.value = {$aomame.path.html}1_col.html
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

page {
	headerData {
	  	4 = TEXT
	  	4.value = <link rel="stylesheet/less" type="text/css" href="{$aomame.path.global.bootstrap.less}bootstrap.less" />
		5 = TEXT
		5.value = <link rel="stylesheet/less" type="text/css" href="{$aomame.path.global.bootstrap.less}responsive.less" />
		6 = TEXT
		6.value = <script type="text/javascript" src="{$aomame.path.global.js}lib/less-{$aomame.head.less_version}.min.js"></script>
	}

	#JS Files
	includeJS
	includeJSFooter {
	  jquery = {$aomame.path.global.js}lib/jquery-{$aomame.head.jquery_version}.min.js
	  jquery.forceOnTop = 1
	  cookie = {$aomame.path.global.js}lib/jquery.cookie.js
	  bootstrap = {$aomame.path.global.bootstrap.js}bootstrap.js
	  script = {$aomame.path.js}script.js
	  footerfix = {$aomame.path.js}footerfix.js
	  #analytics = {$aomame.path.js}analytics.js
	}


	#CSS Files
	includeCSS {
		theme_aomame_mobile = {$aomame.path.css}themes/aomamestyle.css
		style = {$aomame.path.css}style.css
	}
}