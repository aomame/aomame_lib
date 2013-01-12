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

page {
	stdWrap {
		wrap = <div class="{$aomame.page.settings.layout.container} {$aomame.page.settings.layout.direction}">|</div>
		wrap.if {
			isTrue = {$aomame.page.settings.layout.block_design}
		}
	}
}