#############################
#			    			#
#  Includes all TS Files    #
#			    			#
#############################

## EXTERNAL: typo3conf/ext/
#==================================
<INCLUDE_TYPOSCRIPT: source="FILE: typo3conf/ext/gridelements/static/gridelements/setup.txt">
<INCLUDE_TYPOSCRIPT: source="FILE: typo3conf/ext/aomame_showbiz/static/showbiz_carousel/setup.txt">
<INCLUDE_TYPOSCRIPT: source="FILE: typo3conf/ext/aomame_bootstrap/static/setup.txt">


## GLOBAL: ext/setup/
#==================================
<INCLUDE_TYPOSCRIPT: source="FILE: typo3conf/ext/aomame/template/00_global_source/ts/ext/setup/setup.gridelement.ts">
<INCLUDE_TYPOSCRIPT: source="FILE: typo3conf/ext/aomame/template/00_global_source/ts/ext/setup/setup.news.ts">
<INCLUDE_TYPOSCRIPT: source="FILE: typo3conf/ext/aomame/template/00_global_source/ts/ext/setup/setup.felogin.ts">
<INCLUDE_TYPOSCRIPT: source="FILE: typo3conf/ext/aomame/template/00_global_source/ts/ext/setup/setup.datamints_feuser.ts">


## LOCAL: ext/setup/
#==================================




# GLOBAL: page/
#==================================
<INCLUDE_TYPOSCRIPT: source="FILE: typo3conf/ext/aomame/template/00_global_source/ts/page/setup.store.ts">
<INCLUDE_TYPOSCRIPT: source="FILE: typo3conf/ext/aomame/template/00_global_source/ts/page/setup.files.ts">
<INCLUDE_TYPOSCRIPT: source="FILE: typo3conf/ext/aomame/template/00_global_source/ts/page/setup.lightbox.ts">
<INCLUDE_TYPOSCRIPT: source="FILE: typo3conf/ext/aomame/template/00_global_source/ts/page/setup.language.ts">
<INCLUDE_TYPOSCRIPT: source="FILE: typo3conf/ext/aomame/template/00_global_source/ts/page/setup.language_nav.ts">
<INCLUDE_TYPOSCRIPT: source="FILE: typo3conf/ext/aomame/template/00_global_source/ts/page/setup.page_config.ts">
<INCLUDE_TYPOSCRIPT: source="FILE: typo3conf/ext/aomame/template/00_global_source/ts/page/setup.browserswitch.ts">
<INCLUDE_TYPOSCRIPT: source="FILE: typo3conf/ext/aomame/template/00_global_source/ts/page/setup.logo.ts">
<INCLUDE_TYPOSCRIPT: source="FILE: typo3conf/ext/aomame/template/00_global_source/ts/page/setup.header.ts">
<INCLUDE_TYPOSCRIPT: source="FILE: typo3conf/ext/aomame/template/00_global_source/ts/page/setup.theme_menu.ts">
<INCLUDE_TYPOSCRIPT: source="FILE: typo3conf/ext/aomame/template/00_global_source/ts/page/setup.breadcrumb.ts">
<INCLUDE_TYPOSCRIPT: source="FILE: typo3conf/ext/aomame/template/00_global_source/ts/page/setup.footer.ts">
<INCLUDE_TYPOSCRIPT: source="FILE: typo3conf/ext/aomame/template/00_global_source/ts/page/setup.fancyheader.ts">
<INCLUDE_TYPOSCRIPT: source="FILE: typo3conf/ext/aomame/template/00_global_source/ts/page/setup.navigation.ts">
<INCLUDE_TYPOSCRIPT: source="FILE: typo3conf/ext/aomame/template/00_global_source/ts/page/setup.testcontent.ts">
<INCLUDE_TYPOSCRIPT: source="FILE: typo3conf/ext/aomame/template/00_global_source/ts/page/setup.print.ts">
<INCLUDE_TYPOSCRIPT: source="FILE: typo3conf/ext/aomame/template/00_global_source/ts/page/setup.body_tag.ts">
<INCLUDE_TYPOSCRIPT: source="FILE: typo3conf/ext/aomame/template/00_global_source/ts/page/setup.searchform.ts">
<INCLUDE_TYPOSCRIPT: source="FILE: typo3conf/ext/aomame/template/00_global_source/ts/page/setup.layout.ts">
<INCLUDE_TYPOSCRIPT: source="FILE: typo3conf/ext/aomame/template/00_global_source/ts/page/setup.content.ts">


# LOCAL: page/
#==================================
<INCLUDE_TYPOSCRIPT: source="FILE: typo3conf/ext/aomame/template/aomame_prime/main_template/ts/page/setup.additional_files.ts">
<INCLUDE_TYPOSCRIPT: source="FILE: typo3conf/ext/aomame/template/aomame_prime/main_template/ts/page/setup.content.ts">
<INCLUDE_TYPOSCRIPT: source="FILE: typo3conf/ext/aomame/template/aomame_prime/main_template/ts/page/setup.breadcrumb.ts">


# GLOBAL & LOCAL: page/pagerenderer
# always include at last of all libs
#==================================
<INCLUDE_TYPOSCRIPT: source="FILE: typo3conf/ext/aomame/template/00_global_source/ts/page/setup.pagerenderer.ts">
<INCLUDE_TYPOSCRIPT: source="FILE: typo3conf/ext/aomame/template/aomame_prime/main_template/ts/page/setup.pagerenderer.ts">

# 
# Print Layout
#==================================
[globalVar = TSFE:type = 400]
<INCLUDE_TYPOSCRIPT: source="FILE:EXT:sitepackage/packages/global/site/snowpack/layout2/preset/matchcondition/TSFE/type_98_setup.txt">
[global]