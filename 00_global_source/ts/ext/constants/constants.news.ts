plugin.tx_news {
	rss.channel {
		title = Dummy Title
		description =
		link = http://example.com
		language = en_GB
		copyright = TYPO3 News
		category =
		generator = TYPO3 EXT:news
	}
	view {
		 # cat=plugin.tx_news/file; type=string; label=Path to template root (FE)
		templateRootPath = EXT:aomame/template/00_global_source/ext/news/templates/
		 # cat=plugin.tx_news/file; type=string; label=Path to template partials (FE)
		partialRootPath = EXT:aomame/template/00_global_source/ext/news/partials/
		 # cat=plugin.tx_news/file; type=string; label=Path to template layouts (FE)
		layoutRootPath = EXT:aomame/template/00_global_source/ext/news/layouts/
	}

		settings {
			 # cat=plugin.tx_news/file; type=string; label=Path to CSS file
	 		cssFile = EXT:news/Resources/Public/Css/news-basic.css
		}
}