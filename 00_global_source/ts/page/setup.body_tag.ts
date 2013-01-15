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
#  Add a class with the current page ID, language and backend layout
#  to the body tag.
#
#---------------------------------------------------------------------

lib.body_tag = COA
lib.body_tag {

	#load current backend layout to register: be_layout
	10 = LOAD_REGISTER
	10 {
		be_layout.cObject = CASE
		be_layout.cObject {
			key.field = backend_layout
			key.ifEmpty.data = levelfield:-2, backend_layout_next_level, slide
			default = TEXT
			default.value = single_col
			1 = TEXT
			1.value = single_col
			2 = TEXT
			2.value = double_col
			3 = TEXT
			3.value = tripple_col
			4 = TEXT
			4.value = single_col_nav
			5 = TEXT
			5.value = double_col_nav
			6 = TEXT
			6.value = no_header
			7 = TEXT
			7.value = no_header_with_nav
		}
	}
	
	#load current language to register: language
	20 = LOAD_REGISTER
	20 {
		language.cObject = CASE
		language.cObject {
			key = {TSFE:sys_language_uid}
			default = TEXT
			default.value = {$aomame.ext.language.default.language}
			1 = TEXT
			1.value = {$aomame.ext.language.1.language}
			2 = TEXT
			2.value = {$aomame.ext.language.2.language}
			3 = TEXT
			3.value = {$aomame.ext.language.3.language}
		}
	}
	
	
	default = TEXT
	default {
		insertData = 1
		value = <body class="pid_{TSFE:id} lang_{register:language} layout_{register:be_layout}">
	}
	
	print = TEXT
	print {
		value = <body class="pid_{TSFE:id} lang_{register:language} layout_{register:be_layout}" bgcolor="#ffffff" leftmargin="0" topmargin="0" marginwidth="0" marginheight="0" onload="javascript:window.print()">
		insertData = 1
	}
}

page.bodyTagCObject < lib.body_tag.default