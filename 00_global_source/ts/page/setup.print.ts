print = PAGE
print.typeNum = 400

print.if.isTrue = {$aomame.option.print.use_print_page}
print {
	bodyTag =<body bgcolor="#ffffff" leftmargin="0" topmargin="0" marginwidth="0" marginheight="0" onload="javascript:window.print()">
	10 < styles.content.getLeft
	20 < styles.content.get
	30 < styles.content.getRight
}
