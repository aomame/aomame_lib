# Show only the chosen columns in the page module
# 0=normal, 1=left, 2=right, 3=border
mod.SHARED.colPos_list = 0,1,2,3,4,5,6,7,8,9

# Set the default label and flag
mod.SHARED.defaultLanguageLabel = English
mod.SHARED.defaultLanguageFlag = gb.gif

# Show the content element wizard with tabs (for consistency)
mod.wizards.newContentElement.renderMode = tabs


TCEFORM {
	pages {
		layout {
			# Rename the default options for the layout field in table pages
			altLabels.0 = undefined
		}
		# There is no need for the alias field in page properties when we use RealURL
		alias.disabled = 1
	}
	
	tt_content {
	
		# Remove the 'border' option from selectbox 'column' in content records
		colPos.keepItems = 1,0,2
	}
}


  // If an editor creates a page it should be visible to all editors and admins
TCEMAIN {
	  // group "all users"
	permissions.groupid = 5

	user = show,edit,delete,new,editcontent
	group = show,edit,delete,new,editcontent
	everybody = show
}

