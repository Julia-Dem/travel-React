(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{227:function(e,t,n){"use strict";n.r(t);var a=n(1),i=n(0),s=n.n(i),c=n(45),r=n.n(c),o=n(138),d=n(91),l=n(5),u=n(78),p=n(51),j=n(95),f=n(93),b=n(23),m="DATETIME",v="MONTH DAY",_="TIMESTAMP",O="DURATION",h="DURATION TIMESTAMP",x="TIME",y=function(e){return e<10?"0".concat(e):e},g=["jan","feb","mar","apr","may","jun","jul","aug","sep","oct","nov","dec"],N=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";switch(t){case"DATETIME":return"".concat(new Date(e).getUTCFullYear(),"/").concat(new Date(e).getUTCMonth()+1,"/").concat(new Date(e).getUTCDate());case"TIME":return"".concat(y(new Date(e).getUTCHours()),":").concat(y(new Date(e).getUTCMinutes()));case"TIMESTAMP":return"".concat(new Date(e).getTime());case"MONTH DAY":return"".concat(g[new Date(e).getUTCMonth()]," ").concat(new Date(e).getUTCDate());case"FULL DATE":return"".concat(new Date(e).getUTCDate(),"/").concat(g[new Date(e).getUTCMonth()],"/").concat(new Date(e).getUTCFullYear());case"DURATION":var a=new Date(n)-new Date(e),i=new Date(a).getUTCDate()-1,s=new Date(a).getUTCHours(),c=new Date(a).getUTCMinutes();return"".concat(i?i+"D":""," ").concat(s?s+"H":""," ").concat(c?c+"M":"");case"DURATION TIMESTAMP":return new Date(n).getTime()-new Date(e).getTime();default:return}},T=function(e){var t=Array.from(new Set(e.points.map((function(e){return e.destination.name})))),n=0;e.points.forEach((function(e){return e.offers.forEach((function(e){return n+=e.price})),n+=e.base_price}));var i=Object(b.a)(e.points).sort((function(e,t){return N(e.date_from,_)>N(t.date_from,_)?1:-1})),s=N(i[0].date_from,v),c=N(i[i.length-1].date_from,v);return Object(a.jsxs)("section",{className:"trip-main__trip-info  trip-info",children:[Object(a.jsxs)("div",{className:"trip-info__main",children:[Object(a.jsx)("h1",{className:"trip-info__title",children:t.join(" - ")}),Object(a.jsxs)("p",{className:"trip-info__dates",children:[s,"\xa0\u2014\xa0",c]})]}),Object(a.jsxs)("p",{className:"trip-info__cost",children:["Total: \u20ac\xa0",Object(a.jsx)("span",{className:"trip-info__cost-value",children:n})]})]})},D=function(e){return console.log(e),Object(a.jsx)("header",{className:"page-header",children:Object(a.jsxs)("div",{className:"page-body__container  page-header__container",children:[Object(a.jsx)("img",{className:"page-header__logo",src:"img/logo.png",width:"42",height:"42",alt:"Trip logo"}),Object(a.jsxs)("div",{className:"trip-main",children:[e.dates&&e.towns&&e.offers?Object(a.jsx)(T,Object(l.a)({},e)):"",Object(a.jsx)("button",{className:"trip-main__event-add-btn  btn  btn--big  btn--yellow",type:"button",onClick:function(){return e.newEventToggle(!0)},disabled:e.newEventEdit,children:"New event"})]})]})})},w=n(27),E=n.n(w),S=n(69),M=n(131).create({baseURL:"https://htmlacademy-es-10.appspot.com/big-trip/",headers:{Authorization:"Basic dgddgjsakdlidjiednk","Content-Type":"application/json"}}),F=function(){return M.get("destinations")},A=function(){return M.get("offers")},C=function(){return M.get("points")},P=function(e,t){return M.put("points/".concat(e),t)},I=function(e){return M.post("points",e)},k={points:null,dates:null,destinations:null,offers:null,newEventEdit:!1,isSendingData:[],editMode:[],serverError:[]},U=function(e,t){return{type:"UPDATE POINT",id:e,data:t}},L=function(e){return{type:"ON SENDING DATA",id:e}},R=function(e){return{type:"OFF SENDING DATA",id:e}},V=function(e){return{type:"OFF EDIT MODE",id:e}},q=function(e){return{type:"SET NEW EVENT",mode:e}},B=function(e){Object(j.a)(n,e);var t=Object(f.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(p.a)(n,[{key:"render",value:function(){return Object(a.jsx)("li",{className:"trip-events__msg",children:"Click New Event to create your first point"})}}]),n}(s.a.Component),H=n(139),G=n(8),Y=function(e){return"sightseeing"===e||"check-in"===e||"restaurant"===e?e.charAt(0).toUpperCase()+e.slice(1)+" in ":e.charAt(0).toUpperCase()+e.slice(1)+" to "},z=function(e){var t;return Object(a.jsxs)("div",{children:[Object(a.jsx)(G.b,{children:function(t){var n=t.form;return Object(a.jsx)("label",{className:"event__label  event__type-output",htmlFor:"eventDay-destination-".concat(e.id),children:Y(n.values.type)})}}),Object(a.jsx)(G.b,{name:"eventTown",as:"select",className:"event__input  event__input--destination",id:"eventDay-destination-".concat(e.id),children:(t=e.towns,t.map((function(t,n){return Object(a.jsx)("option",{value:t.name,children:t.name},e.id+n)})))})]})},J=function(e){return Object(a.jsxs)("li",{className:"event__offer",children:[Object(a.jsxs)("span",{className:"event__offer-title",children:[e.title," "]}),"+ \u20ac\xa0",Object(a.jsx)("span",{className:"event__offer-price",children:e.price})]})},W=function(e){var t=e.point.offers.map((function(e,t){return Object(a.jsx)(J,{title:e.title,price:e.price},t)}));return Object(a.jsxs)("div",{className:"event",children:[Object(a.jsx)("div",{className:"event__type",children:Object(a.jsx)("img",{className:"event__type-icon",width:"42",height:"42",src:"img/icons/".concat(e.point.type,".png"),alt:"Event type icon"})}),Object(a.jsx)("h3",{className:"event__title",children:Y(e.point.type)+" "+e.point.destination.name}),Object(a.jsxs)("div",{className:"event__schedule",children:[Object(a.jsxs)("p",{className:"event__time",children:[Object(a.jsx)("time",{className:"event__start-time",dateTime:e.point.date_from,children:N(e.point.date_from,x)}),"\u2014",Object(a.jsx)("time",{className:"event__end-time",dateTime:e.point.date_to,children:N(e.point.date_to,x)})]}),Object(a.jsx)("p",{className:"event__duration",children:N(e.point.date_from,O,e.point.date_to)})]}),Object(a.jsxs)("p",{className:"event__price",children:["\u20ac\xa0",Object(a.jsx)("span",{className:"event__price-value",children:e.point.base_price})]}),Object(a.jsx)("h4",{className:"visually-hidden",children:"Offers:"}),Object(a.jsx)("ul",{className:"event__selected-offers",children:t}),Object(a.jsx)("button",{className:"event__rollup-btn",type:"button",onClick:function(){return e.onEditMode(e.point.id)},children:Object(a.jsx)("span",{className:"visually-hidden",children:"Open event"})})]})},Z=n(41),K=function(e){var t=["Bus","Drive","Flight","Ship","Taxi","Train","Transport"],n=["Check-in","Sightseeing","Restaurant"],i=function(t){return t.map((function(t,n){return Object(a.jsxs)("div",{className:"event__type-item",children:[Object(a.jsx)(G.b,{id:"event-type-".concat(t.toLowerCase(),"-").concat(n+e.id),value:t.toLowerCase(),className:"event__type-input  visually-hidden",type:"radio",name:"type"}),Object(a.jsx)("label",{className:"event__type-label  event__type-label--".concat(t.toLowerCase()),htmlFor:"event-type-".concat(t.toLowerCase(),"-").concat(n+e.id),children:t})]},n)}))};return Object(a.jsxs)("div",{className:"event__type-wrapper",children:[Object(a.jsxs)("label",{className:"event__type  event__type-btn",htmlFor:"eventDay-type-toggle-".concat(e.id),children:[Object(a.jsx)("span",{className:"visually-hidden",children:"Choose eventDay type"}),Object(a.jsx)(G.b,{children:function(e){var t=e.form;return Object(a.jsx)("img",{className:"event__type-icon",width:"17",height:"17",src:"img/icons/".concat(t.values.type,".png"),alt:"Event type icon"})}})]}),Object(a.jsx)("input",{name:"eventTypeToggle",className:"event__type-toggle  visually-hidden",id:"eventDay-type-toggle-".concat(e.id),type:"checkbox"}),Object(a.jsxs)("div",{className:"event__type-list",children:[Object(a.jsxs)("fieldset",{className:"event__type-group",children:[Object(a.jsx)("legend",{className:"visually-hidden",children:"Transfer"}),i(t)]}),Object(a.jsxs)("fieldset",{className:"event__type-group",children:[Object(a.jsx)("legend",{className:"visually-hidden",children:"Activity"}),i(n)]})]})]})},Q=function(e){return Object(a.jsxs)("section",{className:"event__section  event__section--destination",children:[Object(a.jsx)("h3",{className:"event__section-title  event__section-title--destination",children:"Destination"}),Object(a.jsx)(G.b,{children:function(t){var n=t.form,i=e.towns.find((function(e){return e.name===n.values.eventTown}));return Object(a.jsx)("p",{className:"event__destination-description",children:i.description})}}),Object(a.jsx)("div",{className:"event__photos-container",children:Object(a.jsx)("div",{className:"event__photos-tape",children:Object(a.jsx)(G.b,{children:function(t){var n=t.form;return e.towns.find((function(e){return e.name===n.values.eventTown})).pictures.map((function(e,t){return Object(a.jsx)("img",{className:"event__photo",src:e.src,alt:e.description},t)}))}})})})]})},X=n(50),$=function(e){return Object(a.jsxs)("section",{className:"event__section  event__section--offers",children:[Object(a.jsx)("h3",{className:"event__section-title  event__section-title--offers",children:"Offers"}),Object(a.jsx)("div",{className:"event__available-offers",children:Object(a.jsx)(G.b,{children:function(t){var n=t.field,i=t.form,s=e.offers.find((function(e){return e.type===i.values.type})).offers;return n.name="offers",s.length?s.map((function(t,n){return Object(a.jsxs)("div",{className:"event__offer-selector",children:[Object(a.jsx)(G.b,{className:"event__offer-checkbox  visually-hidden",id:t.title.split(" ").join("_")+e.point.id,type:"checkbox",name:"offers.".concat(i.values.type,".").concat(t.title.split(" ").join("_"))}),Object(a.jsxs)("label",{className:"event__offer-label",htmlFor:t.title.split(" ").join("_")+e.point.id,children:[Object(a.jsx)("span",{className:"event__offer-title",children:t.title}),"+ \u20ac\xa0",Object(a.jsx)("span",{className:"event__offer-price",children:t.price})]})]},n)})):Object(a.jsx)("span",{children:"No available offers"})}})})]})},ee=function(e){return Object(a.jsx)("div",{className:"error",children:e.children})},te=n(111),ne=n.n(te),ae=(n(165),function(e){return Object(a.jsx)(G.d,{initialValues:e.initialValues,validationSchema:X.c({eventTown:X.e().required("Required"),date_from:X.a().required("Required").nullable(),date_to:X.a().min(X.d("date_from"),"End date cannot be earlier than start date").required("Required").nullable(),base_price:X.b().min(1,"Indicate the price").required("Required")}),onSubmit:function(t,n){var a=n.setSubmitting;e.onSubmitForm(function(t){var n=e.towns.find((function(e){return e.name===t.eventTown})),a=e.offers.find((function(e){return e.type===t.type})).offers.filter((function(e){return t.offers[t.type][e.title.split(" ").join("_")]}));return{base_price:Number(t.base_price),date_from:new Date(t.date_from).toISOString(),date_to:new Date(t.date_to).toISOString(),destination:n,id:e.point.id.toString(),is_favorite:t.is_favorite,offers:a,type:t.type}}(t)),a(!1)},onReset:function(){return e.onResetForm()},children:Object(a.jsxs)(G.c,{className:"trip-events__item  event  event--edit",id:"form",children:[Object(a.jsxs)("header",{className:"event__header",children:[Object(a.jsx)(K,{type:e.point.type,id:e.point.id}),Object(a.jsx)(z,{towns:e.towns,id:e.point.id}),Object(a.jsxs)("div",{className:"event__field-group  event__field-group--time",children:[Object(a.jsx)("label",{className:"visually-hidden",htmlFor:"eventDay-start-time-".concat(e.point.id),children:"From"}),Object(a.jsxs)("div",{className:"error_container",children:[Object(a.jsx)(G.b,{className:"event__input  event__input--time",id:"eventDay-start-time-".concat(e.point.id),name:"date_from",type:"text",children:function(e){var t=e.form,n=e.field,i=t.setFieldValue,s=n.value;return Object(a.jsx)(ne.a,Object(l.a)(Object(l.a)({id:"date_from"},n),{},{selected:s,showTimeSelect:!0,onChange:function(e){return i(n.name,e)},dateFormat:"yyyy/MM/dd hh:mm aa"}))}}),Object(a.jsx)(G.a,{name:"date_from",component:ee})]}),"\u2014",Object(a.jsx)("label",{className:"visually-hidden",htmlFor:"eventDay-end-time-".concat(e.point.id),children:"To"}),Object(a.jsxs)("div",{className:"error_container",children:[Object(a.jsx)(G.b,{className:"event__input  event__input--time",id:"eventDay-end-time-".concat(e.point.id),type:"text",name:"date_to",children:function(e){var t=e.form,n=e.field,i=t.setFieldValue,s=n.value;return Object(a.jsx)(ne.a,Object(l.a)(Object(l.a)({id:"date_to"},n),{},{selected:s,showTimeSelect:!0,onChange:function(e){return i(n.name,e)},dateFormat:"yyyy/MM/dd hh:mm aa"}))}}),Object(a.jsx)(G.a,{name:"date_to",component:ee})]})]}),Object(a.jsxs)("div",{className:"event__field-group  event__field-group--price",children:[Object(a.jsxs)("label",{className:"event__label",htmlFor:"eventDay-price-".concat(e.point.id),children:[Object(a.jsx)("span",{className:"visually-hidden",children:"Price"}),"\u20ac"]}),Object(a.jsxs)("div",{className:"error_container",children:[Object(a.jsx)(G.b,{className:"event__input  event__input--price",id:"eventDay-price-".concat(e.point.id),type:"text",name:"base_price"}),Object(a.jsx)(G.a,{name:"base_price",component:ee})]})]}),Object(a.jsx)("button",{className:"event__save-btn  btn  btn--blue",type:"submit",disabled:e.isSendingData.some((function(t){return t===e.point.id})),children:e.isSendingData.some((function(t){return t===e.point.id}))?"Saving...":"Save"}),Object(a.jsx)("button",{className:"event__reset-btn",type:"reset",disabled:e.isSendingData.some((function(t){return t===e.point.id})),children:"Cancel"}),Object(a.jsx)(G.b,{id:"eventDay-favorite-".concat(e.point.id),className:"event__favorite-checkbox  visually-hidden",type:"checkbox",name:"is_favorite"}),Object(a.jsxs)("label",{className:"event__favorite-btn",htmlFor:"eventDay-favorite-".concat(e.point.id),children:[Object(a.jsx)("span",{className:"visually-hidden",children:"Add to favorite"}),Object(a.jsx)("svg",{className:"event__favorite-icon",width:"28",height:"28",viewBox:"0 0 28 28",children:Object(a.jsx)("path",{d:"M14 21l-8.22899 4.3262 1.57159-9.1631L.685209 9.67376 9.8855 8.33688 14 0l4.1145 8.33688 9.2003 1.33688-6.6574 6.48934 1.5716 9.1631L14 21z"})})]})]}),Object(a.jsxs)("section",{className:"event__details",children:[Object(a.jsx)($,{point:e.point,offers:e.offers}),Object(a.jsx)(Q,{towns:e.towns})]})]})})}),ie=function(e){console.log(e);var t=e.offers.reduce((function(t,n){var a=n.offers.reduce((function(t,n){var a=n.title.split(" ").join("_"),i=e.point.offers.some((function(e){return e.title===n.title}));return Object(l.a)(Object(l.a)({},t),{},Object(Z.a)({},a,i))}),{});return Object(l.a)(Object(l.a)({},t),{},Object(Z.a)({},n.type,a))}),{}),n={type:e.point.type,eventTown:e.point.destination.name,date_from:new Date(e.point.date_from),date_to:new Date(e.point.date_to),base_price:e.point.base_price,is_favorite:e.point.is_favorite,offers:Object(l.a)({},t)};return Object(a.jsx)(ae,Object(l.a)(Object(l.a)({},e),{},{onSubmitForm:function(t){e.updatePoint(e.point.id,t)},onResetForm:function(){e.offEditMode(e.point.id)},initialValues:n}))},se=function(e){return Object(a.jsx)("li",{className:"trip-events__item",children:e.editMode.some((function(t){return t===e.point.id}))?Object(a.jsx)(ie,Object(l.a)({},e)):Object(a.jsx)(W,Object(l.a)({},e))})},ce=function(e){var t=e.points.sort((function(e,t){return new Date(e.date_from)-new Date(t.date_from)})).map((function(t,n){return Object(a.jsx)(se,{point:t,towns:e.towns,offers:e.offers,editMode:e.editMode,isSendingData:e.isSendingData,updatePoint:e.updatePoint,onEditMode:e.onEditMode,offEditMode:e.offEditMode,onSendingData:e.onSendingData,offSendingData:e.offSendingData},t.id+n)}));return Object(a.jsxs)("li",{className:"trip-days__item  day",children:[Object(a.jsxs)("div",{className:"day__info",children:[Object(a.jsx)("span",{className:"day__counter",children:e.countDay}),Object(a.jsx)("time",{className:"day__date",dateTime:e.dateTime,children:e.dateText})]}),Object(a.jsx)("ul",{className:"trip-events__list",children:t})]})},re=function(e){var t=Object(b.a)(e.dates).sort((function(e,t){return new Date(e.dateTime)-new Date(t.dateTime)})).map((function(t,n){var i=Object(b.a)(e.points).filter((function(e){return N(e.date_from,m)===t.dateTime}));return Object(a.jsx)(ce,{countDay:n+1,dateText:t.text,dateTime:t.dateTime,points:i,towns:e.towns,offers:e.offers,editMode:e.editMode,isSendingData:e.isSendingData,updatePoint:e.updatePoint,onEditMode:e.onEditMode,offEditMode:e.offEditMode},n)}));return Object(a.jsx)("ul",{className:"trip-days",children:t})},oe=function(e){var t=["Event","Time","Price"].map((function(t,n){return Object(a.jsxs)("div",{className:"trip-sort__item  trip-sort__item--".concat(t.toLowerCase()),children:[Object(a.jsx)("input",{id:"sort-".concat(t.toLowerCase()),className:"trip-sort__input  visually-hidden",type:"radio",name:"trip-sort",value:"sort-".concat(t.toLowerCase()),defaultChecked:t===e.sortType,onChange:function(){return e.sortTypeToggle(t)}}),Object(a.jsxs)("label",{className:"trip-sort__btn",htmlFor:"sort-".concat(t.toLowerCase()),children:[t,Object(a.jsx)("svg",{className:"trip-sort__direction-icon",width:"8",height:"10",viewBox:"0 0 8 10",children:Object(a.jsx)("path",{d:"M2.888 4.852V9.694H5.588V4.852L7.91 5.068L4.238 0.00999987L0.548 5.068L2.888 4.852Z"})})]})]},n)}));return Object(a.jsxs)("form",{className:"trip-events__trip-sort  trip-sort",children:[Object(a.jsx)("span",{className:"trip-sort__item  trip-sort__item--day",children:"Day"}),t,Object(a.jsx)("span",{className:"trip-sort__item  trip-sort__item--offers",children:"Offers"})]})},de=function(e){var t;"Time"===e.sortType?t=Object(b.a)(e.points).sort((function(e,t){return N(e.date_from,h,e.date_to)<N(t.date_from,h,t.date_to)?1:-1})):"Price"===e.sortType&&(t=Object(b.a)(e.points).sort((function(e,t){return e.base_price>t.base_price?1:-1})));var n=t.map((function(t){return Object(a.jsx)(se,{point:t,towns:e.towns,offers:e.offers,updatePoint:e.updatePoint,isSendingData:e.isSendingData,editMode:e.editMode,onEditMode:e.onEditMode},t.id)}));return Object(a.jsx)("ul",{className:"trip-days",children:Object(a.jsxs)("li",{className:"trip-days__item  day",children:[Object(a.jsx)("div",{className:"day__info"}),Object(a.jsx)("ul",{className:"trip-events__list",children:n})]})})},le=function(e){console.log(e);var t=e.offers.reduce((function(e,t){var n=t.offers.reduce((function(e,t){var n=t.title.split(" ").join("_");return Object(l.a)(Object(l.a)({},e),{},Object(Z.a)({},n,!1))}),{});return Object(l.a)(Object(l.a)({},e),{},Object(Z.a)({},t.type,n))}),{}),n={id:e.points.length,type:"drive"},i={type:"drive",eventTown:e.towns[0].name,date_from:new Date,date_to:new Date,base_price:"",is_favorite:!1,offers:Object(l.a)({},t)};return Object(a.jsx)(ae,{initialValues:i,onSubmitForm:function(t){e.addPoint(n.id,t)},onResetForm:function(){e.newEventToggle(!1)},isSendingData:e.isSendingData,point:n,towns:e.towns,offers:e.offers})},ue=function(e){var t=Object(i.useState)("Event"),n=Object(H.a)(t,2),s=n[0],c=n[1];return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(oe,{sortTypeToggle:function(e){e!==s&&c(e)},sortType:s}),e.newEventEdit?Object(a.jsx)(le,Object(l.a)({},e)):null,"Event"===s?Object(a.jsx)(re,Object(l.a)({},e)):Object(a.jsx)(de,Object(l.a)(Object(l.a)({},e),{},{sortType:s}))]})},pe=function(e){Object(j.a)(n,e);var t=Object(f.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(p.a)(n,[{key:"componentDidMount",value:function(){this.props.getPoints(),this.props.getOffers(),this.props.getDestinations()}},{key:"render",value:function(){return Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)(D,Object(l.a)({},this.props)),Object(a.jsx)("main",{className:"page-body__page-main  page-main",children:Object(a.jsx)("div",{className:"page-body__container",children:Object(a.jsxs)("section",{className:"trip-events",children:[Object(a.jsx)("h2",{className:"visually-hidden",children:"Trip events"}),this.props.dates&&this.props.towns&&this.props.offers?Object(a.jsx)(ue,Object(l.a)({},this.props)):Object(a.jsx)(B,{})]})})})]})}}]),n}(s.a.Component),je=Object(d.b)((function(e){return{points:e.eventsPage.points,dates:e.eventsPage.dates,towns:e.eventsPage.destinations,offers:e.eventsPage.offers,isSendingData:e.eventsPage.isSendingData,editMode:e.eventsPage.editMode,newEventEdit:e.eventsPage.newEventEdit}}),{getPoints:function(){return function(){var e=Object(S.a)(E.a.mark((function e(t){var n;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C();case 2:n=e.sent,t({type:"SET POINTS",points:n.data}),t({type:"SET DATES"});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},getDestinations:function(){return function(){var e=Object(S.a)(E.a.mark((function e(t){var n;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,F();case 2:n=e.sent,t({type:"SET DESTINATIONS",destinations:n.data});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},getOffers:function(){return function(){var e=Object(S.a)(E.a.mark((function e(t){var n;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A();case 2:n=e.sent,t({type:"SET OFFERS",offers:n.data});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},updatePoint:function(e,t){return function(){var n=Object(S.a)(E.a.mark((function n(a){var i;return E.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a(L(e)),n.next=3,P(e,t);case 3:200===(i=n.sent).status&&(a(U(e,i.data)),a({type:"SET DATES"}),a(R(e)),a(V(e)));case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},addPoint:function(e,t){return function(){var n=Object(S.a)(E.a.mark((function n(a){var i;return E.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a(L(e)),n.next=3,I(t);case 3:200===(i=n.sent).status&&(a({type:"ADD POINT",point:i.data}),a({type:"SET DATES"}),a(R(e)),a(q(!1)));case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},onEditMode:function(e){return{type:"ON EDIT MODE",id:e}},offEditMode:V,newEventToggle:q})(pe),fe=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,232)).then((function(t){var n=t.getCLS,a=t.getFID,i=t.getFCP,s=t.getLCP,c=t.getTTFB;n(e),a(e),i(e),s(e),c(e)}))},be=n(67),me=n(137),ve=Object(be.c)({eventsPage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1?arguments[1]:void 0;if(!e)return{};switch(t.type){case"SET POINTS":var n=Object(l.a)(Object(l.a)({},e),{},{points:Object(b.a)(t.points)});return n.points.forEach((function(e,n){Object(l.a)({},t.points[n]).destination=Object(l.a)({},t.points[n].destination)})),n;case"ADD POINT":return Object(l.a)(Object(l.a)({},e),{},{points:Object(b.a)(e.points.concat(t.point))});case"UPDATE POINT":return Object(l.a)(Object(l.a)({},e),{},{points:Object(b.a)(e.points.filter((function(e){return e.id!==t.id})).concat(t.data))});case"SET DATES":var a=Array.from(new Set(e.points.map((function(e){return N(e.date_from,m)})))),i=Array.from(new Set(e.points.map((function(e){return N(e.date_from,v)})))),s=Object(l.a)({},e);return s.dates=i.map((function(e,t){return{text:e,dateTime:a[t]}})),s;case"SET DESTINATIONS":return Object(l.a)(Object(l.a)({},e),{},{destinations:t.destinations});case"SET OFFERS":return Object(l.a)(Object(l.a)({},e),{},{offers:t.offers});case"ON SENDING DATA":return Object(l.a)(Object(l.a)({},e),{},{isSendingData:e.isSendingData.concat(t.id)});case"OFF SENDING DATA":return Object(l.a)(Object(l.a)({},e),{},{isSendingData:e.isSendingData.filter((function(e){return e!==t.id}))});case"ON EDIT MODE":return Object(l.a)(Object(l.a)({},e),{},{editMode:e.editMode.concat(t.id)});case"OFF EDIT MODE":return Object(l.a)(Object(l.a)({},e),{},{editMode:e.editMode.filter((function(e){return e!==t.id}))});case"SET NEW EVENT":return Object(l.a)(Object(l.a)({},e),{},{newEventEdit:t.mode});default:return e}}}),_e=Object(be.d)(ve,Object(be.a)(me.a));r.a.render(Object(a.jsx)(o.a,{children:Object(a.jsx)(d.a,{store:_e,children:Object(a.jsx)(je,{})})}),document.getElementById("root")),fe()}},[[227,1,2]]]);
//# sourceMappingURL=main.f6d53151.chunk.js.map