(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{275:function(t,e,n){var content=n(581);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(8).default)("24d11943",content,!0,{sourceMap:!1})},580:function(t,e,n){"use strict";var r=n(275);n.n(r).a},581:function(t,e,n){(t.exports=n(7)(!1)).push([t.i,".bt_search .nya-checkbox{margin-top:.9375rem}",""])},776:function(t,e,n){"use strict";n.r(e);var r=n(68),o={name:"BtSearch",head:function(){return this.$store.state.currentTool.head},data:function(){return{keyworld:"",h:!1,btData:{},requestIn:!1,useapi2:!0}},watch:{useapi2:function(){this.btData={}}},methods:{search:function(){var t=this;if(this.requestIn)return!1;if(this.keyworld){this.requestIn=!0,this.btData={};var e=this.useapi2?"/bt_search/api2":"/bt_search";this.$axios.post(e,{keyword:this.keyworld,h:this.useapi2?void 0:this.h}).then(function(e){t.requestIn=!1,t.useapi2?t.btData.list=e.data.data:t.btData=e.data.data}).catch(function(e){t.requestIn=!1,t.$modal.show("dialog",{title:"获取失败",text:"ERROR: ".concat(e)})})}else this.$modal.show("dialog",{title:"获取失败",text:"ERROR: 请输入正确的链接"})},handleFileSize:function(t){return 0===t?"未知":(t=(t/1024/1024).toFixed(2))<1024?"".concat(t,"MB"):"".concat((t/1024).toFixed(2),"GB")},handleDate:function(t){return r(t).format("YYYY年MM月DD日")}}},l=(n(580),n(1)),component=Object(l.a)(o,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"bt_search"},[n("nya-container",{attrs:{title:"磁力搜索"}},[n("div",{staticClass:"inputbtn"},[n("nya-input",{attrs:{label:"输入链接开始下载",placeholder:"lovelive",autocomplete:"off",autofocus:""},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.search(e)}},model:{value:t.keyworld,callback:function(e){t.keyworld="string"==typeof e?e.trim():e},expression:"keyworld"}}),t._v(" "),n("button",{staticClass:"nya-btn",attrs:{type:"button",disabled:t.requestIn},on:{click:t.search}},[t._v("\n                "+t._s(t.requestIn?"获取中":"开始获取")+"\n            ")])],1),t._v(" "),n("nya-checkbox",{directives:[{name:"show",rawName:"v-show",value:!t.useapi2,expression:"!useapi2"}],attrs:{label:"启用里站"},model:{value:t.h,callback:function(e){t.h=e},expression:"h"}}),t._v(" "),n("br",{directives:[{name:"show",rawName:"v-show",value:!t.useapi2,expression:"!useapi2"}]}),t._v(" "),n("nya-checkbox",{attrs:{label:"使用接口二"},model:{value:t.useapi2,callback:function(e){t.useapi2=e},expression:"useapi2"}})],1),t._v(" "),Object.keys(t.btData).length?n("nya-container",{attrs:{title:"获取视频信息成功"}},[t.useapi2?t._e():n("h1",[t._v("\n            共 "+t._s(t.btData.totalRecordCount)+" 条结果\n            "),t.btData.totalRecordCount>50?[t._v("\n                , 已显示最近50条\n            ")]:t._e()],2),t._v(" "),(t.useapi2?t.btData.list.length:t.btData.totalRecordCount)?n("table",{staticClass:"nya-table",staticStyle:{width:"100%"}},[n("thead",[n("tr",[n("th",[t._v("名称")]),t._v(" "),n("th",[t._v("文件大小")]),t._v(" "),n("th",[t._v("日期")]),t._v(" "),n("th",[t._v("操作")])])]),t._v(" "),t.useapi2?n("tbody",t._l(t.btData.list,function(e,r){return n("tr",{key:r},[n("td",{attrs:{title:e.title}},[t._v("\n                        "+t._s(e.title)+"\n                    ")]),t._v(" "),n("td",{attrs:{width:"80"}},[t._v("\n                        "+t._s(e.size)+"\n                    ")]),t._v(" "),n("td",{attrs:{width:"150"}},[t._v("\n                        "+t._s(e.date)+"\n                    ")]),t._v(" "),n("td",{attrs:{width:"50"}},[n("a",{attrs:{href:e.url,target:"_blank",rel:"noopener noreferrer"}},[t._v("\n                            下载\n                        ")])])])}),0):n("tbody",t._l(t.btData.torrents,function(e,r){return n("tr",{key:r},[n("td",{attrs:{title:e.name}},[t._v("\n                        "+t._s(e.name)+"\n                    ")]),t._v(" "),n("td",{attrs:{width:"80"}},[t._v("\n                        "+t._s(t.handleFileSize(e.filesize))+"\n                    ")]),t._v(" "),n("td",{attrs:{width:"150"}},[t._v("\n                        "+t._s(t.handleDate(e.date))+"\n                    ")]),t._v(" "),n("td",{attrs:{width:"50"}},[n("a",{attrs:{href:e.magnet,target:"_blank",rel:"noopener noreferrer"}},[t._v("\n                            下载\n                        ")])])])}),0)]):n("h2",[t._v("\n            暂无资源\n        ")])]):t._e(),t._v(" "),n("nya-container",{attrs:{title:"Explain"}},[n("ul",{staticClass:"nya-list"},[n("li",[t._v("默认使用接口二，可搜索正常资源")]),t._v(" "),n("li",[t._v("若要搜索动漫、cosplay等资源请使用接口一（nyaa）")]),t._v(" "),n("li",[t._v("nyaa 可开启里站搜索，请合理使用")])])])],1)},[],!1,null,null,null);e.default=component.exports}}]);