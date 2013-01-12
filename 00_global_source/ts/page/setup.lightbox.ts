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
#  Lightbox settings taken from "modernpackage" project of Georg Ringer
#  (c) 2012 Georg Ringer <typo3@ringerge.org>
#  github.com/georgringer/modernpackage/blob/master/Resources/Private/TypoScript/content/lightbox.ts
#  
#  Modified by Aomame designs
#---------------------------------------------------------------------

#---------------------------------------------------------------------
#  Lightbox implementation by using plain TypoScript
#  and fancybox, see http://fancyapps.com/fancybox/#docs for details
#  files included in setup.files.ts
#  lightbox setting js included {local}/main_template/js/lightbox.js
#
#  Enable lightbox in TYPO3 Backend: image: Enlarge on click, checkbox
#---------------------------------------------------------------------

# Change rendering of images to fit the needs of the lightbox requirements
tt_content.image.20.1.imageLinkWrap {
  if.isTrue = {$aomame.ext.lightbox.active}
  JSwindow = 0
  directImageLink = 1
  linkParams.ATagParams {
    dataWrap = class= "lightbox" rel="fancybox{field:uid}"
  }
}