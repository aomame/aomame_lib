##################
# AOMAME CONFIG  #
##################

aomame {
	
	# PATH MANAGEMENT
	path {
		global {
						bootstrap {
										css = typo3conf/ext/aomame/template/00_global_source/bootstrap/css/
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
		maintemplate = typo3conf/ext/aomame/template/aomame/main_template/
		exttemplate = typo3conf/ext/aomame/template/aomame/ext_template/
		ts = typo3conf/ext/aomame/template/aomame/main_template/ts/
		html = typo3conf/ext/aomame/template/aomame/main_template/html/
		css = typo3conf/ext/aomame/template/aomame/main_template/css/
		js = typo3conf/ext/aomame/template/aomame/main_template/js/
		image = typo3conf/ext/aomame/template/aomame/main_template/img/
	}
	
	
	
	################
	# PAGE BUILDER #
	#################
	page {
		# HEADER UNIT
		header {
			# cat=Aomame: Page Structure/structure/01; type=boolean; label= Add the header
			use_header = 1
			
			#pid of home page
			homelink = 23
			
			#logo filename
			logo_filename = aomame.png
			
			# PID of SysFolder where the default header content is stored
			pid = 26
			
			# banner image url
			banner_logo =  
		}
		
		# NAVIGATION
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
				
				# show pages beginning from level 2
				enrty_level = 1
				
				# pages after level 4 will not be visile
				out_level = 2   
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
			pid = 20
			
			column = 3
		}

	}
	
	##################
	# HEAD SETTINGS  #
	##################
	head {
		# cat=Aomame: Basic Settings/basic/00; type=string; label= Website Title
		title = Aomame
		
		# cat=Aomame: Basic Settings/basic/01; type=string; label= Base URL
		baseURL = http://localhost/workspace/t3_v47/
		
		# cat=Aomame: Basic Settings/basic/02; type=string; label= Charset
		charset = utf-8
		
		# cat=Aomame: Basic Settings/basic/03; type=boolean; label= Add jQuery JS Library
		add_jquery = 1
		# cat=Aomame: Basic Settings/basic/04; type=boolean; label= Add Prototype JS Library
		add_prototype = 0
		# cat=Aomame: Basic Settings/basic/05; type=boolean; label= Add Mootools JS Library
		add_mootools = 0
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
