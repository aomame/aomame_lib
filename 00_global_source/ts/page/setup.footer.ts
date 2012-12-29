lib.footer = COA
lib.footer.if.isTrue = {$aomame.page.footer.use_footer}
lib.footer {
	10 = CONTENT
	10 {
		table = tt_content
		select {
			languageField = sys_language_uid
			pidInList = {$aomame.page.footer.pid}
			orderBy = sorting
			where = colPos = 0
		}
	}
	wrap = <footer class="hidden-phone"><div class="container">|</div></footer>
}


lib.mobile_footer = COA
lib.mobile_footer.if.isTrue = {$aomame.page.footer.use_footer}
lib.mobile_footer {
	10 = CONTENT
	10 {
		table = tt_content
		select {
			languageField = sys_language_uid
			pidInList = {$aomame.page.footer.pid}
			orderBy = sorting
			where = colPos = 1
		}
	}
	wrap = <footer class="visible-phone"><div class="container">|</div></footer>
}