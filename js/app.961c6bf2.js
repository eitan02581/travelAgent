(function(e){function n(n){for(var t,r,s=n[0],l=n[1],c=n[2],u=0,d=[];u<s.length;u++)r=s[u],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&d.push(i[r][0]),i[r]=0;for(t in l)Object.prototype.hasOwnProperty.call(l,t)&&(e[t]=l[t]);h&&h(n);while(d.length)d.shift()();return o.push.apply(o,c||[]),a()}function a(){for(var e,n=0;n<o.length;n++){for(var a=o[n],t=!0,r=1;r<a.length;r++){var s=a[r];0!==i[s]&&(t=!1)}t&&(o.splice(n--,1),e=l(l.s=a[0]))}return e}var t={},r={1:0},i={1:0},o=[];function s(e){return l.p+"js/"+({}[e]||e)+"."+{2:"d7bb68f2",3:"a019403d",4:"efd95bd9"}[e]+".js"}function l(n){if(t[n])return t[n].exports;var a=t[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,l),a.l=!0,a.exports}l.e=function(e){var n=[],a={2:1};r[e]?n.push(r[e]):0!==r[e]&&a[e]&&n.push(r[e]=new Promise((function(n,a){for(var t="css/"+({}[e]||e)+"."+{2:"499ca323",3:"31d6cfe0",4:"31d6cfe0"}[e]+".css",i=l.p+t,o=document.getElementsByTagName("link"),s=0;s<o.length;s++){var c=o[s],u=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(u===t||u===i))return n()}var d=document.getElementsByTagName("style");for(s=0;s<d.length;s++){c=d[s],u=c.getAttribute("data-href");if(u===t||u===i)return n()}var h=document.createElement("link");h.rel="stylesheet",h.type="text/css",h.onload=n,h.onerror=function(n){var t=n&&n.target&&n.target.src||i,o=new Error("Loading CSS chunk "+e+" failed.\n("+t+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=t,delete r[e],h.parentNode.removeChild(h),a(o)},h.href=i;var g=document.getElementsByTagName("head")[0];g.appendChild(h)})).then((function(){r[e]=0})));var t=i[e];if(0!==t)if(t)n.push(t[2]);else{var o=new Promise((function(n,a){t=i[e]=[n,a]}));n.push(t[2]=o);var c,u=document.createElement("script");u.charset="utf-8",u.timeout=120,l.nc&&u.setAttribute("nonce",l.nc),u.src=s(e);var d=new Error;c=function(n){u.onerror=u.onload=null,clearTimeout(h);var a=i[e];if(0!==a){if(a){var t=n&&("load"===n.type?"missing":n.type),r=n&&n.target&&n.target.src;d.message="Loading chunk "+e+" failed.\n("+t+": "+r+")",d.name="ChunkLoadError",d.type=t,d.request=r,a[1](d)}i[e]=void 0}};var h=setTimeout((function(){c({type:"timeout",target:u})}),12e4);u.onerror=u.onload=c,document.head.appendChild(u)}return Promise.all(n)},l.m=e,l.c=t,l.d=function(e,n,a){l.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:a})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,n){if(1&n&&(e=l(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(l.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var t in e)l.d(a,t,function(n){return e[n]}.bind(null,t));return a},l.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(n,"a",n),n},l.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},l.p="",l.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=n,c=c.slice();for(var d=0;d<c.length;d++)n(c[d]);var h=u;o.push([0,0]),a()})({0:function(e,n,a){e.exports=a("2f39")},"2f39":function(e,n,a){"use strict";a.r(n);a("ddb0"),a("5319"),a("7d6e"),a("e54f"),a("985d"),a("31cd");var t=a("2b0e"),r=a("1f91"),i=a("42d2"),o=a("b05d");t["a"].use(o["a"],{config:{},lang:r["a"],iconSet:i["a"]});var s=function(){var e=this,n=e.$createElement,a=e._self._c||n;return a("div",{attrs:{id:"q-app"}},[a("router-view")],1)},l=[],c={name:"App"},u=c,d=a("2877"),h=Object(d["a"])(u,s,l,!1,null,null,null),g=h.exports,f=a("2f62");t["a"].use(f["a"]);var p=function(){const e=new f["a"].Store({modules:{},strict:!1});return e},m=a("8c4f");const y=[{path:"/",component:()=>Promise.all([a.e(0),a.e(3)]).then(a.bind(null,"713b")),children:[{path:"",component:()=>Promise.all([a.e(0),a.e(2)]).then(a.bind(null,"291e"))}]},{path:"*",component:()=>Promise.all([a.e(0),a.e(4)]).then(a.bind(null,"e51e"))}];var b=y;t["a"].use(m["a"]);var v=function(){const e=new m["a"]({scrollBehavior:()=>({x:0,y:0}),routes:b,mode:"hash",base:""});return e},w=async function(){const e="function"===typeof p?await p({Vue:t["a"]}):p,n="function"===typeof v?await v({Vue:t["a"],store:e}):v;e.$router=n;const a={router:n,store:e,render:e=>e(g),el:"#q-app"};return{app:a,store:e,router:n}},E=a("9483");Object(E["a"])("service-worker.js",{ready(){},registered(){},cached(){},updatefound(){},updated(){},offline(){},error(){}});var x=a("a925"),M={english:"English",francais:"Francais",hebrew:"עברית","outbound flight":"Outbound flights 🛫","other destination flight":"Other destination flights ✈️","inbound flight":"Inbound flights 🛬","together with":"together with",itinerary:"Itinerary🌍","flight desc":"As per your request, you'll find below\nmy proposal for","please pay msg":"Kindly reply to the content of this Whatsapp message\nwith your *Immediate ticketing approval* accordingly.","please pay again msg":"Thanks for replying to this Whatsapp\nproposal with your immediate\nconfirmation.","price may change":"Price may change\nunless tickets were issued!",farewell:"Thanks,\nGad",prices:"Prices",restrictions:"Tickets Restrictions","change restriction":"▪️Change fees",adult:"Adult (+12)",child:"Child (+12)",youth:"Youth",student:"Student",senior:"senior",infant:"Infant (-2)",mon:"Mon.",tue:"Tue.",wed:"Wed.",thu:"Thu.",fri:"Fri.",sat:"Sat.",sun:"Sun.","dpt.":"Dpt.","arr.":"Arr.",shalom:"Shalom!",change:"▪️Change:",cancel:"▪️Cancel:","no show":"▪️No show:",details:"Details:",compartment:"Compartment:",none:"None",baggage:"Baggage",meal:"Meal",attention:"*Attention:*❗",total:"total:",airline:"Airline:","class of travel":"Compartment","combined compartment":"combined compartment","round Trip Fare":"Round Trip Fare","one Way Fare":"One Way Fare","Family fare":"For your convenience, you may \nchoose between one of the \nfollowing *3 family fare levels* \neach of them with its own fare & restrictions! \nplease kindly mention your choice accordingly: \n","Carry-on Baggage":"Shouldn’t exceed \n56 x 36 x 23 cm \n(including handles & wheels)","p. p":"p. p","p. p. = per person":" (p. p. = per person)","(+difference in fare)":" (+difference in fare)","No meal":"No meal","Regular meal":"Regular meal","Kosher meal (KSML)":"Kosher meal (KSML)","Fish meal (FSML)":"Fish meal (FSML)- for passengers who prefer fish as their main dish (when a meat meal is served)","Fruit meal (FPML)":"Fruit meal (FPML)- based on fresh and dried fruit","Pure vegetarian (vegan) meal (VGML)":"Pure vegetarian (vegan) meal (VGML): meal contains no eggs, dairy products or animal products Vegetarian meal that includes dairy products and egg products (VLML)","Vegetarian meal (VLML)":"Vegetarian meal (VLML)- Vegetarian meal that includes dairy products and egg products (VLML)","Low sugar meal (DBML)":"Low sugar meal (DBML)","Reduced gluten meal* (GFML)":"Reduced gluten meal* (GFML)","Low salt meal (LSML)":"Low salt meal (LSML)","Low lactose* meal (NLML)":"Low lactose* meal (NLML)","Mehadrin kosher meal (SKML)":"Mehadrin kosher meal (SKML)","Mehadrin kosher fish (KFML)":"Mehadrin kosher fish (KFML): when a meat meal is served","Mehadrin kosher children’s meal (KCML)":"Mehadrin kosher children’s meal (KCML)","Mehadrin Regal kosher fish meal (RFML)":"Mehadrin Regal kosher fish meal (RFML) when a meat meal is served","Mehadrin Regal kosher children’s meal (KCML":"Mehadrin Regal kosher children’s meal (KCML","Mehadrin Regal kosher vegetarian meal (GVML)":"Mehadrin Regal kosher vegetarian meal (GVML)","option-eco lite":"Eco Lite (restrictive rate) \n","option-eco classic":"Eco Classic (semi-restrictive rate) \n","option-eco flex":"Eco Flex (more flexible rate) \n","eco lite":"Eco Lite (restrictive rate) \nxxx$ x 1 Adult (+12) \nxxx$ x 1 Child (+12) \nxxx$ x 1 Infant (-02) \n👜Hand baggage: 1 x 8kg \n🧳Checked baggage: against a fee \nAdvanced seat reservation: against a fee \nPreferred seating zone: against a fee \n❌Front row seating \n❌Priority boarding/Checkin \n❌Business lounge access \nSnack & beverage: buy on board \n✅e-newspaper \n✅Miles eligible/accumlation \n✅Change/Rebooking \n❌Cancelation/Refund","eco classic":"Eco Classic (semi-restrictive rate) \nxxx$ x 1 Adult (+12) \nxxx$ x 1 Child (+12) \nxxx$ x 1 Infant (-02) \n👜Hand baggage: 1 x 8kg \n🧳Checked baggage: 1 x 23kg \n✅Advanced seat reservation \nPreferred seating zone: against a fee \n❌Front row seating \n❌Priority boarding/Checkin \nBusiness lounge access: against a fee & in off-peak in BRU \nSnack & beverage: buy on board \n✅e-newspaper \n✅Miles eligible/accumlation \n✅Change/Rebooking \n❌Cancelation/Refund","eco flex":"Eco Flex (more flexible rate) \nxxx$ x 1 Adult (+12) \nxxx$ x 1 Child (+12) \nxxx$ x 1 Infant (-02) \n👜Hand baggage: 1 x 8kg \n🧳Checked baggage: 1 x 23kg \n✅Advanced seat reservation \n✅Preferred seating zone \nFront row seating: if available \n✅Priority boarding/Checkin \nBusiness lounge access: against a fee in BRU \nSnack & beverage: buy on board \n✅e-newspaper \n✅Miles eligible/accumlation \n✅Change/Rebooking \nCancelation/Refund: against a fee",airfare:"Airfare","ticket option details":"TICKET*: \n*Itinerary* 🌍\n XXX-XXX /// XXX-XXX \n\n*Carrier* ✈️\n XXXXXX \n\n*Compartment* 💺\n Economy, Business, Premium Cl. \n\n*Airfare* 💲\n 000$ p. p. \n\n*include:* \n 1Checked bag (23 kg) p.p. 🧳 \n Meal 🍴: \n Seat pre selection (standard) \n\n*Attention❗*\n Price may change unless \n ticket was issued!! \n\n⚠️Ticket Restrictions⚠️ \n▪️Change fees: 00$ p. p. \n       (+difference in fare) \n▪️Cancel. fees: 00$ p. p. \n▪️No-Show: Total Loss \n *Ticket issuance⏱️* \n** *Today/Immediate/ Within 24h/48h/72h* **\n\n","seat number":"(Seat XX - )",your:"your","upcoming trip to":"upcoming trip to","total loss":"Total loss","Non Changeable":"Non Changeable","ticket issuance":"Ticket issuance ⏱️",Today:"Today",Immediate:"Immediate","Within 24h":"Within 24h","Within 48h":"Within 48h","Within 72h":"Within 72h","":"","":"","":"","":"","":"","":"","":"","":"","":""},k={english:"English",francais:"Francais",hebrew:"עברית","outbound flight":"Vol aller 🛫","other destination flight":"FR - other destination flight(s) ✈️","inbound flight":"Vol retour 🛬","together with":"avec",itinerary:"itinéraire:","flight desc":"Suite à ta demande,tu trouveras ci-dessus\nma proposition pour le voyage","please pay msg":"Merci SVP d’y répondre avec votre accord sur le contenu en\nvalidant à l’immédiat l’émission de vos billets d’avions conformémen.","please pay again msg":"Merci de repondre en validant a l'immediat\nl'emission du billet aux conditions mentionnées","price may change":"Tarifs non garantis\ntant que billet non emist!",farewell:"Merci,\nGad",prices:"Prix",restrictions:"Restrictions Tarifaires","change restriction":"Changement",adult:"Adulte (+12)",child:"Enfant (+12)",youth:"jeune",student:"Etudiant",senior:"senior",infant:"Bébé (-2)",mon:"Lun",tue:"Mar",wed:"Mer",thu:"Jeu",fri:"Ven",sat:"Sam",sun:"Dim","dpt.":" FR - Dpt.","arr.":" FR - Arr.",shalom:" FR - Shalom!",change:" FR - Change:",cancel:" FR - Cancel:","no show":" FR - No show:",details:" FR - Details:",compartment:" FR - -Compartment:",none:" FR - None",baggage:" FR - -Baggage:",meal:" FR - -Meal:",attention:" FR - *Attention:*❗",total:" FR - total:","class of travel":" FR - class of travel:"},L={english:"HE - English",francais:"HE - Francais",hebrew:"HE - עברית","outbound flight":"טיסות יוצאות 🛫","other destination flight":"HE - other destination flights ✈️","inbound flight":"טיסות נכנסות 🛬","together with":"HE - together with",itinerary:"מסלול","flight desc":"HE - As per your request you'll find below\nmy proposal for your upcoming flight","please pay msg":"HE - Kindly reply to the content of this Whatsapp message\nwith your Immediate ticketing approval accordingly.","please pay again msg":"HE - Thanks for replying to this Whatsapp\nproposal with your immediate\nconfirmation.","price may change":"HE - Price may change\nunless tickets were issued!",farewell:"HE - Thanks,\nGad",prices:"HE - Prices",restrictions:"HE - Tickets Restrictions","change restriction":"HE - Change fees",adult:"HE - Adult (+12)",child:"HE - Child (+12)",youth:"HE - Youth",student:"HE - Student",senior:"HE - senior",infant:"HE - Infant (-2)",mon:"HE - mon",tue:"HE - tue",wed:"HE - wed",thu:"HE - thu",fri:"HE - fri",sat:"HE - sat",sun:"HE - sun","dpt.":" HE -  Dpt.","arr.":" HE -  Arr.",shalom:" HE -  Shalom!",change:" HE -  Change:",cancel:" HE -  Cancel:","no show":" HE -  No show:",details:" HE -  Details:",compartment:" HE -  -Compartment:",none:" HE -  None",baggage:" HE -  -Baggage:",meal:" HE -  -Meal:",attention:" HE -  *Attention:*❗",total:" HE -  total:",airline:" HE - Airline::","class of travel":" HE - class of travel:"},C={"en-us":M,fr:k,he:L};t["a"].use(x["a"]);const F=new x["a"]({locale:"en-us",fallbackLocale:"en-us",messages:C});var H=({app:e})=>{e.i18n=F},R=a("bc3a"),S=a.n(R);t["a"].prototype.$axios=S.a,/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream&&window.navigator.standalone&&a.e(0).then(a.t.bind(null,"a0db",7));const P="";async function A(){const{app:e,store:n,router:a}=await w();let r=!1;const i=e=>{r=!0;const n=Object(e)===e?a.resolve(e).route.fullPath:e;window.location.href=n},o=window.location.href.replace(window.location.origin,""),s=[H,void 0];for(let c=0;!1===r&&c<s.length;c++)if("function"===typeof s[c])try{await s[c]({app:e,router:a,store:n,Vue:t["a"],ssrContext:null,redirect:i,urlPath:o,publicPath:P})}catch(l){return l&&l.url?void(window.location.href=l.url):void console.error("[Quasar] boot error:",l)}!0!==r&&new t["a"](e)}A()},"31cd":function(e,n,a){}});