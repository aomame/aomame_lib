
lib.header = COA
lib.header.if.isTrue = {$aomame.page.header.use_header}
lib.header {

	10 = CONTENT	
	10 {
		wrap = <div class="headconwrap">|</div>
		table = tt_content
		select {
			languageField = sys_language_uid
			orderBy = sorting
			where = colPos = 2
		}
		renderObj.10 {
			field = menu
			ifEmpty.cObject = CONTENT
			ifEmtpy.cObject {
				wrap = <div class="empty">|</div>
			}
		}
		#rekursive vererben auf unterseiten
		slide = -1
	}
	wrap = <div id="head_content"><div class="container"> | </div></div>
}

