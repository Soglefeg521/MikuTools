(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{303:function(t,e,n){"use strict";var r=/^([+-])?0*(\d+)(\.(\d+))?$/,o=/^([+-])?0*(\d+)(\.(\d+))?e(([+-])?(\d+))$/i,c=e.e2ten=function(t){var e=o.exec(t.toString());if(!e)return t;var n=e[2],r=e[4]||"",c=e[5]?+e[5]:0;if(c>0){var h=r.substr(0,c);h=h.length<c?h+new Array(c-h.length+1).join("0"):h,r=r.substr(c),n+=h}else{c=-c;var l=n.length-c;l=l<0?0:l;var f=n.substr(l,c);f=f.length<c?new Array(c-f.length+1).join("0")+f:f,n=n.substring(0,l),r=f+r}return n=""==n?"0":n,("-"==e[1]?"-":"")+n+(r?"."+r:"")};e.getNumbResult=function(t){var e=r.exec(t.toString());if(!e&&o.test(t.toString())&&(e=r.exec(c(t.toString()))),e)return{int:e[2],decimal:e[4],minus:"-"==e[1],num:e.slice(1,3).join("")}},e.centerArray=function t(e,n){if(e.splice.apply(e,[0,n.length].concat(n.splice(0,n.length))),arguments.length>2){var r=[].slice.call(arguments,2);r.unshift(e),t.apply(null,r)}return e};var h=e.hasAttr=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)};e.extend=function(t){for(var e,n=arguments[0]||{},r=Array.prototype.slice.call(arguments,1),i=0;i<r.length;i++){var o=r[i];for(e in o)h(o,e)&&(n[e]=o[e])}return n},e.getDigit=function(t){return t>=5?4*(t-4)+4:t},e.unshiftZero=function(t,e){if(null==e&&(e=1),!(e<=0))for(;e--;)t.unshift(0)},e.clearZero=function(t,e,n){if(null==t)return"";var r=~"*.?+$^[](){}|\\/".indexOf(e)?"\\"+e:e,o=new RegExp("^"+r+"+"),c=new RegExp(r+"+$"),h=new RegExp(r+"{2}","g");return t=t.toString(),"^"==n&&(t=t.replace(o,"")),n&&"$"!=n||(t=t.replace(c,"")),n&&"nto1"!=n||(t=t.replace(h,e)),t}},304:function(t,e,n){var content=n(696);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(8).default)("e1f6c9ae",content,!0,{sourceMap:!1})},349:function(t,e,n){var r=n(303);function o(t,e){var n=r.getNumbResult(t);if(!n)return t;e=e||{};var o=this.ch,c=this.ch_u,h=this.ch_f||"",l=this.ch_d||".",f=o.charAt(0),d=n.int,m=n.decimal,_="",v="",y=n.minus?h:"";if(m){m=r.clearZero(m,"0","$");for(var x=0;x<m.length;x++)v+=o.charAt(+m.charAt(x));v=v?l+v:""}if(_=function t(n,h,l){n=r.getNumbResult(n).int;var d="",m=arguments.length>1?arguments[1]:e.tenMin,_=n.length;if(1==_)return o.charAt(+n);if(_<=4)for(var i=0,v=_;v--;){var y=+n.charAt(i);d+=m&&2==_&&0==i&&1==y?"":o.charAt(y),d+=y&&v?c.charAt(v):"",i++}else{for(var x=n.length/4>>0,A=n.length%4;0==A||!c.charAt(3+x);)A+=4,x--;var w=n.substr(0,A),z=n.substr(A);d=t(w,m)+c.charAt(3+x)+("0"==z.charAt(0)?f:"")+t(z,m)}return d=r.clearZero(d,f)}(d),e.ww&&c.length>5){var A=c.charAt(4),w=c.charAt(5),z=_.lastIndexOf(w);~z&&(_=_.substring(0,z).replace(new RegExp(w,"g"),A+A)+_.substring(z))}return y+_+v}t.exports={CL:o,unCL:function(t){for(var e=(t=t.toString()).split(this.ch_d),n=e[0].replace(this.ch_f,""),o=e[1],c=!!~e[0].indexOf(this.ch_f),h=this.ch_u.charAt(1),l=this.ch_u.charAt(4),f=this.ch_u.charAt(5),d=(n=n.replace(new RegExp(l+"{2}","g"),f)).split(""),m=0,_=0,v=[],y=[],x=[],i=0;i<d.length;i++){var A,w=d[i],u=0;if(~(A=this.ch.indexOf(w)))A>0&&x.unshift(A);else if(~(u=this.ch_u.indexOf(w))){var z=r.getDigit(u);m>u?(r.unshiftZero(x,z),r.centerArray(y,x)):u>=_?(0==i&&(x=[1]),r.centerArray(v,y,x),v.length>0&&r.unshiftZero(v,z),_=u):(0==x.length&&h==w&&(x=[1]),r.centerArray(y,x),r.unshiftZero(y,r.getDigit(u)),m=u)}}r.centerArray(v,y,x).reverse(),0==v.length&&v.push(0);var R=0;if(o){for(v.push("."),R="0.",i=0;i<o.length;i++)R+=this.ch.indexOf(o.charAt(i)),v.push(this.ch.indexOf(o.charAt(i)));R=+R}return c&&v.unshift("-"),parseFloat(v.join(""))},toMoney:function(t,e){var n=r.getNumbResult(t),c=this.ch.charAt(0);if(e="object"==typeof e?e:{},!n)return t;e=r.extend({ww:!0,complete:!1,outSymbol:!0},e);var h=n.num,l=n.decimal||"",f=e.outSymbol?this.m_t:"",d=l?"":this.m_z,m="";if(e.complete){for(var i=1;i<this.m_u.length;i++)m+=o.call(this,l.charAt(i-1)||"0")+this.m_u.charAt(i);d=o.call(this,h,e)+this.m_u.charAt(0)}else{var _;if(l=r.clearZero(l,"0","$"))for(i=0;i<this.m_u.length-1;i++)l.charAt(i)&&"0"!=l.charAt(i)&&(m+=o.call(this,l.charAt(i))+this.m_u.charAt(i+1),_=!1),"0"!==l.charAt(i)||_||(0==i&&"0"==h||(m+=c),_=!0);"0"==h&&!d&&m||(d=o.call(this,h,e)+this.m_u.charAt(0)+d)}return f+d+m}}},689:function(t,e,n){var r=n(349),o=(n(303),n(690)),c={s:n(691),b:n(692),hk_s:n(693),hk_b:n(694)},h=function(t){this.lang=t,this.encode=function(){return r.CL.apply(t,arguments)},this.decode=function(){return r.unCL.apply(t,arguments)},this.toMoney=function(){return r.toMoney.apply(t,arguments)}};h.langs=c,h.cn=o(c.s,c.b),h.hk=o(c.hk_s,c.hk_b),t.exports=h},690:function(t,e,n){var r=n(349),o=n(303);t.exports=function(t,e){return{encodeS:function(e,n){return n=o.extend({ww:!0,tenMin:!0},n),r.CL.call(t,e,n)},encodeB:function(t,n){return n=o.extend({ww:!0},n),r.CL.call(e,t,n)},decodeS:function(){return r.unCL.apply(t,arguments)},decodeB:function(){return r.unCL.apply(e,arguments)},toMoney:function(t,n){return n=o.extend({ww:!0},n),r.toMoney.call(e,t,n)}}}},691:function(t,e){t.exports={ch:"零一二三四五六七八九",ch_u:"个十百千万亿",ch_f:"负",ch_d:"点"}},692:function(t,e){t.exports={ch:"零壹贰叁肆伍陆柒捌玖",ch_u:"个拾佰仟万亿",ch_f:"负",ch_d:"点",m_t:"人民币",m_z:"整",m_u:"元角分"}},693:function(t,e){t.exports={ch:"零一二三四五六七八九",ch_u:"個十百千萬億",ch_f:"負",ch_d:"點"}},694:function(t,e){t.exports={ch:"零壹貳參肆伍陸柒捌玖",ch_u:"個拾佰仟萬億",ch_f:"負",ch_d:"點",m_t:"$",m_z:"整",m_u:"圓角分"}},695:function(t,e,n){"use strict";var r=n(304);n.n(r).a},696:function(t,e,n){(t.exports=n(7)(!1)).push([t.i,'.number_to_zh table{color:#363636;border-collapse:collapse;border-spacing:0;width:100%}.number_to_zh table td{border:.0625rem solid #dbdbdb;padding:.5em .75em}.number_to_zh table td[rowspan="2"]{text-align:center}.number_to_zh table td video{max-width:100%}.number_to_zh .ntz{width:100%}',""])},802:function(t,e,n){"use strict";n.r(e);var r=n(689),o={name:"NumberToZh",head:function(){return this.$store.state.currentTool.head},data:function(){return{number:"",hanzi:"",numResult:""}},computed:{hans:function(){var t=r.cn,e=r.hk,n=this.number;return[{lang:"cn",data:[{name:"中文小写",encode:[t.encodeS(n),t.encodeS(n,{tenMin:!1})]},{name:"中文大写",encode:[t.encodeB(n),t.encodeB(n,{tenMin:!0})]},{name:"金额大写",encode:[t.toMoney(n,{outSymbol:!1}),t.toMoney(n,{outSymbol:!1,complete:!0})]}]},{lang:"hk",data:[{name:"中文小写",encode:[e.encodeS(n),e.encodeS(n,{tenMin:!1})]},{name:"中文大写",encode:[e.encodeB(n),e.encodeB(n,{tenMin:!0})]},{name:"金额大写",encode:[e.toMoney(n,{outSymbol:!1}),e.toMoney(n,{outSymbol:!1,complete:!0})]}]}]}},methods:{isZhNum:function(){if(this.hanzi.length){if(/^负?[零一二三四五六七八九十百千万亿]*点?[零一二三四五六七八九]*$/g.test(this.hanzi))this.numResult=r.cn.decodeS(this.hanzi);else{if(!/^负?[零壹贰叁肆伍陆柒捌玖拾佰仟万亿]*点?[零壹贰叁肆伍陆柒捌玖]*$/g.test(this.hanzi))return void this.$modal.show("dialog",{title:"转换失败",text:"ERROR: 请输入正确的大小写中文数字"});this.numResult=r.cn.decodeB(this.hanzi)}}else this.$modal.show("dialog",{title:"转换失败",text:"ERROR: 你还没有输入"})}}},c=(n(695),n(1)),component=Object(c.a)(o,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"number_to_zh"},[n("nya-container",{attrs:{title:"数字转中文"}},[n("nya-input",{staticClass:"ntz",attrs:{autofocus:"",label:"输入数字开始转换",placeholder:"0",autocomplete:"off",type:"number"},model:{value:t.number,callback:function(e){t.number="string"==typeof e?e.trim():e},expression:"number"}})],1),t._v(" "),""!=t.number?n("nya-container",{attrs:{title:"结果"}},[n("table",[n("tbody",[t._l(t.hans,function(e){return[t._l(e.data,function(r,o){return[n("tr",{key:o+e.lang+"0"},[n("td",{attrs:{rowspan:"2"}},[t._v("\n                                "+t._s("cn"==e.lang?"简体":"繁体")+t._s(r.name)+"\n                            ")]),t._v(" "),n("td",[t._v(t._s(r.encode[0]))])]),t._v(" "),n("tr",{key:o+e.lang+"1"},[n("td",[t._v(t._s(r.encode[1]))])])]})]})],2)])]):t._e(),t._v(" "),n("nya-container",{attrs:{title:"中文转数字"}},[n("div",{staticClass:"inputbtn"},[n("nya-input",{attrs:{label:"输入中文数字开始转换",placeholder:"零",autocomplete:"off",type:"text"},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.isZhNum(e)}},model:{value:t.hanzi,callback:function(e){t.hanzi="string"==typeof e?e.trim():e},expression:"hanzi"}}),t._v(" "),n("button",{staticClass:"nya-btn",attrs:{type:"button"},on:{click:t.isZhNum}},[t._v("\n                开始转换\n            ")])],1)]),t._v(" "),n("nya-container",{directives:[{name:"show",rawName:"v-show",value:t.numResult,expression:"numResult"}],attrs:{title:"转换成功"}},[n("pre",[t._v(t._s(t.numResult))])]),t._v(" "),n("nya-container",{attrs:{title:"Explain"}},[n("ul",{staticClass:"nya-list"},[n("li",[t._v("基于 nzh 把数字转换为大小写中文。")]),t._v(" "),n("li",[t._v("\n                超大数转换中文争议请访问 "),n("a",{attrs:{href:"https://github.com/cnwhy/nzh#nzh",target:"_blank",rel:"noopener noreferrer"}},[t._v("\n                    nzh\n                ")]),t._v("。\n            ")]),t._v(" "),n("li",[t._v("中文转数字仅支持简体大小写汉字。")])])])],1)},[],!1,null,null,null);e.default=component.exports}}]);