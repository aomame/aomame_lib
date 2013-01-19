plugin.tx_dixeasylogin_pi1 {
	
	# if jQuery, jQueryUI and the lightness theme should be included by default.
	# if turned off, you have to take care for yourself that the libraries
	# are loaded (smart if other extensions also include jQuery)
	include_jQuery = 1
	
	# if the user should be created when not already found in the database
	allowCreate = 1
	
	allowUpdate = 1
	
	# where the fe_users records should be stored when created
	user_pid = 59
	
	# when a user is created, he will get this usergroup(s)
	usergroup = 1

	# page where the "easylogin" plugin is located
	# used for the xrds definition
	pid_loginPage = 61

	# uid of the common login
	uid_felogin = 89

	# register a facebook app to get these two values
	facebook_appID = 126410590853381
	facebook_appSecret = da6ebd6ff3a0d41116f879dc7cb6814d

	# register a twitter app to get these two values
	twitter_consumerKey = YOUR-CONSUMER-KEY
	twitter_consumerSecret = YOUR-CONSUMER-SECRET

	# register a xing app to get these two values
	xing_consumerKey = YOUR-CONSUMER-KEY
	xing_consumerSecret = YOUR-CONSUMER-SECRET

	# enable or disable login methods	
	disable {
		felogin = 0
		google = 0
		yahoo = 1
		myopenid = 1
		wordpress = 1
		facebook = 0
		twitter = 1
		xing = 1
	}
}