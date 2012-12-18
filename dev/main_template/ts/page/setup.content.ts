

lib.content = CONTENT
lib.content{
  table = tt_content
  select {
    languageField = sys_language_uid
    orderBy = sorting
  }
  renderObj.10 {
    field = menu
    ifEmpty.cObject = CONTENT
    ifEmtpy.cObject {
      wrap = <div class="empty">|</div>
    }
  }
  renderObj.stdWrap.innerWrap.cObject{
    key.field = layout
    default=TEXT
    default.value=<div class="default"> | </div>
    1=TEXT
    1.value=<div class="withbg"> | </div>
  }
}




lib.content_left < lib.content
lib.content_middle < lib.content
lib.content_right < lib.content

lib.content_left.select.where = colPos = 0
lib.content_middle.select.where = colPos = 2
lib.content_right.select.where = colPos = 3
