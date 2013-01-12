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

lib.language_nav = HMENU
lib.language_nav.if.isTrue = {$aomame.ext.language.nav.active}
lib.language_nav {
	
	special = language
	special {
		value = {$aomame.ext.language.nav.order}
		normalWhenNoLanguage = {$aomame.ext.language.default.id}
	}
	wrap = <ul class="language_nav">|</ul>
	
	1 = TMENU
	1 {
		noBlur = 1
		# Standard Sprachen
		NO = 1
		NO {
			linkWrap = <li>|</li>
			# Standard-Titel für den Link wäre Seitenttitel
			# => anderer Text als Link-Text (Optionsschift)
			#stdWrap.override = [en] || [de] || [fr]
			
			# Standardmäßige Verlinkung des Menüs ausschalten
			# Da diese sonstige GET-Parameter nicht enthält
			doNotLinkIt = 1
			# Nun wird der Link mit den aktuellen GET-Parametern neu aufgebaut
			stdWrap.typolink { 
				parameter.data = page:uid
				additionalParams = &L=1 || &L=0 || &L=2
				addQueryString = 1
				addQueryString.exclude = L,id,cHash,no_cache
				addQueryString.method = GET
				useCacheHash = 1
				no_cache = 0
			}
		}
		# Aktive Sprache
		ACT < .NO
		ACT.linkWrap = <li class="active">|</li>
		# NO + Übersetzung nicht vorhanden
		USERDEF1 < .NO
		# ACT + Übersetzung nicht vorhanden
		USERDEF2 < .ACT
	}
}