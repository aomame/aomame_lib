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
#  Builds the buttons for social networks and includes a userfunc to write 
#  JavaScript Files for social network connections.
#
#---------------------------------------------------------------------

#including user function to write individual javascripts
includeLibs.user_social = {$aomame.path.global}php/user_social.php

# COA social extends lib.store 
lib.social = COA
lib.social {
	
	
	10 = USER
	10 {
		userFunc = user_social->writeSocialFiles
		default_lang = {$aomame.ext.language.default.language}
		path = {$aomame.path.global}js/social/
		google_plus = {$aomame.option.social.includeJs.google_plus}
		facebook = {$aomame.option.social.includeJs.facebook} 
		twitter = {$aomame.option.social.includeJs.twitter}
	}
	

	
	#button
	facebook = COA
	facebook {
		10 = {$aomame.head.baseURL}
		wrap = <div class="social"><div id="fb-root"></div><div class="fb-like" data-href="|" data-send="false" data-layout="button_count" data-width="450" data-show-faces="true"></div></div>
	}
	
	
	
	#button
	google_plusone = COA
	google_plusone {
		10 = {$aomame.head.baseURL}
		wrap = <div class="social"><div class="g-plusone" data-size="medium" data-annotation="none" data-href="|"></div></div>
	}
	
	#button
	twitter = COA
	twitter{
		10 = {$aomame.head.baseURL}
		wrap = <div class="social"><a href="https://twitter.com/share" class="twitter-share-button" data-url="|" data-via="AomameDesigns" data-lang="de" data-count="none">Twittern</a></div>
	}
	
	
	buttonlist = COA
	buttonlist {
		
		1 < lib.social.{$aomame.option.social.1.button}
		1.if.isTrue = {$aomame.option.social.1.active}
		
		2 < lib.social.{$aomame.option.social.2.button}
		2.if.isTrue = {$aomame.option.social.2.active}
		
		3 < lib.social.{$aomame.option.social.3.button}
		3.if.isTrue = {$aomame.option.social.3.active}
		
		4 < lib.social.{$aomame.option.social.4.button}
		4.if.isTrue = {$aomame.option.social.4.active}
		
		5 < lib.social.{$aomame.option.social.5.button}
		5.if.isTrue = {$aomame.option.social.5.active}
		
		6 < lib.social.{$aomame.option.social.6.button}
		6.if.isTrue = {$aomame.option.social.6.active}
		
		7 < lib.social.{$aomame.option.social.7.button}
		7.if.isTrue = {$aomame.option.social.7.active}
		
		8 < lib.social.{$aomame.option.social.8.button}
		8.if.isTrue = {$aomame.option.social.8.active}
		
		9 < lib.social.{$aomame.option.social.9.button}
		9.if.isTrue = {$aomame.option.social.9.active}
		
		
		
		99 = TEXT
		99.value = <div class="clear"></div>
		
		#if the returned value of a userfunc is not used, the userfunc will not be executed
		100 < lib.social.10
		
		
		wrap = <div class="socialbuttons">|</div>
	}
}

