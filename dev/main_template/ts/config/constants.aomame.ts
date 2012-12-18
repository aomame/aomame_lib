##################
# AOMAME CONFIG  #
##################

aomame {
	
	# PATH MANAGEMENT
	path {
		# cat=Aomame: Path/path/01; type=string; label= Path to maintemplate
		maintemplate = typo3conf/ext/aomame/template/dev/main_template/
		# cat=Aomame: Path/path/02; type=string; label= Path to extension template folder
		exttemplate = typo3conf/ext/aomame/template/dev/ext_template/
		# cat=Aomame: Path/path/03; type=string; label= Path to TS files
		ts = typo3conf/ext/aomame/template/dev/main_template/ts/
		# cat=Aomame: Path/path/04; type=string; label= Path to HTML files
		html = typo3conf/ext/aomame/template/dev/main_template/html/
		# cat=Aomame: Path/path/05; type=string; label= Path to CSS files
		css = typo3conf/ext/aomame/template/dev/main_template/css/
		# cat=Aomame: Path/path/06; type=string; label= Path to Bootstrap files
		bootstrap = typo3conf/ext/aomame/template/dev/main_template/bootstrap/
		# cat=Aomame: Path/path/07; type=string; label= Path to JavaScript files
		js = typo3conf/ext/aomame/template/dev/main_template/js/
		# cat=Aomame: Path/path/08; type=string; label= Path to image folder
		image = typo3conf/ext/aomame/template/dev/main_template/img/
		#images of bootstrap framework
		bootstrap.img = typo3conf/ext/aomame/template/dev/main_template/img/bootstrap/
		
	}
	
	
	
	################
	# PAGE BUILDER #
	#################
	page {
		# SETTINGS
		style {
			body_bg_color =
			
			#center | left | right
			page_align = center  
			background_image =    
			
			# x | y | xy
			background_repete =   
			page_width =
			page_height =
			body_margin = 0,0,0,0
			body_padding = 0,0,0,0
			font =
		}
		
		# HEAD
		header {
			# cat=Aomame: Page Structure/structure/01; type=boolean; label= Add the header
			use_header = 1
			
			#logo filename
			logo_filename = aomame.png
			
			#pid of home page
			homelink = 171
			
			# PID of SysFolder where the header content is stored
			pid = 85
			
			# banner image url
			banner_logo =  
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
			pid = 135
			
			colPos = 0
		}

	}
	
	##################
	# HEAD SETTINGS  #
	##################
	head {
		# cat=Aomame: Basic Settings/basic/00; type=string; label= Website Title
		title = Aomame Dev
		
		# cat=Aomame: Basic Settings/basic/01; type=string; label= Base URL
		baseURL = http://dev.aomame.ch/
		
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
