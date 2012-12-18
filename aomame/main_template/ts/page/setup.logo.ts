lib.logo = IMAGE
lib.logo {
	file = {$aomame.path.image}{$aomame.page.header.logo_filename}
	stdWrap.typolink{ 
		parameter = {$aomame.page.header.homelink}
		ATagParams = class="brand"
	}
	altText = Home
	stdWrap.outerWrap = <div id="logo" class="container"> | </div>
}