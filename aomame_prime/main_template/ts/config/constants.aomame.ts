##################
# AOMAME CONFIG  #
##################

aomame {
	
	path {
		global = typo3conf/ext/aomame/template/00_global_source/
		local = typo3conf/ext/aomame/template/aomame_prime/
	}

	page {	
		############
		# Settings #
		############
		settings {
			site_name = Aomame Designs
			rootpage_uid = 27
			block_design = 1
		}
		
		
		# layout will be removed : value "rows" comes to settings
		layout.bootstrap.class.rows = row-fluid
		
		
		
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
				#1=firstlevel nav (default) : 2=Bootstrap collapse : 3=Superfish nav : 4=Bootstrap nav with logo : 5=Superfish nav with logo
				type = 5
				visibility = visible-desktop
				direction = pull-right
				collapsible = 0
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
			}
			
			
		}

	}
	
	##################
	# HEAD SETTINGS  #
	##################
	head {
		title = Aomame Prime
		
		#baseURL = http://prime.aomame.ch/
		baseURL = http://localhost/workspace/t3_v47/
		
		charset = utf-8
				
		jquery_version = 1.8.3
		
		jquery_on_top = 1
		
		less_version = 1.3.1
	}

	
	#######################
	# EXTENSION HANDLING  #
	#######################
	ext {
		
		#language menu
		language {			
			default_language = de
			htmlTag_langKey = de
			locale_all = de_DE.UTF-8
		}
		
		# REAL URL
		realurl {
			realurl_enable = 1
			simulateStaticDocument = 0
		}
				
		# NEWS  
		news {
			news_sysfolder_pid = 43
			default_single_view_pid = 34
			default_detail_view_pid = 34
			
			social {
				show_share_buttons = 0
			}
		}
	}
	
	
	###################
	# Special Option  #
	###################
	option {
		#use TYPO3 debug mode for aomame plugin
		debug {
			
		}
		
		sys {
			# User_TSconfig has to allow Admin Panel also
			allow_admin_panel = 0
		}
		
		print {
			use_print_page = 1
			print_icon =   
		}
		
		pdf {
			#pdf_page_uid = 
			
			#url ro pdf icon
			#pdf_icon =
		}
	}
}
