page = PAGE
page {
  typeNum = 0
  
  #charset
  config.metaCharset = utf-8
  config.additionalHeaders = Content-Type:text/html;charset=utf-8
  
  #  creates the Template object and fill in the markers of the  #
  #  template  with the code that is included in                 #
  #  "Edit the whole template record  >> Include"                #
  #                                                              #
  #   HTML Template is set in Template "Settings"                #
  10 = TEMPLATE
  10 {
    template = FILE
    workOnSubpart = DOCUMENT
    marks {
	LOGO < lib.logo	
    	FORCE_JAVASCRIPT < lib.force_javascript
	NAV_FIRSTLEVEL < lib.nav_firstlevel
	NAV_SECONDLEVEL < lib.nav_secondlevel
	HEADER < lib.header
	THEME_MENU < lib.theme_menu
	COL_1 < lib.col_1
	COL_2 < lib.col_2
	COL_3 < lib.col_3
	FOOTER_LEFT < lib.footer_left
	FOOTER_MIDDLE < lib.footer_middle
	FOOTER_RIGHT < lib.footer_right
	TEST < lib.test_content
	IE_DEPRICATED < lib.ie_depricated
	BREADCRUMB < lib.breadcrumb
    }
  }

 bodyTagCObject = HTML
 bodyTagCObject {
  value {
   field = uid
   wrap = <body id="uid|">
  }
 }
}
