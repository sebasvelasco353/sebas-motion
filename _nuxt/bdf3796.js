(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{231:function(t,e,r){t.exports=r.p+"img/separator.fafb83b.svg"},232:function(t,e,r){var map={"./dd.gif":233,"./head.gif":234,"./historiasEnJuego.gif":235,"./separator.svg":231,"./squid.gif":236};function n(t){var e=o(t);return r(e)}function o(t){if(!r.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}n.keys=function(){return Object.keys(map)},n.resolve=o,t.exports=n,n.id=232},233:function(t,e,r){t.exports=r.p+"img/dd.99d8c42.gif"},234:function(t,e,r){t.exports=r.p+"img/head.f5c8fce.gif"},235:function(t,e,r){t.exports=r.p+"img/historiasEnJuego.6473ba0.gif"},236:function(t,e,r){t.exports=r.p+"img/squid.8a4a419.gif"},238:function(t,e,r){var content=r(245);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(32).default)("8cce78a6",content,!0,{sourceMap:!1})},239:function(t,e,r){"use strict";r.r(e);r(243);var n={props:{element:{type:Object,required:!0},index:{type:Number,required:!0}},data:function(t){var e=t.index;return console.log(e),{test:!0}}},o=(r(244),r(22)),component=Object(o.a)(n,(function(){var t=this.$createElement,e=this._self._c||t;return e("nuxt-link",{staticClass:"w-full mx-0 my-12",attrs:{to:""+this.element.path,exact:""}},[e("div",{staticClass:"relative flex items-center justify-center projPreview__container"},[e("img",{staticClass:"m-0 opacity-70 bg",attrs:{src:r(232)("./"+this.element.image),alt:this.element.title}}),this._v(" "),e("p",{staticClass:"absolute z-30 w-full text-3xl break-words text-center"},[this._v(this._s(this.element.title))])])])}),[],!1,null,"45cb9ae9",null);e.default=component.exports},242:function(t,e,r){t.exports=r.p+"videos/Reel_2021.c27f8f3.mp4"},243:function(t,e,r){"use strict";var n=r(11),o=r(4),c=r(78),l=r(14),f=r(12),m=r(33),d=r(168),h=r(76),v=r(5),x=r(79),_=r(110).f,N=r(41).f,w=r(18).f,y=r(170).trim,E=o.Number,I=E.prototype,j="Number"==m(x(I)),C=function(t){var e,r,n,o,c,l,f,code,m=h(t,!1);if("string"==typeof m&&m.length>2)if(43===(e=(m=y(m)).charCodeAt(0))||45===e){if(88===(r=m.charCodeAt(2))||120===r)return NaN}else if(48===e){switch(m.charCodeAt(1)){case 66:case 98:n=2,o=49;break;case 79:case 111:n=8,o=55;break;default:return+m}for(l=(c=m.slice(2)).length,f=0;f<l;f++)if((code=c.charCodeAt(f))<48||code>o)return NaN;return parseInt(c,n)}return+m};if(c("Number",!E(" 0o1")||!E("0b1")||E("+0x1"))){for(var A,O=function(t){var e=arguments.length<1?0:t,r=this;return r instanceof O&&(j?v((function(){I.valueOf.call(r)})):"Number"!=m(r))?d(new E(C(e)),r,O):C(e)},k=n?_(E):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),S=0;k.length>S;S++)f(E,A=k[S])&&!f(O,A)&&w(O,A,N(E,A));O.prototype=I,I.constructor=O,l(o,"Number",O)}},244:function(t,e,r){"use strict";r(238)},245:function(t,e,r){(e=r(31)(!1)).push([t.i,'p[data-v-45cb9ae9]{font-family:"Lato";--tw-text-opacity:1;color:rgba(255,255,255,var(--tw-text-opacity))}',""]),t.exports=e},262:function(t,e,r){"use strict";r.r(e);var n=[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"w-full reel"},[e("video",{attrs:{height:"100%",width:"100%",controls:""}},[e("source",{attrs:{src:r(242),type:"video/mp4"}}),this._v("\n      Tu navegador no tiene soporte para videos.\n    ")])])}],o=(r(30),r(6)),c={components:{projectPreview:r(239).default},asyncData:function(t){return Object(o.a)(regeneratorRuntime.mark((function e(){var r,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$content,e.next=3,r("projects",{deep:!0}).only(["title","image"]).limit(4).sortBy("fecha","desc").fetch();case 3:return n=e.sent,e.abrupt("return",{projects:n});case 5:case"end":return e.stop()}}),e)})))()}},l=r(22),component=Object(l.a)(c,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[this._m(0),this._v(" "),e("h3",[this._v("\n    Sebastián López is an awesome freelance motion designer from Colombia.\n  ")]),this._v(" "),e("img",{staticClass:"mx-auto my-0",attrs:{src:r(231),alt:"Separator images"}}),this._v(" "),e("div",{staticClass:"flex flex-col my-6 projects"},this._l(this.projects,(function(t,r){return e("project-preview",{key:t.slug,attrs:{element:t,index:r}})})),1)])}),n,!1,null,"44364320",null);e.default=component.exports;installComponents(component,{ProjectPreview:r(239).default})}}]);