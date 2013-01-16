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
#  The TS Store contains some TypoScript snippets
#  to provide usefull data for short access
#
#---------------------------------------------------------------------

lib.store = COA
lib.store {

	##  uid of the current page
	uid = TEXT
	uid.field = uid
	
	##  Alternative Title of the current page - if not available the normal pagetitle is taken
	title = TEXT
	title.field = nav_title // title
	
	##  Website Name
	website = TEXT
	website.value = {$aomame.page.settings.site_name}
	
	
	##  horicontal line : the same as the TYPO3 Content Element "Divider"
	divider = TEXT
	divider.value = <div class="divider"><hr /></div>


	##  Copyright
	copyright = TEXT
	copyright {
		value = {$aomame.option.copyright.by}
		typolink {
			title = {$aomame.option.copyright.link_title}
			parameter = {$aomame.option.copyright.url}
			ATagParams = class="copyright"
		}
				
		outerWrap = <p id="ao_copyright">|</p>
		outerWrap {
			override = <p id="ao_copyright" style="display: none;">|</p>
			override.if.isTrue = {$aomame.option.copyright.hidden}
		}
	}
	
	
	## Cleardiv
	clear = TEXT
	clear.value = <div class="clear"></div>
	
	
	
	## Printlink
	printlink = IMAGE
	printlink.if.isTrue = {$aomame.option.print.active}
	printlink {
		file = {$aomame.path.global}img/icons/{$aomame.option.print.icon}
		stdWrap {
			typolink {
				parameter < lib.store.uid
				additionalParams = &type={$aomame.option.print.type_num}
				additionalParams.insertData = 1
			}
			outerWrap = <div class="printlink visible-desktop">|</div>
		}
	}
	
}