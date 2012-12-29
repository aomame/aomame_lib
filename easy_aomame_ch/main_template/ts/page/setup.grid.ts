lib.body_tag = COA
lib.body_tag {
   #makes a class of the selected backend_layout of the current page
   10 = CASE
   10 {
	   key.field = backend_layout
	   key.ifEmpty.data = levelfield:-2, backend_layout_next_level, slide
		 default = TEXT
		 default.value = single_col
		 1 = TEXT
		 1.value = single_col
		 2 = TEXT
		 2.value = double_col
		 3 = TEXT
		 3.value = tripple_col
		 4 = TEXT
		 4.value = double_col_nav
		 5 = TEXT
		 5.value = single_col_nav
		 6 = TEXT
		 6.value = no_header
		 7 = TEXT
		 7.value = no_header_with_nav
	    
    }
    #give out an empty space3 for a split the classes
    20 = TEXT
    20.value= &nbsp;
    
    #makes a class uid of the current page
    30 = HTML
    30 {
    	    value {
    	    	    field = uid
    	    	    wrap = uid|
    	    }
    }
    stdWrap.wrap = <body class ="|">
}