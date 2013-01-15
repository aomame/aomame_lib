

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


#default 1 col layout
lib.col_1 =
lib.col_2 < lib.content
lib.col_2.select.where = colPos = 0
lib.col_2.renderObj.stdWrap.innerWrap.cObject.default.value = <div class="content_background"> | </div>
lib.col_3 =

# 3 col layout
[globalVar=TSFE:page|layout=1]

lib.col_1 < lib.content
lib.col_1.select.where = colPos = 1

lib.col_3 < lib.content
lib.col_3.select.where = colPos = 2
[global]