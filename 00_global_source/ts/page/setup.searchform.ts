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
#  Searchform with the bootstrap typehead. source array needs to be setted
#  in JavaScript.
#  
#---------------------------------------------------------------------

lib.searchform = COA
lib.searchform {
  10 = TEXT
  10.typolink.parameter = {$aomame.ext.search.pid}
  10.typolink.returnLast = url
  10.wrap (
  	<form action="|" method="get" class="pull-right" name="aomame_searchbox">
  		<input type="text" class="search-query" data-provide="typeahead" placeholder="Search" name="tx_kesearch_pi1[sword]" />
  	</form>
  )
}