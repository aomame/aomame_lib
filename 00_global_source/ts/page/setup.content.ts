lib.content = CONTENT
lib.content{
  table = tt_content
  select {
    languageField = sys_language_uid
    orderBy = sorting
  }
}

lib.content_left < lib.content
lib.content_middle < lib.content
lib.content_right < lib.content

lib.content_left.select.where = colPos = 0
lib.content_middle.select.where = colPos = 2
lib.content_right.select.where = colPos = 3


lib.content_layout = COA
lib.content_layout {
	10 = CASE
   	10 {
	   	key.field = backend_layout
	   	key.ifEmpty.data = levelfield:-2, backend_layout_next_level, slide
			
		default = COA
	 	default {
	 		10 < lib.content_middle
	 		10.wrap = <div class="{$aomame.page.content.columns.1_col.middle} col_middle">|</div>
	 	}
	 
		 #single col layout
		 1 = COA
		 1 {
		 	10 < lib.content_middle
		 	10.wrap = <div class="{$aomame.page.content.columns.1_col.middle} col_middle">|</div>
		 }
	 
		 #doble col layout
		 2 = COA
		 2 {
		 	10 < lib.content_left
		 	10.wrap = <div class="{$aomame.page.content.columns.2_col.left} col_left">|</div>
		 	20 < lib.content_right
		 	20.wrap = <div class="{$aomame.page.content.columns.2_col.right} col_right">|</div>
		 }
		 
		 #tripple col layout
		 3 = COA
		 3{
		 	10 < lib.content_left
		 	10.wrap = <div class="{$aomame.page.content.columns.3_col.left} col_left">|</div>
		 	20 < lib.content_middle
		 	20.wrap = <div class="{$aomame.page.content.columns.3_col.middle} col_middle">|</div>
		 	30 < lib.content_right
		 	30.wrap = <div class="{$aomame.page.content.columns.3_col.right} col_right">|</div>
		 }
		 
		 #single col with nav
		 4 = COA
		 4{
		 	10 < lib.nav_secondlevel
		 	10.wrap = <div class="{$aomame.page.content.columns.1_col_nav.nav} col_secondlevel_nav">|</div>
		 	20 < lib.content_middle
		 	20.wrap = <div class="{$aomame.page.content.columns.1_col_nav.middle} col_middle">|</div>
		 }
		 
		 #double col with nav
		 5 = COA
		 5{
		 	10 < lib.nav_secondlevel
		 	10.wrap = <div class="{$aomame.page.content.columns.2_col_nav.nav} col_secondlevel_nav">|</div>
		 	20 < lib.content_left
		 	20.wrap = <div class="{$aomame.page.content.columns.2_col_nav.left} col_left">|</div>
		 	30 < lib.content_right
		 	30.wrap = <div class="{$aomame.page.content.columns.2_col_nav.right} col_right">|</div>
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
    	
    wrap = <section class="content_grid"><div class="container"><div class="{$aomame.page.layout.bootstrap.class.rows}"><div class="content">|</div></div></div></section>
}

# override default value for content elements of css-styled-content
tt_content.stdWrap.innerWrap.cObject.default.20.10.value = {$aomame.page.layout.bootstrap.class.rows}
