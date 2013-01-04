
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
	}
	20 = HTML
	20.value = <div class="fh_tab" style="background:url('{$aomame.path.global.img}{$aomame.page.header.fancyheader.tab.img}') no-repeat scroll 0 0 transparent;"><p>{$aomame.page.header.fancyheader.tab.content}</p></div>
	
	wrap = <section class="fancyheader {$aomame.page.header.fancyheader.visibility} row-fluid">|</section>
}