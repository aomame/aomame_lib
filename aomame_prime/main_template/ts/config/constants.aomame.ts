##################
# AOMAME CONFIG  #
##################

aomame {
	
	# PATH MANAGEMENT
	path {
		global {
						bootstrap {
										less = typo3conf/ext/aomame/template/00_global_source/bootstrap/less/
										js = typo3conf/ext/aomame/template/00_global_source/bootstrap/js/
										img = typo3conf/ext/aomame/template/00_global_source/bootstrap/img/
						}
						ext {
										css = typo3conf/ext/aomame/template/00_global_source/ext/css/
										html = typo3conf/ext/aomame/template/00_global_source/ext/html/
										img = typo3conf/ext/aomame/template/00_global_source/ext/img/
										js = typo3conf/ext/aomame/template/00_global_source/ext/js/
						}
						css = typo3conf/ext/aomame/template/00_global_source/css/
						js = typo3conf/ext/aomame/template/00_global_source/js/
						img = typo3conf/ext/aomame/template/00_global_source/img/
						html = typo3conf/ext/aomame/template/00_global_source/html/
						plugin = typo3conf/ext/aomame/template/00_global_source/plugin/
		}
		maintemplate = typo3conf/ext/aomame/template/aomame_prime/main_template/
		exttemplate = typo3conf/ext/aomame/template/aomame_prime/ext_template/
		ts = typo3conf/ext/aomame/template/aomame_prime/main_template/ts/
		html = typo3conf/ext/aomame/template/aomame_prime/main_template/html/
		css = typo3conf/ext/aomame/template/aomame_prime/main_template/css/
		js = typo3conf/ext/aomame/template/aomame_prime/main_template/js/
		image = typo3conf/ext/aomame/template/aomame_prime/main_template/img/
		bootstrap.img = typo3conf/ext/aomame/template/aomame_prime/main_template/img/bootstrap/
		
	}
	
	
	
	################
	# PAGE BUILDER #
	#################
	page {		
		layout {
			#wrap all content with a bootstrap container class
			block = 1
			
			bootstrap{
				class {
					# options: pull-left | pull-right | (custom)
					direction = pull-right
					
					navbar-fixed-top = 1
					
					# options: row | row-fluid
					rows = row-fluid
				}
			}
		}
				
		header {
				# cat=Aomame: Page Structure/structure/01; type=boolean; label= Add the header
				use_header = 0
				
				#logo filename
				logo {
					filename = aomame.png
					altText = Aomame Prime
				}
				#pid of home page/rootpage
				homelink = 27
				
				# PID of SysFolder where the header content is stored
				pid = 85
				
				# banner image url
				banner_logo =  
				
				#rekursive vererben auf unterseiten
				slide = -1
		}
			
		###############
		# NAVIGATION  #
		###############
		nav {
			firstlevel {
				# cat=Aomame: Page Structure/structure/02; type=boolean; label= Add main menu
				use_main_nav = 1
				
				# horizontal | vertical
				main_navigation = horizontal
				
				# only possible when "main_navigation = horizontal"
				# text | collapsible
				menu_type = text
				
				# number of visible nav levels
				main_nav_level_depth = 3
			}
			
			secondlevel {
						# cat=Aomame: Page Structure/structure/03; type=boolean; label= Add secondlevel menu
						use_secondlevel_nav = 1
						
						# horizontal | vertical
						second_level_navigation = horizontal
						
						# show pages beginning from this level (first level is 0)
						enrty_level = 1
						
						# show subpages until level (first level is 0)
						out_level = 1
			}
			
			collapse {
				enrty_level = 0
			}
			
			mobile {
				secondlevel {
					enrty_level = 2
				}
			}
		}
		
		
		# CONTENT
		content {
			# default count of column, if pagelayout not set
			column = 2
		}
			
		# FOOTER
		footer {
			# cat=Aomame: Page Structure/structure/04; type=boolean; label= Add footer
			use_footer = 1
			
			# PID of SysFolder where the footer content is stored
			pid = 13
			
			colPos = 0
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
	extension {
		
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
			news_sysfolder_pid =
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
			use_print_page = 0
			
			#url ofprint icon
			#print_icon =   
			
			print_page_uid =
			
			print_type_num = 20
		}
		
		pdf {
			#pdf_page_uid = 
			
			#url ro pdf icon
			#pdf_icon =
		}
	}
}
