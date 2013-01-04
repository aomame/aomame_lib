ajax = PAGE
ajax {
  typeNum = 5000
  
  config {
    disableAllHeaderCode = 1
    xhtml_cleaning = 0
    admPanel = 0
    debug = 0
    no_cache = 1
  }
  10 = CONTENT
  10 {
  	table = tt_content
    select {
    	pidInList = this
  	}
  	renderObj = COA
  	renderObj {
  		10 < plugin.tx_aomameshowbiz_pi1
  	}
  }
}