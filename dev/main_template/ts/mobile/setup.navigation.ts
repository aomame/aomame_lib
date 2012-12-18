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
    linkWrap = <li class="menu_active">|</li>
    stdWrap.htmlSpecialChars = 1
  }
}
lib.nav_firstlevel.wrap = <div class="container nav-collapse"><ul>|</ul></div>




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
    
    
    ACT <.NO
    ACT {
      wrapItemAndSub = <li class="secondlevel_act">|</li>
    }
  }
}
lib.nav_secondlevel.wrap = <div class="container"><div id="secondlevel">|</div></div>