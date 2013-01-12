#---------------------------------------------------------------------
#
# (c) 2013 Patrick crausaz <support@aomame.ch>
# 
#  This script is part of the Aomame template library, which is 
#  free software; you can redistribute it and/or modify
#  it under the terms of the GNU General Public License as published by
#  the Free Software Foundation; either version 2 of the License, or
#  (at your option) any later version.
#
#  The GNU General Public License can be found at
#  http://www.gnu.org/copyleft/gpl.html.
#
#---------------------------------------------------------------------

#---------------------------------------------------------------------
#  Mailform settings taken from "modernpackage" project of Georg Ringer
#  (c) 2012 Georg Ringer <typo3@ringerge.org>
#  github.com/georgringer/modernpackage/blob/master/Resources/Private/TypoScript/content/tt_content.ts
#
#  Modified by Aomame designs
#---------------------------------------------------------------------

# !!! still in alpha/beta !!!
tt_content.mailform.20 {
  stdWrap.wrap >
  postProcessor.1.messages.success = TEXT
  postProcessor.1.messages.success {
    value = <strong>Thanks for your email</strong><br />We' will try to response as soon as possible!
    wrap = <div class="alert alert-success">|</div>
  }

  layout {
    form (
	    <form class="form-horizontal">
	    	<containerWrap />
	    </form>
    )
    containerWrap (
	    <div>
	    	<elements />
	    </div>
    )
    elementWrap (
	    <div class="">
	    	<element />
	    </div>
    )
    mandatory (
	    <span class="required">
	    	*
	    </span>
    )
    error (
	    <strong class="ym-message">
	    	<errorvalue />
	    </strong>
    )
    textline (
	    <div class="control-group">
	    	<span class="control-label"><label class="bar" /></span>
	    	<div class="controls"><input class="fo" /></div><inputvalue />
	    </div>
    )
    textarea (
	    <div class="control-group">
		    <span class="control-label"><label class="bar" /></span>
		    <div class="controls"><textarea /></div><inputvalue />
	    </div>
    )
    select (
	    <div class="control-group">
		    <label />
		    <select>
		    	<elements />
		    </select>
	    </div>
    )
    checkbox (
	    <div class="control-group">
		    <span class="control-label"><label /></span>
		    <div class="controls"><input /></div>
	    </div>
    )
    radio (
		<div class="control-group">
	    	<span class="control-label"><label /></span>
	    	<div class="controls"><input /></div>
	    </div>
    )
    button (
	    <div class="ym-fbox-button">
	    	<input />
	    </div>
    )
    reset (
	    <div class="ym-fbox-button">
	    	<input />
	    </div>
    )
    submit (
	    <div class="form-actions">
	    	<input class="btn" />
	    </div>
    )
    radiogroup(
	    <div class="control-group subgroup">
	    	<span class="control-label"><legend/></span>
	    	<div class="controls"><containerWrap /></div>
	    </div>
    )
    checkboxgroup(
		<div class="control-group subgroup">
			<span class="control-label"><legend/></span>
			<div class="controls"><containerWrap /></div>
		</div>
    )
  }
}