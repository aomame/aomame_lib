lib.pagerenderer = COA
lib.pagerenderer {
	
	
	#build the fancyheader
	100.if.isTrue = {$aomame.page.header.fancyheader.active}
	100 < lib.fancyheader
	
	
		
	#main navigation
	200 < lib.main_navigation
	
	
	
	#header
	500.if.isTrue = {$aomame.page.header.active}
	500 < lib.header
	
	
	
	#build the breadcrump nav
	800.if.isTrue = {$aomame.page.nav.breadcrumb.active}
	800 < lib.breadcrumb
	
	
	
	#content
	1000 < lib.content_layout
	
	
	
	#footer
	1500.if.isTrue = {$aomame.page.footer.active}
	1500 < lib.footer
	
	
}