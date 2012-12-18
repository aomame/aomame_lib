formhandlerExamples.basic.field-demo-contact-form {

	# cat=Formhandler Examples - Basic - Field Demo Contact Form/basic/10; type=string; label=Root path: Path where the example was saved to.
	rootPath = typo3conf/ext/aomame/template/easy_aomame_ch/ext_template/form/contact
	email {

		user {

			# cat=Formhandler Examples - Basic - Field Demo Contact Form/basic/20; type=string; label=User email sender: Email address to use as sender address for the user email.
			sender_email = 

		}

		admin {

			# cat=Formhandler Examples - Basic - Field Demo Contact Form/basic/20; type=string; label=Admin email sender: Email address to use as sender address for the admin email.
			sender_email = 

			# cat=Formhandler Examples - Basic - Field Demo Contact Form/basic/20; type=string; label=Admin email recipient: Email address of an admin to receive the contact request.
			to_email = 
		}
	}

	# cat=Formhandler Examples - Basic - Field Demo Contact Form/basic/40; type=string; label=Redirect Page: Page ID to redirect after successful form submission.
	redirectPage = 
}
