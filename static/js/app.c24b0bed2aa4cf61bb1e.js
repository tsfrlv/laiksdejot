webpackJsonp([1],{"9Khu":function(e,t){e.exports=[{date:"June 6 and June 7",venue:"Riga Choreography School",time:"10.00-13.00",teacher:"Swee Boon Kuik & T.H.E Dance Company",workshop:"Workshop “Hollow Body”"},{date:"June 8",venue:"Riga Choreography School",time:"10.00-11.30",teacher:"Cai Rang Ren Qing (China)",workshop:"Contemporary Dance Technique"},{date:"June 8",venue:"Riga Choreography School",time:"12.00-13.30",teacher:"Michelle Boulé (USA)",workshop:"Inspired Movement Technique"},{date:"June 9",venue:"NOASS",time:"10.00-11.30",workshop:"Taijiquan morning class"},{date:"June 9",venue:"NOASS",time:"12.00-13.30",teacher:"Michelle Boulé (USA)",workshop:"Art Healing Making Doing Being"},{date:"June 10",venue:"Riga Choreography School",time:"10.00-13.00",teacher:"Eko Suprijanto (Indonesia)",workshop:"Workshop"},{date:"June 10",venue:"Zirgu pasts",time:"21.00",teacher:"Ilze Zīriņa (Latvia)",workshop:"Improvisation Jamsession"},{date:"June 12 - 15",venue:"Latvian Academy of Culture",time:"10.00-12.00",teacher:"Surjit Nongmeikapam (India)",workshop:"Workshop “Ehool” (Impulse)"}]},BmF2:function(e,t){},Cpem:function(e,t){},NHnr:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a("7+uW"),r={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("header",{staticClass:"header"},[t("img",{attrs:{src:a("vnsl"),width:"100%"}})])}]};var i=a("VU/8")({name:"Header"},r,!1,function(e){a("BmF2")},"data-v-9eadbad6",null).exports,s={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("footer",[t("img",{attrs:{src:""}}),this._v("Footer")])}]};var o=a("VU/8")({name:"Footer"},s,!1,function(e){a("vZ6Z")},"data-v-cfb2b84a",null).exports,c=a("9Khu"),u=a.n(c),l={data:function(){return{workshops:u.a}}},v={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("main",[a("ul",{staticClass:"inline"},e._l(e.workshops,function(t,n){return a("li",{staticClass:"workshop"},[a("div",{staticClass:"date"},[e._v("\n        "+e._s(t.date)+"\n      ")]),e._v(" "),a("div",{staticClass:"venue"},[e._v("\n        "+e._s(t.venue)+"\n      ")]),e._v(" "),a("div",{staticClass:"time"},[e._v("\n        "+e._s(t.time)+"\n      ")]),e._v(" "),a("div",{staticClass:"teacher"},[e._v("\n        "+e._s(t.teacher)+"\n      ")]),e._v(" "),a("div",{staticClass:"title"},[e._v("\n        "+e._s(t.workshop)+"\n      ")])])}),0)])},staticRenderFns:[]};var m=a("VU/8")(l,v,!1,function(e){a("thSi")},"data-v-b8ec77e4",null).exports,p={name:"App",components:{SiteHeader:i,SiteFooter:o,SiteWorkshops:m}},d={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("site-header")],1),e._v(" "),a("div",{staticClass:"row content"},[a("div",{staticClass:"col-sm-3"},[a("b-navbar",{attrs:{toggleable:"md",type:"light"}},[a("b-navbar-toggle",{attrs:{target:"nav_collapse"}}),e._v(" "),a("b-collapse",{attrs:{"is-nav":"",id:"nav_collapse"}},[a("b-nav",{attrs:{vertical:""}},[a("b-nav-item",[a("router-link",{attrs:{to:"/date/08-06-2019"}},[e._v("08-06-2019")])],1),e._v(" "),a("b-nav-item",[a("router-link",{attrs:{to:"/date/09-06-2019"}},[e._v("09-06-2019")])],1),e._v(" "),a("b-nav-item",[a("router-link",{attrs:{to:"/date/10-06-2019"}},[e._v("10-06-2019")])],1),e._v(" "),a("b-nav-item",[a("router-link",{attrs:{to:"/date/11-06-2019"}},[e._v("11-06-2019")])],1),e._v(" "),a("b-nav-item",{staticClass:"bg-workshop-menu"},[a("router-link",{attrs:{to:"/workshops"}},[e._v("WORKSHOPS")])],1),e._v(" "),a("br"),e._v(" "),a("br"),e._v(" "),a("b-nav-item",[a("a",{attrs:{href:"./2016/"}},[e._v("2016")])]),e._v(" "),a("b-nav-item",[a("a",{attrs:{href:"./2017/"}},[e._v("2017")])]),e._v(" "),a("b-nav-item",[a("a",{attrs:{href:"./2018/"}},[e._v("2018")])])],1)],1)],1)],1),e._v(" "),a("div",{staticClass:"col"},[a("router-view")],1)]),e._v(" "),a("div",{staticClass:"row"},[a("site-footer")],1)])])},staticRenderFns:[]};var h=a("VU/8")(p,d,!1,function(e){a("x+zU")},null,null).exports,f=a("/ocq"),_=a("nI/b"),C=a.n(_),g={data:function(){return{venues:[],articles:C.a}},mounted:function(){this.loadArticle(this.$route.params.date)},methods:{loadArticle:function(e){var t=this.articles.find(function(t){return t.date===e});this.venues=t?t.venues:"No article"}},watch:{$route:function(e,t){var a=e.params.date;this.loadArticle(a)}}},S={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("main",[a("div",e._l(e.venues,function(t,n){return a("div",{staticClass:"venues"},[a("div",{staticClass:"venue"},[e._v("\n        "+e._s(t.name)+"\n      ")]),e._v(" "),a("div",{staticClass:"time"},[e._v("\n        "+e._s(t.time)+"\n      ")]),e._v(" "),e._l(t.performances,function(t,n){return a("div",{staticClass:"performances"},[a("div",{staticClass:"performer"},[e._v("\n          "+e._s(t.performer)+"\n        ")]),e._v(" "),a("div",{staticClass:"country"},[e._v("\n          "+e._s(t.country)+"\n        ")]),e._v(" "),a("div",{staticClass:"title"},[e._v("\n          "+e._s(t.title)+"\n          "),a("br"),e._v(e._s(t.title2)+"\n        ")])])})],2)}),0)])},staticRenderFns:[]};var b=a("VU/8")(g,S,!1,function(e){a("Cpem")},"data-v-39e2fce4",null).exports;n.default.use(f.a);var k=new f.a({routes:[{path:"/date/:date",component:b},{path:"/workshops",component:m}]}),y=a("e6fC"),w=a.n(y);n.default.config.productionTip=!1,n.default.use(w.a),new n.default({el:"#app",router:k,components:{App:h},template:"<App/>"})},"nI/b":function(e,t){e.exports=[{date:"08-06-2019",venues:[{name:"NOASS",time:"19.00",performances:[{title:"Last Time",performer:"Cai Rang Ren Qing",country:"China"},{title:"Ideal Fe[male]",performer:"Eva Kronberga & Jānis Putniņš",country:"Latvia"}]},{name:"NOASS (AB Dambis)",time:"20.00",performances:[{title:"Invisible Habitudes",performer:"“T.H.E. Dance Company”, Swee Boon Kuik",country:"Singapore"}]},{name:"AB Dambis",time:"21.30",performances:[{title:"Labrys",performer:"Ieva Gaurilčikaite, Krišjānis Sants",country:"Lithuania/Latvia"}]}]},{date:"09-06-2019",venues:[{name:"AB Dambis",time:"07.00 and 18.00",performances:[{title:"Labrys",performer:"Ieva Gaurilčikaite, Krišjānis Sants",country:"Lithuania/Latvia"}]},{name:"NOASS",time:"19.00",performances:[{title:"CHINAME",performer:"Xiao Ke x Zi Han",country:"China"}]},{name:"Zirgu pasts",time:"21.00",performances:[{title:"Trajectory",performer:"Eko Suprijanto",country:"Indonesia"}]}]},{date:"10-06-2019",venues:[{name:"Zirgu pasts",time:"19.00",performances:[{title:"The Monomyth",performer:"Michelle Boulé",country:"USA"}]}]},{date:"11-06-2019",venues:[{name:"NOASS",time:"19.00",performances:[{title:"Dotted Line",title2:"all-in-1",performer:"Surjit Nongmeikapan",country:"India"},{title:"The Lonely Shepard",performer:"Andris Kačanovskis",country:"Latvia"}]}]}]},thSi:function(e,t){},vZ6Z:function(e,t){},vnsl:function(e,t,a){e.exports=a.p+"static/img/poster12.1316313.jpg"},"x+zU":function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.c24b0bed2aa4cf61bb1e.js.map