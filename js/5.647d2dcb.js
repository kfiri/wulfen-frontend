(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[5],{c018:function(e,t,s){},c82d:function(e,t,s){"use strict";s("c018")},de84:function(e,t){e.exports="Here's how to design your own Wulfen! Have fun!\n"},ec28:function(e,t,s){"use strict";s.r(t);var n=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("q-page",[s("div",{staticClass:"text-content row justify-center items-start",staticStyle:{"min-height":"50px"}},[s("p",{staticClass:"col-sm col-11 self-center text-center"},[e._v(e._s(e.designText))])]),s("div",{staticClass:"row justify-center",staticStyle:{width:"100%"}},[s("div",{staticClass:"col-sm-5 col-md-4 col-11 cursor-pointer",on:{click:function(t){e.imageDetails=e.wulfenNonStar}}},[s("q-img",{attrs:{src:e.wulfenNonStar.src}})],1),s("div",{staticClass:"offset-sm-1 col-sm-5 col-md-4 col-11 cursor-pointer",on:{click:function(t){e.imageDetails=e.wulfenStarBound}}},[s("q-img",{attrs:{src:e.wulfenStarBound.src}})],1)]),s("div",{staticClass:"row justify-center",staticStyle:{width:"100%"}},[s("div",{staticClass:"col-sm-5 col-md-4 col-11 cursor-pointer",on:{click:function(t){e.imageDetails=e.wulfenHorns}}},[s("q-img",{attrs:{src:e.wulfenHorns.src}})],1)]),s("q-dialog",{attrs:{"full-width":""},model:{value:e.showImage,callback:function(t){e.showImage=t},expression:"showImage"}},[s("q-card",[e.imageDetails?s("q-card-section",{staticClass:"row items-center q-pb-none"},[s("div",{staticClass:"col-9 col-sm-10 text-h6"},[e._v("\n          "+e._s(e.imageDetails.title)+" - Click to open in a new tab\n        ")]),s("q-space"),s("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{icon:"close",flat:"",round:"",dense:""}})],1):e._e(),e.imageDetails?s("q-card-section",[s("a",{attrs:{href:e.imageDetails.src,target:"_blank"}},[s("q-img",{attrs:{src:e.imageDetails.src}})],1)]):e._e()],1)],1)],1)},a=[],i=s("e4fd"),c=s("de84"),o=s.n(c);const l={wulfenNonStar:{title:"Wulfen (Non Star)",src:"images/design/wulfen-nonstar.jpg"},wulfenStarBound:{title:"Wulfen (Star Bound)",src:"images/design/wulfen-starbound.jpg"},wulfenHorns:{title:"Wulfen Horns",src:"images/design/wulfen-horns.png"}};var r=Object(i["defineComponent"])({name:"WorldPage",setup(){return{designText:o.a}},data(){return Object.assign({imageDetails:null},l)},computed:{showImage:{get(){return null!==this.imageDetails},set(e){this.imageDetails=e||null}}}}),u=r,d=(s("c82d"),s("2877")),f=s("9989"),m=s("068f"),g=s("24e8"),p=s("f09f"),w=s("a370"),h=s("2c91"),v=s("9c40"),b=s("7f67"),C=s("eebe"),S=s.n(C),q=Object(d["a"])(u,n,a,!1,null,"0120b3b0",null);t["default"]=q.exports;S()(q,"components",{QPage:f["a"],QImg:m["a"],QDialog:g["a"],QCard:p["a"],QCardSection:w["a"],QSpace:h["a"],QBtn:v["a"]}),S()(q,"directives",{ClosePopup:b["a"]})}}]);