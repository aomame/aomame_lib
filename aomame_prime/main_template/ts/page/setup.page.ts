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
					content < lib.content
					footer < lib.footer
					#ie_depricated < lib.ie_depricated
					mobile_footer < lib.mobile_footer
					fancyheader < lib.fancyheader
    }
  }
}

[globalVar = LIT:1 = {$aomame.page.layout.block}]
page.wrap = <div class="container">|</div>
[global]