lib.logo = COA
lib.logo{
	2 = IMAGE 
	2 {
	
		file = {$aomame.path.local}main_template/img/{$aomame.page.header.logo.filename}
		stdWrap.typolink{ 
			parameter = {$aomame.page.header.homelink}
			ATagParams = class="brand"
		}
		altText = {$aomame.page.header.logo.altText}
	}
}