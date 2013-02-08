
plugin.tx_felogin_pi1 {
	templateFile = {$aomame.path.global}ext/felogin/template.html
	showPermaLogin = 1	
	feloginBaseURL = {$aomame.head.baseURL}
	showForgotPasswordLink = 1
	
	#this are own markers. will not work if felogin extension is updated
	showSignUpLink = 1
	signup_pid = {$aomame.ext.user.profile.pid}
	profile_settings_pid = {$aomame.ext.user.profile.pid}
	forget_passwort_pid = {$aomame.ext.user.profile.pid}
	
	profile {
		img {
			default {
				path = typo3conf/ext/aomame_lib/aomame_prime/img/
				file = profile.jpg
				
				#read image file from fe_users db field
				db_field = tx_userimage_file
			}
		}
	}
	
}
