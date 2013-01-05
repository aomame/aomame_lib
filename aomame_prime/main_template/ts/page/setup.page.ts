page = PAGE
page {
  #creates the Template object and fill in the content #
  10 = FLUIDTEMPLATE
  10.variables.content < lib.pagerenderer
}

#wrap the page with the bootstrap container
[globalVar = LIT:1 = {$aomame.page.layout.block}]
page.wrap = <div class="container">|</div>
[global]