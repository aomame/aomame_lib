
# Show only the chosen columns in the page module
# 0=normal, 1=left, 2=right, 3=border
mod.SHARED.colPos_list = 1,0,2

# Set the default label and flag
#mod.SHARED.defaultLanguageLabel = English
#mod.SHARED.defaultLanguageFlag = gb.gif

mod.SHARED.defaultLanguageLabel = Deutsch
mod.SHARED.defaultLanguageFlag = de.gif



# Show the content element wizard with tabs (for consistency)
mod.wizards.newContentElement.renderMode = tabs

TCEFORM {
	pages {
		layout {
			# Rename the default options for the layout field in table pages
			altLabels.0 = Standard 3 columns
			altLabels.1 = Columns left & main
			altLabels.2 = Columns main & right
			altLabels.3 = Column main only
		}
		# There is no need for the Alias field in page properties when we use RealURL
		alias.disabled = 1
	}
	
	tt_content {
		# Remove the 'border' option from selectbox 'column' in content records
		colPos.keepItems = 1,0,2
	}
}
/*
##frames
TCEFORM.tt_content.section_frame{
	addItems {
		30 = Frame 3, width 2/3 
		31 = Frame 4, width 1/3 
	}
}
*/

  // If an editor creates a page it should be visible to all editors and admins
TCEMAIN {
	  // group "all users"
	permissions.groupid = 5

	user = show,edit,delete,new,editcontent
	group = show,edit,delete,new,editcontent
	everybody = 
}
