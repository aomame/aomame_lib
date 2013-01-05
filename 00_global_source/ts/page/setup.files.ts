#############
# TEMPLATES #
# --------- #
#  MAIN TEMPLATE # 
page.10.file = {$aomame.path.global.html}template.html 

page {
  headerData {
  	
  	## 0 - 100 Space for default Bootstrap
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
    
    
    ## 101 - 200 Space for less files
  	210 = TEXT
  	210.value = <link rel="stylesheet/less" type="text/css" href="{$aomame.path.less}bootstrap.less" />
	## ! 220 is reserved for local include of bootstrap-responsive.less
	
	
	## Do not add files on 501 - 700 							##
	## 501 - 700 space for additional files - local settings 	##
	
	 
	## include last - less rendering
	1010 = TEXT
	1010.value = <script type="text/javascript" src="{$aomame.path.global.js}lib/less-{$aomame.head.less_version}.min.js"></script>
  }

  includeJSFooter {
	jquery = {$aomame.path.global.js}lib/jquery-{$aomame.head.jquery_version}.min.js
	jquery.forceOnTop = {$aomame.head.jquery_on_top}
	bootstrap = {$aomame.path.global.bootstrap.js}bootstrap.min.js
  }
  
  includeCSS {
	content = {$aomame.path.global.css}content/content.css
  }
}

