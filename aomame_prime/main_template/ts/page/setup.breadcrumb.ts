lib.breadcrumb {
	
	20 < lib.store.divider
	
	30= COA
	30 {
		
		10 = COA
		10 {
			
			10 < lib.store.title
			10.wrap = <h1>|</h1>
		
			20 < lib.breadcrumb.10
			
			wrap = <div class=span8>|</div>
		}
		
		20 < lib.searchform
		20.wrap = <div class="span4">|</div>
		
		wrap = <div class="row-fluid bc_bottom">|</div>
	}
	
	40 < lib.store.divider
	
}
lib.breadcrumb.10 >