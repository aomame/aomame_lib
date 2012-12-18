plugin.Tx_Formhandler.settings.predef.formhandler-basic-fielddemocontactform {

	# This is the title of the predefined form shown in the dropdown box in the plugin options.
	name = Contact Form
	
	# All form fields are prefixed with this values (e.g. contact[name])
	formValuesPrefix = contact

	langFile.1 = TEXT
	langFile.1.value = {$formhandlerExamples.basic.field-demo-contact-form.rootPath}/lang/lang.xml

	templateFile = TEXT
	templateFile.value = {$formhandlerExamples.basic.field-demo-contact-form.rootPath}/html/step-1.html

	# The master template is a file containing the markup for specific field types or other sub templates (e.g. for emails). You can use these predefined markups in your HTML template for a specific form.
	masterTemplateFile = TEXT
	masterTemplateFile.value = {$formhandlerExamples.basic.field-demo-contact-form.rootPath}/html/mastertemplate.html

	# If you use YAML, you don't need to include 1&2
	cssFile {
		10 = TEXT
		10.value = {$formhandlerExamples.basic.field-demo-contact-form.rootPath}/skin/css/base.css
		20 = TEXT
		20.value = {$formhandlerExamples.basic.field-demo-contact-form.rootPath}/skin/css/forms.css
		25 = TEXT
		25.value = {$formhandlerExamples.basic.field-demo-contact-form.rootPath}/skin/css/special.css
		30 = TEXT
		30.value = {$formhandlerExamples.basic.field-demo-contact-form.rootPath}/skin/css/colors.css
	}

	# These wraps define how an error messages looks like. The message itself is set in the lang file.
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
		}
	}

	# Finishers are called after the form was submitted successfully (without errors).
	finishers {

		# Finisher_Mail sends emails to an admin and/or the user.
		1.class = Finisher_Mail
		1.config {
			checkBinaryCrLf = message
			admin {
				templateFile = TEXT
				templateFile.value = {$formhandlerExamples.basic.field-demo-contact-form.rootPath}/html/email-admin.html
				sender_email = {$formhandlerExamples.basic.field-demo-contact-form.email.admin.sender_email}
				to_email = {$formhandlerExamples.basic.field-demo-contact-form.email.admin.to_email}
				subject = TEXT
				subject.data = LLL:{$formhandlerExamples.basic.field-demo-contact-form.rootPath}/lang/lang.xml:email_admin_subject
			}
		}

		# Finisher_Redirect will redirect the user to another page after the form was submitted successfully.
		5.class = Finisher_Redirect
		5.config {
			redirectPage = {$formhandlerExamples.basic.field-demo-contact-form.redirectPage}
		}
	}

}

# If the user has chosen to receive a copy of the contact request, reconfigure Finisher_Mail to send an email to the user to.
[globalVar = GP:contact|receive-copy = 1]
plugin.Tx_Formhandler.settings.predef.formhandler-basic-fielddemocontactform {
	finishers {
		1.config {
			user {
				templateFile = TEXT
				templateFile.value = {$formhandlerExamples.basic.field-demo-contact-form.rootPath}/html/email-user.html
				sender_email = {$formhandlerExamples.basic.field-demo-contact-form.email.user.sender_email}
				to_email = email
				subject = TEXT
				subject.data = LLL:{$formhandlerExamples.basic.field-demo-contact-form.rootPath}/lang/lang.xml:email_user_subject
			}
		}
	}
}
[global]
