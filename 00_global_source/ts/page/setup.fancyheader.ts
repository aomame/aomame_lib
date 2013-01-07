
lib.fancyheader = COA
lib.fancyheader.if.isTrue = {$aomame.page.header.fancyheader.active}
lib.fancyheader {
	10 = CONTENT
	10 {
		table = tt_content
		select {
			languageField = sys_language_uid
			pidInList = {$aomame.page.header.fancyheader.pid}
			orderBy = sorting
			where = colPos = {$aomame.page.header.fancyheader.colPos}
		}
		wrap = <div class="container"><div class="{$aomame.page.layout.bootstrap.class.rows}">|</div></div>
	}
	
	
	30 = HTML
	30.value = <div class="fh_tab"><p>{$aomame.page.header.fancyheader.tab.content}</p></div>
	
	wrap = <section class="fancyheader_grid {$aomame.page.header.fancyheader.visibility}">|</section>
}