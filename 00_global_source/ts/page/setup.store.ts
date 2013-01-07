#####################################################
#	The TS Store contains some TypoScript snippets  #
#   to provide usefull data with short access       #
#####################################################

lib.store = COA
lib.store {

	# uid of the current page
	uid = TEXT
	uid.field = uid
	
	# Alternative Title of the current page - if not available the normal pagetitle is taken
	title = TEXT
	title.field = nav_title // title
	
	
	# horicontal line : the same as the TYPO3 Content Element "Divider"
	divider = HTML
	divider.value = <div class="divider"><hr /></div>
	
}