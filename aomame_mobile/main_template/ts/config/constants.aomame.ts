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
		}
		maintemplate = typo3conf/ext/aomame/template/aomame_mobile/main_template/
		exttemplate = typo3conf/ext/aomame/template/aomame_mobile/ext_template/
		ts = typo3conf/ext/aomame/template/aomame_mobile/main_template/ts/
		html = typo3conf/ext/aomame/template/aomame_mobile/main_template/html/
		css = typo3conf/ext/aomame/template/aomame_mobile/main_template/css/
		js = typo3conf/ext/aomame/template/aomame_mobile/main_template/js/
		image = typo3conf/ext/aomame/template/aomame_mobile/main_template/img/
		bootstrap.img = typo3conf/ext/aomame/template/aomame_mobile/main_template/img/bootstrap/
	}
	
	
	
	################
	# PAGE BUILDER #
	#################
	page {
		
		header {
				use_header = 0
				
				logo_filename = aomame.png
				
				homelink = 1
				
				pid = 85
				
				banner_logo =  
				
				slide = -1
		}
		
		###############
		# NAVIGATION  #
		###############
		nav {
				firstlevel {
					use_main_nav = 1
					
					main_navigation = horizontal
					
					# only possible when "main_navigation = horizontal"
					# text | collapsible
					menu_type = text
					
					# number of visible nav levels
					main_nav_level_depth = 3
				}
				
				secondlevel {
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

		content {
			# default count of column, if pagelayout not set
			column = 2
		}
		
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
		title = Aomame Mobile
		
		baseURL = http://localhost/workspace/t3_v47/
		
		charset = utf-8
		
		add_jquery = 1
		
		jquery_version = 1.8.3
		
		less_version = 1.3.1
	}


	#######################
	# EXTENSION HANDLING  #
	#######################
	extension {
		
		#language menu
		language {
			#enable multi lang
			use_multilang = 1
			
			#add menu for language switch
			add_lang_menu = 1
			
			# header | content | footer
			lang_menu_position = header
			
			#language code of shown languages
			lang = de,fr,en
		}
		
		# REAL URL
		realurl {
			use_real_url = 1  
			simulateStaticDocument = 1
			newsletter_pid =
		}
		
		# NEWSLETTER 
		newsletter {
			use_newsletter = 1
			
			#PID of newsletter sysFolder
			newsletter_pid = 
		}
		
		# NEWS  
		news {
			#PID of news sysFolder
			news_pid =
		}
	}
	
	
	###################
	# Special Option  #
	###################
	option {
		#use TYPO3 debug mode for aomame plugin
		debug {
			#full plugin debug
			t3_aomame =
			
			#global vars
			global_vars = 1
			
			#global typo3 vars
			t3_vars = 0
			
			# GET and POST vars
			GP_request = 0
		}
		
		sys {
			# User_TSconfig has to allow Admin Panel also
			allow_admin_panel = 0
			
		}
		
		print {
			# add print link to your Template
			use_print_page = 1
			
			# header | content | footer
			position = footer
			
			#url ofprint icon
			print_icon =   
			
			print_page_uid = 19
		}
		
		pdf {
			# enable <div id="pdf_icon"><img /></div>  to your Template
			use_pdf_download = 1
			
			# header | content |footer
			position = footer
			
			#url ro pdf icon
			pdf_icon =
		}
	}
}
