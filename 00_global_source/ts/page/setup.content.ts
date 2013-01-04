

lib.getcontent = CONTENT
lib.getcontent{
  table = tt_content
  select {
    languageField = sys_language_uid
    orderBy = sorting
  }
  renderObj.10 {
    field = menu
    ifEmpty.cObject = CONTENT
    ifEmtpy.cObject {
      wrap = <div class="empty">|</div>
    }
  }
  renderObj.stdWrap.innerWrap.cObject{
    key.field = layout
    #default=TEXT
    #default.value=<div class="default"> | </div>
    1=TEXT
    1.value=<div class="withbg"> | </div>
  }
}


lib.content_left < lib.getcontent
lib.content_middle < lib.getcontent
lib.content_right < lib.getcontent

lib.content_left.select.where = colPos = 0
lib.content_middle.select.where = colPos = 2
lib.content_right.select.where = colPos = 3


lib.content = COA
lib.content {

	50 = COA
	50.if.isTrue = {$aomame.page.nav.breadcrumb.active}
	50 < lib.breadcrumb
	
	100 = COA
	100 {
		10 = CASE
	   	10 {
		   	key.field = backend_layout
		   	key.ifEmpty.data = levelfield:-2, backend_layout_next_level, slide
				
			default = COA
		 	default {
		 		10 < lib.content_middle
		 		10.wrap = <div class="{$aomame.page.layout.columns.1_col.middle} col_middle">|</div>
		 	}
		 
			 #single col layout
			 1 = COA
			 1 {
			 	10 < lib.content_middle
			 	10.wrap = <div class="{$aomame.page.layout.columns.1_col.middle} col_middle">|</div>
			 }
		 
			 #doble col layout
			 2 = COA
			 2 {
			 	10 < lib.content_left
			 	10.wrap = <div class="{$aomame.page.layout.columns.2_col.left} col_left">|</div>
			 	20 < lib.content_right
			 	20.wrap = <div class="{$aomame.page.layout.columns.2_col.right} col_right">|</div>
			 }
			 
			 #tripple col layout
			 3 = COA
			 3{
			 	10 < lib.content_left
			 	10.wrap = <div class="{$aomame.page.layout.columns.3_col.left} col_left">|</div>
			 	20 < lib.content_middle
			 	20.wrap = <div class="{$aomame.page.layout.columns.3_col.middle} col_middle">|</div>
			 	30 < lib.content_right
			 	30.wrap = <div class="{$aomame.page.layout.columns.3_col.right} col_right">|</div>
			 }
			 
			 #single col with nav
			 4 = COA
			 4{
			 	10 < lib.nav_secondlevel
			 	10.wrap = <div class="{$aomame.page.layout.columns.1_col_nav.nav} col_secondlevel_nav">|</div>
			 	20 < lib.content_middle
			 	20.wrap = <div class="{$aomame.page.layout.columns.1_col_nav.middle} col_middle">|</div>
			 }
			 
			 #double col with nav
			 5 = COA
			 5{
			 	10 < lib.nav_secondlevel
			 	10.wrap = <div class="{$aomame.page.layout.columns.2_col_nav.nav} col_secondlevel_nav">|</div>
			 	20 < lib.content_left
			 	20.wrap = <div class="{$aomame.page.layout.columns.2_col_nav.left} col_left">|</div>
			 	30 < lib.content_right
			 	30.wrap = <div class="{$aomame.page.layout.columns.2_col_nav.right} col_right">|</div>
			 }
			 
			 #without header
			 6 = COA
			 6{
			 	
			 }
			 
			 #without header, with nav
			 7 = COA
			 7{
			 	
			 } 
	    }
	    wrap = <div class="{$aomame.page.layout.bootstrap.class.rows}"><div class="content">|</div></div>
	} 
}


