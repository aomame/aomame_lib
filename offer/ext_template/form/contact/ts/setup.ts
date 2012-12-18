plugin.Tx_Formhandler.settings.predef.spam-protection-sr_freecap {

	# This is the title of the predefined form shown in the dropdown box in the plugin options.
	name = Contactform (with Spamprotection)

	# All form fields are prefixed with this values (e.g. sr_freecap[name])
	formValuesPrefix = sr_freecap

	langFile.1 = TEXT
	langFile.1.value = {$formhandlerExamples.spam-protection.sr_freecap.rootPath}/lang/lang.xml

	templateFile = TEXT
	templateFile.value = {$formhandlerExamples.spam-protection.sr_freecap.rootPath}/html/step-1.html

	# The master template is a file containing the markup for specific field types or other sub templates (e.g. for emails). You can use these predefined markups in your HTML template for a specific form.
	masterTemplateFile = TEXT
	masterTemplateFile.value = {$formhandlerExamples.spam-protection.sr_freecap.rootPath}/html/mastertemplate.html

	# If you use YAML, you don't need to include 1&2
	cssFile {
		10 = TEXT
		10.value = {$formhandlerExamples.spam-protection.sr_freecap.rootPath}/skin/css/base.css
		20 = TEXT
		20.value = {$formhandlerExamples.spam-protection.sr_freecap.rootPath}/skin/css/forms.css
		25 = TEXT
		25.value = {$formhandlerExamples.spam-protection.sr_freecap.rootPath}/skin/css/special.css
		30 = TEXT
		30.value = {$formhandlerExamples.spam-protection.sr_freecap.rootPath}/skin/css/colors.css
	}

	# These wraps define how an error message looks like. The message itself is set in the lang file.
	singleErrorTemplate {
		totalWrap = <div class="error">|</div>
		singleWrap = <span class="message">|</span>
	}

	# This block defines the error checks performed when the user hits submit.
	validators {
		1.class = Validator_Default
		1.config.fieldConf {
			name.errorCheck.1 = required
			email.errorCheck.1 = required
			email.errorCheck.2 = email
			message.errorCheck.1 = required
			
			freecapfield.errorCheck.1 = required
			freecapfield.errorCheck.2 = srFreecap
		}
	}

	finishers {

		# Finisher_Mail sends emails to an admin and/or the user.
		1.class = Finisher_Mail
		1.config {
			checkBinaryCrLf = message
			admin {
				templateFile = TEXT
				templateFile.value = {$formhandlerExamples.spam-protection.sr_freecap.rootPath}/html/email-admin.html
				sender_email = {$formhandlerExamples.spam-protection.sr_freecap.email.admin.sender_email}
				to_email = {$formhandlerExamples.spam-protection.sr_freecap.email.admin.to_email}
				subject = TEXT
				subject.data = LLL:{$formhandlerExamples.spam-protection.sr_freecap.rootPath}/lang/lang.xml:email_admin_subject
			}
		}

		# Finisher_Redirect will redirect the user to another page after the form was submitted successfully.
		5.class = Finisher_Redirect
		5.config {
			redirectPage = {$formhandlerExamples.spam-protection.sr_freecap.redirectPage}
		}
	}

}
