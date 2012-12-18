################################
###   SET  FIRSTLEVEL MENU   ###
###--------------------------###

lib.nav_firstlevel= HMENU
lib.nav_firstlevel.if.isTrue = {$aomame.page.nav.firstlevel.use_main_nav}
lib.nav_firstlevel.1 = TMENU
lib.nav_firstlevel.1 {
  NO = 1
  NO {
    linkWrap = <li class="firstlevel_menu_label">|</li>
    stdWrap.htmlSpecialChars = 1
  }
  CUR = 1
  CUR {
    linkWrap = <li class="menu_current">|</li>
    stdWrap.htmlSpecialChars = 1
  }
  ACT = 1
  ACT {
    linkWrap = <li class="active">|</li>
    stdWrap.htmlSpecialChars = 1
  }
}
lib.nav_firstlevel.wrap = <div class="container nav-collapse"><ul class="nav">|</ul></div>




################################
###   SET  SECONDLEVEL MENU  ###
###--------------------------###

lib.nav_secondlevel = HMENU
lib.nav_secondlevel {
	if.isTrue = {$aomame.page.nav.secondlevel.use_secondlevel_nav}
	entryLevel = {$aomame.page.nav.secondlevel.enrty_level}
	
	  1 = TMENU
	  1 {
	    #expAll =1
	    wrap = <ul id="subnavi">|</ul>
	    noBlur = 1
	    expAll = 0
	    target = _top
	      
	    NO = 1
	    NO {
	      ATagParams = class="btn btn-secondary btn-large"
	      wrapItemAndSub = <li class="secondlevel_no">|</li>
	      #stdWrap.htmlSpecialChars = 1
	      
	      1 = COA
	      1 {
		10 = TEXT
		10 {
		  field = title
		  listNum = 0
		  listNum.splitChar = |
		}
		20 < .10
		20{
		  listNum = 1
		  wrap = <br />|
		  required = 1
		}
	      }
	      stdWrap.field >
	      stdWrap.cOnject = COA
	      stdWrap.cObject < .1
	    }
	    
	    CUR <.NO
	    CUR {
		wrapItemAndSub = <li class="secondlevel_cur">|</li>
		ATagParams = class="btn btn-primary btn-large"
	    }
	    
	    ACT <.NO
	    ACT {
	       wrapItemAndSub = <li class="secondlevel_act">|</li>
		ATagParams = class="btn btn-secondary btn-large"
	    }
	  }


	
	  2 < .1
	  2 {
		wrap = <ul id="nav2">|</ul>
		
		NO.wrapItemAndSub = <li class="thrirdlevel_no menu_label">|</li>
		NO.ATagParams = class="btn btn-secondary btn-small"
		NO.stdWrap.innerWrap(
  			<span>|</span>
		)
		NO.wrapItemAndSub.insertData=1
		
		CUR.wrapItemAndSub = <li class="thrirdlevel_cur menu_label">|</li>
		CUR.ATagParams = class="btn btn-primary btn-small"
		CUR.stdWrap.innerWrap(
  			<span>|</span>
		)
		CUR.wrapItemAndSub.insertData=1
		
		ACT.wrapItemAndSub = <li class="thrirdlevel_act menu_label">|</li>
    		ACT.ATagParams = class="btn btn-secondary btn-small"
		ACT.stdWrap.innerWrap(
  			<span>|</span>
		)
		ACT.wrapItemAndSub.insertData=1
		
    		# NO + Uebersetzung nicht vorhanden
		USERDEF1 < .NO
		# ACT + Uebersetzung nicht vorhanden
		USERDEF2 < .ACT
  	}
}


########################################
###   MOBILE_SECONDLEVEL_NAVIGATION  ###
###----------------------------------###
lib.mobile_nav_secondlevel = HMENU
lib.mobile_nav_secondlevel {
	if.isTrue = {$aomame.page.nav.secondlevel.use_secondlevel_nav}
	entryLevel = {$aomame.page.nav.secondlevel.enrty_level}




	  1 = TMENU
	  1 {
	    #expAll =1
	    wrap = <ul id="subnavi">|</ul>
	    noBlur = 1
	    expAll = 0
	    target = _top
	      
	    NO = 1
	    NO {
	      ATagParams = class="btn btn-secondary btn-large"
	      wrapItemAndSub = <li class="secondlevel_no">|</li>
	      #stdWrap.htmlSpecialChars = 1
	      
	      1 = COA
	      1 {
		10 = TEXT
		10 {
		  field = title
		  listNum = 0
		  listNum.splitChar = |
		}
		20 < .10
		20{
		  listNum = 1
		  wrap = <br />|
		  required = 1
		}
	      }
	      stdWrap.field >
	      stdWrap.cOnject = COA
	      stdWrap.cObject < .1
	    }
	    
	    CUR <.NO
	    CUR {
		wrapItemAndSub = <li class="secondlevel_cur">|</li>
		ATagParams = class="btn btn-primary btn-large"
	    }
	    
	    ACT <.NO
	    ACT {
	       wrapItemAndSub = <li class="secondlevel_act">|</li>
		ATagParams = class="btn btn-secondary btn-large"
	    }
	  }

	  2 < .1
	  2 {
		wrap = <ul id="nav2">|</ul>
		
		NO.wrapItemAndSub = <li class="thrirdlevel_no menu_label">|</li>
		NO.ATagParams = class="btn btn-secondary btn-small"
		NO.stdWrap.innerWrap(
  			<span>|</span>
		)
		NO.wrapItemAndSub.insertData=1
		
		CUR.wrapItemAndSub = <li class="thrirdlevel_cur menu_label">|</li>
		CUR.ATagParams = class="btn btn-primary btn-small"
		CUR.stdWrap.innerWrap(
  			<span>|</span>
		)
		CUR.wrapItemAndSub.insertData=1
		
		ACT.wrapItemAndSub = <li class="thrirdlevel_act menu_label">|</li>
    		ACT.ATagParams = class="btn btn-secondary btn-small"
		ACT.stdWrap.innerWrap(
  			<span>|</span>
		)
		ACT.wrapItemAndSub.insertData=1
		
    		# NO + Uebersetzung nicht vorhanden
		USERDEF1 < .NO
		# ACT + Uebersetzung nicht vorhanden
		USERDEF2 < .ACT
  	}

	stdWrap.dataWrap = <div class="btn-group visible-phone mobile_secondlevel_nav"><a data-toggle="dropdown" class="btn btn-large dropdown-toggle">{page : title}<span class="caret"></span></a><ul class="dropdown-menu"> | </ul></div>

}


#################################
###   BOOTSTRAP NAV COLLAPSE  ###
###---------------------------###

lib.nav_collapse = COA
lib.nav_collapse {
	10 = TEXT
	10.value = <span class="icon-bar"></span>
	20 = TEXT
	20.value = <span class="icon-bar"></span>
	30 = TEXT
	30.value = <span class="icon-bar"></span>
	
	wrap = <a class="btn btn-navbar" data-toggle="collapse" data-target=".nav-collapse">|</a>
}