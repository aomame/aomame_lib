lib.header = COA
lib.header.if.isTrue = {$aomame.page.header.active}
lib.header {
	10 = CONTENT
	10 {
		table = tt_content
		select {
			languageField = sys_language_uid
			orderBy = sorting
			where = colPos = {$aomame.page.header.colPos}
		}
		
		stdWrap {
			required = 1
			wrap = <div class="container">|</div>
			wrap {
				override = 
				override.if.isFalse.cObject = COA
			}
			outerWrap = <header class="header_grid">|</header>
			outerWrap {
				override = <header class="header_grid hero-unit">|</header>
				override.if.isTrue = {$aomame.page.header.use_bootstrap_hero_unit}
			}
		}
		slide = {$aomame.page.header.slide}
	}
}