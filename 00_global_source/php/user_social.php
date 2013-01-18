<?php

class user_social {
	
	
	public function writeSocialFiles($content,$conf){
		
		global $TSFE;
    	$language = $TSFE->sys_language_uid;
		
		switch($TSFE->sys_language_uid){
			case 0:
				$language =	'de';
				break;
			case 1:
				$language =	'en';
				break;
			case 2:
				$language =	'fr';
				break;
			case 3:
				$language =	'cn';
				break;
			default:
				$language =	'de';
				break;
		}
		
		
		//google plus
		if($conf['google_plus']){
	    	$file = $conf['path'] . 'google_plus.js';
			$fh = fopen($file, 'w'); // or log_error();
			$content = self::getGooglePlusContent($language, $conf['default_lang']);
			fwrite($fh, $content);
			fclose($fh);
    	}
    	
    	
		return '';
	}
	
	public function getGooglePlusContent($lang, $default_lang){
	  	
	  	//Language Fallback
	  	if(empty($lang)){
	  		$lang = $default_lang;
	  	}
	  	
	  	$content = "
	  	window.___gcfg = {lang: '$lang'};
		(function() {
			  var po = document.createElement('script'); po.type = 'text/javascript'; po.async = true;
			  po.src = 'https://apis.google.com/js/plusone.js';
			  var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(po, s);
		})();  	
	  	";
	  	return $content;
  	}	
}

?>