(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[2],{3496:function(t,e,i){"use strict";i("c428")},"713b":function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("q-layout",{attrs:{view:"lhh Lpr lFf"}},[i("q-header",{attrs:{elevated:"",reveal:""}},[i("div",{staticClass:"row justify-center"},[i("q-toolbar",{staticClass:"col-12 col-sm-11 col-md-8  row"},[i("div",{staticClass:"xs"},[i("q-btn",{attrs:{flat:"",dense:"",round:"",icon:"menu","aria-label":"Menu"},on:{click:function(e){t.leftDrawerOpen=!t.leftDrawerOpen}}})],1),i("q-toolbar-title",{staticClass:"col-12 col-sm-3",attrs:{shrink:""}},[t._v("Wulfen")]),i("div",{staticClass:"gt-xs col-12 col-sm  text-center"},[i("q-btn-dropdown",{attrs:{"auto-close":"",stretch:"",flat:"",label:"Lore"}},[i("q-list",[i("q-item",{attrs:{clickable:""},on:{click:function(e){return t.navigate("/lore/introduction")}}},[i("q-item-section",[t._v("Intoduction")])],1),i("q-item",{attrs:{clickable:""},on:{click:function(e){return t.navigate("/lore/heraldic-tribes")}}},[i("q-item-section",[t._v("Heraldic Tribes")])],1),i("q-item",{attrs:{clickable:""},on:{click:function(e){return t.navigate("/lore/shard-of-the-cosmos")}}},[i("q-item-section",[t._v("Shard of the Cosmos")])],1),i("q-item",{attrs:{clickable:""},on:{click:function(e){return t.navigate("/lore/birth-of-magic")}}},[i("q-item-section",[t._v("Birth of Magic")])],1)],1)],1),i("q-btn-dropdown",{attrs:{"auto-close":"",stretch:"",flat:"",label:"World"}},[i("q-list",[i("q-item",{attrs:{clickable:""},on:{click:function(e){return t.navigate("/world/currency")}}},[i("q-item-section",[t._v("Currency")])],1),i("q-item",{attrs:{clickable:""},on:{click:function(e){return t.navigate("/world/flora")}}},[i("q-item-section",[t._v("Flora")])],1),i("q-item",{attrs:{clickable:""},on:{click:function(e){return t.navigate("/world/fauna")}}},[i("q-item-section",[t._v("Fauna")])],1)],1)],1),i("q-btn",{attrs:{unelevated:"",stretch:""},on:{click:function(e){return t.navigate("/design")}}},[t._v("Design")])],1),i("div",{staticClass:"gt-xs col-1 col-sm-2 col-md-3"})],1)],1)]),i("q-drawer",{attrs:{overlay:""},model:{value:t.leftDrawerOpen,callback:function(e){t.leftDrawerOpen=e},expression:"leftDrawerOpen"}},[i("q-list",[i("q-item-label",{staticClass:"text-grey-8",attrs:{header:""}},[t._v("\n        Navigation\n      ")]),i("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{clickable:"",active:t.$route.path.startsWith("/lore"),"active-class":"navigation-link"},on:{click:function(e){t.loreNavsOpen=!t.loreNavsOpen}}},[i("q-item-section",[t._v("Lore")])],1),i("q-slide-transition",[i("div",{directives:[{name:"show",rawName:"v-show",value:t.loreNavsOpen,expression:"loreNavsOpen"}]},[i("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{clickable:"","inset-level":.5,active:t.$route.path.startsWith("/lore/introduction"),"active-class":"sub-navigation-link"},on:{click:function(e){return t.navigate("/lore/introduction")}}},[i("q-item-section",[t._v("Intoduction")])],1),i("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{clickable:"","inset-level":.5,active:t.$route.path.startsWith("/lore/heraldic-tribes"),"active-class":"sub-navigation-link"},on:{click:function(e){return t.navigate("/lore/heraldic-tribes")}}},[i("q-item-section",[t._v("Heraldic Tribes")])],1),i("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{clickable:"","inset-level":.5,active:t.$route.path.startsWith("/lore/shard-of-the-cosmos"),"active-class":"sub-navigation-link"},on:{click:function(e){return t.navigate("/lore/shard-of-the-cosmos")}}},[i("q-item-section",[t._v("Shard of the Cosmos")])],1),i("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{clickable:"","inset-level":.5,active:t.$route.path.startsWith("/lore/birth-of-magic"),"active-class":"sub-navigation-link"},on:{click:function(e){return t.navigate("/lore/birth-of-magic")}}},[i("q-item-section",[t._v("Birth of Magic")])],1)],1)]),i("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{clickable:"",active:t.$route.path.startsWith("/world"),"active-class":"navigation-link"},on:{click:function(e){t.worldNavsOpen=!t.worldNavsOpen}}},[i("q-item-section",[t._v("World")])],1),i("q-slide-transition",[i("div",{directives:[{name:"show",rawName:"v-show",value:t.worldNavsOpen,expression:"worldNavsOpen"}]},[i("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{clickable:"","inset-level":.5,active:t.$route.path.startsWith("/world/currency"),"active-class":"sub-navigation-link"},on:{click:function(e){return t.navigate("/world/currency")}}},[i("q-item-section",[t._v("Currency")])],1),i("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{clickable:"","inset-level":.5,active:t.$route.path.startsWith("/world/flora"),"active-class":"sub-navigation-link"},on:{click:function(e){return t.navigate("/world/flora")}}},[i("q-item-section",[t._v("Flora")])],1),i("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{clickable:"","inset-level":.5,active:t.$route.path.startsWith("/world/fauna"),"active-class":"sub-navigation-link"},on:{click:function(e){return t.navigate("/world/fauna")}}},[i("q-item-section",[t._v("Fauna")])],1)],1)]),i("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{clickable:"",active:t.$route.path.startsWith("/design"),"active-class":"navigation-link"},on:{click:function(e){return t.navigate("/design")}}},[i("q-item-section",[t._v("Design")])],1),i("q-item-label",{staticClass:"text-grey-8",attrs:{header:""}},[t._v("\n        External Links\n      ")]),t._l(t.essentialLinks,(function(e){return i("EssentialLink",t._b({key:e.title},"EssentialLink",e,!1))}))],2)],1),i("q-page-container",[i("router-view")],1),i("q-footer",{staticClass:"bg-grey-8 text-white"},[i("q-toolbar",[i("q-toolbar-title",{staticClass:"gt-xs",attrs:{shrink:""}},[i("q-avatar",[i("q-icon",{staticStyle:{"font-size":"2em"},attrs:{name:"info"}})],1),t._v("\n        Legal\n      ")],1),i("p",[t._v(t._s(t.legalText.trim()))]),i("q-space"),i("div",{staticClass:"row"},t._l(t.essentialLinks,(function(t){return i("a",{key:t.title,attrs:{href:t.link}},[i("q-btn",{attrs:{flat:"",avatar:""}},[i("q-icon",{attrs:{name:t.icon}})],1)],1)})),0)],1)],1)],1)},n=[],r=i("e4fd"),l=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("q-item",{attrs:{clickable:"",tag:"a",target:"_blank",href:t.link}},[t.icon?i("q-item-section",{attrs:{avatar:""}},[i("q-icon",{style:{color:t.color||"white"},attrs:{name:t.icon}})],1):t._e(),i("q-item-section",[i("q-item-label",[t._v(t._s(t.title))]),i("q-item-label",{attrs:{caption:""}},[t._v("\n      "+t._s(t.caption)+"\n    ")])],1)],1)},c=[],o=Object(r["defineComponent"])({name:"EssentialLink",props:{title:{type:String,required:!0},caption:{type:String,default:""},link:{type:String,default:"#"},icon:{type:String,default:""},color:{type:String,default:"white"}}}),s=o,v=i("2877"),u=i("66e5"),p=i("4074"),m=i("0016"),d=i("0170"),f=i("eebe"),b=i.n(f),h=Object(v["a"])(s,l,c,!1,null,null,null),w=h.exports;b()(h,"components",{QItem:u["a"],QItemSection:p["a"],QIcon:m["a"],QItemLabel:d["a"]});var k=i("fe89"),q=i.n(k);const g=[{title:"Twitter",caption:"twitter.com/WulfenSol",icon:"fab fa-twitter",link:"https://twitter.com/WulfenSol",color:"#1da1f2"},{title:"Twitch",caption:"www.twitch.tv/wulfensol",icon:"fab fa-twitch",link:"https://www.twitch.tv/wulfensol",color:"#6441a5"},{title:"Discord",caption:"",icon:"fab fa-discord",link:"https://discord.gg/BZYPSS4",color:"#7289da"}];var _=Object(r["defineComponent"])({name:"MainLayout",components:{EssentialLink:w},setup(){const t=Object(r["ref"])(!1),e=Object(r["ref"])(g),i=Object(r["ref"])(!1),a=Object(r["ref"])(!1);return{leftDrawerOpen:t,essentialLinks:e,legalText:q.a,loreNavsOpen:i,worldNavsOpen:a}},methods:{navigate(t){this.loreNavsOpen=!1,this.worldNavsOpen=!1,this.$router.push(t).catch((t=>{if("NavigationDuplicated"!==t.name)throw t}))}}}),N=_,O=(i("3496"),i("4d5a")),y=i("e359"),Q=i("65c6"),x=i("9c40"),C=i("6ac5"),L=i("2c91"),S=i("429b"),W=i("f20b"),$=i("1c1c"),D=i("7867"),T=i("9404"),I=i("e9c1"),j=i("09e3"),E=i("7ff0"),F=i("cb32"),B=i("714f"),M=Object(v["a"])(N,a,n,!1,null,"301f7297",null);e["default"]=M.exports;b()(M,"components",{QLayout:O["a"],QHeader:y["a"],QToolbar:Q["a"],QBtn:x["a"],QToolbarTitle:C["a"],QSpace:L["a"],QTabs:S["a"],QBtnDropdown:W["a"],QList:$["a"],QItem:u["a"],QItemSection:p["a"],QRouteTab:D["a"],QDrawer:T["a"],QItemLabel:d["a"],QSlideTransition:I["a"],QPageContainer:j["a"],QFooter:E["a"],QAvatar:F["a"],QIcon:m["a"]}),b()(M,"directives",{Ripple:B["a"]})},c428:function(t,e,i){},fe89:function(t,e){t.exports="Sol created everything (except for the art)!\ncopyright lololololol\n"}}]);