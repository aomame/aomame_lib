#---------------------------------------------------------------------
#
# (c) 2013 Patrick crausaz <support@aomame.ch>
# 
#  This script is part of the Aomame template library, which is 
#  free software; you can redistribute it and/or modify
#  it under the terms of the GNU General Public License as published by
#  the Free Software Foundation; either version 2 of the License, or
#  (at your option) any later version.
#
#  The GNU General Public License can be found at
#  http://www.gnu.org/copyleft/gpl.html.
#
#---------------------------------------------------------------------

#---------------------------------------------------------------------
#
#  lib.mainfooter     :  Normal Footer
#  lib.subfooter      :  Footer below the main footer. Good for e.g. copyrights
#  lib.mobile_footer  :  Mobile footer only to show on small displays when the main footer become hidden
#  lib.footer         :  A collection of all active footers to give them to the setup.pagerenderer in one object
#  
#---------------------------------------------------------------------


lib.mainfooter = COA
lib.mainfooter.if.isTrue = {$aomame.page.footer.mainfooter.active}
lib.mainfooter {
	10 < styles.content.get
	10.select {
		pidInList = {$aomame.page.footer.mainfooter.pid}
		where = colPos= {$aomame.page.footer.mainfooter.colPos}
	}
	
	20 < lib.store.printlink
	20.if.isTrue = {$aomame.page.footer.mainfooter.add_printlink}
	
	wrap = <footer class="footer_grid {$aomame.page.footer.mainfooter.visibility}"><div class="{$aomame.page.settings.layout.container}"><div class="{$aomame.page.settings.layout.row}"><div class="content">|</div></div></div></footer>
}


lib.subfooter = COA
lib.subfooter.if.isTrue = {$aomame.page.footer.subfooter.active}
lib.subfooter {
	10 < styles.content.get
	10.select {
		pidInList = {$aomame.page.footer.subfooter.pid}
		where = colPos= {$aomame.page.footer.subfooter.colPos}
	}
	20 < lib.store.printlink
	20.if.isTrue = {$aomame.page.footer.subfooter.add_printlink}
	
	wrap = <footer class="subfooter_grid {$aomame.page.footer.subfooter.visibility}"><div class="{$aomame.page.settings.layout.container}"><div class="{$aomame.page.settings.layout.row}"><div class="content">|</div></div></div></footer>
}

lib.mobile_footer = COA
lib.mobile_footer.if.isTrue = {$aomame.page.footer.mobile_footer.active}
lib.mobile_footer {
	
	10 < styles.content.get
	10.select {
		pidInList = {$aomame.page.footer.mobile_footer.pid}
		where = colPos= {$aomame.page.footer.mobile_footer.colPos}
	}
	
	wrap = <footer class="mobilefooter_grid {$aomame.page.footer.mobile_footer.visibility}"><div class="{$aomame.page.settings.layout.container}"><div class="{$aomame.page.settings.layout.row}"><div class="content">|</div></div></div></footer>
}


lib.footer = COA
lib.footer.if.isTrue = {$aomame.page.footer.active}
lib.footer {
	1 < lib.mobile_footer
	2 < lib.mainfooter
	3 < lib.subfooter
}
