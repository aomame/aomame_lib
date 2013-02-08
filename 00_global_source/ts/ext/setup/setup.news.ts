# ==============================================
# FE-Plugin configuration for EXT:news
# ==============================================
plugin.tx_news {
	mvc.callDefaultActionIfActionCantBeResolved = 1

	persistence {
		classes {
			Tx_News_Domain_Model_News {
				subclasses {
					0 = Tx_News_Domain_Model_NewsDefault
					1 = Tx_News_Domain_Model_NewsExternal
					2 = Tx_News_Domain_Model_NewsInternal
				}
			}


			Tx_News_Domain_Model_NewsDefault {
				mapping {
					recordType = 0
					tableName = tx_news_domain_model_news
				}
			}
			Tx_News_Domain_Model_NewsExternal {
				mapping {
					recordType = 1
					tableName = tx_news_domain_model_news
				}
			}

			Tx_News_Domain_Model_NewsInternal {
				mapping {
					recordType = 2
					tableName = tx_news_domain_model_news
				}
			}
		}
	}
	view {
		templateRootPath = {$aomame.path.global}ext/news/templates/
		partialRootPath = {$aomame.path.global}ext/news/partials/
		layoutRootPath = {$aomame.path.global}ext/news/layouts/
		
		widget.Tx_News_ViewHelpers_Widget_PaginateViewHelper.templateRootPath = {$aomame.path.global}ext/news/templates/
	}
	# Modify the translation
	_LOCAL_LANG {
		default {
			# read_more = more >>
		}
	}

	# ====================================
	# Settings available inside Controller and View by accessing $this->settings or {settings.xyz}
	# ====================================
	settings {
		
		startingpoint = {$aomame.ext.news.storage.pid}
		
		cssFile = {$aomame.path.global}css/news/news-basic.css

		#Displays a dummy image if the news have no media items
		displayDummyIfNoMedia = 1

		# Output format
		format = html

		# general settings
		overrideFlexformSettingsIfEmpty = cropMaxCharacters,dateField,timeRestriction,orderBy,orderDirection,backPid,listPid

		pidBackAdditionalParams {

		}

		includeSubCategories = 0
		
		analytics {
			social {
				facebookLike = 1
				facebookShare = 1
				twitter = 1
			}
		}

		detailPidDetermination = flexform, categories, default

		defaultDetailPid = {$aomame.ext.news.view.detail.pid}
		dateField = datetime

		link {
			hrDate = 0
			hrDate {
				day = j
				month = n
				year = Y
			}

			skipControllerAndAction = 0
		}

		cropMaxCharacters = 150
		orderBy = datetime
		orderDirection = desc
		orderByRespectTopNews = 0
		orderByAllowed = author,uid,title,teaser,author,tstamp,crdate,datetime,categories.title

		facebookLocale = en_US
		googlePlusLocale = en
		disqusLocale = en

		# Interface implementations
		interfaces {
			media {
				video = Tx_News_Interfaces_Audio_Mp3,Tx_News_Interfaces_Video_Quicktime,Tx_News_Interfaces_Video_Flv,Tx_News_Interfaces_Video_Videosites
			}
		}

		# --------------
		#  Search
		# --------------
		search {
			fields = teaser,title,bodytext
		}

		# --------------
		#  Detail
		# --------------
		detail {
			registerProperties = keywords,title
			showSocialShareButtons = {$aomame.ext.news.social.show_share_buttons}

			# media configuration
			media {
				image {
					# choose the rel tag like gallery[fo]
					lightbox = fancybox123
					additionalClass = lightbox
					maxWidth = 282
				}

				video {
					width = 282
					height = 300
				}
			}
		}

		# --------------
		#  List
		# --------------
		list {
			# media configuration
			media {
				image {
					maxWidth = 200
					maxHeight = 200
				}
			}

			# Paginate configuration.
			paginate {
				itemsPerPage = 10
				insertAbove = FALSE
				insertBelow = TRUE
				lessPages = TRUE
				forcedNumberOfLinks = 5
				pagesBefore = 2
				pagesAfter = 2
				templatePath =
				prevNextHeaderTags = 1
			}

			rss {
				channel {
					title = {$plugin.tx_news.rss.channel.title}
					description = {$plugin.tx_news.rss.channel.description}
					language = {$plugin.tx_news.rss.channel.language}
					copyright = {$plugin.tx_news.rss.channel.copyright}
					generator = {$plugin.tx_news.rss.channel.generator}
					link = {$plugin.tx_news.rss.channel.link}
				}
			}
		}

		# --------------
		#  Common
		# --------------
		relatedFiles {
			download {
				labelStdWrap {
					cObject = TEXT
				}
			}
		}

		# Opengraph implementation
		opengraph {
		    site_name = {$aomame.page.settings.site_name}
		    type = article
			admins =
			email =
			phone_number =
			fax_number =
			latitude =
			longitude =
			street-adress =
			locality =
			region =
			postal-code =
			country-name =
		}
	}
}

# Rendering of content elements in detail view
lib.tx_news.contentElementRendering = RECORDS
lib.tx_news.contentElementRendering {
	tables = tt_content
	source.current = 1
	dontCheckPid = 1
}


# ==============================================
# BE-module configuration for EXT:news
# ==============================================
module.tx_news < plugin.tx_news

# ==============================================
# Mapping of tt_content and its properties
# ==============================================
config.tx_extbase.persistence.classes {
	Tx_News_Domain_Model_External_TtContent {
		mapping {
			tableName = tt_content
			columns {
				altText.mapOnProperty = altText
				titleText.mapOnProperty = titleText
				colPos.mapOnProperty = colPos
			}
		}
	}
}