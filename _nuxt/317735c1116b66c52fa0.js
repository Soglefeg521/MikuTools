(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{248:function(t,e,n){!function(e){"use strict";var n=function(){return{escape:function(t){return t.replace(/([.*+?^${}()|\[\]\/\\])/g,"\\$1")},parseExtension:e,mimeType:function(t){var n=e(t).toLowerCase();return(o="application/font-woff",{woff:o,woff2:o,ttf:"application/font-truetype",eot:"application/vnd.ms-fontobject",png:"image/png",jpg:"image/jpeg",jpeg:"image/jpeg",gif:"image/gif",tiff:"image/tiff",svg:"image/svg+xml"})[n]||"";var o},dataAsUrl:function(content,t){return"data:"+t+";base64,"+content},isDataUrl:function(t){return-1!==t.search(/^(data:)/)},canvasToBlob:function(canvas){return canvas.toBlob?new Promise(function(t){canvas.toBlob(t)}):function(canvas){return new Promise(function(t){for(var e=window.atob(canvas.toDataURL().split(",")[1]),n=e.length,o=new Uint8Array(n),i=0;i<n;i++)o[i]=e.charCodeAt(i);t(new Blob([o],{type:"image/png"}))})}(canvas)},resolveUrl:function(t,e){var n=document.implementation.createHTMLDocument(),base=n.createElement("base");n.head.appendChild(base);var a=n.createElement("a");return n.body.appendChild(a),base.href=e,a.href=t,a.href},getAndEncode:function(t){var e=3e4;f.impl.options.cacheBust&&(t+=(/\?/.test(t)?"&":"?")+(new Date).getTime());return new Promise(function(n){var o,r=new XMLHttpRequest;if(r.onreadystatechange=function(){if(4!==r.readyState)return;if(200!==r.status)return void(o?n(o):c("cannot fetch resource: "+t+", status: "+r.status));var e=new FileReader;e.onloadend=function(){var content=e.result.split(/,/)[1];n(content)},e.readAsDataURL(r.response)},r.ontimeout=function(){o?n(o):c("timeout of "+e+"ms occured while fetching resource: "+t)},r.responseType="blob",r.timeout=e,r.open("GET",t,!0),r.send(),f.impl.options.imagePlaceholder){var l=f.impl.options.imagePlaceholder.split(/,/);l&&l[1]&&(o=l[1])}function c(t){console.error(t),n("")}})},uid:(t=0,function(){return"u"+("0000"+(Math.random()*Math.pow(36,4)<<0).toString(36)).slice(-4)+t++}),delay:function(t){return function(e){return new Promise(function(n){setTimeout(function(){n(e)},t)})}},asArray:function(t){for(var e=[],n=t.length,i=0;i<n;i++)e.push(t[i]);return e},escapeXhtml:function(t){return t.replace(/#/g,"%23").replace(/\n/g,"%0A")},makeImage:function(t){return new Promise(function(e,n){var image=new Image;image.onload=function(){e(image)},image.onerror=n,image.src=t})},width:function(t){var e=n(t,"border-left-width"),o=n(t,"border-right-width");return t.scrollWidth+e+o},height:function(t){var e=n(t,"border-top-width"),o=n(t,"border-bottom-width");return t.scrollHeight+e+o}};var t;function e(t){var e=/\.([^\.\/]*?)$/g.exec(t);return e?e[1]:""}function n(t,e){var n=window.getComputedStyle(t).getPropertyValue(e);return parseFloat(n.replace("px",""))}}(),o=function(){var t=/url\(['"]?([^'"]+?)['"]?\)/g;return{inlineAll:function(t,n,l){return e(t)?Promise.resolve(t).then(o).then(function(e){var o=Promise.resolve(t);return e.forEach(function(t){o=o.then(function(e){return r(e,t,n,l)})}),o}):Promise.resolve(t)},shouldProcess:e,impl:{readUrls:o,inline:r}};function e(e){return-1!==e.search(t)}function o(e){for(var o,r=[];null!==(o=t.exec(e));)r.push(o[1]);return r.filter(function(t){return!n.isDataUrl(t)})}function r(t,e,o,r){return Promise.resolve(e).then(function(t){return o?n.resolveUrl(t,o):t}).then(r||n.getAndEncode).then(function(data){return n.dataAsUrl(data,n.mimeType(e))}).then(function(o){return t.replace(function(t){return new RegExp("(url\\(['\"]?)("+n.escape(t)+")(['\"]?\\))","g")}(e),"$1"+o+"$3")})}}(),r=function(){return{resolveAll:function(){return t(document).then(function(t){return Promise.all(t.map(function(t){return t.resolve()}))}).then(function(t){return t.join("\n")})},impl:{readAll:t}};function t(){return Promise.resolve(n.asArray(document.styleSheets)).then(function(t){var e=[];return t.forEach(function(t){try{n.asArray(t.cssRules||[]).forEach(e.push.bind(e))}catch(e){console.log("Error while reading CSS rules from "+t.href,e.toString())}}),e}).then(function(t){return t.filter(function(t){return t.type===CSSRule.FONT_FACE_RULE}).filter(function(t){return o.shouldProcess(t.style.getPropertyValue("src"))})}).then(function(e){return e.map(t)});function t(t){return{resolve:function(){var e=(t.parentStyleSheet||{}).href;return o.inlineAll(t.cssText,e)},src:function(){return t.style.getPropertyValue("src")}}}}}(),l=function(){return{inlineAll:function e(r){if(!(r instanceof Element))return Promise.resolve(r);return function(t){var e=t.style.getPropertyValue("background");return e?o.inlineAll(e).then(function(e){t.style.setProperty("background",e,t.style.getPropertyPriority("background"))}).then(function(){return t}):Promise.resolve(t)}(r).then(function(){return r instanceof HTMLImageElement?t(r).inline():Promise.all(n.asArray(r.childNodes).map(function(t){return e(t)}))})},impl:{newImage:t}};function t(element){return{inline:function(t){return n.isDataUrl(element.src)?Promise.resolve():Promise.resolve(element.src).then(t||n.getAndEncode).then(function(data){return n.dataAsUrl(data,n.mimeType(element.src))}).then(function(t){return new Promise(function(e,n){element.onload=e,element.onerror=n,element.src=t})})}}}}(),c={imagePlaceholder:void 0,cacheBust:!1},f={toSvg:h,toPng:function(t,e){return d(t,e||{}).then(function(canvas){return canvas.toDataURL()})},toJpeg:function(t,e){return d(t,e=e||{}).then(function(canvas){return canvas.toDataURL("image/jpeg",e.quality||1)})},toBlob:function(t,e){return d(t,e||{}).then(n.canvasToBlob)},toPixelData:function(t,e){return d(t,e||{}).then(function(canvas){return canvas.getContext("2d").getImageData(0,0,n.width(t),n.height(t)).data})},impl:{fontFaces:r,images:l,util:n,inliner:o,options:{}}};function h(t,e){return function(t){void 0===t.imagePlaceholder?f.impl.options.imagePlaceholder=c.imagePlaceholder:f.impl.options.imagePlaceholder=t.imagePlaceholder;void 0===t.cacheBust?f.impl.options.cacheBust=c.cacheBust:f.impl.options.cacheBust=t.cacheBust}(e=e||{}),Promise.resolve(t).then(function(t){return function(t,filter,e){if(!e&&filter&&!filter(t))return Promise.resolve();return Promise.resolve(t).then(function(t){return t instanceof HTMLCanvasElement?n.makeImage(t.toDataURL()):t.cloneNode(!1)}).then(function(e){return function(t,e,filter){var o=t.childNodes;return 0===o.length?Promise.resolve(e):function(t,e,filter){var n=Promise.resolve();return e.forEach(function(e){n=n.then(function(){return m(e,filter)}).then(function(e){e&&t.appendChild(e)})}),n}(e,n.asArray(o),filter).then(function(){return e})}(t,e,filter)}).then(function(e){return function(t,e){return e instanceof Element?Promise.resolve().then(function(){var source,o;source=window.getComputedStyle(t),o=e.style,source.cssText?o.cssText=source.cssText:function(source,t){n.asArray(source).forEach(function(e){t.setProperty(e,source.getPropertyValue(e),source.getPropertyPriority(e))})}(source,o)}).then(function(){[":before",":after"].forEach(function(element){!function(element){var style=window.getComputedStyle(t,element),content=style.getPropertyValue("content");if(""!==content&&"none"!==content){var o=n.uid();e.className=e.className+" "+o;var r=document.createElement("style");r.appendChild(function(t,element,style){var e="."+t+":"+element,o=style.cssText?function(style){var content=style.getPropertyValue("content");return style.cssText+" content: "+content+";"}(style):function(style){return n.asArray(style).map(function(t){return t+": "+style.getPropertyValue(t)+(style.getPropertyPriority(t)?" !important":"")}).join("; ")+";"}(style);return document.createTextNode(e+"{"+o+"}")}(o,element,style)),e.appendChild(r)}}(element)})}).then(function(){t instanceof HTMLTextAreaElement&&(e.innerHTML=t.value),t instanceof HTMLInputElement&&e.setAttribute("value",t.value)}).then(function(){e instanceof SVGElement&&(e.setAttribute("xmlns","http://www.w3.org/2000/svg"),e instanceof SVGRectElement&&["width","height"].forEach(function(t){var n=e.getAttribute(t);n&&e.style.setProperty(t,n)}))}).then(function(){return e}):e}(t,e)})}(t,e.filter,!0)}).then(v).then(y).then(function(t){e.bgcolor&&(t.style.backgroundColor=e.bgcolor);e.width&&(t.style.width=e.width+"px");e.height&&(t.style.height=e.height+"px");e.style&&Object.keys(e.style).forEach(function(n){t.style[n]=e.style[n]});return t}).then(function(o){return function(t,e,o){return Promise.resolve(t).then(function(t){return t.setAttribute("xmlns","http://www.w3.org/1999/xhtml"),(new XMLSerializer).serializeToString(t)}).then(n.escapeXhtml).then(function(t){return'<foreignObject x="0" y="0" width="100%" height="100%">'+t+"</foreignObject>"}).then(function(foreignObject){return'<svg xmlns="http://www.w3.org/2000/svg" width="'+e+'" height="'+o+'">'+foreignObject+"</svg>"}).then(function(svg){return"data:image/svg+xml;charset=utf-8,"+svg})}(o,e.width||n.width(t),e.height||n.height(t))})}function d(t,e){return h(t,e).then(n.makeImage).then(n.delay(100)).then(function(image){var canvas=function(t){var canvas=document.createElement("canvas");if(canvas.width=e.width||n.width(t),canvas.height=e.height||n.height(t),e.bgcolor){var o=canvas.getContext("2d");o.fillStyle=e.bgcolor,o.fillRect(0,0,canvas.width,canvas.height)}return canvas}(t);return canvas.getContext("2d").drawImage(image,0,0),canvas})}function m(t,filter,e){if(!e&&filter&&!filter(t))return Promise.resolve();return Promise.resolve(t).then(o).then(function(e){return r(t,e,filter)}).then(function(e){return l(t,e)});function o(t){return t instanceof HTMLCanvasElement?n.makeImage(t.toDataURL()):t.cloneNode(!1)}function r(t,e,filter){var o=t.childNodes;return 0===o.length?Promise.resolve(e):function(t,e,filter){var n=Promise.resolve();return e.forEach(function(e){n=n.then(function(){return m(e,filter)}).then(function(e){e&&t.appendChild(e)})}),n}(e,n.asArray(o),filter).then(function(){return e});function r(t,e,filter){var n=Promise.resolve();return e.forEach(function(e){n=n.then(function(){return m(e,filter)}).then(function(e){e&&t.appendChild(e)})}),n}}function l(t,e){return e instanceof Element?Promise.resolve().then(function(){!function(source,t){source.cssText?t.cssText=source.cssText:function(source,t){n.asArray(source).forEach(function(e){t.setProperty(e,source.getPropertyValue(e),source.getPropertyPriority(e))})}(source,t)}(window.getComputedStyle(t),e.style)}).then(function(){[":before",":after"].forEach(function(element){!function(element){var style=window.getComputedStyle(t,element),content=style.getPropertyValue("content");if(""===content||"none"===content)return;var o=n.uid();e.className=e.className+" "+o;var r=document.createElement("style");r.appendChild(function(t,element,style){var e="."+t+":"+element,o=style.cssText?function(style){var content=style.getPropertyValue("content");return style.cssText+" content: "+content+";"}(style):function(style){return n.asArray(style).map(function(t){return t+": "+style.getPropertyValue(t)+(style.getPropertyPriority(t)?" !important":"")}).join("; ")+";"}(style);return document.createTextNode(e+"{"+o+"}")}(o,element,style)),e.appendChild(r)}(element)})}).then(function(){t instanceof HTMLTextAreaElement&&(e.innerHTML=t.value);t instanceof HTMLInputElement&&e.setAttribute("value",t.value)}).then(function(){if(!(e instanceof SVGElement))return;if(e.setAttribute("xmlns","http://www.w3.org/2000/svg"),!(e instanceof SVGRectElement))return;["width","height"].forEach(function(t){var n=e.getAttribute(t);n&&e.style.setProperty(t,n)})}).then(function(){return e}):e;function o(){function o(source,t){if(source.cssText)t.cssText=source.cssText;else e(source,t);function e(source,t){n.asArray(source).forEach(function(e){t.setProperty(e,source.getPropertyValue(e),source.getPropertyPriority(e))})}}o(window.getComputedStyle(t),e.style)}function r(){function o(element){var style=window.getComputedStyle(t,element),content=style.getPropertyValue("content");if(content===""||content==="none")return;var o=n.uid();e.className=e.className+" "+o;var r=document.createElement("style");function l(t,element,style){var e="."+t+":"+element,o=style.cssText?r(style):l(style);return document.createTextNode(e+"{"+o+"}");function r(style){var content=style.getPropertyValue("content");return style.cssText+" content: "+content+";"}function l(style){return n.asArray(style).map(t).join("; ")+";";function t(t){return t+": "+style.getPropertyValue(t)+(style.getPropertyPriority(t)?" !important":"")}}}r.appendChild(l(o,element,style)),e.appendChild(r)}[":before",":after"].forEach(function(element){o(element)})}function l(){if(t instanceof HTMLTextAreaElement)e.innerHTML=t.value;if(t instanceof HTMLInputElement)e.setAttribute("value",t.value)}function c(){if(!(e instanceof SVGElement))return;if(e.setAttribute("xmlns","http://www.w3.org/2000/svg"),!(e instanceof SVGRectElement))return;["width","height"].forEach(function(t){var n=e.getAttribute(t);if(!n)return;e.style.setProperty(t,n)})}}}function v(t){return r.resolveAll().then(function(e){var n=document.createElement("style");return t.appendChild(n),n.appendChild(document.createTextNode(e)),t})}function y(t){return l.inlineAll(t).then(function(){return t})}t.exports=f}()},251:function(t,e){t.exports=function(t,e){var a=document.createElement("a");a.href=t,a.download=e,a.click()}},263:function(t,e,n){t.exports=n.p+"img/091c7e8.png"},327:function(t,e,n){var content=n(755);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(8).default)("9e4d8bee",content,!0,{sourceMap:!1})},754:function(t,e,n){"use strict";var o=n(327);n.n(o).a},755:function(t,e,n){(t.exports=n(7)(!1)).push([t.i,'@font-face{font-family:Oswald;font-style:normal;font-weight:400;src:local("Oswald Regular"),local("Oswald-Regular"),url(https://fonts.gstatic.com/s/oswald/v16/TK3iWkUHHAIjg752HT8Ghe4.woff2) format("woff2");unicode-range:U+0400-045f,U+0490-0491,U+04b0-04b1,U+2116}@font-face{font-family:Oswald;font-style:normal;font-weight:400;src:local("Oswald Regular"),local("Oswald-Regular"),url(https://fonts.gstatic.com/s/oswald/v16/TK3iWkUHHAIjg752Fj8Ghe4.woff2) format("woff2");unicode-range:U+0102-0103,U+0110-0111,U+1ea0-1ef9,U+20ab}@font-face{font-family:Oswald;font-style:normal;font-weight:400;src:local("Oswald Regular"),local("Oswald-Regular"),url(https://fonts.gstatic.com/s/oswald/v16/TK3iWkUHHAIjg752Fz8Ghe4.woff2) format("woff2");unicode-range:U+0100-024f,U+0259,U+1e??,U+2020,U+20a0-20ab,U+20ad-20cf,U+2113,U+2c60-2c7f,U+a720-a7ff}@font-face{font-family:Oswald;font-style:normal;font-weight:400;src:local("Oswald Regular"),local("Oswald-Regular"),url(https://fonts.gstatic.com/s/oswald/v16/TK3iWkUHHAIjg752GT8G.woff2) format("woff2");unicode-range:U+00??,U+0131,U+0152-0153,U+02bb-02bc,U+02c6,U+02da,U+02dc,U+2000-206f,U+2074,U+20ac,U+2122,U+2191,U+2193,U+2212,U+2215,U+feff,U+fffd}.youtube_logo .logo{overflow:auto;background-color:#fff;border:.0625rem solid var(--t1);border-radius:5px;border-radius:.3125rem;text-align:center}.youtube_logo .logo .box{background-color:#fff;padding:1.875rem 2.1875rem;white-space:nowrap;font-size:0;margin:0 auto;display:inline-block;font-family:Oswald,sans-serif,Microsoft YaHei}.youtube_logo .logo .box .pl{visibility:hidden}.youtube_logo .logo .box .l,.youtube_logo .logo .box .r{display:inline-block;white-space:nowrap;font-size:60px;font-size:3.75rem}.youtube_logo .logo .box .l{color:#090909;margin-right:.9375rem}.youtube_logo .logo .box .r{z-index:1;position:relative;background-color:#e62117;color:#fff;padding:.5rem .9375rem .9375rem;box-sizing:border-box;font-weight:700;border-radius:60px;border-radius:3.75rem}.youtube_logo .logo .box .r span{display:block;min-width:90px;min-width:5.625rem}.youtube_logo .logo .box .r .lb,.youtube_logo .logo .box .r .lt,.youtube_logo .logo .box .r .rb,.youtube_logo .logo .box .r .rt{z-index:-1;position:absolute;height:calc(50% + 1px);height:calc(50% + .0625rem);pointer-events:none}.youtube_logo .logo .box .r .lb{-webkit-transform:rotate(180deg) scaleX(-1);transform:rotate(180deg) scaleX(-1)}.youtube_logo .logo .box .r .rb{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.youtube_logo .logo .box .r .rt{-webkit-transform:rotate(180deg) scaleY(-1);transform:rotate(180deg) scaleY(-1)}.youtube_logo .logo .box .r .lb,.youtube_logo .logo .box .r .lt{left:-10px;left:-.625rem}.youtube_logo .logo .box .r .rb,.youtube_logo .logo .box .r .rt{right:-10px;right:-.625rem}.youtube_logo .logo .box .r .lt,.youtube_logo .logo .box .r .rt{top:0}.youtube_logo .logo .box .r .lb,.youtube_logo .logo .box .r .rb{bottom:0}.youtube_logo .logo.transparent .box{background-color:transparent}.youtube_logo .nya-checkbox{display:block;margin-top:.9375rem}.youtube_logo .nya-btn,.youtube_logo .nya-subtitle{margin-top:.9375rem}.youtube_logo img{max-width:100%}',""])},784:function(t,e,n){"use strict";n.r(e);var o;n(252);o=n(253);var r=n(248),l=n(251),c={name:"YoutubeLogo",head:function(){return this.$store.state.currentTool.head},components:{VueSlider:o},data:function(){return{content:"",results:"",fontSize:70,transparent:!1,requestIn:!1}},methods:{convert:function(){var t=this;this.requestIn=!0,r.toPng(this.$refs.preview).then(function(e){t.results=e,t.requestIn=!1,l(e,"logo.png")}).catch(function(e){t.requestIn=!1,t.$modal.show("dialog",{title:"生成失败",text:"ERROR: ".concat(e)})})}}},f=(n(754),n(1)),component=Object(f.a)(c,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"youtube_logo"},[o("nya-container",{attrs:{title:"YouTube 风格Logo生成"}},[o("div",{staticClass:"nya-subtitle"},[t._v("\n            点击下面的文字开始编辑\n        ")]),t._v(" "),o("div",{staticClass:"logo",class:{transparent:t.transparent}},[o("div",{ref:"preview",staticClass:"box"},[o("div",{staticClass:"l",style:{"font-size":t.fontSize+"px"},attrs:{contenteditable:"true"},domProps:{textContent:t._s("You")}}),t._v(" "),o("div",{staticClass:"r",style:{"font-size":t.fontSize+"px","border-radius":t.fontSize+"px"}},[o("span",{attrs:{contenteditable:"true"},domProps:{textContent:t._s("Tube")}}),t._v(" "),o("img",{staticClass:"lt",attrs:{src:n(263),alt:"lt"}}),t._v(" "),o("img",{staticClass:"lb",attrs:{src:n(263),alt:"lb"}}),t._v(" "),o("img",{staticClass:"rt",attrs:{src:n(263),alt:"rt"}}),t._v(" "),o("img",{staticClass:"rb",attrs:{src:n(263),alt:"rb"}})])])]),t._v(" "),o("div",{staticClass:"nya-subtitle"},[t._v("\n            文字大小\n        ")]),t._v(" "),o("no-ssr",[o("vue-slider",{attrs:{lazy:"",min:60,max:200},model:{value:t.fontSize,callback:function(e){t.fontSize=e},expression:"fontSize"}})],1),t._v(" "),o("nya-checkbox",{attrs:{label:"使用透明背景"},model:{value:t.transparent,callback:function(e){t.transparent=e},expression:"transparent"}}),t._v(" "),o("div",{staticClass:"nya-btn",on:{click:t.convert}},[t._v("\n            "+t._s(t.requestIn?"生成中":"立即生成")+"\n        ")])],1),t._v(" "),t.results?o("nya-container",{attrs:{title:"生成成功"}},[o("img",{attrs:{src:t.results,alt:"results"}})]):t._e(),t._v(" "),o("nya-container",{attrs:{title:"Explain"}},[o("ul",{staticClass:"nya-list"},[o("li",[o("b",[o("nuxt-link",{attrs:{to:"/tools/pornhub_logo"}},[t._v("点这里切换为Pornhub 风格制作")])],1)]),t._v(" "),o("li",[t._v("如果生成时间过长或生成失败，请使用其他浏览器，推荐使用 Chrome")]),t._v(" "),o("li",[t._v("由于某些原因，圆角可能不太平滑，如果你是开发者有更好的方案可以联系我")])])])],1)},[],!1,null,null,null);e.default=component.exports}}]);