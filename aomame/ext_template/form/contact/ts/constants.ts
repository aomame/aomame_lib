formhandler {

	# cat=Formhandler Examples - SPAM Protection - EXT:sr_freecap/basic/10; type=string; label=Root path: Path where the example was saved to.
	rootPath = fileadmin/template/ext_template/form/contact
	email {
		admin {

			# cat=Formhandler Examples - SPAM Protection - EXT:sr_freecap/basic/20; type=string; label=Admin email sender: Email address to use as sender address for the admin email.
			sender_email = 

			# cat=Formhandler Examples - SPAM Protection - EXT:sr_freecap/basic/20; type=string; label=Admin email recipient: Email address of an admin to receive the contact request.
			to_email = 
		}
	}

	# cat=Formhandler Examples - SPAM Protection - EXT:sr_freecap/basic/40; type=string; label=Redirect Page: Page ID to redirect after successful form submission.
	redirectPage = 136
}
