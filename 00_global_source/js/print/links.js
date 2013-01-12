/***************************************************************
*
*  Collects all links and substitute it with a legend eg. <a title="Newsbeispiel mit viel Inhalt" target="_self" href="erweiterungen/news/listenansicht-aller-news/detail/article/2010/03/04/news-mit-relations/">
*  Newsbeispiel mit viel Inhalt  </a>
*  ends up <span class="link">Newsbeispiel mit viel Inhalt<sup>1</sup></span> all links are also append
*  to the end of the document

****************************************************************/

jQuery.noConflict();

(function($) {
	
	$(document).ready(function(){
		linkCollector.start();
		window.print();
	});
	
	var linkCollector = {
		links : []
		,baseUrl : null
		
		,start : function () {
			this.links = this.getLinks();

			if(this.links.length) {
				this.setBaseUrl();
				this.removeLinksFromDocumentAndAddToLinkContainer();
			}
		}
		
		,setBaseUrl : function () {
			this.baseUrl = location.protocol + '//' + location.host;
		}
		
		,getLinks : function () {
			return $('a:visible:not(.print_info_header a, .csc-textpic-image a, ul.browsebox a, .printDoNotCollect a, a[href*=\'javascript\'], a[href*=\'mailto\:\'], a[href^=\'#\'], a[rel*=\'shadowbox\'], a[id^=\'c\'], div.rssLink a, .listImage a, li.pageBrowserListItem a, a.printDoNotCollect)');
		}
		
		,removeLinksFromDocumentAndAddToLinkContainer : function () {
			(function(obj) {
				
				var linkContainer = $('.content_links')[0];
				
				$.each(obj.links, function(index, link) {
					$(link).replaceWith(obj.buildLinkTextElement(index, link));
					$(linkContainer).append(obj.buildLinkListElement(index, link));
					
				});
				
				var trackLinksContainer = $('#trackLinks')[0];
				$(trackLinksContainer).append(linkContainer);
				$(trackLinksContainer).removeClass('visuallyhidden');
			}(this))
		}
		
		,buildLinkTextElement : function (index, link) {
			var elementNumber = index+1;
			return $('<span class="link"> ' + $(link).text() + '<sup>' + elementNumber + '</sup></span>')[0];
		}
		
		,buildLinkListElement : function (index, link) {
			var elementNumber = index+1;
			var href = decodeURI($(link).attr('href'));
			var isAbsoluteLink = href.match('http://');
			var addSlash = (href.substring(0, 1) == '/') ? '' : '/';

				//is absolut url ? take href : (is link only / ? don't add it to baseUrl : take base url and href)
			var linkText = isAbsoluteLink ? href : (href == '/' ? this.baseUrl + addSlash : this.baseUrl + addSlash + href);
	
			//return $('<li><span class="linkCount">' + elementNumber + '</span> ' + linkText + '</li>')[0];
			return $('<li>' + linkText + '</li>')[0];
		}
	};
})(jQuery);