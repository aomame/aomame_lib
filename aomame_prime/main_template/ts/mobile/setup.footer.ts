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
		}
	}
	
}


lib.footer_left < lib.footer
lib.footer_middle < lib.footer
lib.footer_right < lib.footer

lib.footer_left.10.select.where = colPos = 1
lib.footer_middle.10.select.where = colPos = 0
lib.footer_right.10.select.where = colPos = 2

#lib.footer_left.10.wrap = <div class="foocon" id="foo_1">|</div>
#lib.footer_middle.10.wrap = <div class="foocon" id="foo_2">|</div>
#lib.footer_right.10.wrap = <div class="foocon" id="foo_3">|</div>
