var g=void 0,k=!0,n=null,p=!1,r,s=this;
function t(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b}function v(a){return a[aa]||(a[aa]=++ba)}var aa="closure_uid_"+(1E9*Math.random()>>>0),ba=0;function ca(a,b,c){return a.call.apply(a.bind,arguments)}function da(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}}
function w(a,b,c){w=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?ca:da;return w.apply(n,arguments)}function x(a,b){BitEx.prototype[a]=b}function y(a,b){function c(){}c.prototype=b.prototype;a.M=b.prototype;a.prototype=new c};var A,B,C,D;function ea(){return s.navigator?s.navigator.userAgent:n}D=C=B=A=p;var E;if(E=ea()){var fa=s.navigator;A=0==E.indexOf("Opera");B=!A&&-1!=E.indexOf("MSIE");C=!A&&-1!=E.indexOf("WebKit");D=!A&&!C&&"Gecko"==fa.product}var ga=A,G=B,H=D,I=C,ha=s.navigator,ia=-1!=(ha&&ha.platform||"").indexOf("Mac");function ja(){var a=s.document;return a?a.documentMode:g}var J;
a:{var K="",L;if(ga&&s.opera)var M=s.opera.version,K="function"==typeof M?M():M;else if(H?L=/rv\:([^\);]+)(\)|;)/:G?L=/MSIE\s+([^\);]+)(\)|;)/:I&&(L=/WebKit\/(\S+)/),L)var ka=L.exec(ea()),K=ka?ka[1]:"";if(G){var la=ja();if(la>parseFloat(K)){J=String(la);break a}}J=K}var ma={};
function N(a){var b;if(!(b=ma[a])){b=0;for(var c=String(J).replace(/^[\s\xa0]+|[\s\xa0]+$/g,"").split("."),d=String(a).replace(/^[\s\xa0]+|[\s\xa0]+$/g,"").split("."),f=Math.max(c.length,d.length),e=0;0==b&&e<f;e++){var h=c[e]||"",m=d[e]||"",l=RegExp("(\\d*)(\\D*)","g"),F=RegExp("(\\d*)(\\D*)","g");do{var q=l.exec(h)||["","",""],u=F.exec(m)||["","",""];if(0==q[0].length&&0==u[0].length)break;b=((0==q[1].length?0:parseInt(q[1],10))<(0==u[1].length?0:parseInt(u[1],10))?-1:(0==q[1].length?0:parseInt(q[1],
10))>(0==u[1].length?0:parseInt(u[1],10))?1:0)||((0==q[2].length)<(0==u[2].length)?-1:(0==q[2].length)>(0==u[2].length)?1:0)||(q[2]<u[2]?-1:q[2]>u[2]?1:0)}while(0==b)}b=ma[a]=0<=b}return b}var na=s.document,oa=!na||!G?g:ja()||("CSS1Compat"==na.compatMode?parseInt(J,10):5);function O(){0!=pa&&(this.P=Error().stack,v(this))}var pa=0;function P(a,b){this.type=a;this.currentTarget=this.target=b}P.prototype.g=p;P.prototype.defaultPrevented=p;P.prototype.k=k;P.prototype.preventDefault=function(){this.defaultPrevented=k;this.k=p};var qa=0;function ra(){}r=ra.prototype;r.key=0;r.f=p;r.i=p;r.init=function(a,b,c,d,f,e){if("function"==t(a))this.o=k;else if(a&&a.handleEvent&&"function"==t(a.handleEvent))this.o=p;else throw Error("Invalid listener argument");this.d=a;this.proxy=b;this.src=c;this.type=d;this.capture=!!f;this.l=e;this.i=p;this.key=++qa;this.f=p};r.handleEvent=function(a){return this.o?this.d.call(this.l||this.src,a):this.d.handleEvent.call(this.d,a)};var sa="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function ta(a,b){for(var c,d,f=1;f<arguments.length;f++){d=arguments[f];for(c in d)a[c]=d[c];for(var e=0;e<sa.length;e++)c=sa[e],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}};var ua;if(!(ua=!G))ua=G&&9<=oa;var va=ua,wa=G&&!N("9");!I||N("528");H&&N("1.9b")||G&&N("8")||ga&&N("9.5")||I&&N("528");H&&!N("8")||G&&N("9");var xa=Array.prototype,ya=xa.indexOf?function(a,b,c){return xa.indexOf.call(a,b,c)}:function(a,b,c){c=c==n?0:0>c?Math.max(0,a.length+c):c;if("string"==typeof a)return"string"!=typeof b||1!=b.length?-1:a.indexOf(b,c);for(;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1};function za(a){za[" "](a);return a}za[" "]=function(){};function Q(a,b){a&&this.init(a,b)}y(Q,P);r=Q.prototype;r.target=n;r.relatedTarget=n;r.offsetX=0;r.offsetY=0;r.clientX=0;r.clientY=0;r.screenX=0;r.screenY=0;r.button=0;r.keyCode=0;r.charCode=0;r.ctrlKey=p;r.altKey=p;r.shiftKey=p;r.metaKey=p;r.D=p;r.n=n;
r.init=function(a,b){var c=this.type=a.type;P.call(this,c);this.target=a.target||a.srcElement;this.currentTarget=b;var d=a.relatedTarget;if(d){if(H){var f;a:{try{za(d.nodeName);f=k;break a}catch(e){}f=p}f||(d=n)}}else"mouseover"==c?d=a.fromElement:"mouseout"==c&&(d=a.toElement);this.relatedTarget=d;this.offsetX=I||a.offsetX!==g?a.offsetX:a.layerX;this.offsetY=I||a.offsetY!==g?a.offsetY:a.layerY;this.clientX=a.clientX!==g?a.clientX:a.pageX;this.clientY=a.clientY!==g?a.clientY:a.pageY;this.screenX=
a.screenX||0;this.screenY=a.screenY||0;this.button=a.button;this.keyCode=a.keyCode||0;this.charCode=a.charCode||("keypress"==c?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.D=ia?a.metaKey:a.ctrlKey;this.state=a.state;this.n=a;a.defaultPrevented&&this.preventDefault();delete this.g};
r.preventDefault=function(){Q.M.preventDefault.call(this);var a=this.n;if(a.preventDefault)a.preventDefault();else if(a.returnValue=p,wa)try{if(a.ctrlKey||112<=a.keyCode&&123>=a.keyCode)a.keyCode=-1}catch(b){}};var Aa={},R={},S={},T={};
function Ba(a,b,c,d,f){if("array"==t(b))for(var e=0;e<b.length;e++)Ba(a,b[e],c,d,f);else{a:{if(!b)throw Error("Invalid event type");d=!!d;var h=R;b in h||(h[b]={c:0,b:0});h=h[b];d in h||(h[d]={c:0,b:0},h.c++);var h=h[d],e=v(a),m;h.b++;if(h[e]){m=h[e];for(var l=0;l<m.length;l++)if(h=m[l],h.d==c&&h.l==f){if(h.f)break;m[l].i=p;a=m[l];break a}}else m=h[e]=[],h.c++;l=Ca();h=new ra;h.init(c,l,a,b,d,f);h.i=p;l.src=a;l.d=h;m.push(h);S[e]||(S[e]=[]);S[e].push(h);a.addEventListener?(a==s||!a.m)&&a.addEventListener(b,
l,d):a.attachEvent(b in T?T[b]:T[b]="on"+b,l);a=h}Aa[a.key]=a}}function Ca(){var a=Da,b=va?function(c){return a.call(b.src,b.d,c)}:function(c){c=a.call(b.src,b.d,c);if(!c)return c};return b}function Ea(a,b,c,d,f){if("array"==t(b))for(var e=0;e<b.length;e++)Ea(a,b[e],c,d,f);else{d=!!d;a:{e=R;if(b in e&&(e=e[b],d in e&&(e=e[d],a=v(a),e[a]))){a=e[a];break a}a=n}if(a)for(e=0;e<a.length;e++)if(a[e].d==c&&a[e].capture==d&&a[e].l==f){Fa(a[e].key);break}}}
function Fa(a){var b=Aa[a];if(b&&!b.f){var c=b.src,d=b.type,f=b.proxy,e=b.capture;c.removeEventListener?(c==s||!c.m)&&c.removeEventListener(d,f,e):c.detachEvent&&c.detachEvent(d in T?T[d]:T[d]="on"+d,f);c=v(c);if(S[c]){var f=S[c],h=ya(f,b);0<=h&&xa.splice.call(f,h,1);0==f.length&&delete S[c]}b.f=k;if(b=R[d][e][c])b.p=k,Ga(d,e,c,b);delete Aa[a]}}
function Ga(a,b,c,d){if(!d.j&&d.p){for(var f=0,e=0;f<d.length;f++)d[f].f?d[f].proxy.src=n:(f!=e&&(d[e]=d[f]),e++);d.length=e;d.p=p;0==e&&(delete R[a][b][c],R[a][b].c--,0==R[a][b].c&&(delete R[a][b],R[a].c--),0==R[a].c&&delete R[a])}}function U(a,b,c,d,f){var e=1;b=v(b);if(a[b]){var h=--a.b,m=a[b];m.j?m.j++:m.j=1;try{for(var l=m.length,F=0;F<l;F++){var q=m[F];q&&!q.f&&(e&=Ha(q,f)!==p)}}finally{a.b=Math.max(h,a.b),m.j--,Ga(c,d,b,m)}}return Boolean(e)}
function Ha(a,b){a.i&&Fa(a.key);return a.handleEvent(b)}
function Da(a,b){if(a.f)return k;var c=a.type,d=R;if(!(c in d))return k;var d=d[c],f,e;if(!va){var h;if(!(h=b))a:{h=["window","event"];for(var m=s;f=h.shift();)if(m[f]!=n)m=m[f];else{h=n;break a}h=m}f=h;h=k in d;m=p in d;if(h){if(0>f.keyCode||f.returnValue!=g)return k;a:{var l=p;if(0==f.keyCode)try{f.keyCode=-1;break a}catch(F){l=k}if(l||f.returnValue==g)f.returnValue=k}}l=new Q;l.init(f,this);f=k;try{if(h){for(var q=[],u=l.currentTarget;u;u=u.parentNode)q.push(u);e=d[k];e.b=e.c;for(var z=q.length-
1;!l.g&&0<=z&&e.b;z--)l.currentTarget=q[z],f&=U(e,q[z],c,k,l);if(m){e=d[p];e.b=e.c;for(z=0;!l.g&&z<q.length&&e.b;z++)l.currentTarget=q[z],f&=U(e,q[z],c,p,l)}}else f=Ha(a,l)}finally{q&&(q.length=0)}return f}c=new Q(b,this);return f=Ha(a,c)};function Ia(){O.call(this)}y(Ia,O);r=Ia.prototype;r.m=k;r.q=n;r.addEventListener=function(a,b,c,d){Ba(this,a,b,c,d)};r.removeEventListener=function(a,b,c,d){Ea(this,a,b,c,d)};
r.dispatchEvent=function(a){var b=a.type||a,c=R;if(b in c){if("string"==typeof a)a=new P(a,this);else if(a instanceof P)a.target=a.target||this;else{var d=a;a=new P(b,this);ta(a,d)}var d=1,f,c=c[b],b=k in c,e;if(b){f=[];for(e=this;e;e=e.q)f.push(e);e=c[k];e.b=e.c;for(var h=f.length-1;!a.g&&0<=h&&e.b;h--)a.currentTarget=f[h],d&=U(e,f[h],a.type,k,a)&&a.k!=p}if(p in c)if(e=c[p],e.b=e.c,b)for(h=0;!a.g&&h<f.length&&e.b;h++)a.currentTarget=f[h],d&=U(e,f[h],a.type,p,a)&&a.k!=p;else for(f=this;!a.g&&f&&e.b;f=
f.q)a.currentTarget=f,d&=U(e,f,a.type,p,a)&&a.k!=p;a=Boolean(d)}else a=k;return a};function V(){O.call(this)}y(V,Ia);r=V.prototype;r.a=n;r.h=p;r.e=p;r.open=function(a){if("WebSocket"in window)this.a=new WebSocket(a);else if("MozWebSocket"in window)this.a=new MozWebSocket(a);else throw"WebSockets are not available";this.a.onopen=w(this.C,this);this.a.onclose=w(this.z,this);this.a.onmessage=w(this.B,this);this.a.onerror=w(this.A,this)};r.v=function(){return this.h};r.w=function(){return this.e};r.C=function(){this.dispatchEvent("opened");this.h=k;this.e=p};
r.z=function(){this.dispatchEvent("closed");this.e=this.h=p};r.A=function(){this.dispatchEvent("error");this.e=this.h=p};
r.B=function(a){a=JSON.parse(a.data);this.dispatchEvent(new W("raw_message",a));switch(a.MsgType){case "0":this.dispatchEvent(new W("heartbeat",a));break;case "BF":1==a.UserStatus?(this.e=k,this.dispatchEvent(new W("login_ok",a))):(this.e=p,this.dispatchEvent(new W("login_error",a)));break;case "U13":1==a.UserStatus?this.dispatchEvent(new W("pwd_changed_ok",a)):this.dispatchEvent(new W("pwd_changed_error",a));break;case "U14":this.dispatchEvent(new W("btc_address",a));break;case "U10":this.dispatchEvent(new W("withdraw_response",
a));break;case "U3":this.dispatchEvent(new W("balance_response",a));break;case "U5":this.dispatchEvent(new W("order_list_response",a));break;case "W":if(1!=a.MarketDepth){this.dispatchEvent(new W("ob_clear"));this.dispatchEvent(new W("trade_clear"));for(var b in a.MDFullGrp){var c=a.MDFullGrp[b];switch(c.MDEntryType){case "0":case "1":this.dispatchEvent(new W("ob_new_order",c));break;case "2":this.dispatchEvent(new W("trade",c))}}}this.dispatchEvent(new W("md_full_refresh",a));break;case "X":if("3"==
a.MDBkTyp)for(b in a.MDIncGrp)switch(c=a.MDIncGrp[b],c.MDEntryType){case "0":case "1":switch(c.MDUpdateAction){case "0":this.dispatchEvent(new W("ob_new_order",c));break;case "1":this.dispatchEvent(new W("ob_update_order",c));break;case "2":this.dispatchEvent(new W("ob_delete_order",c));break;case "3":this.dispatchEvent(new W("ob_delete_orders_thru",c))}break;case "2":this.dispatchEvent(new W("trade",c))}this.dispatchEvent(new W("md_incremental_refresh",a));break;case "Y":this.dispatchEvent(new W("md_request_reject",
a));break;case "8":this.dispatchEvent(new W("execution_report",a))}};r.close=function(){this.e=this.h=p;this.a.close();this.a=n};r.login=function(a,b){this.a.send(JSON.stringify({MsgType:"BE",UserReqID:"1",Username:a,Password:b,UserReqTyp:"1"}))};r.t=function(a){this.a.send(JSON.stringify({MsgType:"U10",Email:a}))};r.G=function(a,b){this.a.send(JSON.stringify({MsgType:"U12",Token:a,NewPassword:b}))};r.s=function(a,b){this.a.send(JSON.stringify({MsgType:"BE",UserReqID:"3",Password:a,NewPassword:b}))};
r.L=function(a,b,c){var d=parseInt(1E6*Math.random(),10);this.a.send(JSON.stringify({MsgType:"V",MDReqID:d,SubscriptionRequestType:"1",MarketDepth:a,MDUpdateType:"1",MDEntryTypes:c,Instruments:b}));return d};r.O=function(a){this.a.send(JSON.stringify({MsgType:"V",MDReqID:a,SubscriptionRequestType:"2"}))};r.K=function(a,b,c){this.a.send(JSON.stringify({MsgType:"U0",Username:a,Password:b,Email:c}))};
r.F=function(a,b,c,d){a=a||parseInt(1E7*Math.random(),10);this.a.send(JSON.stringify({MsgType:"U4",OrdersReqID:a,Page:b||0,PageSize:c||100,StatusList:d||["0","1"]}));return a};function Ja(a,b,c,d,f,e){e=e||parseInt(1E7*Math.random(),10);d=parseInt(1E5*d,10);c=parseInt(1E8*c,10);a.a.send(JSON.stringify({MsgType:"D",ClOrdID:""+e,Symbol:b,Side:f,OrdType:"2",Price:d,OrderQty:c}));return e}r.r=function(a,b){var c={MsgType:"F"};a?c.OrigClOrdID=a:b&&(c.OrderID=b);this.a.send(JSON.stringify(c))};r.I=function(a){this.a.send(JSON.stringify(a))};
r.H=function(a,b,c,d){return Ja(this,a,b,c,"1",d)};r.J=function(a,b,c,d){return Ja(this,a,b,c,"2",d)};r.N=function(){this.a.send(JSON.stringify({MsgType:"1",TestReqID:Math.random()}))};r.u=function(a,b){this.a.send(JSON.stringify({MsgType:"U9",NewBTCReqID:a,UserID:b}))};function W(a,b){P.call(this,a);this.data=b}y(W,P);var X=["BitEx"],Y=s;!(X[0]in Y)&&Y.execScript&&Y.execScript("var "+X[0]);for(var Z;X.length&&(Z=X.shift());){var Ka;if(Ka=!X.length)Ka=V!==g;Ka?Y[Z]=V:Y=Y[Z]?Y[Z]:Y[Z]={}}
x("open",V.prototype.open);x("close",V.prototype.close);x("login",V.prototype.login);x("isLogged",V.prototype.w);x("isConnected",V.prototype.v);x("changePassword",V.prototype.s);x("subscribeMarketData",V.prototype.L);x("getBitcoinAddress",V.prototype.u);x("unSubscribeMarketData",V.prototype.O);x("signUp",V.prototype.K);x("forgotPassword",V.prototype.t);x("resetPassword",V.prototype.G);x("requestOrderList",V.prototype.F);x("cancelOrder",V.prototype.r);x("sendRawMessage",V.prototype.I);
x("sendBuyLimitedOrder",V.prototype.H);x("sendSellLimitedOrder",V.prototype.J);x("testRequest",V.prototype.N);x("addEventListener",V.prototype.addEventListener);x("removeEventListener",V.prototype.removeEventListener);
