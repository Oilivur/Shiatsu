(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}})();/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function ca(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const re={},Gn=[],vt=()=>{},rp=()=>!1,Ir=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),ua=t=>t.startsWith("onUpdate:"),ke=Object.assign,ha=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},op=Object.prototype.hasOwnProperty,ee=(t,e)=>op.call(t,e),$=Array.isArray,qn=t=>di(t)==="[object Map]",br=t=>di(t)==="[object Set]",yl=t=>di(t)==="[object Date]",j=t=>typeof t=="function",ge=t=>typeof t=="string",wt=t=>typeof t=="symbol",he=t=>t!==null&&typeof t=="object",Cu=t=>(he(t)||j(t))&&j(t.then)&&j(t.catch),Tu=Object.prototype.toString,di=t=>Tu.call(t),ap=t=>di(t).slice(8,-1),Su=t=>di(t)==="[object Object]",da=t=>ge(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Os=ca(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Cr=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},lp=/-(\w)/g,Ze=Cr(t=>t.replace(lp,(e,n)=>n?n.toUpperCase():"")),cp=/\B([A-Z])/g,xn=Cr(t=>t.replace(cp,"-$1").toLowerCase()),Tr=Cr(t=>t.charAt(0).toUpperCase()+t.slice(1)),Qr=Cr(t=>t?`on${Tr(t)}`:""),Xt=(t,e)=>!Object.is(t,e),Mi=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},Ru=(t,e,n,s=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:s,value:n})},bo=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let El;const Sr=()=>El||(El=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function fa(t){if($(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],i=ge(s)?fp(s):fa(s);if(i)for(const r in i)e[r]=i[r]}return e}else if(ge(t)||he(t))return t}const up=/;(?![^(]*\))/g,hp=/:([^]+)/,dp=/\/\*[^]*?\*\//g;function fp(t){const e={};return t.replace(dp,"").split(up).forEach(n=>{if(n){const s=n.split(hp);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function fi(t){let e="";if(ge(t))e=t;else if($(t))for(let n=0;n<t.length;n++){const s=fi(t[n]);s&&(e+=s+" ")}else if(he(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const pp="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",_p=ca(pp);function Au(t){return!!t||t===""}function gp(t,e){if(t.length!==e.length)return!1;let n=!0;for(let s=0;n&&s<t.length;s++)n=Rr(t[s],e[s]);return n}function Rr(t,e){if(t===e)return!0;let n=yl(t),s=yl(e);if(n||s)return n&&s?t.getTime()===e.getTime():!1;if(n=wt(t),s=wt(e),n||s)return t===e;if(n=$(t),s=$(e),n||s)return n&&s?gp(t,e):!1;if(n=he(t),s=he(e),n||s){if(!n||!s)return!1;const i=Object.keys(t).length,r=Object.keys(e).length;if(i!==r)return!1;for(const o in t){const a=t.hasOwnProperty(o),l=e.hasOwnProperty(o);if(a&&!l||!a&&l||!Rr(t[o],e[o]))return!1}}return String(t)===String(e)}function Pu(t,e){return t.findIndex(n=>Rr(n,e))}const ku=t=>!!(t&&t.__v_isRef===!0),pa=t=>ge(t)?t:t==null?"":$(t)||he(t)&&(t.toString===Tu||!j(t.toString))?ku(t)?pa(t.value):JSON.stringify(t,Nu,2):String(t),Nu=(t,e)=>ku(e)?Nu(t,e.value):qn(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,i],r)=>(n[Jr(s,r)+" =>"]=i,n),{})}:br(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>Jr(n))}:wt(e)?Jr(e):he(e)&&!$(e)&&!Su(e)?String(e):e,Jr=(t,e="")=>{var n;return wt(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Be;class mp{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Be,!e&&Be&&(this.index=(Be.scopes||(Be.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=Be;try{return Be=this,e()}finally{Be=n}}}on(){Be=this}off(){Be=this.parent}stop(e){if(this._active){this._active=!1;let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(this.effects.length=0,n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0}}}function vp(){return Be}let ce;const Xr=new WeakSet;class Ou{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Be&&Be.active&&Be.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Xr.has(this)&&(Xr.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Du(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,wl(this),Mu(this);const e=ce,n=rt;ce=this,rt=!0;try{return this.fn()}finally{Lu(this),ce=e,rt=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)ma(e);this.deps=this.depsTail=void 0,wl(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Xr.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Co(this)&&this.run()}get dirty(){return Co(this)}}let xu=0,xs,Ds;function Du(t,e=!1){if(t.flags|=8,e){t.next=Ds,Ds=t;return}t.next=xs,xs=t}function _a(){xu++}function ga(){if(--xu>0)return;if(Ds){let e=Ds;for(Ds=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;xs;){let e=xs;for(xs=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(s){t||(t=s)}e=n}}if(t)throw t}function Mu(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Lu(t){let e,n=t.depsTail,s=n;for(;s;){const i=s.prevDep;s.version===-1?(s===n&&(n=i),ma(s),yp(s)):e=s,s.dep.activeLink=s.prevActiveLink,s.prevActiveLink=void 0,s=i}t.deps=e,t.depsTail=n}function Co(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Fu(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function Fu(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===qs))return;t.globalVersion=qs;const e=t.dep;if(t.flags|=2,e.version>0&&!t.isSSR&&t.deps&&!Co(t)){t.flags&=-3;return}const n=ce,s=rt;ce=t,rt=!0;try{Mu(t);const i=t.fn(t._value);(e.version===0||Xt(i,t._value))&&(t._value=i,e.version++)}catch(i){throw e.version++,i}finally{ce=n,rt=s,Lu(t),t.flags&=-3}}function ma(t,e=!1){const{dep:n,prevSub:s,nextSub:i}=t;if(s&&(s.nextSub=i,t.prevSub=void 0),i&&(i.prevSub=s,t.nextSub=void 0),n.subs===t&&(n.subs=s,!s&&n.computed)){n.computed.flags&=-5;for(let r=n.computed.deps;r;r=r.nextDep)ma(r,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function yp(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let rt=!0;const Uu=[];function cn(){Uu.push(rt),rt=!1}function un(){const t=Uu.pop();rt=t===void 0?!0:t}function wl(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=ce;ce=void 0;try{e()}finally{ce=n}}}let qs=0;class Ep{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class va{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!ce||!rt||ce===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==ce)n=this.activeLink=new Ep(ce,this),ce.deps?(n.prevDep=ce.depsTail,ce.depsTail.nextDep=n,ce.depsTail=n):ce.deps=ce.depsTail=n,Hu(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const s=n.nextDep;s.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=s),n.prevDep=ce.depsTail,n.nextDep=void 0,ce.depsTail.nextDep=n,ce.depsTail=n,ce.deps===n&&(ce.deps=s)}return n}trigger(e){this.version++,qs++,this.notify(e)}notify(e){_a();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{ga()}}}function Hu(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let s=e.deps;s;s=s.nextDep)Hu(s)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const To=new WeakMap,In=Symbol(""),So=Symbol(""),zs=Symbol("");function Te(t,e,n){if(rt&&ce){let s=To.get(t);s||To.set(t,s=new Map);let i=s.get(n);i||(s.set(n,i=new va),i.map=s,i.key=n),i.track()}}function At(t,e,n,s,i,r){const o=To.get(t);if(!o){qs++;return}const a=l=>{l&&l.trigger()};if(_a(),e==="clear")o.forEach(a);else{const l=$(t),c=l&&da(n);if(l&&n==="length"){const u=Number(s);o.forEach((h,d)=>{(d==="length"||d===zs||!wt(d)&&d>=u)&&a(h)})}else switch((n!==void 0||o.has(void 0))&&a(o.get(n)),c&&a(o.get(zs)),e){case"add":l?c&&a(o.get("length")):(a(o.get(In)),qn(t)&&a(o.get(So)));break;case"delete":l||(a(o.get(In)),qn(t)&&a(o.get(So)));break;case"set":qn(t)&&a(o.get(In));break}}ga()}function Hn(t){const e=Z(t);return e===t?e:(Te(e,"iterate",zs),Xe(t)?e:e.map(Se))}function Ar(t){return Te(t=Z(t),"iterate",zs),t}const wp={__proto__:null,[Symbol.iterator](){return Zr(this,Symbol.iterator,Se)},concat(...t){return Hn(this).concat(...t.map(e=>$(e)?Hn(e):e))},entries(){return Zr(this,"entries",t=>(t[1]=Se(t[1]),t))},every(t,e){return Tt(this,"every",t,e,void 0,arguments)},filter(t,e){return Tt(this,"filter",t,e,n=>n.map(Se),arguments)},find(t,e){return Tt(this,"find",t,e,Se,arguments)},findIndex(t,e){return Tt(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return Tt(this,"findLast",t,e,Se,arguments)},findLastIndex(t,e){return Tt(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return Tt(this,"forEach",t,e,void 0,arguments)},includes(...t){return eo(this,"includes",t)},indexOf(...t){return eo(this,"indexOf",t)},join(t){return Hn(this).join(t)},lastIndexOf(...t){return eo(this,"lastIndexOf",t)},map(t,e){return Tt(this,"map",t,e,void 0,arguments)},pop(){return Is(this,"pop")},push(...t){return Is(this,"push",t)},reduce(t,...e){return Il(this,"reduce",t,e)},reduceRight(t,...e){return Il(this,"reduceRight",t,e)},shift(){return Is(this,"shift")},some(t,e){return Tt(this,"some",t,e,void 0,arguments)},splice(...t){return Is(this,"splice",t)},toReversed(){return Hn(this).toReversed()},toSorted(t){return Hn(this).toSorted(t)},toSpliced(...t){return Hn(this).toSpliced(...t)},unshift(...t){return Is(this,"unshift",t)},values(){return Zr(this,"values",Se)}};function Zr(t,e,n){const s=Ar(t),i=s[e]();return s!==t&&!Xe(t)&&(i._next=i.next,i.next=()=>{const r=i._next();return r.value&&(r.value=n(r.value)),r}),i}const Ip=Array.prototype;function Tt(t,e,n,s,i,r){const o=Ar(t),a=o!==t&&!Xe(t),l=o[e];if(l!==Ip[e]){const h=l.apply(t,r);return a?Se(h):h}let c=n;o!==t&&(a?c=function(h,d){return n.call(this,Se(h),d,t)}:n.length>2&&(c=function(h,d){return n.call(this,h,d,t)}));const u=l.call(o,c,s);return a&&i?i(u):u}function Il(t,e,n,s){const i=Ar(t);let r=n;return i!==t&&(Xe(t)?n.length>3&&(r=function(o,a,l){return n.call(this,o,a,l,t)}):r=function(o,a,l){return n.call(this,o,Se(a),l,t)}),i[e](r,...s)}function eo(t,e,n){const s=Z(t);Te(s,"iterate",zs);const i=s[e](...n);return(i===-1||i===!1)&&wa(n[0])?(n[0]=Z(n[0]),s[e](...n)):i}function Is(t,e,n=[]){cn(),_a();const s=Z(t)[e].apply(t,n);return ga(),un(),s}const bp=ca("__proto__,__v_isRef,__isVue"),Wu=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(wt));function Cp(t){wt(t)||(t=String(t));const e=Z(this);return Te(e,"has",t),e.hasOwnProperty(t)}class Vu{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,s){if(n==="__v_skip")return e.__v_skip;const i=this._isReadonly,r=this._isShallow;if(n==="__v_isReactive")return!i;if(n==="__v_isReadonly")return i;if(n==="__v_isShallow")return r;if(n==="__v_raw")return s===(i?r?Dp:Ku:r?ju:Bu).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(s)?e:void 0;const o=$(e);if(!i){let l;if(o&&(l=wp[n]))return l;if(n==="hasOwnProperty")return Cp}const a=Reflect.get(e,n,Pe(e)?e:s);return(wt(n)?Wu.has(n):bp(n))||(i||Te(e,"get",n),r)?a:Pe(a)?o&&da(n)?a:a.value:he(a)?i?qu(a):Pr(a):a}}class $u extends Vu{constructor(e=!1){super(!1,e)}set(e,n,s,i){let r=e[n];if(!this._isShallow){const l=Tn(r);if(!Xe(s)&&!Tn(s)&&(r=Z(r),s=Z(s)),!$(e)&&Pe(r)&&!Pe(s))return l?!1:(r.value=s,!0)}const o=$(e)&&da(n)?Number(n)<e.length:ee(e,n),a=Reflect.set(e,n,s,Pe(e)?e:i);return e===Z(i)&&(o?Xt(s,r)&&At(e,"set",n,s):At(e,"add",n,s)),a}deleteProperty(e,n){const s=ee(e,n);e[n];const i=Reflect.deleteProperty(e,n);return i&&s&&At(e,"delete",n,void 0),i}has(e,n){const s=Reflect.has(e,n);return(!wt(n)||!Wu.has(n))&&Te(e,"has",n),s}ownKeys(e){return Te(e,"iterate",$(e)?"length":In),Reflect.ownKeys(e)}}class Tp extends Vu{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const Sp=new $u,Rp=new Tp,Ap=new $u(!0);const Ro=t=>t,Pi=t=>Reflect.getPrototypeOf(t);function Pp(t,e,n){return function(...s){const i=this.__v_raw,r=Z(i),o=qn(r),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=i[t](...s),u=n?Ro:e?Ao:Se;return!e&&Te(r,"iterate",l?So:In),{next(){const{value:h,done:d}=c.next();return d?{value:h,done:d}:{value:a?[u(h[0]),u(h[1])]:u(h),done:d}},[Symbol.iterator](){return this}}}}function ki(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function kp(t,e){const n={get(i){const r=this.__v_raw,o=Z(r),a=Z(i);t||(Xt(i,a)&&Te(o,"get",i),Te(o,"get",a));const{has:l}=Pi(o),c=e?Ro:t?Ao:Se;if(l.call(o,i))return c(r.get(i));if(l.call(o,a))return c(r.get(a));r!==o&&r.get(i)},get size(){const i=this.__v_raw;return!t&&Te(Z(i),"iterate",In),Reflect.get(i,"size",i)},has(i){const r=this.__v_raw,o=Z(r),a=Z(i);return t||(Xt(i,a)&&Te(o,"has",i),Te(o,"has",a)),i===a?r.has(i):r.has(i)||r.has(a)},forEach(i,r){const o=this,a=o.__v_raw,l=Z(a),c=e?Ro:t?Ao:Se;return!t&&Te(l,"iterate",In),a.forEach((u,h)=>i.call(r,c(u),c(h),o))}};return ke(n,t?{add:ki("add"),set:ki("set"),delete:ki("delete"),clear:ki("clear")}:{add(i){!e&&!Xe(i)&&!Tn(i)&&(i=Z(i));const r=Z(this);return Pi(r).has.call(r,i)||(r.add(i),At(r,"add",i,i)),this},set(i,r){!e&&!Xe(r)&&!Tn(r)&&(r=Z(r));const o=Z(this),{has:a,get:l}=Pi(o);let c=a.call(o,i);c||(i=Z(i),c=a.call(o,i));const u=l.call(o,i);return o.set(i,r),c?Xt(r,u)&&At(o,"set",i,r):At(o,"add",i,r),this},delete(i){const r=Z(this),{has:o,get:a}=Pi(r);let l=o.call(r,i);l||(i=Z(i),l=o.call(r,i)),a&&a.call(r,i);const c=r.delete(i);return l&&At(r,"delete",i,void 0),c},clear(){const i=Z(this),r=i.size!==0,o=i.clear();return r&&At(i,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(i=>{n[i]=Pp(i,t,e)}),n}function ya(t,e){const n=kp(t,e);return(s,i,r)=>i==="__v_isReactive"?!t:i==="__v_isReadonly"?t:i==="__v_raw"?s:Reflect.get(ee(n,i)&&i in s?n:s,i,r)}const Np={get:ya(!1,!1)},Op={get:ya(!1,!0)},xp={get:ya(!0,!1)};const Bu=new WeakMap,ju=new WeakMap,Ku=new WeakMap,Dp=new WeakMap;function Mp(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Lp(t){return t.__v_skip||!Object.isExtensible(t)?0:Mp(ap(t))}function Pr(t){return Tn(t)?t:Ea(t,!1,Sp,Np,Bu)}function Gu(t){return Ea(t,!1,Ap,Op,ju)}function qu(t){return Ea(t,!0,Rp,xp,Ku)}function Ea(t,e,n,s,i){if(!he(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const r=i.get(t);if(r)return r;const o=Lp(t);if(o===0)return t;const a=new Proxy(t,o===2?s:n);return i.set(t,a),a}function zn(t){return Tn(t)?zn(t.__v_raw):!!(t&&t.__v_isReactive)}function Tn(t){return!!(t&&t.__v_isReadonly)}function Xe(t){return!!(t&&t.__v_isShallow)}function wa(t){return t?!!t.__v_raw:!1}function Z(t){const e=t&&t.__v_raw;return e?Z(e):t}function Fp(t){return!ee(t,"__v_skip")&&Object.isExtensible(t)&&Ru(t,"__v_skip",!0),t}const Se=t=>he(t)?Pr(t):t,Ao=t=>he(t)?qu(t):t;function Pe(t){return t?t.__v_isRef===!0:!1}function bn(t){return zu(t,!1)}function Up(t){return zu(t,!0)}function zu(t,e){return Pe(t)?t:new Hp(t,e)}class Hp{constructor(e,n){this.dep=new va,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:Z(e),this._value=n?e:Se(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,s=this.__v_isShallow||Xe(e)||Tn(e);e=s?e:Z(e),Xt(e,n)&&(this._rawValue=e,this._value=s?e:Se(e),this.dep.trigger())}}function Yn(t){return Pe(t)?t.value:t}const Wp={get:(t,e,n)=>e==="__v_raw"?t:Yn(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const i=t[e];return Pe(i)&&!Pe(n)?(i.value=n,!0):Reflect.set(t,e,n,s)}};function Yu(t){return zn(t)?t:new Proxy(t,Wp)}class Vp{constructor(e,n,s){this.fn=e,this.setter=n,this._value=void 0,this.dep=new va(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=qs-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=s}notify(){if(this.flags|=16,!(this.flags&8)&&ce!==this)return Du(this,!0),!0}get value(){const e=this.dep.track();return Fu(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function $p(t,e,n=!1){let s,i;return j(t)?s=t:(s=t.get,i=t.set),new Vp(s,i,n)}const Ni={},Gi=new WeakMap;let mn;function Bp(t,e=!1,n=mn){if(n){let s=Gi.get(n);s||Gi.set(n,s=[]),s.push(t)}}function jp(t,e,n=re){const{immediate:s,deep:i,once:r,scheduler:o,augmentJob:a,call:l}=n,c=O=>i?O:Xe(O)||i===!1||i===0?Pt(O,1):Pt(O);let u,h,d,_,m=!1,b=!1;if(Pe(t)?(h=()=>t.value,m=Xe(t)):zn(t)?(h=()=>c(t),m=!0):$(t)?(b=!0,m=t.some(O=>zn(O)||Xe(O)),h=()=>t.map(O=>{if(Pe(O))return O.value;if(zn(O))return c(O);if(j(O))return l?l(O,2):O()})):j(t)?e?h=l?()=>l(t,2):t:h=()=>{if(d){cn();try{d()}finally{un()}}const O=mn;mn=u;try{return l?l(t,3,[_]):t(_)}finally{mn=O}}:h=vt,e&&i){const O=h,Q=i===!0?1/0:i;h=()=>Pt(O(),Q)}const x=vp(),D=()=>{u.stop(),x&&x.active&&ha(x.effects,u)};if(r&&e){const O=e;e=(...Q)=>{O(...Q),D()}}let N=b?new Array(t.length).fill(Ni):Ni;const M=O=>{if(!(!(u.flags&1)||!u.dirty&&!O))if(e){const Q=u.run();if(i||m||(b?Q.some((_e,ae)=>Xt(_e,N[ae])):Xt(Q,N))){d&&d();const _e=mn;mn=u;try{const ae=[Q,N===Ni?void 0:b&&N[0]===Ni?[]:N,_];l?l(e,3,ae):e(...ae),N=Q}finally{mn=_e}}}else u.run()};return a&&a(M),u=new Ou(h),u.scheduler=o?()=>o(M,!1):M,_=O=>Bp(O,!1,u),d=u.onStop=()=>{const O=Gi.get(u);if(O){if(l)l(O,4);else for(const Q of O)Q();Gi.delete(u)}},e?s?M(!0):N=u.run():o?o(M.bind(null,!0),!0):u.run(),D.pause=u.pause.bind(u),D.resume=u.resume.bind(u),D.stop=D,D}function Pt(t,e=1/0,n){if(e<=0||!he(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,Pe(t))Pt(t.value,e,n);else if($(t))for(let s=0;s<t.length;s++)Pt(t[s],e,n);else if(br(t)||qn(t))t.forEach(s=>{Pt(s,e,n)});else if(Su(t)){for(const s in t)Pt(t[s],e,n);for(const s of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,s)&&Pt(t[s],e,n)}return t}/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function pi(t,e,n,s){try{return s?t(...s):t()}catch(i){kr(i,e,n)}}function It(t,e,n,s){if(j(t)){const i=pi(t,e,n,s);return i&&Cu(i)&&i.catch(r=>{kr(r,e,n)}),i}if($(t)){const i=[];for(let r=0;r<t.length;r++)i.push(It(t[r],e,n,s));return i}}function kr(t,e,n,s=!0){const i=e?e.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||re;if(e){let a=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${n}`;for(;a;){const u=a.ec;if(u){for(let h=0;h<u.length;h++)if(u[h](t,l,c)===!1)return}a=a.parent}if(r){cn(),pi(r,null,10,[t,l,c]),un();return}}Kp(t,n,i,s,o)}function Kp(t,e,n,s=!0,i=!1){if(i)throw t;console.error(t)}const Oe=[];let gt=-1;const Qn=[];let Kt=null,Vn=0;const Qu=Promise.resolve();let qi=null;function Ju(t){const e=qi||Qu;return t?e.then(this?t.bind(this):t):e}function Gp(t){let e=gt+1,n=Oe.length;for(;e<n;){const s=e+n>>>1,i=Oe[s],r=Ys(i);r<t||r===t&&i.flags&2?e=s+1:n=s}return e}function Ia(t){if(!(t.flags&1)){const e=Ys(t),n=Oe[Oe.length-1];!n||!(t.flags&2)&&e>=Ys(n)?Oe.push(t):Oe.splice(Gp(e),0,t),t.flags|=1,Xu()}}function Xu(){qi||(qi=Qu.then(eh))}function qp(t){$(t)?Qn.push(...t):Kt&&t.id===-1?Kt.splice(Vn+1,0,t):t.flags&1||(Qn.push(t),t.flags|=1),Xu()}function bl(t,e,n=gt+1){for(;n<Oe.length;n++){const s=Oe[n];if(s&&s.flags&2){if(t&&s.id!==t.uid)continue;Oe.splice(n,1),n--,s.flags&4&&(s.flags&=-2),s(),s.flags&4||(s.flags&=-2)}}}function Zu(t){if(Qn.length){const e=[...new Set(Qn)].sort((n,s)=>Ys(n)-Ys(s));if(Qn.length=0,Kt){Kt.push(...e);return}for(Kt=e,Vn=0;Vn<Kt.length;Vn++){const n=Kt[Vn];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}Kt=null,Vn=0}}const Ys=t=>t.id==null?t.flags&2?-1:1/0:t.id;function eh(t){try{for(gt=0;gt<Oe.length;gt++){const e=Oe[gt];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),pi(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;gt<Oe.length;gt++){const e=Oe[gt];e&&(e.flags&=-2)}gt=-1,Oe.length=0,Zu(),qi=null,(Oe.length||Qn.length)&&eh()}}let je=null,th=null;function zi(t){const e=je;return je=t,th=t&&t.type.__scopeId||null,e}function Li(t,e=je,n){if(!e||t._n)return t;const s=(...i)=>{s._d&&xl(-1);const r=zi(e);let o;try{o=t(...i)}finally{zi(r),s._d&&xl(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function Po(t,e){if(je===null)return t;const n=Mr(je),s=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[r,o,a,l=re]=e[i];r&&(j(r)&&(r={mounted:r,updated:r}),r.deep&&Pt(o),s.push({dir:r,instance:n,value:o,oldValue:void 0,arg:a,modifiers:l}))}return t}function _n(t,e,n,s){const i=t.dirs,r=e&&e.dirs;for(let o=0;o<i.length;o++){const a=i[o];r&&(a.oldValue=r[o].value);let l=a.dir[s];l&&(cn(),It(l,n,8,[t.el,a,t,e]),un())}}const zp=Symbol("_vte"),Yp=t=>t.__isTeleport;function ba(t,e){t.shapeFlag&6&&t.component?(t.transition=e,ba(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}/*! #__NO_SIDE_EFFECTS__ */function nh(t,e){return j(t)?ke({name:t.name},e,{setup:t}):t}function sh(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function Yi(t,e,n,s,i=!1){if($(t)){t.forEach((m,b)=>Yi(m,e&&($(e)?e[b]:e),n,s,i));return}if(Ms(s)&&!i){s.shapeFlag&512&&s.type.__asyncResolved&&s.component.subTree.component&&Yi(t,e,n,s.component.subTree);return}const r=s.shapeFlag&4?Mr(s.component):s.el,o=i?null:r,{i:a,r:l}=t,c=e&&e.r,u=a.refs===re?a.refs={}:a.refs,h=a.setupState,d=Z(h),_=h===re?()=>!1:m=>ee(d,m);if(c!=null&&c!==l&&(ge(c)?(u[c]=null,_(c)&&(h[c]=null)):Pe(c)&&(c.value=null)),j(l))pi(l,a,12,[o,u]);else{const m=ge(l),b=Pe(l);if(m||b){const x=()=>{if(t.f){const D=m?_(l)?h[l]:u[l]:l.value;i?$(D)&&ha(D,r):$(D)?D.includes(r)||D.push(r):m?(u[l]=[r],_(l)&&(h[l]=u[l])):(l.value=[r],t.k&&(u[t.k]=l.value))}else m?(u[l]=o,_(l)&&(h[l]=o)):b&&(l.value=o,t.k&&(u[t.k]=o))};o?(x.id=-1,$e(x,n)):x()}}}Sr().requestIdleCallback;Sr().cancelIdleCallback;const Ms=t=>!!t.type.__asyncLoader,ih=t=>t.type.__isKeepAlive;function Qp(t,e){rh(t,"a",e)}function Jp(t,e){rh(t,"da",e)}function rh(t,e,n=Ae){const s=t.__wdc||(t.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return t()});if(Nr(e,s,n),n){let i=n.parent;for(;i&&i.parent;)ih(i.parent.vnode)&&Xp(s,e,n,i),i=i.parent}}function Xp(t,e,n,s){const i=Nr(e,t,s,!0);_i(()=>{ha(s[e],i)},n)}function Nr(t,e,n=Ae,s=!1){if(n){const i=n[t]||(n[t]=[]),r=e.__weh||(e.__weh=(...o)=>{cn();const a=gi(n),l=It(e,n,t,o);return a(),un(),l});return s?i.unshift(r):i.push(r),r}}const Ut=t=>(e,n=Ae)=>{(!Js||t==="sp")&&Nr(t,(...s)=>e(...s),n)},Zp=Ut("bm"),Or=Ut("m"),e_=Ut("bu"),t_=Ut("u"),n_=Ut("bum"),_i=Ut("um"),s_=Ut("sp"),i_=Ut("rtg"),r_=Ut("rtc");function o_(t,e=Ae){Nr("ec",t,e)}const a_="components";function Qi(t,e){return c_(a_,t,!0,e)||t}const l_=Symbol.for("v-ndc");function c_(t,e,n=!0,s=!1){const i=je||Ae;if(i){const r=i.type;{const a=Q_(r,!1);if(a&&(a===e||a===Ze(e)||a===Tr(Ze(e))))return r}const o=Cl(i[t]||r[t],e)||Cl(i.appContext[t],e);return!o&&s?r:o}}function Cl(t,e){return t&&(t[e]||t[Ze(e)]||t[Tr(Ze(e))])}function ko(t,e,n,s){let i;const r=n,o=$(t);if(o||ge(t)){const a=o&&zn(t);let l=!1;a&&(l=!Xe(t),t=Ar(t)),i=new Array(t.length);for(let c=0,u=t.length;c<u;c++)i[c]=e(l?Se(t[c]):t[c],c,void 0,r)}else if(typeof t=="number"){i=new Array(t);for(let a=0;a<t;a++)i[a]=e(a+1,a,void 0,r)}else if(he(t))if(t[Symbol.iterator])i=Array.from(t,(a,l)=>e(a,l,void 0,r));else{const a=Object.keys(t);i=new Array(a.length);for(let l=0,c=a.length;l<c;l++){const u=a[l];i[l]=e(t[u],u,l,r)}}else i=[];return i}const No=t=>t?Sh(t)?Mr(t):No(t.parent):null,Ls=ke(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>No(t.parent),$root:t=>No(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>ah(t),$forceUpdate:t=>t.f||(t.f=()=>{Ia(t.update)}),$nextTick:t=>t.n||(t.n=Ju.bind(t.proxy)),$watch:t=>k_.bind(t)}),to=(t,e)=>t!==re&&!t.__isScriptSetup&&ee(t,e),u_={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:s,data:i,props:r,accessCache:o,type:a,appContext:l}=t;let c;if(e[0]!=="$"){const _=o[e];if(_!==void 0)switch(_){case 1:return s[e];case 2:return i[e];case 4:return n[e];case 3:return r[e]}else{if(to(s,e))return o[e]=1,s[e];if(i!==re&&ee(i,e))return o[e]=2,i[e];if((c=t.propsOptions[0])&&ee(c,e))return o[e]=3,r[e];if(n!==re&&ee(n,e))return o[e]=4,n[e];Oo&&(o[e]=0)}}const u=Ls[e];let h,d;if(u)return e==="$attrs"&&Te(t.attrs,"get",""),u(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==re&&ee(n,e))return o[e]=4,n[e];if(d=l.config.globalProperties,ee(d,e))return d[e]},set({_:t},e,n){const{data:s,setupState:i,ctx:r}=t;return to(i,e)?(i[e]=n,!0):s!==re&&ee(s,e)?(s[e]=n,!0):ee(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(r[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:i,propsOptions:r}},o){let a;return!!n[o]||t!==re&&ee(t,o)||to(e,o)||(a=r[0])&&ee(a,o)||ee(s,o)||ee(Ls,o)||ee(i.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:ee(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Tl(t){return $(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Oo=!0;function h_(t){const e=ah(t),n=t.proxy,s=t.ctx;Oo=!1,e.beforeCreate&&Sl(e.beforeCreate,t,"bc");const{data:i,computed:r,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:h,mounted:d,beforeUpdate:_,updated:m,activated:b,deactivated:x,beforeDestroy:D,beforeUnmount:N,destroyed:M,unmounted:O,render:Q,renderTracked:_e,renderTriggered:ae,errorCaptured:ze,serverPrefetch:Ye,expose:Qe,inheritAttrs:Vt,components:pn,directives:ut,filters:Es}=e;if(c&&d_(c,s,null),o)for(const ne in o){const J=o[ne];j(J)&&(s[ne]=J.bind(n))}if(i){const ne=i.call(n,n);he(ne)&&(t.data=Pr(ne))}if(Oo=!0,r)for(const ne in r){const J=r[ne],Ct=j(J)?J.bind(n,n):j(J.get)?J.get.bind(n,n):vt,$t=!j(J)&&j(J.set)?J.set.bind(n):vt,ht=et({get:Ct,set:$t});Object.defineProperty(s,ne,{enumerable:!0,configurable:!0,get:()=>ht.value,set:Me=>ht.value=Me})}if(a)for(const ne in a)oh(a[ne],s,n,ne);if(l){const ne=j(l)?l.call(n):l;Reflect.ownKeys(ne).forEach(J=>{Fs(J,ne[J])})}u&&Sl(u,t,"c");function Ee(ne,J){$(J)?J.forEach(Ct=>ne(Ct.bind(n))):J&&ne(J.bind(n))}if(Ee(Zp,h),Ee(Or,d),Ee(e_,_),Ee(t_,m),Ee(Qp,b),Ee(Jp,x),Ee(o_,ze),Ee(r_,_e),Ee(i_,ae),Ee(n_,N),Ee(_i,O),Ee(s_,Ye),$(Qe))if(Qe.length){const ne=t.exposed||(t.exposed={});Qe.forEach(J=>{Object.defineProperty(ne,J,{get:()=>n[J],set:Ct=>n[J]=Ct})})}else t.exposed||(t.exposed={});Q&&t.render===vt&&(t.render=Q),Vt!=null&&(t.inheritAttrs=Vt),pn&&(t.components=pn),ut&&(t.directives=ut),Ye&&sh(t)}function d_(t,e,n=vt){$(t)&&(t=xo(t));for(const s in t){const i=t[s];let r;he(i)?"default"in i?r=ot(i.from||s,i.default,!0):r=ot(i.from||s):r=ot(i),Pe(r)?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):e[s]=r}}function Sl(t,e,n){It($(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function oh(t,e,n,s){let i=s.includes(".")?wh(n,s):()=>n[s];if(ge(t)){const r=e[t];j(r)&&Fi(i,r)}else if(j(t))Fi(i,t.bind(n));else if(he(t))if($(t))t.forEach(r=>oh(r,e,n,s));else{const r=j(t.handler)?t.handler.bind(n):e[t.handler];j(r)&&Fi(i,r,t)}}function ah(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:i,optionsCache:r,config:{optionMergeStrategies:o}}=t.appContext,a=r.get(e);let l;return a?l=a:!i.length&&!n&&!s?l=e:(l={},i.length&&i.forEach(c=>Ji(l,c,o,!0)),Ji(l,e,o)),he(e)&&r.set(e,l),l}function Ji(t,e,n,s=!1){const{mixins:i,extends:r}=e;r&&Ji(t,r,n,!0),i&&i.forEach(o=>Ji(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const a=f_[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const f_={data:Rl,props:Al,emits:Al,methods:Ps,computed:Ps,beforeCreate:Ne,created:Ne,beforeMount:Ne,mounted:Ne,beforeUpdate:Ne,updated:Ne,beforeDestroy:Ne,beforeUnmount:Ne,destroyed:Ne,unmounted:Ne,activated:Ne,deactivated:Ne,errorCaptured:Ne,serverPrefetch:Ne,components:Ps,directives:Ps,watch:__,provide:Rl,inject:p_};function Rl(t,e){return e?t?function(){return ke(j(t)?t.call(this,this):t,j(e)?e.call(this,this):e)}:e:t}function p_(t,e){return Ps(xo(t),xo(e))}function xo(t){if($(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Ne(t,e){return t?[...new Set([].concat(t,e))]:e}function Ps(t,e){return t?ke(Object.create(null),t,e):e}function Al(t,e){return t?$(t)&&$(e)?[...new Set([...t,...e])]:ke(Object.create(null),Tl(t),Tl(e??{})):e}function __(t,e){if(!t)return e;if(!e)return t;const n=ke(Object.create(null),t);for(const s in e)n[s]=Ne(t[s],e[s]);return n}function lh(){return{app:null,config:{isNativeTag:rp,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let g_=0;function m_(t,e){return function(s,i=null){j(s)||(s=ke({},s)),i!=null&&!he(i)&&(i=null);const r=lh(),o=new WeakSet,a=[];let l=!1;const c=r.app={_uid:g_++,_component:s,_props:i,_container:null,_context:r,_instance:null,version:X_,get config(){return r.config},set config(u){},use(u,...h){return o.has(u)||(u&&j(u.install)?(o.add(u),u.install(c,...h)):j(u)&&(o.add(u),u(c,...h))),c},mixin(u){return r.mixins.includes(u)||r.mixins.push(u),c},component(u,h){return h?(r.components[u]=h,c):r.components[u]},directive(u,h){return h?(r.directives[u]=h,c):r.directives[u]},mount(u,h,d){if(!l){const _=c._ceVNode||be(s,i);return _.appContext=r,d===!0?d="svg":d===!1&&(d=void 0),t(_,u,d),l=!0,c._container=u,u.__vue_app__=c,Mr(_.component)}},onUnmount(u){a.push(u)},unmount(){l&&(It(a,c._instance,16),t(null,c._container),delete c._container.__vue_app__)},provide(u,h){return r.provides[u]=h,c},runWithContext(u){const h=Jn;Jn=c;try{return u()}finally{Jn=h}}};return c}}let Jn=null;function Fs(t,e){if(Ae){let n=Ae.provides;const s=Ae.parent&&Ae.parent.provides;s===n&&(n=Ae.provides=Object.create(s)),n[t]=e}}function ot(t,e,n=!1){const s=Ae||je;if(s||Jn){const i=Jn?Jn._context.provides:s?s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:void 0;if(i&&t in i)return i[t];if(arguments.length>1)return n&&j(e)?e.call(s&&s.proxy):e}}const ch={},uh=()=>Object.create(ch),hh=t=>Object.getPrototypeOf(t)===ch;function v_(t,e,n,s=!1){const i={},r=uh();t.propsDefaults=Object.create(null),dh(t,e,i,r);for(const o in t.propsOptions[0])o in i||(i[o]=void 0);n?t.props=s?i:Gu(i):t.type.props?t.props=i:t.props=r,t.attrs=r}function y_(t,e,n,s){const{props:i,attrs:r,vnode:{patchFlag:o}}=t,a=Z(i),[l]=t.propsOptions;let c=!1;if((s||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let d=u[h];if(xr(t.emitsOptions,d))continue;const _=e[d];if(l)if(ee(r,d))_!==r[d]&&(r[d]=_,c=!0);else{const m=Ze(d);i[m]=Do(l,a,m,_,t,!1)}else _!==r[d]&&(r[d]=_,c=!0)}}}else{dh(t,e,i,r)&&(c=!0);let u;for(const h in a)(!e||!ee(e,h)&&((u=xn(h))===h||!ee(e,u)))&&(l?n&&(n[h]!==void 0||n[u]!==void 0)&&(i[h]=Do(l,a,h,void 0,t,!0)):delete i[h]);if(r!==a)for(const h in r)(!e||!ee(e,h))&&(delete r[h],c=!0)}c&&At(t.attrs,"set","")}function dh(t,e,n,s){const[i,r]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(Os(l))continue;const c=e[l];let u;i&&ee(i,u=Ze(l))?!r||!r.includes(u)?n[u]=c:(a||(a={}))[u]=c:xr(t.emitsOptions,l)||(!(l in s)||c!==s[l])&&(s[l]=c,o=!0)}if(r){const l=Z(n),c=a||re;for(let u=0;u<r.length;u++){const h=r[u];n[h]=Do(i,l,h,c[h],t,!ee(c,h))}}return o}function Do(t,e,n,s,i,r){const o=t[n];if(o!=null){const a=ee(o,"default");if(a&&s===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&j(l)){const{propsDefaults:c}=i;if(n in c)s=c[n];else{const u=gi(i);s=c[n]=l.call(null,e),u()}}else s=l;i.ce&&i.ce._setProp(n,s)}o[0]&&(r&&!a?s=!1:o[1]&&(s===""||s===xn(n))&&(s=!0))}return s}const E_=new WeakMap;function fh(t,e,n=!1){const s=n?E_:e.propsCache,i=s.get(t);if(i)return i;const r=t.props,o={},a=[];let l=!1;if(!j(t)){const u=h=>{l=!0;const[d,_]=fh(h,e,!0);ke(o,d),_&&a.push(..._)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!r&&!l)return he(t)&&s.set(t,Gn),Gn;if($(r))for(let u=0;u<r.length;u++){const h=Ze(r[u]);Pl(h)&&(o[h]=re)}else if(r)for(const u in r){const h=Ze(u);if(Pl(h)){const d=r[u],_=o[h]=$(d)||j(d)?{type:d}:ke({},d),m=_.type;let b=!1,x=!0;if($(m))for(let D=0;D<m.length;++D){const N=m[D],M=j(N)&&N.name;if(M==="Boolean"){b=!0;break}else M==="String"&&(x=!1)}else b=j(m)&&m.name==="Boolean";_[0]=b,_[1]=x,(b||ee(_,"default"))&&a.push(h)}}const c=[o,a];return he(t)&&s.set(t,c),c}function Pl(t){return t[0]!=="$"&&!Os(t)}const ph=t=>t[0]==="_"||t==="$stable",Ca=t=>$(t)?t.map(mt):[mt(t)],w_=(t,e,n)=>{if(e._n)return e;const s=Li((...i)=>Ca(e(...i)),n);return s._c=!1,s},_h=(t,e,n)=>{const s=t._ctx;for(const i in t){if(ph(i))continue;const r=t[i];if(j(r))e[i]=w_(i,r,s);else if(r!=null){const o=Ca(r);e[i]=()=>o}}},gh=(t,e)=>{const n=Ca(e);t.slots.default=()=>n},mh=(t,e,n)=>{for(const s in e)(n||s!=="_")&&(t[s]=e[s])},I_=(t,e,n)=>{const s=t.slots=uh();if(t.vnode.shapeFlag&32){const i=e._;i?(mh(s,e,n),n&&Ru(s,"_",i,!0)):_h(e,s)}else e&&gh(t,e)},b_=(t,e,n)=>{const{vnode:s,slots:i}=t;let r=!0,o=re;if(s.shapeFlag&32){const a=e._;a?n&&a===1?r=!1:mh(i,e,n):(r=!e.$stable,_h(e,i)),o=e}else e&&(gh(t,e),o={default:1});if(r)for(const a in i)!ph(a)&&o[a]==null&&delete i[a]},$e=F_;function C_(t){return T_(t)}function T_(t,e){const n=Sr();n.__VUE__=!0;const{insert:s,remove:i,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:h,nextSibling:d,setScopeId:_=vt,insertStaticContent:m}=t,b=(f,p,g,v=null,w=null,E=null,R=void 0,S=null,T=!!p.dynamicChildren)=>{if(f===p)return;f&&!bs(f,p)&&(v=y(f),Me(f,w,E,!0),f=null),p.patchFlag===-2&&(T=!1,p.dynamicChildren=null);const{type:I,ref:U,shapeFlag:P}=p;switch(I){case Dr:x(f,p,g,v);break;case Sn:D(f,p,g,v);break;case Ui:f==null&&N(p,g,v,R);break;case Fe:pn(f,p,g,v,w,E,R,S,T);break;default:P&1?Q(f,p,g,v,w,E,R,S,T):P&6?ut(f,p,g,v,w,E,R,S,T):(P&64||P&128)&&I.process(f,p,g,v,w,E,R,S,T,L)}U!=null&&w&&Yi(U,f&&f.ref,E,p||f,!p)},x=(f,p,g,v)=>{if(f==null)s(p.el=a(p.children),g,v);else{const w=p.el=f.el;p.children!==f.children&&c(w,p.children)}},D=(f,p,g,v)=>{f==null?s(p.el=l(p.children||""),g,v):p.el=f.el},N=(f,p,g,v)=>{[f.el,f.anchor]=m(f.children,p,g,v,f.el,f.anchor)},M=({el:f,anchor:p},g,v)=>{let w;for(;f&&f!==p;)w=d(f),s(f,g,v),f=w;s(p,g,v)},O=({el:f,anchor:p})=>{let g;for(;f&&f!==p;)g=d(f),i(f),f=g;i(p)},Q=(f,p,g,v,w,E,R,S,T)=>{p.type==="svg"?R="svg":p.type==="math"&&(R="mathml"),f==null?_e(p,g,v,w,E,R,S,T):Ye(f,p,w,E,R,S,T)},_e=(f,p,g,v,w,E,R,S)=>{let T,I;const{props:U,shapeFlag:P,transition:F,dirs:B}=f;if(T=f.el=o(f.type,E,U&&U.is,U),P&8?u(T,f.children):P&16&&ze(f.children,T,null,v,w,no(f,E),R,S),B&&_n(f,null,v,"created"),ae(T,f,f.scopeId,R,v),U){for(const le in U)le!=="value"&&!Os(le)&&r(T,le,null,U[le],E,v);"value"in U&&r(T,"value",null,U.value,E),(I=U.onVnodeBeforeMount)&&_t(I,v,f)}B&&_n(f,null,v,"beforeMount");const z=S_(w,F);z&&F.beforeEnter(T),s(T,p,g),((I=U&&U.onVnodeMounted)||z||B)&&$e(()=>{I&&_t(I,v,f),z&&F.enter(T),B&&_n(f,null,v,"mounted")},w)},ae=(f,p,g,v,w)=>{if(g&&_(f,g),v)for(let E=0;E<v.length;E++)_(f,v[E]);if(w){let E=w.subTree;if(p===E||bh(E.type)&&(E.ssContent===p||E.ssFallback===p)){const R=w.vnode;ae(f,R,R.scopeId,R.slotScopeIds,w.parent)}}},ze=(f,p,g,v,w,E,R,S,T=0)=>{for(let I=T;I<f.length;I++){const U=f[I]=S?Gt(f[I]):mt(f[I]);b(null,U,p,g,v,w,E,R,S)}},Ye=(f,p,g,v,w,E,R)=>{const S=p.el=f.el;let{patchFlag:T,dynamicChildren:I,dirs:U}=p;T|=f.patchFlag&16;const P=f.props||re,F=p.props||re;let B;if(g&&gn(g,!1),(B=F.onVnodeBeforeUpdate)&&_t(B,g,p,f),U&&_n(p,f,g,"beforeUpdate"),g&&gn(g,!0),(P.innerHTML&&F.innerHTML==null||P.textContent&&F.textContent==null)&&u(S,""),I?Qe(f.dynamicChildren,I,S,g,v,no(p,w),E):R||J(f,p,S,null,g,v,no(p,w),E,!1),T>0){if(T&16)Vt(S,P,F,g,w);else if(T&2&&P.class!==F.class&&r(S,"class",null,F.class,w),T&4&&r(S,"style",P.style,F.style,w),T&8){const z=p.dynamicProps;for(let le=0;le<z.length;le++){const te=z[le],We=P[te],Le=F[te];(Le!==We||te==="value")&&r(S,te,We,Le,w,g)}}T&1&&f.children!==p.children&&u(S,p.children)}else!R&&I==null&&Vt(S,P,F,g,w);((B=F.onVnodeUpdated)||U)&&$e(()=>{B&&_t(B,g,p,f),U&&_n(p,f,g,"updated")},v)},Qe=(f,p,g,v,w,E,R)=>{for(let S=0;S<p.length;S++){const T=f[S],I=p[S],U=T.el&&(T.type===Fe||!bs(T,I)||T.shapeFlag&70)?h(T.el):g;b(T,I,U,null,v,w,E,R,!0)}},Vt=(f,p,g,v,w)=>{if(p!==g){if(p!==re)for(const E in p)!Os(E)&&!(E in g)&&r(f,E,p[E],null,w,v);for(const E in g){if(Os(E))continue;const R=g[E],S=p[E];R!==S&&E!=="value"&&r(f,E,S,R,w,v)}"value"in g&&r(f,"value",p.value,g.value,w)}},pn=(f,p,g,v,w,E,R,S,T)=>{const I=p.el=f?f.el:a(""),U=p.anchor=f?f.anchor:a("");let{patchFlag:P,dynamicChildren:F,slotScopeIds:B}=p;B&&(S=S?S.concat(B):B),f==null?(s(I,g,v),s(U,g,v),ze(p.children||[],g,U,w,E,R,S,T)):P>0&&P&64&&F&&f.dynamicChildren?(Qe(f.dynamicChildren,F,g,w,E,R,S),(p.key!=null||w&&p===w.subTree)&&vh(f,p,!0)):J(f,p,g,U,w,E,R,S,T)},ut=(f,p,g,v,w,E,R,S,T)=>{p.slotScopeIds=S,f==null?p.shapeFlag&512?w.ctx.activate(p,g,v,R,T):Es(p,g,v,w,E,R,T):Ln(f,p,T)},Es=(f,p,g,v,w,E,R)=>{const S=f.component=K_(f,v,w);if(ih(f)&&(S.ctx.renderer=L),G_(S,!1,R),S.asyncDep){if(w&&w.registerDep(S,Ee,R),!f.el){const T=S.subTree=be(Sn);D(null,T,p,g)}}else Ee(S,f,p,g,w,E,R)},Ln=(f,p,g)=>{const v=p.component=f.component;if(M_(f,p,g))if(v.asyncDep&&!v.asyncResolved){ne(v,p,g);return}else v.next=p,v.update();else p.el=f.el,v.vnode=p},Ee=(f,p,g,v,w,E,R)=>{const S=()=>{if(f.isMounted){let{next:P,bu:F,u:B,parent:z,vnode:le}=f;{const ft=yh(f);if(ft){P&&(P.el=le.el,ne(f,P,R)),ft.asyncDep.then(()=>{f.isUnmounted||S()});return}}let te=P,We;gn(f,!1),P?(P.el=le.el,ne(f,P,R)):P=le,F&&Mi(F),(We=P.props&&P.props.onVnodeBeforeUpdate)&&_t(We,z,P,le),gn(f,!0);const Le=Nl(f),dt=f.subTree;f.subTree=Le,b(dt,Le,h(dt.el),y(dt),f,w,E),P.el=Le.el,te===null&&L_(f,Le.el),B&&$e(B,w),(We=P.props&&P.props.onVnodeUpdated)&&$e(()=>_t(We,z,P,le),w)}else{let P;const{el:F,props:B}=p,{bm:z,m:le,parent:te,root:We,type:Le}=f,dt=Ms(p);gn(f,!1),z&&Mi(z),!dt&&(P=B&&B.onVnodeBeforeMount)&&_t(P,te,p),gn(f,!0);{We.ce&&We.ce._injectChildStyle(Le);const ft=f.subTree=Nl(f);b(null,ft,g,v,f,w,E),p.el=ft.el}if(le&&$e(le,w),!dt&&(P=B&&B.onVnodeMounted)){const ft=p;$e(()=>_t(P,te,ft),w)}(p.shapeFlag&256||te&&Ms(te.vnode)&&te.vnode.shapeFlag&256)&&f.a&&$e(f.a,w),f.isMounted=!0,p=g=v=null}};f.scope.on();const T=f.effect=new Ou(S);f.scope.off();const I=f.update=T.run.bind(T),U=f.job=T.runIfDirty.bind(T);U.i=f,U.id=f.uid,T.scheduler=()=>Ia(U),gn(f,!0),I()},ne=(f,p,g)=>{p.component=f;const v=f.vnode.props;f.vnode=p,f.next=null,y_(f,p.props,v,g),b_(f,p.children,g),cn(),bl(f),un()},J=(f,p,g,v,w,E,R,S,T=!1)=>{const I=f&&f.children,U=f?f.shapeFlag:0,P=p.children,{patchFlag:F,shapeFlag:B}=p;if(F>0){if(F&128){$t(I,P,g,v,w,E,R,S,T);return}else if(F&256){Ct(I,P,g,v,w,E,R,S,T);return}}B&8?(U&16&&Je(I,w,E),P!==I&&u(g,P)):U&16?B&16?$t(I,P,g,v,w,E,R,S,T):Je(I,w,E,!0):(U&8&&u(g,""),B&16&&ze(P,g,v,w,E,R,S,T))},Ct=(f,p,g,v,w,E,R,S,T)=>{f=f||Gn,p=p||Gn;const I=f.length,U=p.length,P=Math.min(I,U);let F;for(F=0;F<P;F++){const B=p[F]=T?Gt(p[F]):mt(p[F]);b(f[F],B,g,null,w,E,R,S,T)}I>U?Je(f,w,E,!0,!1,P):ze(p,g,v,w,E,R,S,T,P)},$t=(f,p,g,v,w,E,R,S,T)=>{let I=0;const U=p.length;let P=f.length-1,F=U-1;for(;I<=P&&I<=F;){const B=f[I],z=p[I]=T?Gt(p[I]):mt(p[I]);if(bs(B,z))b(B,z,g,null,w,E,R,S,T);else break;I++}for(;I<=P&&I<=F;){const B=f[P],z=p[F]=T?Gt(p[F]):mt(p[F]);if(bs(B,z))b(B,z,g,null,w,E,R,S,T);else break;P--,F--}if(I>P){if(I<=F){const B=F+1,z=B<U?p[B].el:v;for(;I<=F;)b(null,p[I]=T?Gt(p[I]):mt(p[I]),g,z,w,E,R,S,T),I++}}else if(I>F)for(;I<=P;)Me(f[I],w,E,!0),I++;else{const B=I,z=I,le=new Map;for(I=z;I<=F;I++){const Ve=p[I]=T?Gt(p[I]):mt(p[I]);Ve.key!=null&&le.set(Ve.key,I)}let te,We=0;const Le=F-z+1;let dt=!1,ft=0;const ws=new Array(Le);for(I=0;I<Le;I++)ws[I]=0;for(I=B;I<=P;I++){const Ve=f[I];if(We>=Le){Me(Ve,w,E,!0);continue}let pt;if(Ve.key!=null)pt=le.get(Ve.key);else for(te=z;te<=F;te++)if(ws[te-z]===0&&bs(Ve,p[te])){pt=te;break}pt===void 0?Me(Ve,w,E,!0):(ws[pt-z]=I+1,pt>=ft?ft=pt:dt=!0,b(Ve,p[pt],g,null,w,E,R,S,T),We++)}const ml=dt?R_(ws):Gn;for(te=ml.length-1,I=Le-1;I>=0;I--){const Ve=z+I,pt=p[Ve],vl=Ve+1<U?p[Ve+1].el:v;ws[I]===0?b(null,pt,g,vl,w,E,R,S,T):dt&&(te<0||I!==ml[te]?ht(pt,g,vl,2):te--)}}},ht=(f,p,g,v,w=null)=>{const{el:E,type:R,transition:S,children:T,shapeFlag:I}=f;if(I&6){ht(f.component.subTree,p,g,v);return}if(I&128){f.suspense.move(p,g,v);return}if(I&64){R.move(f,p,g,L);return}if(R===Fe){s(E,p,g);for(let P=0;P<T.length;P++)ht(T[P],p,g,v);s(f.anchor,p,g);return}if(R===Ui){M(f,p,g);return}if(v!==2&&I&1&&S)if(v===0)S.beforeEnter(E),s(E,p,g),$e(()=>S.enter(E),w);else{const{leave:P,delayLeave:F,afterLeave:B}=S,z=()=>s(E,p,g),le=()=>{P(E,()=>{z(),B&&B()})};F?F(E,z,le):le()}else s(E,p,g)},Me=(f,p,g,v=!1,w=!1)=>{const{type:E,props:R,ref:S,children:T,dynamicChildren:I,shapeFlag:U,patchFlag:P,dirs:F,cacheIndex:B}=f;if(P===-2&&(w=!1),S!=null&&Yi(S,null,g,f,!0),B!=null&&(p.renderCache[B]=void 0),U&256){p.ctx.deactivate(f);return}const z=U&1&&F,le=!Ms(f);let te;if(le&&(te=R&&R.onVnodeBeforeUnmount)&&_t(te,p,f),U&6)Ai(f.component,g,v);else{if(U&128){f.suspense.unmount(g,v);return}z&&_n(f,null,p,"beforeUnmount"),U&64?f.type.remove(f,p,g,L,v):I&&!I.hasOnce&&(E!==Fe||P>0&&P&64)?Je(I,p,g,!1,!0):(E===Fe&&P&384||!w&&U&16)&&Je(T,p,g),v&&Fn(f)}(le&&(te=R&&R.onVnodeUnmounted)||z)&&$e(()=>{te&&_t(te,p,f),z&&_n(f,null,p,"unmounted")},g)},Fn=f=>{const{type:p,el:g,anchor:v,transition:w}=f;if(p===Fe){Un(g,v);return}if(p===Ui){O(f);return}const E=()=>{i(g),w&&!w.persisted&&w.afterLeave&&w.afterLeave()};if(f.shapeFlag&1&&w&&!w.persisted){const{leave:R,delayLeave:S}=w,T=()=>R(g,E);S?S(f.el,E,T):T()}else E()},Un=(f,p)=>{let g;for(;f!==p;)g=d(f),i(f),f=g;i(p)},Ai=(f,p,g)=>{const{bum:v,scope:w,job:E,subTree:R,um:S,m:T,a:I}=f;kl(T),kl(I),v&&Mi(v),w.stop(),E&&(E.flags|=8,Me(R,f,p,g)),S&&$e(S,p),$e(()=>{f.isUnmounted=!0},p),p&&p.pendingBranch&&!p.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===p.pendingId&&(p.deps--,p.deps===0&&p.resolve())},Je=(f,p,g,v=!1,w=!1,E=0)=>{for(let R=E;R<f.length;R++)Me(f[R],p,g,v,w)},y=f=>{if(f.shapeFlag&6)return y(f.component.subTree);if(f.shapeFlag&128)return f.suspense.next();const p=d(f.anchor||f.el),g=p&&p[zp];return g?d(g):p};let k=!1;const A=(f,p,g)=>{f==null?p._vnode&&Me(p._vnode,null,null,!0):b(p._vnode||null,f,p,null,null,null,g),p._vnode=f,k||(k=!0,bl(),Zu(),k=!1)},L={p:b,um:Me,m:ht,r:Fn,mt:Es,mc:ze,pc:J,pbc:Qe,n:y,o:t};return{render:A,hydrate:void 0,createApp:m_(A)}}function no({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function gn({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function S_(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function vh(t,e,n=!1){const s=t.children,i=e.children;if($(s)&&$(i))for(let r=0;r<s.length;r++){const o=s[r];let a=i[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=i[r]=Gt(i[r]),a.el=o.el),!n&&a.patchFlag!==-2&&vh(o,a)),a.type===Dr&&(a.el=o.el)}}function R_(t){const e=t.slice(),n=[0];let s,i,r,o,a;const l=t.length;for(s=0;s<l;s++){const c=t[s];if(c!==0){if(i=n[n.length-1],t[i]<c){e[s]=i,n.push(s);continue}for(r=0,o=n.length-1;r<o;)a=r+o>>1,t[n[a]]<c?r=a+1:o=a;c<t[n[r]]&&(r>0&&(e[s]=n[r-1]),n[r]=s)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=e[o];return n}function yh(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:yh(e)}function kl(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const A_=Symbol.for("v-scx"),P_=()=>ot(A_);function Fi(t,e,n){return Eh(t,e,n)}function Eh(t,e,n=re){const{immediate:s,deep:i,flush:r,once:o}=n,a=ke({},n),l=e&&s||!e&&r!=="post";let c;if(Js){if(r==="sync"){const _=P_();c=_.__watcherHandles||(_.__watcherHandles=[])}else if(!l){const _=()=>{};return _.stop=vt,_.resume=vt,_.pause=vt,_}}const u=Ae;a.call=(_,m,b)=>It(_,u,m,b);let h=!1;r==="post"?a.scheduler=_=>{$e(_,u&&u.suspense)}:r!=="sync"&&(h=!0,a.scheduler=(_,m)=>{m?_():Ia(_)}),a.augmentJob=_=>{e&&(_.flags|=4),h&&(_.flags|=2,u&&(_.id=u.uid,_.i=u))};const d=jp(t,e,a);return Js&&(c?c.push(d):l&&d()),d}function k_(t,e,n){const s=this.proxy,i=ge(t)?t.includes(".")?wh(s,t):()=>s[t]:t.bind(s,s);let r;j(e)?r=e:(r=e.handler,n=e);const o=gi(this),a=Eh(i,r.bind(s),n);return o(),a}function wh(t,e){const n=e.split(".");return()=>{let s=t;for(let i=0;i<n.length&&s;i++)s=s[n[i]];return s}}const N_=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${Ze(e)}Modifiers`]||t[`${xn(e)}Modifiers`];function O_(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||re;let i=n;const r=e.startsWith("update:"),o=r&&N_(s,e.slice(7));o&&(o.trim&&(i=n.map(u=>ge(u)?u.trim():u)),o.number&&(i=n.map(bo)));let a,l=s[a=Qr(e)]||s[a=Qr(Ze(e))];!l&&r&&(l=s[a=Qr(xn(e))]),l&&It(l,t,6,i);const c=s[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,It(c,t,6,i)}}function Ih(t,e,n=!1){const s=e.emitsCache,i=s.get(t);if(i!==void 0)return i;const r=t.emits;let o={},a=!1;if(!j(t)){const l=c=>{const u=Ih(c,e,!0);u&&(a=!0,ke(o,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!r&&!a?(he(t)&&s.set(t,null),null):($(r)?r.forEach(l=>o[l]=null):ke(o,r),he(t)&&s.set(t,o),o)}function xr(t,e){return!t||!Ir(e)?!1:(e=e.slice(2).replace(/Once$/,""),ee(t,e[0].toLowerCase()+e.slice(1))||ee(t,xn(e))||ee(t,e))}function Nl(t){const{type:e,vnode:n,proxy:s,withProxy:i,propsOptions:[r],slots:o,attrs:a,emit:l,render:c,renderCache:u,props:h,data:d,setupState:_,ctx:m,inheritAttrs:b}=t,x=zi(t);let D,N;try{if(n.shapeFlag&4){const O=i||s,Q=O;D=mt(c.call(Q,O,u,h,_,d,m)),N=a}else{const O=e;D=mt(O.length>1?O(h,{attrs:a,slots:o,emit:l}):O(h,null)),N=e.props?a:x_(a)}}catch(O){Us.length=0,kr(O,t,1),D=be(Sn)}let M=D;if(N&&b!==!1){const O=Object.keys(N),{shapeFlag:Q}=M;O.length&&Q&7&&(r&&O.some(ua)&&(N=D_(N,r)),M=is(M,N,!1,!0))}return n.dirs&&(M=is(M,null,!1,!0),M.dirs=M.dirs?M.dirs.concat(n.dirs):n.dirs),n.transition&&ba(M,n.transition),D=M,zi(x),D}const x_=t=>{let e;for(const n in t)(n==="class"||n==="style"||Ir(n))&&((e||(e={}))[n]=t[n]);return e},D_=(t,e)=>{const n={};for(const s in t)(!ua(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function M_(t,e,n){const{props:s,children:i,component:r}=t,{props:o,children:a,patchFlag:l}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return s?Ol(s,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const d=u[h];if(o[d]!==s[d]&&!xr(c,d))return!0}}}else return(i||a)&&(!a||!a.$stable)?!0:s===o?!1:s?o?Ol(s,o,c):!0:!!o;return!1}function Ol(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let i=0;i<s.length;i++){const r=s[i];if(e[r]!==t[r]&&!xr(n,r))return!0}return!1}function L_({vnode:t,parent:e},n){for(;e;){const s=e.subTree;if(s.suspense&&s.suspense.activeBranch===t&&(s.el=t.el),s===t)(t=e.vnode).el=n,e=e.parent;else break}}const bh=t=>t.__isSuspense;function F_(t,e){e&&e.pendingBranch?$(t)?e.effects.push(...t):e.effects.push(t):qp(t)}const Fe=Symbol.for("v-fgt"),Dr=Symbol.for("v-txt"),Sn=Symbol.for("v-cmt"),Ui=Symbol.for("v-stc"),Us=[];let Ke=null;function fe(t=!1){Us.push(Ke=t?null:[])}function U_(){Us.pop(),Ke=Us[Us.length-1]||null}let Qs=1;function xl(t,e=!1){Qs+=t,t<0&&Ke&&e&&(Ke.hasOnce=!0)}function Ch(t){return t.dynamicChildren=Qs>0?Ke||Gn:null,U_(),Qs>0&&Ke&&Ke.push(t),t}function me(t,e,n,s,i,r){return Ch(H(t,e,n,s,i,r,!0))}function Mo(t,e,n,s,i){return Ch(be(t,e,n,s,i,!0))}function Xi(t){return t?t.__v_isVNode===!0:!1}function bs(t,e){return t.type===e.type&&t.key===e.key}const Th=({key:t})=>t??null,Hi=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?ge(t)||Pe(t)||j(t)?{i:je,r:t,k:e,f:!!n}:t:null);function H(t,e=null,n=null,s=0,i=null,r=t===Fe?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Th(e),ref:e&&Hi(e),scopeId:th,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:s,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:je};return a?(Ta(l,n),r&128&&t.normalize(l)):n&&(l.shapeFlag|=ge(n)?8:16),Qs>0&&!o&&Ke&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&Ke.push(l),l}const be=H_;function H_(t,e=null,n=null,s=0,i=null,r=!1){if((!t||t===l_)&&(t=Sn),Xi(t)){const a=is(t,e,!0);return n&&Ta(a,n),Qs>0&&!r&&Ke&&(a.shapeFlag&6?Ke[Ke.indexOf(t)]=a:Ke.push(a)),a.patchFlag=-2,a}if(J_(t)&&(t=t.__vccOpts),e){e=W_(e);let{class:a,style:l}=e;a&&!ge(a)&&(e.class=fi(a)),he(l)&&(wa(l)&&!$(l)&&(l=ke({},l)),e.style=fa(l))}const o=ge(t)?1:bh(t)?128:Yp(t)?64:he(t)?4:j(t)?2:0;return H(t,e,n,s,i,o,r,!0)}function W_(t){return t?wa(t)||hh(t)?ke({},t):t:null}function is(t,e,n=!1,s=!1){const{props:i,ref:r,patchFlag:o,children:a,transition:l}=t,c=e?$_(i||{},e):i,u={__v_isVNode:!0,__v_skip:!0,type:t.type,props:c,key:c&&Th(c),ref:e&&e.ref?n&&r?$(r)?r.concat(Hi(e)):[r,Hi(e)]:Hi(e):r,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:a,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Fe?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:l,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&is(t.ssContent),ssFallback:t.ssFallback&&is(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return l&&s&&ba(u,l.clone(u)),u}function Cn(t=" ",e=0){return be(Dr,null,t,e)}function V_(t,e){const n=be(Ui,null,t);return n.staticCount=e,n}function Lo(t="",e=!1){return e?(fe(),Mo(Sn,null,t)):be(Sn,null,t)}function mt(t){return t==null||typeof t=="boolean"?be(Sn):$(t)?be(Fe,null,t.slice()):Xi(t)?Gt(t):be(Dr,null,String(t))}function Gt(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:is(t)}function Ta(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if($(e))n=16;else if(typeof e=="object")if(s&65){const i=e.default;i&&(i._c&&(i._d=!1),Ta(t,i()),i._c&&(i._d=!0));return}else{n=32;const i=e._;!i&&!hh(e)?e._ctx=je:i===3&&je&&(je.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else j(e)?(e={default:e,_ctx:je},n=32):(e=String(e),s&64?(n=16,e=[Cn(e)]):n=8);t.children=e,t.shapeFlag|=n}function $_(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const i in s)if(i==="class")e.class!==s.class&&(e.class=fi([e.class,s.class]));else if(i==="style")e.style=fa([e.style,s.style]);else if(Ir(i)){const r=e[i],o=s[i];o&&r!==o&&!($(r)&&r.includes(o))&&(e[i]=r?[].concat(r,o):o)}else i!==""&&(e[i]=s[i])}return e}function _t(t,e,n,s=null){It(t,e,7,[n,s])}const B_=lh();let j_=0;function K_(t,e,n){const s=t.type,i=(e?e.appContext:t.appContext)||B_,r={uid:j_++,vnode:t,type:s,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new mp(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:fh(s,i),emitsOptions:Ih(s,i),emit:null,emitted:null,propsDefaults:re,inheritAttrs:s.inheritAttrs,ctx:re,data:re,props:re,attrs:re,slots:re,refs:re,setupState:re,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=O_.bind(null,r),t.ce&&t.ce(r),r}let Ae=null,Zi,Fo;{const t=Sr(),e=(n,s)=>{let i;return(i=t[n])||(i=t[n]=[]),i.push(s),r=>{i.length>1?i.forEach(o=>o(r)):i[0](r)}};Zi=e("__VUE_INSTANCE_SETTERS__",n=>Ae=n),Fo=e("__VUE_SSR_SETTERS__",n=>Js=n)}const gi=t=>{const e=Ae;return Zi(t),t.scope.on(),()=>{t.scope.off(),Zi(e)}},Dl=()=>{Ae&&Ae.scope.off(),Zi(null)};function Sh(t){return t.vnode.shapeFlag&4}let Js=!1;function G_(t,e=!1,n=!1){e&&Fo(e);const{props:s,children:i}=t.vnode,r=Sh(t);v_(t,s,r,e),I_(t,i,n);const o=r?q_(t,e):void 0;return e&&Fo(!1),o}function q_(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,u_);const{setup:s}=n;if(s){cn();const i=t.setupContext=s.length>1?Y_(t):null,r=gi(t),o=pi(s,t,0,[t.props,i]),a=Cu(o);if(un(),r(),(a||t.sp)&&!Ms(t)&&sh(t),a){if(o.then(Dl,Dl),e)return o.then(l=>{Ml(t,l)}).catch(l=>{kr(l,t,0)});t.asyncDep=o}else Ml(t,o)}else Rh(t)}function Ml(t,e,n){j(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:he(e)&&(t.setupState=Yu(e)),Rh(t)}function Rh(t,e,n){const s=t.type;t.render||(t.render=s.render||vt);{const i=gi(t);cn();try{h_(t)}finally{un(),i()}}}const z_={get(t,e){return Te(t,"get",""),t[e]}};function Y_(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,z_),slots:t.slots,emit:t.emit,expose:e}}function Mr(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(Yu(Fp(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Ls)return Ls[n](t)},has(e,n){return n in e||n in Ls}})):t.proxy}function Q_(t,e=!0){return j(t)?t.displayName||t.name:t.name||e&&t.__name}function J_(t){return j(t)&&"__vccOpts"in t}const et=(t,e)=>$p(t,e,Js);function Ah(t,e,n){const s=arguments.length;return s===2?he(e)&&!$(e)?Xi(e)?be(t,null,[e]):be(t,e):be(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&Xi(n)&&(n=[n]),be(t,e,n))}const X_="3.5.13";/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Uo;const Ll=typeof window<"u"&&window.trustedTypes;if(Ll)try{Uo=Ll.createPolicy("vue",{createHTML:t=>t})}catch{}const Ph=Uo?t=>Uo.createHTML(t):t=>t,Z_="http://www.w3.org/2000/svg",eg="http://www.w3.org/1998/Math/MathML",Rt=typeof document<"u"?document:null,Fl=Rt&&Rt.createElement("template"),tg={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const i=e==="svg"?Rt.createElementNS(Z_,t):e==="mathml"?Rt.createElementNS(eg,t):n?Rt.createElement(t,{is:n}):Rt.createElement(t);return t==="select"&&s&&s.multiple!=null&&i.setAttribute("multiple",s.multiple),i},createText:t=>Rt.createTextNode(t),createComment:t=>Rt.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Rt.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,i,r){const o=n?n.previousSibling:e.lastChild;if(i&&(i===r||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),n),!(i===r||!(i=i.nextSibling)););else{Fl.innerHTML=Ph(s==="svg"?`<svg>${t}</svg>`:s==="mathml"?`<math>${t}</math>`:t);const a=Fl.content;if(s==="svg"||s==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},ng=Symbol("_vtc");function sg(t,e,n){const s=t[ng];s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const Ul=Symbol("_vod"),ig=Symbol("_vsh"),rg=Symbol(""),og=/(^|;)\s*display\s*:/;function ag(t,e,n){const s=t.style,i=ge(n);let r=!1;if(n&&!i){if(e)if(ge(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&Wi(s,a,"")}else for(const o in e)n[o]==null&&Wi(s,o,"");for(const o in n)o==="display"&&(r=!0),Wi(s,o,n[o])}else if(i){if(e!==n){const o=s[rg];o&&(n+=";"+o),s.cssText=n,r=og.test(n)}}else e&&t.removeAttribute("style");Ul in t&&(t[Ul]=r?s.display:"",t[ig]&&(s.display="none"))}const Hl=/\s*!important$/;function Wi(t,e,n){if($(n))n.forEach(s=>Wi(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=lg(t,e);Hl.test(n)?t.setProperty(xn(s),n.replace(Hl,""),"important"):t[s]=n}}const Wl=["Webkit","Moz","ms"],so={};function lg(t,e){const n=so[e];if(n)return n;let s=Ze(e);if(s!=="filter"&&s in t)return so[e]=s;s=Tr(s);for(let i=0;i<Wl.length;i++){const r=Wl[i]+s;if(r in t)return so[e]=r}return e}const Vl="http://www.w3.org/1999/xlink";function $l(t,e,n,s,i,r=_p(e)){s&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(Vl,e.slice(6,e.length)):t.setAttributeNS(Vl,e,n):n==null||r&&!Au(n)?t.removeAttribute(e):t.setAttribute(e,r?"":wt(n)?String(n):n)}function Bl(t,e,n,s,i){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?Ph(n):n);return}const r=t.tagName;if(e==="value"&&r!=="PROGRESS"&&!r.includes("-")){const a=r==="OPTION"?t.getAttribute("value")||"":t.value,l=n==null?t.type==="checkbox"?"on":"":String(n);(a!==l||!("_value"in t))&&(t.value=l),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const a=typeof t[e];a==="boolean"?n=Au(n):n==null&&a==="string"?(n="",o=!0):a==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(i||e)}function En(t,e,n,s){t.addEventListener(e,n,s)}function cg(t,e,n,s){t.removeEventListener(e,n,s)}const jl=Symbol("_vei");function ug(t,e,n,s,i=null){const r=t[jl]||(t[jl]={}),o=r[e];if(s&&o)o.value=s;else{const[a,l]=hg(e);if(s){const c=r[e]=pg(s,i);En(t,a,c,l)}else o&&(cg(t,a,o,l),r[e]=void 0)}}const Kl=/(?:Once|Passive|Capture)$/;function hg(t){let e;if(Kl.test(t)){e={};let s;for(;s=t.match(Kl);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):xn(t.slice(2)),e]}let io=0;const dg=Promise.resolve(),fg=()=>io||(dg.then(()=>io=0),io=Date.now());function pg(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;It(_g(s,n.value),e,5,[s])};return n.value=t,n.attached=fg(),n}function _g(t,e){if($(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>i=>!i._stopped&&s&&s(i))}else return e}const Gl=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,gg=(t,e,n,s,i,r)=>{const o=i==="svg";e==="class"?sg(t,s,o):e==="style"?ag(t,n,s):Ir(e)?ua(e)||ug(t,e,n,s,r):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):mg(t,e,s,o))?(Bl(t,e,s),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&$l(t,e,s,o,r,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!ge(s))?Bl(t,Ze(e),s,r,e):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),$l(t,e,s,o))};function mg(t,e,n,s){if(s)return!!(e==="innerHTML"||e==="textContent"||e in t&&Gl(e)&&j(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const i=t.tagName;if(i==="IMG"||i==="VIDEO"||i==="CANVAS"||i==="SOURCE")return!1}return Gl(e)&&ge(n)?!1:e in t}const er=t=>{const e=t.props["onUpdate:modelValue"]||!1;return $(e)?n=>Mi(e,n):e};function vg(t){t.target.composing=!0}function ql(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Xn=Symbol("_assign"),zl={created(t,{modifiers:{lazy:e,trim:n,number:s}},i){t[Xn]=er(i);const r=s||i.props&&i.props.type==="number";En(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),r&&(a=bo(a)),t[Xn](a)}),n&&En(t,"change",()=>{t.value=t.value.trim()}),e||(En(t,"compositionstart",vg),En(t,"compositionend",ql),En(t,"change",ql))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:s,trim:i,number:r}},o){if(t[Xn]=er(o),t.composing)return;const a=(r||t.type==="number")&&!/^0\d/.test(t.value)?bo(t.value):t.value,l=e??"";a!==l&&(document.activeElement===t&&t.type!=="range"&&(s&&e===n||i&&t.value.trim()===l)||(t.value=l))}},yg={deep:!0,created(t,e,n){t[Xn]=er(n),En(t,"change",()=>{const s=t._modelValue,i=Eg(t),r=t.checked,o=t[Xn];if($(s)){const a=Pu(s,i),l=a!==-1;if(r&&!l)o(s.concat(i));else if(!r&&l){const c=[...s];c.splice(a,1),o(c)}}else if(br(s)){const a=new Set(s);r?a.add(i):a.delete(i),o(a)}else o(kh(t,r))})},mounted:Yl,beforeUpdate(t,e,n){t[Xn]=er(n),Yl(t,e,n)}};function Yl(t,{value:e,oldValue:n},s){t._modelValue=e;let i;if($(e))i=Pu(e,s.props.value)>-1;else if(br(e))i=e.has(s.props.value);else{if(e===n)return;i=Rr(e,kh(t,!0))}t.checked!==i&&(t.checked=i)}function Eg(t){return"_value"in t?t._value:t.value}function kh(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const wg=["ctrl","shift","alt","meta"],Ig={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>wg.some(n=>t[`${n}Key`]&&!e.includes(n))},Nh=(t,e)=>{const n=t._withMods||(t._withMods={}),s=e.join(".");return n[s]||(n[s]=(i,...r)=>{for(let o=0;o<e.length;o++){const a=Ig[e[o]];if(a&&a(i,e))return}return t(i,...r)})},bg=ke({patchProp:gg},tg);let Ql;function Cg(){return Ql||(Ql=C_(bg))}const Tg=(...t)=>{const e=Cg().createApp(...t),{mount:n}=e;return e.mount=s=>{const i=Rg(s);if(!i)return;const r=e._component;!j(r)&&!r.render&&!r.template&&(r.template=i.innerHTML),i.nodeType===1&&(i.textContent="");const o=n(i,!1,Sg(i));return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e};function Sg(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function Rg(t){return ge(t)?document.querySelector(t):t}const bt=(t,e)=>{const n=t.__vccOpts||t;for(const[s,i]of e)n[s]=i;return n},Ag={setup(){const t=bn(!1),e=bn(!1),n=ot("handleLogout"),s=[{label:"Teraapiad-massaažid",link:"/termas"},{label:"Shindo treeningud",link:"/shindo"},{label:"Hinnakiri",link:"/hinnakiri"},{label:"Minust",link:"/minust"},{label:"Kontakt",link:"/kontakt"}],i=()=>{window.innerWidth>1079&&(t.value=!1)};return Or(()=>{window.addEventListener("resize",i),localStorage.getItem("adminKey")&&(e.value=!0)}),_i(()=>{window.removeEventListener("resize",i)}),{menuOpen:t,menuItems:s,isAdmin:e,handleLogout:n}}},Pg={for:"check",class:"icons"},kg={key:0,class:"bx bx-menu"},Ng={key:1,class:"bx bx-x"};function Og(t,e,n,s,i,r){const o=Qi("router-link");return fe(),me("header",null,[be(o,{to:"/",class:"logo"},{default:Li(()=>e[2]||(e[2]=[Cn("Terindo")])),_:1}),Po(H("input",{type:"checkbox",id:"check","onUpdate:modelValue":e[0]||(e[0]=a=>s.menuOpen=a)},null,512),[[yg,s.menuOpen]]),H("label",Pg,[s.menuOpen?(fe(),me("i",Ng)):(fe(),me("i",kg))]),H("nav",{class:fi({open:s.menuOpen})},[(fe(!0),me(Fe,null,ko(s.menuItems,a=>(fe(),Mo(o,{key:a.link,to:a.link},{default:Li(()=>[Cn(pa(a.label),1)]),_:2},1032,["to"]))),128)),s.isAdmin?(fe(),Mo(o,{key:0,to:"/admin"},{default:Li(()=>e[3]||(e[3]=[Cn("Admin")])),_:1})):Lo("",!0),s.isAdmin?(fe(),me("button",{key:1,onClick:e[1]||(e[1]=(...a)=>s.handleLogout&&s.handleLogout(...a))},"Logout")):Lo("",!0)],2)])}const xg=bt(Ag,[["render",Og],["__scopeId","data-v-502877b5"]]),Dg=()=>{};var Jl={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oh={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C=function(t,e){if(!t)throw fs(e)},fs=function(t){return new Error("Firebase Database ("+Oh.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xh=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Mg=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const i=t[n++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=t[n++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(l>>10)),e[s++]=String.fromCharCode(56320+(l&1023))}else{const r=t[n++],o=t[n++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},Sa={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<t.length;i+=3){const r=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,c=l?t[i+2]:0,u=r>>2,h=(r&3)<<4|a>>4;let d=(a&15)<<2|c>>6,_=c&63;l||(_=64,o||(d=64)),s.push(n[u],n[h],n[d],n[_])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(xh(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Mg(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<t.length;){const r=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,r==null||a==null||c==null||h==null)throw new Lg;const d=r<<2|a>>4;if(s.push(d),c!==64){const _=a<<4&240|c>>2;if(s.push(_),h!==64){const m=c<<6&192|h;s.push(m)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Lg extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Dh=function(t){const e=xh(t);return Sa.encodeByteArray(e,!0)},tr=function(t){return Dh(t).replace(/\./g,"")},nr=function(t){try{return Sa.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fg(t){return Mh(void 0,t)}function Mh(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!Ug(n)||(t[n]=Mh(t[n],e[n]));return t}function Ug(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hg(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wg=()=>Hg().__FIREBASE_DEFAULTS__,Vg=()=>{if(typeof process>"u"||typeof Jl>"u")return;const t=Jl.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},$g=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&nr(t[1]);return e&&JSON.parse(e)},Ra=()=>{try{return Dg()||Wg()||Vg()||$g()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Lh=t=>{var e,n;return(n=(e=Ra())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Bg=t=>{const e=Lh(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},Fh=()=>{var t;return(t=Ra())===null||t===void 0?void 0:t.config},Uh=t=>{var e;return(e=Ra())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Aa{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jg(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",i=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},t);return[tr(JSON.stringify(n)),tr(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function De(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Pa(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(De())}function Kg(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Gg(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Hh(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function qg(){const t=De();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function zg(){return Oh.NODE_ADMIN===!0}function Yg(){try{return typeof indexedDB=="object"}catch{return!1}}function Qg(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var r;e(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jg="FirebaseError";class hn extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=Jg,Object.setPrototypeOf(this,hn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,mi.prototype.create)}}class mi{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?Xg(r,s):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new hn(i,a,s)}}function Xg(t,e){return t.replace(Zg,(n,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const Zg=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xs(t){return JSON.parse(t)}function ve(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wh=function(t){let e={},n={},s={},i="";try{const r=t.split(".");e=Xs(nr(r[0])||""),n=Xs(nr(r[1])||""),i=r[2],s=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:s,signature:i}},em=function(t){const e=Wh(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},tm=function(t){const e=Wh(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ht(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function rs(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Ho(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function sr(t,e,n){const s={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(s[i]=e.call(n,t[i],i,t));return s}function Rn(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const i of n){if(!s.includes(i))return!1;const r=t[i],o=e[i];if(Xl(r)&&Xl(o)){if(!Rn(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!n.includes(i))return!1;return!0}function Xl(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ps(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function ks(t){const e={};return t.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[i,r]=s.split("=");e[decodeURIComponent(i)]=decodeURIComponent(r)}}),e}function Ns(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nm{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const s=this.W_;if(typeof e=="string")for(let h=0;h<16;h++)s[h]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let h=0;h<16;h++)s[h]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let h=16;h<80;h++){const d=s[h-3]^s[h-8]^s[h-14]^s[h-16];s[h]=(d<<1|d>>>31)&4294967295}let i=this.chain_[0],r=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,u;for(let h=0;h<80;h++){h<40?h<20?(c=a^r&(o^a),u=1518500249):(c=r^o^a,u=1859775393):h<60?(c=r&o|a&(r|o),u=2400959708):(c=r^o^a,u=3395469782);const d=(i<<5|i>>>27)+c+l+u+s[h]&4294967295;l=a,a=o,o=(r<<30|r>>>2)&4294967295,r=i,i=d}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const s=n-this.blockSize;let i=0;const r=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=s;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(r[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}else for(;i<n;)if(r[o]=e[i],++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let s=0;for(let i=0;i<5;i++)for(let r=24;r>=0;r-=8)e[s]=this.chain_[i]>>r&255,++s;return e}}function sm(t,e){const n=new im(t,e);return n.subscribe.bind(n)}class im{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let i;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");rm(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:s},i.next===void 0&&(i.next=ro),i.error===void 0&&(i.error=ro),i.complete===void 0&&(i.complete=ro);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function rm(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function ro(){}function Vh(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const om=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);if(i>=55296&&i<=56319){const r=i-55296;s++,C(s<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(s)-56320;i=65536+(r<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Lr=function(t){let e=0;for(let n=0;n<t.length;n++){const s=t.charCodeAt(n);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,n++):e+=3}return e};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qe(t){return t&&t._delegate?t._delegate:t}class An{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class am{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new Aa;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(cm(e))try{this.getOrInitializeService({instanceIdentifier:vn})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=vn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=vn){return this.instances.has(e)}getOptions(e=vn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);s===a&&o.resolve(i)}return i}onInit(e,n){var s;const i=this.normalizeInstanceIdentifier(n),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(e),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&e(o,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const i of s)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:lm(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=vn){return this.component?this.component.multipleInstances?e:vn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function lm(t){return t===vn?void 0:t}function cm(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class um{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new am(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var se;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(se||(se={}));const hm={debug:se.DEBUG,verbose:se.VERBOSE,info:se.INFO,warn:se.WARN,error:se.ERROR,silent:se.SILENT},dm=se.INFO,fm={[se.DEBUG]:"log",[se.VERBOSE]:"log",[se.INFO]:"info",[se.WARN]:"warn",[se.ERROR]:"error"},pm=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),i=fm[e];if(i)console[i](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ka{constructor(e){this.name=e,this._logLevel=dm,this._logHandler=pm,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in se))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?hm[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,se.DEBUG,...e),this._logHandler(this,se.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,se.VERBOSE,...e),this._logHandler(this,se.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,se.INFO,...e),this._logHandler(this,se.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,se.WARN,...e),this._logHandler(this,se.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,se.ERROR,...e),this._logHandler(this,se.ERROR,...e)}}const _m=(t,e)=>e.some(n=>t instanceof n);let Zl,ec;function gm(){return Zl||(Zl=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function mm(){return ec||(ec=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const $h=new WeakMap,Wo=new WeakMap,Bh=new WeakMap,oo=new WeakMap,Na=new WeakMap;function vm(t){const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(Zt(t.result)),i()},o=()=>{s(t.error),i()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&$h.set(n,t)}).catch(()=>{}),Na.set(e,t),e}function ym(t){if(Wo.has(t))return;const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),i()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});Wo.set(t,e)}let Vo={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Wo.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Bh.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Zt(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Em(t){Vo=t(Vo)}function wm(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(ao(this),e,...n);return Bh.set(s,e.sort?e.sort():[e]),Zt(s)}:mm().includes(t)?function(...e){return t.apply(ao(this),e),Zt($h.get(this))}:function(...e){return Zt(t.apply(ao(this),e))}}function Im(t){return typeof t=="function"?wm(t):(t instanceof IDBTransaction&&ym(t),_m(t,gm())?new Proxy(t,Vo):t)}function Zt(t){if(t instanceof IDBRequest)return vm(t);if(oo.has(t))return oo.get(t);const e=Im(t);return e!==t&&(oo.set(t,e),Na.set(e,t)),e}const ao=t=>Na.get(t);function bm(t,e,{blocked:n,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(t,e),a=Zt(o);return s&&o.addEventListener("upgradeneeded",l=>{s(Zt(o.result),l.oldVersion,l.newVersion,Zt(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{r&&l.addEventListener("close",()=>r()),i&&l.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const Cm=["get","getKey","getAll","getAllKeys","count"],Tm=["put","add","delete","clear"],lo=new Map;function tc(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(lo.get(e))return lo.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,i=Tm.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(i||Cm.includes(n)))return;const r=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let c=l.store;return s&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&l.done]))[0]};return lo.set(e,r),r}Em(t=>({...t,get:(e,n,s)=>tc(e,n)||t.get(e,n,s),has:(e,n)=>!!tc(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sm{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Rm(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function Rm(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const $o="@firebase/app",nc="0.11.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mt=new ka("@firebase/app"),Am="@firebase/app-compat",Pm="@firebase/analytics-compat",km="@firebase/analytics",Nm="@firebase/app-check-compat",Om="@firebase/app-check",xm="@firebase/auth",Dm="@firebase/auth-compat",Mm="@firebase/database",Lm="@firebase/data-connect",Fm="@firebase/database-compat",Um="@firebase/functions",Hm="@firebase/functions-compat",Wm="@firebase/installations",Vm="@firebase/installations-compat",$m="@firebase/messaging",Bm="@firebase/messaging-compat",jm="@firebase/performance",Km="@firebase/performance-compat",Gm="@firebase/remote-config",qm="@firebase/remote-config-compat",zm="@firebase/storage",Ym="@firebase/storage-compat",Qm="@firebase/firestore",Jm="@firebase/vertexai",Xm="@firebase/firestore-compat",Zm="firebase",ev="11.4.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bo="[DEFAULT]",tv={[$o]:"fire-core",[Am]:"fire-core-compat",[km]:"fire-analytics",[Pm]:"fire-analytics-compat",[Om]:"fire-app-check",[Nm]:"fire-app-check-compat",[xm]:"fire-auth",[Dm]:"fire-auth-compat",[Mm]:"fire-rtdb",[Lm]:"fire-data-connect",[Fm]:"fire-rtdb-compat",[Um]:"fire-fn",[Hm]:"fire-fn-compat",[Wm]:"fire-iid",[Vm]:"fire-iid-compat",[$m]:"fire-fcm",[Bm]:"fire-fcm-compat",[jm]:"fire-perf",[Km]:"fire-perf-compat",[Gm]:"fire-rc",[qm]:"fire-rc-compat",[zm]:"fire-gcs",[Ym]:"fire-gcs-compat",[Qm]:"fire-fst",[Xm]:"fire-fst-compat",[Jm]:"fire-vertex","fire-js":"fire-js",[Zm]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ir=new Map,nv=new Map,jo=new Map;function sc(t,e){try{t.container.addComponent(e)}catch(n){Mt.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function os(t){const e=t.name;if(jo.has(e))return Mt.debug(`There were multiple attempts to register component ${e}.`),!1;jo.set(e,t);for(const n of ir.values())sc(n,t);for(const n of nv.values())sc(n,t);return!0}function Oa(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function tt(t){return t==null?!1:t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sv={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},en=new mi("app","Firebase",sv);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iv{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new An("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw en.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _s=ev;function jh(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:Bo,automaticDataCollectionEnabled:!1},e),i=s.name;if(typeof i!="string"||!i)throw en.create("bad-app-name",{appName:String(i)});if(n||(n=Fh()),!n)throw en.create("no-options");const r=ir.get(i);if(r){if(Rn(n,r.options)&&Rn(s,r.config))return r;throw en.create("duplicate-app",{appName:i})}const o=new um(i);for(const l of jo.values())o.addComponent(l);const a=new iv(n,s,o);return ir.set(i,a),a}function Kh(t=Bo){const e=ir.get(t);if(!e&&t===Bo&&Fh())return jh();if(!e)throw en.create("no-app",{appName:t});return e}function tn(t,e,n){var s;let i=(s=tv[t])!==null&&s!==void 0?s:t;n&&(i+=`-${n}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${i}" with version "${e}":`];r&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Mt.warn(a.join(" "));return}os(new An(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rv="firebase-heartbeat-database",ov=1,Zs="firebase-heartbeat-store";let co=null;function Gh(){return co||(co=bm(rv,ov,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Zs)}catch(n){console.warn(n)}}}}).catch(t=>{throw en.create("idb-open",{originalErrorMessage:t.message})})),co}async function av(t){try{const n=(await Gh()).transaction(Zs),s=await n.objectStore(Zs).get(qh(t));return await n.done,s}catch(e){if(e instanceof hn)Mt.warn(e.message);else{const n=en.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Mt.warn(n.message)}}}async function ic(t,e){try{const s=(await Gh()).transaction(Zs,"readwrite");await s.objectStore(Zs).put(e,qh(t)),await s.done}catch(n){if(n instanceof hn)Mt.warn(n.message);else{const s=en.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Mt.warn(s.message)}}}function qh(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lv=1024,cv=30;class uv{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new dv(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=rc();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(o=>o.date===r))return;if(this._heartbeatsCache.heartbeats.push({date:r,agent:i}),this._heartbeatsCache.heartbeats.length>cv){const o=fv(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){Mt.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=rc(),{heartbeatsToSend:s,unsentEntries:i}=hv(this._heartbeatsCache.heartbeats),r=tr(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}catch(n){return Mt.warn(n),""}}}function rc(){return new Date().toISOString().substring(0,10)}function hv(t,e=lv){const n=[];let s=t.slice();for(const i of t){const r=n.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),oc(n)>e){r.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),oc(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class dv{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Yg()?Qg().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await av(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return ic(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return ic(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function oc(t){return tr(JSON.stringify({version:2,heartbeats:t})).length}function fv(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let s=1;s<t.length;s++)t[s].date<n&&(n=t[s].date,e=s);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pv(t){os(new An("platform-logger",e=>new Sm(e),"PRIVATE")),os(new An("heartbeat",e=>new uv(e),"PRIVATE")),tn($o,nc,t),tn($o,nc,"esm2017"),tn("fire-js","")}pv("");var _v="firebase",gv="11.4.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */tn(_v,gv,"app");function xa(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,s=Object.getOwnPropertySymbols(t);i<s.length;i++)e.indexOf(s[i])<0&&Object.prototype.propertyIsEnumerable.call(t,s[i])&&(n[s[i]]=t[s[i]]);return n}function zh(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const mv=zh,Yh=new mi("auth","Firebase",zh());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rr=new ka("@firebase/auth");function vv(t,...e){rr.logLevel<=se.WARN&&rr.warn(`Auth (${_s}): ${t}`,...e)}function Vi(t,...e){rr.logLevel<=se.ERROR&&rr.error(`Auth (${_s}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lt(t,...e){throw Da(t,...e)}function yt(t,...e){return Da(t,...e)}function Qh(t,e,n){const s=Object.assign(Object.assign({},mv()),{[e]:n});return new mi("auth","Firebase",s).create(e,{appName:t.name})}function nn(t){return Qh(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Da(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return Yh.create(t,...e)}function W(t,e,...n){if(!t)throw Da(e,...n)}function kt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Vi(e),new Error(e)}function Lt(t,e){t||kt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ko(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function yv(){return ac()==="http:"||ac()==="https:"}function ac(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ev(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(yv()||Gg()||"connection"in navigator)?navigator.onLine:!0}function wv(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vi{constructor(e,n){this.shortDelay=e,this.longDelay=n,Lt(n>e,"Short delay should be less than long delay!"),this.isMobile=Pa()||Hh()}get(){return Ev()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ma(t,e){Lt(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jh{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;kt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;kt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;kt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Iv={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bv=new vi(3e4,6e4);function Dn(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function dn(t,e,n,s,i={}){return Xh(t,i,async()=>{let r={},o={};s&&(e==="GET"?o=s:r={body:JSON.stringify(s)});const a=ps(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode);const c=Object.assign({method:e,headers:l},r);return Kg()||(c.referrerPolicy="no-referrer"),Jh.fetch()(Zh(t,t.config.apiHost,n,a),c)})}async function Xh(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},Iv),e);try{const i=new Tv(t),r=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw Oi(t,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const a=r.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Oi(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Oi(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Oi(t,"user-disabled",o);const u=s[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw Qh(t,u,c);lt(t,u)}}catch(i){if(i instanceof hn)throw i;lt(t,"network-request-failed",{message:String(i)})}}async function Fr(t,e,n,s,i={}){const r=await dn(t,e,n,s,i);return"mfaPendingCredential"in r&&lt(t,"multi-factor-auth-required",{_serverResponse:r}),r}function Zh(t,e,n,s){const i=`${e}${n}?${s}`;return t.config.emulator?Ma(t.config,i):`${t.config.apiScheme}://${i}`}function Cv(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Tv{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(yt(this.auth,"network-request-failed")),bv.get())})}}function Oi(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const i=yt(t,e,s);return i.customData._tokenResponse=n,i}function lc(t){return t!==void 0&&t.enterprise!==void 0}class Sv{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return Cv(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function Rv(t,e){return dn(t,"GET","/v2/recaptchaConfig",Dn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Av(t,e){return dn(t,"POST","/v1/accounts:delete",e)}async function ed(t,e){return dn(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hs(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Pv(t,e=!1){const n=qe(t),s=await n.getIdToken(e),i=La(s);W(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const r=typeof i.firebase=="object"?i.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:i,token:s,authTime:Hs(uo(i.auth_time)),issuedAtTime:Hs(uo(i.iat)),expirationTime:Hs(uo(i.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function uo(t){return Number(t)*1e3}function La(t){const[e,n,s]=t.split(".");if(e===void 0||n===void 0||s===void 0)return Vi("JWT malformed, contained fewer than 3 sections"),null;try{const i=nr(n);return i?JSON.parse(i):(Vi("Failed to decode base64 JWT payload"),null)}catch(i){return Vi("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function cc(t){const e=La(t);return W(e,"internal-error"),W(typeof e.exp<"u","internal-error"),W(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ei(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof hn&&kv(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function kv({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nv{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Go{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Hs(this.lastLoginAt),this.creationTime=Hs(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function or(t){var e;const n=t.auth,s=await t.getIdToken(),i=await ei(t,ed(n,{idToken:s}));W(i==null?void 0:i.users.length,n,"internal-error");const r=i.users[0];t._notifyReloadListener(r);const o=!((e=r.providerUserInfo)===null||e===void 0)&&e.length?td(r.providerUserInfo):[],a=xv(t.providerData,o),l=t.isAnonymous,c=!(t.email&&r.passwordHash)&&!(a!=null&&a.length),u=l?c:!1,h={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new Go(r.createdAt,r.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function Ov(t){const e=qe(t);await or(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function xv(t,e){return[...t.filter(s=>!e.some(i=>i.providerId===s.providerId)),...e]}function td(t){return t.map(e=>{var{providerId:n}=e,s=xa(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Dv(t,e){const n=await Xh(t,{},async()=>{const s=ps({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:r}=t.config,o=Zh(t,i,"/v1/token",`key=${r}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Jh.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function Mv(t,e){return dn(t,"POST","/v2/accounts:revokeToken",Dn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){W(e.idToken,"internal-error"),W(typeof e.idToken<"u","internal-error"),W(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):cc(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){W(e.length!==0,"internal-error");const n=cc(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(W(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:i,expiresIn:r}=await Dv(e,n);this.updateTokensAndExpiration(s,i,Number(r))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:i,expirationTime:r}=n,o=new Zn;return s&&(W(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),i&&(W(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),r&&(W(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Zn,this.toJSON())}_performRefresh(){return kt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bt(t,e){W(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Nt{constructor(e){var{uid:n,auth:s,stsTokenManager:i}=e,r=xa(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Nv(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new Go(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const n=await ei(this,this.stsTokenManager.getToken(this.auth,e));return W(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Pv(this,e)}reload(){return Ov(this)}_assign(e){this!==e&&(W(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Nt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){W(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await or(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(tt(this.auth.app))return Promise.reject(nn(this.auth));const e=await this.getIdToken();return await ei(this,Av(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,i,r,o,a,l,c,u;const h=(s=n.displayName)!==null&&s!==void 0?s:void 0,d=(i=n.email)!==null&&i!==void 0?i:void 0,_=(r=n.phoneNumber)!==null&&r!==void 0?r:void 0,m=(o=n.photoURL)!==null&&o!==void 0?o:void 0,b=(a=n.tenantId)!==null&&a!==void 0?a:void 0,x=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,D=(c=n.createdAt)!==null&&c!==void 0?c:void 0,N=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:M,emailVerified:O,isAnonymous:Q,providerData:_e,stsTokenManager:ae}=n;W(M&&ae,e,"internal-error");const ze=Zn.fromJSON(this.name,ae);W(typeof M=="string",e,"internal-error"),Bt(h,e.name),Bt(d,e.name),W(typeof O=="boolean",e,"internal-error"),W(typeof Q=="boolean",e,"internal-error"),Bt(_,e.name),Bt(m,e.name),Bt(b,e.name),Bt(x,e.name),Bt(D,e.name),Bt(N,e.name);const Ye=new Nt({uid:M,auth:e,email:d,emailVerified:O,displayName:h,isAnonymous:Q,photoURL:m,phoneNumber:_,tenantId:b,stsTokenManager:ze,createdAt:D,lastLoginAt:N});return _e&&Array.isArray(_e)&&(Ye.providerData=_e.map(Qe=>Object.assign({},Qe))),x&&(Ye._redirectEventId=x),Ye}static async _fromIdTokenResponse(e,n,s=!1){const i=new Zn;i.updateFromServerResponse(n);const r=new Nt({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:s});return await or(r),r}static async _fromGetAccountInfoResponse(e,n,s){const i=n.users[0];W(i.localId!==void 0,"internal-error");const r=i.providerUserInfo!==void 0?td(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(r!=null&&r.length),a=new Zn;a.updateFromIdToken(s);const l=new Nt({uid:i.localId,auth:e,stsTokenManager:a,isAnonymous:o}),c={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:r,metadata:new Go(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(r!=null&&r.length)};return Object.assign(l,c),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uc=new Map;function Ot(t){Lt(t instanceof Function,"Expected a class definition");let e=uc.get(t);return e?(Lt(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,uc.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nd{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}nd.type="NONE";const hc=nd;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $i(t,e,n){return`firebase:${t}:${e}:${n}`}class es{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:i,name:r}=this.auth;this.fullUserKey=$i(this.userKey,i.apiKey,r),this.fullPersistenceKey=$i("persistence",i.apiKey,r),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Nt._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new es(Ot(hc),e,s);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let r=i[0]||Ot(hc);const o=$i(s,e.config.apiKey,e.name);let a=null;for(const c of n)try{const u=await c._get(o);if(u){const h=Nt._fromJSON(e,u);c!==r&&(a=h),r=c;break}}catch{}const l=i.filter(c=>c._shouldAllowMigration);return!r._shouldAllowMigration||!l.length?new es(r,e,s):(r=l[0],a&&await r._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==r)try{await c._remove(o)}catch{}})),new es(r,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dc(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(od(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(sd(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(ld(e))return"Blackberry";if(cd(e))return"Webos";if(id(e))return"Safari";if((e.includes("chrome/")||rd(e))&&!e.includes("edge/"))return"Chrome";if(ad(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function sd(t=De()){return/firefox\//i.test(t)}function id(t=De()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function rd(t=De()){return/crios\//i.test(t)}function od(t=De()){return/iemobile/i.test(t)}function ad(t=De()){return/android/i.test(t)}function ld(t=De()){return/blackberry/i.test(t)}function cd(t=De()){return/webos/i.test(t)}function Fa(t=De()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Lv(t=De()){var e;return Fa(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Fv(){return qg()&&document.documentMode===10}function ud(t=De()){return Fa(t)||ad(t)||cd(t)||ld(t)||/windows phone/i.test(t)||od(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hd(t,e=[]){let n;switch(t){case"Browser":n=dc(De());break;case"Worker":n=`${dc(De())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${_s}/${s}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uv{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=r=>new Promise((o,a)=>{try{const l=e(r);o(l)}catch(l){a(l)}});s.onAbort=n,this.queue.push(s);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Hv(t,e={}){return dn(t,"GET","/v2/passwordPolicy",Dn(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wv=6;class Vv{constructor(e){var n,s,i,r;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:Wv,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(s=e.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(r=e.forceUpgradeOnSignin)!==null&&r!==void 0?r:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,s,i,r,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(s=l.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(r=l.containsUppercaseLetter)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,n){const s=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;s&&(n.meetsMinPasswordLength=e.length>=s),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let s;for(let i=0;i<e.length;i++)s=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,n,s,i,r){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $v{constructor(e,n,s,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new fc(this),this.idTokenSubscription=new fc(this),this.beforeStateQueue=new Uv(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Yh,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Ot(n)),this._initializationPromise=this.queue(async()=>{var s,i;if(!this._deleted&&(this.persistenceManager=await es.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await ed(this,{idToken:e}),s=await Nt._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(s)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(tt(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const s=await this.assertedPersistence.getCurrentUser();let i=s,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,r=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return W(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await or(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=wv()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(tt(this.app))return Promise.reject(nn(this));const n=e?qe(e):null;return n&&W(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&W(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return tt(this.app)?Promise.reject(nn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return tt(this.app)?Promise.reject(nn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Ot(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Hv(this),n=new Vv(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new mi("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(s.tenantId=this.tenantId),await Mv(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Ot(e)||this._popupRedirectResolver;W(n,this,"argument-error"),this.redirectPersistenceManager=await es.create(this,[Ot(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,i){if(this._deleted)return()=>{};const r=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(W(a,this,"internal-error"),a.then(()=>{o||r(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,s,i);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return W(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=hd(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(n["X-Firebase-Client"]=s);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;if(tt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&vv(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function gs(t){return qe(t)}class fc{constructor(e){this.auth=e,this.observer=null,this.addObserver=sm(n=>this.observer=n)}get next(){return W(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ur={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Bv(t){Ur=t}function dd(t){return Ur.loadJS(t)}function jv(){return Ur.recaptchaEnterpriseScript}function Kv(){return Ur.gapiScript}function Gv(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class qv{constructor(){this.enterprise=new zv}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class zv{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const Yv="recaptcha-enterprise",fd="NO_RECAPTCHA";class Qv{constructor(e){this.type=Yv,this.auth=gs(e)}async verify(e="verify",n=!1){async function s(r){if(!n){if(r.tenantId==null&&r._agentRecaptchaConfig!=null)return r._agentRecaptchaConfig.siteKey;if(r.tenantId!=null&&r._tenantRecaptchaConfigs[r.tenantId]!==void 0)return r._tenantRecaptchaConfigs[r.tenantId].siteKey}return new Promise(async(o,a)=>{Rv(r,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const c=new Sv(l);return r.tenantId==null?r._agentRecaptchaConfig=c:r._tenantRecaptchaConfigs[r.tenantId]=c,o(c.siteKey)}}).catch(l=>{a(l)})})}function i(r,o,a){const l=window.grecaptcha;lc(l)?l.enterprise.ready(()=>{l.enterprise.execute(r,{action:e}).then(c=>{o(c)}).catch(()=>{o(fd)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new qv().execute("siteKey",{action:"verify"}):new Promise((r,o)=>{s(this.auth).then(a=>{if(!n&&lc(window.grecaptcha))i(a,r,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=jv();l.length!==0&&(l+=a),dd(l).then(()=>{i(a,r,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}async function pc(t,e,n,s=!1,i=!1){const r=new Qv(t);let o;if(i)o=fd;else try{o=await r.verify(n)}catch{o=await r.verify(n,!0)}const a=Object.assign({},e);if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in a){const l=a.phoneEnrollmentInfo.phoneNumber,c=a.phoneEnrollmentInfo.recaptchaToken;Object.assign(a,{phoneEnrollmentInfo:{phoneNumber:l,recaptchaToken:c,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in a){const l=a.phoneSignInInfo.recaptchaToken;Object.assign(a,{phoneSignInInfo:{recaptchaToken:l,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return a}return s?Object.assign(a,{captchaResp:o}):Object.assign(a,{captchaResponse:o}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function _c(t,e,n,s,i){var r;if(!((r=t._getRecaptchaConfig())===null||r===void 0)&&r.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await pc(t,e,n,n==="getOobCode");return s(t,o)}else return s(t,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const a=await pc(t,e,n,n==="getOobCode");return s(t,a)}else return Promise.reject(o)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jv(t,e){const n=Oa(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),r=n.getOptions();if(Rn(r,e??{}))return i;lt(i,"already-initialized")}return n.initialize({options:e})}function Xv(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(Ot);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function Zv(t,e,n){const s=gs(t);W(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const i=!1,r=pd(e),{host:o,port:a}=ey(e),l=a===null?"":`:${a}`,c={url:`${r}//${o}${l}/`},u=Object.freeze({host:o,port:a,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!s._canInitEmulator){W(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),W(Rn(c,s.config.emulator)&&Rn(u,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=c,s.emulatorConfig=u,s.settings.appVerificationDisabledForTesting=!0,ty()}function pd(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function ey(t){const e=pd(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(s);if(i){const r=i[1];return{host:r,port:gc(s.substr(r.length+1))}}else{const[r,o]=s.split(":");return{host:r,port:gc(o)}}}function gc(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function ty(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ua{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return kt("not implemented")}_getIdTokenResponse(e){return kt("not implemented")}_linkToIdToken(e,n){return kt("not implemented")}_getReauthenticationResolver(e){return kt("not implemented")}}async function ny(t,e){return dn(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sy(t,e){return Fr(t,"POST","/v1/accounts:signInWithPassword",Dn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function iy(t,e){return Fr(t,"POST","/v1/accounts:signInWithEmailLink",Dn(t,e))}async function ry(t,e){return Fr(t,"POST","/v1/accounts:signInWithEmailLink",Dn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ti extends Ua{constructor(e,n,s,i=null){super("password",s),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new ti(e,n,"password")}static _fromEmailAndCode(e,n,s=null){return new ti(e,n,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return _c(e,n,"signInWithPassword",sy);case"emailLink":return iy(e,{email:this._email,oobCode:this._password});default:lt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const s={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return _c(e,s,"signUpPassword",ny);case"emailLink":return ry(e,{idToken:n,email:this._email,oobCode:this._password});default:lt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ts(t,e){return Fr(t,"POST","/v1/accounts:signInWithIdp",Dn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oy="http://localhost";class Pn extends Ua{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Pn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):lt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:i}=n,r=xa(n,["providerId","signInMethod"]);if(!s||!i)return null;const o=new Pn(s,i);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return ts(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,ts(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,ts(e,n)}buildRequest(){const e={requestUri:oy,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=ps(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ay(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function ly(t){const e=ks(Ns(t)).link,n=e?ks(Ns(e)).deep_link_id:null,s=ks(Ns(t)).deep_link_id;return(s?ks(Ns(s)).link:null)||s||n||e||t}class Ha{constructor(e){var n,s,i,r,o,a;const l=ks(Ns(e)),c=(n=l.apiKey)!==null&&n!==void 0?n:null,u=(s=l.oobCode)!==null&&s!==void 0?s:null,h=ay((i=l.mode)!==null&&i!==void 0?i:null);W(c&&u&&h,"argument-error"),this.apiKey=c,this.operation=h,this.code=u,this.continueUrl=(r=l.continueUrl)!==null&&r!==void 0?r:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=ly(e);try{return new Ha(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ms{constructor(){this.providerId=ms.PROVIDER_ID}static credential(e,n){return ti._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const s=Ha.parseLink(n);return W(s,"argument-error"),ti._fromEmailAndCode(e,s.code,s.tenantId)}}ms.PROVIDER_ID="password";ms.EMAIL_PASSWORD_SIGN_IN_METHOD="password";ms.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _d{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yi extends _d{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zt extends yi{constructor(){super("facebook.com")}static credential(e){return Pn._fromParams({providerId:zt.PROVIDER_ID,signInMethod:zt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return zt.credentialFromTaggedObject(e)}static credentialFromError(e){return zt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return zt.credential(e.oauthAccessToken)}catch{return null}}}zt.FACEBOOK_SIGN_IN_METHOD="facebook.com";zt.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yt extends yi{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Pn._fromParams({providerId:Yt.PROVIDER_ID,signInMethod:Yt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Yt.credentialFromTaggedObject(e)}static credentialFromError(e){return Yt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return Yt.credential(n,s)}catch{return null}}}Yt.GOOGLE_SIGN_IN_METHOD="google.com";Yt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qt extends yi{constructor(){super("github.com")}static credential(e){return Pn._fromParams({providerId:Qt.PROVIDER_ID,signInMethod:Qt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Qt.credentialFromTaggedObject(e)}static credentialFromError(e){return Qt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Qt.credential(e.oauthAccessToken)}catch{return null}}}Qt.GITHUB_SIGN_IN_METHOD="github.com";Qt.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jt extends yi{constructor(){super("twitter.com")}static credential(e,n){return Pn._fromParams({providerId:Jt.PROVIDER_ID,signInMethod:Jt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Jt.credentialFromTaggedObject(e)}static credentialFromError(e){return Jt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return Jt.credential(n,s)}catch{return null}}}Jt.TWITTER_SIGN_IN_METHOD="twitter.com";Jt.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class as{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,i=!1){const r=await Nt._fromIdTokenResponse(e,s,i),o=mc(s);return new as({user:r,providerId:o,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const i=mc(s);return new as({user:e,providerId:i,_tokenResponse:s,operationType:n})}}function mc(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ar extends hn{constructor(e,n,s,i){var r;super(n.code,n.message),this.operationType=s,this.user=i,Object.setPrototypeOf(this,ar.prototype),this.customData={appName:e.name,tenantId:(r=e.tenantId)!==null&&r!==void 0?r:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,i){return new ar(e,n,s,i)}}function gd(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?ar._fromErrorAndOperation(t,r,e,s):r})}async function cy(t,e,n=!1){const s=await ei(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return as._forOperation(t,"link",s)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uy(t,e,n=!1){const{auth:s}=t;if(tt(s.app))return Promise.reject(nn(s));const i="reauthenticate";try{const r=await ei(t,gd(s,i,e,t),n);W(r.idToken,s,"internal-error");const o=La(r.idToken);W(o,s,"internal-error");const{sub:a}=o;return W(t.uid===a,s,"user-mismatch"),as._forOperation(t,i,r)}catch(r){throw(r==null?void 0:r.code)==="auth/user-not-found"&&lt(s,"user-mismatch"),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function md(t,e,n=!1){if(tt(t.app))return Promise.reject(nn(t));const s="signIn",i=await gd(t,s,e),r=await as._fromIdTokenResponse(t,s,i);return n||await t._updateCurrentUser(r.user),r}async function hy(t,e){return md(gs(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dy(t){const e=gs(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}function vd(t,e,n){return tt(t.app)?Promise.reject(nn(t)):hy(qe(t),ms.credential(e,n)).catch(async s=>{throw s.code==="auth/password-does-not-meet-requirements"&&dy(t),s})}function fy(t,e,n,s){return qe(t).onIdTokenChanged(e,n,s)}function py(t,e,n){return qe(t).beforeAuthStateChanged(e,n)}function _y(t){return qe(t).signOut()}const lr="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yd{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(lr,"1"),this.storage.removeItem(lr),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gy=1e3,my=10;class Ed extends yd{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=ud(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),i=this.localCache[n];s!==i&&e(n,i,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const s=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},r=this.storage.getItem(s);Fv()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,my):i()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},gy)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Ed.type="LOCAL";const vy=Ed;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wd extends yd{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}wd.type="SESSION";const Id=wd;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yy(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hr{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const s=new Hr(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:i,data:r}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:i});const a=Array.from(o).map(async c=>c(n.origin,r)),l=await yy(a);n.ports[0].postMessage({status:"done",eventId:s,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Hr.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wa(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ey{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let r,o;return new Promise((a,l)=>{const c=Wa("",20);i.port1.start();const u=setTimeout(()=>{l(new Error("unsupported_event"))},s);o={messageChannel:i,onMessage(h){const d=h;if(d.data.eventId===c)switch(d.data.status){case"ack":clearTimeout(u),r=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),a(d.data.response);break;default:clearTimeout(u),clearTimeout(r),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Et(){return window}function wy(t){Et().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bd(){return typeof Et().WorkerGlobalScope<"u"&&typeof Et().importScripts=="function"}async function Iy(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function by(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function Cy(){return bd()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cd="firebaseLocalStorageDb",Ty=1,cr="firebaseLocalStorage",Td="fbase_key";class Ei{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Wr(t,e){return t.transaction([cr],e?"readwrite":"readonly").objectStore(cr)}function Sy(){const t=indexedDB.deleteDatabase(Cd);return new Ei(t).toPromise()}function qo(){const t=indexedDB.open(Cd,Ty);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(cr,{keyPath:Td})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(cr)?e(s):(s.close(),await Sy(),e(await qo()))})})}async function vc(t,e,n){const s=Wr(t,!0).put({[Td]:e,value:n});return new Ei(s).toPromise()}async function Ry(t,e){const n=Wr(t,!1).get(e),s=await new Ei(n).toPromise();return s===void 0?null:s.value}function yc(t,e){const n=Wr(t,!0).delete(e);return new Ei(n).toPromise()}const Ay=800,Py=3;class Sd{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await qo(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>Py)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return bd()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Hr._getInstance(Cy()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await Iy(),!this.activeServiceWorker)return;this.sender=new Ey(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((n=s[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||by()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await qo();return await vc(e,lr,"1"),await yc(e,lr),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>vc(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>Ry(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>yc(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const r=Wr(i,!1).getAll();return new Ei(r).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;if(e.length!==0)for(const{fbase_key:i,value:r}of e)s.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(r)&&(this.notifyListeners(i,r),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!s.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Ay)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Sd.type="LOCAL";const ky=Sd;new vi(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ny(t,e){return e?Ot(e):(W(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Va extends Ua{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ts(e,this._buildIdpRequest())}_linkToIdToken(e,n){return ts(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return ts(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Oy(t){return md(t.auth,new Va(t),t.bypassAuthState)}function xy(t){const{auth:e,user:n}=t;return W(n,e,"internal-error"),uy(n,new Va(t),t.bypassAuthState)}async function Dy(t){const{auth:e,user:n}=t;return W(n,e,"internal-error"),cy(n,new Va(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rd{constructor(e,n,s,i,r=!1){this.auth=e,this.resolver=s,this.user=i,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:i,tenantId:r,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:s,tenantId:r||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Oy;case"linkViaPopup":case"linkViaRedirect":return Dy;case"reauthViaPopup":case"reauthViaRedirect":return xy;default:lt(this.auth,"internal-error")}}resolve(e){Lt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Lt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const My=new vi(2e3,1e4);class Bn extends Rd{constructor(e,n,s,i,r){super(e,n,i,r),this.provider=s,this.authWindow=null,this.pollId=null,Bn.currentPopupAction&&Bn.currentPopupAction.cancel(),Bn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return W(e,this.auth,"internal-error"),e}async onExecution(){Lt(this.filter.length===1,"Popup operations only handle one event");const e=Wa();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(yt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(yt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Bn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(yt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,My.get())};e()}}Bn.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ly="pendingRedirect",Bi=new Map;class Fy extends Rd{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=Bi.get(this.auth._key());if(!e){try{const s=await Uy(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}Bi.set(this.auth._key(),e)}return this.bypassAuthState||Bi.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Uy(t,e){const n=Vy(e),s=Wy(t);if(!await s._isAvailable())return!1;const i=await s._get(n)==="true";return await s._remove(n),i}function Hy(t,e){Bi.set(t._key(),e)}function Wy(t){return Ot(t._redirectPersistence)}function Vy(t){return $i(Ly,t.config.apiKey,t.name)}async function $y(t,e,n=!1){if(tt(t.app))return Promise.reject(nn(t));const s=gs(t),i=Ny(s,e),o=await new Fy(s,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const By=10*60*1e3;class jy{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Ky(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!Ad(e)){const i=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(yt(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=By&&this.cachedEventUids.clear(),this.cachedEventUids.has(Ec(e))}saveEventToCache(e){this.cachedEventUids.add(Ec(e)),this.lastProcessedEventTime=Date.now()}}function Ec(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Ad({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Ky(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Ad(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Gy(t,e={}){return dn(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qy=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,zy=/^https?/;async function Yy(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Gy(t);for(const n of e)try{if(Qy(n))return}catch{}lt(t,"unauthorized-domain")}function Qy(t){const e=Ko(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===s}if(!zy.test(n))return!1;if(qy.test(t))return s===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(s)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jy=new vi(3e4,6e4);function wc(){const t=Et().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function Xy(t){return new Promise((e,n)=>{var s,i,r;function o(){wc(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{wc(),n(yt(t,"network-request-failed"))},timeout:Jy.get()})}if(!((i=(s=Et().gapi)===null||s===void 0?void 0:s.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((r=Et().gapi)===null||r===void 0)&&r.load)o();else{const a=Gv("iframefcb");return Et()[a]=()=>{gapi.load?o():n(yt(t,"network-request-failed"))},dd(`${Kv()}?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw ji=null,e})}let ji=null;function Zy(t){return ji=ji||Xy(t),ji}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eE=new vi(5e3,15e3),tE="__/auth/iframe",nE="emulator/auth/iframe",sE={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},iE=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function rE(t){const e=t.config;W(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Ma(e,nE):`https://${t.config.authDomain}/${tE}`,s={apiKey:e.apiKey,appName:t.name,v:_s},i=iE.get(t.config.apiHost);i&&(s.eid=i);const r=t._getFrameworks();return r.length&&(s.fw=r.join(",")),`${n}?${ps(s).slice(1)}`}async function oE(t){const e=await Zy(t),n=Et().gapi;return W(n,t,"internal-error"),e.open({where:document.body,url:rE(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:sE,dontclear:!0},s=>new Promise(async(i,r)=>{await s.restyle({setHideOnLeave:!1});const o=yt(t,"network-request-failed"),a=Et().setTimeout(()=>{r(o)},eE.get());function l(){Et().clearTimeout(a),i(s)}s.ping(l).then(l,()=>{r(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aE={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},lE=500,cE=600,uE="_blank",hE="http://localhost";class Ic{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function dE(t,e,n,s=lE,i=cE){const r=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const l=Object.assign(Object.assign({},aE),{width:s.toString(),height:i.toString(),top:r,left:o}),c=De().toLowerCase();n&&(a=rd(c)?uE:n),sd(c)&&(e=e||hE,l.scrollbars="yes");const u=Object.entries(l).reduce((d,[_,m])=>`${d}${_}=${m},`,"");if(Lv(c)&&a!=="_self")return fE(e||"",a),new Ic(null);const h=window.open(e||"",a,u);W(h,t,"popup-blocked");try{h.focus()}catch{}return new Ic(h)}function fE(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pE="__/auth/handler",_E="emulator/auth/handler",gE=encodeURIComponent("fac");async function bc(t,e,n,s,i,r){W(t.config.authDomain,t,"auth-domain-config-required"),W(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:_s,eventId:i};if(e instanceof _d){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Ho(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,h]of Object.entries({}))o[u]=h}if(e instanceof yi){const u=e.getScopes().filter(h=>h!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const l=await t._getAppCheckToken(),c=l?`#${gE}=${encodeURIComponent(l)}`:"";return`${mE(t)}?${ps(a).slice(1)}${c}`}function mE({config:t}){return t.emulator?Ma(t,_E):`https://${t.authDomain}/${pE}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ho="webStorageSupport";class vE{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Id,this._completeRedirectFn=$y,this._overrideRedirectResult=Hy}async _openPopup(e,n,s,i){var r;Lt((r=this.eventManagers[e._key()])===null||r===void 0?void 0:r.manager,"_initialize() not called before _openPopup()");const o=await bc(e,n,s,Ko(),i);return dE(e,o,Wa())}async _openRedirect(e,n,s,i){await this._originValidation(e);const r=await bc(e,n,s,Ko(),i);return wy(r),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:r}=this.eventManagers[n];return i?Promise.resolve(i):(Lt(r,"If manager is not set, promise should be"),r)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await oE(e),s=new jy(e);return n.register("authEvent",i=>(W(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:s.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(ho,{type:ho},i=>{var r;const o=(r=i==null?void 0:i[0])===null||r===void 0?void 0:r[ho];o!==void 0&&n(!!o),lt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Yy(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return ud()||id()||Fa()}}const yE=vE;var Cc="@firebase/auth",Tc="1.9.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EE{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){W(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wE(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function IE(t){os(new An("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),r=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=s.options;W(o&&!o.includes(":"),"invalid-api-key",{appName:s.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:hd(t)},c=new $v(s,i,r,l);return Xv(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),os(new An("auth-internal",e=>{const n=gs(e.getProvider("auth").getImmediate());return(s=>new EE(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),tn(Cc,Tc,wE(t)),tn(Cc,Tc,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bE=5*60,CE=Uh("authIdTokenMaxAge")||bE;let Sc=null;const TE=t=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>CE)return;const i=n==null?void 0:n.token;Sc!==i&&(Sc=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function SE(t=Kh()){const e=Oa(t,"auth");if(e.isInitialized())return e.getImmediate();const n=Jv(t,{popupRedirectResolver:yE,persistence:[ky,vy,Id]}),s=Uh("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const r=new URL(s,location.origin);if(location.origin===r.origin){const o=TE(r.toString());py(n,o,()=>o(n.currentUser)),fy(n,a=>o(a))}}const i=Lh("auth");return i&&Zv(n,`http://${i}`),n}function RE(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}Bv({loadJS(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=i=>{const r=yt("internal-error");r.customData=i,n(r)},s.type="text/javascript",s.charset="UTF-8",RE().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});IE("Browser");var Rc={};const Ac="@firebase/database",Pc="1.0.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Pd="";function AE(t){Pd=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PE{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),ve(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:Xs(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kE{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return Ht(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kd=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new PE(e)}}catch{}return new kE},wn=kd("localStorage"),NE=kd("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ns=new ka("@firebase/database"),OE=function(){let t=1;return function(){return t++}}(),Nd=function(t){const e=om(t),n=new nm;n.update(e);const s=n.digest();return Sa.encodeByteArray(s)},wi=function(...t){let e="";for(let n=0;n<t.length;n++){const s=t[n];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=wi.apply(null,s):typeof s=="object"?e+=ve(s):e+=s,e+=" "}return e};let Ws=null,kc=!0;const xE=function(t,e){C(!0,"Can't turn on custom loggers persistently."),ns.logLevel=se.VERBOSE,Ws=ns.log.bind(ns)},Re=function(...t){if(kc===!0&&(kc=!1,Ws===null&&NE.get("logging_enabled")===!0&&xE()),Ws){const e=wi.apply(null,t);Ws(e)}},Ii=function(t){return function(...e){Re(t,...e)}},zo=function(...t){const e="FIREBASE INTERNAL ERROR: "+wi(...t);ns.error(e)},Ft=function(...t){const e=`FIREBASE FATAL ERROR: ${wi(...t)}`;throw ns.error(e),new Error(e)},Ge=function(...t){const e="FIREBASE WARNING: "+wi(...t);ns.warn(e)},DE=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Ge("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Od=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},ME=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},ls="[MIN_NAME]",kn="[MAX_NAME]",vs=function(t,e){if(t===e)return 0;if(t===ls||e===kn)return-1;if(e===ls||t===kn)return 1;{const n=Nc(t),s=Nc(e);return n!==null?s!==null?n-s===0?t.length-e.length:n-s:-1:s!==null?1:t<e?-1:1}},LE=function(t,e){return t===e?0:t<e?-1:1},Cs=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+ve(e))},$a=function(t){if(typeof t!="object"||t===null)return ve(t);const e=[];for(const s in t)e.push(s);e.sort();let n="{";for(let s=0;s<e.length;s++)s!==0&&(n+=","),n+=ve(e[s]),n+=":",n+=$a(t[e[s]]);return n+="}",n},xd=function(t,e){const n=t.length;if(n<=e)return[t];const s=[];for(let i=0;i<n;i+=e)i+e>n?s.push(t.substring(i,n)):s.push(t.substring(i,i+e));return s};function He(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const Dd=function(t){C(!Od(t),"Invalid JSON number");const e=11,n=52,s=(1<<e-1)-1;let i,r,o,a,l;t===0?(r=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-s)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),s),r=a+s,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(r=0,o=Math.round(t/Math.pow(2,1-s-n))));const c=[];for(l=n;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(r%2?1:0),r=Math.floor(r/2);c.push(i?1:0),c.reverse();const u=c.join("");let h="";for(l=0;l<64;l+=8){let d=parseInt(u.substr(l,8),2).toString(16);d.length===1&&(d="0"+d),h=h+d}return h.toLowerCase()},FE=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},UE=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function HE(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const s=new Error(t+" at "+e._path.toString()+": "+n);return s.code=t.toUpperCase(),s}const WE=new RegExp("^-?(0*)\\d{1,10}$"),VE=-2147483648,$E=2147483647,Nc=function(t){if(WE.test(t)){const e=Number(t);if(e>=VE&&e<=$E)return e}return null},bi=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw Ge("Exception was thrown by user callback.",n),e},Math.floor(0))}},BE=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Vs=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jE{constructor(e,n){this.appCheckProvider=n,this.appName=e.name,tt(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(s=>this.appCheck=s)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((n,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){Ge(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KE{constructor(e,n,s){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Re("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Ge(e)}}class Ki{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Ki.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ba="5",Md="v",Ld="s",Fd="r",Ud="f",Hd=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Wd="ls",Vd="p",Yo="ac",$d="websocket",Bd="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jd{constructor(e,n,s,i,r=!1,o="",a=!1,l=!1,c=null){this.secure=n,this.namespace=s,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this.emulatorOptions=c,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=wn.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&wn.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function GE(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function Kd(t,e,n){C(typeof e=="string","typeof type must == string"),C(typeof n=="object","typeof params must == object");let s;if(e===$d)s=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===Bd)s=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);GE(t)&&(n.ns=t.namespace);const i=[];return He(n,(r,o)=>{i.push(r+"="+o)}),s+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qE{constructor(){this.counters_={}}incrementCounter(e,n=1){Ht(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return Fg(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fo={},po={};function ja(t){const e=t.toString();return fo[e]||(fo[e]=new qE),fo[e]}function zE(t,e){const n=t.toString();return po[n]||(po[n]=e()),po[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YE{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<s.length;++i)s[i]&&bi(()=>{this.onMessage_(s[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oc="start",QE="close",JE="pLPCommand",XE="pRTLPCB",Gd="id",qd="pw",zd="ser",ZE="cb",ew="seg",tw="ts",nw="d",sw="dframe",Yd=1870,Qd=30,iw=Yd-Qd,rw=25e3,ow=3e4;class jn{constructor(e,n,s,i,r,o,a){this.connId=e,this.repoInfo=n,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Ii(e),this.stats_=ja(n),this.urlFn=l=>(this.appCheckToken&&(l[Yo]=this.appCheckToken),Kd(n,Bd,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new YE(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(ow)),ME(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Ka((...r)=>{const[o,a,l,c,u]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Oc)this.id=a,this.password=l;else if(o===QE)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,a]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const s={};s[Oc]="t",s[zd]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[ZE]=this.scriptTagHolder.uniqueCallbackIdentifier),s[Md]=Ba,this.transportSessionId&&(s[Ld]=this.transportSessionId),this.lastSessionId&&(s[Wd]=this.lastSessionId),this.applicationId&&(s[Vd]=this.applicationId),this.appCheckToken&&(s[Yo]=this.appCheckToken),typeof location<"u"&&location.hostname&&Hd.test(location.hostname)&&(s[Fd]=Ud);const i=this.urlFn(s);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){jn.forceAllow_=!0}static forceDisallow(){jn.forceDisallow_=!0}static isAvailable(){return jn.forceAllow_?!0:!jn.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!FE()&&!UE()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=ve(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=Dh(n),i=xd(s,iw);for(let r=0;r<i.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[r]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const s={};s[sw]="t",s[Gd]=e,s[qd]=n,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=ve(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Ka{constructor(e,n,s,i){this.onDisconnect=s,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=OE(),window[JE+this.uniqueCallbackIdentifier]=e,window[XE+this.uniqueCallbackIdentifier]=n,this.myIFrame=Ka.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){Re("frame writing exception"),a.stack&&Re(a.stack),Re(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Re("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Gd]=this.myID,e[qd]=this.myPW,e[zd]=this.currentSerial;let n=this.urlFn(e),s="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Qd+s.length<=Yd;){const o=this.pendingSegs.shift();s=s+"&"+ew+i+"="+o.seg+"&"+tw+i+"="+o.ts+"&"+nw+i+"="+o.d,i++}return n=n+s,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,s){this.pendingSegs.push({seg:e,ts:n,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const s=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(s,Math.floor(rw)),r=()=>{clearTimeout(i),s()};this.addTag(e,r)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const i=s.readyState;(!i||i==="loaded"||i==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),n())},s.onerror=()=>{Re("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aw=16384,lw=45e3;let ur=null;typeof MozWebSocket<"u"?ur=MozWebSocket:typeof WebSocket<"u"&&(ur=WebSocket);class nt{constructor(e,n,s,i,r,o,a){this.connId=e,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Ii(this.connId),this.stats_=ja(n),this.connURL=nt.connectionURL_(n,o,a,i,s),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,s,i,r){const o={};return o[Md]=Ba,typeof location<"u"&&location.hostname&&Hd.test(location.hostname)&&(o[Fd]=Ud),n&&(o[Ld]=n),s&&(o[Wd]=s),i&&(o[Yo]=i),r&&(o[Vd]=r),Kd(e,$d,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,wn.set("previous_websocket_failure",!0);try{let s;zg(),this.mySock=new ur(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){nt.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(n);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&ur!==null&&!nt.forceDisallow_}static previouslyFailed(){return wn.isInMemoryStorage||wn.get("previous_websocket_failure")===!0}markConnectionHealthy(){wn.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const s=Xs(n);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(C(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const s=this.extractFrameCount_(n);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const n=ve(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=xd(n,aw);s.length>1&&this.sendString_(String(s.length));for(let i=0;i<s.length;i++)this.sendString_(s[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(lw))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}nt.responsesRequiredToBeHealthy=2;nt.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ni{static get ALL_TRANSPORTS(){return[jn,nt]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const n=nt&&nt.isAvailable();let s=n&&!nt.previouslyFailed();if(e.webSocketOnly&&(n||Ge("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[nt];else{const i=this.transports_=[];for(const r of ni.ALL_TRANSPORTS)r&&r.isAvailable()&&i.push(r);ni.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}ni.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cw=6e4,uw=5e3,hw=10*1024,dw=100*1024,_o="t",xc="d",fw="s",Dc="r",pw="e",Mc="o",Lc="a",Fc="n",Uc="p",_w="h";class gw{constructor(e,n,s,i,r,o,a,l,c,u){this.id=e,this.repoInfo_=n,this.applicationId_=s,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Ii("c:"+this.id+":"),this.transportManager_=new ni(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,s)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=Vs(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>dw?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>hw?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(_o in e){const n=e[_o];n===Lc?this.upgradeIfSecondaryHealthy_():n===Dc?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Mc&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Cs("t",e),s=Cs("d",e);if(n==="c")this.onSecondaryControl_(s);else if(n==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Uc,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Lc,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Fc,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Cs("t",e),s=Cs("d",e);n==="c"?this.onControl_(s):n==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Cs(_o,e);if(xc in e){const s=e[xc];if(n===_w){const i=Object.assign({},s);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===Fc){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===fw?this.onConnectionShutdown_(s):n===Dc?this.onReset_(s):n===pw?zo("Server Error: "+s):n===Mc?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):zo("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,s=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Ba!==s&&Ge("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,s),Vs(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(cw))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Vs(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(uw))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Uc,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(wn.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jd{put(e,n,s,i){}merge(e,n,s,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,s){}onDisconnectMerge(e,n,s){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xd{constructor(e){this.allowedEvents_=e,this.listeners_={},C(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let i=0;i<s.length;i++)s[i].callback.apply(s[i].context,n)}}on(e,n,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:s});const i=this.getInitialEvent(e);i&&n.apply(s,i)}off(e,n,s){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let r=0;r<i.length;r++)if(i[r].callback===n&&(!s||s===i[r].context)){i.splice(r,1);return}}validateEventType_(e){C(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hr extends Xd{static getInstance(){return new hr}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Pa()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return C(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hc=32,Wc=768;class oe{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let s=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[s]=this.pieces_[i],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function Y(){return new oe("")}function q(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function on(t){return t.pieces_.length-t.pieceNum_}function ue(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new oe(t.pieces_,e)}function Zd(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function mw(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function ef(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function tf(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new oe(e,0)}function ye(t,e){const n=[];for(let s=t.pieceNum_;s<t.pieces_.length;s++)n.push(t.pieces_[s]);if(e instanceof oe)for(let s=e.pieceNum_;s<e.pieces_.length;s++)n.push(e.pieces_[s]);else{const s=e.split("/");for(let i=0;i<s.length;i++)s[i].length>0&&n.push(s[i])}return new oe(n,0)}function G(t){return t.pieceNum_>=t.pieces_.length}function xe(t,e){const n=q(t),s=q(e);if(n===null)return e;if(n===s)return xe(ue(t),ue(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function nf(t,e){if(on(t)!==on(e))return!1;for(let n=t.pieceNum_,s=e.pieceNum_;n<=t.pieces_.length;n++,s++)if(t.pieces_[n]!==e.pieces_[s])return!1;return!0}function st(t,e){let n=t.pieceNum_,s=e.pieceNum_;if(on(t)>on(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[s])return!1;++n,++s}return!0}class vw{constructor(e,n){this.errorPrefix_=n,this.parts_=ef(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=Lr(this.parts_[s]);sf(this)}}function yw(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Lr(e),sf(t)}function Ew(t){const e=t.parts_.pop();t.byteLength_-=Lr(e),t.parts_.length>0&&(t.byteLength_-=1)}function sf(t){if(t.byteLength_>Wc)throw new Error(t.errorPrefix_+"has a key path longer than "+Wc+" bytes ("+t.byteLength_+").");if(t.parts_.length>Hc)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Hc+") or object contains a cycle "+yn(t))}function yn(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ga extends Xd{static getInstance(){return new Ga}constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}getInitialEvent(e){return C(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ts=1e3,ww=60*5*1e3,Vc=30*1e3,Iw=1.3,bw=3e4,Cw="server_kill",$c=3;class Dt extends Jd{constructor(e,n,s,i,r,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=s,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=Dt.nextPersistentConnectionId_++,this.log_=Ii("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Ts,this.maxReconnectDelay_=ww,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Ga.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&hr.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,s){const i=++this.requestNumber_,r={r:i,a:e,b:n};this.log_(ve(r)),C(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),s&&(this.requestCBHash_[i]=s)}get(e){this.initConnection_();const n=new Aa,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),n.promise}listen(e,n,s,i){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),C(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),C(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:e,tag:s};this.listens.get(o).set(r,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(s)})}sendListen_(e){const n=e.query,s=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+s+" for "+i);const r={p:s},o="q";e.tag&&(r.q=n._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,a=>{const l=a.d,c=a.s;Dt.warnOnListenWarnings_(l,n),(this.listens.get(s)&&this.listens.get(s).get(i))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(s,i),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&Ht(e,"w")){const s=rs(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',r=n._path.toString();Ge(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||tm(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Vc)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=em(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(n,s,i=>{const r=i.s,o=i.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,s=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,s)})}unlisten(e,n){const s=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+i),C(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,i)&&this.connected_&&this.sendUnlisten_(s,i,e._queryObject,n)}sendUnlisten_(e,n,s,i){this.log_("Unlisten on "+e+" for "+n);const r={p:e},o="n";i&&(r.q=s,r.t=i),this.sendRequest(o,r)}onDisconnectPut(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:s})}onDisconnectMerge(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:s})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,s,i){const r={p:n,d:s};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,s,i){this.putInternal("p",e,n,s,i)}merge(e,n,s,i){this.putInternal("m",e,n,s,i)}putInternal(e,n,s,i,r){this.initConnection_();const o={p:n,d:s};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,s,r=>{this.log_(n+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(r.s,r.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,s=>{if(s.s!=="ok"){const r=s.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+ve(e));const n=e.r,s=this.requestCBHash_[n];s&&(delete this.requestCBHash_[n],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):zo("Unrecognized action received from server: "+ve(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){C(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Ts,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Ts,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>bw&&(this.reconnectDelay_=Ts),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*Iw)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+Dt.nextConnectionId_++,r=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,s())},c=function(h){C(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(h)};this.realtime_={close:l,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[h,d]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?Re("getToken() completed but was canceled"):(Re("getToken() completed. Creating connection."),this.authToken_=h&&h.accessToken,this.appCheckToken_=d&&d.token,a=new gw(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,s,_=>{Ge(_+" ("+this.repoInfo_.toString()+")"),this.interrupt(Cw)},r))}catch(h){this.log_("Failed to get token: "+h),o||(this.repoInfo_.nodeAdmin&&Ge(h),l())}}}interrupt(e){Re("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Re("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Ho(this.interruptReasons_)&&(this.reconnectDelay_=Ts,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let s;n?s=n.map(r=>$a(r)).join("$"):s="default";const i=this.removeListen_(e,s);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const s=new oe(e).toString();let i;if(this.listens.has(s)){const r=this.listens.get(s);i=r.get(n),r.delete(n),r.size===0&&this.listens.delete(s)}else i=void 0;return i}onAuthRevoked_(e,n){Re("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=$c&&(this.reconnectDelay_=Vc,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Re("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=$c&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+Pd.replace(/\./g,"-")]=1,Pa()?e["framework.cordova"]=1:Hh()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=hr.getInstance().currentlyOnline();return Ho(this.interruptReasons_)&&e}}Dt.nextPersistentConnectionId_=0;Dt.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new K(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vr{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const s=new K(ls,e),i=new K(ls,n);return this.compare(s,i)!==0}minPost(){return K.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let xi;class rf extends Vr{static get __EMPTY_NODE(){return xi}static set __EMPTY_NODE(e){xi=e}compare(e,n){return vs(e.name,n.name)}isDefinedOn(e){throw fs("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return K.MIN}maxPost(){return new K(kn,xi)}makePost(e,n){return C(typeof e=="string","KeyIndex indexValue must always be a string."),new K(e,xi)}toString(){return".key"}}const ss=new rf;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Di{constructor(e,n,s,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?s(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Ie{constructor(e,n,s,i,r){this.key=e,this.value=n,this.color=s??Ie.RED,this.left=i??Ue.EMPTY_NODE,this.right=r??Ue.EMPTY_NODE}copy(e,n,s,i,r){return new Ie(e??this.key,n??this.value,s??this.color,i??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let i=this;const r=s(e,i.key);return r<0?i=i.copy(null,null,null,i.left.insert(e,n,s),null):r===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,s)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return Ue.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let s,i;if(s=this,n(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),n(e,s.key)===0){if(s.right.isEmpty())return Ue.EMPTY_NODE;i=s.right.min_(),s=s.copy(i.key,i.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Ie.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Ie.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Ie.RED=!0;Ie.BLACK=!1;class Tw{copy(e,n,s,i,r){return this}insert(e,n,s){return new Ie(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Ue{constructor(e,n=Ue.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Ue(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,Ie.BLACK,null,null))}remove(e){return new Ue(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Ie.BLACK,null,null))}get(e){let n,s=this.root_;for(;!s.isEmpty();){if(n=this.comparator_(e,s.key),n===0)return s.value;n<0?s=s.left:n>0&&(s=s.right)}return null}getPredecessorKey(e){let n,s=this.root_,i=null;for(;!s.isEmpty();)if(n=this.comparator_(e,s.key),n===0){if(s.left.isEmpty())return i?i.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else n<0?s=s.left:n>0&&(i=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Di(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Di(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Di(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Di(this.root_,null,this.comparator_,!0,e)}}Ue.EMPTY_NODE=new Tw;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sw(t,e){return vs(t.name,e.name)}function qa(t,e){return vs(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Qo;function Rw(t){Qo=t}const of=function(t){return typeof t=="number"?"number:"+Dd(t):"string:"+t},af=function(t){if(t.isLeafNode()){const e=t.val();C(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Ht(e,".sv"),"Priority must be a string or number.")}else C(t===Qo||t.isEmpty(),"priority of unexpected type.");C(t===Qo||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Bc;class we{static set __childrenNodeConstructor(e){Bc=e}static get __childrenNodeConstructor(){return Bc}constructor(e,n=we.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,C(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),af(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new we(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:we.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return G(e)?this:q(e)===".priority"?this.priorityNode_:we.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:we.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const s=q(e);return s===null?n:n.isEmpty()&&s!==".priority"?this:(C(s!==".priority"||on(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,we.__childrenNodeConstructor.EMPTY_NODE.updateChild(ue(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+of(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=Dd(this.value_):e+=this.value_,this.lazyHash_=Nd(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===we.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof we.__childrenNodeConstructor?-1:(C(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,s=typeof this.value_,i=we.VALUE_TYPE_ORDER.indexOf(n),r=we.VALUE_TYPE_ORDER.indexOf(s);return C(i>=0,"Unknown leaf type: "+n),C(r>=0,"Unknown leaf type: "+s),i===r?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}we.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let lf,cf;function Aw(t){lf=t}function Pw(t){cf=t}class kw extends Vr{compare(e,n){const s=e.node.getPriority(),i=n.node.getPriority(),r=s.compareTo(i);return r===0?vs(e.name,n.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return K.MIN}maxPost(){return new K(kn,new we("[PRIORITY-POST]",cf))}makePost(e,n){const s=lf(e);return new K(n,new we("[PRIORITY-POST]",s))}toString(){return".priority"}}const pe=new kw;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nw=Math.log(2);class Ow{constructor(e){const n=r=>parseInt(Math.log(r)/Nw,10),s=r=>parseInt(Array(r+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=s(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const dr=function(t,e,n,s){t.sort(e);const i=function(l,c){const u=c-l;let h,d;if(u===0)return null;if(u===1)return h=t[l],d=n?n(h):h,new Ie(d,h.node,Ie.BLACK,null,null);{const _=parseInt(u/2,10)+l,m=i(l,_),b=i(_+1,c);return h=t[_],d=n?n(h):h,new Ie(d,h.node,Ie.BLACK,m,b)}},r=function(l){let c=null,u=null,h=t.length;const d=function(m,b){const x=h-m,D=h;h-=m;const N=i(x+1,D),M=t[x],O=n?n(M):M;_(new Ie(O,M.node,b,null,N))},_=function(m){c?(c.left=m,c=m):(u=m,c=m)};for(let m=0;m<l.count;++m){const b=l.nextBitIsOne(),x=Math.pow(2,l.count-(m+1));b?d(x,Ie.BLACK):(d(x,Ie.BLACK),d(x,Ie.RED))}return u},o=new Ow(t.length),a=r(o);return new Ue(s||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let go;const Wn={};class xt{static get Default(){return C(Wn&&pe,"ChildrenNode.ts has not been loaded"),go=go||new xt({".priority":Wn},{".priority":pe}),go}constructor(e,n){this.indexes_=e,this.indexSet_=n}get(e){const n=rs(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Ue?n:null}hasIndex(e){return Ht(this.indexSet_,e.toString())}addIndex(e,n){C(e!==ss,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let i=!1;const r=n.getIterator(K.Wrap);let o=r.getNext();for(;o;)i=i||e.isDefinedOn(o.node),s.push(o),o=r.getNext();let a;i?a=dr(s,e.getCompare()):a=Wn;const l=e.toString(),c=Object.assign({},this.indexSet_);c[l]=e;const u=Object.assign({},this.indexes_);return u[l]=a,new xt(u,c)}addToIndexes(e,n){const s=sr(this.indexes_,(i,r)=>{const o=rs(this.indexSet_,r);if(C(o,"Missing index implementation for "+r),i===Wn)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(K.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),dr(a,o.getCompare())}else return Wn;else{const a=n.get(e.name);let l=i;return a&&(l=l.remove(new K(e.name,a))),l.insert(e,e.node)}});return new xt(s,this.indexSet_)}removeFromIndexes(e,n){const s=sr(this.indexes_,i=>{if(i===Wn)return i;{const r=n.get(e.name);return r?i.remove(new K(e.name,r)):i}});return new xt(s,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ss;class V{static get EMPTY_NODE(){return Ss||(Ss=new V(new Ue(qa),null,xt.Default))}constructor(e,n,s){this.children_=e,this.priorityNode_=n,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&af(this.priorityNode_),this.children_.isEmpty()&&C(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Ss}updatePriority(e){return this.children_.isEmpty()?this:new V(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Ss:n}}getChild(e){const n=q(e);return n===null?this:this.getImmediateChild(n).getChild(ue(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(C(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const s=new K(e,n);let i,r;n.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(s,this.children_)):(i=this.children_.insert(e,n),r=this.indexMap_.addToIndexes(s,this.children_));const o=i.isEmpty()?Ss:this.priorityNode_;return new V(i,o,r)}}updateChild(e,n){const s=q(e);if(s===null)return n;{C(q(e)!==".priority"||on(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(s).updateChild(ue(e),n);return this.updateImmediateChild(s,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let s=0,i=0,r=!0;if(this.forEachChild(pe,(o,a)=>{n[o]=a.val(e),s++,r&&V.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):r=!1}),!e&&r&&i<2*s){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+of(this.getPriority().val())+":"),this.forEachChild(pe,(n,s)=>{const i=s.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":Nd(e)}return this.lazyHash_}getPredecessorChildName(e,n,s){const i=this.resolveIndex_(s);if(i){const r=i.getPredecessorKey(new K(e,n));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new K(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new K(n,this.children_.get(n)):null}forEachChild(e,n){const s=this.resolveIndex_(e);return s?s.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,K.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)<0;)i.getNext(),r=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,K.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)>0;)i.getNext(),r=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Ci?-1:0}withIndex(e){if(e===ss||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new V(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===ss||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const s=this.getIterator(pe),i=n.getIterator(pe);let r=s.getNext(),o=i.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=s.getNext(),o=i.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===ss?null:this.indexMap_.get(e.toString())}}V.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class xw extends V{constructor(){super(new Ue(qa),V.EMPTY_NODE,xt.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return V.EMPTY_NODE}isEmpty(){return!1}}const Ci=new xw;Object.defineProperties(K,{MIN:{value:new K(ls,V.EMPTY_NODE)},MAX:{value:new K(kn,Ci)}});rf.__EMPTY_NODE=V.EMPTY_NODE;we.__childrenNodeConstructor=V;Rw(Ci);Pw(Ci);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dw=!0;function Ce(t,e=null){if(t===null)return V.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),C(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new we(n,Ce(e))}if(!(t instanceof Array)&&Dw){const n=[];let s=!1;if(He(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=Ce(a);l.isEmpty()||(s=s||!l.getPriority().isEmpty(),n.push(new K(o,l)))}}),n.length===0)return V.EMPTY_NODE;const r=dr(n,Sw,o=>o.name,qa);if(s){const o=dr(n,pe.getCompare());return new V(r,Ce(e),new xt({".priority":o},{".priority":pe}))}else return new V(r,Ce(e),xt.Default)}else{let n=V.EMPTY_NODE;return He(t,(s,i)=>{if(Ht(t,s)&&s.substring(0,1)!=="."){const r=Ce(i);(r.isLeafNode()||!r.isEmpty())&&(n=n.updateImmediateChild(s,r))}}),n.updatePriority(Ce(e))}}Aw(Ce);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mw extends Vr{constructor(e){super(),this.indexPath_=e,C(!G(e)&&q(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const s=this.extractChild(e.node),i=this.extractChild(n.node),r=s.compareTo(i);return r===0?vs(e.name,n.name):r}makePost(e,n){const s=Ce(e),i=V.EMPTY_NODE.updateChild(this.indexPath_,s);return new K(n,i)}maxPost(){const e=V.EMPTY_NODE.updateChild(this.indexPath_,Ci);return new K(kn,e)}toString(){return ef(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lw extends Vr{compare(e,n){const s=e.node.compareTo(n.node);return s===0?vs(e.name,n.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return K.MIN}maxPost(){return K.MAX}makePost(e,n){const s=Ce(e);return new K(n,s)}toString(){return".value"}}const Fw=new Lw;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uf(t){return{type:"value",snapshotNode:t}}function cs(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function si(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function ii(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function Uw(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class za{constructor(e){this.index_=e}updateChild(e,n,s,i,r,o){C(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(n);return a.getChild(i).equals(s.getChild(i))&&a.isEmpty()===s.isEmpty()||(o!=null&&(s.isEmpty()?e.hasChild(n)?o.trackChildChange(si(n,a)):C(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(cs(n,s)):o.trackChildChange(ii(n,s,a))),e.isLeafNode()&&s.isEmpty())?e:e.updateImmediateChild(n,s).withIndex(this.index_)}updateFullNode(e,n,s){return s!=null&&(e.isLeafNode()||e.forEachChild(pe,(i,r)=>{n.hasChild(i)||s.trackChildChange(si(i,r))}),n.isLeafNode()||n.forEachChild(pe,(i,r)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(r)||s.trackChildChange(ii(i,r,o))}else s.trackChildChange(cs(i,r))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?V.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ri{constructor(e){this.indexedFilter_=new za(e.getIndex()),this.index_=e.getIndex(),this.startPost_=ri.getStartPost_(e),this.endPost_=ri.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,s=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&s}updateChild(e,n,s,i,r,o){return this.matches(new K(n,s))||(s=V.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,s,i,r,o)}updateFullNode(e,n,s){n.isLeafNode()&&(n=V.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(V.EMPTY_NODE);const r=this;return n.forEachChild(pe,(o,a)=>{r.matches(new K(o,a))||(i=i.updateImmediateChild(o,V.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hw{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const s=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?s<=0:s<0},this.withinEndPost=n=>{const s=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?s<=0:s<0},this.rangedFilter_=new ri(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,s,i,r,o){return this.rangedFilter_.matches(new K(n,s))||(s=V.EMPTY_NODE),e.getImmediateChild(n).equals(s)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,s,i,r,o):this.fullLimitUpdateChild_(e,n,s,r,o)}updateFullNode(e,n,s){let i;if(n.isLeafNode()||n.isEmpty())i=V.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=V.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const a=r.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))i=i.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(V.EMPTY_NODE);let r;this.reverse_?r=i.getReverseIterator(this.index_):r=i.getIterator(this.index_);let o=0;for(;r.hasNext();){const a=r.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:i=i.updateImmediateChild(a.name,V.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,s,i,r){let o;if(this.reverse_){const h=this.index_.getCompare();o=(d,_)=>h(_,d)}else o=this.index_.getCompare();const a=e;C(a.numChildren()===this.limit_,"");const l=new K(n,s),c=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),u=this.rangedFilter_.matches(l);if(a.hasChild(n)){const h=a.getImmediateChild(n);let d=i.getChildAfterChild(this.index_,c,this.reverse_);for(;d!=null&&(d.name===n||a.hasChild(d.name));)d=i.getChildAfterChild(this.index_,d,this.reverse_);const _=d==null?1:o(d,l);if(u&&!s.isEmpty()&&_>=0)return r!=null&&r.trackChildChange(ii(n,s,h)),a.updateImmediateChild(n,s);{r!=null&&r.trackChildChange(si(n,h));const b=a.updateImmediateChild(n,V.EMPTY_NODE);return d!=null&&this.rangedFilter_.matches(d)?(r!=null&&r.trackChildChange(cs(d.name,d.node)),b.updateImmediateChild(d.name,d.node)):b}}else return s.isEmpty()?e:u&&o(c,l)>=0?(r!=null&&(r.trackChildChange(si(c.name,c.node)),r.trackChildChange(cs(n,s))),a.updateImmediateChild(n,s).updateImmediateChild(c.name,V.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ya{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=pe}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return C(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return C(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:ls}hasEnd(){return this.endSet_}getIndexEndValue(){return C(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return C(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:kn}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return C(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===pe}copy(){const e=new Ya;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function Ww(t){return t.loadsAllData()?new za(t.getIndex()):t.hasLimit()?new Hw(t):new ri(t)}function jc(t){const e={};if(t.isDefault())return e;let n;if(t.index_===pe?n="$priority":t.index_===Fw?n="$value":t.index_===ss?n="$key":(C(t.index_ instanceof Mw,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=ve(n),t.startSet_){const s=t.startAfterSet_?"startAfter":"startAt";e[s]=ve(t.indexStartValue_),t.startNameSet_&&(e[s]+=","+ve(t.indexStartName_))}if(t.endSet_){const s=t.endBeforeSet_?"endBefore":"endAt";e[s]=ve(t.indexEndValue_),t.endNameSet_&&(e[s]+=","+ve(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function Kc(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==pe&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fr extends Jd{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(C(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,n,s,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=s,this.appCheckTokenProvider_=i,this.log_=Ii("p:rest:"),this.listens_={}}listen(e,n,s,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=fr.getListenId_(e,s),a={};this.listens_[o]=a;const l=jc(e._queryParams);this.restRequest_(r+".json",l,(c,u)=>{let h=u;if(c===404&&(h=null,c=null),c===null&&this.onDataUpdate_(r,h,!1,s),rs(this.listens_,o)===a){let d;c?c===401?d="permission_denied":d="rest_error:"+c:d="ok",i(d,null)}})}unlisten(e,n){const s=fr.getListenId_(e,n);delete this.listens_[s]}get(e){const n=jc(e._queryParams),s=e._path.toString(),i=new Aa;return this.restRequest_(s+".json",n,(r,o)=>{let a=o;r===404&&(a=null,r=null),r===null?(this.onDataUpdate_(s,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},s){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,r])=>{i&&i.accessToken&&(n.auth=i.accessToken),r&&r.token&&(n.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+ps(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(s&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=Xs(a.responseText)}catch{Ge("Failed to parse JSON response for "+o+": "+a.responseText)}s(null,l)}else a.status!==401&&a.status!==404&&Ge("Got unsuccessful REST response for "+o+" Status: "+a.status),s(a.status);s=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vw{constructor(){this.rootNode_=V.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pr(){return{value:null,children:new Map}}function hf(t,e,n){if(G(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const s=q(e);t.children.has(s)||t.children.set(s,pr());const i=t.children.get(s);e=ue(e),hf(i,e,n)}}function Jo(t,e,n){t.value!==null?n(e,t.value):$w(t,(s,i)=>{const r=new oe(e.toString()+"/"+s);Jo(i,r,n)})}function $w(t,e){t.children.forEach((n,s)=>{e(s,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bw{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&He(this.last_,(s,i)=>{n[s]=n[s]-i}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gc=10*1e3,jw=30*1e3,Kw=5*60*1e3;class Gw{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new Bw(e);const s=Gc+(jw-Gc)*Math.random();Vs(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),n={};let s=!1;He(e,(i,r)=>{r>0&&Ht(this.statsToReport_,i)&&(n[i]=r,s=!0)}),s&&this.server_.reportStats(n),Vs(this.reportStats_.bind(this),Math.floor(Math.random()*2*Kw))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var it;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(it||(it={}));function df(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Qa(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Ja(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _r{constructor(e,n,s){this.path=e,this.affectedTree=n,this.revert=s,this.type=it.ACK_USER_WRITE,this.source=df()}operationForChild(e){if(G(this.path)){if(this.affectedTree.value!=null)return C(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new oe(e));return new _r(Y(),n,this.revert)}}else return C(q(this.path)===e,"operationForChild called for unrelated child."),new _r(ue(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oi{constructor(e,n){this.source=e,this.path=n,this.type=it.LISTEN_COMPLETE}operationForChild(e){return G(this.path)?new oi(this.source,Y()):new oi(this.source,ue(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nn{constructor(e,n,s){this.source=e,this.path=n,this.snap=s,this.type=it.OVERWRITE}operationForChild(e){return G(this.path)?new Nn(this.source,Y(),this.snap.getImmediateChild(e)):new Nn(this.source,ue(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ai{constructor(e,n,s){this.source=e,this.path=n,this.children=s,this.type=it.MERGE}operationForChild(e){if(G(this.path)){const n=this.children.subtree(new oe(e));return n.isEmpty()?null:n.value?new Nn(this.source,Y(),n.value):new ai(this.source,Y(),n)}else return C(q(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new ai(this.source,ue(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class an{constructor(e,n,s){this.node_=e,this.fullyInitialized_=n,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(G(e))return this.isFullyInitialized()&&!this.filtered_;const n=q(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qw{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function zw(t,e,n,s){const i=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(Uw(o.childName,o.snapshotNode))}),Rs(t,i,"child_removed",e,s,n),Rs(t,i,"child_added",e,s,n),Rs(t,i,"child_moved",r,s,n),Rs(t,i,"child_changed",e,s,n),Rs(t,i,"value",e,s,n),i}function Rs(t,e,n,s,i,r){const o=s.filter(a=>a.type===n);o.sort((a,l)=>Qw(t,a,l)),o.forEach(a=>{const l=Yw(t,a,r);i.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,t.query_))})})}function Yw(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function Qw(t,e,n){if(e.childName==null||n.childName==null)throw fs("Should only compare child_ events.");const s=new K(e.childName,e.snapshotNode),i=new K(n.childName,n.snapshotNode);return t.index_.compare(s,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $r(t,e){return{eventCache:t,serverCache:e}}function $s(t,e,n,s){return $r(new an(e,n,s),t.serverCache)}function ff(t,e,n,s){return $r(t.eventCache,new an(e,n,s))}function gr(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function On(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let mo;const Jw=()=>(mo||(mo=new Ue(LE)),mo);class de{static fromObject(e){let n=new de(null);return He(e,(s,i)=>{n=n.set(new oe(s),i)}),n}constructor(e,n=Jw()){this.value=e,this.children=n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:Y(),value:this.value};if(G(e))return null;{const s=q(e),i=this.children.get(s);if(i!==null){const r=i.findRootMostMatchingPathAndValue(ue(e),n);return r!=null?{path:ye(new oe(s),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(G(e))return this;{const n=q(e),s=this.children.get(n);return s!==null?s.subtree(ue(e)):new de(null)}}set(e,n){if(G(e))return new de(n,this.children);{const s=q(e),r=(this.children.get(s)||new de(null)).set(ue(e),n),o=this.children.insert(s,r);return new de(this.value,o)}}remove(e){if(G(e))return this.children.isEmpty()?new de(null):new de(null,this.children);{const n=q(e),s=this.children.get(n);if(s){const i=s.remove(ue(e));let r;return i.isEmpty()?r=this.children.remove(n):r=this.children.insert(n,i),this.value===null&&r.isEmpty()?new de(null):new de(this.value,r)}else return this}}get(e){if(G(e))return this.value;{const n=q(e),s=this.children.get(n);return s?s.get(ue(e)):null}}setTree(e,n){if(G(e))return n;{const s=q(e),r=(this.children.get(s)||new de(null)).setTree(ue(e),n);let o;return r.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,r),new de(this.value,o)}}fold(e){return this.fold_(Y(),e)}fold_(e,n){const s={};return this.children.inorderTraversal((i,r)=>{s[i]=r.fold_(ye(e,i),n)}),n(e,this.value,s)}findOnPath(e,n){return this.findOnPath_(e,Y(),n)}findOnPath_(e,n,s){const i=this.value?s(n,this.value):!1;if(i)return i;if(G(e))return null;{const r=q(e),o=this.children.get(r);return o?o.findOnPath_(ue(e),ye(n,r),s):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,Y(),n)}foreachOnPath_(e,n,s){if(G(e))return this;{this.value&&s(n,this.value);const i=q(e),r=this.children.get(i);return r?r.foreachOnPath_(ue(e),ye(n,i),s):new de(null)}}foreach(e){this.foreach_(Y(),e)}foreach_(e,n){this.children.inorderTraversal((s,i)=>{i.foreach_(ye(e,s),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,s)=>{s.value&&e(n,s.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class at{constructor(e){this.writeTree_=e}static empty(){return new at(new de(null))}}function Bs(t,e,n){if(G(e))return new at(new de(n));{const s=t.writeTree_.findRootMostValueAndPath(e);if(s!=null){const i=s.path;let r=s.value;const o=xe(i,e);return r=r.updateChild(o,n),new at(t.writeTree_.set(i,r))}else{const i=new de(n),r=t.writeTree_.setTree(e,i);return new at(r)}}}function qc(t,e,n){let s=t;return He(n,(i,r)=>{s=Bs(s,ye(e,i),r)}),s}function zc(t,e){if(G(e))return at.empty();{const n=t.writeTree_.setTree(e,new de(null));return new at(n)}}function Xo(t,e){return Mn(t,e)!=null}function Mn(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(xe(n.path,e)):null}function Yc(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(pe,(s,i)=>{e.push(new K(s,i))}):t.writeTree_.children.inorderTraversal((s,i)=>{i.value!=null&&e.push(new K(s,i.value))}),e}function sn(t,e){if(G(e))return t;{const n=Mn(t,e);return n!=null?new at(new de(n)):new at(t.writeTree_.subtree(e))}}function Zo(t){return t.writeTree_.isEmpty()}function us(t,e){return pf(Y(),t.writeTree_,e)}function pf(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let s=null;return e.children.inorderTraversal((i,r)=>{i===".priority"?(C(r.value!==null,"Priority writes must always be leaf nodes"),s=r.value):n=pf(ye(t,i),r,n)}),!n.getChild(t).isEmpty()&&s!==null&&(n=n.updateChild(ye(t,".priority"),s)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Br(t,e){return vf(e,t)}function Xw(t,e,n,s,i){C(s>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:s,visible:i}),i&&(t.visibleWrites=Bs(t.visibleWrites,e,n)),t.lastWriteId=s}function Zw(t,e){for(let n=0;n<t.allWrites.length;n++){const s=t.allWrites[n];if(s.writeId===e)return s}return null}function eI(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);C(n>=0,"removeWrite called with nonexistent writeId.");const s=t.allWrites[n];t.allWrites.splice(n,1);let i=s.visible,r=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&tI(a,s.path)?i=!1:st(s.path,a.path)&&(r=!0)),o--}if(i){if(r)return nI(t),!0;if(s.snap)t.visibleWrites=zc(t.visibleWrites,s.path);else{const a=s.children;He(a,l=>{t.visibleWrites=zc(t.visibleWrites,ye(s.path,l))})}return!0}else return!1}function tI(t,e){if(t.snap)return st(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&st(ye(t.path,n),e))return!0;return!1}function nI(t){t.visibleWrites=_f(t.allWrites,sI,Y()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function sI(t){return t.visible}function _f(t,e,n){let s=at.empty();for(let i=0;i<t.length;++i){const r=t[i];if(e(r)){const o=r.path;let a;if(r.snap)st(n,o)?(a=xe(n,o),s=Bs(s,a,r.snap)):st(o,n)&&(a=xe(o,n),s=Bs(s,Y(),r.snap.getChild(a)));else if(r.children){if(st(n,o))a=xe(n,o),s=qc(s,a,r.children);else if(st(o,n))if(a=xe(o,n),G(a))s=qc(s,Y(),r.children);else{const l=rs(r.children,q(a));if(l){const c=l.getChild(ue(a));s=Bs(s,Y(),c)}}}else throw fs("WriteRecord should have .snap or .children")}}return s}function gf(t,e,n,s,i){if(!s&&!i){const r=Mn(t.visibleWrites,e);if(r!=null)return r;{const o=sn(t.visibleWrites,e);if(Zo(o))return n;if(n==null&&!Xo(o,Y()))return null;{const a=n||V.EMPTY_NODE;return us(o,a)}}}else{const r=sn(t.visibleWrites,e);if(!i&&Zo(r))return n;if(!i&&n==null&&!Xo(r,Y()))return null;{const o=function(c){return(c.visible||i)&&(!s||!~s.indexOf(c.writeId))&&(st(c.path,e)||st(e,c.path))},a=_f(t.allWrites,o,e),l=n||V.EMPTY_NODE;return us(a,l)}}}function iI(t,e,n){let s=V.EMPTY_NODE;const i=Mn(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(pe,(r,o)=>{s=s.updateImmediateChild(r,o)}),s;if(n){const r=sn(t.visibleWrites,e);return n.forEachChild(pe,(o,a)=>{const l=us(sn(r,new oe(o)),a);s=s.updateImmediateChild(o,l)}),Yc(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const r=sn(t.visibleWrites,e);return Yc(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function rI(t,e,n,s,i){C(s||i,"Either existingEventSnap or existingServerSnap must exist");const r=ye(e,n);if(Xo(t.visibleWrites,r))return null;{const o=sn(t.visibleWrites,r);return Zo(o)?i.getChild(n):us(o,i.getChild(n))}}function oI(t,e,n,s){const i=ye(e,n),r=Mn(t.visibleWrites,i);if(r!=null)return r;if(s.isCompleteForChild(n)){const o=sn(t.visibleWrites,i);return us(o,s.getNode().getImmediateChild(n))}else return null}function aI(t,e){return Mn(t.visibleWrites,e)}function lI(t,e,n,s,i,r,o){let a;const l=sn(t.visibleWrites,e),c=Mn(l,Y());if(c!=null)a=c;else if(n!=null)a=us(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const u=[],h=o.getCompare(),d=r?a.getReverseIteratorFrom(s,o):a.getIteratorFrom(s,o);let _=d.getNext();for(;_&&u.length<i;)h(_,s)!==0&&u.push(_),_=d.getNext();return u}else return[]}function cI(){return{visibleWrites:at.empty(),allWrites:[],lastWriteId:-1}}function mr(t,e,n,s){return gf(t.writeTree,t.treePath,e,n,s)}function Xa(t,e){return iI(t.writeTree,t.treePath,e)}function Qc(t,e,n,s){return rI(t.writeTree,t.treePath,e,n,s)}function vr(t,e){return aI(t.writeTree,ye(t.treePath,e))}function uI(t,e,n,s,i,r){return lI(t.writeTree,t.treePath,e,n,s,i,r)}function Za(t,e,n){return oI(t.writeTree,t.treePath,e,n)}function mf(t,e){return vf(ye(t.treePath,e),t.writeTree)}function vf(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hI{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,s=e.childName;C(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),C(s!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(s);if(i){const r=i.type;if(n==="child_added"&&r==="child_removed")this.changeMap.set(s,ii(s,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&r==="child_added")this.changeMap.delete(s);else if(n==="child_removed"&&r==="child_changed")this.changeMap.set(s,si(s,i.oldSnap));else if(n==="child_changed"&&r==="child_added")this.changeMap.set(s,cs(s,e.snapshotNode));else if(n==="child_changed"&&r==="child_changed")this.changeMap.set(s,ii(s,e.snapshotNode,i.oldSnap));else throw fs("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dI{getCompleteChild(e){return null}getChildAfterChild(e,n,s){return null}}const yf=new dI;class el{constructor(e,n,s=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=s}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new an(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Za(this.writes_,e,s)}}getChildAfterChild(e,n,s){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:On(this.viewCache_),r=uI(this.writes_,i,n,1,s,e);return r.length===0?null:r[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fI(t){return{filter:t}}function pI(t,e){C(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),C(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function _I(t,e,n,s,i){const r=new hI;let o,a;if(n.type===it.OVERWRITE){const c=n;c.source.fromUser?o=ea(t,e,c.path,c.snap,s,i,r):(C(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!G(c.path),o=yr(t,e,c.path,c.snap,s,i,a,r))}else if(n.type===it.MERGE){const c=n;c.source.fromUser?o=mI(t,e,c.path,c.children,s,i,r):(C(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=ta(t,e,c.path,c.children,s,i,a,r))}else if(n.type===it.ACK_USER_WRITE){const c=n;c.revert?o=EI(t,e,c.path,s,i,r):o=vI(t,e,c.path,c.affectedTree,s,i,r)}else if(n.type===it.LISTEN_COMPLETE)o=yI(t,e,n.path,s,r);else throw fs("Unknown operation type: "+n.type);const l=r.getChanges();return gI(e,o,l),{viewCache:o,changes:l}}function gI(t,e,n){const s=e.eventCache;if(s.isFullyInitialized()){const i=s.getNode().isLeafNode()||s.getNode().isEmpty(),r=gr(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!s.getNode().equals(r)||!s.getNode().getPriority().equals(r.getPriority()))&&n.push(uf(gr(e)))}}function Ef(t,e,n,s,i,r){const o=e.eventCache;if(vr(s,n)!=null)return e;{let a,l;if(G(n))if(C(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=On(e),u=c instanceof V?c:V.EMPTY_NODE,h=Xa(s,u);a=t.filter.updateFullNode(e.eventCache.getNode(),h,r)}else{const c=mr(s,On(e));a=t.filter.updateFullNode(e.eventCache.getNode(),c,r)}else{const c=q(n);if(c===".priority"){C(on(n)===1,"Can't have a priority with additional path components");const u=o.getNode();l=e.serverCache.getNode();const h=Qc(s,n,u,l);h!=null?a=t.filter.updatePriority(u,h):a=o.getNode()}else{const u=ue(n);let h;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const d=Qc(s,n,o.getNode(),l);d!=null?h=o.getNode().getImmediateChild(c).updateChild(u,d):h=o.getNode().getImmediateChild(c)}else h=Za(s,c,e.serverCache);h!=null?a=t.filter.updateChild(o.getNode(),c,h,u,i,r):a=o.getNode()}}return $s(e,a,o.isFullyInitialized()||G(n),t.filter.filtersNodes())}}function yr(t,e,n,s,i,r,o,a){const l=e.serverCache;let c;const u=o?t.filter:t.filter.getIndexedFilter();if(G(n))c=u.updateFullNode(l.getNode(),s,null);else if(u.filtersNodes()&&!l.isFiltered()){const _=l.getNode().updateChild(n,s);c=u.updateFullNode(l.getNode(),_,null)}else{const _=q(n);if(!l.isCompleteForPath(n)&&on(n)>1)return e;const m=ue(n),x=l.getNode().getImmediateChild(_).updateChild(m,s);_===".priority"?c=u.updatePriority(l.getNode(),x):c=u.updateChild(l.getNode(),_,x,m,yf,null)}const h=ff(e,c,l.isFullyInitialized()||G(n),u.filtersNodes()),d=new el(i,h,r);return Ef(t,h,n,i,d,a)}function ea(t,e,n,s,i,r,o){const a=e.eventCache;let l,c;const u=new el(i,e,r);if(G(n))c=t.filter.updateFullNode(e.eventCache.getNode(),s,o),l=$s(e,c,!0,t.filter.filtersNodes());else{const h=q(n);if(h===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),s),l=$s(e,c,a.isFullyInitialized(),a.isFiltered());else{const d=ue(n),_=a.getNode().getImmediateChild(h);let m;if(G(d))m=s;else{const b=u.getCompleteChild(h);b!=null?Zd(d)===".priority"&&b.getChild(tf(d)).isEmpty()?m=b:m=b.updateChild(d,s):m=V.EMPTY_NODE}if(_.equals(m))l=e;else{const b=t.filter.updateChild(a.getNode(),h,m,d,u,o);l=$s(e,b,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function Jc(t,e){return t.eventCache.isCompleteForChild(e)}function mI(t,e,n,s,i,r,o){let a=e;return s.foreach((l,c)=>{const u=ye(n,l);Jc(e,q(u))&&(a=ea(t,a,u,c,i,r,o))}),s.foreach((l,c)=>{const u=ye(n,l);Jc(e,q(u))||(a=ea(t,a,u,c,i,r,o))}),a}function Xc(t,e,n){return n.foreach((s,i)=>{e=e.updateChild(s,i)}),e}function ta(t,e,n,s,i,r,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;G(n)?c=s:c=new de(null).setTree(n,s);const u=e.serverCache.getNode();return c.children.inorderTraversal((h,d)=>{if(u.hasChild(h)){const _=e.serverCache.getNode().getImmediateChild(h),m=Xc(t,_,d);l=yr(t,l,new oe(h),m,i,r,o,a)}}),c.children.inorderTraversal((h,d)=>{const _=!e.serverCache.isCompleteForChild(h)&&d.value===null;if(!u.hasChild(h)&&!_){const m=e.serverCache.getNode().getImmediateChild(h),b=Xc(t,m,d);l=yr(t,l,new oe(h),b,i,r,o,a)}}),l}function vI(t,e,n,s,i,r,o){if(vr(i,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(s.value!=null){if(G(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return yr(t,e,n,l.getNode().getChild(n),i,r,a,o);if(G(n)){let c=new de(null);return l.getNode().forEachChild(ss,(u,h)=>{c=c.set(new oe(u),h)}),ta(t,e,n,c,i,r,a,o)}else return e}else{let c=new de(null);return s.foreach((u,h)=>{const d=ye(n,u);l.isCompleteForPath(d)&&(c=c.set(u,l.getNode().getChild(d)))}),ta(t,e,n,c,i,r,a,o)}}function yI(t,e,n,s,i){const r=e.serverCache,o=ff(e,r.getNode(),r.isFullyInitialized()||G(n),r.isFiltered());return Ef(t,o,n,s,yf,i)}function EI(t,e,n,s,i,r){let o;if(vr(s,n)!=null)return e;{const a=new el(s,e,i),l=e.eventCache.getNode();let c;if(G(n)||q(n)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=mr(s,On(e));else{const h=e.serverCache.getNode();C(h instanceof V,"serverChildren would be complete if leaf node"),u=Xa(s,h)}u=u,c=t.filter.updateFullNode(l,u,r)}else{const u=q(n);let h=Za(s,u,e.serverCache);h==null&&e.serverCache.isCompleteForChild(u)&&(h=l.getImmediateChild(u)),h!=null?c=t.filter.updateChild(l,u,h,ue(n),a,r):e.eventCache.getNode().hasChild(u)?c=t.filter.updateChild(l,u,V.EMPTY_NODE,ue(n),a,r):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=mr(s,On(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,r)))}return o=e.serverCache.isFullyInitialized()||vr(s,Y())!=null,$s(e,c,o,t.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wI{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,i=new za(s.getIndex()),r=Ww(s);this.processor_=fI(r);const o=n.serverCache,a=n.eventCache,l=i.updateFullNode(V.EMPTY_NODE,o.getNode(),null),c=r.updateFullNode(V.EMPTY_NODE,a.getNode(),null),u=new an(l,o.isFullyInitialized(),i.filtersNodes()),h=new an(c,a.isFullyInitialized(),r.filtersNodes());this.viewCache_=$r(h,u),this.eventGenerator_=new qw(this.query_)}get query(){return this.query_}}function II(t){return t.viewCache_.serverCache.getNode()}function bI(t){return gr(t.viewCache_)}function CI(t,e){const n=On(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!G(e)&&!n.getImmediateChild(q(e)).isEmpty())?n.getChild(e):null}function Zc(t){return t.eventRegistrations_.length===0}function TI(t,e){t.eventRegistrations_.push(e)}function eu(t,e,n){const s=[];if(n){C(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(r=>{const o=r.createCancelEvent(n,i);o&&s.push(o)})}if(e){let i=[];for(let r=0;r<t.eventRegistrations_.length;++r){const o=t.eventRegistrations_[r];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(r+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return s}function tu(t,e,n,s){e.type===it.MERGE&&e.source.queryId!==null&&(C(On(t.viewCache_),"We should always have a full cache before handling merges"),C(gr(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,r=_I(t.processor_,i,e,n,s);return pI(t.processor_,r.viewCache),C(r.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=r.viewCache,wf(t,r.changes,r.viewCache.eventCache.getNode(),null)}function SI(t,e){const n=t.viewCache_.eventCache,s=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(pe,(r,o)=>{s.push(cs(r,o))}),n.isFullyInitialized()&&s.push(uf(n.getNode())),wf(t,s,n.getNode(),e)}function wf(t,e,n,s){const i=s?[s]:t.eventRegistrations_;return zw(t.eventGenerator_,e,n,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Er;class If{constructor(){this.views=new Map}}function RI(t){C(!Er,"__referenceConstructor has already been defined"),Er=t}function AI(){return C(Er,"Reference.ts has not been loaded"),Er}function PI(t){return t.views.size===0}function tl(t,e,n,s){const i=e.source.queryId;if(i!==null){const r=t.views.get(i);return C(r!=null,"SyncTree gave us an op for an invalid query."),tu(r,e,n,s)}else{let r=[];for(const o of t.views.values())r=r.concat(tu(o,e,n,s));return r}}function bf(t,e,n,s,i){const r=e._queryIdentifier,o=t.views.get(r);if(!o){let a=mr(n,i?s:null),l=!1;a?l=!0:s instanceof V?(a=Xa(n,s),l=!1):(a=V.EMPTY_NODE,l=!1);const c=$r(new an(a,l,!1),new an(s,i,!1));return new wI(e,c)}return o}function kI(t,e,n,s,i,r){const o=bf(t,e,s,i,r);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),TI(o,n),SI(o,n)}function NI(t,e,n,s){const i=e._queryIdentifier,r=[];let o=[];const a=ln(t);if(i==="default")for(const[l,c]of t.views.entries())o=o.concat(eu(c,n,s)),Zc(c)&&(t.views.delete(l),c.query._queryParams.loadsAllData()||r.push(c.query));else{const l=t.views.get(i);l&&(o=o.concat(eu(l,n,s)),Zc(l)&&(t.views.delete(i),l.query._queryParams.loadsAllData()||r.push(l.query)))}return a&&!ln(t)&&r.push(new(AI())(e._repo,e._path)),{removed:r,events:o}}function Cf(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function rn(t,e){let n=null;for(const s of t.views.values())n=n||CI(s,e);return n}function Tf(t,e){if(e._queryParams.loadsAllData())return jr(t);{const s=e._queryIdentifier;return t.views.get(s)}}function Sf(t,e){return Tf(t,e)!=null}function ln(t){return jr(t)!=null}function jr(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let wr;function OI(t){C(!wr,"__referenceConstructor has already been defined"),wr=t}function xI(){return C(wr,"Reference.ts has not been loaded"),wr}let DI=1;class nu{constructor(e){this.listenProvider_=e,this.syncPointTree_=new de(null),this.pendingWriteTree_=cI(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function MI(t,e,n,s,i){return Xw(t.pendingWriteTree_,e,n,s,i),i?Si(t,new Nn(df(),e,n)):[]}function Kn(t,e,n=!1){const s=Zw(t.pendingWriteTree_,e);if(eI(t.pendingWriteTree_,e)){let r=new de(null);return s.snap!=null?r=r.set(Y(),!0):He(s.children,o=>{r=r.set(new oe(o),!0)}),Si(t,new _r(s.path,r,n))}else return[]}function Ti(t,e,n){return Si(t,new Nn(Qa(),e,n))}function LI(t,e,n){const s=de.fromObject(n);return Si(t,new ai(Qa(),e,s))}function FI(t,e){return Si(t,new oi(Qa(),e))}function UI(t,e,n){const s=nl(t,n);if(s){const i=sl(s),r=i.path,o=i.queryId,a=xe(r,e),l=new oi(Ja(o),a);return il(t,r,l)}else return[]}function Rf(t,e,n,s,i=!1){const r=e._path,o=t.syncPointTree_.get(r);let a=[];if(o&&(e._queryIdentifier==="default"||Sf(o,e))){const l=NI(o,e,n,s);PI(o)&&(t.syncPointTree_=t.syncPointTree_.remove(r));const c=l.removed;if(a=l.events,!i){const u=c.findIndex(d=>d._queryParams.loadsAllData())!==-1,h=t.syncPointTree_.findOnPath(r,(d,_)=>ln(_));if(u&&!h){const d=t.syncPointTree_.subtree(r);if(!d.isEmpty()){const _=$I(d);for(let m=0;m<_.length;++m){const b=_[m],x=b.query,D=Of(t,b);t.listenProvider_.startListening(js(x),li(t,x),D.hashFn,D.onComplete)}}}!h&&c.length>0&&!s&&(u?t.listenProvider_.stopListening(js(e),null):c.forEach(d=>{const _=t.queryToTagMap.get(Kr(d));t.listenProvider_.stopListening(js(d),_)}))}BI(t,c)}return a}function Af(t,e,n,s){const i=nl(t,s);if(i!=null){const r=sl(i),o=r.path,a=r.queryId,l=xe(o,e),c=new Nn(Ja(a),l,n);return il(t,o,c)}else return[]}function HI(t,e,n,s){const i=nl(t,s);if(i){const r=sl(i),o=r.path,a=r.queryId,l=xe(o,e),c=de.fromObject(n),u=new ai(Ja(a),l,c);return il(t,o,u)}else return[]}function WI(t,e,n,s=!1){const i=e._path;let r=null,o=!1;t.syncPointTree_.foreachOnPath(i,(d,_)=>{const m=xe(d,i);r=r||rn(_,m),o=o||ln(_)});let a=t.syncPointTree_.get(i);a?(o=o||ln(a),r=r||rn(a,Y())):(a=new If,t.syncPointTree_=t.syncPointTree_.set(i,a));let l;r!=null?l=!0:(l=!1,r=V.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((_,m)=>{const b=rn(m,Y());b&&(r=r.updateImmediateChild(_,b))}));const c=Sf(a,e);if(!c&&!e._queryParams.loadsAllData()){const d=Kr(e);C(!t.queryToTagMap.has(d),"View does not exist, but we have a tag");const _=jI();t.queryToTagMap.set(d,_),t.tagToQueryMap.set(_,d)}const u=Br(t.pendingWriteTree_,i);let h=kI(a,e,n,u,r,l);if(!c&&!o&&!s){const d=Tf(a,e);h=h.concat(KI(t,e,d))}return h}function Pf(t,e,n){const i=t.pendingWriteTree_,r=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=xe(o,e),c=rn(a,l);if(c)return c});return gf(i,e,r,n,!0)}function VI(t,e){const n=e._path;let s=null;t.syncPointTree_.foreachOnPath(n,(c,u)=>{const h=xe(c,n);s=s||rn(u,h)});let i=t.syncPointTree_.get(n);i?s=s||rn(i,Y()):(i=new If,t.syncPointTree_=t.syncPointTree_.set(n,i));const r=s!=null,o=r?new an(s,!0,!1):null,a=Br(t.pendingWriteTree_,e._path),l=bf(i,e,a,r?o.getNode():V.EMPTY_NODE,r);return bI(l)}function Si(t,e){return kf(e,t.syncPointTree_,null,Br(t.pendingWriteTree_,Y()))}function kf(t,e,n,s){if(G(t.path))return Nf(t,e,n,s);{const i=e.get(Y());n==null&&i!=null&&(n=rn(i,Y()));let r=[];const o=q(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const c=n?n.getImmediateChild(o):null,u=mf(s,o);r=r.concat(kf(a,l,c,u))}return i&&(r=r.concat(tl(i,t,s,n))),r}}function Nf(t,e,n,s){const i=e.get(Y());n==null&&i!=null&&(n=rn(i,Y()));let r=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,c=mf(s,o),u=t.operationForChild(o);u&&(r=r.concat(Nf(u,a,l,c)))}),i&&(r=r.concat(tl(i,t,s,n))),r}function Of(t,e){const n=e.query,s=li(t,n);return{hashFn:()=>(II(e)||V.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return s?UI(t,n._path,s):FI(t,n._path);{const r=HE(i,n);return Rf(t,n,null,r)}}}}function li(t,e){const n=Kr(e);return t.queryToTagMap.get(n)}function Kr(t){return t._path.toString()+"$"+t._queryIdentifier}function nl(t,e){return t.tagToQueryMap.get(e)}function sl(t){const e=t.indexOf("$");return C(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new oe(t.substr(0,e))}}function il(t,e,n){const s=t.syncPointTree_.get(e);C(s,"Missing sync point for query tag that we're tracking");const i=Br(t.pendingWriteTree_,e);return tl(s,n,i,null)}function $I(t){return t.fold((e,n,s)=>{if(n&&ln(n))return[jr(n)];{let i=[];return n&&(i=Cf(n)),He(s,(r,o)=>{i=i.concat(o)}),i}})}function js(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(xI())(t._repo,t._path):t}function BI(t,e){for(let n=0;n<e.length;++n){const s=e[n];if(!s._queryParams.loadsAllData()){const i=Kr(s),r=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(r)}}}function jI(){return DI++}function KI(t,e,n){const s=e._path,i=li(t,e),r=Of(t,n),o=t.listenProvider_.startListening(js(e),i,r.hashFn,r.onComplete),a=t.syncPointTree_.subtree(s);if(i)C(!ln(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((c,u,h)=>{if(!G(c)&&u&&ln(u))return[jr(u).query];{let d=[];return u&&(d=d.concat(Cf(u).map(_=>_.query))),He(h,(_,m)=>{d=d.concat(m)}),d}});for(let c=0;c<l.length;++c){const u=l[c];t.listenProvider_.stopListening(js(u),li(t,u))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rl{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new rl(n)}node(){return this.node_}}class ol{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=ye(this.path_,e);return new ol(this.syncTree_,n)}node(){return Pf(this.syncTree_,this.path_)}}const GI=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},su=function(t,e,n){if(!t||typeof t!="object")return t;if(C(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return qI(t[".sv"],e,n);if(typeof t[".sv"]=="object")return zI(t[".sv"],e);C(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},qI=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:C(!1,"Unexpected server value: "+t)}},zI=function(t,e,n){t.hasOwnProperty("increment")||C(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const s=t.increment;typeof s!="number"&&C(!1,"Unexpected increment value: "+s);const i=e.node();if(C(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return s;const o=i.getValue();return typeof o!="number"?s:o+s},YI=function(t,e,n,s){return al(e,new ol(n,t),s)},QI=function(t,e,n){return al(t,new rl(e),n)};function al(t,e,n){const s=t.getPriority().val(),i=su(s,e.getImmediateChild(".priority"),n);let r;if(t.isLeafNode()){const o=t,a=su(o.getValue(),e,n);return a!==o.getValue()||i!==o.getPriority().val()?new we(a,Ce(i)):t}else{const o=t;return r=o,i!==o.getPriority().val()&&(r=r.updatePriority(new we(i))),o.forEachChild(pe,(a,l)=>{const c=al(l,e.getImmediateChild(a),n);c!==l&&(r=r.updateImmediateChild(a,c))}),r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ll{constructor(e="",n=null,s={children:{},childCount:0}){this.name=e,this.parent=n,this.node=s}}function cl(t,e){let n=e instanceof oe?e:new oe(e),s=t,i=q(n);for(;i!==null;){const r=rs(s.node.children,i)||{children:{},childCount:0};s=new ll(i,s,r),n=ue(n),i=q(n)}return s}function ys(t){return t.node.value}function xf(t,e){t.node.value=e,na(t)}function Df(t){return t.node.childCount>0}function JI(t){return ys(t)===void 0&&!Df(t)}function Gr(t,e){He(t.node.children,(n,s)=>{e(new ll(n,t,s))})}function Mf(t,e,n,s){n&&e(t),Gr(t,i=>{Mf(i,e,!0)})}function XI(t,e,n){let s=t.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function Ri(t){return new oe(t.parent===null?t.name:Ri(t.parent)+"/"+t.name)}function na(t){t.parent!==null&&ZI(t.parent,t.name,t)}function ZI(t,e,n){const s=JI(n),i=Ht(t.node.children,e);s&&i?(delete t.node.children[e],t.node.childCount--,na(t)):!s&&!i&&(t.node.children[e]=n.node,t.node.childCount++,na(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eb=/[\[\].#$\/\u0000-\u001F\u007F]/,tb=/[\[\].#$\u0000-\u001F\u007F]/,vo=10*1024*1024,Lf=function(t){return typeof t=="string"&&t.length!==0&&!eb.test(t)},Ff=function(t){return typeof t=="string"&&t.length!==0&&!tb.test(t)},nb=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),Ff(t)},Uf=function(t,e,n){const s=n instanceof oe?new vw(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+yn(s));if(typeof e=="function")throw new Error(t+"contains a function "+yn(s)+" with contents = "+e.toString());if(Od(e))throw new Error(t+"contains "+e.toString()+" "+yn(s));if(typeof e=="string"&&e.length>vo/3&&Lr(e)>vo)throw new Error(t+"contains a string greater than "+vo+" utf8 bytes "+yn(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,r=!1;if(He(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!Lf(o)))throw new Error(t+" contains an invalid key ("+o+") "+yn(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);yw(s,o),Uf(t,a,s),Ew(s)}),i&&r)throw new Error(t+' contains ".value" child '+yn(s)+" in addition to actual children.")}},Hf=function(t,e,n,s){if(!Ff(n))throw new Error(Vh(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},sb=function(t,e,n,s){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),Hf(t,e,n)},ib=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Lf(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!nb(n))throw new Error(Vh(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rb{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function ob(t,e){let n=null;for(let s=0;s<e.length;s++){const i=e[s],r=i.getPath();n!==null&&!nf(r,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:r}),n.events.push(i)}n&&t.eventLists_.push(n)}function fn(t,e,n){ob(t,n),ab(t,s=>st(s,e)||st(e,s))}function ab(t,e){t.recursionDepth_++;let n=!0;for(let s=0;s<t.eventLists_.length;s++){const i=t.eventLists_[s];if(i){const r=i.path;e(r)?(lb(t.eventLists_[s]),t.eventLists_[s]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function lb(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const s=n.getEventRunner();Ws&&Re("event: "+n.toString()),bi(s)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cb="repo_interrupt",ub=25;class hb{constructor(e,n,s,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=s,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new rb,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=pr(),this.transactionQueueTree_=new ll,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function db(t,e,n){if(t.stats_=ja(t.repoInfo_),t.forceRestClient_||BE())t.server_=new fr(t.repoInfo_,(s,i,r,o)=>{iu(t,s,i,r,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>ru(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{ve(n)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}t.persistentConnection_=new Dt(t.repoInfo_,e,(s,i,r,o)=>{iu(t,s,i,r,o)},s=>{ru(t,s)},s=>{pb(t,s)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(s=>{t.server_.refreshAuthToken(s)}),t.appCheckProvider_.addTokenChangeListener(s=>{t.server_.refreshAppCheckToken(s.token)}),t.statsReporter_=zE(t.repoInfo_,()=>new Gw(t.stats_,t.server_)),t.infoData_=new Vw,t.infoSyncTree_=new nu({startListening:(s,i,r,o)=>{let a=[];const l=t.infoData_.getNode(s._path);return l.isEmpty()||(a=Ti(t.infoSyncTree_,s._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),ul(t,"connected",!1),t.serverSyncTree_=new nu({startListening:(s,i,r,o)=>(t.server_.listen(s,r,i,(a,l)=>{const c=o(a,l);fn(t.eventQueue_,s._path,c)}),[]),stopListening:(s,i)=>{t.server_.unlisten(s,i)}})}function fb(t){const n=t.infoData_.getNode(new oe(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function Wf(t){return GI({timestamp:fb(t)})}function iu(t,e,n,s,i){t.dataUpdateCount++;const r=new oe(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(s){const l=sr(n,c=>Ce(c));o=HI(t.serverSyncTree_,r,l,i)}else{const l=Ce(n);o=Af(t.serverSyncTree_,r,l,i)}else if(s){const l=sr(n,c=>Ce(c));o=LI(t.serverSyncTree_,r,l)}else{const l=Ce(n);o=Ti(t.serverSyncTree_,r,l)}let a=r;o.length>0&&(a=fl(t,r)),fn(t.eventQueue_,a,o)}function ru(t,e){ul(t,"connected",e),e===!1&&mb(t)}function pb(t,e){He(e,(n,s)=>{ul(t,n,s)})}function ul(t,e,n){const s=new oe("/.info/"+e),i=Ce(n);t.infoData_.updateSnapshot(s,i);const r=Ti(t.infoSyncTree_,s,i);fn(t.eventQueue_,s,r)}function _b(t){return t.nextWriteId_++}function gb(t,e,n){const s=VI(t.serverSyncTree_,e);return s!=null?Promise.resolve(s):t.server_.get(e).then(i=>{const r=Ce(i).withIndex(e._queryParams.getIndex());WI(t.serverSyncTree_,e,n,!0);let o;if(e._queryParams.loadsAllData())o=Ti(t.serverSyncTree_,e._path,r);else{const a=li(t.serverSyncTree_,e);o=Af(t.serverSyncTree_,e._path,r,a)}return fn(t.eventQueue_,e._path,o),Rf(t.serverSyncTree_,e,n,null,!0),r},i=>(hl(t,"get for query "+ve(e)+" failed: "+i),Promise.reject(new Error(i))))}function mb(t){hl(t,"onDisconnectEvents");const e=Wf(t),n=pr();Jo(t.onDisconnect_,Y(),(i,r)=>{const o=YI(i,r,t.serverSyncTree_,e);hf(n,i,o)});let s=[];Jo(n,Y(),(i,r)=>{s=s.concat(Ti(t.serverSyncTree_,i,r));const o=wb(t,i);fl(t,o)}),t.onDisconnect_=pr(),fn(t.eventQueue_,Y(),s)}function vb(t){t.persistentConnection_&&t.persistentConnection_.interrupt(cb)}function hl(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),Re(n,...e)}function Vf(t,e,n){return Pf(t.serverSyncTree_,e,n)||V.EMPTY_NODE}function dl(t,e=t.transactionQueueTree_){if(e||qr(t,e),ys(e)){const n=Bf(t,e);C(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&yb(t,Ri(e),n)}else Df(e)&&Gr(e,n=>{dl(t,n)})}function yb(t,e,n){const s=n.map(c=>c.currentWriteId),i=Vf(t,e,s);let r=i;const o=i.hash();for(let c=0;c<n.length;c++){const u=n[c];C(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const h=xe(e,u.path);r=r.updateChild(h,u.currentOutputSnapshotRaw)}const a=r.val(!0),l=e;t.server_.put(l.toString(),a,c=>{hl(t,"transaction put response",{path:l.toString(),status:c});let u=[];if(c==="ok"){const h=[];for(let d=0;d<n.length;d++)n[d].status=2,u=u.concat(Kn(t.serverSyncTree_,n[d].currentWriteId)),n[d].onComplete&&h.push(()=>n[d].onComplete(null,!0,n[d].currentOutputSnapshotResolved)),n[d].unwatcher();qr(t,cl(t.transactionQueueTree_,e)),dl(t,t.transactionQueueTree_),fn(t.eventQueue_,e,u);for(let d=0;d<h.length;d++)bi(h[d])}else{if(c==="datastale")for(let h=0;h<n.length;h++)n[h].status===3?n[h].status=4:n[h].status=0;else{Ge("transaction at "+l.toString()+" failed: "+c);for(let h=0;h<n.length;h++)n[h].status=4,n[h].abortReason=c}fl(t,e)}},o)}function fl(t,e){const n=$f(t,e),s=Ri(n),i=Bf(t,n);return Eb(t,i,s),s}function Eb(t,e,n){if(e.length===0)return;const s=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=xe(n,l.path);let u=!1,h;if(C(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)u=!0,h=l.abortReason,i=i.concat(Kn(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=ub)u=!0,h="maxretry",i=i.concat(Kn(t.serverSyncTree_,l.currentWriteId,!0));else{const d=Vf(t,l.path,o);l.currentInputSnapshot=d;const _=e[a].update(d.val());if(_!==void 0){Uf("transaction failed: Data returned ",_,l.path);let m=Ce(_);typeof _=="object"&&_!=null&&Ht(_,".priority")||(m=m.updatePriority(d.getPriority()));const x=l.currentWriteId,D=Wf(t),N=QI(m,d,D);l.currentOutputSnapshotRaw=m,l.currentOutputSnapshotResolved=N,l.currentWriteId=_b(t),o.splice(o.indexOf(x),1),i=i.concat(MI(t.serverSyncTree_,l.path,N,l.currentWriteId,l.applyLocally)),i=i.concat(Kn(t.serverSyncTree_,x,!0))}else u=!0,h="nodata",i=i.concat(Kn(t.serverSyncTree_,l.currentWriteId,!0))}fn(t.eventQueue_,n,i),i=[],u&&(e[a].status=2,function(d){setTimeout(d,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(h==="nodata"?s.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):s.push(()=>e[a].onComplete(new Error(h),!1,null))))}qr(t,t.transactionQueueTree_);for(let a=0;a<s.length;a++)bi(s[a]);dl(t,t.transactionQueueTree_)}function $f(t,e){let n,s=t.transactionQueueTree_;for(n=q(e);n!==null&&ys(s)===void 0;)s=cl(s,n),e=ue(e),n=q(e);return s}function Bf(t,e){const n=[];return jf(t,e,n),n.sort((s,i)=>s.order-i.order),n}function jf(t,e,n){const s=ys(e);if(s)for(let i=0;i<s.length;i++)n.push(s[i]);Gr(e,i=>{jf(t,i,n)})}function qr(t,e){const n=ys(e);if(n){let s=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[s]=n[i],s++);n.length=s,xf(e,n.length>0?n:void 0)}Gr(e,s=>{qr(t,s)})}function wb(t,e){const n=Ri($f(t,e)),s=cl(t.transactionQueueTree_,e);return XI(s,i=>{yo(t,i)}),yo(t,s),Mf(s,i=>{yo(t,i)}),n}function yo(t,e){const n=ys(e);if(n){const s=[];let i=[],r=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(C(r===o-1,"All SENT items should be at beginning of queue."),r=o,n[o].status=3,n[o].abortReason="set"):(C(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(Kn(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&s.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?xf(e,void 0):n.length=r+1,fn(t.eventQueue_,Ri(e),i);for(let o=0;o<s.length;o++)bi(s[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ib(t){let e="";const n=t.split("/");for(let s=0;s<n.length;s++)if(n[s].length>0){let i=n[s];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function bb(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const s=n.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):Ge(`Invalid query segment '${n}' in query '${t}'`)}return e}const ou=function(t,e){const n=Cb(t),s=n.namespace;n.domain==="firebase.com"&&Ft(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&n.domain!=="localhost"&&Ft("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||DE();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new jd(n.host,n.secure,s,i,e,"",s!==n.subdomain),path:new oe(n.pathString)}},Cb=function(t){let e="",n="",s="",i="",r="",o=!0,a="https",l=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(a=t.substring(0,c-1),t=t.substring(c+2));let u=t.indexOf("/");u===-1&&(u=t.length);let h=t.indexOf("?");h===-1&&(h=t.length),e=t.substring(0,Math.min(u,h)),u<h&&(i=Ib(t.substring(u,h)));const d=bb(t.substring(Math.min(t.length,h)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const _=e.slice(0,c);if(_.toLowerCase()==="localhost")n="localhost";else if(_.split(".").length<=2)n=_;else{const m=e.indexOf(".");s=e.substring(0,m).toLowerCase(),n=e.substring(m+1),r=s}"ns"in d&&(r=d.ns)}return{host:e,port:l,domain:n,subdomain:s,secure:o,scheme:a,pathString:i,namespace:r}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tb{constructor(e,n,s,i){this.eventType=e,this.eventRegistration=n,this.snapshot=s,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+ve(this.snapshot.exportVal())}}class Sb{constructor(e,n,s){this.eventRegistration=e,this.error=n,this.path=s}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rb{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return C(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pl{constructor(e,n,s,i){this._repo=e,this._path=n,this._queryParams=s,this._orderByCalled=i}get key(){return G(this._path)?null:Zd(this._path)}get ref(){return new Wt(this._repo,this._path)}get _queryIdentifier(){const e=Kc(this._queryParams),n=$a(e);return n==="{}"?"default":n}get _queryObject(){return Kc(this._queryParams)}isEqual(e){if(e=qe(e),!(e instanceof pl))return!1;const n=this._repo===e._repo,s=nf(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&s&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+mw(this._path)}}class Wt extends pl{constructor(e,n){super(e,n,new Ya,!1)}get parent(){const e=tf(this._path);return e===null?null:new Wt(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class ci{constructor(e,n,s){this._node=e,this.ref=n,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new oe(e),s=sa(this.ref,e);return new ci(this._node.getChild(n),s,pe)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,i)=>e(new ci(i,sa(this.ref,s),pe)))}hasChild(e){const n=new oe(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Ab(t,e){return t=qe(t),t._checkNotDeleted("ref"),sa(t._root,e)}function sa(t,e){return t=qe(t),q(t._path)===null?sb("child","path",e):Hf("child","path",e),new Wt(t._repo,ye(t._path,e))}function Pb(t){t=qe(t);const e=new Rb(()=>{}),n=new _l(e);return gb(t._repo,t,n).then(s=>new ci(s,new Wt(t._repo,t._path),t._queryParams.getIndex()))}class _l{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const s=n._queryParams.getIndex();return new Tb("value",this,new ci(e.snapshotNode,new Wt(n._repo,n._path),s))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new Sb(this,e,n):null}matches(e){return e instanceof _l?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}RI(Wt);OI(Wt);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kb="FIREBASE_DATABASE_EMULATOR_HOST",ia={};let Nb=!1;function Ob(t,e,n,s){t.repoInfo_=new jd(e,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0,n),s&&(t.authTokenProvider_=s)}function xb(t,e,n,s,i){let r=s||t.options.databaseURL;r===void 0&&(t.options.projectId||Ft("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Re("Using default host for project ",t.options.projectId),r=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=ou(r,i),a=o.repoInfo,l;typeof process<"u"&&Rc&&(l=Rc[kb]),l?(r=`http://${l}?ns=${a.namespace}`,o=ou(r,i),a=o.repoInfo):o.repoInfo.secure;const c=new KE(t.name,t.options,e);ib("Invalid Firebase Database URL",o),G(o.path)||Ft("Database URL must point to the root of a Firebase Database (not including a child path).");const u=Mb(a,t,c,new jE(t,n));return new Lb(u,t)}function Db(t,e){const n=ia[e];(!n||n[t.key]!==t)&&Ft(`Database ${e}(${t.repoInfo_}) has already been deleted.`),vb(t),delete n[t.key]}function Mb(t,e,n,s){let i=ia[e.name];i||(i={},ia[e.name]=i);let r=i[t.toURLString()];return r&&Ft("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new hb(t,Nb,n,s),i[t.toURLString()]=r,r}class Lb{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(db(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Wt(this._repo,Y())),this._rootInternal}_delete(){return this._rootInternal!==null&&(Db(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Ft("Cannot call "+e+" on a deleted database.")}}function Fb(t=Kh(),e){const n=Oa(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const s=Bg("database");s&&Ub(n,...s)}return n}function Ub(t,e,n,s={}){t=qe(t),t._checkNotDeleted("useEmulator");const i=`${e}:${n}`,r=t._repoInternal;if(t._instanceStarted){if(i===t._repoInternal.repoInfo_.host&&Rn(s,r.repoInfo_.emulatorOptions))return;Ft("connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.")}let o;if(r.repoInfo_.nodeAdmin)s.mockUserToken&&Ft('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),o=new Ki(Ki.OWNER);else if(s.mockUserToken){const a=typeof s.mockUserToken=="string"?s.mockUserToken:jg(s.mockUserToken,t.app.options.projectId);o=new Ki(a)}Ob(r,i,s,o)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hb(t){AE(_s),os(new An("database",(e,{instanceIdentifier:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return xb(s,i,r,n)},"PUBLIC").setMultipleInstances(!0)),tn(Ac,Pc,t),tn(Ac,Pc,"esm2017")}Dt.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};Dt.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};Hb();const Wb={apiKey:"AIzaSyDvx-x9dBLlScpFEe2ga0FitMPJznXUvKQ",authDomain:"shiatsu-b4dae.firebaseapp.com",projectId:"shiatsu-b4dae",storageBucket:"shiatsu-b4dae.appspot.com",messagingSenderId:"147098176620",appId:"1:147098176620:web:d6f498f7f97c7c72e31c49",databaseURL:"https://shiatsu-b4dae-default-rtdb.europe-west1.firebasedatabase.app/"},Kf=jh(Wb),ra=SE(Kf),Vb=Fb(Kf),$b={components:{Header:xg},setup(){const t=bn(!1),e=async()=>{try{const o=Ab(Vb,"adminKey"),a=await Pb(o);return console.log(o),console.log(a.val()),a.exists()?(console.log("✅ Admin Key from Firebase:",a.val()),a.val()):(console.warn("⚠️ No admin key found in Firebase!"),null)}catch(o){return console.error("❌ Failed to fetch admin key:",o),null}},n=async()=>{const o=localStorage.getItem("adminKey");if(!o)return t.value=!1;const a=await e();t.value=o===a},s=async()=>{const o=prompt("Enter Admin Email:");if(!o)return;const a=prompt("Enter Password:");if(a)try{const l=await vd(ra,o,a);console.log("✅ Logged in:",l.user.email);const c=await e();c?(localStorage.setItem("adminKey",c),t.value=!0):(console.warn("⚠️ No valid admin key found!"),t.value=!1)}catch(l){console.error("❌ Login failed:",l.message),alert("Invalid login!")}},i=async()=>{try{await _y(ra),localStorage.removeItem("adminKey"),t.value=!1,console.log("✅ Logged out"),window.location.reload()}catch(o){console.error("❌ Logout failed:",o.message)}},r=o=>{o.ctrlKey&&o.shiftKey&&o.key==="A"&&s()};return Or(()=>{window.addEventListener("keydown",r),n()}),_i(()=>{window.removeEventListener("keydown",r)}),Fs("handleLogout",i),{isAdmin:t}}};function Bb(t,e,n,s,i,r){const o=Qi("Header"),a=Qi("router-view");return fe(),me(Fe,null,[be(o,{isAdmin:s.isAdmin},null,8,["isAdmin"]),be(a)],64)}const jb=bt($b,[["render",Bb]]);/*!
  * vue-router v4.5.0
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const $n=typeof document<"u";function Gf(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Kb(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&Gf(t.default)}const X=Object.assign;function Eo(t,e){const n={};for(const s in e){const i=e[s];n[s]=ct(i)?i.map(t):t(i)}return n}const Ks=()=>{},ct=Array.isArray,qf=/#/g,Gb=/&/g,qb=/\//g,zb=/=/g,Yb=/\?/g,zf=/\+/g,Qb=/%5B/g,Jb=/%5D/g,Yf=/%5E/g,Xb=/%60/g,Qf=/%7B/g,Zb=/%7C/g,Jf=/%7D/g,eC=/%20/g;function gl(t){return encodeURI(""+t).replace(Zb,"|").replace(Qb,"[").replace(Jb,"]")}function tC(t){return gl(t).replace(Qf,"{").replace(Jf,"}").replace(Yf,"^")}function oa(t){return gl(t).replace(zf,"%2B").replace(eC,"+").replace(qf,"%23").replace(Gb,"%26").replace(Xb,"`").replace(Qf,"{").replace(Jf,"}").replace(Yf,"^")}function nC(t){return oa(t).replace(zb,"%3D")}function sC(t){return gl(t).replace(qf,"%23").replace(Yb,"%3F")}function iC(t){return t==null?"":sC(t).replace(qb,"%2F")}function ui(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const rC=/\/$/,oC=t=>t.replace(rC,"");function wo(t,e,n="/"){let s,i={},r="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(s=e.slice(0,l),r=e.slice(l+1,a>-1?a:e.length),i=t(r)),a>-1&&(s=s||e.slice(0,a),o=e.slice(a,e.length)),s=uC(s??e,n),{fullPath:s+(r&&"?")+r+o,path:s,query:i,hash:ui(o)}}function aC(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function au(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function lC(t,e,n){const s=e.matched.length-1,i=n.matched.length-1;return s>-1&&s===i&&hs(e.matched[s],n.matched[i])&&Xf(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function hs(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Xf(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!cC(t[n],e[n]))return!1;return!0}function cC(t,e){return ct(t)?lu(t,e):ct(e)?lu(e,t):t===e}function lu(t,e){return ct(e)?t.length===e.length&&t.every((n,s)=>n===e[s]):t.length===1&&t[0]===e}function uC(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),s=t.split("/"),i=s[s.length-1];(i===".."||i===".")&&s.push("");let r=n.length-1,o,a;for(o=0;o<s.length;o++)if(a=s[o],a!==".")if(a==="..")r>1&&r--;else break;return n.slice(0,r).join("/")+"/"+s.slice(o).join("/")}const jt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var hi;(function(t){t.pop="pop",t.push="push"})(hi||(hi={}));var Gs;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Gs||(Gs={}));function hC(t){if(!t)if($n){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),oC(t)}const dC=/^[^#]+#/;function fC(t,e){return t.replace(dC,"#")+e}function pC(t,e){const n=document.documentElement.getBoundingClientRect(),s=t.getBoundingClientRect();return{behavior:e.behavior,left:s.left-n.left-(e.left||0),top:s.top-n.top-(e.top||0)}}const zr=()=>({left:window.scrollX,top:window.scrollY});function _C(t){let e;if("el"in t){const n=t.el,s=typeof n=="string"&&n.startsWith("#"),i=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;e=pC(i,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function cu(t,e){return(history.state?history.state.position-e:-1)+t}const aa=new Map;function gC(t,e){aa.set(t,e)}function mC(t){const e=aa.get(t);return aa.delete(t),e}let vC=()=>location.protocol+"//"+location.host;function Zf(t,e){const{pathname:n,search:s,hash:i}=e,r=t.indexOf("#");if(r>-1){let a=i.includes(t.slice(r))?t.slice(r).length:1,l=i.slice(a);return l[0]!=="/"&&(l="/"+l),au(l,"")}return au(n,t)+s+i}function yC(t,e,n,s){let i=[],r=[],o=null;const a=({state:d})=>{const _=Zf(t,location),m=n.value,b=e.value;let x=0;if(d){if(n.value=_,e.value=d,o&&o===m){o=null;return}x=b?d.position-b.position:0}else s(_);i.forEach(D=>{D(n.value,m,{delta:x,type:hi.pop,direction:x?x>0?Gs.forward:Gs.back:Gs.unknown})})};function l(){o=n.value}function c(d){i.push(d);const _=()=>{const m=i.indexOf(d);m>-1&&i.splice(m,1)};return r.push(_),_}function u(){const{history:d}=window;d.state&&d.replaceState(X({},d.state,{scroll:zr()}),"")}function h(){for(const d of r)d();r=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:l,listen:c,destroy:h}}function uu(t,e,n,s=!1,i=!1){return{back:t,current:e,forward:n,replaced:s,position:window.history.length,scroll:i?zr():null}}function EC(t){const{history:e,location:n}=window,s={value:Zf(t,n)},i={value:e.state};i.value||r(s.value,{back:null,current:s.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function r(l,c,u){const h=t.indexOf("#"),d=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+l:vC()+t+l;try{e[u?"replaceState":"pushState"](c,"",d),i.value=c}catch(_){console.error(_),n[u?"replace":"assign"](d)}}function o(l,c){const u=X({},e.state,uu(i.value.back,l,i.value.forward,!0),c,{position:i.value.position});r(l,u,!0),s.value=l}function a(l,c){const u=X({},i.value,e.state,{forward:l,scroll:zr()});r(u.current,u,!0);const h=X({},uu(s.value,l,null),{position:u.position+1},c);r(l,h,!1),s.value=l}return{location:s,state:i,push:a,replace:o}}function wC(t){t=hC(t);const e=EC(t),n=yC(t,e.state,e.location,e.replace);function s(r,o=!0){o||n.pauseListeners(),history.go(r)}const i=X({location:"",base:t,go:s,createHref:fC.bind(null,t)},e,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>e.state.value}),i}function IC(t){return typeof t=="string"||t&&typeof t=="object"}function ep(t){return typeof t=="string"||typeof t=="symbol"}const tp=Symbol("");var hu;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(hu||(hu={}));function ds(t,e){return X(new Error,{type:t,[tp]:!0},e)}function St(t,e){return t instanceof Error&&tp in t&&(e==null||!!(t.type&e))}const du="[^/]+?",bC={sensitive:!1,strict:!1,start:!0,end:!0},CC=/[.+*?^${}()[\]/\\]/g;function TC(t,e){const n=X({},bC,e),s=[];let i=n.start?"^":"";const r=[];for(const c of t){const u=c.length?[]:[90];n.strict&&!c.length&&(i+="/");for(let h=0;h<c.length;h++){const d=c[h];let _=40+(n.sensitive?.25:0);if(d.type===0)h||(i+="/"),i+=d.value.replace(CC,"\\$&"),_+=40;else if(d.type===1){const{value:m,repeatable:b,optional:x,regexp:D}=d;r.push({name:m,repeatable:b,optional:x});const N=D||du;if(N!==du){_+=10;try{new RegExp(`(${N})`)}catch(O){throw new Error(`Invalid custom RegExp for param "${m}" (${N}): `+O.message)}}let M=b?`((?:${N})(?:/(?:${N}))*)`:`(${N})`;h||(M=x&&c.length<2?`(?:/${M})`:"/"+M),x&&(M+="?"),i+=M,_+=20,x&&(_+=-8),b&&(_+=-20),N===".*"&&(_+=-50)}u.push(_)}s.push(u)}if(n.strict&&n.end){const c=s.length-1;s[c][s[c].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&!i.endsWith("/")&&(i+="(?:/|$)");const o=new RegExp(i,n.sensitive?"":"i");function a(c){const u=c.match(o),h={};if(!u)return null;for(let d=1;d<u.length;d++){const _=u[d]||"",m=r[d-1];h[m.name]=_&&m.repeatable?_.split("/"):_}return h}function l(c){let u="",h=!1;for(const d of t){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const _ of d)if(_.type===0)u+=_.value;else if(_.type===1){const{value:m,repeatable:b,optional:x}=_,D=m in c?c[m]:"";if(ct(D)&&!b)throw new Error(`Provided param "${m}" is an array but it is not repeatable (* or + modifiers)`);const N=ct(D)?D.join("/"):D;if(!N)if(x)d.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${m}"`);u+=N}}return u||"/"}return{re:o,score:s,keys:r,parse:a,stringify:l}}function SC(t,e){let n=0;for(;n<t.length&&n<e.length;){const s=e[n]-t[n];if(s)return s;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function np(t,e){let n=0;const s=t.score,i=e.score;for(;n<s.length&&n<i.length;){const r=SC(s[n],i[n]);if(r)return r;n++}if(Math.abs(i.length-s.length)===1){if(fu(s))return 1;if(fu(i))return-1}return i.length-s.length}function fu(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const RC={type:0,value:""},AC=/[a-zA-Z0-9_]/;function PC(t){if(!t)return[[]];if(t==="/")return[[RC]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(_){throw new Error(`ERR (${n})/"${c}": ${_}`)}let n=0,s=n;const i=[];let r;function o(){r&&i.push(r),r=[]}let a=0,l,c="",u="";function h(){c&&(n===0?r.push({type:0,value:c}):n===1||n===2||n===3?(r.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function d(){c+=l}for(;a<t.length;){if(l=t[a++],l==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:l==="/"?(c&&h(),o()):l===":"?(h(),n=1):d();break;case 4:d(),n=s;break;case 1:l==="("?n=2:AC.test(l)?d():(h(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:n=3:u+=l;break;case 3:h(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${c}"`),h(),o(),i}function kC(t,e,n){const s=TC(PC(t.path),n),i=X(s,{record:t,parent:e,children:[],alias:[]});return e&&!i.record.aliasOf==!e.record.aliasOf&&e.children.push(i),i}function NC(t,e){const n=[],s=new Map;e=mu({strict:!1,end:!0,sensitive:!1},e);function i(h){return s.get(h)}function r(h,d,_){const m=!_,b=_u(h);b.aliasOf=_&&_.record;const x=mu(e,h),D=[b];if("alias"in h){const O=typeof h.alias=="string"?[h.alias]:h.alias;for(const Q of O)D.push(_u(X({},b,{components:_?_.record.components:b.components,path:Q,aliasOf:_?_.record:b})))}let N,M;for(const O of D){const{path:Q}=O;if(d&&Q[0]!=="/"){const _e=d.record.path,ae=_e[_e.length-1]==="/"?"":"/";O.path=d.record.path+(Q&&ae+Q)}if(N=kC(O,d,x),_?_.alias.push(N):(M=M||N,M!==N&&M.alias.push(N),m&&h.name&&!gu(N)&&o(h.name)),sp(N)&&l(N),b.children){const _e=b.children;for(let ae=0;ae<_e.length;ae++)r(_e[ae],N,_&&_.children[ae])}_=_||N}return M?()=>{o(M)}:Ks}function o(h){if(ep(h)){const d=s.get(h);d&&(s.delete(h),n.splice(n.indexOf(d),1),d.children.forEach(o),d.alias.forEach(o))}else{const d=n.indexOf(h);d>-1&&(n.splice(d,1),h.record.name&&s.delete(h.record.name),h.children.forEach(o),h.alias.forEach(o))}}function a(){return n}function l(h){const d=DC(h,n);n.splice(d,0,h),h.record.name&&!gu(h)&&s.set(h.record.name,h)}function c(h,d){let _,m={},b,x;if("name"in h&&h.name){if(_=s.get(h.name),!_)throw ds(1,{location:h});x=_.record.name,m=X(pu(d.params,_.keys.filter(M=>!M.optional).concat(_.parent?_.parent.keys.filter(M=>M.optional):[]).map(M=>M.name)),h.params&&pu(h.params,_.keys.map(M=>M.name))),b=_.stringify(m)}else if(h.path!=null)b=h.path,_=n.find(M=>M.re.test(b)),_&&(m=_.parse(b),x=_.record.name);else{if(_=d.name?s.get(d.name):n.find(M=>M.re.test(d.path)),!_)throw ds(1,{location:h,currentLocation:d});x=_.record.name,m=X({},d.params,h.params),b=_.stringify(m)}const D=[];let N=_;for(;N;)D.unshift(N.record),N=N.parent;return{name:x,path:b,params:m,matched:D,meta:xC(D)}}t.forEach(h=>r(h));function u(){n.length=0,s.clear()}return{addRoute:r,resolve:c,removeRoute:o,clearRoutes:u,getRoutes:a,getRecordMatcher:i}}function pu(t,e){const n={};for(const s of e)s in t&&(n[s]=t[s]);return n}function _u(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:OC(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function OC(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const s in t.components)e[s]=typeof n=="object"?n[s]:n;return e}function gu(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function xC(t){return t.reduce((e,n)=>X(e,n.meta),{})}function mu(t,e){const n={};for(const s in t)n[s]=s in e?e[s]:t[s];return n}function DC(t,e){let n=0,s=e.length;for(;n!==s;){const r=n+s>>1;np(t,e[r])<0?s=r:n=r+1}const i=MC(t);return i&&(s=e.lastIndexOf(i,s-1)),s}function MC(t){let e=t;for(;e=e.parent;)if(sp(e)&&np(t,e)===0)return e}function sp({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function LC(t){const e={};if(t===""||t==="?")return e;const s=(t[0]==="?"?t.slice(1):t).split("&");for(let i=0;i<s.length;++i){const r=s[i].replace(zf," "),o=r.indexOf("="),a=ui(o<0?r:r.slice(0,o)),l=o<0?null:ui(r.slice(o+1));if(a in e){let c=e[a];ct(c)||(c=e[a]=[c]),c.push(l)}else e[a]=l}return e}function vu(t){let e="";for(let n in t){const s=t[n];if(n=nC(n),s==null){s!==void 0&&(e+=(e.length?"&":"")+n);continue}(ct(s)?s.map(r=>r&&oa(r)):[s&&oa(s)]).forEach(r=>{r!==void 0&&(e+=(e.length?"&":"")+n,r!=null&&(e+="="+r))})}return e}function FC(t){const e={};for(const n in t){const s=t[n];s!==void 0&&(e[n]=ct(s)?s.map(i=>i==null?null:""+i):s==null?s:""+s)}return e}const UC=Symbol(""),yu=Symbol(""),Yr=Symbol(""),ip=Symbol(""),la=Symbol("");function As(){let t=[];function e(s){return t.push(s),()=>{const i=t.indexOf(s);i>-1&&t.splice(i,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function qt(t,e,n,s,i,r=o=>o()){const o=s&&(s.enterCallbacks[i]=s.enterCallbacks[i]||[]);return()=>new Promise((a,l)=>{const c=d=>{d===!1?l(ds(4,{from:n,to:e})):d instanceof Error?l(d):IC(d)?l(ds(2,{from:e,to:d})):(o&&s.enterCallbacks[i]===o&&typeof d=="function"&&o.push(d),a())},u=r(()=>t.call(s&&s.instances[i],e,n,c));let h=Promise.resolve(u);t.length<3&&(h=h.then(c)),h.catch(d=>l(d))})}function Io(t,e,n,s,i=r=>r()){const r=[];for(const o of t)for(const a in o.components){let l=o.components[a];if(!(e!=="beforeRouteEnter"&&!o.instances[a]))if(Gf(l)){const u=(l.__vccOpts||l)[e];u&&r.push(qt(u,n,s,o,a,i))}else{let c=l();r.push(()=>c.then(u=>{if(!u)throw new Error(`Couldn't resolve component "${a}" at "${o.path}"`);const h=Kb(u)?u.default:u;o.mods[a]=u,o.components[a]=h;const _=(h.__vccOpts||h)[e];return _&&qt(_,n,s,o,a,i)()}))}}return r}function Eu(t){const e=ot(Yr),n=ot(ip),s=et(()=>{const l=Yn(t.to);return e.resolve(l)}),i=et(()=>{const{matched:l}=s.value,{length:c}=l,u=l[c-1],h=n.matched;if(!u||!h.length)return-1;const d=h.findIndex(hs.bind(null,u));if(d>-1)return d;const _=wu(l[c-2]);return c>1&&wu(u)===_&&h[h.length-1].path!==_?h.findIndex(hs.bind(null,l[c-2])):d}),r=et(()=>i.value>-1&&BC(n.params,s.value.params)),o=et(()=>i.value>-1&&i.value===n.matched.length-1&&Xf(n.params,s.value.params));function a(l={}){if($C(l)){const c=e[Yn(t.replace)?"replace":"push"](Yn(t.to)).catch(Ks);return t.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>c),c}return Promise.resolve()}return{route:s,href:et(()=>s.value.href),isActive:r,isExactActive:o,navigate:a}}function HC(t){return t.length===1?t[0]:t}const WC=nh({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Eu,setup(t,{slots:e}){const n=Pr(Eu(t)),{options:s}=ot(Yr),i=et(()=>({[Iu(t.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[Iu(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const r=e.default&&HC(e.default(n));return t.custom?r:Ah("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},r)}}}),VC=WC;function $C(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function BC(t,e){for(const n in e){const s=e[n],i=t[n];if(typeof s=="string"){if(s!==i)return!1}else if(!ct(i)||i.length!==s.length||s.some((r,o)=>r!==i[o]))return!1}return!0}function wu(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Iu=(t,e,n)=>t??e??n,jC=nh({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const s=ot(la),i=et(()=>t.route||s.value),r=ot(yu,0),o=et(()=>{let c=Yn(r);const{matched:u}=i.value;let h;for(;(h=u[c])&&!h.components;)c++;return c}),a=et(()=>i.value.matched[o.value]);Fs(yu,et(()=>o.value+1)),Fs(UC,a),Fs(la,i);const l=bn();return Fi(()=>[l.value,a.value,t.name],([c,u,h],[d,_,m])=>{u&&(u.instances[h]=c,_&&_!==u&&c&&c===d&&(u.leaveGuards.size||(u.leaveGuards=_.leaveGuards),u.updateGuards.size||(u.updateGuards=_.updateGuards))),c&&u&&(!_||!hs(u,_)||!d)&&(u.enterCallbacks[h]||[]).forEach(b=>b(c))},{flush:"post"}),()=>{const c=i.value,u=t.name,h=a.value,d=h&&h.components[u];if(!d)return bu(n.default,{Component:d,route:c});const _=h.props[u],m=_?_===!0?c.params:typeof _=="function"?_(c):_:null,x=Ah(d,X({},m,e,{onVnodeUnmounted:D=>{D.component.isUnmounted&&(h.instances[u]=null)},ref:l}));return bu(n.default,{Component:x,route:c})||x}}});function bu(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const KC=jC;function GC(t){const e=NC(t.routes,t),n=t.parseQuery||LC,s=t.stringifyQuery||vu,i=t.history,r=As(),o=As(),a=As(),l=Up(jt);let c=jt;$n&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Eo.bind(null,y=>""+y),h=Eo.bind(null,iC),d=Eo.bind(null,ui);function _(y,k){let A,L;return ep(y)?(A=e.getRecordMatcher(y),L=k):L=y,e.addRoute(L,A)}function m(y){const k=e.getRecordMatcher(y);k&&e.removeRoute(k)}function b(){return e.getRoutes().map(y=>y.record)}function x(y){return!!e.getRecordMatcher(y)}function D(y,k){if(k=X({},k||l.value),typeof y=="string"){const g=wo(n,y,k.path),v=e.resolve({path:g.path},k),w=i.createHref(g.fullPath);return X(g,v,{params:d(v.params),hash:ui(g.hash),redirectedFrom:void 0,href:w})}let A;if(y.path!=null)A=X({},y,{path:wo(n,y.path,k.path).path});else{const g=X({},y.params);for(const v in g)g[v]==null&&delete g[v];A=X({},y,{params:h(g)}),k.params=h(k.params)}const L=e.resolve(A,k),ie=y.hash||"";L.params=u(d(L.params));const f=aC(s,X({},y,{hash:tC(ie),path:L.path})),p=i.createHref(f);return X({fullPath:f,hash:ie,query:s===vu?FC(y.query):y.query||{}},L,{redirectedFrom:void 0,href:p})}function N(y){return typeof y=="string"?wo(n,y,l.value.path):X({},y)}function M(y,k){if(c!==y)return ds(8,{from:k,to:y})}function O(y){return ae(y)}function Q(y){return O(X(N(y),{replace:!0}))}function _e(y){const k=y.matched[y.matched.length-1];if(k&&k.redirect){const{redirect:A}=k;let L=typeof A=="function"?A(y):A;return typeof L=="string"&&(L=L.includes("?")||L.includes("#")?L=N(L):{path:L},L.params={}),X({query:y.query,hash:y.hash,params:L.path!=null?{}:y.params},L)}}function ae(y,k){const A=c=D(y),L=l.value,ie=y.state,f=y.force,p=y.replace===!0,g=_e(A);if(g)return ae(X(N(g),{state:typeof g=="object"?X({},ie,g.state):ie,force:f,replace:p}),k||A);const v=A;v.redirectedFrom=k;let w;return!f&&lC(s,L,A)&&(w=ds(16,{to:v,from:L}),ht(L,L,!0,!1)),(w?Promise.resolve(w):Qe(v,L)).catch(E=>St(E)?St(E,2)?E:$t(E):J(E,v,L)).then(E=>{if(E){if(St(E,2))return ae(X({replace:p},N(E.to),{state:typeof E.to=="object"?X({},ie,E.to.state):ie,force:f}),k||v)}else E=pn(v,L,!0,p,ie);return Vt(v,L,E),E})}function ze(y,k){const A=M(y,k);return A?Promise.reject(A):Promise.resolve()}function Ye(y){const k=Un.values().next().value;return k&&typeof k.runWithContext=="function"?k.runWithContext(y):y()}function Qe(y,k){let A;const[L,ie,f]=qC(y,k);A=Io(L.reverse(),"beforeRouteLeave",y,k);for(const g of L)g.leaveGuards.forEach(v=>{A.push(qt(v,y,k))});const p=ze.bind(null,y,k);return A.push(p),Je(A).then(()=>{A=[];for(const g of r.list())A.push(qt(g,y,k));return A.push(p),Je(A)}).then(()=>{A=Io(ie,"beforeRouteUpdate",y,k);for(const g of ie)g.updateGuards.forEach(v=>{A.push(qt(v,y,k))});return A.push(p),Je(A)}).then(()=>{A=[];for(const g of f)if(g.beforeEnter)if(ct(g.beforeEnter))for(const v of g.beforeEnter)A.push(qt(v,y,k));else A.push(qt(g.beforeEnter,y,k));return A.push(p),Je(A)}).then(()=>(y.matched.forEach(g=>g.enterCallbacks={}),A=Io(f,"beforeRouteEnter",y,k,Ye),A.push(p),Je(A))).then(()=>{A=[];for(const g of o.list())A.push(qt(g,y,k));return A.push(p),Je(A)}).catch(g=>St(g,8)?g:Promise.reject(g))}function Vt(y,k,A){a.list().forEach(L=>Ye(()=>L(y,k,A)))}function pn(y,k,A,L,ie){const f=M(y,k);if(f)return f;const p=k===jt,g=$n?history.state:{};A&&(L||p?i.replace(y.fullPath,X({scroll:p&&g&&g.scroll},ie)):i.push(y.fullPath,ie)),l.value=y,ht(y,k,A,p),$t()}let ut;function Es(){ut||(ut=i.listen((y,k,A)=>{if(!Ai.listening)return;const L=D(y),ie=_e(L);if(ie){ae(X(ie,{replace:!0,force:!0}),L).catch(Ks);return}c=L;const f=l.value;$n&&gC(cu(f.fullPath,A.delta),zr()),Qe(L,f).catch(p=>St(p,12)?p:St(p,2)?(ae(X(N(p.to),{force:!0}),L).then(g=>{St(g,20)&&!A.delta&&A.type===hi.pop&&i.go(-1,!1)}).catch(Ks),Promise.reject()):(A.delta&&i.go(-A.delta,!1),J(p,L,f))).then(p=>{p=p||pn(L,f,!1),p&&(A.delta&&!St(p,8)?i.go(-A.delta,!1):A.type===hi.pop&&St(p,20)&&i.go(-1,!1)),Vt(L,f,p)}).catch(Ks)}))}let Ln=As(),Ee=As(),ne;function J(y,k,A){$t(y);const L=Ee.list();return L.length?L.forEach(ie=>ie(y,k,A)):console.error(y),Promise.reject(y)}function Ct(){return ne&&l.value!==jt?Promise.resolve():new Promise((y,k)=>{Ln.add([y,k])})}function $t(y){return ne||(ne=!y,Es(),Ln.list().forEach(([k,A])=>y?A(y):k()),Ln.reset()),y}function ht(y,k,A,L){const{scrollBehavior:ie}=t;if(!$n||!ie)return Promise.resolve();const f=!A&&mC(cu(y.fullPath,0))||(L||!A)&&history.state&&history.state.scroll||null;return Ju().then(()=>ie(y,k,f)).then(p=>p&&_C(p)).catch(p=>J(p,y,k))}const Me=y=>i.go(y);let Fn;const Un=new Set,Ai={currentRoute:l,listening:!0,addRoute:_,removeRoute:m,clearRoutes:e.clearRoutes,hasRoute:x,getRoutes:b,resolve:D,options:t,push:O,replace:Q,go:Me,back:()=>Me(-1),forward:()=>Me(1),beforeEach:r.add,beforeResolve:o.add,afterEach:a.add,onError:Ee.add,isReady:Ct,install(y){const k=this;y.component("RouterLink",VC),y.component("RouterView",KC),y.config.globalProperties.$router=k,Object.defineProperty(y.config.globalProperties,"$route",{enumerable:!0,get:()=>Yn(l)}),$n&&!Fn&&l.value===jt&&(Fn=!0,O(i.location).catch(ie=>{}));const A={};for(const ie in jt)Object.defineProperty(A,ie,{get:()=>l.value[ie],enumerable:!0});y.provide(Yr,k),y.provide(ip,Gu(A)),y.provide(la,l);const L=y.unmount;Un.add(y),y.unmount=function(){Un.delete(y),Un.size<1&&(c=jt,ut&&ut(),ut=null,l.value=jt,Fn=!1,ne=!1),L()}}};function Je(y){return y.reduce((k,A)=>k.then(()=>Ye(A)),Promise.resolve())}return Ai}function qC(t,e){const n=[],s=[],i=[],r=Math.max(e.matched.length,t.matched.length);for(let o=0;o<r;o++){const a=e.matched[o];a&&(t.matched.find(c=>hs(c,a))?s.push(a):n.push(a));const l=t.matched[o];l&&(e.matched.find(c=>hs(c,l))||i.push(l))}return[n,s,i]}function zC(){return ot(Yr)}const YC={setup(){const t=bn([{id:"slide-1",src:new URL("/assets/bambus-Cq-P30Jf.jpg",import.meta.url).href,alt:"Bambus"},{id:"slide-2",src:new URL("/assets/buda-Ba4C0aRx.jpg",import.meta.url).href,alt:"Buda"},{id:"slide-3",src:new URL("/assets/kivid-7CqTXCf7.jpg",import.meta.url).href,alt:"Buda"},{id:"slide-4",src:new URL("/assets/murr-DRfTp5MN.jpg",import.meta.url).href,alt:"Buda"},{id:"slide-5",src:new URL("/assets/jooga-9wdEOs4G.jpg",import.meta.url).href,alt:"Buda"},{id:"slide-6",src:new URL("/assets/tee-CQdvF3Kn.jpg",import.meta.url).href,alt:"Buda"}]),e=bn(0),n=bn(null),s=()=>{if(!n.value)return;const r=n.value.scrollLeft,o=n.value.clientWidth,a=Math.round(r/o);a!==e.value&&(e.value=a)},i=r=>{if(n.value){const o=n.value.clientWidth;n.value.scrollTo({left:r*o,behavior:"smooth"}),setTimeout(()=>{e.value=r},300)}};return Or(()=>{n.value&&n.value.addEventListener("scroll",s)}),_i(()=>{n.value&&n.value.removeEventListener("scroll",s)}),{images:t,currentIndex:e,slider:n,scrollToImage:i}}},QC={class:"slideshow"},JC={class:"slider-wrapper"},XC=["src","alt"],ZC={class:"slider-nav"},eT=["onClick"];function tT(t,e,n,s,i,r){return fe(),me("section",QC,[H("div",JC,[H("div",{class:"slider",ref:"slider",onScroll:e[0]||(e[0]=(...o)=>t.updateCurrentIndex&&t.updateCurrentIndex(...o))},[(fe(!0),me(Fe,null,ko(s.images,(o,a)=>(fe(),me("img",{key:a,src:o.src,alt:o.alt,draggable:"false"},null,8,XC))),128))],544),H("div",ZC,[(fe(!0),me(Fe,null,ko(s.images,(o,a)=>(fe(),me("a",{key:a,onClick:Nh(l=>s.scrollToImage(a),["prevent"]),class:fi({active:s.currentIndex===a})},null,10,eT))),128))])])])}const nT=bt(YC,[["render",tT],["__scopeId","data-v-62c0c445"]]),sT={components:{Slider:nT}};function iT(t,e,n,s,i,r){const o=Qi("Slider");return fe(),me(Fe,null,[e[0]||(e[0]=H("div",{class:"intro"},[H("p",null,"Lorem ipsum..."),H("p",null,"Lorem ipsum..."),H("p",null,"Lorem ipsum...")],-1)),be(o),e[1]||(e[1]=H("footer",null,[H("h3",null,"©Terindo"),H("p",null,"terje@terindo.ee")],-1))],64)}const rT=bt(sT,[["render",iT]]),oT={name:"Admin",data(){return{email:"",password:"",errorMessage:""}},setup(){return{router:zC()}},methods:{async login(){try{const e=(await vd(ra,this.email,this.password)).user;localStorage.setItem("isAdmin","true"),this.router.push("/regstr")}catch(t){this.errorMessage=t.message,console.error("Login failed:",t.message)}}}},aT={key:0,style:{color:"red"}};function lT(t,e,n,s,i,r){return fe(),me("div",null,[e[6]||(e[6]=H("h1",null,"Admin Login",-1)),H("form",{onSubmit:e[2]||(e[2]=Nh((...o)=>r.login&&r.login(...o),["prevent"]))},[e[3]||(e[3]=H("label",{for:"email"},"Email:",-1)),Po(H("input",{type:"email","onUpdate:modelValue":e[0]||(e[0]=o=>i.email=o),required:""},null,512),[[zl,i.email]]),e[4]||(e[4]=H("label",{for:"password"},"Password:",-1)),Po(H("input",{type:"password","onUpdate:modelValue":e[1]||(e[1]=o=>i.password=o),required:""},null,512),[[zl,i.password]]),e[5]||(e[5]=H("button",{type:"submit"},"Login",-1)),i.errorMessage?(fe(),me("p",aT,pa(i.errorMessage),1)):Lo("",!0)],32)])}const cT=bt(oT,[["render",lT]]),uT={name:"Termas"},hT={class:"termas"};function dT(t,e,n,s,i,r){return fe(),me("div",hT,e[0]||(e[0]=[H("h1",null,"Teraapiad-massaažid",-1),H("div",{class:"intro"},[H("p",null,"Shindo Massaaž"),H("p",null,"MER massaaž"),H("p",null,"Lomi-Lomi Nui massaaž"),H("p",null,"Ki-Shiatsu teraapia")],-1)]))}const fT=bt(uT,[["render",dT],["__scopeId","data-v-2861752d"]]),pT={name:"Shindo"},_T={class:"shindo"};function gT(t,e,n,s,i,r){return fe(),me("div",_T,e[0]||(e[0]=[H("h1",null,"Shindo",-1),H("div",{class:"intro"},[H("p",null,"Shindo venitused koos toetava massaažiga - rühmatreeningud"),H("p",{class:"shp"},"E Tervisekliinik, Õie 37, Tallinn kl 17:45"),H("p",{class:"shp"},"T FunjaZen Stuudio, Vabaduse pst 128 kl 17:45"),H("p",{class:"shp"},"K Keila Teraapiakeskus, Keskväljak 7, Keila kl 17:30"),H("p",null,[Cn("Shindo venitused koos toetava massaažiga – privaattund"),H("br"),Cn(" Aeg ja koht kokkuleppel ")]),H("p",null,"Shindo venitused koos toetava massaažiga – paaridele – kasulik ja meeldiv koostegemine 😊")],-1)]))}const mT=bt(pT,[["render",gT],["__scopeId","data-v-63815e87"]]),vT={name:"Hinnakiri"},yT={class:"hinnakiri"};function ET(t,e,n,s,i,r){return fe(),me("div",yT,e[0]||(e[0]=[V_('<h1 data-v-b608fe8f>Hinnakiri</h1><div class="intro" data-v-b608fe8f><table data-v-b608fe8f><tr data-v-b608fe8f><th data-v-b608fe8f>Teenus</th><th data-v-b608fe8f>EUR</th></tr><tr data-v-b608fe8f><td data-v-b608fe8f>Shindo massaaž</td><td data-v-b608fe8f>60</td></tr><tr data-v-b608fe8f><td data-v-b608fe8f>MER</td><td data-v-b608fe8f>70</td></tr><tr data-v-b608fe8f><td data-v-b608fe8f>Ki-Shiatsu</td><td data-v-b608fe8f>60</td></tr><tr data-v-b608fe8f><td data-v-b608fe8f>Lomi-Lomi Nui</td><td data-v-b608fe8f>75</td></tr><tr data-v-b608fe8f><td data-v-b608fe8f>Rühmatund</td><td data-v-b608fe8f>10</td></tr><tr data-v-b608fe8f><td data-v-b608fe8f>Privaattund</td><td data-v-b608fe8f>40</td></tr></table><p id="rt5" data-v-b608fe8f>Rühmatunni 5 korra kaart - 45eur</p></div>',2)]))}const wT=bt(vT,[["render",ET],["__scopeId","data-v-b608fe8f"]]),IT={name:"Minust"},bT={class:"minust"};function CT(t,e,n,s,i,r){return fe(),me("div",bT,e[0]||(e[0]=[H("h1",null,"Minust",-1),H("div",{class:"intro"},[H("p",null,"😊")],-1)]))}const TT=bt(IT,[["render",CT],["__scopeId","data-v-6ddd15b3"]]),ST={name:"Kontakt"},RT={class:"kontakt"};function AT(t,e,n,s,i,r){return fe(),me("div",RT,e[0]||(e[0]=[H("h1",null,"Kontakt",-1),H("div",{class:"intro"},[H("p",null,[H("strong",null,"Kontakt:")]),H("p",null,"Terindo OÜ"),H("p",null,[Cn("Email: "),H("a",{href:"mailto:terje.loorits@gmail.com"},"terje.loorits@gmail.com")]),H("p",null,"Kodusalong: Sulevi, Kasemetsa küla, Saku vald"),H("p",null,"*LHV pank kontonumber*")],-1)]))}const PT=bt(ST,[["render",AT],["__scopeId","data-v-5ee276ca"]]),kT=[{path:"/",component:rT},{path:"/admin",component:cT},{path:"/termas",name:"termas",component:fT},{path:"/shindo",name:"shindo",component:mT},{path:"/hinnakiri",name:"hinnakiri",component:wT},{path:"/minust",name:"minust",component:TT},{path:"/kontakt",name:"kontakt",component:PT}],NT=GC({history:wC(),routes:kT});Tg(jb).use(NT).mount("#app");
