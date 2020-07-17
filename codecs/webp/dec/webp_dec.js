
var webp_dec = (function() {
  var _scriptDir = typeof document !== 'undefined' && document.currentScript ? document.currentScript.src : undefined;
  if (typeof __filename !== 'undefined') _scriptDir = _scriptDir || __filename;
  return (
function(webp_dec) {
  webp_dec = webp_dec || {};


var d;d||(d=typeof webp_dec !== 'undefined' ? webp_dec : {});var aa;d.ready=new Promise(function(a){aa=a});var t={},u;for(u in d)d.hasOwnProperty(u)&&(t[u]=d[u]);var v=!1,w=!1,ba=!1,ca=!1;v="object"===typeof window;w="function"===typeof importScripts;ba="object"===typeof process&&"object"===typeof process.versions&&"string"===typeof process.versions.node;ca=!v&&!ba&&!w;var x="",z,A,da,ea;
if(ba)x=w?require("path").dirname(x)+"/":__dirname+"/",z=function(a,b){da||(da=require("fs"));ea||(ea=require("path"));a=ea.normalize(a);return da.readFileSync(a,b?null:"utf8")},A=function(a){a=z(a,!0);a.buffer||(a=new Uint8Array(a));a.buffer||B("Assertion failed: undefined");return a},1<process.argv.length&&process.argv[1].replace(/\\/g,"/"),process.argv.slice(2),process.on("uncaughtException",function(a){throw a;}),process.on("unhandledRejection",B),d.inspect=function(){return"[Emscripten Module object]"};
else if(ca)"undefined"!=typeof read&&(z=function(a){return read(a)}),A=function(a){if("function"===typeof readbuffer)return new Uint8Array(readbuffer(a));a=read(a,"binary");"object"===typeof a||B("Assertion failed: undefined");return a},"undefined"!==typeof print&&("undefined"===typeof console&&(console={}),console.log=print,console.warn=console.error="undefined"!==typeof printErr?printErr:print);else if(v||w)w?x=self.location.href:document.currentScript&&(x=document.currentScript.src),_scriptDir&&
(x=_scriptDir),0!==x.indexOf("blob:")?x=x.substr(0,x.lastIndexOf("/")+1):x="",z=function(a){var b=new XMLHttpRequest;b.open("GET",a,!1);b.send(null);return b.responseText},w&&(A=function(a){var b=new XMLHttpRequest;b.open("GET",a,!1);b.responseType="arraybuffer";b.send(null);return new Uint8Array(b.response)});var fa=d.print||console.log.bind(console),C=d.printErr||console.warn.bind(console);for(u in t)t.hasOwnProperty(u)&&(d[u]=t[u]);t=null;var D;d.wasmBinary&&(D=d.wasmBinary);var noExitRuntime;
d.noExitRuntime&&(noExitRuntime=d.noExitRuntime);"object"!==typeof WebAssembly&&C("no native wasm support detected");var E,ha=new WebAssembly.Table({initial:130,maximum:130,element:"anyfunc"}),ia=!1,ja="undefined"!==typeof TextDecoder?new TextDecoder("utf8"):void 0;
function ka(a,b,c){var e=F;if(0<c){c=b+c-1;for(var f=0;f<a.length;++f){var g=a.charCodeAt(f);if(55296<=g&&57343>=g){var n=a.charCodeAt(++f);g=65536+((g&1023)<<10)|n&1023}if(127>=g){if(b>=c)break;e[b++]=g}else{if(2047>=g){if(b+1>=c)break;e[b++]=192|g>>6}else{if(65535>=g){if(b+2>=c)break;e[b++]=224|g>>12}else{if(b+3>=c)break;e[b++]=240|g>>18;e[b++]=128|g>>12&63}e[b++]=128|g>>6&63}e[b++]=128|g&63}}e[b]=0}}var la="undefined"!==typeof TextDecoder?new TextDecoder("utf-16le"):void 0;
function ma(a,b){var c=a>>1;for(var e=c+b/2;!(c>=e)&&G[c];)++c;c<<=1;if(32<c-a&&la)return la.decode(F.subarray(a,c));c=0;for(e="";;){var f=H[a+2*c>>1];if(0==f||c==b/2)return e;++c;e+=String.fromCharCode(f)}}function na(a,b,c){void 0===c&&(c=2147483647);if(2>c)return 0;c-=2;var e=b;c=c<2*a.length?c/2:a.length;for(var f=0;f<c;++f)H[b>>1]=a.charCodeAt(f),b+=2;H[b>>1]=0;return b-e}function oa(a){return 2*a.length}
function pa(a,b){for(var c=0,e="";!(c>=b/4);){var f=I[a+4*c>>2];if(0==f)break;++c;65536<=f?(f-=65536,e+=String.fromCharCode(55296|f>>10,56320|f&1023)):e+=String.fromCharCode(f)}return e}function qa(a,b,c){void 0===c&&(c=2147483647);if(4>c)return 0;var e=b;c=e+c-4;for(var f=0;f<a.length;++f){var g=a.charCodeAt(f);if(55296<=g&&57343>=g){var n=a.charCodeAt(++f);g=65536+((g&1023)<<10)|n&1023}I[b>>2]=g;b+=4;if(b+4>c)break}I[b>>2]=0;return b-e}
function ra(a){for(var b=0,c=0;c<a.length;++c){var e=a.charCodeAt(c);55296<=e&&57343>=e&&++c;b+=4}return b}var K,sa,F,H,G,I,L,ta,ua;function va(a){K=a;d.HEAP8=sa=new Int8Array(a);d.HEAP16=H=new Int16Array(a);d.HEAP32=I=new Int32Array(a);d.HEAPU8=F=new Uint8Array(a);d.HEAPU16=G=new Uint16Array(a);d.HEAPU32=L=new Uint32Array(a);d.HEAPF32=ta=new Float32Array(a);d.HEAPF64=ua=new Float64Array(a)}var wa=d.INITIAL_MEMORY||16777216;d.wasmMemory?E=d.wasmMemory:E=new WebAssembly.Memory({initial:wa/65536,maximum:32768});
E&&(K=E.buffer);wa=K.byteLength;va(K);I[3260]=5256080;function M(a){for(;0<a.length;){var b=a.shift();if("function"==typeof b)b(d);else{var c=b.O;"number"===typeof c?void 0===b.L?d.dynCall_v(c):d.dynCall_vi(c,b.L):c(void 0===b.L?null:b.L)}}}var xa=[],ya=[],za=[],Aa=[],Ba=[];function Ca(){var a=d.preRun.shift();xa.unshift(a)}var N=0,Da=null,O=null;d.preloadedImages={};d.preloadedAudios={};
function B(a){if(d.onAbort)d.onAbort(a);fa(a);C(a);ia=!0;throw new WebAssembly.RuntimeError("abort("+a+"). Build with -s ASSERTIONS=1 for more info.");}function Ea(a){var b=Q;return String.prototype.startsWith?b.startsWith(a):0===b.indexOf(a)}function Fa(){return Ea("data:application/octet-stream;base64,")}var Q="webp_dec.wasm";if(!Fa()){var Ga=Q;Q=d.locateFile?d.locateFile(Ga,x):x+Ga}
function Ha(){try{if(D)return new Uint8Array(D);if(A)return A(Q);throw"both async and sync fetching of the wasm failed";}catch(a){B(a)}}function Ia(){return D||!v&&!w||"function"!==typeof fetch||Ea("file://")?new Promise(function(a){a(Ha())}):fetch(Q,{credentials:"same-origin"}).then(function(a){if(!a.ok)throw"failed to load wasm binary file at '"+Q+"'";return a.arrayBuffer()}).catch(function(){return Ha()})}ya.push({O:function(){Ja()}});function R(){return 0<R.N}
function Ka(a){switch(a){case 1:return 0;case 2:return 1;case 4:return 2;case 8:return 3;default:throw new TypeError("Unknown type size: "+a);}}var La=void 0;function S(a){for(var b="";F[a];)b+=La[F[a++]];return b}var T={},U={},V={};function Ma(a){if(void 0===a)return"_unknown";a=a.replace(/[^a-zA-Z0-9_]/g,"$");var b=a.charCodeAt(0);return 48<=b&&57>=b?"_"+a:a}
function Na(a,b){a=Ma(a);return(new Function("body","return function "+a+'() {\n    "use strict";    return body.apply(this, arguments);\n};\n'))(b)}function Oa(a){var b=Error,c=Na(a,function(e){this.name=a;this.message=e;e=Error(e).stack;void 0!==e&&(this.stack=this.toString()+"\n"+e.replace(/^Error(:[^\n]*)?\n/,""))});c.prototype=Object.create(b.prototype);c.prototype.constructor=c;c.prototype.toString=function(){return void 0===this.message?this.name:this.name+": "+this.message};return c}
var Pa=void 0;function W(a){throw new Pa(a);}var Qa=void 0;function Ra(a,b){function c(k){k=b(k);if(k.length!==e.length)throw new Qa("Mismatched type converter count");for(var h=0;h<e.length;++h)X(e[h],k[h])}var e=[];e.forEach(function(k){V[k]=a});var f=Array(a.length),g=[],n=0;a.forEach(function(k,h){U.hasOwnProperty(k)?f[h]=U[k]:(g.push(k),T.hasOwnProperty(k)||(T[k]=[]),T[k].push(function(){f[h]=U[k];++n;n===g.length&&c(f)}))});0===g.length&&c(f)}
function X(a,b,c){c=c||{};if(!("argPackAdvance"in b))throw new TypeError("registerType registeredInstance requires argPackAdvance");var e=b.name;a||W('type "'+e+'" must have a positive integer typeid pointer');if(U.hasOwnProperty(a)){if(c.R)return;W("Cannot register type '"+e+"' twice")}U[a]=b;delete V[a];T.hasOwnProperty(a)&&(b=T[a],delete T[a],b.forEach(function(f){f()}))}var Sa=[],Y=[{},{value:void 0},{value:null},{value:!0},{value:!1}];
function Va(a){4<a&&0===--Y[a].M&&(Y[a]=void 0,Sa.push(a))}function Wa(a){switch(a){case void 0:return 1;case null:return 2;case !0:return 3;case !1:return 4;default:var b=Sa.length?Sa.pop():Y.length;Y[b]={M:1,value:a};return b}}function Xa(a){return this.fromWireType(L[a>>2])}function Ya(a){if(null===a)return"null";var b=typeof a;return"object"===b||"array"===b||"function"===b?a.toString():""+a}
function Za(a,b){switch(b){case 2:return function(c){return this.fromWireType(ta[c>>2])};case 3:return function(c){return this.fromWireType(ua[c>>3])};default:throw new TypeError("Unknown float type: "+a);}}function $a(a){var b=Function;if(!(b instanceof Function))throw new TypeError("new_ called with constructor type "+typeof b+" which is not a function");var c=Na(b.name||"unknownFunctionName",function(){});c.prototype=b.prototype;c=new c;a=b.apply(c,a);return a instanceof Object?a:c}
function ab(a){for(;a.length;){var b=a.pop();a.pop()(b)}}function bb(a,b){var c=d;if(void 0===c[a].J){var e=c[a];c[a]=function(){c[a].J.hasOwnProperty(arguments.length)||W("Function '"+b+"' called with an invalid number of arguments ("+arguments.length+") - expects one of ("+c[a].J+")!");return c[a].J[arguments.length].apply(this,arguments)};c[a].J=[];c[a].J[e.P]=e}}
function cb(a,b,c){d.hasOwnProperty(a)?((void 0===c||void 0!==d[a].J&&void 0!==d[a].J[c])&&W("Cannot register public name '"+a+"' twice"),bb(a,a),d.hasOwnProperty(c)&&W("Cannot register multiple overloads of a function with the same number of arguments ("+c+")!"),d[a].J[c]=b):(d[a]=b,void 0!==c&&(d[a].T=c))}function db(a,b){for(var c=[],e=0;e<a;e++)c.push(I[(b>>2)+e]);return c}
function eb(a,b){a=S(a);var c=d["dynCall_"+a];for(var e=[],f=1;f<a.length;++f)e.push("a"+f);f="return function dynCall_"+(a+"_"+b)+"("+e.join(", ")+") {\n";f+="    return dynCall(rawFunction"+(e.length?", ":"")+e.join(", ")+");\n";c=(new Function("dynCall","rawFunction",f+"};\n"))(c,b);"function"!==typeof c&&W("unknown function pointer with signature "+a+": "+b);return c}var fb=void 0;function gb(a){a=hb(a);var b=S(a);Z(a);return b}
function ib(a,b){function c(g){f[g]||U[g]||(V[g]?V[g].forEach(c):(e.push(g),f[g]=!0))}var e=[],f={};b.forEach(c);throw new fb(a+": "+e.map(gb).join([", "]));}function jb(a,b,c){switch(b){case 0:return c?function(e){return sa[e]}:function(e){return F[e]};case 1:return c?function(e){return H[e>>1]}:function(e){return G[e>>1]};case 2:return c?function(e){return I[e>>2]}:function(e){return L[e>>2]};default:throw new TypeError("Unknown integer type: "+a);}}var kb={};
function lb(){return"object"===typeof globalThis?globalThis:Function("return this")()}function mb(a,b){var c=U[a];void 0===c&&W(b+" has unknown type "+gb(a));return c}for(var nb={},ob=Array(256),pb=0;256>pb;++pb)ob[pb]=String.fromCharCode(pb);La=ob;Pa=d.BindingError=Oa("BindingError");Qa=d.InternalError=Oa("InternalError");d.count_emval_handles=function(){for(var a=0,b=5;b<Y.length;++b)void 0!==Y[b]&&++a;return a};
d.get_first_emval=function(){for(var a=5;a<Y.length;++a)if(void 0!==Y[a])return Y[a];return null};fb=d.UnboundTypeError=Oa("UnboundTypeError");
var rb={m:function(a){return qb(a)},i:function(a,b){Aa.unshift({O:a,L:b})},l:function(a){"uncaught_exception"in R?R.N++:R.N=1;throw a;},j:function(a,b,c,e,f){var g=Ka(c);b=S(b);X(a,{name:b,fromWireType:function(n){return!!n},toWireType:function(n,k){return k?e:f},argPackAdvance:8,readValueFromPointer:function(n){if(1===c)var k=sa;else if(2===c)k=H;else if(4===c)k=I;else throw new TypeError("Unknown boolean type size: "+b);return this.fromWireType(k[n>>g])},K:null})},r:function(a,b){b=S(b);X(a,{name:b,
fromWireType:function(c){var e=Y[c].value;Va(c);return e},toWireType:function(c,e){return Wa(e)},argPackAdvance:8,readValueFromPointer:Xa,K:null})},g:function(a,b,c){c=Ka(c);b=S(b);X(a,{name:b,fromWireType:function(e){return e},toWireType:function(e,f){if("number"!==typeof f&&"boolean"!==typeof f)throw new TypeError('Cannot convert "'+Ya(f)+'" to '+this.name);return f},argPackAdvance:8,readValueFromPointer:Za(b,c),K:null})},e:function(a,b,c,e,f,g){var n=db(b,c);a=S(a);f=eb(e,f);cb(a,function(){ib("Cannot call "+
a+" due to unbound types",n)},b-1);Ra(n,function(k){var h=[k[0],null].concat(k.slice(1)),p=k=a,q=f,m=h.length;2>m&&W("argTypes array size mismatch! Must at least get return value and 'this' types!");for(var r=null!==h[1]&&!1,y=!1,l=1;l<h.length;++l)if(null!==h[l]&&void 0===h[l].K){y=!0;break}var Ta="void"!==h[0].name,J="",P="";for(l=0;l<m-2;++l)J+=(0!==l?", ":"")+"arg"+l,P+=(0!==l?", ":"")+"arg"+l+"Wired";p="return function "+Ma(p)+"("+J+") {\nif (arguments.length !== "+(m-2)+") {\nthrowBindingError('function "+
p+" called with ' + arguments.length + ' arguments, expected "+(m-2)+" args!');\n}\n";y&&(p+="var destructors = [];\n");var Ua=y?"destructors":"null";J="throwBindingError invoker fn runDestructors retType classParam".split(" ");q=[W,q,g,ab,h[0],h[1]];r&&(p+="var thisWired = classParam.toWireType("+Ua+", this);\n");for(l=0;l<m-2;++l)p+="var arg"+l+"Wired = argType"+l+".toWireType("+Ua+", arg"+l+"); // "+h[l+2].name+"\n",J.push("argType"+l),q.push(h[l+2]);r&&(P="thisWired"+(0<P.length?", ":"")+P);p+=
(Ta?"var rv = ":"")+"invoker(fn"+(0<P.length?", ":"")+P+");\n";if(y)p+="runDestructors(destructors);\n";else for(l=r?1:2;l<h.length;++l)m=1===l?"thisWired":"arg"+(l-2)+"Wired",null!==h[l].K&&(p+=m+"_dtor("+m+"); // "+h[l].name+"\n",J.push(m+"_dtor"),q.push(h[l].K));Ta&&(p+="var ret = retType.fromWireType(rv);\nreturn ret;\n");J.push(p+"}\n");h=$a(J).apply(null,q);l=b-1;if(!d.hasOwnProperty(k))throw new Qa("Replacing nonexistant public symbol");void 0!==d[k].J&&void 0!==l?d[k].J[l]=h:(d[k]=h,d[k].P=
l);return[]})},b:function(a,b,c,e,f){function g(p){return p}b=S(b);-1===f&&(f=4294967295);var n=Ka(c);if(0===e){var k=32-8*c;g=function(p){return p<<k>>>k}}var h=-1!=b.indexOf("unsigned");X(a,{name:b,fromWireType:g,toWireType:function(p,q){if("number"!==typeof q&&"boolean"!==typeof q)throw new TypeError('Cannot convert "'+Ya(q)+'" to '+this.name);if(q<e||q>f)throw new TypeError('Passing a number "'+Ya(q)+'" from JS side to C/C++ side to an argument of type "'+b+'", which is outside the valid range ['+
e+", "+f+"]!");return h?q>>>0:q|0},argPackAdvance:8,readValueFromPointer:jb(b,n,0!==e),K:null})},a:function(a,b,c){function e(g){g>>=2;var n=L;return new f(K,n[g+1],n[g])}var f=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array][b];c=S(c);X(a,{name:c,fromWireType:e,argPackAdvance:8,readValueFromPointer:e},{R:!0})},h:function(a,b){b=S(b);var c="std::string"===b;X(a,{name:b,fromWireType:function(e){var f=L[e>>2];if(c)for(var g=e+4,n=0;n<=f;++n){var k=e+4+n;
if(0==F[k]||n==f){if(g){var h=g;var p=F,q=h+(k-g);for(g=h;p[g]&&!(g>=q);)++g;if(16<g-h&&p.subarray&&ja)h=ja.decode(p.subarray(h,g));else{for(q="";h<g;){var m=p[h++];if(m&128){var r=p[h++]&63;if(192==(m&224))q+=String.fromCharCode((m&31)<<6|r);else{var y=p[h++]&63;m=224==(m&240)?(m&15)<<12|r<<6|y:(m&7)<<18|r<<12|y<<6|p[h++]&63;65536>m?q+=String.fromCharCode(m):(m-=65536,q+=String.fromCharCode(55296|m>>10,56320|m&1023))}}else q+=String.fromCharCode(m)}h=q}}else h="";if(void 0===l)var l=h;else l+=String.fromCharCode(0),
l+=h;g=k+1}}else{l=Array(f);for(n=0;n<f;++n)l[n]=String.fromCharCode(F[e+4+n]);l=l.join("")}Z(e);return l},toWireType:function(e,f){f instanceof ArrayBuffer&&(f=new Uint8Array(f));var g="string"===typeof f;g||f instanceof Uint8Array||f instanceof Uint8ClampedArray||f instanceof Int8Array||W("Cannot pass non-string to std::string");var n=(c&&g?function(){for(var p=0,q=0;q<f.length;++q){var m=f.charCodeAt(q);55296<=m&&57343>=m&&(m=65536+((m&1023)<<10)|f.charCodeAt(++q)&1023);127>=m?++p:p=2047>=m?p+
2:65535>=m?p+3:p+4}return p}:function(){return f.length})(),k=qb(4+n+1);L[k>>2]=n;if(c&&g)ka(f,k+4,n+1);else if(g)for(g=0;g<n;++g){var h=f.charCodeAt(g);255<h&&(Z(k),W("String has UTF-16 code units that do not fit in 8 bits"));F[k+4+g]=h}else for(g=0;g<n;++g)F[k+4+g]=f[g];null!==e&&e.push(Z,k);return k},argPackAdvance:8,readValueFromPointer:Xa,K:function(e){Z(e)}})},d:function(a,b,c){c=S(c);if(2===b){var e=ma;var f=na;var g=oa;var n=function(){return G};var k=1}else 4===b&&(e=pa,f=qa,g=ra,n=function(){return L},
k=2);X(a,{name:c,fromWireType:function(h){for(var p=L[h>>2],q=n(),m,r=h+4,y=0;y<=p;++y){var l=h+4+y*b;if(0==q[l>>k]||y==p)r=e(r,l-r),void 0===m?m=r:(m+=String.fromCharCode(0),m+=r),r=l+b}Z(h);return m},toWireType:function(h,p){"string"!==typeof p&&W("Cannot pass non-string to C++ string type "+c);var q=g(p),m=qb(4+q+b);L[m>>2]=q>>k;f(p,m+4,q+b);null!==h&&h.push(Z,m);return m},argPackAdvance:8,readValueFromPointer:Xa,K:function(h){Z(h)}})},k:function(a,b){b=S(b);X(a,{S:!0,name:b,argPackAdvance:0,fromWireType:function(){},
toWireType:function(){}})},o:Va,s:function(a){if(0===a)return Wa(lb());var b=kb[a];a=void 0===b?S(a):b;return Wa(lb()[a])},n:function(a){4<a&&(Y[a].M+=1)},f:function(a,b,c,e){a||W("Cannot use deleted val. handle = "+a);a=Y[a].value;var f=nb[b];if(!f){f="";for(var g=0;g<b;++g)f+=(0!==g?", ":"")+"arg"+g;var n="return function emval_allocator_"+b+"(constructor, argTypes, args) {\n";for(g=0;g<b;++g)n+="var argType"+g+" = requireRegisteredType(Module['HEAP32'][(argTypes >>> 2) + "+g+'], "parameter '+g+
'");\nvar arg'+g+" = argType"+g+".readValueFromPointer(args);\nargs += argType"+g+"['argPackAdvance'];\n";f=(new Function("requireRegisteredType","Module","__emval_register",n+("var obj = new constructor("+f+");\nreturn __emval_register(obj);\n}\n")))(mb,d,Wa);nb[b]=f}return f(a,c,e)},q:function(){B()},p:function(a,b,c){F.copyWithin(a,b,b+c)},c:function(a){a>>>=0;var b=F.length;if(2147483648<a)return!1;for(var c=1;4>=c;c*=2){var e=b*(1+.2/c);e=Math.min(e,a+100663296);e=Math.max(16777216,a,e);0<e%
65536&&(e+=65536-e%65536);a:{try{E.grow(Math.min(2147483648,e)-K.byteLength+65535>>>16);va(E.buffer);var f=1;break a}catch(g){}f=void 0}if(f)return!0}return!1},memory:E,table:ha};
(function(){function a(f){d.asm=f.exports;N--;d.monitorRunDependencies&&d.monitorRunDependencies(N);0==N&&(null!==Da&&(clearInterval(Da),Da=null),O&&(f=O,O=null,f()))}function b(f){a(f.instance)}function c(f){return Ia().then(function(g){return WebAssembly.instantiate(g,e)}).then(f,function(g){C("failed to asynchronously prepare wasm: "+g);B(g)})}var e={a:rb};N++;d.monitorRunDependencies&&d.monitorRunDependencies(N);if(d.instantiateWasm)try{return d.instantiateWasm(e,a)}catch(f){return C("Module.instantiateWasm callback failed with error: "+
f),!1}(function(){if(D||"function"!==typeof WebAssembly.instantiateStreaming||Fa()||Ea("file://")||"function"!==typeof fetch)return c(b);fetch(Q,{credentials:"same-origin"}).then(function(f){return WebAssembly.instantiateStreaming(f,e).then(b,function(g){C("wasm streaming compile failed: "+g);C("falling back to ArrayBuffer instantiation");return c(b)})})})();return{}})();
var Ja=d.___wasm_call_ctors=function(){return(Ja=d.___wasm_call_ctors=d.asm.t).apply(null,arguments)},qb=d._malloc=function(){return(qb=d._malloc=d.asm.u).apply(null,arguments)},Z=d._free=function(){return(Z=d._free=d.asm.v).apply(null,arguments)},hb=d.___getTypeName=function(){return(hb=d.___getTypeName=d.asm.w).apply(null,arguments)};d.___embind_register_native_and_builtin_types=function(){return(d.___embind_register_native_and_builtin_types=d.asm.x).apply(null,arguments)};
d.dynCall_iii=function(){return(d.dynCall_iii=d.asm.y).apply(null,arguments)};d.dynCall_vii=function(){return(d.dynCall_vii=d.asm.z).apply(null,arguments)};d.dynCall_ii=function(){return(d.dynCall_ii=d.asm.A).apply(null,arguments)};d.dynCall_i=function(){return(d.dynCall_i=d.asm.B).apply(null,arguments)};d.dynCall_vi=function(){return(d.dynCall_vi=d.asm.C).apply(null,arguments)};d.dynCall_iiii=function(){return(d.dynCall_iiii=d.asm.D).apply(null,arguments)};
d.dynCall_iiiiiii=function(){return(d.dynCall_iiiiiii=d.asm.E).apply(null,arguments)};d.dynCall_viiii=function(){return(d.dynCall_viiii=d.asm.F).apply(null,arguments)};d.dynCall_viiiii=function(){return(d.dynCall_viiiii=d.asm.G).apply(null,arguments)};d.dynCall_viiiiiiiii=function(){return(d.dynCall_viiiiiiiii=d.asm.H).apply(null,arguments)};d.dynCall_viiiiii=function(){return(d.dynCall_viiiiii=d.asm.I).apply(null,arguments)};var sb;O=function tb(){sb||ub();sb||(O=tb)};
function ub(){function a(){if(!sb&&(sb=!0,d.calledRun=!0,!ia)){M(ya);M(za);aa(d);if(d.onRuntimeInitialized)d.onRuntimeInitialized();if(d.postRun)for("function"==typeof d.postRun&&(d.postRun=[d.postRun]);d.postRun.length;){var b=d.postRun.shift();Ba.unshift(b)}M(Ba)}}if(!(0<N)){if(d.preRun)for("function"==typeof d.preRun&&(d.preRun=[d.preRun]);d.preRun.length;)Ca();M(xa);0<N||(d.setStatus?(d.setStatus("Running..."),setTimeout(function(){setTimeout(function(){d.setStatus("")},1);a()},1)):a())}}
d.run=ub;if(d.preInit)for("function"==typeof d.preInit&&(d.preInit=[d.preInit]);0<d.preInit.length;)d.preInit.pop()();noExitRuntime=!0;ub();


  return webp_dec.ready
}
);
})();
if (typeof exports === 'object' && typeof module === 'object')
      module.exports = webp_dec;
    else if (typeof define === 'function' && define['amd'])
      define([], function() { return webp_dec; });
    else if (typeof exports === 'object')
      exports["webp_dec"] = webp_dec;
    