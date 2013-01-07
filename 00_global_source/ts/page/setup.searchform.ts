lib.searchform = COA_INT
lib.searchform {
  
  10 = TEXT
  10.typolink.parameter = 27
  10.typolink.returnLast = url
  10.wrap = <form action="|" method="post" class="pull-right">
    
  20 = COA
  20 {
    10 = TEXT
    10.value = <input type="text" class="search-query" placeholder="Search">
  }

  wrap = | </form>
}