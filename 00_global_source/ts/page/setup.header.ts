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
			wrap = <div class="headconwrap">|</div>
			wrap {
				override = 
				override.if.isFalse.cObject = COA
			}
			outerWrap = <div class="header head_content">|</div>
			outerWrap {
				override = <div class="hero-unit head_content">|</div>
				override.if.isTrue = {$aomame.page.header.use_bootstrap_hero_unit}
			}
		}
		slide = {$aomame.page.header.slide}
	}
}