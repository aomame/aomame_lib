
lib.mainfooter = COA
lib.mainfooter.if.isTrue = {$aomame.page.footer.mainfooter.active}
lib.mainfooter {
	10 = CONTENT
	10 {
		table = tt_content
		select {
			languageField = sys_language_uid
			pidInList = {$aomame.page.footer.mainfooter.pid}
			orderBy = sorting
			where = colPos = {$aomame.page.footer.mainfooter.colPos}
		}
	}
	
	wrap = <footer class="footer_grid {$aomame.page.footer.mainfooter.visibility}"><div class="container"><div class="{$aomame.page.layout.bootstrap.class.rows}"><div class="content">|</div></div></div></footer>
}

lib.subfooter = COA
lib.subfooter.if.isTrue = {$aomame.page.footer.subfooter.active}
lib.subfooter {
	10 = CONTENT
	10 {
		table = tt_content
		select {
			languageField = sys_language_uid
			pidInList = {$aomame.page.footer.subfooter.pid}
			orderBy = sorting
			where = colPos = {$aomame.page.footer.subfooter.colPos}
		}
	}
	wrap = <footer class="subfooter_grid {$aomame.page.footer.subfooter.visibility}"><div class="container"><div class="{$aomame.page.layout.bootstrap.class.rows}"><div class="content">|</div></div></div></footer>
}

lib.mobile_footer = COA
lib.mobile_footer.if.isTrue = {$aomame.page.footer.mobile_footer.active}
lib.mobile_footer {
	10 = CONTENT
	10 {
		table = tt_content
		select {
			languageField = sys_language_uid
			pidInList = {$aomame.page.footer.mobile_footer.pid}
			orderBy = sorting
			where = colPos = {$aomame.page.footer.mobile_footer.colPos}
		}
	}
	wrap = <footer class="mobilefooter_grid {$aomame.page.footer.mobile_footer.visibility}"><div class="container"><div class="{$aomame.page.layout.bootstrap.class.rows}"><div class="content">|</div></div></div></footer>
}



lib.footer = COA
lib.footer.if.isTrue = {$aomame.page.footer.active}
lib.footer {
	1 < lib.mobile_footer
	2 < lib.mainfooter
	3 < lib.subfooter
}
