#---------------------------------------------------------------------
#
# (c) 2012 Patrick crausaz <support@aomame.ch>
# 
#  This script is part of the Aomame template library, which is 
#  free software; you can redistribute it and/or modify
#  it under the terms of the GNU General Public License as published by
#  the Free Software Foundation; either version 2 of the License, or
#  (at your option) any later version.
#
#  The GNU General Public License can be found at
#  http://www.gnu.org/copyleft/gpl.html.
#
#---------------------------------------------------------------------

#---------------------------------------------------------------------
# 
#  AOMAME MAIN CONFIG
#
#---------------------------------------------------------------------

aomame {
	path {
		global = typo3conf/ext/aomame_lib/00_global_source/
		local = typo3conf/ext/aomame_lib/aomame_prime/
	}

	page {	
		############
		# Settings #
		############
		settings {
			site_name = Aomame Designs
			rootpage_uid = 27
			layout {
				responsive = 1
				style = prime
				block_design = 1
				container = container
				row = row-fluid
				#options: center, pull-left, pull-right
				direction = center
			}
		}
		
		
		# layout will be removed : value "rows" comes to settings
		#layout.bootstrap.class.rows = row-fluid
		
		
		
		###########
		# HEADER  #
		###########		
		header {
				active = 1
				homelink = 27
				colPos = 1
				slide = 0		
				use_bootstrap_hero_unit = 0
				
				logo {
					filename = logo/aomame_prime.png
					altText = Aomame Prime
					size = span4
				}
				
				fancyheader {
					active = 1
					pid = 45
					colPos = 0
					visibility = all
					tab {
						img = fancyheader/tab_3.png
						content = HOWTO3
					}
				}
		}
			
		###############
		# NAVIGATION  #
		###############
		nav {
			firstlevel {
				active = 1
				# 1= Firstlevel Nav (default) 
				# 2= Bootstrap collapse 
				# 3= Superfish nav 
				# 4= Bootstrap nav with logo 
				# 5= Superfish nav with logo 
				type = 4
				size = span8
				visibility = visible-desktop
				direction = pull-right
				collapsible = 1
				wrap_as_header = 1
				navbar_fixed_top = 0
				search {
					add_to_nav = 0
					direction = pull-right
				}
			}
			
			secondlevel {
				enrty_level = 1
				visibility = visible-desktop
				direction = 
				icon {
					active = 1
					name = icon-chevron-right
				}
			}
			
			collapse {
				active = 1
				enrty_level = 0
				direction = pull-right
			}
			
			mobile {
				enrty_level = 2
				direction = center
				visibility = hidden-desktop
			}
			
			breadcrumb {
				active = 1
				#custom size: set in local breadcrumb.ts - misuse this field
				size = breadcrumb_inner
				entryLevel = 0
				hide_on_rootpage = 1
			}
		}
		
		
		
		###########
		# CONTENT #
		###########
		content {
			active = 1
			columns {
				1_col {
					middle = span12
				}
				2_col {
					left = span9
					right = span3
				}
				3_col {
					left = span4
					middle = span4
					right = span4
				}
				1_col_nav {
					nav = span3
					middle = span9
				}
				2_col_nav {
					nav = span3
					left = span6
					right =span3
				}
			}
		}
			
		
		##########
		# FOOTER #
		##########
		footer {
			active = 1
			
			mainfooter {
				active = 1
				pid = 42
				colPos = 0
				visibility = hidden-phone
				add_printlink = 0
			}
			
			mobile_footer {
				active = 1
				pid = 42
				colPos = 2
				
				visibility = visible-phone
			}
			
			subfooter {
				active = 1
				pid = 42
				colPos = 1
				visibility = all
				add_printlink = 1
			}
			
			
		}

	}
	
	##################
	# HEAD SETTINGS  #
	##################
	head {
		title = Aomame Prime
		
		baseURL = http://localhost/projects/prime/
		
		charset = utf-8
				
		jquery_version = 1.8.3
		
		jquery_on_top = 1
		
		less_version = 1.3.1
		
		favicon {
			active = 1
			
			#file to {local}/main_template/img/
			file = favicon.jpg
		}
	}

	
	#######################
	# EXTENSION HANDLING  #
	#######################
	ext {
		
		#language menu
		language {
			nav {
				active = 0
				order = 1,0,2
			}
			default {
				label = Deutsch
				id = 0
				language = de
				key = de-DE
				locale_all = de_DE.UTF-8
			}
			0 {
				label = Deutsch
				id = 0
				language = de
				key = de-DE
				locale_all = de_DE.UTF-8
			}
			1 {
				label = English
				id = 1
				language = en
				key = en-GB
				locale_all = en_GB.UTF-8 
			}
			2 {
				label = France
				id = 2
				language = fr
				key = fr-FR
				locale_all = fr_FR.UTF-8 
			}
			3 {
				label = Chinese
				id = 3
				language = cn
				key = cn-CN
				locale_all = cn_CN.UTF-8 
			}
		}
		
		# REAL URL
		realurl {
			realurl_enable = 1
			simulateStaticDocument = 0
		}
			
		# sr_feuser_register
		user {
			pid = 59
			confirmed_user_group = 1
			unconfirmed_user_group = 2
			
		}
			
		# NEWS
		news {
			news_sysfolder_pid = 43
			default_single_view_pid = 34
			default_detail_view_pid = 65
			
			social {
				show_share_buttons = 0
			}
		}
		
		# Search
		search {
			pid = 56
			enable_indexing = 1
			index_metatags = 1
			index_externals = 1
			
			show {
				always_show_page_links = 1
				advanced_search_link = 1
				result_number = 10
			}
			
			
			
			searchform {
				active = 1
				
				#select: nav | secondlevel_nav | header | breadcrumb | fancyheader
				add_to = breadcrumb
			}
		}
		
		lightbox {
			active = 1
		}
		
	}
	
	
	###################
	# Special Option  #
	###################
	option {
		
		administrator {
			name = Aomame designs
			email = support@aomame.ch
		}
		
		#allowed buttons:
		#  
		social {
			
			includeJs {
				google_plus = 1
				facebook = 1
				twitter	= 1
			}
			
			1 {
				active = 1
				network = googleplus
				button = google_plusone
			}
			
			2 {
				active = 1
				network = facebook
				button = facebook
			}
			
			3 {
				active = 1
				network = twitter
				button = twitter
			}
		}
		
		copyright {
			active = 1
			by = Aomame designs
			url = www.aomame.ch
			hidden = 1
			link_title = Webdesign by Aomame designs
		}
		
		agb {
			pid = 
		}
		
		sys {
			# User_TSconfig has to allow Admin Panel also
			allow_admin_panel = 0
			
			##http://www.expertinnen-web.de/2006-160/typo3-seiten-mit-frontend-editing-pflegen/
			## einrichten !!
			editpanel {
				active =  0
				allow = edit,delete,hide,move,new,toolbar
			}
		}
		
		print {
			active = 1
			
			type_num = 98
			#{global}img/icons/
			icon = print_icon.gif
		}
		
		pdf {
			#pdf_page_uid = 
			
			#url ro pdf icon
			#pdf_icon =
		}
		
		statistics {
			googleanalytics {
				code = 
			}
		}
	}
}