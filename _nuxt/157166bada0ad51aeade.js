(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{813:function(t,n,o){"use strict";o.r(n);var e={name:"SoundcloudMusicDownloader",head:function(){return this.$store.state.currentTool.head},data:function(){return{soundcloudLink:"",downloadUrl:"",requestIn:!1}},methods:{getVideo:function(){var t=this;if(this.requestIn)return!1;/(https?:\/\/)(soundcloud\.com)\//.test(this.soundcloudLink)?(this.requestIn=!0,this.downloadUrl="",this.$axios.post("/soundcloud_music_downloader",{url:this.soundcloudLink}).then(function(n){t.requestIn=!1,t.downloadUrl=n.data.data.url}).catch(function(n){t.requestIn=!1,t.$modal.show("dialog",{title:"下载失败",text:"ERROR: ".concat(n)})})):this.$modal.show("dialog",{title:"下载失败",text:"ERROR: 请输入正确的链接"})}}},d=o(1),component=Object(d.a)(e,function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("div",{staticClass:"soundcloud_music_downloader"},[o("nya-container",{attrs:{title:"SoundCloud 歌曲下载"}},[o("div",{staticClass:"inputbtn"},[o("nya-input",{attrs:{label:"请输入视频链接",placeholder:"https://soundcloud.com/a-boogie-wit-da-hoodie/swervin",autocomplete:"off",autofocus:""},on:{keyup:function(n){return!n.type.indexOf("key")&&t._k(n.keyCode,"enter",13,n.key,"Enter")?null:t.getVideo(n)}},model:{value:t.soundcloudLink,callback:function(n){t.soundcloudLink="string"==typeof n?n.trim():n},expression:"soundcloudLink"}}),t._v(" "),o("button",{staticClass:"nya-btn",attrs:{type:"button",disabled:t.requestIn},on:{click:t.getVideo}},[t._v("\n                "+t._s(t.requestIn?"获取中":"开始获取")+"\n            ")])],1)]),t._v(" "),t.downloadUrl?o("nya-container",{attrs:{title:"获取成功"}},[o("a",{attrs:{href:t.downloadUrl,target:"_blank",rel:"noopener noreferrer"}},[t._v("\n            "+t._s(t.downloadUrl)+"\n        ")])]):t._e()],1)},[],!1,null,null,null);n.default=component.exports}}]);