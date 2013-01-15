plugin.tx_felogin_pi1 {
	templateFile = {$aomame.path.global}ext/fe_login/template.html
	feloginBaseURL = {$aomame.head.baseURL}
	
	# So kann man den Willkommens Header komplett löschen (auch ohne Template)
    #welcomeHeader_stdWrap.cObject = TEXT
    #welcomeHeader_stdWrap.cObject.value =
    #welcomeHeader_stdWrap.wrap = |
    #Fehlermeldung wrappen
    #errorHeader_stdWrap.wrap = <div class="error">|</div>
    #Pfad zum Login-Box Template angeben
    #templateFile = fileadmin/templates/ext_template/fe_login/login.html 
}