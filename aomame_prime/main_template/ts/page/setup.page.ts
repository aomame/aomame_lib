page = PAGE
page {
  
  #  creates the Template object and fill in the markers #
  10 = FLUIDTEMPLATE
  10 {
     variables {
					#logo < lib.logo
					nav_firstlevel < lib.superfish_nav_with_logo
					nav_secondlevel < lib.nav_secondlevel
					#nav_collapse < lib.nav_collapse
					header < lib.header
					content_middle < lib.content_middle
					content_left < lib.content_left
					content_right < lib.content_right
					footer < lib.footer
					#ie_depricated < lib.ie_depricated
					#breadcrumb < lib.breadcrumb
					mobile_nav_secondlevel < lib.mobile_nav_secondlevel
					mobile_footer < lib.mobile_footer
    }
  }
}

[globalVar = LIT:1 = {$aomame.page.layout.block}]
page.wrap = <div class="container">|</div>
[global]