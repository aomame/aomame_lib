
lib.header = COA
lib.header.if.isTrue = {$aomame.page.header.use_header}
lib.header {
	10 = CONTENT
	10 {
		table = tt_content
		select {
			languageField = sys_language_uid
			orderBy = sorting
			where = colPos = 1
		}
		renderObj.10 {
			field = menu
			ifEmpty.cObject = CONTENT
			ifEmtpy.cObject {
				wrap = <div class="empty">|</div>
			}
		}
		wrap = <div class="headconwrap">|</div>
		slide = {$aomame.page.header.slide}
	}
	wrap = <div class="hero-unit head_content"> | </div>
}