page = PAGE
page {
  typeNum = 50
  
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
	NAVIGATION < lib.navigation	
    	HEADER < lib.header
	CONTENT < lib. content
	FOOTER < lib.footer
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
