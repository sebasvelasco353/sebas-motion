(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{250:function(t,e,r){var content=r(258);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(31).default)("4c92f100",content,!0,{sourceMap:!1})},251:function(t,e,r){t.exports=r.p+"img/separator.fafb83b.svg"},252:function(t,e,r){"use strict";r.r(e);r(256);var n={props:{element:{type:Object,required:!0},index:{type:Number,required:!0}},computed:{positionClass:function(){return(this.index+1)%3==0||(this.index+1)%2==0?"row-span-2 _right":"row-span-1 _left"}},data:function(){return{}},mounted:function(){}},o=(r(257),r(23)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nuxt-link",{staticClass:"mx-0 col-span-1",class:t.positionClass,attrs:{to:t.localePath(""+t.element.url),exact:""}},[n("div",{ref:"projectPreview",staticClass:"projPreview__container"},[n("img",{staticClass:"bg",attrs:{src:r(253)("./"+t.element.image),alt:t.element.title}}),t._v(" "),n("p",{staticClass:"absolute z-30 w-full text-3xl text-center break-words"},[t._v(t._s(t.element.title))])])])}),[],!1,null,"6b18ce82",null);e.default=component.exports},253:function(t,e,r){var map={"./footer_icons/dribble.png":176,"./footer_icons/instagram.png":175,"./footer_icons/linkedin.png":177,"./footer_icons/twitch.png":178,"./footer_icons/whatsapp.png":179,"./historias1.gif":254,"./historias2.gif":255,"./separator.svg":251};function n(t){var e=o(t);return r(e)}function o(t){if(!r.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}n.keys=function(){return Object.keys(map)},n.resolve=o,t.exports=n,n.id=253},254:function(t,e,r){t.exports=r.p+"img/historias1.46f9d54.gif"},255:function(t,e,r){t.exports=r.p+"img/historias2.ba87393.gif"},256:function(t,e,r){"use strict";var n=r(13),o=r(6),c=r(67),l=r(16),f=r(14),d=r(39),m=r(121),h=r(88),v=r(4),_=r(68),x=r(120).f,w=r(54).f,y=r(18).f,N=r(180).trim,I=o.Number,E=I.prototype,C="Number"==d(_(E)),j=function(t){var e,r,n,o,c,l,f,code,d=h(t,!1);if("string"==typeof d&&d.length>2)if(43===(e=(d=N(d)).charCodeAt(0))||45===e){if(88===(r=d.charCodeAt(2))||120===r)return NaN}else if(48===e){switch(d.charCodeAt(1)){case 66:case 98:n=2,o=49;break;case 79:case 111:n=8,o=55;break;default:return+d}for(l=(c=d.slice(2)).length,f=0;f<l;f++)if((code=c.charCodeAt(f))<48||code>o)return NaN;return parseInt(c,n)}return+d};if(c("Number",!I(" 0o1")||!I("0b1")||I("+0x1"))){for(var A,k=function(t){var e=arguments.length<1?0:t,r=this;return r instanceof k&&(C?v((function(){E.valueOf.call(r)})):"Number"!=d(r))?m(new I(j(e)),r,k):j(e)},O=n?x(I):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),S=0;O.length>S;S++)f(I,A=O[S])&&!f(k,A)&&y(k,A,w(I,A));k.prototype=E,E.constructor=k,l(o,"Number",k)}},257:function(t,e,r){"use strict";r(250)},258:function(t,e,r){(e=r(30)(!1)).push([t.i,'._left[data-v-6b18ce82]{opacity:0;transform:translateX(-10000px)}._right[data-v-6b18ce82]{opacity:0;transform:translateX(10000px)}.bg[data-v-6b18ce82]{-o-object-fit:cover;object-fit:cover;width:100%;height:100%;margin:0;opacity:.7}.projPreview__container[data-v-6b18ce82]{font-family:"Lato";position:relative;display:flex;align-items:center;justify-content:center;width:100%;height:100%;overflow:hidden;border-radius:1rem;--tw-text-opacity:1;color:rgba(255,255,255,var(--tw-text-opacity))};',""]),t.exports=e},260:function(t,e,r){var content=r(266);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(31).default)("c1bcce5c",content,!0,{sourceMap:!1})},264:function(t,e,r){t.exports=r.p+"videos/Reel_2021.bf04db8.mp4"},265:function(t,e,r){"use strict";r(260)},266:function(t,e,r){(e=r(30)(!1)).push([t.i,"h3[data-v-3f893e12]{padding:0 20%}h1[data-v-3f893e12]{transform:translateX(-10000px)}.home[data-v-3f893e12]{overflow-x:hidden}",""]),t.exports=e},283:function(t,e,r){"use strict";r.r(e);r(20);var n=r(2),o=r(252),c=r(117),l={components:{projectPreview:o.default},asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$content,t.app,e.next=3,r("projects",{deep:!0}).only(["title","thumbnail","url"]).sortBy("fecha","desc").limit(4).fetch();case 3:return n=e.sent,e.abrupt("return",{projects:n});case 5:case"end":return e.stop()}}),e)})))()},mounted:function(){this.$nextTick((function(){c.a.to("h1",{duration:1,x:0})}))},created:function(){window.addEventListener("scroll",this.handleScroll)},destroyed:function(){window.removeEventListener("scroll",this.handleScroll)},methods:{handleScroll:function(){this.scrollAnimation_left(),this.scrollAnimation_right()},scrollAnimation_left:function(){return c.a.to("._left",{x:0,duration:1,opacity:1})},scrollAnimation_right:function(){return c.a.to("._right",{x:0,duration:1,opacity:1})}}},f=(r(265),r(23)),component=Object(f.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("div",{staticClass:"w-full reel"},[n("video",{staticClass:"rounded-2xl",attrs:{height:"100%",width:"100%",controls:"",autoplay:""}},[n("source",{attrs:{src:r(264),type:"video/mp4"}}),t._v("\n      "+t._s(t.$t("no-video"))+" \n    ")])]),t._v(" "),n("h1",{staticClass:"mt-12 text-4xl md:text-6xl md:mt-24"},[t._v("\n    "+t._s(t.$t("index.title"))+"\n  ")]),t._v(" "),n("p"),t._v(" "),n("img",{staticClass:"mx-auto my-52",attrs:{src:r(251),alt:"Separator images"}}),t._v(" "),n("div",{ref:"projectPreview",staticClass:"flex flex-col my-12 md:my-24 projects md:grid md:grid-cols-2 md:grid-rows-auto md:gap-32"})])}),[],!1,null,"3f893e12",null);e.default=component.exports}}]);