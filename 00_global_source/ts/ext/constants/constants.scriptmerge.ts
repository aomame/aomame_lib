plugin.tx_scriptmerger {
	css {
		enable = 1
		addContentInDocument = 0

		# minification
		minify {
			enable = 1
			ignore = \.min\.
		}

		# gzip compression
		compress {
			enable = 1
			ignore = \.gz\.
		}

		# merging
		merge {
			enable = 1
			ignore =
		}
		
		# charset
		uniqueCharset {
			enable = 1
			value = @charset "UTF-8";
		}
	}

	javascript {
		enable = 1
		parseBody = 1
		addBeforeBody = 1
		doNotRemoveInDocInBody = 0
		addContentInDocument = 0

		# minification
		minify {
			enable = 1
			useJSMinPlus = 1
			ignore = \?,\.min\.
		}

		# gzip compression
		compress {
			enable = 1
			ignore = \?,\.gz\.
		}

		# merging
		merge {
			enable = 1
			ignore = \?
		}
	}
	externalFileCacheLifetime = 3600
}
