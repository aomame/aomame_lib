config.compressJs = 1
config.compressCss = 1

plugin.tx_scriptmerger {
	# minification, compressing and merging of css files
	css {
		enable = {$plugin.tx_scriptmerger.css.enable}
		addContentInDocument = {$plugin.tx_scriptmerger.css.addContentInDocument}

		# minification
		minify {
			enable = {$plugin.tx_scriptmerger.css.minify.enable}
			ignore = {$plugin.tx_scriptmerger.css.minify.ignore}
		}

		# gzip compression
		compress {
			enable = {$plugin.tx_scriptmerger.css.compress.enable}
			ignore = {$plugin.tx_scriptmerger.css.compress.ignore}
		}

		# merging
		merge {
			enable = {$plugin.tx_scriptmerger.css.merge.enable}
			ignore = {$plugin.tx_scriptmerger.css.merge.ignore}
		}
		
		# charset
		uniqueCharset {
			enable = {$plugin.tx_scriptmerger.css.uniqueCharset.enable}
			value = {$plugin.tx_scriptmerger.css.uniqueCharset.value}
		}
	}

	# minification, compressing and merging of javascript files
	javascript {
		enable = {$plugin.tx_scriptmerger.javascript.enable}
		parseBody = {$plugin.tx_scriptmerger.javascript.parseBody}
		addBeforeBody = {$plugin.tx_scriptmerger.javascript.addBeforeBody}
		doNotRemoveInDocInBody = {$plugin.tx_scriptmerger.javascript.doNotRemoveInDocInBody}
		addContentInDocument = {$plugin.tx_scriptmerger.javascript.addContentInDocument}

		# minification
		minify {
			enable = {$plugin.tx_scriptmerger.javascript.minify.enable}
			useJSMinPlus = {$plugin.tx_scriptmerger.javascript.minify.useJSMinPlus}
			ignore = {$plugin.tx_scriptmerger.javascript.minify.ignore}
		}

		# gzip compression
		compress {
			enable = {$plugin.tx_scriptmerger.javascript.compress.enable}
			ignore = {$plugin.tx_scriptmerger.javascript.compress.ignore}
		}

		# merging
		merge {
			enable = {$plugin.tx_scriptmerger.javascript.merge.enable}
			ignore = {$plugin.tx_scriptmerger.javascript.merge.ignore}
		}
	}
	externalFileCacheLifetime = {$plugin.tx_scriptmerger.externalFileCacheLifetime}
}
