page = PAGE
page {
  typeNum = 0
  
  #add classes to body tag
  bodyTagCObject < lib.body_tag
  
  #charset
  config.metaCharset = utf-8
  config.additionalHeaders = Content-Type:text/html;charset=utf-8
  
  #  creates the Template object and fill in the markers of the  #
  #  template  with the code that is included in                 #
  #  "Edit the whole template record  >> Include"                #
  #                                                              #
  #   HTML Template is set in Template "Settings"                #
  110 = FLUIDTEMPLATE
  110 {
     variables {
					logo < lib.logo
					nav_firstlevel < lib.nav_firstlevel
					nav_secondlevel < lib.nav_secondlevel
					nav_collapse < lib.nav_collapse
					header < lib.header
					content_middle < lib.content_middle
					content_left < lib.content_left
					content_right < lib.content_right
					footer < lib.footer
					#force_javascript < lib.force_javascript
					#test_content < lib.test_content
					#ie_depricated < lib.ie_depricated
					#breadcrumb < lib.breadcrumb
					
					mobile_nav_secondlevel < lib.mobile_nav_secondlevel
					mobile_footer < lib.mobile_footer
    }
  }
}
