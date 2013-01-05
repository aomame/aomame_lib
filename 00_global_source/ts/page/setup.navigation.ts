##############################
###   Available Navs       ###
#
#	1. Firstlevel nav (default)					: lib.nav_firstlevel
#	2. Secondlevel nav (default)				: lib.nav_secondlevel
#	3. Bootstrap Collapse (obsolete)			: lib.collapsible_nav
#	4. Mobile, Secondlevel nav					: lib.mobile_nav
#	5. Bootstrap Collapse Icon (helper)			: lib.nav_collapse
#	6. Superfish nav							: lib.superfish_nav
#	7. SET: Bootstrap Nav and Logo				: lib.bootstrap_nav_with_logo
#	8. SET: Superfish nav with Logo + Mobile	: lib.superfish_nav_with_logo
###--------------------------###




################################
###   SET  FIRSTLEVEL MENU   ###
###--------------------------###
lib.nav_firstlevel = HMENU
lib.nav_firstlevel {
	1 = TMENU
	1 {
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
	wrap = <ul class="nav">|</ul>
}

[globalVar = LIT:1 = {$aomame.page.nav.firstlevel.collapsible}]
lib.nav_firstlevel.wrap = <div class="nav-collapse">|</div>
[global]

[globalVar = LIT:1 = {$aomame.page.nav.firstlevel.wrap_container}]
lib.nav_firstlevel.wrap = <div class="container">|</div>
[global]


################################
###   SET  SECONDLEVEL MENU  ###
###--------------------------###

lib.nav_secondlevel = HMENU
lib.nav_secondlevel {
	entryLevel = {$aomame.page.nav.secondlevel.enrty_level}
	
	  1 = TMENU
	  1 {
	    #expAll =1
	    wrap = <ul class="subnavi">|</ul>
	    noBlur = 1
	    expAll = 0
	    target = self
	      
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
		wrap = <ul class="navlevel_3">|</ul>
		
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
	
	3 < .1
	3 {
		wrap = <ul class="navlevel_4">|</ul>
		
		NO.wrapItemAndSub = <li class="fourthlevel_no menu_label">|</li>
		NO.ATagParams = class="btn btn-secondary btn-small"
		NO.stdWrap.innerWrap(
  			<span>|</span>
		)
		NO.wrapItemAndSub.insertData=1
		
		CUR.wrapItemAndSub = <li class="fourthlevel_cur menu_label">|</li>
		CUR.ATagParams = class="btn btn-primary btn-small"
		CUR.stdWrap.innerWrap(
  			<span>|</span>
		)
		CUR.wrapItemAndSub.insertData=1
		
		ACT.wrapItemAndSub = <li class="fourthlevel_act menu_label">|</li>
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


	4 < .1
	4 {
		wrap = <ul class="navlevel_5">|</ul>
		
		NO.wrapItemAndSub = <li class="fifthlevel_no menu_label">|</li>
		NO.ATagParams = class="btn btn-secondary btn-small"
		NO.stdWrap.innerWrap(
  			<span>|</span>
		)
		NO.wrapItemAndSub.insertData=1
		
		CUR.wrapItemAndSub = <li class="fifthlevel_cur menu_label">|</li>
		CUR.ATagParams = class="btn btn-primary btn-small"
		CUR.stdWrap.innerWrap(
  			<span>|</span>
		)
		CUR.wrapItemAndSub.insertData=1
		
		ACT.wrapItemAndSub = <li class="fifthlevel_act menu_label">|</li>
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




#############################
###   SET COLLAPSE MENU  ###
###-----------------------###

lib.collapsible_nav = HMENU
lib.collapsible_nav {
	if.isTrue = {$aomame.page.nav.collapse.use_secondlevel_nav}
	entryLevel = {$aomame.page.nav.collapse.enrty_level}
	
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
lib.mobile_nav = HMENU
lib.mobile_nav {
	entryLevel = {$aomame.page.nav.mobile.entry_level}

	1 = TMENU
	1 {
		#expAll =1
	    wrap = <ul class="subnavi">|</ul>
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
		wrap = <ul class="navlevel_2">|</ul>
		
		NO {
			wrapItemAndSub = <li class="thrirdlevel_no menu_label">|</li>
			ATagParams = class="btn btn-secondary btn-small"
			stdWrap.innerWrap(
	  			<span>|</span>
			)
			wrapItemAndSub.insertData=1
		}
		
		CUR {
			wrapItemAndSub = <li class="thrirdlevel_cur menu_label">|</li>
			ATagParams = class="btn btn-primary btn-small"
			stdWrap.innerWrap(
  				<span>|</span>
			)
			wrapItemAndSub.insertData=1
		}
		
		ACT {
			wrapItemAndSub = <li class="thrirdlevel_act menu_label">|</li>
    		ATagParams = class="btn btn-secondary btn-small"
			stdWrap.innerWrap(
  				<span>|</span>
			)
			wrapItemAndSub.insertData=1
		}
    	
    	# NO + Uebersetzung nicht vorhanden
		USERDEF1 < .NO
		# ACT + Uebersetzung nicht vorhanden
		USERDEF2 < .ACT
  	}

	stdWrap.dataWrap = <div class="btn-group mobile_nav {$aomame.page.nav.mobile.visibility} {$aomame.page.nav.mobile.direction}"><a data-toggle="dropdown" class="btn btn-large dropdown-toggle">{page : title}<span class="caret"></span></a><ul class="dropdown-menu"> | </ul></div>
}
lib.mobile_nav.entryLevel = 1
[treelevel = 1]
lib.mobile_nav.entryLevel = 2
[treelevel = 2]
lib.mobile_nav.entryLevel = 3
[treelevel = 3]
lib.mobile_nav.entryLevel = 4
[end]

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





#########################
###   Superfish Nav   ###
###-------------------###
lib.superfish_nav = HMENU
lib.superfish_nav {
	1 = TMENU
	1 {
		expAll =1
		wrap = <nav class="{$aomame.page.nav.firstlevel.direction} superfish {$aomame.page.nav.firstlevel.visibility}"><ul class="sf-menu">|</ul></nav>
		noBlur = 1
		NO = 1
		NO {
			wrapItemAndSub = <li>|</li>
			stdWrap.htmlSpecialChars = 1
			ATagTitle.field = title
		}
		ACT <.NO
		ACT.wrapItemAndSub = <li class="active">|</li>
		
		CUR <.NO
		CUR.wrapItemAndSub = <li class="current">|</li>
	}
 
	2 < .1
	2.NO {
		wrapItemAndSub.cObject = COA
		wrapItemAndSub.cObject {
			# Es ist nur ein Menupunkt vorhanden
		    10 = TEXT
		    10.value = <li class="single">|</li>
		    10.if.value.data = register:count_menuItems
		    10.if.equals = 1
		 
		    # Es sind mindestens zwei Menupunkt vorhanden
		    20 = TEXT
		    20.value = <li class="first"> | </li> |*| <li> | </li> |*| <li class="last"> | </li>
		    20.if.value.data = register:count_menuItems
		    20.if.equals = 1
		    20.if.negate = 1
		}
	}
	
	2.CUR {
		wrapItemAndSub.cObject = COA
		wrapItemAndSub.cObject {
			# Es ist nur ein Menupunkt vorhanden
		    10 = TEXT
		    10.value = <li class="current single">|</li>
		    10.if.value.data = register:count_menuItems
		    10.if.equals = 1
		 
		    # Es sind mindestens zwei Menupunkt vorhanden
		    20 = TEXT
		    20.value = <li class="current first"> | </li> |*| <li> | </li> |*| <li class="current last"> | </li>
		    20.if.value.data = register:count_menuItems
		    20.if.equals = 1
		    20.if.negate = 1
		}
	}
	
	2.wrap = <ul class="sf_2 sf_sub">|</ul>
	
	3 < .2
	3.wrap = <ul class="sf_3 sf_sub">|</ul>
	
}


#######################################################################
###  Bootstrap Nav. with Logo | Collapsed: Bootstrap Collapse Menu  ###
###-----------------------------------------------------------------###
lib.bootstrap_nav_with_logo = COA
lib.bootstrap_nav_with_logo {
	1 < lib.nav_collapse
	2 < lib.logo
	3 < lib.nav_firstlevel
}
[globalVar = LIT:1 = {$aomame.page.layout.bootstrap.class.navbar-fixed-top}]
lib.bootstrap_nav_with_logo.wrap = <div class="navbar navbar-fixed-top"><div class="navbar-inner"><div class="container"> | </div></div></div>
[else]
lib.bootstrap_nav_with_logo.wrap = <div class="navbar"><div class="navbar-inner"><div class="container"> | </div></div></div>
[global]


################################################################################
###   Superfish Nav. with Logo | Collapsed: Dropdown Nav. | Mobile Dropdown  ###
###--------------------------------------------------------------------------###
lib.superfish_nav_with_logo = COA
lib.superfish_nav_with_logo {
	10 < lib.logo
	10.wrap = <div class="span4">|</div>
	20 = COA
	20 {
		1 < lib.mobile_nav
		2 < lib.superfish_nav
		wrap = <div class="span8">|</div>
	}
	wrap = <header><div class="{$aomame.page.layout.bootstrap.class.rows}">|</div></header>
}


# choose the navigation that is set in the aomame config file
lib.main_navigation = COA
lib.main_navigation {
	
	#if not set or 0
	5 < lib.lib.nav_firstlevel
	5.if {
		isFalse = {$aomame.page.nav.firstlevel.type}
	}

	10 < lib.nav_firstlevel
	10.if {
		value = 1
		equals = {$aomame.page.nav.firstlevel.type}
	}

	20 < lib.collapsible_nav
	20.if {
		value = 2
		equals = {$aomame.page.nav.firstlevel.type}
	}
	
	30 < lib.superfish_nav
	30.if {
		value = 3
		equals = {$aomame.page.nav.firstlevel.type}
	}
	
	40 < lib.bootstrap_nav_with_logo
	40.if {
		value = 4
		equals = {$aomame.page.nav.firstlevel.type}
	}
	
	50 < lib.superfish_nav_with_logo
	50.if {
		value = 5
		equals = {$aomame.page.nav.firstlevel.type}
	}
}
