(function(e){function n(n){for(var t,i,s=n[0],l=n[1],c=n[2],d=0,h=[];d<s.length;d++)i=s[d],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&h.push(r[i][0]),r[i]=0;for(t in l)Object.prototype.hasOwnProperty.call(l,t)&&(e[t]=l[t]);g&&g(n);while(h.length)h.shift()();return o.push.apply(o,c||[]),a()}function a(){for(var e,n=0;n<o.length;n++){for(var a=o[n],t=!0,i=1;i<a.length;i++){var s=a[i];0!==r[s]&&(t=!1)}t&&(o.splice(n--,1),e=l(l.s=a[0]))}return e}var t={},i={1:0},r={1:0},o=[];function s(e){return l.p+"js/"+({}[e]||e)+"."+{2:"a5aea478",3:"a019403d",4:"efd95bd9"}[e]+".js"}function l(n){if(t[n])return t[n].exports;var a=t[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,l),a.l=!0,a.exports}l.e=function(e){var n=[],a={2:1};i[e]?n.push(i[e]):0!==i[e]&&a[e]&&n.push(i[e]=new Promise((function(n,a){for(var t="css/"+({}[e]||e)+"."+{2:"54cb7de2",3:"31d6cfe0",4:"31d6cfe0"}[e]+".css",r=l.p+t,o=document.getElementsByTagName("link"),s=0;s<o.length;s++){var c=o[s],d=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(d===t||d===r))return n()}var h=document.getElementsByTagName("style");for(s=0;s<h.length;s++){c=h[s],d=c.getAttribute("data-href");if(d===t||d===r)return n()}var g=document.createElement("link");g.rel="stylesheet",g.type="text/css",g.onload=n,g.onerror=function(n){var t=n&&n.target&&n.target.src||r,o=new Error("Loading CSS chunk "+e+" failed.\n("+t+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=t,delete i[e],g.parentNode.removeChild(g),a(o)},g.href=r;var u=document.getElementsByTagName("head")[0];u.appendChild(g)})).then((function(){i[e]=0})));var t=r[e];if(0!==t)if(t)n.push(t[2]);else{var o=new Promise((function(n,a){t=r[e]=[n,a]}));n.push(t[2]=o);var c,d=document.createElement("script");d.charset="utf-8",d.timeout=120,l.nc&&d.setAttribute("nonce",l.nc),d.src=s(e);var h=new Error;c=function(n){d.onerror=d.onload=null,clearTimeout(g);var a=r[e];if(0!==a){if(a){var t=n&&("load"===n.type?"missing":n.type),i=n&&n.target&&n.target.src;h.message="Loading chunk "+e+" failed.\n("+t+": "+i+")",h.name="ChunkLoadError",h.type=t,h.request=i,a[1](h)}r[e]=void 0}};var g=setTimeout((function(){c({type:"timeout",target:d})}),12e4);d.onerror=d.onload=c,document.head.appendChild(d)}return Promise.all(n)},l.m=e,l.c=t,l.d=function(e,n,a){l.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:a})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,n){if(1&n&&(e=l(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(l.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var t in e)l.d(a,t,function(n){return e[n]}.bind(null,t));return a},l.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(n,"a",n),n},l.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},l.p="",l.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],d=c.push.bind(c);c.push=n,c=c.slice();for(var h=0;h<c.length;h++)n(c[h]);var g=d;o.push([0,0]),a()})({0:function(e,n,a){e.exports=a("2f39")},"2f39":function(e,n,a){"use strict";a.r(n);a("ddb0"),a("5319"),a("7d6e"),a("e54f"),a("985d"),a("31cd");var t=a("2b0e"),i=a("1f91"),r=a("42d2"),o=a("b05d");t["a"].use(o["a"],{config:{},lang:i["a"],iconSet:r["a"]});var s=function(){var e=this,n=e.$createElement,a=e._self._c||n;return a("div",{attrs:{id:"q-app"}},[a("router-view")],1)},l=[],c={name:"App"},d=c,h=a("2877"),g=Object(h["a"])(d,s,l,!1,null,null,null),u=g.exports,m=a("2f62");t["a"].use(m["a"]);var p=function(){const e=new m["a"].Store({modules:{},strict:!1});return e},f=a("8c4f");const b=[{path:"/",component:()=>Promise.all([a.e(0),a.e(3)]).then(a.bind(null,"713b")),children:[{path:"",component:()=>Promise.all([a.e(0),a.e(2)]).then(a.bind(null,"291e"))}]},{path:"*",component:()=>Promise.all([a.e(0),a.e(4)]).then(a.bind(null,"e51e"))}];var k=b;t["a"].use(f["a"]);var x=function(){const e=new f["a"]({scrollBehavior:()=>({x:0,y:0}),routes:k,mode:"hash",base:""});return e},M=async function(){const e="function"===typeof p?await p({Vue:t["a"]}):p,n="function"===typeof x?await x({Vue:t["a"],store:e}):x;e.$router=n;const a={router:n,store:e,render:e=>e(u),el:"#q-app"};return{app:a,store:e,router:n}},L=a("9483");Object(L["a"])("service-worker.js",{ready(){},registered(){},cached(){},updatefound(){},updated(){},offline(){},error(){}});var C=a("a925"),y={english:"English",francais:"Francais",hebrew:"עברית","outbound flight":"Outbound flights 🛫","other destination flight":"Other destination flights ✈️","inbound flight":"Inbound flights 🛬","together with":"together with",itinerary:"Itinerary 🌍","flight desc":"As per your request, you'll find below\nmy proposal for","please pay msg":"Kindly reply to the content of this WhatAapp message with your *Immediate ticketing approval* accordingly.","please pay again msg":"Thanks for replying to this WhatsApp\nproposal with your immediate\nconfirmation.","price may change":"Price may change\nunless tickets were issued!",farewell:"Thanks,\nGad",prices:"Prices",restrictions:"Tickets Restrictions","change restriction":"▪️ Change fees",adult:"Adult (+12)",child:"Child (-12)",youth:"Youth",student:"Student",senior:"senior",infant:"Infant (-2)",mon:"Mon.",tue:"Tue.",wed:"Wed.",thu:"Thu.",fri:"Fri.",sat:"Sat.",sun:"Sun.","dpt.":"Dpt.","arr.":"Arr.",shalom:"Shalom!",change:"▪️ Change:",cancel:"▪️ Cancel:","no show":"▪️ No show:",details:"Details:",compartment:"Compartment:",none:"None",baggage:"Baggage Allowance",meal:"Meal",attention:"*Attention:*❗",total:"total:",airline:"Airline:","class of travel":"Compartment","combined compartment":"combined compartment","round Trip Fare":"Round Trip Fare","one Way Fare":"One Way Fare","Family fare":"For your convenience, you may \nchoose between one of the \nfollowing *3 family fare levels* \neach of them with its own fare & restrictions! \nplease kindly mention your choice accordingly: \n","Carry-on Baggage":"Shouldn’t exceed \n56 x 36 x 23 cm \n(including handles & wheels)","p. p.":"p. p.","p. p. = per person":" (p. p. = per person)","(+difference in fare)":" (+difference in fare)","No meal":"No meal","Regular meal":"Regular meal","Kosher meal (KSML)":"Kosher meal (KSML)","Fish meal (FSML)":"Fish meal (FSML)- for passengers who prefer fish as their main dish (when a meat meal is served)","Fruit meal (FPML)":"Fruit meal (FPML)- based on fresh and dried fruit","Pure vegetarian (vegan) meal (VGML)":"Pure vegetarian (vegan) meal (VGML): meal contains no eggs, dairy products or animal products Vegetarian meal that includes dairy products and egg products (VLML)","Vegetarian meal (VLML)":"Vegetarian meal (VLML)- Vegetarian meal that includes dairy products and egg products (VLML)","Low sugar meal (DBML)":"Low sugar meal (DBML)","Reduced gluten meal* (GFML)":"Reduced gluten meal* (GFML)","Low salt meal (LSML)":"Low salt meal (LSML)","Low lactose* meal (NLML)":"Low lactose* meal (NLML)","Mehadrin kosher meal (SKML)":"Mehadrin kosher meal (SKML)","Mehadrin kosher fish (KFML)":"Mehadrin kosher fish (KFML): when a meat meal is served","Mehadrin kosher children’s meal (KCML)":"Mehadrin kosher children’s meal (KCML)","Mehadrin Regal kosher fish meal (RFML)":"Mehadrin Regal kosher fish meal (RFML) when a meat meal is served","Mehadrin Regal kosher children’s meal (KCML":"Mehadrin Regal kosher children’s meal (KCML","Mehadrin Regal kosher vegetarian meal (GVML)":"Mehadrin Regal kosher vegetarian meal (GVML)","option-eco lite":"Eco Lite (restrictive rate) \n","option-eco classic":"Eco Classic (semi-restrictive rate) \n","option-eco flex":"Eco Flex (more flexible rate) \n","eco lite":"Eco Lite (restrictive rate) \nxxx$ x 1 Adult (+12) \nxxx$ x 1 Child (-12) \nxxx$ x 1 Infant (-02) \n👜Hand baggage: 1 x 8kg \n🧳Checked baggage: against a fee \nAdvanced seat reservation: against a fee \nPreferred seating zone: against a fee \n❌Front row seating \n❌Priority boarding/Checkin \n❌Business lounge access \nSnack & beverage: buy on board \n✅e-newspaper \n✅Miles eligible/accumlation \n✅Change/Rebooking \n❌Cancelation/Refund","eco classic":"Eco Classic (semi-restrictive rate) \nxxx$ x 1 Adult (+12) \nxxx$ x 1 Child (-12) \nxxx$ x 1 Infant (-02) \n👜Hand baggage: 1 x 8kg \n🧳Checked baggage: 1 x 23kg \n✅Advanced seat reservation \nPreferred seating zone: against a fee \n❌Front row seating \n❌Priority boarding/Checkin \nBusiness lounge access: against a fee & in off-peak in BRU \nSnack & beverage: buy on board \n✅e-newspaper \n✅Miles eligible/accumlation \n✅Change/Rebooking \n❌Cancelation/Refund","eco flex":"Eco Flex (more flexible rate) \nxxx$ x 1 Adult (+12) \nxxx$ x 1 Child (-12) \nxxx$ x 1 Infant (-02) \n👜Hand baggage: 1 x 8kg \n🧳Checked baggage: 1 x 23kg \n✅Advanced seat reservation \n✅Preferred seating zone \nFront row seating: if available \n✅Priority boarding/Checkin \nBusiness lounge access: against a fee in BRU \nSnack & beverage: buy on board \n✅e-newspaper \n✅Miles eligible/accumlation \n✅Change/Rebooking \nCancelation/Refund: against a fee",airfare:"Airfare","ticket option details":"TICKET*: \n*Itinerary* 🌍\n XXX-XXX /// XXX-XXX \n\n*Carrier* (XX) ✈️\n XXXXXX \n\n*Compartment* 💺\n Economy, Premium Cl., Business \n\n*Airfare* 💲\n *000$* p. p. \n\n ✅Baggage Allowance 🧳\n1Checked bag (23 kg) p. p. \n\n❌Seat pre selection 💺 \nOptional at additional fees \n\n✅Meal 🍴 \n\n*Attention❗*\n Price may change unless \n ticket was issued!! \n\n⚠️*Ticket Restrictions*⚠️ \n  (p. p. = per person) \n▪️ Change fees: 00$ p. p. \n       (+difference in fare) \n▪️ Cancel. fees: 00$ p. p. \n▪️ No-Show: Total Loss \n *⏱️Ticket issuance* \n   *Today/Immediate/ Within 24h/48h/72h*\n","seat number":"(Seat XX - )",your:"your","upcoming trip to":"upcoming trip to","total loss":"Total loss","Non Changeable":"Non Changeable","ticket issuance":"⏱️Ticket issuance",Today:"Today",Immediate:"Immediate","Within 24h":"Within 24h","Within 48h":"Within 48h","Within 72h":"Within 72h","compartment options":"Economy, Premium Cl., Business \n  Combined Compartments\n  Outbound - **\n  Inbound - **\n  Long-haul portion - **\n  Short-haul portion - **","seat selection":"Seat pre selection 💺 \nOptional at additional fees","ticket explanation":"You should notice that your itinerary will require the combination of two separated airfare/tickets each with its own restrictions.","trip total cost":"TRIP TOTAL COST","trip explanation 1":"The above total cost is based on purchase of ","trip explanation 2":"separated tickets each with its own respective airfare conditions & restrictions ​as described bellow:","price calc demo":"*xxx$ x 1 Adult (+12)* \n*xxx$ x 1 Child (-12)* \n*xxx$ x 1 Infant (-02)*","No Checked bag":"No Checked bag","Carry-on Baggage":"Carry-on Baggage","1 Checked bag 23 kg":"1 Checked bag 23 kg","2 Checked bag 23 kg":"2 Checked bag 23 kg","3 Checked bag 23 kg":"3 Checked bag 23 kg","1 Checked bag 20 kg":"1 Checked bag 20 kg","2 Checked bag 20 kg":"2 Checked bag 20 kg","3 Checked bag 20 kg":"3 Checked bag 20 kg","":"","":"","":"","":"","":"","":"","":"","":""},v={english:"English",francais:"Francais",hebrew:"עברית","outbound flight":"Vol aller 🛫","other destination flight":"other destination flight(s) ✈️","inbound flight":"Vol retour 🛬","together with":"avec",itinerary:"itinéraire:","flight desc":"Suite à ta/votre demande, tu/vous trouverez ci-dessous, l’itinéraire de vol proposé pour votre prochain voyage a","please pay msg":"SVP Merci de valider l'emission de ton/votre billet en repondant a ce message WhatsApp avec votre confirmation, conformement aux conditions\nsuivantes:","please pay again msg":"Merci de *valider a l'immediat l'emission de votre billet* en repondant a ce message Whatsapp avec votre accord et autorisation conformement  a son contenu.","price may change":"Le tarif est susceptible de changement de prix sans avertissement préalable tant que le billet n'a pas été émis!",farewell:"Toda,\nGad",prices:"Prix",restrictions:"Restrictions Tarifaires","change restriction":"Changement",adult:"Adulte (+12)",child:"Enfant (-12)",youth:"jeune",student:"Etudiant",senior:"senior",infant:"Bébé (-2)",sun:"Dim",mon:"Lun",tue:"Mar",wed:"Mer",thu:"Jeu",fri:"Ven",sat:"Sam",JAN:"JAN",FEB:"FEV",MAR:"MAR",APR:"APR",MAY:"MAI",JUN:"JUN",JUL:"JUL",AUG:"AUG",SEP:"SEP",OCT:"OCT",NOV:"NOV",DEC:"DEC","dpt.":" Dpt.","arr.":" Arr.",shalom:" Shalom!",change:" Frais de modification:",cancel:" Frais d'annulations:","no show":" No-show:",details:" Details:",compartment:" -Compartment:",none:" None",baggage:"Franchise bagages",meal:" -Meal:",attention:" *Attention:*❗",total:" total:",airline:"Compagnie","class of travel":"Compartiment","combined compartment":"combined compartment","round Trip Fare":"Round Trip Fare","one Way Fare":"One Way Fare","Family fare":"For your convenience, you may \nchoose between one of the \nfollowing *3 family fare levels* \neach of them with its own fare & restrictions! \nplease kindly mention your choice accordingly: \n","Carry-on Baggage":"Shouldn’t exceed \n56 x 36 x 23 cm \n(including handles & wheels)","p. p.":"p. p.","p. p. = per person":" (p. p. = per person)","(+difference in fare)":" (+difference tarif. eventuelle)","No meal":"No meal","Regular meal":"Regular meal","Kosher meal (KSML)":"Kosher meal (KSML)","Fish meal (FSML)":"Fish meal (FSML)- for passengers who prefer fish as their main dish (when a meat meal is served)","Fruit meal (FPML)":"Fruit meal (FPML)- based on fresh and dried fruit","Pure vegetarian (vegan) meal (VGML)":"Pure vegetarian (vegan) meal (VGML): meal contains no eggs, dairy products or animal products Vegetarian meal that includes dairy products and egg products (VLML)","Vegetarian meal (VLML)":"Vegetarian meal (VLML)- Vegetarian meal that includes dairy products and egg products (VLML)","Low sugar meal (DBML)":"Low sugar meal (DBML)","Reduced gluten meal* (GFML)":"Reduced gluten meal* (GFML)","Low salt meal (LSML)":"Low salt meal (LSML)","Low lactose* meal (NLML)":"Low lactose* meal (NLML)","Mehadrin kosher meal (SKML)":"Mehadrin kosher meal (SKML)","Mehadrin kosher fish (KFML)":"Mehadrin kosher fish (KFML): when a meat meal is served","Mehadrin kosher children’s meal (KCML)":"Mehadrin kosher children’s meal (KCML)","Mehadrin Regal kosher fish meal (RFML)":"Mehadrin Regal kosher fish meal (RFML) when a meat meal is served","Mehadrin Regal kosher children’s meal (KCML":"Mehadrin Regal kosher children’s meal (KCML","Mehadrin Regal kosher vegetarian meal (GVML)":"Mehadrin Regal kosher vegetarian meal (GVML)","option-eco lite":"Eco Lite (restrictive rate) \n","option-eco classic":"Eco Classic (semi-restrictive rate) \n","option-eco flex":"Eco Flex (more flexible rate) \n","eco lite":"Eco Lite (restrictive rate) \nxxx$ x 1 Adult (+12) \nxxx$ x 1 Child (-12) \nxxx$ x 1 Infant (-02) \n👜Hand baggage: 1 x 8kg \n🧳Checked baggage: against a fee \nAdvanced seat reservation: against a fee \nPreferred seating zone: against a fee \n❌Front row seating \n❌Priority boarding/Checkin \n❌Business lounge access \nSnack & beverage: buy on board \n✅e-newspaper \n✅Miles eligible/accumlation \n✅Change/Rebooking \n❌Cancelation/Refund","eco classic":"Eco Classic (semi-restrictive rate) \nxxx$ x 1 Adult (+12) \nxxx$ x 1 Child (-12) \nxxx$ x 1 Infant (-02) \n👜Hand baggage: 1 x 8kg \n🧳Checked baggage: 1 x 23kg \n✅Advanced seat reservation \nPreferred seating zone: against a fee \n❌Front row seating \n❌Priority boarding/Checkin \nBusiness lounge access: against a fee & in off-peak in BRU \nSnack & beverage: buy on board \n✅e-newspaper \n✅Miles eligible/accumlation \n✅Change/Rebooking \n❌Cancelation/Refund","eco flex":"Eco Flex (more flexible rate) \nxxx$ x 1 Adult (+12) \nxxx$ x 1 Child (-12) \nxxx$ x 1 Infant (-02) \n👜Hand baggage: 1 x 8kg \n🧳Checked baggage: 1 x 23kg \n✅Advanced seat reservation \n✅Preferred seating zone \nFront row seating: if available \n✅Priority boarding/Checkin \nBusiness lounge access: against a fee in BRU \nSnack & beverage: buy on board \n✅e-newspaper \n✅Miles eligible/accumlation \n✅Change/Rebooking \nCancelation/Refund: against a fee",airfare:"Prix","ticket option details":"TICKET*: \n*itinéraire* 🌍\n XXX-XXX /// XXX-XXX \n\n*Compagnie* (XX) ✈️\n XXXXXX \n\n*Compartiment* 💺\n Economy, Premium Cl., Business \n\n*Prix* 💲\n *000$* p. p. \n\n Franchise bagages 🧳\n1 valise en soute (23kg) p. p. \n\n❌Présélection de siège 💺 \nMoyennant supplement \n\n✅Meal 🍴 \n\n*Attention❗*\n Le tarif est susceptible de changement de prix sans avertissement préalable tant que le billet n'a pas été émis! \n\n⚠️*Restrictions Tarifaires*⚠️ \n  (p. p. = per person) \n▪️ Frais de modification: 00$ p. p. \n       (+difference tarif. eventuelle) \n▪️ Frais d'annulations: 00$ p. p. \n▪️ No-Show: Perte Totale \n *⏱️Date limite d'emission* \n   *Today/Immediate/ Within 24h/48h/72h*\n","seat number":"(Siege XX-)",your:"","upcoming trip to":"","total loss":"Perte Totale","Non Changeable":"Non Changeable","ticket issuance":"⏱️Date limite d'emission",Today:"Today",Immediate:"Immediate","Within 24h":"Within 24h","Within 48h":"Within 48h","Within 72h":"Within 72h","compartment options":"Economy, Premium Cl., Business \n  Combined Compartments\n  Outbound - **\n  Inbound - **\n  Long-haul portion - **\n  Short-haul portion - **","seat selection":"Présélection de siège 💺 \nMoyennant supplement","ticket explanation":"You should notice that your itinerary will require the combination of two separated airfare/tickets each with its own restrictions.","trip total cost":"TRIP TOTAL COST","trip explanation 1":"The above total cost is based on purchase of ","trip explanation 2":"separated tickets each with its own respective airfare conditions & restrictions ​as described bellow:","price calc demo":"*xxx$ x 1 Adult (+12)* \n*xxx$ x 1 Child (-12)* \n*xxx$ x 1 Infant (-02)*","No Checked bag":"No Checked bag","Carry-on Baggage":"Carry-on Baggage","1 Checked bag 23 kg":"1 Checked bag 23 kg","2 Checked bag 23 kg":"2 Checked bag 23 kg","3 Checked bag 23 kg":"3 Checked bag 23 kg","1 Checked bag 20 kg":"1 Checked bag 20 kg","2 Checked bag 20 kg":"2 Checked bag 20 kg","3 Checked bag 20 kg":"3 Checked bag 20 kg","":"","":"","":"","":"","":"","":"","":"","":""},w={english:"English",francais:"Francais",hebrew:"עברית","outbound flight":"טיסה/ות יוצאות 🛫","other destination flight":"יעד נוסף ✈️","inbound flight":"טיסה/ות חזור 🛬","together with":"together with",itinerary:"מסלול הטיסות 🌍","flight desc":"בהמשך לפנייתך להלן פרטי ההצעה \nהמבוקשת עבור נסיעתך הקרובה \nל-","please pay msg":"*נא לאשר את הנפקת כרטיסך* במענה חוזר *מידי* להודעת ווצאפ זו בהתאם לתוכן  ההצעה.","please pay again msg":"אודה לך על מעניך החוזר \n*להודעת ווצאפ זו עם אישורך* \n*לכרטוס המידי מתוך הסכמה* \nלמסלול המוצע & לתנאי מחיר  \nכרטיסך בהתאם למפורט מעלה.","price may change":"עלות הכרטיס עלול \nלהתייקר כל עוד לא הונפק \nכרטיסך!! ",farewell:"תודה רבה, \nבברכה\nגד אלנקווה\n054-5727055",prices:"מחירים",restrictions:"תנאי תעריף","change restriction":"▪️ דמי שינוי",adult:"מבוגר (+12)",child:"ילד (-12)",youth:"צעיר",student:"סטודנט",senior:"גיל הזהב",infant:"תינוק (-2)",mon:"יום ב'",tue:"יום ג'",wed:"יום ד'",thu:"יום ה'",fri:"יום ו'",sat:"יום ש'",sun:"יום א'",JAN:"ינו'",FEB:"פבר'",MAR:"מרץ",APR:"אפר'",MAY:"מאי",JUN:"יוני",JUL:"יולי",AUG:"אוג'",SEP:"ספט'",OCT:"אוק'",NOV:"נוב'",DEC:"דצמ'","dpt.":"ממריא","arr.":"נוחת  ",shalom:"שלום!",change:"▪️ דמי שינוי:",cancel:"▪️ דמי ביטול:","no show":"▪️ אי הופעה לטיסה:",details:"Details:",compartment:"Compartment:",none:"None",baggage:"מזוודה",meal:"Meal",attention:"*לתשומת לבך:*❗",total:'סה"כ:',airline:"חברת תעופה:","class of travel":"מחלקת הנסיעה","combined compartment":"combined compartment","round Trip Fare":"Round Trip Fare","one Way Fare":"One Way Fare","Family fare":"א. לנוחיותך מוצעים בזאת \n   3 קטגוריות מחירים לבחירתך \n   עבור אותן הטיסות בהתאם \n   לרמת הגמישות בתנאי הכרטיס \n   & מרכיבים שתרצה לכלול בו.\n\nב. כל הסכומים הנקובים מטה הינם \n   לאדם (בהתייחס הן למחיר\n   הכרטיס עם & מרכיביו\n   והן לקנסות)\n","Carry-on Baggage":"לא יעלה מעל \n56 x 36 x 23 cm \n(כולל ידיות וגלגלים)","p. p.":"לאדם","p. p. = per person":" (לאדם = per person)","(+difference in fare)":" (+הפרשי מחיר אם יידרש)","No meal":"No meal","Regular meal":"ארוחה רגילה","Kosher meal (KSML)":"ארוחה כשרה (KSML)","Fish meal (FSML)":"Fish meal (FSML)- for passengers who prefer fish as their main dish (when a meat meal is served)","Fruit meal (FPML)":"Fruit meal (FPML)- based on fresh and dried fruit","Pure vegetarian (vegan) meal (VGML)":"Pure vegetarian (vegan) meal (VGML): meal contains no eggs, dairy products or animal products Vegetarian meal that includes dairy products and egg products (VLML)","Vegetarian meal (VLML)":"ארוחה צמחונית (VLML)- Vegetarian meal that includes dairy products and egg products (VLML)","Low sugar meal (DBML)":"ארוחה דלת סוכר (DBML)","Reduced gluten meal* (GFML)":"Reduced gluten meal* (GFML)","Low salt meal (LSML)":"Low salt meal (LSML)","Low lactose* meal (NLML)":"Low lactose* meal (NLML)","Mehadrin kosher meal (SKML)":"ארוחה כשרה למהדרין (SKML)","Mehadrin kosher fish (KFML)":"Mehadrin kosher fish (KFML): when a meat meal is served","Mehadrin kosher children’s meal (KCML)":"Mehadrin kosher children’s meal (KCML)","Mehadrin Regal kosher fish meal (RFML)":"Mehadrin Regal kosher fish meal (RFML) when a meat meal is served","Mehadrin Regal kosher children’s meal (KCML":"Mehadrin Regal kosher children’s meal (KCML","Mehadrin Regal kosher vegetarian meal (GVML)":"Mehadrin Regal kosher vegetarian meal (GVML)","option-eco lite":"תעריף לייט \n","option-eco classic":"תעריף קלאסיק \n","option-eco flex":"תעריף פלקס \n","eco lite":"*תעריף לייט* \nמחיר💲:\n  *$500* לאדם\n👜כבודת יד:\n✅תיק עלייה למטוס: תיק אחד \n     עד 8 ק''ג (25X45X56 ס''מ) \n✅תיק יד אישי: תיק אחד\n     (18X38X30 ס''מ)\n🧳מזוודה:\n❌ללא מזוודה\n💺הושבה:\n❌ללא הושבה מראש\n\n⚠️תנאי תעריף לייט⚠️\n❌לא ניתן לשינוי\n❌ לא ניתן לביטול\n❌אי הופעה לטיסה - טוטלוס\n*מועד הנפקת הכרטיס*  \n⏱️ *כרטוס מיידי* - *היום/*\n*תוך 24/48/72  שעות*  \n\nלתשומת לבך❗\nעלות הכרטיס עלול \nלהתייקר כל עוד לא הונפק\nכרטיסך !!","eco classic":"*תעריף קלאסיק* \nמחיר💲:\n *$ 600* לאדם\n👜כבודת יד:\n✅תיק עלייה למטוס: תיק אחד \n     עד 8 ק''ג (25X45X56 ס''מ) \n✅תיק יד אישי: תיק אחד\n     (18X38X30 ס''מ)\n🧳מזוודה: \n✅ מזוודה אחת (23 ק''ג)\n💺 הושבה\n✅הושבה מראש \n     (מושב סטנדרטי)\n\n⚠️תנאי תעריף קלאסיק⚠️\n◾דמי שינוי: 00$ לאדם\n   (+הפרשי מחיר אם יידרש)\n◾דמי ביטול: 000$ לאדם\n◾אי הופעה לטיסה: טוטלוס\nמועד הנפקת הכרטיס  \n⏱️ *כרטוס מיידי* - *היום/*\n*תוך 24/48/72  שעות*    \n\nלתשומת לבך❗\nעלות הכרטיס עלול \nלהתייקר כל עוד לא הונפק\nכרטיסך !!","eco flex":"*תעריף פלקס* \nמחיר💲:\n *700$* לאדם\n👜כבודת יד:\n✅תיק עלייה למטוס: 2 תיקים \n     סה''כ עד 12 ק''ג \n      (25X45X56 ס''מ)  \n✅תיק יד אישי: תיק אחד\n     (30X38X18 ס''מ)\n🧳מזוודה:\n✅מזוודה (23 ק''ג)\n💺 הושבה\n✅כולל הושבה מראש\n     (מושב מועדף)\n\n⚠️תנאי תעריף פלקס⚠️ \n◾דמי שינוי: 00$ לאדם\n   (+הפרשי מחיר אם יידרש)\n◾דמי ביטול: 000$ לאדם\n◾אי הופעה לטיסה: טוטלוס\n*מועד הנפקת הכרטיס*  \n⏱️ *כרטוס מיידי* - *היום/*\n*תוך 24/48/72  שעות*    \n\nלתשומת לבך❗\nעלות הכרטיס עלול \nלהתייקר כל עוד לא הונפק\nכרטיסך !!",airfare:"מחיר","ticket option details":" \n*מסלול הטיסות* 🌍\n XXX-XXX /// XXX-XXX \n\n*חברת תעופה* (XX) ✈️\n XXXXXX \n\n*מחלקת נסיעה* 💺\n מחלקת תיירים, פרמיום, עסקים \n\n*מחיר* 💲\n *000$* לאדם \n\n מזוודה 🧳\n✅מזוודה אחת (23 ק''ג)לאדם \n\nהושבה 💺 \n✅הושבה מראש\n      (מושב סטנדרטי)\n❌ללא הושבה מראש \n\n✅ארוחה 🍴 \n\n*לתשומת לבך❗*\n עלות הכרטיס עלול \n להתייקר כל עוד לא הונפק \n כרטיסך!! \n\n⚠️*תנאי תעריף*⚠️ \n▪️ דמי שינוי: 00$ לאדם \n       (+הפרשי מחיר אם יידרש) \n▪️ דמי ביטול: 00$ לאדם \n▪️ אי התייצבות: טוטלוס \n *⏱️מועד הנפקת הכרטיס* \n      *היום/מיידי/ תוך 72/48/24 שעות*\n","seat number":"(מושב - XX)",your:"your","upcoming trip to":"upcoming trip to","total loss":"טוטלוס","Non Changeable":"לא ניתן לשינוי","ticket issuance":"⏱️מועד הנפקת הכרטיס",Today:"היום",Immediate:"מיידי","Within 24h":"תוך 24 שעות","Within 48h":"תוך 48 שעות","Within 72h":"תוך 72 שעות","compartment options":"תיירות, פרמיום, עסקים\n  Combined Compartments\n  Outbound - **\n  Inbound - **\n  Long-haul portion - **\n  Short-haul portion - **","seat selection":"הושבה 💺\n✅הושבה מראש\n      (מושב סטנדרטי)\n❌ללא הושבה מראש","ticket explanation":"You should notice that your itinerary will require the combination of two separated airfare/tickets each with its own restrictions.","trip total cost":"עלות כל הטיול","trip explanation 1":"The above total cost is based on purchase of ","trip explanation 2":"separated tickets each with its own respective airfare conditions & restrictions ​as described bellow:","price calc demo":"*1 * xxx$ מבוגר (+12)* \n*1 * xxx$ ילד (-12)* \n*1 * xxx$ תינוק (-02)*","No Checked bag":"ללא מזוודות","Carry-on Baggage":"מזוות יד","1 Checked bag 23 kg":"מזוודה אחת (23 ק''ג)","2 Checked bag 23 kg":"שתי מזוודות (23 ק''ג)","3 Checked bag 23 kg":"שלוש מזוודות (23 ק''ג)","1 Checked bag 20 kg":"מזוודה אחת (20 ק''ג)","2 Checked bag 20 kg":"שתי מזוודות (20 ק''ג)","3 Checked bag 20 kg":"שלוש מזוודות (20 ק''ג)","Tel Aviv":"תל אביב",Brussels:"ברוסל",Athens:"אתנה",Thessaloniki:"סלוניקי","Business Cl.":"עסקים","Premium Eco Cl.":"פרימיום","Economy Cl.":"תיירים","One Way (O/W)":"כיוון אחד","Round Trip (R/T)":"הלוך חזור","Multi Destinations":"מספר יעדים","":"","":"",FIRST:"ראשון",SECOND:"שני",THIRD:"שלישי",FORTH:"רביעי",FIFTH:"חמישי","":"","":"","":"","":"","":"","":"","":""},F={"en-us":y,fr:v,he:w};t["a"].use(C["a"]);const X=new C["a"]({locale:"en-us",fallbackLocale:"en-us",messages:F});var R=({app:e})=>{e.i18n=X},S=a("bc3a"),P=a.n(S);t["a"].prototype.$axios=P.a,/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream&&window.navigator.standalone&&a.e(0).then(a.t.bind(null,"a0db",7));const T="";async function A(){const{app:e,store:n,router:a}=await M();let i=!1;const r=e=>{i=!0;const n=Object(e)===e?a.resolve(e).route.fullPath:e;window.location.href=n},o=window.location.href.replace(window.location.origin,""),s=[R,void 0];for(let c=0;!1===i&&c<s.length;c++)if("function"===typeof s[c])try{await s[c]({app:e,router:a,store:n,Vue:t["a"],ssrContext:null,redirect:r,urlPath:o,publicPath:T})}catch(l){return l&&l.url?void(window.location.href=l.url):void console.error("[Quasar] boot error:",l)}!0!==i&&new t["a"](e)}A()},"31cd":function(e,n,a){}});