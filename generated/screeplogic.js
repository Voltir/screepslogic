module.exports = (function(){'use strict';var g="object"===typeof __ScalaJSEnv&&__ScalaJSEnv?__ScalaJSEnv:{},h="object"===typeof g.global&&g.global?g.global:"object"===typeof global&&global&&global.Object===Object?global:this;g.global=h;var k="object"===typeof g.exportsNamespace&&g.exportsNamespace?g.exportsNamespace:h;g.exportsNamespace=k;h.Object.freeze(g);var aa=0;function ba(a){var b,c;for(c in a)b=c;return b}function ca(a,b,c){var d=new a.U(b[c]);if(c<b.length-1){a=a.w;c+=1;for(var e=d.P,f=0;f<e.length;f++)e[f]=ca(a,b,c)}return d}
function da(a){switch(typeof a){case "string":return m(ea);case "number":var b=a|0;return b===a?b<<24>>24===b&&1/b!==1/-0?m(fa):b<<16>>16===b&&1/b!==1/-0?m(ga):m(ha):a!==a||ia(a)===a?m(ja):m(ka);case "boolean":return m(la);case "undefined":return m(ma);default:if(null===a)throw(new p).g();return na(a)?m(oa):a&&a.c?m(a.c):null}}
function pa(a){switch(typeof a){case "string":return r(s(),a);case "number":return qa(ra(),a);case "boolean":return a?1231:1237;case "undefined":return 0;default:return a&&a.c||null===a?a.y():42}}function t(a){return null===a?u().h:a}this.__ScalaJSExportsNamespace=k;
function v(a,b,c,d,e,f,q){var n=ba(a);f=f||function(a){return!!(a&&a.c&&a.c.k[n])};q=q||function(a,b){return!!(a&&a.c&&a.c.K===b&&a.c.H.k[n])};this.U=void 0;this.M=d;this.k=e;this.ga=this.w=null;this.R="L"+c+";";this.u=this.v=void 0;this.ba=q;this.name=c;this.isPrimitive=!1;this.isInterface=b;this.isArrayClass=!1;this.isInstance=f}
function sa(a){function b(a){if("number"===typeof a){this.P=Array(a);for(var b=0;b<a;b++)this.P[b]=c}else this.P=a}var c=a.ga;"longZero"==c&&(c=u().h);b.prototype=new y;b.prototype.c=this;var d="["+a.R,e=a.H||a,f=(a.K||0)+1;this.U=b;this.M=z;this.k={e:1};this.w=a;this.H=e;this.K=f;this.ga=null;this.R=d;this.ba=this.u=this.v=void 0;this.name=d;this.isInterface=this.isPrimitive=!1;this.isArrayClass=!0;this.isInstance=function(a){return e.ba(a,f)}}
function m(a){if(!a.v){var b=new A;b.x=a;a.v=b}return a.v}v.prototype.getFakeInstance=function(){return this===ea?"some string":this===la?!1:this===fa||this===ga||this===ha||this===ja||this===ka?0:this===oa?u().h:this===ma?void 0:{c:this}};v.prototype.getSuperclass=function(){return this.M?m(this.M):null};v.prototype.getComponentType=function(){return this.w?m(this.w):null};v.prototype.newArrayOfThisClass=function(a){for(var b=this,c=0;c<a.length;c++)b.u||(b.u=new sa(b)),b=b.u;return ca(b,a,0)};
sa.prototype=v.prototype;var B=h.Math.imul||function(a,b){var c=a&65535,d=b&65535;return c*d+((a>>>16&65535)*d+c*(b>>>16&65535)<<16>>>0)|0},ia=h.Math.fround||function(a){return+a};function C(){}function y(){}y.prototype=C.prototype;C.prototype.g=function(){return this};C.prototype.r=function(){var a=ta(da(this)),b=(+(this.y()>>>0)).toString(16);return a+"@"+b};C.prototype.y=function(){var a;this&&this.c?(a=this.$idHashCode$0,void 0===a&&(this.$idHashCode$0=aa=a=aa+1|0)):a=null===this?0:pa(this);return a};C.prototype.toString=function(){return this.r()};
var z=new v({e:0},!1,"java.lang.Object",null,{e:1},function(a){return null!==a},function(a,b){var c=a&&a.c;if(c){var d=c.K||0;return!(d<b)&&(d>b||!c.H.isPrimitive)}return!1});C.prototype.c=z;function D(){}D.prototype=new y;D.prototype.g=function(){E=this;h.console.log("OMG WAT?");return this};D.prototype.doIt=function(){return 4};D.prototype.c=new v({ha:0},!1,"logic.Main$",z,{ha:1,e:1});var E=void 0;k.logic=k.logic||{};k.logic.Main=function(){E||(E=(new D).g());return E};
function A(){this.x=null}A.prototype=new y;function ta(a){return a.x.name}A.prototype.r=function(){return(this.x.isInterface?"interface ":this.x.isPrimitive?"":"class ")+ta(this)};A.prototype.c=new v({ra:0},!1,"java.lang.Class",z,{ra:1,e:1});function ua(){this.db=null;this.Wa=this.Sa=this.Ta=0}ua.prototype=new y;function va(a,b){var c=b,c=c|c>>>1|0,c=c|c>>>2|0,c=c|c>>>4|0,c=c|c>>>8|0;return 32-wa(c|c>>>16|0)|0}
function wa(a){a=a-(1431655765&a>>1)|0;a=(858993459&a)+(858993459&a>>2)|0;return B(16843009,252645135&(a+(a>>4)|0))>>24}function xa(a,b){return wa(-1+(b&(-b|0))|0)}ua.prototype.c=new v({wa:0},!1,"java.lang.Integer$",z,{wa:1,e:1});var ya=void 0;function F(){ya||(ya=(new ua).g());return ya}function za(){}za.prototype=new y;function Aa(){}Aa.prototype=za.prototype;function Ba(a){return!!(a&&a.c&&a.c.k.i||"number"===typeof a)}var G=new v({i:0},!1,"java.lang.Number",z,{i:1,e:1},Ba);za.prototype.c=G;
function Ca(){}Ca.prototype=new y;function Da(){}Da.prototype=Ca.prototype;var Ea=new v({ea:0},!1,"scala.util.hashing.MurmurHash3",z,{ea:1,e:1});Ca.prototype.c=Ea;function H(){this.o=!1;this.Y=this.na=this.z=this.s=null;this.G=!1;this.ca=this.$=0}H.prototype=new y;
H.prototype.g=function(){I=this;this.s=(this.o=!!(h.ArrayBuffer&&h.Int32Array&&h.Float32Array&&h.Float64Array))?new h.ArrayBuffer(8):null;this.z=this.o?new h.Int32Array(this.s,0,2):null;this.na=this.o?new h.Float32Array(this.s,0,2):null;this.Y=this.o?new h.Float64Array(this.s,0,1):null;if(this.o)this.z[0]=16909060,a=1===((new h.Int8Array(this.s,0,8))[0]|0);else var a=!0;this.$=(this.G=a)?0:1;this.ca=this.G?1:0;return this};
function qa(a,b){var c=b|0;if(c===b&&-Infinity!==1/b)return c;if(a.o)a.Y[0]=b,c=Fa(Ga(J(a.z[a.$]|0),32),Ha((new K).f(4194303,1023,0),J(a.z[a.ca]|0)));else{if(b!==b)var c=!1,d=2047,e=+h.Math.pow(2,51);else if(Infinity===b||-Infinity===b)c=0>b,d=2047,e=0;else if(0===b)c=-Infinity===1/b,e=d=0;else{var f=(c=0>b)?-b:b;if(f>=+h.Math.pow(2,-1022)){var d=+h.Math.pow(2,52),e=+h.Math.log(f)/0.6931471805599453,e=+h.Math.floor(e)|0,e=1023>e?e:1023,q=f/+h.Math.pow(2,e)*d,f=+h.Math.floor(q),q=q-f,f=0.5>q?f:0.5<
q?1+f:0!==f%2?1+f:f;2<=f/d&&(e=1+e|0,f=1);1023<e?(e=2047,f=0):(e=1023+e|0,f-=d);d=e;e=f}else d=f/+h.Math.pow(2,-1074),e=+h.Math.floor(d),f=d-e,d=0,e=0.5>f?e:0.5<f?1+e:0!==e%2?1+e:e}e=+ +e;f=e|0;c=Fa(Ga(J((c?-2147483648:0)|(d|0)<<20|e/4294967296|0),32),Ha((new K).f(4194303,1023,0),J(f)))}return L(M(c,N(c)))}H.prototype.c=new v({Fa:0},!1,"scala.scalajs.runtime.Bits$",z,{Fa:1,e:1});var I=void 0;function ra(){I||(I=(new H).g());return I}function Ia(){}Ia.prototype=new y;
function r(a,b){for(var c=0,d=1,e=-1+(b.length|0)|0;0<=e;)c=c+B(65535&(b.charCodeAt(e)|0),d)|0,d=B(31,d),e=-1+e|0;return c}Ia.prototype.c=new v({Ha:0},!1,"scala.scalajs.runtime.RuntimeString$",z,{Ha:1,e:1});var Ja=void 0;function s(){Ja||(Ja=(new Ia).g());return Ja}function O(){this.gb=!1;this.ka=this.W=this.la=null;this.fb=!1}O.prototype=new y;
O.prototype.g=function(){P=this;for(var a={O:"java_lang_Object",T:"java_lang_String",V:"scala_Unit",Z:"scala_Boolean",C:"scala_Char",B:"scala_Byte",S:"scala_Short",I:"scala_Int",J:"scala_Long",F:"scala_Float",D:"scala_Double"},b=0;22>=b;)2<=b&&(a["T"+b]="scala_Tuple"+b),a["F"+b]="scala_Function"+b,b=1+b|0;this.la=a;this.W={sjsr_:"scala_scalajs_runtime_",sjs_:"scala_scalajs_",sci_:"scala_collection_immutable_",scm_:"scala_collection_mutable_",scg_:"scala_collection_generic_",sc_:"scala_collection_",
sr_:"scala_runtime_",s_:"scala_",jl_:"java_lang_",ju_:"java_util_"};this.ka=h.Object.keys(this.W);return this};O.prototype.c=new v({Ia:0},!1,"scala.scalajs.runtime.StackTrace$",z,{Ia:1,e:1});var P=void 0;function Ka(){P||(P=(new O).g());return P}function La(){}La.prototype=new y;function Ma(a,b){return b&&b.c&&b.c.k.N?b.p:b}La.prototype.c=new v({Ja:0},!1,"scala.scalajs.runtime.package$",z,{Ja:1,e:1});var Na=void 0;function Oa(){Na||(Na=(new La).g());return Na}
var ma=new v({Ka:0},!1,"scala.runtime.BoxedUnit",z,{Ka:1,e:1},function(a){return void 0===a});function Pa(){}Pa.prototype=new y;Pa.prototype.c=new v({La:0},!1,"scala.runtime.BoxesRunTime$",z,{La:1,e:1});var Qa=void 0;function Ra(){}Ra.prototype=new y;Ra.prototype.c=new v({Ma:0},!1,"scala.runtime.ScalaRunTime$",z,{Ma:1,e:1});var Sa=void 0,la=new v({pa:0},!1,"java.lang.Boolean",z,{pa:1,e:1,l:1},function(a){return"boolean"===typeof a});function Q(){this.lb=this.ma=this.da=null}Q.prototype=new y;
function Ta(){}Ta.prototype=Q.prototype;Q.prototype.X=function(){var a=Ka(),b;a:try{b=a.undef()}catch(c){Oa();c&&c.c&&c.c.k.m?a=c:(a=new R,a.p=c,S.prototype.g.call(a));if(null!==a){if(a&&a.c&&a.c.k.N){b=a.p;break a}throw Ma(Oa(),a);}throw c;}this.stackdata=b;return this};Q.prototype.r=function(){var a=ta(da(this)),b=this.da;return null===b?a:a+": "+b};Q.prototype.aa=function(a,b){this.da=a;this.ma=b;this.X();return this};var Ua=new v({m:0},!1,"java.lang.Throwable",z,{m:1,e:1,j:1});Q.prototype.c=Ua;
function T(){this.Ea=this.Aa=this.Da=this.ob=this.nb=this.ib=this.mb=this.eb=0}T.prototype=new Da;T.prototype.g=function(){Va=this;this.Da=r(s(),"Seq");this.Aa=r(s(),"Map");this.Ea=r(s(),"Set");return this};T.prototype.c=new v({Ca:0},!1,"scala.util.hashing.MurmurHash3$",Ea,{Ca:1,ea:1,e:1});var Va=void 0,fa=new v({qa:0},!1,"java.lang.Byte",G,{qa:1,i:1,e:1,l:1},function(a){return a<<24>>24===a&&1/a!==1/-0}),ka=new v({sa:0},!1,"java.lang.Double",G,{sa:1,i:1,e:1,l:1},function(a){return"number"===typeof a});
function Wa(){Q.call(this)}Wa.prototype=new Ta;function Xa(){}Xa.prototype=Wa.prototype;var Ya=new v({q:0},!1,"java.lang.Exception",Ua,{q:1,m:1,e:1,j:1});Wa.prototype.c=Ya;
var ja=new v({ta:0},!1,"java.lang.Float",G,{ta:1,i:1,e:1,l:1},function(a){return a!==a||ia(a)===a}),ha=new v({va:0},!1,"java.lang.Integer",G,{va:1,i:1,e:1,l:1},function(a){return(a|0)===a&&1/a!==1/-0}),oa=new v({xa:0},!1,"java.lang.Long",G,{xa:1,i:1,e:1,l:1},function(a){return na(a)}),ga=new v({za:0},!1,"java.lang.Short",G,{za:1,i:1,e:1,l:1},function(a){return a<<16>>16===a&&1/a!==1/-0});function K(){this.a=this.b=this.d=0}K.prototype=new Aa;
function Fa(a,b){return(new K).f(a.d|b.d,a.b|b.b,a.a|b.a)}K.prototype.f=function(a,b,c){this.d=a;this.b=b;this.a=c;return this};K.prototype.r=function(){if(0===this.d&&0===this.b&&0===this.a)return"0";if(U(this,u().n))return"-9223372036854775808";if(0!==(524288&this.a))return"-"+V(this).r();var a=u().Q,b=this,c="";for(;;){var d=b;if(0===d.d&&0===d.b&&0===d.a)return c;d=Za(b,a);b=d[0];d=""+L(d[1]);c=(0===b.d&&0===b.b&&0===b.a?"":"000000000".substring(d.length|0))+d+c}};
function Za(a,b){if(0===b.d&&0===b.b&&0===b.a)throw(new ab).L("/ by zero");if(0===a.d&&0===a.b&&0===a.a)return[u().h,u().h];if(U(b,u().n))return U(a,u().n)?[u().E,u().h]:[u().h,a];var c=0!==(524288&a.a),d=0!==(524288&b.a),e=U(a,u().n),f=0===b.a&&0===b.b&&0!==b.d&&0===(b.d&(-1+b.d|0))?xa(F(),b.d):0===b.a&&0!==b.b&&0===b.d&&0===(b.b&(-1+b.b|0))?22+xa(F(),b.b)|0:0!==b.a&&0===b.b&&0===b.d&&0===(b.a&(-1+b.a|0))?44+xa(F(),b.a)|0:-1;if(0<=f){if(e)return c=W(a,f),[d?V(c):c,u().h];var e=0!==(524288&a.a)?V(a):
a,q=W(e,f),d=c!==d?V(q):q,e=22>=f?(new K).f(e.d&(-1+(1<<f)|0),0,0):44>=f?(new K).f(e.d,e.b&(-1+(1<<(-22+f|0))|0),0):(new K).f(e.d,e.b,e.a&(-1+(1<<(-44+f|0))|0)),c=c?V(e):e;return[d,c]}f=0!==(524288&b.a)?V(b):b;if(e)var n=u().A;else{var l=0!==(524288&a.a)?V(a):a;if(0===(524288&f.a)?0!==(524288&l.a)||f.a>l.a||f.a===l.a&&f.b>l.b||f.a===l.a&&f.b===l.b&&f.d>l.d:!(0===(524288&l.a)||f.a<l.a||f.a===l.a&&f.b<l.b||f.a===l.a&&f.b===l.b&&f.d<=l.d))return[u().h,a];n=l}var l=bb(f)-bb(n)|0,x=Ga(f,l),f=l,l=x,x=n,
n=u().h;a:for(;;){if(0>f)var w=!0;else w=x,w=0===w.d&&0===w.b&&0===w.a;if(w){var $a=n,q=x;break a}else w=cb(x,V(l)),0===(524288&w.a)?(x=-1+f|0,l=W(l,1),n=22>f?(new K).f(n.d|1<<f,n.b,n.a):44>f?(new K).f(n.d,n.b|1<<(-22+f|0),n.a):(new K).f(n.d,n.b,n.a|1<<(-44+f|0)),f=x,x=w):(f=-1+f|0,l=W(l,1))}d=c!==d?V($a):$a;c&&e?(c=V(q),e=u().E,c=cb(c,V(e))):c=c?V(q):q;return[d,c]}function Ha(a,b){return(new K).f(a.d&b.d,a.b&b.b,a.a&b.a)}
function N(a){return(new K).f(4194303&(a.b>>10|a.a<<12),4194303&(a.a>>>10|0),0)}function Ga(a,b){var c=63&b;if(22>c){var d=22-c|0;return(new K).f(4194303&a.d<<c,4194303&(a.b<<c|a.d>>d),1048575&(a.a<<c|a.b>>d))}return 44>c?(d=-22+c|0,(new K).f(0,4194303&a.d<<d,1048575&(a.b<<d|a.d>>(44-c|0)))):(new K).f(0,0,1048575&a.d<<(-44+c|0))}function L(a){return a.d|a.b<<22}function J(a){var b=new K;K.prototype.f.call(b,4194303&a,4194303&a>>22,0>a?1048575:0);return b}
function V(a){var b=4194303&(1+~a.d|0),c=4194303&(~a.b+(0===b?1:0)|0);return(new K).f(b,c,1048575&(~a.a+(0===b&&0===c?1:0)|0))}function cb(a,b){var c=a.d+b.d|0,d=(a.b+b.b|0)+(c>>22)|0;return(new K).f(4194303&c,4194303&d,1048575&((a.a+b.a|0)+(d>>22)|0))}
function W(a,b){var c=63&b,d=0!==(524288&a.a),e=d?-1048576|a.a:a.a;if(22>c)return d=22-c|0,(new K).f(4194303&(a.d>>c|a.b<<d),4194303&(a.b>>c|e<<d),1048575&e>>c);if(44>c){var f=-22+c|0;return(new K).f(4194303&(a.b>>f|e<<(44-c|0)),4194303&e>>f,1048575&(d?1048575:0))}return(new K).f(4194303&e>>(-44+c|0),4194303&(d?4194303:0),1048575&(d?1048575:0))}function db(a){return U(a,u().n)?-9223372036854775E3:0!==(524288&a.a)?-db(V(a)):a.d+4194304*a.b+17592186044416*a.a}
function bb(a){return 0!==a.a?-12+va(F(),a.a)|0:0!==a.b?10+va(F(),a.b)|0:32+va(F(),a.d)|0}K.prototype.y=function(){return L(M(this,N(this)))};function M(a,b){return(new K).f(a.d^b.d,a.b^b.b,a.a^b.a)}function U(a,b){return a.d===b.d&&a.b===b.b&&a.a===b.a}function na(a){return!!(a&&a.c&&a.c.k.fa)}K.prototype.c=new v({fa:0},!1,"scala.scalajs.runtime.RuntimeLong",G,{fa:1,i:1,e:1,l:1});
function X(){this.cb=this.bb=this.ab=this.$a=this.Za=this.Ya=this.Xa=this.Va=this.Ua=this.Ra=this.Qa=this.Pa=this.Oa=this.Na=0;this.Q=this.A=this.n=this.ia=this.E=this.h=null}X.prototype=new y;X.prototype.g=function(){Y=this;this.h=(new K).f(0,0,0);this.E=(new K).f(1,0,0);this.ia=(new K).f(4194303,4194303,1048575);this.n=(new K).f(0,0,524288);this.A=(new K).f(4194303,4194303,524287);this.Q=(new K).f(1755648,238,0);return this};
function eb(a,b){if(b!==b)return a.h;if(-9223372036854775E3>b)return a.n;if(9223372036854775E3<=b)return a.A;if(0>b)return V(eb(a,-b));var c=b,d=17592186044416<=c?c/17592186044416|0:0,c=c-17592186044416*d,e=4194304<=c?c/4194304|0:0;return(new K).f(c-4194304*e|0,e,d)}X.prototype.c=new v({Ga:0},!1,"scala.scalajs.runtime.RuntimeLong$",z,{Ga:1,e:1,Ba:1,j:1});var Y=void 0;function u(){Y||(Y=(new X).g());return Y}
var ea=new v({ja:0},!1,"java.lang.String",z,{ja:1,e:1,j:1,hb:1,l:1},function(a){return"string"===typeof a});function S(){Q.call(this)}S.prototype=new Xa;function Z(){}Z.prototype=S.prototype;S.prototype.g=function(){S.prototype.aa.call(this,null,null);return this};S.prototype.L=function(a){S.prototype.aa.call(this,a,null);return this};var $=new v({t:0},!1,"java.lang.RuntimeException",Ya,{t:1,q:1,m:1,e:1,j:1});S.prototype.c=$;function ab(){Q.call(this)}ab.prototype=new Z;
ab.prototype.c=new v({oa:0},!1,"java.lang.ArithmeticException",$,{oa:1,t:1,q:1,m:1,e:1,j:1});function fb(){Q.call(this)}fb.prototype=new Z;fb.prototype.c=new v({ua:0},!1,"java.lang.IndexOutOfBoundsException",$,{ua:1,t:1,q:1,m:1,e:1,j:1});function p(){Q.call(this)}p.prototype=new Z;p.prototype.g=function(){p.prototype.L.call(this,null);return this};p.prototype.c=new v({ya:0},!1,"java.lang.NullPointerException",$,{ya:1,t:1,q:1,m:1,e:1,j:1});function R(){Q.call(this);this.p=null}R.prototype=new Z;
R.prototype.X=function(){Ka();this.stackdata=this.p;return this};R.prototype.r=function(){return void 0===this.p?"undefined":this.p.toString()};
R.prototype.y=function(){var a;Va||(Va=(new T).g());var b=-889275714;for(a=0;1>a;){Sa||(Sa=(new Ra).g());var c;b:switch(a){case 0:c=this.p;break b;default:throw(new fb).L(""+a);}var d=c;c=void 0;if(null===d)c=0;else if(c=void 0,Ba(d))if(Qa||(Qa=(new Pa).g()),(d|0)===d&&1/d!==1/-0)c=d|0;else if(na(d))c=d,d=L(t(c)),c=U(J(d),t(c))?d:L(M(t(c),N(t(c))));else if("number"===typeof d){c=d;var e=+c|0,d=+c;e===d?c=e:(e=eb(u(),+c),c=db(e)===d?L(M(e,N(e))):qa(ra(),+c))}else c=pa(d);else c=pa(d);d=void 0;c=B(-862048943,
c);F();c=c<<15|c>>>-15|0;c=B(461845907,c);d=b^c;F();d=d<<13|d>>>-13|0;b=-430675100+B(5,d)|0;a=1+a|0}a=b^1;a=B(-2048144789,a^(a>>>16|0));a^=a>>>13|0;a=B(-1028477387,a);a^=a>>>16|0;return a};R.prototype.c=new v({N:0},!1,"scala.scalajs.js.JavaScriptException",$,{N:1,t:1,q:1,m:1,e:1,j:1,kb:1,jb:1,Ba:1});}).call(global);
//# sourceMappingURL=screeplogic-opt.js.map
