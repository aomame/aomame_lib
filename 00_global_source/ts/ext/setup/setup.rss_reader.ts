plugin.tx_opendigitalrssreader_pi1.block = HTML
plugin.tx_opendigitalrssreader_pi1.block {

	wrap=<div class="box_bottom_small">|</div>

	threadTitle = HTML
	threadTitle.wrap =|

	subBlock = HTML
	subBlock{
		title{
			wrap =	<div class="rss_list_title"></div>
		}
		wrap = <ul class="rss_item content_background"><li>|</li></ul>
		item.title = HTML
		item.title.wrap =<div class="block_title">|</div>
	}
}