#JS Additional Files
page {

  headerData {
	
	## Do not change the value 220
	220 = TEXT
	220.value = <link rel="stylesheet/less" type="text/css" href="{$aomame.path.global.bootstrap.less}responsive.less" />

  	## Namespace for additional files: 501-700: Add only files in that range ##
  	510 = TEXT
  	510.value = <link rel="stylesheet/less" type="text/css" href="{$aomame.path.global.css}nav/superfish/theme_2.less" />

  }


  includeJS {
	
  }
  
  includeJSFooter {
	#cookie = {$aomame.path.global.js}lib/jquery.cookie.js
  	#analytics = {$aomame.path.js}analytics.js
  	jquery_color = {$aomame.path.global.js}lib/jquery.color.js
  	superfish = {$aomame.path.global.plugin}superfish/js/superfish.js
  	script = {$aomame.path.js}script.js
  	fancyheader = {$aomame.path.global.js}header/fancyheader.js
  }
  
  includeCSS {
  	header = {$aomame.path.global.css}header/theme_prime.css
	prime_style = {$aomame.path.css}style.css
	fancyheader = {$aomame.path.global.css}header/fancyheader.css
	footer = {$aomame.path.global.css}footer/footer_prime.css
  }
}

