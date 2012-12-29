lib.logo = COA
lib.logo{
	2 = IMAGE 
	2 {
	
		file = {$aomame.path.image}{$aomame.page.header.logo.filename}
		stdWrap.typolink{ 
			parameter = {$aomame.page.header.homelink}
			ATagParams = class="brand"
		}
		altText = {$aomame.page.header.logo.altText}
	}
}