plugin.tx_datamintsfeuser_pi1 {

	showtype = register
	usedfields = username, password, email, --submit--
	requiredfields = username, password, email
	uniquefields = username, email

	register {
		mailtype = html
		sendusermail = 1
		sendadminmail = 1
	}

	edit {
		mailtype = html
	}

	validate {
		username.type = username
		password.type = password
		password.length = 6
		email.type = email
	}

	captcha {
		use = captcha
	}

	format {
		date = %d.%m.%Y
		datetime = %H:%M %d.%m.%Y
	}

	thumb {
		file.maxW = 315
	}
	
	copyfields {
	    email {
	    	username = 1
	    }
  	}

}
