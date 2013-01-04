#############
# TEMPLATES #
# --------- #
#  MAIN TEMPLATE # 
page.10 {
	file.stdWrap.cObject = CASE
	file.stdWrap.cObject {
		# slide the template
		key.data = levelfield:-1, backend_layout_next_level, slide
		key.override.field = backend_layout
		# default template file
		default = TEXT
		default.value = {$aomame.path.global.html}1_col.html
		1 = TEXT
		1.value = {$aomame.path.global.html}1_col.html
		2 = TEXT
		2.value = {$aomame.path.global.html}2_col.html
		3 = TEXT
		3.value = {$aomame.path.global.html}3_col.html
		4 = TEXT
		4.value = {$aomame.path.global.html}1_col_nav.html
		5 = TEXT
		5.value = {$aomame.path.global.html}2_col_nav.html
		6 = TEXT
		6.value = {$aomame.path.global.html}no_header.html
		7 = TEXT
		7.value = {$aomame.path.global.html}no_header_with_nav.html
	}
	
	partialRootPath = {$aomame.path.global.html}partials/
	layoutRootPath = {$aomame.path.global.html}layouts/
}


#page.10.print.file = 

page {
  headerData {
  	10 = TEXT
    10.value = <meta name="viewport" content="width=device-width, initial-scale=1.0">
    20 = TEXT
	20.value = <!-- Le HTML5 shim, for IE6-8 support of HTML5 elements -->
	30 = TEXT
	30.value = <!--[if lt IE 9]>
	40 = TEXT
	40.value = <script src="http://html5shim.googlecode.com/svn/trunk/html5.js"></script>
	50 = TEXT
    50.value = <![endif]-->
    
  	210 = TEXT
  	210.value = <link rel="stylesheet/less" type="text/css" href="{$aomame.path.less}bootstrap.less" />
	220 = TEXT
	220.value = <link rel="stylesheet/less" type="text/css" href="{$aomame.path.global.bootstrap.less}responsive.less" />
	
	## Range 500-699 Namespace for Additional files : Do not add files on 500 - 699 ##
	
	1010 = TEXT
	1010.value = <script type="text/javascript" src="{$aomame.path.global.js}lib/less-{$aomame.head.less_version}.min.js"></script>
  }

  includeJSFooter {
	jquery = {$aomame.path.global.js}lib/jquery-{$aomame.head.jquery_version}.min.js
	jquery.forceOnTop = {$aomame.head.jquery_on_top}
	bootstrap = {$aomame.path.global.bootstrap.js}bootstrap.min.js
	#footerfix = {$aomame.path.js}footerfix.js
  }
  
  includeCSS {
	footer = {$aomame.path.global.css}footer/footer_prime.css
  }
}

