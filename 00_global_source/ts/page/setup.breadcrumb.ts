lib.breadcrumb = COA
lib.breadcrumb {
  10 = HMENU
  10 {
    special = rootline
  
    # Traverse the pagetree starting at the rootpage (0) and ending at the current page (-1)
    special.range = 1|-1
  
    includeNotInMenu = 1
  
    1 = TMENU
    1 {
      noBlur = 1
    
      # Append spaces and >> to normal linked breadcrumb items
      NO.allWrap = |&#32;&raquo;&#32;
      NO.stdWrap.htmlSpecialChars = 1
    }
  }
  wrap = <div class="{$aomame.page.layout.bootstrap.class.rows}"><div class="{$aomame.page.nav.breadcrumb.size} breadcrumb">|</div></div>
}
