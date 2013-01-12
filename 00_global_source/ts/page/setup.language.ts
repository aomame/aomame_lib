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
#  Default language
#---------------------------------------------------------------------

config {
	sys_language_overlay = 0
	sys_language_mode = content_fallback

	htmlTag_langKey = {$aomame.ext.language.default.key}
	sys_language_uid = {$aomame.ext.language.default.id}
	language = {$aomame.ext.language.default.language}
	locale_all = {$aomame.ext.language.default.locale_all}
}

plugin.meta.language = {$aomame.ext.language.default.language}



#---------------------------------------------------------------------
#  Any further language withe the ID 0 in the AOMAME MAIN CONFIG
#    ->  [your_template]/main_template/ts/config/constants.aomame.ts
#---------------------------------------------------------------------

[globalVar = GP:L = {$aomame.ext.german.0.id}]
config {
	htmlTag_langKey = {$aomame.ext.language.0.key}
	sys_language_uid = {$aomame.ext.language.0.id}
	language = {$aomame.ext.language.0.language}
	locale_all = {$aomame.ext.language.0.locale_all}
}

plugin.meta.language = {$aomame.ext.language.0.language}
[global]



[globalVar = GP:L = {$aomame.ext.language.1.id}]
config {
	htmlTag_langKey = {$aomame.ext.language.1.key}
	sys_language_uid = {$aomame.ext.language.1.id}
	language = {$aomame.ext.language.1.language}
	locale_all = {$aomame.ext.language.1.locale_all}
}

plugin.meta.language = {$aomame.ext.language.1.language}
[global]



[globalVar = GP:L = {$aomame.ext.language.2.id}]
config {
	htmlTag_langKey = {$aomame.ext.language.2.key}
	sys_language_uid = {$aomame.ext.language.2.id}
	language = {$aomame.ext.language.2.language}
	locale_all = {$aomame.ext.language.2.locale_all}
}

plugin.meta.language = {$aomame.ext.language.2.language}
[global]

[globalVar = GP:L = {$aomame.ext.language.3.id}]
config {
	htmlTag_langKey = {$aomame.ext.language.3.key}
	sys_language_uid = {$aomame.ext.language.3.id}
	language = {$aomame.ext.language.3.language}
	locale_all = {$aomame.ext.language.3.locale_all}
}

plugin.meta.language = {$aomame.ext.language.3.language}
[global]

[globalVar = GP:L = {$aomame.ext.language.4.id}]
config {
	htmlTag_langKey = {$aomame.ext.language.4.key}
	sys_language_uid = {$aomame.ext.language.4.id}
	language = {$aomame.ext.language.4.language}
	locale_all = {$aomame.ext.language.4.locale_all}
}

plugin.meta.language = {$aomame.ext.language.4.language}
[global]