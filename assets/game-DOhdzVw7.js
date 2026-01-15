import{g as nl}from"./vendor-B--z-fyW.js";var ls,Po;function rl(){return Po||(Po=1,ls=function(n,t,e){if(n==null||t==null)return n;var r=String(n),s=typeof t=="number"?t:parseInt(t,10);if(isNaN(s)||!isFinite(s))return r;var o=r.length;if(o>=s)return r;var a=e==null?"":String(e);a===""&&(a=" ");for(var l=s-o;a.length<l;)a+=a;var h=a.length>l?a.substr(0,l):a;return r+h}),ls}var sl=rl();const hs=nl(sl);var Mt=9e15,Xn=(function(){for(var n=[],t=-323;t<=308;t++)n.push(+("1e"+t));return function(e){return n[e+323]}})(),P=function(n){return n instanceof _e?n:new _e(n)},vt=function(n,t){return new _e().fromMantissaExponent(n,t)},pe=function(n,t){return new _e().fromMantissaExponent_noNormalize(n,t)};function il(n,t,e,r){var s=t.mul(e.pow(r));return _e.floor(n.div(s).mul(e.sub(1)).add(1).log10()/e.log10())}function ol(n,t,e,r){return t.mul(e.pow(r)).mul(_e.sub(1,e.pow(n))).div(_e.sub(1,e))}var _e=(function(){function n(t){this.mantissa=NaN,this.exponent=NaN,t===void 0?(this.m=0,this.e=0):t instanceof n?this.fromDecimal(t):typeof t=="number"?this.fromNumber(t):this.fromString(t)}return Object.defineProperty(n.prototype,"m",{get:function(){return this.mantissa},set:function(t){this.mantissa=t},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"e",{get:function(){return this.exponent},set:function(t){this.exponent=t},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"s",{get:function(){return this.sign()},set:function(t){if(t===0)return this.e=0,void(this.m=0);this.sgn()!==t&&(this.m=-this.m)},enumerable:!1,configurable:!0}),n.fromMantissaExponent=function(t,e){return new n().fromMantissaExponent(t,e)},n.fromMantissaExponent_noNormalize=function(t,e){return new n().fromMantissaExponent_noNormalize(t,e)},n.fromDecimal=function(t){return new n().fromDecimal(t)},n.fromNumber=function(t){return new n().fromNumber(t)},n.fromString=function(t){return new n().fromString(t)},n.fromValue=function(t){return new n().fromValue(t)},n.fromValue_noAlloc=function(t){return t instanceof n?t:new n(t)},n.abs=function(t){return P(t).abs()},n.neg=function(t){return P(t).neg()},n.negate=function(t){return P(t).neg()},n.negated=function(t){return P(t).neg()},n.sign=function(t){return P(t).sign()},n.sgn=function(t){return P(t).sign()},n.round=function(t){return P(t).round()},n.floor=function(t){return P(t).floor()},n.ceil=function(t){return P(t).ceil()},n.trunc=function(t){return P(t).trunc()},n.add=function(t,e){return P(t).add(e)},n.plus=function(t,e){return P(t).add(e)},n.sub=function(t,e){return P(t).sub(e)},n.subtract=function(t,e){return P(t).sub(e)},n.minus=function(t,e){return P(t).sub(e)},n.mul=function(t,e){return P(t).mul(e)},n.multiply=function(t,e){return P(t).mul(e)},n.times=function(t,e){return P(t).mul(e)},n.div=function(t,e){return P(t).div(e)},n.divide=function(t,e){return P(t).div(e)},n.recip=function(t){return P(t).recip()},n.reciprocal=function(t){return P(t).recip()},n.reciprocate=function(t){return P(t).reciprocate()},n.cmp=function(t,e){return P(t).cmp(e)},n.compare=function(t,e){return P(t).cmp(e)},n.eq=function(t,e){return P(t).eq(e)},n.equals=function(t,e){return P(t).eq(e)},n.neq=function(t,e){return P(t).neq(e)},n.notEquals=function(t,e){return P(t).notEquals(e)},n.lt=function(t,e){return P(t).lt(e)},n.lte=function(t,e){return P(t).lte(e)},n.gt=function(t,e){return P(t).gt(e)},n.gte=function(t,e){return P(t).gte(e)},n.max=function(t,e){return P(t).max(e)},n.min=function(t,e){return P(t).min(e)},n.clamp=function(t,e,r){return P(t).clamp(e,r)},n.clampMin=function(t,e){return P(t).clampMin(e)},n.clampMax=function(t,e){return P(t).clampMax(e)},n.cmp_tolerance=function(t,e,r){return P(t).cmp_tolerance(e,r)},n.compare_tolerance=function(t,e,r){return P(t).cmp_tolerance(e,r)},n.eq_tolerance=function(t,e,r){return P(t).eq_tolerance(e,r)},n.equals_tolerance=function(t,e,r){return P(t).eq_tolerance(e,r)},n.neq_tolerance=function(t,e,r){return P(t).neq_tolerance(e,r)},n.notEquals_tolerance=function(t,e,r){return P(t).notEquals_tolerance(e,r)},n.lt_tolerance=function(t,e,r){return P(t).lt_tolerance(e,r)},n.lte_tolerance=function(t,e,r){return P(t).lte_tolerance(e,r)},n.gt_tolerance=function(t,e,r){return P(t).gt_tolerance(e,r)},n.gte_tolerance=function(t,e,r){return P(t).gte_tolerance(e,r)},n.log10=function(t){return P(t).log10()},n.absLog10=function(t){return P(t).absLog10()},n.pLog10=function(t){return P(t).pLog10()},n.log=function(t,e){return P(t).log(e)},n.log2=function(t){return P(t).log2()},n.ln=function(t){return P(t).ln()},n.logarithm=function(t,e){return P(t).logarithm(e)},n.pow10=function(t){return Number.isInteger(t)?pe(1,t):vt(Math.pow(10,t%1),Math.trunc(t))},n.pow=function(t,e){return typeof t=="number"&&t===10&&typeof e=="number"&&Number.isInteger(e)?pe(1,e):P(t).pow(e)},n.exp=function(t){return P(t).exp()},n.sqr=function(t){return P(t).sqr()},n.sqrt=function(t){return P(t).sqrt()},n.cube=function(t){return P(t).cube()},n.cbrt=function(t){return P(t).cbrt()},n.dp=function(t){return P(t).dp()},n.decimalPlaces=function(t){return P(t).dp()},n.affordGeometricSeries=function(t,e,r,s){return il(P(t),P(e),P(r),s)},n.sumGeometricSeries=function(t,e,r,s){return ol(t,P(e),P(r),s)},n.affordArithmeticSeries=function(t,e,r,s){return(function(o,a,l,h){var d=a.add(h.mul(l)).sub(l.div(2)),m=d.pow(2);return d.neg().add(m.add(l.mul(o).mul(2)).sqrt()).div(l).floor()})(P(t),P(e),P(r),P(s))},n.sumArithmeticSeries=function(t,e,r,s){return(function(o,a,l,h){var d=a.add(h.mul(l));return o.div(2).mul(d.mul(2).plus(o.sub(1).mul(l)))})(P(t),P(e),P(r),P(s))},n.efficiencyOfPurchase=function(t,e,r){return(function(s,o,a){return s.div(o).add(s.div(a))})(P(t),P(e),P(r))},n.randomDecimalForTesting=function(t){if(20*Math.random()<1)return pe(0,0);var e=10*Math.random();10*Math.random()<1&&(e=Math.round(e)),e*=Math.sign(2*Math.random()-1);var r=Math.floor(Math.random()*t*2)-t;return vt(e,r)},n.prototype.normalize=function(){if(this.m>=1&&this.m<10)return this;if(this.m===0)return this.m=0,this.e=0,this;var t=Math.floor(Math.log10(Math.abs(this.m)));return this.m=t===-324?10*this.m/1e-323:this.m/Xn(t),this.e+=t,this},n.prototype.fromMantissaExponent=function(t,e){return isFinite(t)&&isFinite(e)?(this.m=t,this.e=e,this.normalize(),this):(t=Number.NaN,e=Number.NaN,this)},n.prototype.fromMantissaExponent_noNormalize=function(t,e){return this.m=t,this.e=e,this},n.prototype.fromDecimal=function(t){return this.m=t.m,this.e=t.e,this},n.prototype.fromNumber=function(t){return isNaN(t)?(this.m=Number.NaN,this.e=Number.NaN):t===Number.POSITIVE_INFINITY?(this.m=1,this.e=Mt):t===Number.NEGATIVE_INFINITY?(this.m=-1,this.e=Mt):t===0?(this.m=0,this.e=0):(this.e=Math.floor(Math.log10(Math.abs(t))),this.m=this.e===-324?10*t/1e-323:t/Xn(this.e),this.normalize()),this},n.prototype.fromString=function(t){if(t.indexOf("e")!==-1){var e=t.split("e");this.m=parseFloat(e[0]),this.e=parseFloat(e[1]),this.normalize()}else if(t==="NaN")this.m=Number.NaN,this.e=Number.NaN;else if(this.fromNumber(parseFloat(t)),isNaN(this.m))throw Error("[DecimalError] Invalid argument: "+t);return this},n.prototype.fromValue=function(t){return t instanceof n?this.fromDecimal(t):typeof t=="number"?this.fromNumber(t):typeof t=="string"?this.fromString(t):(this.m=0,this.e=0,this)},n.prototype.toNumber=function(){if(!isFinite(this.e))return Number.NaN;if(this.e>308)return this.m>0?Number.POSITIVE_INFINITY:Number.NEGATIVE_INFINITY;if(this.e<-324)return 0;if(this.e===-324)return this.m>0?5e-324:-5e-324;var t=this.m*Xn(this.e);if(!isFinite(t)||this.e<0)return t;var e=Math.round(t);return Math.abs(e-t)<1e-10?e:t},n.prototype.mantissaWithDecimalPlaces=function(t){if(isNaN(this.m)||isNaN(this.e))return Number.NaN;if(this.m===0)return 0;var e=t+1,r=Math.ceil(Math.log10(Math.abs(this.m))),s=Math.round(this.m*Math.pow(10,e-r))*Math.pow(10,r-e);return parseFloat(s.toFixed(Math.max(e-r,0)))},n.prototype.toString=function(){return isNaN(this.m)||isNaN(this.e)?"NaN":this.e>=Mt?this.m>0?"Infinity":"-Infinity":this.e<=-Mt||this.m===0?"0":this.e<21&&this.e>-7?this.toNumber().toString():this.m+"e"+(this.e>=0?"+":"")+this.e},n.prototype.toExponential=function(t){if(isNaN(this.m)||isNaN(this.e))return"NaN";if(this.e>=Mt)return this.m>0?"Infinity":"-Infinity";if(this.e<=-Mt||this.m===0)return"0"+(t>0?hs(".",t+1,"0"):"")+"e+0";if(this.e>-324&&this.e<308)return this.toNumber().toExponential(t);isFinite(t)||(t=17);var e=t+1,r=Math.max(1,Math.ceil(Math.log10(Math.abs(this.m))));return(Math.round(this.m*Math.pow(10,e-r))*Math.pow(10,r-e)).toFixed(Math.max(e-r,0))+"e"+(this.e>=0?"+":"")+this.e},n.prototype.toFixed=function(t){return isNaN(this.m)||isNaN(this.e)?"NaN":this.e>=Mt?this.m>0?"Infinity":"-Infinity":this.e<=-Mt||this.m===0?"0"+(t>0?hs(".",t+1,"0"):""):this.e>=17?this.m.toString().replace(".","").padEnd(this.e+1,"0")+(t>0?hs(".",t+1,"0"):""):this.toNumber().toFixed(t)},n.prototype.toPrecision=function(t){return this.e<=-7?this.toExponential(t-1):t>this.e?this.toFixed(t-this.e-1):this.toExponential(t-1)},n.prototype.valueOf=function(){return this.toString()},n.prototype.toJSON=function(){return this.toString()},n.prototype.toStringWithDecimalPlaces=function(t){return this.toExponential(t)},n.prototype.abs=function(){return pe(Math.abs(this.m),this.e)},n.prototype.neg=function(){return pe(-this.m,this.e)},n.prototype.negate=function(){return this.neg()},n.prototype.negated=function(){return this.neg()},n.prototype.sign=function(){return Math.sign(this.m)},n.prototype.sgn=function(){return this.sign()},n.prototype.round=function(){return this.e<-1?new n(0):this.e<17?new n(Math.round(this.toNumber())):this},n.prototype.floor=function(){return this.e<-1?Math.sign(this.m)>=0?new n(0):new n(-1):this.e<17?new n(Math.floor(this.toNumber())):this},n.prototype.ceil=function(){return this.e<-1?Math.sign(this.m)>0?new n(1):new n(0):this.e<17?new n(Math.ceil(this.toNumber())):this},n.prototype.trunc=function(){return this.e<0?new n(0):this.e<17?new n(Math.trunc(this.toNumber())):this},n.prototype.add=function(t){var e,r,s=P(t);if(this.m===0)return s;if(s.m===0)return this;if(this.e>=s.e?(e=this,r=s):(e=s,r=this),e.e-r.e>17)return e;var o=Math.round(1e14*e.m+1e14*r.m*Xn(r.e-e.e));return vt(o,e.e-14)},n.prototype.plus=function(t){return this.add(t)},n.prototype.sub=function(t){return this.add(P(t).neg())},n.prototype.subtract=function(t){return this.sub(t)},n.prototype.minus=function(t){return this.sub(t)},n.prototype.mul=function(t){if(typeof t=="number")return t<1e307&&t>-1e307?vt(this.m*t,this.e):vt(1e-307*this.m*t,this.e+307);var e=typeof t=="string"?new n(t):t;return vt(this.m*e.m,this.e+e.e)},n.prototype.multiply=function(t){return this.mul(t)},n.prototype.times=function(t){return this.mul(t)},n.prototype.div=function(t){return this.mul(P(t).recip())},n.prototype.divide=function(t){return this.div(t)},n.prototype.divideBy=function(t){return this.div(t)},n.prototype.dividedBy=function(t){return this.div(t)},n.prototype.recip=function(){return vt(1/this.m,-this.e)},n.prototype.reciprocal=function(){return this.recip()},n.prototype.reciprocate=function(){return this.recip()},n.prototype.cmp=function(t){var e=P(t);if(this.m===0){if(e.m===0)return 0;if(e.m<0)return 1;if(e.m>0)return-1}if(e.m===0){if(this.m<0)return-1;if(this.m>0)return 1}if(this.m>0)return e.m<0||this.e>e.e?1:this.e<e.e?-1:this.m>e.m?1:this.m<e.m?-1:0;if(this.m<0)return e.m>0||this.e>e.e?-1:this.e<e.e||this.m>e.m?1:this.m<e.m?-1:0;throw Error("Unreachable code")},n.prototype.compare=function(t){return this.cmp(t)},n.prototype.eq=function(t){var e=P(t);return this.e===e.e&&this.m===e.m},n.prototype.equals=function(t){return this.eq(t)},n.prototype.neq=function(t){return!this.eq(t)},n.prototype.notEquals=function(t){return this.neq(t)},n.prototype.lt=function(t){var e=P(t);return this.m===0?e.m>0:e.m===0?this.m<=0:this.e===e.e?this.m<e.m:this.m>0?e.m>0&&this.e<e.e:e.m>0||this.e>e.e},n.prototype.lte=function(t){return!this.gt(t)},n.prototype.gt=function(t){var e=P(t);return this.m===0?e.m<0:e.m===0?this.m>0:this.e===e.e?this.m>e.m:this.m>0?e.m<0||this.e>e.e:e.m<0&&this.e<e.e},n.prototype.gte=function(t){return!this.lt(t)},n.prototype.max=function(t){var e=P(t);return this.lt(e)?e:this},n.prototype.min=function(t){var e=P(t);return this.gt(e)?e:this},n.prototype.clamp=function(t,e){return this.max(t).min(e)},n.prototype.clampMin=function(t){return this.max(t)},n.prototype.clampMax=function(t){return this.min(t)},n.prototype.cmp_tolerance=function(t,e){var r=P(t);return this.eq_tolerance(r,e)?0:this.cmp(r)},n.prototype.compare_tolerance=function(t,e){return this.cmp_tolerance(t,e)},n.prototype.eq_tolerance=function(t,e){var r=P(t);return n.lte(this.sub(r).abs(),n.max(this.abs(),r.abs()).mul(e))},n.prototype.equals_tolerance=function(t,e){return this.eq_tolerance(t,e)},n.prototype.neq_tolerance=function(t,e){return!this.eq_tolerance(t,e)},n.prototype.notEquals_tolerance=function(t,e){return this.neq_tolerance(t,e)},n.prototype.lt_tolerance=function(t,e){var r=P(t);return!this.eq_tolerance(r,e)&&this.lt(r)},n.prototype.lte_tolerance=function(t,e){var r=P(t);return this.eq_tolerance(r,e)||this.lt(r)},n.prototype.gt_tolerance=function(t,e){var r=P(t);return!this.eq_tolerance(r,e)&&this.gt(r)},n.prototype.gte_tolerance=function(t,e){var r=P(t);return this.eq_tolerance(r,e)||this.gt(r)},n.prototype.log10=function(){return this.e+Math.log10(this.m)},n.prototype.absLog10=function(){return this.e+Math.log10(Math.abs(this.m))},n.prototype.pLog10=function(){return this.m<=0||this.e<0?0:this.log10()},n.prototype.log=function(t){return Math.LN10/Math.log(t)*this.log10()},n.prototype.log2=function(){return 3.321928094887362*this.log10()},n.prototype.ln=function(){return 2.302585092994045*this.log10()},n.prototype.logarithm=function(t){return this.log(t)},n.prototype.pow=function(t){var e,r=t instanceof n?t.toNumber():t,s=this.e*r;if(Number.isSafeInteger(s)&&(e=Math.pow(this.m,r),isFinite(e)&&e!==0))return vt(e,s);var o=Math.trunc(s),a=s-o;if(e=Math.pow(10,r*Math.log10(this.m)+a),isFinite(e)&&e!==0)return vt(e,o);var l=n.pow10(r*this.absLog10());return this.sign()===-1?Math.abs(r%2)===1?l.neg():Math.abs(r%2)===0?l:new n(Number.NaN):l},n.prototype.pow_base=function(t){return P(t).pow(this)},n.prototype.factorial=function(){var t=this.toNumber()+1;return n.pow(t/Math.E*Math.sqrt(t*Math.sinh(1/t)+1/(810*Math.pow(t,6))),t).mul(Math.sqrt(2*Math.PI/t))},n.prototype.exp=function(){var t=this.toNumber();return-706<t&&t<709?n.fromNumber(Math.exp(t)):n.pow(Math.E,t)},n.prototype.sqr=function(){return vt(Math.pow(this.m,2),2*this.e)},n.prototype.sqrt=function(){return this.m<0?new n(Number.NaN):this.e%2!=0?vt(3.16227766016838*Math.sqrt(this.m),Math.floor(this.e/2)):vt(Math.sqrt(this.m),Math.floor(this.e/2))},n.prototype.cube=function(){return vt(Math.pow(this.m,3),3*this.e)},n.prototype.cbrt=function(){var t=1,e=this.m;e<0&&(t=-1,e=-e);var r=t*Math.pow(e,1/3),s=this.e%3;return vt(s===1||s===-1?2.154434690031883*r:s!==0?4.641588833612778*r:r,Math.floor(this.e/3))},n.prototype.sinh=function(){return this.exp().sub(this.negate().exp()).div(2)},n.prototype.cosh=function(){return this.exp().add(this.negate().exp()).div(2)},n.prototype.tanh=function(){return this.sinh().div(this.cosh())},n.prototype.asinh=function(){return n.ln(this.add(this.sqr().add(1).sqrt()))},n.prototype.acosh=function(){return n.ln(this.add(this.sqr().sub(1).sqrt()))},n.prototype.atanh=function(){return this.abs().gte(1)?Number.NaN:n.ln(this.add(1).div(new n(1).sub(this)))/2},n.prototype.ascensionPenalty=function(t){return t===0?this:this.pow(Math.pow(10,-t))},n.prototype.egg=function(){return this.add(9)},n.prototype.lessThanOrEqualTo=function(t){return this.cmp(t)<1},n.prototype.lessThan=function(t){return this.cmp(t)<0},n.prototype.greaterThanOrEqualTo=function(t){return this.cmp(t)>-1},n.prototype.greaterThan=function(t){return this.cmp(t)>0},n.prototype.decimalPlaces=function(){return this.dp()},n.prototype.dp=function(){if(!isFinite(this.mantissa))return NaN;if(this.exponent>=17)return 0;for(var t=this.mantissa,e=-this.exponent,r=1;Math.abs(Math.round(t*r)/r-t)>1e-10;)r*=10,e++;return e>0?e:0},Object.defineProperty(n,"MAX_VALUE",{get:function(){return al},enumerable:!1,configurable:!0}),Object.defineProperty(n,"MIN_VALUE",{get:function(){return ul},enumerable:!1,configurable:!0}),Object.defineProperty(n,"NUMBER_MAX_VALUE",{get:function(){return cl},enumerable:!1,configurable:!0}),Object.defineProperty(n,"NUMBER_MIN_VALUE",{get:function(){return ll},enumerable:!1,configurable:!0}),n})(),al=pe(1,Mt),ul=pe(1,-Mt),cl=P(Number.MAX_VALUE),ll=P(Number.MIN_VALUE);const hl=()=>{};var Vo={};/**
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
 */const Ua=function(n){const t=[];let e=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?t[e++]=s:s<2048?(t[e++]=s>>6|192,t[e++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),t[e++]=s>>18|240,t[e++]=s>>12&63|128,t[e++]=s>>6&63|128,t[e++]=s&63|128):(t[e++]=s>>12|224,t[e++]=s>>6&63|128,t[e++]=s&63|128)}return t},fl=function(n){const t=[];let e=0,r=0;for(;e<n.length;){const s=n[e++];if(s<128)t[r++]=String.fromCharCode(s);else if(s>191&&s<224){const o=n[e++];t[r++]=String.fromCharCode((s&31)<<6|o&63)}else if(s>239&&s<365){const o=n[e++],a=n[e++],l=n[e++],h=((s&7)<<18|(o&63)<<12|(a&63)<<6|l&63)-65536;t[r++]=String.fromCharCode(55296+(h>>10)),t[r++]=String.fromCharCode(56320+(h&1023))}else{const o=n[e++],a=n[e++];t[r++]=String.fromCharCode((s&15)<<12|(o&63)<<6|a&63)}}return t.join("")},Ba={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,t){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const e=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const o=n[s],a=s+1<n.length,l=a?n[s+1]:0,h=s+2<n.length,d=h?n[s+2]:0,m=o>>2,I=(o&3)<<4|l>>4;let A=(l&15)<<2|d>>6,V=d&63;h||(V=64,a||(A=64)),r.push(e[m],e[I],e[A],e[V])}return r.join("")},encodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(n):this.encodeByteArray(Ua(n),t)},decodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(n):fl(this.decodeStringToByteArray(n,t))},decodeStringToByteArray(n,t){this.init_();const e=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const o=e[n.charAt(s++)],l=s<n.length?e[n.charAt(s)]:0;++s;const d=s<n.length?e[n.charAt(s)]:64;++s;const I=s<n.length?e[n.charAt(s)]:64;if(++s,o==null||l==null||d==null||I==null)throw new dl;const A=o<<2|l>>4;if(r.push(A),d!==64){const V=l<<4&240|d>>2;if(r.push(V),I!==64){const M=d<<6&192|I;r.push(M)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class dl extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const ml=function(n){const t=Ua(n);return Ba.encodeByteArray(t,!0)},hr=function(n){return ml(n).replace(/\./g,"")},pl=function(n){try{return Ba.decodeString(n,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function gl(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const _l=()=>gl().__FIREBASE_DEFAULTS__,yl=()=>{if(typeof process>"u"||typeof Vo>"u")return;const n=Vo.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},El=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=n&&pl(n[1]);return t&&JSON.parse(t)},js=()=>{try{return hl()||_l()||yl()||El()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Tl=n=>{var t,e;return(e=(t=js())==null?void 0:t.emulatorHosts)==null?void 0:e[n]},Il=n=>{const t=Tl(n);if(!t)return;const e=t.lastIndexOf(":");if(e<=0||e+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(e+1),10);return t[0]==="["?[t.substring(1,e-1),r]:[t.substring(0,e),r]},qa=()=>{var n;return(n=js())==null?void 0:n.config};/**
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
 */class vl{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}wrapCallback(t){return(e,r)=>{e?this.reject(e):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(e):t(e,r))}}}/**
 * @license
 * Copyright 2025 Google LLC
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
 */function $s(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function wl(n){return(await fetch(n,{credentials:"include"})).ok}/**
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
 */function Al(n,t){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const e={alg:"none",type:"JWT"},r=t||"demo-project",s=n.iat||0,o=n.sub||n.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a={iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}},...n};return[hr(JSON.stringify(e)),hr(JSON.stringify(a)),""].join(".")}const gn={};function Rl(){const n={prod:[],emulator:[]};for(const t of Object.keys(gn))gn[t]?n.emulator.push(t):n.prod.push(t);return n}function bl(n){let t=document.getElementById(n),e=!1;return t||(t=document.createElement("div"),t.setAttribute("id",n),e=!0),{created:e,element:t}}let Co=!1;function Sl(n,t){if(typeof window>"u"||typeof document>"u"||!$s(window.location.host)||gn[n]===t||gn[n]||Co)return;gn[n]=t;function e(A){return`__firebase__banner__${A}`}const r="__firebase__banner",o=Rl().prod.length>0;function a(){const A=document.getElementById(r);A&&A.remove()}function l(A){A.style.display="flex",A.style.background="#7faaf0",A.style.position="fixed",A.style.bottom="5px",A.style.left="5px",A.style.padding=".5em",A.style.borderRadius="5px",A.style.alignItems="center"}function h(A,V){A.setAttribute("width","24"),A.setAttribute("id",V),A.setAttribute("height","24"),A.setAttribute("viewBox","0 0 24 24"),A.setAttribute("fill","none"),A.style.marginLeft="-6px"}function d(){const A=document.createElement("span");return A.style.cursor="pointer",A.style.marginLeft="16px",A.style.fontSize="24px",A.innerHTML=" &times;",A.onclick=()=>{Co=!0,a()},A}function m(A,V){A.setAttribute("id",V),A.innerText="Learn more",A.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",A.setAttribute("target","__blank"),A.style.paddingLeft="5px",A.style.textDecoration="underline"}function I(){const A=bl(r),V=e("text"),M=document.getElementById(V)||document.createElement("span"),O=e("learnmore"),k=document.getElementById(O)||document.createElement("a"),K=e("preprendIcon"),G=document.getElementById(K)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(A.created){const Y=A.element;l(Y),m(k,O);const Tt=d();h(G,K),Y.append(G,M,k,Tt),document.body.appendChild(Y)}o?(M.innerText="Preview backend disconnected.",G.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(G.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,M.innerText="Preview backend running in this workspace."),M.setAttribute("id",V)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",I):I()}/**
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
 */function Pl(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Vl(){var t;const n=(t=js())==null?void 0:t.forceEnvironment;if(n==="node")return!0;if(n==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Cl(){return!Vl()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Nl(){try{return typeof indexedDB=="object"}catch{return!1}}function Dl(){return new Promise((n,t)=>{try{let e=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),e||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{e=!1},s.onerror=()=>{var o;t(((o=s.error)==null?void 0:o.message)||"")}}catch(e){t(e)}})}/**
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
 */const Ml="FirebaseError";class $e extends Error{constructor(t,e,r){super(e),this.code=t,this.customData=r,this.name=Ml,Object.setPrototypeOf(this,$e.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ja.prototype.create)}}class ja{constructor(t,e,r){this.service=t,this.serviceName=e,this.errors=r}create(t,...e){const r=e[0]||{},s=`${this.service}/${t}`,o=this.errors[t],a=o?kl(o,r):"Error",l=`${this.serviceName}: ${a} (${s}).`;return new $e(s,l,r)}}function kl(n,t){return n.replace(xl,(e,r)=>{const s=t[r];return s!=null?String(s):`<${r}?>`})}const xl=/\{\$([^}]+)}/g;function fr(n,t){if(n===t)return!0;const e=Object.keys(n),r=Object.keys(t);for(const s of e){if(!r.includes(s))return!1;const o=n[s],a=t[s];if(No(o)&&No(a)){if(!fr(o,a))return!1}else if(o!==a)return!1}for(const s of r)if(!e.includes(s))return!1;return!0}function No(n){return n!==null&&typeof n=="object"}/**
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
 */function Oe(n){return n&&n._delegate?n._delegate:n}class In{constructor(t,e,r){this.name=t,this.instanceFactory=e,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const me="[DEFAULT]";/**
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
 */class Ol{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const r=new vl;if(this.instancesDeferred.set(e,r),this.isInitialized(e)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:e});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(e).promise}getImmediate(t){const e=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),r=(t==null?void 0:t.optional)??!1;if(this.isInitialized(e)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:e})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(Fl(t))try{this.getOrInitializeService({instanceIdentifier:me})}catch{}for(const[e,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(e);try{const o=this.getOrInitializeService({instanceIdentifier:s});r.resolve(o)}catch{}}}}clearInstance(t=me){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...t.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=me){return this.instances.has(t)}getOptions(t=me){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:e});for(const[o,a]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(o);r===l&&a.resolve(s)}return s}onInit(t,e){const r=this.normalizeInstanceIdentifier(e),s=this.onInitCallbacks.get(r)??new Set;s.add(t),this.onInitCallbacks.set(r,s);const o=this.instances.get(r);return o&&t(o,r),()=>{s.delete(t)}}invokeOnInitCallbacks(t,e){const r=this.onInitCallbacks.get(e);if(r)for(const s of r)try{s(t,e)}catch{}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Ll(t),options:e}),this.instances.set(t,r),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=me){return this.component?this.component.multipleInstances?t:me:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Ll(n){return n===me?void 0:n}function Fl(n){return n.instantiationMode==="EAGER"}/**
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
 */class Ul{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new Ol(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var z;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(z||(z={}));const Bl={debug:z.DEBUG,verbose:z.VERBOSE,info:z.INFO,warn:z.WARN,error:z.ERROR,silent:z.SILENT},ql=z.INFO,jl={[z.DEBUG]:"log",[z.VERBOSE]:"log",[z.INFO]:"info",[z.WARN]:"warn",[z.ERROR]:"error"},$l=(n,t,...e)=>{if(t<n.logLevel)return;const r=new Date().toISOString(),s=jl[t];if(s)console[s](`[${r}]  ${n.name}:`,...e);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class $a{constructor(t){this.name=t,this._logLevel=ql,this._logHandler=$l,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in z))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?Bl[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,z.DEBUG,...t),this._logHandler(this,z.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,z.VERBOSE,...t),this._logHandler(this,z.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,z.INFO,...t),this._logHandler(this,z.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,z.WARN,...t),this._logHandler(this,z.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,z.ERROR,...t),this._logHandler(this,z.ERROR,...t)}}const zl=(n,t)=>t.some(e=>n instanceof e);let Do,Mo;function Gl(){return Do||(Do=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Hl(){return Mo||(Mo=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const za=new WeakMap,Is=new WeakMap,Ga=new WeakMap,fs=new WeakMap,zs=new WeakMap;function Kl(n){const t=new Promise((e,r)=>{const s=()=>{n.removeEventListener("success",o),n.removeEventListener("error",a)},o=()=>{e(Yt(n.result)),s()},a=()=>{r(n.error),s()};n.addEventListener("success",o),n.addEventListener("error",a)});return t.then(e=>{e instanceof IDBCursor&&za.set(e,n)}).catch(()=>{}),zs.set(t,n),t}function Wl(n){if(Is.has(n))return;const t=new Promise((e,r)=>{const s=()=>{n.removeEventListener("complete",o),n.removeEventListener("error",a),n.removeEventListener("abort",a)},o=()=>{e(),s()},a=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",o),n.addEventListener("error",a),n.addEventListener("abort",a)});Is.set(n,t)}let vs={get(n,t,e){if(n instanceof IDBTransaction){if(t==="done")return Is.get(n);if(t==="objectStoreNames")return n.objectStoreNames||Ga.get(n);if(t==="store")return e.objectStoreNames[1]?void 0:e.objectStore(e.objectStoreNames[0])}return Yt(n[t])},set(n,t,e){return n[t]=e,!0},has(n,t){return n instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in n}};function Ql(n){vs=n(vs)}function Yl(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...e){const r=n.call(ds(this),t,...e);return Ga.set(r,t.sort?t.sort():[t]),Yt(r)}:Hl().includes(n)?function(...t){return n.apply(ds(this),t),Yt(za.get(this))}:function(...t){return Yt(n.apply(ds(this),t))}}function Jl(n){return typeof n=="function"?Yl(n):(n instanceof IDBTransaction&&Wl(n),zl(n,Gl())?new Proxy(n,vs):n)}function Yt(n){if(n instanceof IDBRequest)return Kl(n);if(fs.has(n))return fs.get(n);const t=Jl(n);return t!==n&&(fs.set(n,t),zs.set(t,n)),t}const ds=n=>zs.get(n);function Xl(n,t,{blocked:e,upgrade:r,blocking:s,terminated:o}={}){const a=indexedDB.open(n,t),l=Yt(a);return r&&a.addEventListener("upgradeneeded",h=>{r(Yt(a.result),h.oldVersion,h.newVersion,Yt(a.transaction),h)}),e&&a.addEventListener("blocked",h=>e(h.oldVersion,h.newVersion,h)),l.then(h=>{o&&h.addEventListener("close",()=>o()),s&&h.addEventListener("versionchange",d=>s(d.oldVersion,d.newVersion,d))}).catch(()=>{}),l}const Zl=["get","getKey","getAll","getAllKeys","count"],th=["put","add","delete","clear"],ms=new Map;function ko(n,t){if(!(n instanceof IDBDatabase&&!(t in n)&&typeof t=="string"))return;if(ms.get(t))return ms.get(t);const e=t.replace(/FromIndex$/,""),r=t!==e,s=th.includes(e);if(!(e in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Zl.includes(e)))return;const o=async function(a,...l){const h=this.transaction(a,s?"readwrite":"readonly");let d=h.store;return r&&(d=d.index(l.shift())),(await Promise.all([d[e](...l),s&&h.done]))[0]};return ms.set(t,o),o}Ql(n=>({...n,get:(t,e,r)=>ko(t,e)||n.get(t,e,r),has:(t,e)=>!!ko(t,e)||n.has(t,e)}));/**
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
 */class eh{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(nh(e)){const r=e.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(e=>e).join(" ")}}function nh(n){const t=n.getComponent();return(t==null?void 0:t.type)==="VERSION"}const ws="@firebase/app",xo="0.14.7";/**
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
 */const Bt=new $a("@firebase/app"),rh="@firebase/app-compat",sh="@firebase/analytics-compat",ih="@firebase/analytics",oh="@firebase/app-check-compat",ah="@firebase/app-check",uh="@firebase/auth",ch="@firebase/auth-compat",lh="@firebase/database",hh="@firebase/data-connect",fh="@firebase/database-compat",dh="@firebase/functions",mh="@firebase/functions-compat",ph="@firebase/installations",gh="@firebase/installations-compat",_h="@firebase/messaging",yh="@firebase/messaging-compat",Eh="@firebase/performance",Th="@firebase/performance-compat",Ih="@firebase/remote-config",vh="@firebase/remote-config-compat",wh="@firebase/storage",Ah="@firebase/storage-compat",Rh="@firebase/firestore",bh="@firebase/ai",Sh="@firebase/firestore-compat",Ph="firebase",Vh="12.8.0";/**
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
 */const As="[DEFAULT]",Ch={[ws]:"fire-core",[rh]:"fire-core-compat",[ih]:"fire-analytics",[sh]:"fire-analytics-compat",[ah]:"fire-app-check",[oh]:"fire-app-check-compat",[uh]:"fire-auth",[ch]:"fire-auth-compat",[lh]:"fire-rtdb",[hh]:"fire-data-connect",[fh]:"fire-rtdb-compat",[dh]:"fire-fn",[mh]:"fire-fn-compat",[ph]:"fire-iid",[gh]:"fire-iid-compat",[_h]:"fire-fcm",[yh]:"fire-fcm-compat",[Eh]:"fire-perf",[Th]:"fire-perf-compat",[Ih]:"fire-rc",[vh]:"fire-rc-compat",[wh]:"fire-gcs",[Ah]:"fire-gcs-compat",[Rh]:"fire-fst",[Sh]:"fire-fst-compat",[bh]:"fire-vertex","fire-js":"fire-js",[Ph]:"fire-js-all"};/**
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
 */const dr=new Map,Nh=new Map,Rs=new Map;function Oo(n,t){try{n.container.addComponent(t)}catch(e){Bt.debug(`Component ${t.name} failed to register with FirebaseApp ${n.name}`,e)}}function mr(n){const t=n.name;if(Rs.has(t))return Bt.debug(`There were multiple attempts to register component ${t}.`),!1;Rs.set(t,n);for(const e of dr.values())Oo(e,n);for(const e of Nh.values())Oo(e,n);return!0}function Dh(n,t){const e=n.container.getProvider("heartbeat").getImmediate({optional:!0});return e&&e.triggerHeartbeat(),n.container.getProvider(t)}function Mh(n){return n==null?!1:n.settings!==void 0}/**
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
 */const kh={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Jt=new ja("app","Firebase",kh);/**
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
 */class xh{constructor(t,e,r){this._isDeleted=!1,this._options={...t},this._config={...e},this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new In("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Jt.create("app-deleted",{appName:this._name})}}/**
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
 */const Oh=Vh;function Lh(n,t={}){let e=n;typeof t!="object"&&(t={name:t});const r={name:As,automaticDataCollectionEnabled:!0,...t},s=r.name;if(typeof s!="string"||!s)throw Jt.create("bad-app-name",{appName:String(s)});if(e||(e=qa()),!e)throw Jt.create("no-options");const o=dr.get(s);if(o){if(fr(e,o.options)&&fr(r,o.config))return o;throw Jt.create("duplicate-app",{appName:s})}const a=new Ul(s);for(const h of Rs.values())a.addComponent(h);const l=new xh(e,r,a);return dr.set(s,l),l}function Fh(n=As){const t=dr.get(n);if(!t&&n===As&&qa())return Lh();if(!t)throw Jt.create("no-app",{appName:n});return t}function Ne(n,t,e){let r=Ch[n]??n;e&&(r+=`-${e}`);const s=r.match(/\s|\//),o=t.match(/\s|\//);if(s||o){const a=[`Unable to register library "${r}" with version "${t}":`];s&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),Bt.warn(a.join(" "));return}mr(new In(`${r}-version`,()=>({library:r,version:t}),"VERSION"))}/**
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
 */const Uh="firebase-heartbeat-database",Bh=1,vn="firebase-heartbeat-store";let ps=null;function Ha(){return ps||(ps=Xl(Uh,Bh,{upgrade:(n,t)=>{switch(t){case 0:try{n.createObjectStore(vn)}catch(e){console.warn(e)}}}}).catch(n=>{throw Jt.create("idb-open",{originalErrorMessage:n.message})})),ps}async function qh(n){try{const e=(await Ha()).transaction(vn),r=await e.objectStore(vn).get(Ka(n));return await e.done,r}catch(t){if(t instanceof $e)Bt.warn(t.message);else{const e=Jt.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});Bt.warn(e.message)}}}async function Lo(n,t){try{const r=(await Ha()).transaction(vn,"readwrite");await r.objectStore(vn).put(t,Ka(n)),await r.done}catch(e){if(e instanceof $e)Bt.warn(e.message);else{const r=Jt.create("idb-set",{originalErrorMessage:e==null?void 0:e.message});Bt.warn(r.message)}}}function Ka(n){return`${n.name}!${n.options.appId}`}/**
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
 */const jh=1024,$h=30;class zh{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new Hh(e),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,e;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=Fo();if(((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(a=>a.date===o))return;if(this._heartbeatsCache.heartbeats.push({date:o,agent:s}),this._heartbeatsCache.heartbeats.length>$h){const a=Kh(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(a,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){Bt.warn(r)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Fo(),{heartbeatsToSend:r,unsentEntries:s}=Gh(this._heartbeatsCache.heartbeats),o=hr(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(e){return Bt.warn(e),""}}}function Fo(){return new Date().toISOString().substring(0,10)}function Gh(n,t=jh){const e=[];let r=n.slice();for(const s of n){const o=e.find(a=>a.agent===s.agent);if(o){if(o.dates.push(s.date),Uo(e)>t){o.dates.pop();break}}else if(e.push({agent:s.agent,dates:[s.date]}),Uo(e)>t){e.pop();break}r=r.slice(1)}return{heartbeatsToSend:e,unsentEntries:r}}class Hh{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Nl()?Dl().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const e=await qh(this.app);return e!=null&&e.heartbeats?e:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){if(await this._canUseIndexedDBPromise){const r=await this.read();return Lo(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){if(await this._canUseIndexedDBPromise){const r=await this.read();return Lo(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...t.heartbeats]})}else return}}function Uo(n){return hr(JSON.stringify({version:2,heartbeats:n})).length}function Kh(n){if(n.length===0)return-1;let t=0,e=n[0].date;for(let r=1;r<n.length;r++)n[r].date<e&&(e=n[r].date,t=r);return t}/**
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
 */function Wh(n){mr(new In("platform-logger",t=>new eh(t),"PRIVATE")),mr(new In("heartbeat",t=>new zh(t),"PRIVATE")),Ne(ws,xo,n),Ne(ws,xo,"esm2020"),Ne("fire-js","")}Wh("");var Qh="firebase",Yh="12.8.0";/**
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
 */Ne(Qh,Yh,"app");var Bo=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Xt,Wa;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(E,p){function _(){}_.prototype=p.prototype,E.F=p.prototype,E.prototype=new _,E.prototype.constructor=E,E.D=function(T,y,w){for(var g=Array(arguments.length-2),It=2;It<arguments.length;It++)g[It-2]=arguments[It];return p.prototype[y].apply(T,g)}}function e(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}t(r,e),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(E,p,_){_||(_=0);const T=Array(16);if(typeof p=="string")for(var y=0;y<16;++y)T[y]=p.charCodeAt(_++)|p.charCodeAt(_++)<<8|p.charCodeAt(_++)<<16|p.charCodeAt(_++)<<24;else for(y=0;y<16;++y)T[y]=p[_++]|p[_++]<<8|p[_++]<<16|p[_++]<<24;p=E.g[0],_=E.g[1],y=E.g[2];let w=E.g[3],g;g=p+(w^_&(y^w))+T[0]+3614090360&4294967295,p=_+(g<<7&4294967295|g>>>25),g=w+(y^p&(_^y))+T[1]+3905402710&4294967295,w=p+(g<<12&4294967295|g>>>20),g=y+(_^w&(p^_))+T[2]+606105819&4294967295,y=w+(g<<17&4294967295|g>>>15),g=_+(p^y&(w^p))+T[3]+3250441966&4294967295,_=y+(g<<22&4294967295|g>>>10),g=p+(w^_&(y^w))+T[4]+4118548399&4294967295,p=_+(g<<7&4294967295|g>>>25),g=w+(y^p&(_^y))+T[5]+1200080426&4294967295,w=p+(g<<12&4294967295|g>>>20),g=y+(_^w&(p^_))+T[6]+2821735955&4294967295,y=w+(g<<17&4294967295|g>>>15),g=_+(p^y&(w^p))+T[7]+4249261313&4294967295,_=y+(g<<22&4294967295|g>>>10),g=p+(w^_&(y^w))+T[8]+1770035416&4294967295,p=_+(g<<7&4294967295|g>>>25),g=w+(y^p&(_^y))+T[9]+2336552879&4294967295,w=p+(g<<12&4294967295|g>>>20),g=y+(_^w&(p^_))+T[10]+4294925233&4294967295,y=w+(g<<17&4294967295|g>>>15),g=_+(p^y&(w^p))+T[11]+2304563134&4294967295,_=y+(g<<22&4294967295|g>>>10),g=p+(w^_&(y^w))+T[12]+1804603682&4294967295,p=_+(g<<7&4294967295|g>>>25),g=w+(y^p&(_^y))+T[13]+4254626195&4294967295,w=p+(g<<12&4294967295|g>>>20),g=y+(_^w&(p^_))+T[14]+2792965006&4294967295,y=w+(g<<17&4294967295|g>>>15),g=_+(p^y&(w^p))+T[15]+1236535329&4294967295,_=y+(g<<22&4294967295|g>>>10),g=p+(y^w&(_^y))+T[1]+4129170786&4294967295,p=_+(g<<5&4294967295|g>>>27),g=w+(_^y&(p^_))+T[6]+3225465664&4294967295,w=p+(g<<9&4294967295|g>>>23),g=y+(p^_&(w^p))+T[11]+643717713&4294967295,y=w+(g<<14&4294967295|g>>>18),g=_+(w^p&(y^w))+T[0]+3921069994&4294967295,_=y+(g<<20&4294967295|g>>>12),g=p+(y^w&(_^y))+T[5]+3593408605&4294967295,p=_+(g<<5&4294967295|g>>>27),g=w+(_^y&(p^_))+T[10]+38016083&4294967295,w=p+(g<<9&4294967295|g>>>23),g=y+(p^_&(w^p))+T[15]+3634488961&4294967295,y=w+(g<<14&4294967295|g>>>18),g=_+(w^p&(y^w))+T[4]+3889429448&4294967295,_=y+(g<<20&4294967295|g>>>12),g=p+(y^w&(_^y))+T[9]+568446438&4294967295,p=_+(g<<5&4294967295|g>>>27),g=w+(_^y&(p^_))+T[14]+3275163606&4294967295,w=p+(g<<9&4294967295|g>>>23),g=y+(p^_&(w^p))+T[3]+4107603335&4294967295,y=w+(g<<14&4294967295|g>>>18),g=_+(w^p&(y^w))+T[8]+1163531501&4294967295,_=y+(g<<20&4294967295|g>>>12),g=p+(y^w&(_^y))+T[13]+2850285829&4294967295,p=_+(g<<5&4294967295|g>>>27),g=w+(_^y&(p^_))+T[2]+4243563512&4294967295,w=p+(g<<9&4294967295|g>>>23),g=y+(p^_&(w^p))+T[7]+1735328473&4294967295,y=w+(g<<14&4294967295|g>>>18),g=_+(w^p&(y^w))+T[12]+2368359562&4294967295,_=y+(g<<20&4294967295|g>>>12),g=p+(_^y^w)+T[5]+4294588738&4294967295,p=_+(g<<4&4294967295|g>>>28),g=w+(p^_^y)+T[8]+2272392833&4294967295,w=p+(g<<11&4294967295|g>>>21),g=y+(w^p^_)+T[11]+1839030562&4294967295,y=w+(g<<16&4294967295|g>>>16),g=_+(y^w^p)+T[14]+4259657740&4294967295,_=y+(g<<23&4294967295|g>>>9),g=p+(_^y^w)+T[1]+2763975236&4294967295,p=_+(g<<4&4294967295|g>>>28),g=w+(p^_^y)+T[4]+1272893353&4294967295,w=p+(g<<11&4294967295|g>>>21),g=y+(w^p^_)+T[7]+4139469664&4294967295,y=w+(g<<16&4294967295|g>>>16),g=_+(y^w^p)+T[10]+3200236656&4294967295,_=y+(g<<23&4294967295|g>>>9),g=p+(_^y^w)+T[13]+681279174&4294967295,p=_+(g<<4&4294967295|g>>>28),g=w+(p^_^y)+T[0]+3936430074&4294967295,w=p+(g<<11&4294967295|g>>>21),g=y+(w^p^_)+T[3]+3572445317&4294967295,y=w+(g<<16&4294967295|g>>>16),g=_+(y^w^p)+T[6]+76029189&4294967295,_=y+(g<<23&4294967295|g>>>9),g=p+(_^y^w)+T[9]+3654602809&4294967295,p=_+(g<<4&4294967295|g>>>28),g=w+(p^_^y)+T[12]+3873151461&4294967295,w=p+(g<<11&4294967295|g>>>21),g=y+(w^p^_)+T[15]+530742520&4294967295,y=w+(g<<16&4294967295|g>>>16),g=_+(y^w^p)+T[2]+3299628645&4294967295,_=y+(g<<23&4294967295|g>>>9),g=p+(y^(_|~w))+T[0]+4096336452&4294967295,p=_+(g<<6&4294967295|g>>>26),g=w+(_^(p|~y))+T[7]+1126891415&4294967295,w=p+(g<<10&4294967295|g>>>22),g=y+(p^(w|~_))+T[14]+2878612391&4294967295,y=w+(g<<15&4294967295|g>>>17),g=_+(w^(y|~p))+T[5]+4237533241&4294967295,_=y+(g<<21&4294967295|g>>>11),g=p+(y^(_|~w))+T[12]+1700485571&4294967295,p=_+(g<<6&4294967295|g>>>26),g=w+(_^(p|~y))+T[3]+2399980690&4294967295,w=p+(g<<10&4294967295|g>>>22),g=y+(p^(w|~_))+T[10]+4293915773&4294967295,y=w+(g<<15&4294967295|g>>>17),g=_+(w^(y|~p))+T[1]+2240044497&4294967295,_=y+(g<<21&4294967295|g>>>11),g=p+(y^(_|~w))+T[8]+1873313359&4294967295,p=_+(g<<6&4294967295|g>>>26),g=w+(_^(p|~y))+T[15]+4264355552&4294967295,w=p+(g<<10&4294967295|g>>>22),g=y+(p^(w|~_))+T[6]+2734768916&4294967295,y=w+(g<<15&4294967295|g>>>17),g=_+(w^(y|~p))+T[13]+1309151649&4294967295,_=y+(g<<21&4294967295|g>>>11),g=p+(y^(_|~w))+T[4]+4149444226&4294967295,p=_+(g<<6&4294967295|g>>>26),g=w+(_^(p|~y))+T[11]+3174756917&4294967295,w=p+(g<<10&4294967295|g>>>22),g=y+(p^(w|~_))+T[2]+718787259&4294967295,y=w+(g<<15&4294967295|g>>>17),g=_+(w^(y|~p))+T[9]+3951481745&4294967295,E.g[0]=E.g[0]+p&4294967295,E.g[1]=E.g[1]+(y+(g<<21&4294967295|g>>>11))&4294967295,E.g[2]=E.g[2]+y&4294967295,E.g[3]=E.g[3]+w&4294967295}r.prototype.v=function(E,p){p===void 0&&(p=E.length);const _=p-this.blockSize,T=this.C;let y=this.h,w=0;for(;w<p;){if(y==0)for(;w<=_;)s(this,E,w),w+=this.blockSize;if(typeof E=="string"){for(;w<p;)if(T[y++]=E.charCodeAt(w++),y==this.blockSize){s(this,T),y=0;break}}else for(;w<p;)if(T[y++]=E[w++],y==this.blockSize){s(this,T),y=0;break}}this.h=y,this.o+=p},r.prototype.A=function(){var E=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);E[0]=128;for(var p=1;p<E.length-8;++p)E[p]=0;p=this.o*8;for(var _=E.length-8;_<E.length;++_)E[_]=p&255,p/=256;for(this.v(E),E=Array(16),p=0,_=0;_<4;++_)for(let T=0;T<32;T+=8)E[p++]=this.g[_]>>>T&255;return E};function o(E,p){var _=l;return Object.prototype.hasOwnProperty.call(_,E)?_[E]:_[E]=p(E)}function a(E,p){this.h=p;const _=[];let T=!0;for(let y=E.length-1;y>=0;y--){const w=E[y]|0;T&&w==p||(_[y]=w,T=!1)}this.g=_}var l={};function h(E){return-128<=E&&E<128?o(E,function(p){return new a([p|0],p<0?-1:0)}):new a([E|0],E<0?-1:0)}function d(E){if(isNaN(E)||!isFinite(E))return I;if(E<0)return k(d(-E));const p=[];let _=1;for(let T=0;E>=_;T++)p[T]=E/_|0,_*=4294967296;return new a(p,0)}function m(E,p){if(E.length==0)throw Error("number format error: empty string");if(p=p||10,p<2||36<p)throw Error("radix out of range: "+p);if(E.charAt(0)=="-")return k(m(E.substring(1),p));if(E.indexOf("-")>=0)throw Error('number format error: interior "-" character');const _=d(Math.pow(p,8));let T=I;for(let w=0;w<E.length;w+=8){var y=Math.min(8,E.length-w);const g=parseInt(E.substring(w,w+y),p);y<8?(y=d(Math.pow(p,y)),T=T.j(y).add(d(g))):(T=T.j(_),T=T.add(d(g)))}return T}var I=h(0),A=h(1),V=h(16777216);n=a.prototype,n.m=function(){if(O(this))return-k(this).m();let E=0,p=1;for(let _=0;_<this.g.length;_++){const T=this.i(_);E+=(T>=0?T:4294967296+T)*p,p*=4294967296}return E},n.toString=function(E){if(E=E||10,E<2||36<E)throw Error("radix out of range: "+E);if(M(this))return"0";if(O(this))return"-"+k(this).toString(E);const p=d(Math.pow(E,6));var _=this;let T="";for(;;){const y=Tt(_,p).g;_=K(_,y.j(p));let w=((_.g.length>0?_.g[0]:_.h)>>>0).toString(E);if(_=y,M(_))return w+T;for(;w.length<6;)w="0"+w;T=w+T}},n.i=function(E){return E<0?0:E<this.g.length?this.g[E]:this.h};function M(E){if(E.h!=0)return!1;for(let p=0;p<E.g.length;p++)if(E.g[p]!=0)return!1;return!0}function O(E){return E.h==-1}n.l=function(E){return E=K(this,E),O(E)?-1:M(E)?0:1};function k(E){const p=E.g.length,_=[];for(let T=0;T<p;T++)_[T]=~E.g[T];return new a(_,~E.h).add(A)}n.abs=function(){return O(this)?k(this):this},n.add=function(E){const p=Math.max(this.g.length,E.g.length),_=[];let T=0;for(let y=0;y<=p;y++){let w=T+(this.i(y)&65535)+(E.i(y)&65535),g=(w>>>16)+(this.i(y)>>>16)+(E.i(y)>>>16);T=g>>>16,w&=65535,g&=65535,_[y]=g<<16|w}return new a(_,_[_.length-1]&-2147483648?-1:0)};function K(E,p){return E.add(k(p))}n.j=function(E){if(M(this)||M(E))return I;if(O(this))return O(E)?k(this).j(k(E)):k(k(this).j(E));if(O(E))return k(this.j(k(E)));if(this.l(V)<0&&E.l(V)<0)return d(this.m()*E.m());const p=this.g.length+E.g.length,_=[];for(var T=0;T<2*p;T++)_[T]=0;for(T=0;T<this.g.length;T++)for(let y=0;y<E.g.length;y++){const w=this.i(T)>>>16,g=this.i(T)&65535,It=E.i(y)>>>16,ue=E.i(y)&65535;_[2*T+2*y]+=g*ue,G(_,2*T+2*y),_[2*T+2*y+1]+=w*ue,G(_,2*T+2*y+1),_[2*T+2*y+1]+=g*It,G(_,2*T+2*y+1),_[2*T+2*y+2]+=w*It,G(_,2*T+2*y+2)}for(E=0;E<p;E++)_[E]=_[2*E+1]<<16|_[2*E];for(E=p;E<2*p;E++)_[E]=0;return new a(_,0)};function G(E,p){for(;(E[p]&65535)!=E[p];)E[p+1]+=E[p]>>>16,E[p]&=65535,p++}function Y(E,p){this.g=E,this.h=p}function Tt(E,p){if(M(p))throw Error("division by zero");if(M(E))return new Y(I,I);if(O(E))return p=Tt(k(E),p),new Y(k(p.g),k(p.h));if(O(p))return p=Tt(E,k(p)),new Y(k(p.g),p.h);if(E.g.length>30){if(O(E)||O(p))throw Error("slowDivide_ only works with positive integers.");for(var _=A,T=p;T.l(E)<=0;)_=At(_),T=At(T);var y=dt(_,1),w=dt(T,1);for(T=dt(T,2),_=dt(_,2);!M(T);){var g=w.add(T);g.l(E)<=0&&(y=y.add(_),w=g),T=dt(T,1),_=dt(_,1)}return p=K(E,y.j(p)),new Y(y,p)}for(y=I;E.l(p)>=0;){for(_=Math.max(1,Math.floor(E.m()/p.m())),T=Math.ceil(Math.log(_)/Math.LN2),T=T<=48?1:Math.pow(2,T-48),w=d(_),g=w.j(p);O(g)||g.l(E)>0;)_-=T,w=d(_),g=w.j(p);M(w)&&(w=A),y=y.add(w),E=K(E,g)}return new Y(y,E)}n.B=function(E){return Tt(this,E).h},n.and=function(E){const p=Math.max(this.g.length,E.g.length),_=[];for(let T=0;T<p;T++)_[T]=this.i(T)&E.i(T);return new a(_,this.h&E.h)},n.or=function(E){const p=Math.max(this.g.length,E.g.length),_=[];for(let T=0;T<p;T++)_[T]=this.i(T)|E.i(T);return new a(_,this.h|E.h)},n.xor=function(E){const p=Math.max(this.g.length,E.g.length),_=[];for(let T=0;T<p;T++)_[T]=this.i(T)^E.i(T);return new a(_,this.h^E.h)};function At(E){const p=E.g.length+1,_=[];for(let T=0;T<p;T++)_[T]=E.i(T)<<1|E.i(T-1)>>>31;return new a(_,E.h)}function dt(E,p){const _=p>>5;p%=32;const T=E.g.length-_,y=[];for(let w=0;w<T;w++)y[w]=p>0?E.i(w+_)>>>p|E.i(w+_+1)<<32-p:E.i(w+_);return new a(y,E.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,Wa=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.B,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=d,a.fromString=m,Xt=a}).apply(typeof Bo<"u"?Bo:typeof self<"u"?self:typeof window<"u"?window:{});var Zn=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Qa,dn,Ya,ir,bs,Ja,Xa,Za;(function(){var n,t=Object.defineProperty;function e(i){i=[typeof globalThis=="object"&&globalThis,i,typeof window=="object"&&window,typeof self=="object"&&self,typeof Zn=="object"&&Zn];for(var u=0;u<i.length;++u){var c=i[u];if(c&&c.Math==Math)return c}throw Error("Cannot find global object")}var r=e(this);function s(i,u){if(u)t:{var c=r;i=i.split(".");for(var f=0;f<i.length-1;f++){var v=i[f];if(!(v in c))break t;c=c[v]}i=i[i.length-1],f=c[i],u=u(f),u!=f&&u!=null&&t(c,i,{configurable:!0,writable:!0,value:u})}}s("Symbol.dispose",function(i){return i||Symbol("Symbol.dispose")}),s("Array.prototype.values",function(i){return i||function(){return this[Symbol.iterator]()}}),s("Object.entries",function(i){return i||function(u){var c=[],f;for(f in u)Object.prototype.hasOwnProperty.call(u,f)&&c.push([f,u[f]]);return c}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},a=this||self;function l(i){var u=typeof i;return u=="object"&&i!=null||u=="function"}function h(i,u,c){return i.call.apply(i.bind,arguments)}function d(i,u,c){return d=h,d.apply(null,arguments)}function m(i,u){var c=Array.prototype.slice.call(arguments,1);return function(){var f=c.slice();return f.push.apply(f,arguments),i.apply(this,f)}}function I(i,u){function c(){}c.prototype=u.prototype,i.Z=u.prototype,i.prototype=new c,i.prototype.constructor=i,i.Ob=function(f,v,R){for(var C=Array(arguments.length-2),B=2;B<arguments.length;B++)C[B-2]=arguments[B];return u.prototype[v].apply(f,C)}}var A=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?i=>i&&AsyncContext.Snapshot.wrap(i):i=>i;function V(i){const u=i.length;if(u>0){const c=Array(u);for(let f=0;f<u;f++)c[f]=i[f];return c}return[]}function M(i,u){for(let f=1;f<arguments.length;f++){const v=arguments[f];var c=typeof v;if(c=c!="object"?c:v?Array.isArray(v)?"array":c:"null",c=="array"||c=="object"&&typeof v.length=="number"){c=i.length||0;const R=v.length||0;i.length=c+R;for(let C=0;C<R;C++)i[c+C]=v[C]}else i.push(v)}}class O{constructor(u,c){this.i=u,this.j=c,this.h=0,this.g=null}get(){let u;return this.h>0?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function k(i){a.setTimeout(()=>{throw i},0)}function K(){var i=E;let u=null;return i.g&&(u=i.g,i.g=i.g.next,i.g||(i.h=null),u.next=null),u}class G{constructor(){this.h=this.g=null}add(u,c){const f=Y.get();f.set(u,c),this.h?this.h.next=f:this.g=f,this.h=f}}var Y=new O(()=>new Tt,i=>i.reset());class Tt{constructor(){this.next=this.g=this.h=null}set(u,c){this.h=u,this.g=c,this.next=null}reset(){this.next=this.g=this.h=null}}let At,dt=!1,E=new G,p=()=>{const i=Promise.resolve(void 0);At=()=>{i.then(_)}};function _(){for(var i;i=K();){try{i.h.call(i.g)}catch(c){k(c)}var u=Y;u.j(i),u.h<100&&(u.h++,i.next=u.g,u.g=i)}dt=!1}function T(){this.u=this.u,this.C=this.C}T.prototype.u=!1,T.prototype.dispose=function(){this.u||(this.u=!0,this.N())},T.prototype[Symbol.dispose]=function(){this.dispose()},T.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function y(i,u){this.type=i,this.g=this.target=u,this.defaultPrevented=!1}y.prototype.h=function(){this.defaultPrevented=!0};var w=(function(){if(!a.addEventListener||!Object.defineProperty)return!1;var i=!1,u=Object.defineProperty({},"passive",{get:function(){i=!0}});try{const c=()=>{};a.addEventListener("test",c,u),a.removeEventListener("test",c,u)}catch{}return i})();function g(i){return/^[\s\xa0]*$/.test(i)}function It(i,u){y.call(this,i?i.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,i&&this.init(i,u)}I(It,y),It.prototype.init=function(i,u){const c=this.type=i.type,f=i.changedTouches&&i.changedTouches.length?i.changedTouches[0]:null;this.target=i.target||i.srcElement,this.g=u,u=i.relatedTarget,u||(c=="mouseover"?u=i.fromElement:c=="mouseout"&&(u=i.toElement)),this.relatedTarget=u,f?(this.clientX=f.clientX!==void 0?f.clientX:f.pageX,this.clientY=f.clientY!==void 0?f.clientY:f.pageY,this.screenX=f.screenX||0,this.screenY=f.screenY||0):(this.clientX=i.clientX!==void 0?i.clientX:i.pageX,this.clientY=i.clientY!==void 0?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0),this.button=i.button,this.key=i.key||"",this.ctrlKey=i.ctrlKey,this.altKey=i.altKey,this.shiftKey=i.shiftKey,this.metaKey=i.metaKey,this.pointerId=i.pointerId||0,this.pointerType=i.pointerType,this.state=i.state,this.i=i,i.defaultPrevented&&It.Z.h.call(this)},It.prototype.h=function(){It.Z.h.call(this);const i=this.i;i.preventDefault?i.preventDefault():i.returnValue=!1};var ue="closure_listenable_"+(Math.random()*1e6|0),Ac=0;function Rc(i,u,c,f,v){this.listener=i,this.proxy=null,this.src=u,this.type=c,this.capture=!!f,this.ha=v,this.key=++Ac,this.da=this.fa=!1}function Ln(i){i.da=!0,i.listener=null,i.proxy=null,i.src=null,i.ha=null}function Fn(i,u,c){for(const f in i)u.call(c,i[f],f,i)}function bc(i,u){for(const c in i)u.call(void 0,i[c],c,i)}function bi(i){const u={};for(const c in i)u[c]=i[c];return u}const Si="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Pi(i,u){let c,f;for(let v=1;v<arguments.length;v++){f=arguments[v];for(c in f)i[c]=f[c];for(let R=0;R<Si.length;R++)c=Si[R],Object.prototype.hasOwnProperty.call(f,c)&&(i[c]=f[c])}}function Un(i){this.src=i,this.g={},this.h=0}Un.prototype.add=function(i,u,c,f,v){const R=i.toString();i=this.g[R],i||(i=this.g[R]=[],this.h++);const C=qr(i,u,f,v);return C>-1?(u=i[C],c||(u.fa=!1)):(u=new Rc(u,this.src,R,!!f,v),u.fa=c,i.push(u)),u};function Br(i,u){const c=u.type;if(c in i.g){var f=i.g[c],v=Array.prototype.indexOf.call(f,u,void 0),R;(R=v>=0)&&Array.prototype.splice.call(f,v,1),R&&(Ln(u),i.g[c].length==0&&(delete i.g[c],i.h--))}}function qr(i,u,c,f){for(let v=0;v<i.length;++v){const R=i[v];if(!R.da&&R.listener==u&&R.capture==!!c&&R.ha==f)return v}return-1}var jr="closure_lm_"+(Math.random()*1e6|0),$r={};function Vi(i,u,c,f,v){if(Array.isArray(u)){for(let R=0;R<u.length;R++)Vi(i,u[R],c,f,v);return null}return c=Di(c),i&&i[ue]?i.J(u,c,l(f)?!!f.capture:!1,v):Sc(i,u,c,!1,f,v)}function Sc(i,u,c,f,v,R){if(!u)throw Error("Invalid event type");const C=l(v)?!!v.capture:!!v;let B=Gr(i);if(B||(i[jr]=B=new Un(i)),c=B.add(u,c,f,C,R),c.proxy)return c;if(f=Pc(),c.proxy=f,f.src=i,f.listener=c,i.addEventListener)w||(v=C),v===void 0&&(v=!1),i.addEventListener(u.toString(),f,v);else if(i.attachEvent)i.attachEvent(Ni(u.toString()),f);else if(i.addListener&&i.removeListener)i.addListener(f);else throw Error("addEventListener and attachEvent are unavailable.");return c}function Pc(){function i(c){return u.call(i.src,i.listener,c)}const u=Vc;return i}function Ci(i,u,c,f,v){if(Array.isArray(u))for(var R=0;R<u.length;R++)Ci(i,u[R],c,f,v);else f=l(f)?!!f.capture:!!f,c=Di(c),i&&i[ue]?(i=i.i,R=String(u).toString(),R in i.g&&(u=i.g[R],c=qr(u,c,f,v),c>-1&&(Ln(u[c]),Array.prototype.splice.call(u,c,1),u.length==0&&(delete i.g[R],i.h--)))):i&&(i=Gr(i))&&(u=i.g[u.toString()],i=-1,u&&(i=qr(u,c,f,v)),(c=i>-1?u[i]:null)&&zr(c))}function zr(i){if(typeof i!="number"&&i&&!i.da){var u=i.src;if(u&&u[ue])Br(u.i,i);else{var c=i.type,f=i.proxy;u.removeEventListener?u.removeEventListener(c,f,i.capture):u.detachEvent?u.detachEvent(Ni(c),f):u.addListener&&u.removeListener&&u.removeListener(f),(c=Gr(u))?(Br(c,i),c.h==0&&(c.src=null,u[jr]=null)):Ln(i)}}}function Ni(i){return i in $r?$r[i]:$r[i]="on"+i}function Vc(i,u){if(i.da)i=!0;else{u=new It(u,this);const c=i.listener,f=i.ha||i.src;i.fa&&zr(i),i=c.call(f,u)}return i}function Gr(i){return i=i[jr],i instanceof Un?i:null}var Hr="__closure_events_fn_"+(Math.random()*1e9>>>0);function Di(i){return typeof i=="function"?i:(i[Hr]||(i[Hr]=function(u){return i.handleEvent(u)}),i[Hr])}function mt(){T.call(this),this.i=new Un(this),this.M=this,this.G=null}I(mt,T),mt.prototype[ue]=!0,mt.prototype.removeEventListener=function(i,u,c,f){Ci(this,i,u,c,f)};function yt(i,u){var c,f=i.G;if(f)for(c=[];f;f=f.G)c.push(f);if(i=i.M,f=u.type||u,typeof u=="string")u=new y(u,i);else if(u instanceof y)u.target=u.target||i;else{var v=u;u=new y(f,i),Pi(u,v)}v=!0;let R,C;if(c)for(C=c.length-1;C>=0;C--)R=u.g=c[C],v=Bn(R,f,!0,u)&&v;if(R=u.g=i,v=Bn(R,f,!0,u)&&v,v=Bn(R,f,!1,u)&&v,c)for(C=0;C<c.length;C++)R=u.g=c[C],v=Bn(R,f,!1,u)&&v}mt.prototype.N=function(){if(mt.Z.N.call(this),this.i){var i=this.i;for(const u in i.g){const c=i.g[u];for(let f=0;f<c.length;f++)Ln(c[f]);delete i.g[u],i.h--}}this.G=null},mt.prototype.J=function(i,u,c,f){return this.i.add(String(i),u,!1,c,f)},mt.prototype.K=function(i,u,c,f){return this.i.add(String(i),u,!0,c,f)};function Bn(i,u,c,f){if(u=i.i.g[String(u)],!u)return!0;u=u.concat();let v=!0;for(let R=0;R<u.length;++R){const C=u[R];if(C&&!C.da&&C.capture==c){const B=C.listener,it=C.ha||C.src;C.fa&&Br(i.i,C),v=B.call(it,f)!==!1&&v}}return v&&!f.defaultPrevented}function Cc(i,u){if(typeof i!="function")if(i&&typeof i.handleEvent=="function")i=d(i.handleEvent,i);else throw Error("Invalid listener argument");return Number(u)>2147483647?-1:a.setTimeout(i,u||0)}function Mi(i){i.g=Cc(()=>{i.g=null,i.i&&(i.i=!1,Mi(i))},i.l);const u=i.h;i.h=null,i.m.apply(null,u)}class Nc extends T{constructor(u,c){super(),this.m=u,this.l=c,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:Mi(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Qe(i){T.call(this),this.h=i,this.g={}}I(Qe,T);var ki=[];function xi(i){Fn(i.g,function(u,c){this.g.hasOwnProperty(c)&&zr(u)},i),i.g={}}Qe.prototype.N=function(){Qe.Z.N.call(this),xi(this)},Qe.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Kr=a.JSON.stringify,Dc=a.JSON.parse,Mc=class{stringify(i){return a.JSON.stringify(i,void 0)}parse(i){return a.JSON.parse(i,void 0)}};function Oi(){}function Li(){}var Ye={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function Wr(){y.call(this,"d")}I(Wr,y);function Qr(){y.call(this,"c")}I(Qr,y);var ce={},Fi=null;function qn(){return Fi=Fi||new mt}ce.Ia="serverreachability";function Ui(i){y.call(this,ce.Ia,i)}I(Ui,y);function Je(i){const u=qn();yt(u,new Ui(u))}ce.STAT_EVENT="statevent";function Bi(i,u){y.call(this,ce.STAT_EVENT,i),this.stat=u}I(Bi,y);function Et(i){const u=qn();yt(u,new Bi(u,i))}ce.Ja="timingevent";function qi(i,u){y.call(this,ce.Ja,i),this.size=u}I(qi,y);function Xe(i,u){if(typeof i!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){i()},u)}function Ze(){this.g=!0}Ze.prototype.ua=function(){this.g=!1};function kc(i,u,c,f,v,R){i.info(function(){if(i.g)if(R){var C="",B=R.split("&");for(let W=0;W<B.length;W++){var it=B[W].split("=");if(it.length>1){const ut=it[0];it=it[1];const Dt=ut.split("_");C=Dt.length>=2&&Dt[1]=="type"?C+(ut+"="+it+"&"):C+(ut+"=redacted&")}}}else C=null;else C=R;return"XMLHTTP REQ ("+f+") [attempt "+v+"]: "+u+`
`+c+`
`+C})}function xc(i,u,c,f,v,R,C){i.info(function(){return"XMLHTTP RESP ("+f+") [ attempt "+v+"]: "+u+`
`+c+`
`+R+" "+C})}function Ae(i,u,c,f){i.info(function(){return"XMLHTTP TEXT ("+u+"): "+Lc(i,c)+(f?" "+f:"")})}function Oc(i,u){i.info(function(){return"TIMEOUT: "+u})}Ze.prototype.info=function(){};function Lc(i,u){if(!i.g)return u;if(!u)return null;try{const R=JSON.parse(u);if(R){for(i=0;i<R.length;i++)if(Array.isArray(R[i])){var c=R[i];if(!(c.length<2)){var f=c[1];if(Array.isArray(f)&&!(f.length<1)){var v=f[0];if(v!="noop"&&v!="stop"&&v!="close")for(let C=1;C<f.length;C++)f[C]=""}}}}return Kr(R)}catch{return u}}var jn={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},ji={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},$i;function Yr(){}I(Yr,Oi),Yr.prototype.g=function(){return new XMLHttpRequest},$i=new Yr;function tn(i){return encodeURIComponent(String(i))}function Fc(i){var u=1;i=i.split(":");const c=[];for(;u>0&&i.length;)c.push(i.shift()),u--;return i.length&&c.push(i.join(":")),c}function $t(i,u,c,f){this.j=i,this.i=u,this.l=c,this.S=f||1,this.V=new Qe(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new zi}function zi(){this.i=null,this.g="",this.h=!1}var Gi={},Jr={};function Xr(i,u,c){i.M=1,i.A=zn(Nt(u)),i.u=c,i.R=!0,Hi(i,null)}function Hi(i,u){i.F=Date.now(),$n(i),i.B=Nt(i.A);var c=i.B,f=i.S;Array.isArray(f)||(f=[String(f)]),io(c.i,"t",f),i.C=0,c=i.j.L,i.h=new zi,i.g=Ao(i.j,c?u:null,!i.u),i.P>0&&(i.O=new Nc(d(i.Y,i,i.g),i.P)),u=i.V,c=i.g,f=i.ba;var v="readystatechange";Array.isArray(v)||(v&&(ki[0]=v.toString()),v=ki);for(let R=0;R<v.length;R++){const C=Vi(c,v[R],f||u.handleEvent,!1,u.h||u);if(!C)break;u.g[C.key]=C}u=i.J?bi(i.J):{},i.u?(i.v||(i.v="POST"),u["Content-Type"]="application/x-www-form-urlencoded",i.g.ea(i.B,i.v,i.u,u)):(i.v="GET",i.g.ea(i.B,i.v,null,u)),Je(),kc(i.i,i.v,i.B,i.l,i.S,i.u)}$t.prototype.ba=function(i){i=i.target;const u=this.O;u&&Ht(i)==3?u.j():this.Y(i)},$t.prototype.Y=function(i){try{if(i==this.g)t:{const B=Ht(this.g),it=this.g.ya(),W=this.g.ca();if(!(B<3)&&(B!=3||this.g&&(this.h.h||this.g.la()||fo(this.g)))){this.K||B!=4||it==7||(it==8||W<=0?Je(3):Je(2)),Zr(this);var u=this.g.ca();this.X=u;var c=Uc(this);if(this.o=u==200,xc(this.i,this.v,this.B,this.l,this.S,B,u),this.o){if(this.U&&!this.L){e:{if(this.g){var f,v=this.g;if((f=v.g?v.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!g(f)){var R=f;break e}}R=null}if(i=R)Ae(this.i,this.l,i,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,ts(this,i);else{this.o=!1,this.m=3,Et(12),le(this),en(this);break t}}if(this.R){i=!0;let ut;for(;!this.K&&this.C<c.length;)if(ut=Bc(this,c),ut==Jr){B==4&&(this.m=4,Et(14),i=!1),Ae(this.i,this.l,null,"[Incomplete Response]");break}else if(ut==Gi){this.m=4,Et(15),Ae(this.i,this.l,c,"[Invalid Chunk]"),i=!1;break}else Ae(this.i,this.l,ut,null),ts(this,ut);if(Ki(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),B!=4||c.length!=0||this.h.h||(this.m=1,Et(16),i=!1),this.o=this.o&&i,!i)Ae(this.i,this.l,c,"[Invalid Chunked Response]"),le(this),en(this);else if(c.length>0&&!this.W){this.W=!0;var C=this.j;C.g==this&&C.aa&&!C.P&&(C.j.info("Great, no buffering proxy detected. Bytes received: "+c.length),us(C),C.P=!0,Et(11))}}else Ae(this.i,this.l,c,null),ts(this,c);B==4&&le(this),this.o&&!this.K&&(B==4?To(this.j,this):(this.o=!1,$n(this)))}else tl(this.g),u==400&&c.indexOf("Unknown SID")>0?(this.m=3,Et(12)):(this.m=0,Et(13)),le(this),en(this)}}}catch{}finally{}};function Uc(i){if(!Ki(i))return i.g.la();const u=fo(i.g);if(u==="")return"";let c="";const f=u.length,v=Ht(i.g)==4;if(!i.h.i){if(typeof TextDecoder>"u")return le(i),en(i),"";i.h.i=new a.TextDecoder}for(let R=0;R<f;R++)i.h.h=!0,c+=i.h.i.decode(u[R],{stream:!(v&&R==f-1)});return u.length=0,i.h.g+=c,i.C=0,i.h.g}function Ki(i){return i.g?i.v=="GET"&&i.M!=2&&i.j.Aa:!1}function Bc(i,u){var c=i.C,f=u.indexOf(`
`,c);return f==-1?Jr:(c=Number(u.substring(c,f)),isNaN(c)?Gi:(f+=1,f+c>u.length?Jr:(u=u.slice(f,f+c),i.C=f+c,u)))}$t.prototype.cancel=function(){this.K=!0,le(this)};function $n(i){i.T=Date.now()+i.H,Wi(i,i.H)}function Wi(i,u){if(i.D!=null)throw Error("WatchDog timer not null");i.D=Xe(d(i.aa,i),u)}function Zr(i){i.D&&(a.clearTimeout(i.D),i.D=null)}$t.prototype.aa=function(){this.D=null;const i=Date.now();i-this.T>=0?(Oc(this.i,this.B),this.M!=2&&(Je(),Et(17)),le(this),this.m=2,en(this)):Wi(this,this.T-i)};function en(i){i.j.I==0||i.K||To(i.j,i)}function le(i){Zr(i);var u=i.O;u&&typeof u.dispose=="function"&&u.dispose(),i.O=null,xi(i.V),i.g&&(u=i.g,i.g=null,u.abort(),u.dispose())}function ts(i,u){try{var c=i.j;if(c.I!=0&&(c.g==i||es(c.h,i))){if(!i.L&&es(c.h,i)&&c.I==3){try{var f=c.Ba.g.parse(u)}catch{f=null}if(Array.isArray(f)&&f.length==3){var v=f;if(v[0]==0){t:if(!c.v){if(c.g)if(c.g.F+3e3<i.F)Qn(c),Kn(c);else break t;as(c),Et(18)}}else c.xa=v[1],0<c.xa-c.K&&v[2]<37500&&c.F&&c.A==0&&!c.C&&(c.C=Xe(d(c.Va,c),6e3));Ji(c.h)<=1&&c.ta&&(c.ta=void 0)}else fe(c,11)}else if((i.L||c.g==i)&&Qn(c),!g(u))for(v=c.Ba.g.parse(u),u=0;u<v.length;u++){let W=v[u];const ut=W[0];if(!(ut<=c.K))if(c.K=ut,W=W[1],c.I==2)if(W[0]=="c"){c.M=W[1],c.ba=W[2];const Dt=W[3];Dt!=null&&(c.ka=Dt,c.j.info("VER="+c.ka));const de=W[4];de!=null&&(c.za=de,c.j.info("SVER="+c.za));const Kt=W[5];Kt!=null&&typeof Kt=="number"&&Kt>0&&(f=1.5*Kt,c.O=f,c.j.info("backChannelRequestTimeoutMs_="+f)),f=c;const Wt=i.g;if(Wt){const Jn=Wt.g?Wt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Jn){var R=f.h;R.g||Jn.indexOf("spdy")==-1&&Jn.indexOf("quic")==-1&&Jn.indexOf("h2")==-1||(R.j=R.l,R.g=new Set,R.h&&(ns(R,R.h),R.h=null))}if(f.G){const cs=Wt.g?Wt.g.getResponseHeader("X-HTTP-Session-Id"):null;cs&&(f.wa=cs,J(f.J,f.G,cs))}}c.I=3,c.l&&c.l.ra(),c.aa&&(c.T=Date.now()-i.F,c.j.info("Handshake RTT: "+c.T+"ms")),f=c;var C=i;if(f.na=wo(f,f.L?f.ba:null,f.W),C.L){Xi(f.h,C);var B=C,it=f.O;it&&(B.H=it),B.D&&(Zr(B),$n(B)),f.g=C}else yo(f);c.i.length>0&&Wn(c)}else W[0]!="stop"&&W[0]!="close"||fe(c,7);else c.I==3&&(W[0]=="stop"||W[0]=="close"?W[0]=="stop"?fe(c,7):os(c):W[0]!="noop"&&c.l&&c.l.qa(W),c.A=0)}}Je(4)}catch{}}var qc=class{constructor(i,u){this.g=i,this.map=u}};function Qi(i){this.l=i||10,a.PerformanceNavigationTiming?(i=a.performance.getEntriesByType("navigation"),i=i.length>0&&(i[0].nextHopProtocol=="hq"||i[0].nextHopProtocol=="h2")):i=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=i?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function Yi(i){return i.h?!0:i.g?i.g.size>=i.j:!1}function Ji(i){return i.h?1:i.g?i.g.size:0}function es(i,u){return i.h?i.h==u:i.g?i.g.has(u):!1}function ns(i,u){i.g?i.g.add(u):i.h=u}function Xi(i,u){i.h&&i.h==u?i.h=null:i.g&&i.g.has(u)&&i.g.delete(u)}Qi.prototype.cancel=function(){if(this.i=Zi(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const i of this.g.values())i.cancel();this.g.clear()}};function Zi(i){if(i.h!=null)return i.i.concat(i.h.G);if(i.g!=null&&i.g.size!==0){let u=i.i;for(const c of i.g.values())u=u.concat(c.G);return u}return V(i.i)}var to=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function jc(i,u){if(i){i=i.split("&");for(let c=0;c<i.length;c++){const f=i[c].indexOf("=");let v,R=null;f>=0?(v=i[c].substring(0,f),R=i[c].substring(f+1)):v=i[c],u(v,R?decodeURIComponent(R.replace(/\+/g," ")):"")}}}function zt(i){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let u;i instanceof zt?(this.l=i.l,nn(this,i.j),this.o=i.o,this.g=i.g,rn(this,i.u),this.h=i.h,rs(this,oo(i.i)),this.m=i.m):i&&(u=String(i).match(to))?(this.l=!1,nn(this,u[1]||"",!0),this.o=sn(u[2]||""),this.g=sn(u[3]||"",!0),rn(this,u[4]),this.h=sn(u[5]||"",!0),rs(this,u[6]||"",!0),this.m=sn(u[7]||"")):(this.l=!1,this.i=new an(null,this.l))}zt.prototype.toString=function(){const i=[];var u=this.j;u&&i.push(on(u,eo,!0),":");var c=this.g;return(c||u=="file")&&(i.push("//"),(u=this.o)&&i.push(on(u,eo,!0),"@"),i.push(tn(c).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c=this.u,c!=null&&i.push(":",String(c))),(c=this.h)&&(this.g&&c.charAt(0)!="/"&&i.push("/"),i.push(on(c,c.charAt(0)=="/"?Gc:zc,!0))),(c=this.i.toString())&&i.push("?",c),(c=this.m)&&i.push("#",on(c,Kc)),i.join("")},zt.prototype.resolve=function(i){const u=Nt(this);let c=!!i.j;c?nn(u,i.j):c=!!i.o,c?u.o=i.o:c=!!i.g,c?u.g=i.g:c=i.u!=null;var f=i.h;if(c)rn(u,i.u);else if(c=!!i.h){if(f.charAt(0)!="/")if(this.g&&!this.h)f="/"+f;else{var v=u.h.lastIndexOf("/");v!=-1&&(f=u.h.slice(0,v+1)+f)}if(v=f,v==".."||v==".")f="";else if(v.indexOf("./")!=-1||v.indexOf("/.")!=-1){f=v.lastIndexOf("/",0)==0,v=v.split("/");const R=[];for(let C=0;C<v.length;){const B=v[C++];B=="."?f&&C==v.length&&R.push(""):B==".."?((R.length>1||R.length==1&&R[0]!="")&&R.pop(),f&&C==v.length&&R.push("")):(R.push(B),f=!0)}f=R.join("/")}else f=v}return c?u.h=f:c=i.i.toString()!=="",c?rs(u,oo(i.i)):c=!!i.m,c&&(u.m=i.m),u};function Nt(i){return new zt(i)}function nn(i,u,c){i.j=c?sn(u,!0):u,i.j&&(i.j=i.j.replace(/:$/,""))}function rn(i,u){if(u){if(u=Number(u),isNaN(u)||u<0)throw Error("Bad port number "+u);i.u=u}else i.u=null}function rs(i,u,c){u instanceof an?(i.i=u,Wc(i.i,i.l)):(c||(u=on(u,Hc)),i.i=new an(u,i.l))}function J(i,u,c){i.i.set(u,c)}function zn(i){return J(i,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),i}function sn(i,u){return i?u?decodeURI(i.replace(/%25/g,"%2525")):decodeURIComponent(i):""}function on(i,u,c){return typeof i=="string"?(i=encodeURI(i).replace(u,$c),c&&(i=i.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),i):null}function $c(i){return i=i.charCodeAt(0),"%"+(i>>4&15).toString(16)+(i&15).toString(16)}var eo=/[#\/\?@]/g,zc=/[#\?:]/g,Gc=/[#\?]/g,Hc=/[#\?@]/g,Kc=/#/g;function an(i,u){this.h=this.g=null,this.i=i||null,this.j=!!u}function he(i){i.g||(i.g=new Map,i.h=0,i.i&&jc(i.i,function(u,c){i.add(decodeURIComponent(u.replace(/\+/g," ")),c)}))}n=an.prototype,n.add=function(i,u){he(this),this.i=null,i=Re(this,i);let c=this.g.get(i);return c||this.g.set(i,c=[]),c.push(u),this.h+=1,this};function no(i,u){he(i),u=Re(i,u),i.g.has(u)&&(i.i=null,i.h-=i.g.get(u).length,i.g.delete(u))}function ro(i,u){return he(i),u=Re(i,u),i.g.has(u)}n.forEach=function(i,u){he(this),this.g.forEach(function(c,f){c.forEach(function(v){i.call(u,v,f,this)},this)},this)};function so(i,u){he(i);let c=[];if(typeof u=="string")ro(i,u)&&(c=c.concat(i.g.get(Re(i,u))));else for(i=Array.from(i.g.values()),u=0;u<i.length;u++)c=c.concat(i[u]);return c}n.set=function(i,u){return he(this),this.i=null,i=Re(this,i),ro(this,i)&&(this.h-=this.g.get(i).length),this.g.set(i,[u]),this.h+=1,this},n.get=function(i,u){return i?(i=so(this,i),i.length>0?String(i[0]):u):u};function io(i,u,c){no(i,u),c.length>0&&(i.i=null,i.g.set(Re(i,u),V(c)),i.h+=c.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const i=[],u=Array.from(this.g.keys());for(let f=0;f<u.length;f++){var c=u[f];const v=tn(c);c=so(this,c);for(let R=0;R<c.length;R++){let C=v;c[R]!==""&&(C+="="+tn(c[R])),i.push(C)}}return this.i=i.join("&")};function oo(i){const u=new an;return u.i=i.i,i.g&&(u.g=new Map(i.g),u.h=i.h),u}function Re(i,u){return u=String(u),i.j&&(u=u.toLowerCase()),u}function Wc(i,u){u&&!i.j&&(he(i),i.i=null,i.g.forEach(function(c,f){const v=f.toLowerCase();f!=v&&(no(this,f),io(this,v,c))},i)),i.j=u}function Qc(i,u){const c=new Ze;if(a.Image){const f=new Image;f.onload=m(Gt,c,"TestLoadImage: loaded",!0,u,f),f.onerror=m(Gt,c,"TestLoadImage: error",!1,u,f),f.onabort=m(Gt,c,"TestLoadImage: abort",!1,u,f),f.ontimeout=m(Gt,c,"TestLoadImage: timeout",!1,u,f),a.setTimeout(function(){f.ontimeout&&f.ontimeout()},1e4),f.src=i}else u(!1)}function Yc(i,u){const c=new Ze,f=new AbortController,v=setTimeout(()=>{f.abort(),Gt(c,"TestPingServer: timeout",!1,u)},1e4);fetch(i,{signal:f.signal}).then(R=>{clearTimeout(v),R.ok?Gt(c,"TestPingServer: ok",!0,u):Gt(c,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(v),Gt(c,"TestPingServer: error",!1,u)})}function Gt(i,u,c,f,v){try{v&&(v.onload=null,v.onerror=null,v.onabort=null,v.ontimeout=null),f(c)}catch{}}function Jc(){this.g=new Mc}function ss(i){this.i=i.Sb||null,this.h=i.ab||!1}I(ss,Oi),ss.prototype.g=function(){return new Gn(this.i,this.h)};function Gn(i,u){mt.call(this),this.H=i,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}I(Gn,mt),n=Gn.prototype,n.open=function(i,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=i,this.D=u,this.readyState=1,cn(this)},n.send=function(i){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const u={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};i&&(u.body=i),(this.H||a).fetch(new Request(this.D,u)).then(this.Pa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,un(this)),this.readyState=0},n.Pa=function(i){if(this.g&&(this.l=i,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=i.headers,this.readyState=2,cn(this)),this.g&&(this.readyState=3,cn(this),this.g)))if(this.responseType==="arraybuffer")i.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in i){if(this.j=i.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;ao(this)}else i.text().then(this.Oa.bind(this),this.ga.bind(this))};function ao(i){i.j.read().then(i.Ma.bind(i)).catch(i.ga.bind(i))}n.Ma=function(i){if(this.g){if(this.o&&i.value)this.response.push(i.value);else if(!this.o){var u=i.value?i.value:new Uint8Array(0);(u=this.B.decode(u,{stream:!i.done}))&&(this.response=this.responseText+=u)}i.done?un(this):cn(this),this.readyState==3&&ao(this)}},n.Oa=function(i){this.g&&(this.response=this.responseText=i,un(this))},n.Na=function(i){this.g&&(this.response=i,un(this))},n.ga=function(){this.g&&un(this)};function un(i){i.readyState=4,i.l=null,i.j=null,i.B=null,cn(i)}n.setRequestHeader=function(i,u){this.A.append(i,u)},n.getResponseHeader=function(i){return this.h&&this.h.get(i.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const i=[],u=this.h.entries();for(var c=u.next();!c.done;)c=c.value,i.push(c[0]+": "+c[1]),c=u.next();return i.join(`\r
`)};function cn(i){i.onreadystatechange&&i.onreadystatechange.call(i)}Object.defineProperty(Gn.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(i){this.m=i?"include":"same-origin"}});function uo(i){let u="";return Fn(i,function(c,f){u+=f,u+=":",u+=c,u+=`\r
`}),u}function is(i,u,c){t:{for(f in c){var f=!1;break t}f=!0}f||(c=uo(c),typeof i=="string"?c!=null&&tn(c):J(i,u,c))}function tt(i){mt.call(this),this.headers=new Map,this.L=i||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}I(tt,mt);var Xc=/^https?$/i,Zc=["POST","PUT"];n=tt.prototype,n.Fa=function(i){this.H=i},n.ea=function(i,u,c,f){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+i);u=u?u.toUpperCase():"GET",this.D=i,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():$i.g(),this.g.onreadystatechange=A(d(this.Ca,this));try{this.B=!0,this.g.open(u,String(i),!0),this.B=!1}catch(R){co(this,R);return}if(i=c||"",c=new Map(this.headers),f)if(Object.getPrototypeOf(f)===Object.prototype)for(var v in f)c.set(v,f[v]);else if(typeof f.keys=="function"&&typeof f.get=="function")for(const R of f.keys())c.set(R,f.get(R));else throw Error("Unknown input type for opt_headers: "+String(f));f=Array.from(c.keys()).find(R=>R.toLowerCase()=="content-type"),v=a.FormData&&i instanceof a.FormData,!(Array.prototype.indexOf.call(Zc,u,void 0)>=0)||f||v||c.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[R,C]of c)this.g.setRequestHeader(R,C);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(i),this.v=!1}catch(R){co(this,R)}};function co(i,u){i.h=!1,i.g&&(i.j=!0,i.g.abort(),i.j=!1),i.l=u,i.o=5,lo(i),Hn(i)}function lo(i){i.A||(i.A=!0,yt(i,"complete"),yt(i,"error"))}n.abort=function(i){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=i||7,yt(this,"complete"),yt(this,"abort"),Hn(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Hn(this,!0)),tt.Z.N.call(this)},n.Ca=function(){this.u||(this.B||this.v||this.j?ho(this):this.Xa())},n.Xa=function(){ho(this)};function ho(i){if(i.h&&typeof o<"u"){if(i.v&&Ht(i)==4)setTimeout(i.Ca.bind(i),0);else if(yt(i,"readystatechange"),Ht(i)==4){i.h=!1;try{const R=i.ca();t:switch(R){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break t;default:u=!1}var c;if(!(c=u)){var f;if(f=R===0){let C=String(i.D).match(to)[1]||null;!C&&a.self&&a.self.location&&(C=a.self.location.protocol.slice(0,-1)),f=!Xc.test(C?C.toLowerCase():"")}c=f}if(c)yt(i,"complete"),yt(i,"success");else{i.o=6;try{var v=Ht(i)>2?i.g.statusText:""}catch{v=""}i.l=v+" ["+i.ca()+"]",lo(i)}}finally{Hn(i)}}}}function Hn(i,u){if(i.g){i.m&&(clearTimeout(i.m),i.m=null);const c=i.g;i.g=null,u||yt(i,"ready");try{c.onreadystatechange=null}catch{}}}n.isActive=function(){return!!this.g};function Ht(i){return i.g?i.g.readyState:0}n.ca=function(){try{return Ht(this)>2?this.g.status:-1}catch{return-1}},n.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.La=function(i){if(this.g){var u=this.g.responseText;return i&&u.indexOf(i)==0&&(u=u.substring(i.length)),Dc(u)}};function fo(i){try{if(!i.g)return null;if("response"in i.g)return i.g.response;switch(i.F){case"":case"text":return i.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in i.g)return i.g.mozResponseArrayBuffer}return null}catch{return null}}function tl(i){const u={};i=(i.g&&Ht(i)>=2&&i.g.getAllResponseHeaders()||"").split(`\r
`);for(let f=0;f<i.length;f++){if(g(i[f]))continue;var c=Fc(i[f]);const v=c[0];if(c=c[1],typeof c!="string")continue;c=c.trim();const R=u[v]||[];u[v]=R,R.push(c)}bc(u,function(f){return f.join(", ")})}n.ya=function(){return this.o},n.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function ln(i,u,c){return c&&c.internalChannelParams&&c.internalChannelParams[i]||u}function mo(i){this.za=0,this.i=[],this.j=new Ze,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=ln("failFast",!1,i),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=ln("baseRetryDelayMs",5e3,i),this.Za=ln("retryDelaySeedMs",1e4,i),this.Ta=ln("forwardChannelMaxRetries",2,i),this.va=ln("forwardChannelRequestTimeoutMs",2e4,i),this.ma=i&&i.xmlHttpFactory||void 0,this.Ua=i&&i.Rb||void 0,this.Aa=i&&i.useFetchStreams||!1,this.O=void 0,this.L=i&&i.supportsCrossDomainXhr||!1,this.M="",this.h=new Qi(i&&i.concurrentRequestLimit),this.Ba=new Jc,this.S=i&&i.fastHandshake||!1,this.R=i&&i.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=i&&i.Pb||!1,i&&i.ua&&this.j.ua(),i&&i.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&i&&i.detectBufferingProxy||!1,this.ia=void 0,i&&i.longPollingTimeout&&i.longPollingTimeout>0&&(this.ia=i.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}n=mo.prototype,n.ka=8,n.I=1,n.connect=function(i,u,c,f){Et(0),this.W=i,this.H=u||{},c&&f!==void 0&&(this.H.OSID=c,this.H.OAID=f),this.F=this.X,this.J=wo(this,null,this.W),Wn(this)};function os(i){if(po(i),i.I==3){var u=i.V++,c=Nt(i.J);if(J(c,"SID",i.M),J(c,"RID",u),J(c,"TYPE","terminate"),hn(i,c),u=new $t(i,i.j,u),u.M=2,u.A=zn(Nt(c)),c=!1,a.navigator&&a.navigator.sendBeacon)try{c=a.navigator.sendBeacon(u.A.toString(),"")}catch{}!c&&a.Image&&(new Image().src=u.A,c=!0),c||(u.g=Ao(u.j,null),u.g.ea(u.A)),u.F=Date.now(),$n(u)}vo(i)}function Kn(i){i.g&&(us(i),i.g.cancel(),i.g=null)}function po(i){Kn(i),i.v&&(a.clearTimeout(i.v),i.v=null),Qn(i),i.h.cancel(),i.m&&(typeof i.m=="number"&&a.clearTimeout(i.m),i.m=null)}function Wn(i){if(!Yi(i.h)&&!i.m){i.m=!0;var u=i.Ea;At||p(),dt||(At(),dt=!0),E.add(u,i),i.D=0}}function el(i,u){return Ji(i.h)>=i.h.j-(i.m?1:0)?!1:i.m?(i.i=u.G.concat(i.i),!0):i.I==1||i.I==2||i.D>=(i.Sa?0:i.Ta)?!1:(i.m=Xe(d(i.Ea,i,u),Io(i,i.D)),i.D++,!0)}n.Ea=function(i){if(this.m)if(this.m=null,this.I==1){if(!i){this.V=Math.floor(Math.random()*1e5),i=this.V++;const v=new $t(this,this.j,i);let R=this.o;if(this.U&&(R?(R=bi(R),Pi(R,this.U)):R=this.U),this.u!==null||this.R||(v.J=R,R=null),this.S)t:{for(var u=0,c=0;c<this.i.length;c++){e:{var f=this.i[c];if("__data__"in f.map&&(f=f.map.__data__,typeof f=="string")){f=f.length;break e}f=void 0}if(f===void 0)break;if(u+=f,u>4096){u=c;break t}if(u===4096||c===this.i.length-1){u=c+1;break t}}u=1e3}else u=1e3;u=_o(this,v,u),c=Nt(this.J),J(c,"RID",i),J(c,"CVER",22),this.G&&J(c,"X-HTTP-Session-Id",this.G),hn(this,c),R&&(this.R?u="headers="+tn(uo(R))+"&"+u:this.u&&is(c,this.u,R)),ns(this.h,v),this.Ra&&J(c,"TYPE","init"),this.S?(J(c,"$req",u),J(c,"SID","null"),v.U=!0,Xr(v,c,null)):Xr(v,c,u),this.I=2}}else this.I==3&&(i?go(this,i):this.i.length==0||Yi(this.h)||go(this))};function go(i,u){var c;u?c=u.l:c=i.V++;const f=Nt(i.J);J(f,"SID",i.M),J(f,"RID",c),J(f,"AID",i.K),hn(i,f),i.u&&i.o&&is(f,i.u,i.o),c=new $t(i,i.j,c,i.D+1),i.u===null&&(c.J=i.o),u&&(i.i=u.G.concat(i.i)),u=_o(i,c,1e3),c.H=Math.round(i.va*.5)+Math.round(i.va*.5*Math.random()),ns(i.h,c),Xr(c,f,u)}function hn(i,u){i.H&&Fn(i.H,function(c,f){J(u,f,c)}),i.l&&Fn({},function(c,f){J(u,f,c)})}function _o(i,u,c){c=Math.min(i.i.length,c);const f=i.l?d(i.l.Ka,i.l,i):null;t:{var v=i.i;let B=-1;for(;;){const it=["count="+c];B==-1?c>0?(B=v[0].g,it.push("ofs="+B)):B=0:it.push("ofs="+B);let W=!0;for(let ut=0;ut<c;ut++){var R=v[ut].g;const Dt=v[ut].map;if(R-=B,R<0)B=Math.max(0,v[ut].g-100),W=!1;else try{R="req"+R+"_"||"";try{var C=Dt instanceof Map?Dt:Object.entries(Dt);for(const[de,Kt]of C){let Wt=Kt;l(Kt)&&(Wt=Kr(Kt)),it.push(R+de+"="+encodeURIComponent(Wt))}}catch(de){throw it.push(R+"type="+encodeURIComponent("_badmap")),de}}catch{f&&f(Dt)}}if(W){C=it.join("&");break t}}C=void 0}return i=i.i.splice(0,c),u.G=i,C}function yo(i){if(!i.g&&!i.v){i.Y=1;var u=i.Da;At||p(),dt||(At(),dt=!0),E.add(u,i),i.A=0}}function as(i){return i.g||i.v||i.A>=3?!1:(i.Y++,i.v=Xe(d(i.Da,i),Io(i,i.A)),i.A++,!0)}n.Da=function(){if(this.v=null,Eo(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var i=4*this.T;this.j.info("BP detection timer enabled: "+i),this.B=Xe(d(this.Wa,this),i)}},n.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,Et(10),Kn(this),Eo(this))};function us(i){i.B!=null&&(a.clearTimeout(i.B),i.B=null)}function Eo(i){i.g=new $t(i,i.j,"rpc",i.Y),i.u===null&&(i.g.J=i.o),i.g.P=0;var u=Nt(i.na);J(u,"RID","rpc"),J(u,"SID",i.M),J(u,"AID",i.K),J(u,"CI",i.F?"0":"1"),!i.F&&i.ia&&J(u,"TO",i.ia),J(u,"TYPE","xmlhttp"),hn(i,u),i.u&&i.o&&is(u,i.u,i.o),i.O&&(i.g.H=i.O);var c=i.g;i=i.ba,c.M=1,c.A=zn(Nt(u)),c.u=null,c.R=!0,Hi(c,i)}n.Va=function(){this.C!=null&&(this.C=null,Kn(this),as(this),Et(19))};function Qn(i){i.C!=null&&(a.clearTimeout(i.C),i.C=null)}function To(i,u){var c=null;if(i.g==u){Qn(i),us(i),i.g=null;var f=2}else if(es(i.h,u))c=u.G,Xi(i.h,u),f=1;else return;if(i.I!=0){if(u.o)if(f==1){c=u.u?u.u.length:0,u=Date.now()-u.F;var v=i.D;f=qn(),yt(f,new qi(f,c)),Wn(i)}else yo(i);else if(v=u.m,v==3||v==0&&u.X>0||!(f==1&&el(i,u)||f==2&&as(i)))switch(c&&c.length>0&&(u=i.h,u.i=u.i.concat(c)),v){case 1:fe(i,5);break;case 4:fe(i,10);break;case 3:fe(i,6);break;default:fe(i,2)}}}function Io(i,u){let c=i.Qa+Math.floor(Math.random()*i.Za);return i.isActive()||(c*=2),c*u}function fe(i,u){if(i.j.info("Error code "+u),u==2){var c=d(i.bb,i),f=i.Ua;const v=!f;f=new zt(f||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||nn(f,"https"),zn(f),v?Qc(f.toString(),c):Yc(f.toString(),c)}else Et(2);i.I=0,i.l&&i.l.pa(u),vo(i),po(i)}n.bb=function(i){i?(this.j.info("Successfully pinged google.com"),Et(2)):(this.j.info("Failed to ping google.com"),Et(1))};function vo(i){if(i.I=0,i.ja=[],i.l){const u=Zi(i.h);(u.length!=0||i.i.length!=0)&&(M(i.ja,u),M(i.ja,i.i),i.h.i.length=0,V(i.i),i.i.length=0),i.l.oa()}}function wo(i,u,c){var f=c instanceof zt?Nt(c):new zt(c);if(f.g!="")u&&(f.g=u+"."+f.g),rn(f,f.u);else{var v=a.location;f=v.protocol,u=u?u+"."+v.hostname:v.hostname,v=+v.port;const R=new zt(null);f&&nn(R,f),u&&(R.g=u),v&&rn(R,v),c&&(R.h=c),f=R}return c=i.G,u=i.wa,c&&u&&J(f,c,u),J(f,"VER",i.ka),hn(i,f),f}function Ao(i,u,c){if(u&&!i.L)throw Error("Can't create secondary domain capable XhrIo object.");return u=i.Aa&&!i.ma?new tt(new ss({ab:c})):new tt(i.ma),u.Fa(i.L),u}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Ro(){}n=Ro.prototype,n.ra=function(){},n.qa=function(){},n.pa=function(){},n.oa=function(){},n.isActive=function(){return!0},n.Ka=function(){};function Yn(){}Yn.prototype.g=function(i,u){return new Rt(i,u)};function Rt(i,u){mt.call(this),this.g=new mo(u),this.l=i,this.h=u&&u.messageUrlParams||null,i=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(i?i["X-Client-Protocol"]="webchannel":i={"X-Client-Protocol":"webchannel"}),this.g.o=i,i=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(i?i["X-WebChannel-Content-Type"]=u.messageContentType:i={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.sa&&(i?i["X-WebChannel-Client-Profile"]=u.sa:i={"X-WebChannel-Client-Profile":u.sa}),this.g.U=i,(i=u&&u.Qb)&&!g(i)&&(this.g.u=i),this.A=u&&u.supportsCrossDomainXhr||!1,this.v=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!g(u)&&(this.g.G=u,i=this.h,i!==null&&u in i&&(i=this.h,u in i&&delete i[u])),this.j=new be(this)}I(Rt,mt),Rt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},Rt.prototype.close=function(){os(this.g)},Rt.prototype.o=function(i){var u=this.g;if(typeof i=="string"){var c={};c.__data__=i,i=c}else this.v&&(c={},c.__data__=Kr(i),i=c);u.i.push(new qc(u.Ya++,i)),u.I==3&&Wn(u)},Rt.prototype.N=function(){this.g.l=null,delete this.j,os(this.g),delete this.g,Rt.Z.N.call(this)};function bo(i){Wr.call(this),i.__headers__&&(this.headers=i.__headers__,this.statusCode=i.__status__,delete i.__headers__,delete i.__status__);var u=i.__sm__;if(u){t:{for(const c in u){i=c;break t}i=void 0}(this.i=i)&&(i=this.i,u=u!==null&&i in u?u[i]:void 0),this.data=u}else this.data=i}I(bo,Wr);function So(){Qr.call(this),this.status=1}I(So,Qr);function be(i){this.g=i}I(be,Ro),be.prototype.ra=function(){yt(this.g,"a")},be.prototype.qa=function(i){yt(this.g,new bo(i))},be.prototype.pa=function(i){yt(this.g,new So)},be.prototype.oa=function(){yt(this.g,"b")},Yn.prototype.createWebChannel=Yn.prototype.g,Rt.prototype.send=Rt.prototype.o,Rt.prototype.open=Rt.prototype.m,Rt.prototype.close=Rt.prototype.close,Za=function(){return new Yn},Xa=function(){return qn()},Ja=ce,bs={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},jn.NO_ERROR=0,jn.TIMEOUT=8,jn.HTTP_ERROR=6,ir=jn,ji.COMPLETE="complete",Ya=ji,Li.EventType=Ye,Ye.OPEN="a",Ye.CLOSE="b",Ye.ERROR="c",Ye.MESSAGE="d",mt.prototype.listen=mt.prototype.J,dn=Li,tt.prototype.listenOnce=tt.prototype.K,tt.prototype.getLastError=tt.prototype.Ha,tt.prototype.getLastErrorCode=tt.prototype.ya,tt.prototype.getStatus=tt.prototype.ca,tt.prototype.getResponseJson=tt.prototype.La,tt.prototype.getResponseText=tt.prototype.la,tt.prototype.send=tt.prototype.ea,tt.prototype.setWithCredentials=tt.prototype.Fa,Qa=tt}).apply(typeof Zn<"u"?Zn:typeof self<"u"?self:typeof window<"u"?window:{});/**
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
 */class gt{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}gt.UNAUTHENTICATED=new gt(null),gt.GOOGLE_CREDENTIALS=new gt("google-credentials-uid"),gt.FIRST_PARTY=new gt("first-party-uid"),gt.MOCK_USER=new gt("mock-user");/**
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
 */let ze="12.8.0";function Jh(n){ze=n}/**
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
 *//**
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
 */const ye=new $a("@firebase/firestore");function Se(){return ye.logLevel}function D(n,...t){if(ye.logLevel<=z.DEBUG){const e=t.map(Gs);ye.debug(`Firestore (${ze}): ${n}`,...e)}}function qt(n,...t){if(ye.logLevel<=z.ERROR){const e=t.map(Gs);ye.error(`Firestore (${ze}): ${n}`,...e)}}function Le(n,...t){if(ye.logLevel<=z.WARN){const e=t.map(Gs);ye.warn(`Firestore (${ze}): ${n}`,...e)}}function Gs(n){if(typeof n=="string")return n;try{return(function(e){return JSON.stringify(e)})(n)}catch{return n}}/**
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
 */function L(n,t,e){let r="Unexpected state";typeof t=="string"?r=t:e=t,tu(n,r,e)}function tu(n,t,e){let r=`FIRESTORE (${ze}) INTERNAL ASSERTION FAILED: ${t} (ID: ${n.toString(16)})`;if(e!==void 0)try{r+=" CONTEXT: "+JSON.stringify(e)}catch{r+=" CONTEXT: "+e}throw qt(r),new Error(r)}function H(n,t,e,r){let s="Unexpected state";typeof e=="string"?s=e:r=e,n||tu(t,s,r)}function U(n,t){return n}/**
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
 */const b={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class N extends $e{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Zt{constructor(){this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}}/**
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
 */class eu{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class Xh{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable((()=>e(gt.UNAUTHENTICATED)))}shutdown(){}}class Zh{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable((()=>e(this.token.user)))}shutdown(){this.changeListener=null}}class tf{constructor(t){this.t=t,this.currentUser=gt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){H(this.o===void 0,42304);let r=this.i;const s=h=>this.i!==r?(r=this.i,e(h)):Promise.resolve();let o=new Zt;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new Zt,t.enqueueRetryable((()=>s(this.currentUser)))};const a=()=>{const h=o;t.enqueueRetryable((async()=>{await h.promise,await s(this.currentUser)}))},l=h=>{D("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=h,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit((h=>l(h))),setTimeout((()=>{if(!this.auth){const h=this.t.getImmediate({optional:!0});h?l(h):(D("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new Zt)}}),0),a()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then((r=>this.i!==t?(D("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(H(typeof r.accessToken=="string",31837,{l:r}),new eu(r.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return H(t===null||typeof t=="string",2055,{h:t}),new gt(t)}}class ef{constructor(t,e,r){this.P=t,this.T=e,this.I=r,this.type="FirstParty",this.user=gt.FIRST_PARTY,this.R=new Map}A(){return this.I?this.I():null}get headers(){this.R.set("X-Goog-AuthUser",this.P);const t=this.A();return t&&this.R.set("Authorization",t),this.T&&this.R.set("X-Goog-Iam-Authorization-Token",this.T),this.R}}class nf{constructor(t,e,r){this.P=t,this.T=e,this.I=r}getToken(){return Promise.resolve(new ef(this.P,this.T,this.I))}start(t,e){t.enqueueRetryable((()=>e(gt.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class qo{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class rf{constructor(t,e){this.V=e,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Mh(t)&&t.settings.appCheckToken&&(this.p=t.settings.appCheckToken)}start(t,e){H(this.o===void 0,3512);const r=o=>{o.error!=null&&D("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const a=o.token!==this.m;return this.m=o.token,D("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?e(o.token):Promise.resolve()};this.o=o=>{t.enqueueRetryable((()=>r(o)))};const s=o=>{D("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((o=>s(o))),setTimeout((()=>{if(!this.appCheck){const o=this.V.getImmediate({optional:!0});o?s(o):D("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new qo(this.p));const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then((e=>e?(H(typeof e.token=="string",44558,{tokenResult:e}),this.m=e.token,new qo(e.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function sf(n){const t=typeof self<"u"&&(self.crypto||self.msCrypto),e=new Uint8Array(n);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(e);else for(let r=0;r<n;r++)e[r]=Math.floor(256*Math.random());return e}/**
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
 */class Hs{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=sf(40);for(let o=0;o<s.length;++o)r.length<20&&s[o]<e&&(r+=t.charAt(s[o]%62))}return r}}function q(n,t){return n<t?-1:n>t?1:0}function Ss(n,t){const e=Math.min(n.length,t.length);for(let r=0;r<e;r++){const s=n.charAt(r),o=t.charAt(r);if(s!==o)return gs(s)===gs(o)?q(s,o):gs(s)?1:-1}return q(n.length,t.length)}const of=55296,af=57343;function gs(n){const t=n.charCodeAt(0);return t>=of&&t<=af}function Fe(n,t,e){return n.length===t.length&&n.every(((r,s)=>e(r,t[s])))}/**
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
 */const jo="__name__";class kt{constructor(t,e,r){e===void 0?e=0:e>t.length&&L(637,{offset:e,range:t.length}),r===void 0?r=t.length-e:r>t.length-e&&L(1746,{length:r,range:t.length-e}),this.segments=t,this.offset=e,this.len=r}get length(){return this.len}isEqual(t){return kt.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof kt?t.forEach((r=>{e.push(r)})):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,r=this.limit();e<r;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const r=Math.min(t.length,e.length);for(let s=0;s<r;s++){const o=kt.compareSegments(t.get(s),e.get(s));if(o!==0)return o}return q(t.length,e.length)}static compareSegments(t,e){const r=kt.isNumericId(t),s=kt.isNumericId(e);return r&&!s?-1:!r&&s?1:r&&s?kt.extractNumericId(t).compare(kt.extractNumericId(e)):Ss(t,e)}static isNumericId(t){return t.startsWith("__id")&&t.endsWith("__")}static extractNumericId(t){return Xt.fromString(t.substring(4,t.length-2))}}class Q extends kt{construct(t,e,r){return new Q(t,e,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const r of t){if(r.indexOf("//")>=0)throw new N(b.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);e.push(...r.split("/").filter((s=>s.length>0)))}return new Q(e)}static emptyPath(){return new Q([])}}const uf=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ht extends kt{construct(t,e,r){return new ht(t,e,r)}static isValidIdentifier(t){return uf.test(t)}canonicalString(){return this.toArray().map((t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ht.isValidIdentifier(t)||(t="`"+t+"`"),t))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===jo}static keyField(){return new ht([jo])}static fromServerFormat(t){const e=[];let r="",s=0;const o=()=>{if(r.length===0)throw new N(b.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(r),r=""};let a=!1;for(;s<t.length;){const l=t[s];if(l==="\\"){if(s+1===t.length)throw new N(b.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const h=t[s+1];if(h!=="\\"&&h!=="."&&h!=="`")throw new N(b.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);r+=h,s+=2}else l==="`"?(a=!a,s++):l!=="."||a?(r+=l,s++):(o(),s++)}if(o(),a)throw new N(b.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new ht(e)}static emptyPath(){return new ht([])}}/**
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
 */class x{constructor(t){this.path=t}static fromPath(t){return new x(Q.fromString(t))}static fromName(t){return new x(Q.fromString(t).popFirst(5))}static empty(){return new x(Q.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&Q.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return Q.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new x(new Q(t.slice()))}}/**
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
 */function nu(n,t,e){if(!e)throw new N(b.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${t}.`)}function cf(n,t,e,r){if(t===!0&&r===!0)throw new N(b.INVALID_ARGUMENT,`${n} and ${e} cannot be used together.`)}function $o(n){if(!x.isDocumentKey(n))throw new N(b.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function zo(n){if(x.isDocumentKey(n))throw new N(b.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function ru(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function br(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const t=(function(r){return r.constructor?r.constructor.name:null})(n);return t?`a custom ${t} object`:"an object"}}return typeof n=="function"?"a function":L(12329,{type:typeof n})}function wn(n,t){if("_delegate"in n&&(n=n._delegate),!(n instanceof t)){if(t.name===n.constructor.name)throw new N(b.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=br(n);throw new N(b.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return n}function lf(n,t){if(t<=0)throw new N(b.INVALID_ARGUMENT,`Function ${n}() requires a positive number, but it was: ${t}.`)}/**
 * @license
 * Copyright 2025 Google LLC
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
 */function st(n,t){const e={typeString:n};return t&&(e.value=t),e}function Dn(n,t){if(!ru(n))throw new N(b.INVALID_ARGUMENT,"JSON must be an object");let e;for(const r in t)if(t[r]){const s=t[r].typeString,o="value"in t[r]?{value:t[r].value}:void 0;if(!(r in n)){e=`JSON missing required field: '${r}'`;break}const a=n[r];if(s&&typeof a!==s){e=`JSON field '${r}' must be a ${s}.`;break}if(o!==void 0&&a!==o.value){e=`Expected '${r}' field to equal '${o.value}'`;break}}if(e)throw new N(b.INVALID_ARGUMENT,e);return!0}/**
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
 */const Go=-62135596800,Ho=1e6;class X{static now(){return X.fromMillis(Date.now())}static fromDate(t){return X.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),r=Math.floor((t-1e3*e)*Ho);return new X(e,r)}constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new N(b.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new N(b.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<Go)throw new N(b.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new N(b.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Ho}_compareTo(t){return this.seconds===t.seconds?q(this.nanoseconds,t.nanoseconds):q(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:X._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(t){if(Dn(t,X._jsonSchema))return new X(t.seconds,t.nanoseconds)}valueOf(){const t=this.seconds-Go;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}X._jsonSchemaVersion="firestore/timestamp/1.0",X._jsonSchema={type:st("string",X._jsonSchemaVersion),seconds:st("number"),nanoseconds:st("number")};/**
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
 */class F{static fromTimestamp(t){return new F(t)}static min(){return new F(new X(0,0))}static max(){return new F(new X(253402300799,999999999))}constructor(t){this.timestamp=t}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const An=-1;function hf(n,t){const e=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=F.fromTimestamp(r===1e9?new X(e+1,0):new X(e,r));return new ee(s,x.empty(),t)}function ff(n){return new ee(n.readTime,n.key,An)}class ee{constructor(t,e,r){this.readTime=t,this.documentKey=e,this.largestBatchId=r}static min(){return new ee(F.min(),x.empty(),An)}static max(){return new ee(F.max(),x.empty(),An)}}function df(n,t){let e=n.readTime.compareTo(t.readTime);return e!==0?e:(e=x.comparator(n.documentKey,t.documentKey),e!==0?e:q(n.largestBatchId,t.largestBatchId))}/**
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
 */const mf="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class pf{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((t=>t()))}}/**
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
 */async function Ge(n){if(n.code!==b.FAILED_PRECONDITION||n.message!==mf)throw n;D("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class S{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t((e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)}),(e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)}))}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&L(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new S(((r,s)=>{this.nextCallback=o=>{this.wrapSuccess(t,o).next(r,s)},this.catchCallback=o=>{this.wrapFailure(e,o).next(r,s)}}))}toPromise(){return new Promise(((t,e)=>{this.next(t,e)}))}wrapUserFunction(t){try{const e=t();return e instanceof S?e:S.resolve(e)}catch(e){return S.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction((()=>t(e))):S.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction((()=>t(e))):S.reject(e)}static resolve(t){return new S(((e,r)=>{e(t)}))}static reject(t){return new S(((e,r)=>{r(t)}))}static waitFor(t){return new S(((e,r)=>{let s=0,o=0,a=!1;t.forEach((l=>{++s,l.next((()=>{++o,a&&o===s&&e()}),(h=>r(h)))})),a=!0,o===s&&e()}))}static or(t){let e=S.resolve(!1);for(const r of t)e=e.next((s=>s?S.resolve(s):r()));return e}static forEach(t,e){const r=[];return t.forEach(((s,o)=>{r.push(e.call(this,s,o))})),this.waitFor(r)}static mapArray(t,e){return new S(((r,s)=>{const o=t.length,a=new Array(o);let l=0;for(let h=0;h<o;h++){const d=h;e(t[d]).next((m=>{a[d]=m,++l,l===o&&r(a)}),(m=>s(m)))}}))}static doWhile(t,e){return new S(((r,s)=>{const o=()=>{t()===!0?e().next((()=>{o()}),s):r()};o()}))}}function gf(n){const t=n.match(/Android ([\d.]+)/i),e=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(e)}function He(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
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
 */class Sr{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>e.writeSequenceNumber(r))}ae(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.ue&&this.ue(t),t}}Sr.ce=-1;/**
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
 */const Ks=-1;function Pr(n){return n==null}function pr(n){return n===0&&1/n==-1/0}function _f(n){return typeof n=="number"&&Number.isInteger(n)&&!pr(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
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
 */const su="";function yf(n){let t="";for(let e=0;e<n.length;e++)t.length>0&&(t=Ko(t)),t=Ef(n.get(e),t);return Ko(t)}function Ef(n,t){let e=t;const r=n.length;for(let s=0;s<r;s++){const o=n.charAt(s);switch(o){case"\0":e+="";break;case su:e+="";break;default:e+=o}}return e}function Ko(n){return n+su+""}/**
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
 */function Wo(n){let t=0;for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t++;return t}function Te(n,t){for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t(e,n[e])}function iu(n){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t))return!1;return!0}/**
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
 */class Z{constructor(t,e){this.comparator=t,this.root=e||lt.EMPTY}insert(t,e){return new Z(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,lt.BLACK,null,null))}remove(t){return new Z(this.comparator,this.root.remove(t,this.comparator).copy(null,null,lt.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const r=this.comparator(t,e.key);if(r===0)return e.value;r<0?e=e.left:r>0&&(e=e.right)}return null}indexOf(t){let e=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(t,r.key);if(s===0)return e+r.left.size;s<0?r=r.left:(e+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal(((e,r)=>(t(e,r),!1)))}toString(){const t=[];return this.inorderTraversal(((e,r)=>(t.push(`${e}:${r}`),!1))),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new tr(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new tr(this.root,t,this.comparator,!1)}getReverseIterator(){return new tr(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new tr(this.root,t,this.comparator,!0)}}class tr{constructor(t,e,r,s){this.isReverse=s,this.nodeStack=[];let o=1;for(;!t.isEmpty();)if(o=e?r(t.key,e):1,e&&s&&(o*=-1),o<0)t=this.isReverse?t.left:t.right;else{if(o===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class lt{constructor(t,e,r,s,o){this.key=t,this.value=e,this.color=r??lt.RED,this.left=s??lt.EMPTY,this.right=o??lt.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,r,s,o){return new lt(t??this.key,e??this.value,r??this.color,s??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,r){let s=this;const o=r(t,s.key);return s=o<0?s.copy(null,null,null,s.left.insert(t,e,r),null):o===0?s.copy(null,e,null,null,null):s.copy(null,null,null,null,s.right.insert(t,e,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return lt.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let r,s=this;if(e(t,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(t,e),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),e(t,s.key)===0){if(s.right.isEmpty())return lt.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(t,e))}return s.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,lt.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,lt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw L(43730,{key:this.key,value:this.value});if(this.right.isRed())throw L(14113,{key:this.key,value:this.value});const t=this.left.check();if(t!==this.right.check())throw L(27949);return t+(this.isRed()?0:1)}}lt.EMPTY=null,lt.RED=!0,lt.BLACK=!1;lt.EMPTY=new class{constructor(){this.size=0}get key(){throw L(57766)}get value(){throw L(16141)}get color(){throw L(16727)}get left(){throw L(29726)}get right(){throw L(36894)}copy(t,e,r,s,o){return this}insert(t,e,r){return new lt(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class at{constructor(t){this.comparator=t,this.data=new Z(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal(((e,r)=>(t(e),!1)))}forEachInRange(t,e){const r=this.data.getIteratorFrom(t[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,t[1])>=0)return;e(s.key)}}forEachWhile(t,e){let r;for(r=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();r.hasNext();)if(!t(r.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new Qo(this.data.getIterator())}getIteratorFrom(t){return new Qo(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach((r=>{e=e.add(r)})),e}isEqual(t){if(!(t instanceof at)||this.size!==t.size)return!1;const e=this.data.getIterator(),r=t.data.getIterator();for(;e.hasNext();){const s=e.getNext().key,o=r.getNext().key;if(this.comparator(s,o)!==0)return!1}return!0}toArray(){const t=[];return this.forEach((e=>{t.push(e)})),t}toString(){const t=[];return this.forEach((e=>t.push(e))),"SortedSet("+t.toString()+")"}copy(t){const e=new at(this.comparator);return e.data=t,e}}class Qo{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Pt{constructor(t){this.fields=t,t.sort(ht.comparator)}static empty(){return new Pt([])}unionWith(t){let e=new at(ht.comparator);for(const r of this.fields)e=e.add(r);for(const r of t)e=e.add(r);return new Pt(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return Fe(this.fields,t.fields,((e,r)=>e.isEqual(r)))}}/**
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
 */class ou extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class ft{constructor(t){this.binaryString=t}static fromBase64String(t){const e=(function(s){try{return atob(s)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new ou("Invalid base64 string: "+o):o}})(t);return new ft(e)}static fromUint8Array(t){const e=(function(s){let o="";for(let a=0;a<s.length;++a)o+=String.fromCharCode(s[a]);return o})(t);return new ft(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(e){return btoa(e)})(this.binaryString)}toUint8Array(){return(function(e){const r=new Uint8Array(e.length);for(let s=0;s<e.length;s++)r[s]=e.charCodeAt(s);return r})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return q(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}ft.EMPTY_BYTE_STRING=new ft("");const Tf=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ne(n){if(H(!!n,39018),typeof n=="string"){let t=0;const e=Tf.exec(n);if(H(!!e,46558,{timestamp:n}),e[1]){let s=e[1];s=(s+"000000000").substr(0,9),t=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:et(n.seconds),nanos:et(n.nanos)}}function et(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function re(n){return typeof n=="string"?ft.fromBase64String(n):ft.fromUint8Array(n)}/**
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
 */const au="server_timestamp",uu="__type__",cu="__previous_value__",lu="__local_write_time__";function Ws(n){var e,r;return((r=(((e=n==null?void 0:n.mapValue)==null?void 0:e.fields)||{})[uu])==null?void 0:r.stringValue)===au}function Vr(n){const t=n.mapValue.fields[cu];return Ws(t)?Vr(t):t}function Rn(n){const t=ne(n.mapValue.fields[lu].timestampValue);return new X(t.seconds,t.nanos)}/**
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
 */class If{constructor(t,e,r,s,o,a,l,h,d,m,I){this.databaseId=t,this.appId=e,this.persistenceKey=r,this.host=s,this.ssl=o,this.forceLongPolling=a,this.autoDetectLongPolling=l,this.longPollingOptions=h,this.useFetchStreams=d,this.isUsingEmulator=m,this.apiKey=I}}const gr="(default)";class bn{constructor(t,e){this.projectId=t,this.database=e||gr}static empty(){return new bn("","")}get isDefaultDatabase(){return this.database===gr}isEqual(t){return t instanceof bn&&t.projectId===this.projectId&&t.database===this.database}}function vf(n,t){if(!Object.prototype.hasOwnProperty.apply(n.options,["projectId"]))throw new N(b.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new bn(n.options.projectId,t)}/**
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
 */const hu="__type__",wf="__max__",er={mapValue:{}},fu="__vector__",_r="value";function se(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Ws(n)?4:Rf(n)?9007199254740991:Af(n)?10:11:L(28295,{value:n})}function Ft(n,t){if(n===t)return!0;const e=se(n);if(e!==se(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===t.booleanValue;case 4:return Rn(n).isEqual(Rn(t));case 3:return(function(s,o){if(typeof s.timestampValue=="string"&&typeof o.timestampValue=="string"&&s.timestampValue.length===o.timestampValue.length)return s.timestampValue===o.timestampValue;const a=ne(s.timestampValue),l=ne(o.timestampValue);return a.seconds===l.seconds&&a.nanos===l.nanos})(n,t);case 5:return n.stringValue===t.stringValue;case 6:return(function(s,o){return re(s.bytesValue).isEqual(re(o.bytesValue))})(n,t);case 7:return n.referenceValue===t.referenceValue;case 8:return(function(s,o){return et(s.geoPointValue.latitude)===et(o.geoPointValue.latitude)&&et(s.geoPointValue.longitude)===et(o.geoPointValue.longitude)})(n,t);case 2:return(function(s,o){if("integerValue"in s&&"integerValue"in o)return et(s.integerValue)===et(o.integerValue);if("doubleValue"in s&&"doubleValue"in o){const a=et(s.doubleValue),l=et(o.doubleValue);return a===l?pr(a)===pr(l):isNaN(a)&&isNaN(l)}return!1})(n,t);case 9:return Fe(n.arrayValue.values||[],t.arrayValue.values||[],Ft);case 10:case 11:return(function(s,o){const a=s.mapValue.fields||{},l=o.mapValue.fields||{};if(Wo(a)!==Wo(l))return!1;for(const h in a)if(a.hasOwnProperty(h)&&(l[h]===void 0||!Ft(a[h],l[h])))return!1;return!0})(n,t);default:return L(52216,{left:n})}}function Sn(n,t){return(n.values||[]).find((e=>Ft(e,t)))!==void 0}function Ue(n,t){if(n===t)return 0;const e=se(n),r=se(t);if(e!==r)return q(e,r);switch(e){case 0:case 9007199254740991:return 0;case 1:return q(n.booleanValue,t.booleanValue);case 2:return(function(o,a){const l=et(o.integerValue||o.doubleValue),h=et(a.integerValue||a.doubleValue);return l<h?-1:l>h?1:l===h?0:isNaN(l)?isNaN(h)?0:-1:1})(n,t);case 3:return Yo(n.timestampValue,t.timestampValue);case 4:return Yo(Rn(n),Rn(t));case 5:return Ss(n.stringValue,t.stringValue);case 6:return(function(o,a){const l=re(o),h=re(a);return l.compareTo(h)})(n.bytesValue,t.bytesValue);case 7:return(function(o,a){const l=o.split("/"),h=a.split("/");for(let d=0;d<l.length&&d<h.length;d++){const m=q(l[d],h[d]);if(m!==0)return m}return q(l.length,h.length)})(n.referenceValue,t.referenceValue);case 8:return(function(o,a){const l=q(et(o.latitude),et(a.latitude));return l!==0?l:q(et(o.longitude),et(a.longitude))})(n.geoPointValue,t.geoPointValue);case 9:return Jo(n.arrayValue,t.arrayValue);case 10:return(function(o,a){var A,V,M,O;const l=o.fields||{},h=a.fields||{},d=(A=l[_r])==null?void 0:A.arrayValue,m=(V=h[_r])==null?void 0:V.arrayValue,I=q(((M=d==null?void 0:d.values)==null?void 0:M.length)||0,((O=m==null?void 0:m.values)==null?void 0:O.length)||0);return I!==0?I:Jo(d,m)})(n.mapValue,t.mapValue);case 11:return(function(o,a){if(o===er.mapValue&&a===er.mapValue)return 0;if(o===er.mapValue)return 1;if(a===er.mapValue)return-1;const l=o.fields||{},h=Object.keys(l),d=a.fields||{},m=Object.keys(d);h.sort(),m.sort();for(let I=0;I<h.length&&I<m.length;++I){const A=Ss(h[I],m[I]);if(A!==0)return A;const V=Ue(l[h[I]],d[m[I]]);if(V!==0)return V}return q(h.length,m.length)})(n.mapValue,t.mapValue);default:throw L(23264,{he:e})}}function Yo(n,t){if(typeof n=="string"&&typeof t=="string"&&n.length===t.length)return q(n,t);const e=ne(n),r=ne(t),s=q(e.seconds,r.seconds);return s!==0?s:q(e.nanos,r.nanos)}function Jo(n,t){const e=n.values||[],r=t.values||[];for(let s=0;s<e.length&&s<r.length;++s){const o=Ue(e[s],r[s]);if(o)return o}return q(e.length,r.length)}function Be(n){return Ps(n)}function Ps(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?(function(e){const r=ne(e);return`time(${r.seconds},${r.nanos})`})(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?(function(e){return re(e).toBase64()})(n.bytesValue):"referenceValue"in n?(function(e){return x.fromName(e).toString()})(n.referenceValue):"geoPointValue"in n?(function(e){return`geo(${e.latitude},${e.longitude})`})(n.geoPointValue):"arrayValue"in n?(function(e){let r="[",s=!0;for(const o of e.values||[])s?s=!1:r+=",",r+=Ps(o);return r+"]"})(n.arrayValue):"mapValue"in n?(function(e){const r=Object.keys(e.fields||{}).sort();let s="{",o=!0;for(const a of r)o?o=!1:s+=",",s+=`${a}:${Ps(e.fields[a])}`;return s+"}"})(n.mapValue):L(61005,{value:n})}function or(n){switch(se(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const t=Vr(n);return t?16+or(t):16;case 5:return 2*n.stringValue.length;case 6:return re(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return(function(r){return(r.values||[]).reduce(((s,o)=>s+or(o)),0)})(n.arrayValue);case 10:case 11:return(function(r){let s=0;return Te(r.fields,((o,a)=>{s+=o.length+or(a)})),s})(n.mapValue);default:throw L(13486,{value:n})}}function Xo(n,t){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${t.path.canonicalString()}`}}function Vs(n){return!!n&&"integerValue"in n}function Qs(n){return!!n&&"arrayValue"in n}function Zo(n){return!!n&&"nullValue"in n}function ta(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function ar(n){return!!n&&"mapValue"in n}function Af(n){var e,r;return((r=(((e=n==null?void 0:n.mapValue)==null?void 0:e.fields)||{})[hu])==null?void 0:r.stringValue)===fu}function _n(n){if(n.geoPointValue)return{geoPointValue:{...n.geoPointValue}};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:{...n.timestampValue}};if(n.mapValue){const t={mapValue:{fields:{}}};return Te(n.mapValue.fields,((e,r)=>t.mapValue.fields[e]=_n(r))),t}if(n.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(n.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=_n(n.arrayValue.values[e]);return t}return{...n}}function Rf(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===wf}/**
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
 */class bt{constructor(t){this.value=t}static empty(){return new bt({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let r=0;r<t.length-1;++r)if(e=(e.mapValue.fields||{})[t.get(r)],!ar(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=_n(e)}setAll(t){let e=ht.emptyPath(),r={},s=[];t.forEach(((a,l)=>{if(!e.isImmediateParentOf(l)){const h=this.getFieldsMap(e);this.applyChanges(h,r,s),r={},s=[],e=l.popLast()}a?r[l.lastSegment()]=_n(a):s.push(l.lastSegment())}));const o=this.getFieldsMap(e);this.applyChanges(o,r,s)}delete(t){const e=this.field(t.popLast());ar(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return Ft(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let r=0;r<t.length;++r){let s=e.mapValue.fields[t.get(r)];ar(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},e.mapValue.fields[t.get(r)]=s),e=s}return e.mapValue.fields}applyChanges(t,e,r){Te(e,((s,o)=>t[s]=o));for(const s of r)delete t[s]}clone(){return new bt(_n(this.value))}}function du(n){const t=[];return Te(n.fields,((e,r)=>{const s=new ht([e]);if(ar(r)){const o=du(r.mapValue).fields;if(o.length===0)t.push(s);else for(const a of o)t.push(s.child(a))}else t.push(s)})),new Pt(t)}/**
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
 */class _t{constructor(t,e,r,s,o,a,l){this.key=t,this.documentType=e,this.version=r,this.readTime=s,this.createTime=o,this.data=a,this.documentState=l}static newInvalidDocument(t){return new _t(t,0,F.min(),F.min(),F.min(),bt.empty(),0)}static newFoundDocument(t,e,r,s){return new _t(t,1,e,F.min(),r,s,0)}static newNoDocument(t,e){return new _t(t,2,e,F.min(),F.min(),bt.empty(),0)}static newUnknownDocument(t,e){return new _t(t,3,e,F.min(),F.min(),bt.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(F.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=bt.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=bt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=F.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof _t&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new _t(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class yr{constructor(t,e){this.position=t,this.inclusive=e}}function ea(n,t,e){let r=0;for(let s=0;s<n.position.length;s++){const o=t[s],a=n.position[s];if(o.field.isKeyField()?r=x.comparator(x.fromName(a.referenceValue),e.key):r=Ue(a,e.data.field(o.field)),o.dir==="desc"&&(r*=-1),r!==0)break}return r}function na(n,t){if(n===null)return t===null;if(t===null||n.inclusive!==t.inclusive||n.position.length!==t.position.length)return!1;for(let e=0;e<n.position.length;e++)if(!Ft(n.position[e],t.position[e]))return!1;return!0}/**
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
 */class Pn{constructor(t,e="asc"){this.field=t,this.dir=e}}function bf(n,t){return n.dir===t.dir&&n.field.isEqual(t.field)}/**
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
 */class mu{}class rt extends mu{constructor(t,e,r){super(),this.field=t,this.op=e,this.value=r}static create(t,e,r){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,r):new Pf(t,e,r):e==="array-contains"?new Nf(t,r):e==="in"?new Df(t,r):e==="not-in"?new Mf(t,r):e==="array-contains-any"?new kf(t,r):new rt(t,e,r)}static createKeyFieldInFilter(t,e,r){return e==="in"?new Vf(t,r):new Cf(t,r)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&e.nullValue===void 0&&this.matchesComparison(Ue(e,this.value)):e!==null&&se(this.value)===se(e)&&this.matchesComparison(Ue(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return L(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Ct extends mu{constructor(t,e){super(),this.filters=t,this.op=e,this.Pe=null}static create(t,e){return new Ct(t,e)}matches(t){return pu(this)?this.filters.find((e=>!e.matches(t)))===void 0:this.filters.find((e=>e.matches(t)))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce(((t,e)=>t.concat(e.getFlattenedFilters())),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function pu(n){return n.op==="and"}function gu(n){return Sf(n)&&pu(n)}function Sf(n){for(const t of n.filters)if(t instanceof Ct)return!1;return!0}function Cs(n){if(n instanceof rt)return n.field.canonicalString()+n.op.toString()+Be(n.value);if(gu(n))return n.filters.map((t=>Cs(t))).join(",");{const t=n.filters.map((e=>Cs(e))).join(",");return`${n.op}(${t})`}}function _u(n,t){return n instanceof rt?(function(r,s){return s instanceof rt&&r.op===s.op&&r.field.isEqual(s.field)&&Ft(r.value,s.value)})(n,t):n instanceof Ct?(function(r,s){return s instanceof Ct&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce(((o,a,l)=>o&&_u(a,s.filters[l])),!0):!1})(n,t):void L(19439)}function yu(n){return n instanceof rt?(function(e){return`${e.field.canonicalString()} ${e.op} ${Be(e.value)}`})(n):n instanceof Ct?(function(e){return e.op.toString()+" {"+e.getFilters().map(yu).join(" ,")+"}"})(n):"Filter"}class Pf extends rt{constructor(t,e,r){super(t,e,r),this.key=x.fromName(r.referenceValue)}matches(t){const e=x.comparator(t.key,this.key);return this.matchesComparison(e)}}class Vf extends rt{constructor(t,e){super(t,"in",e),this.keys=Eu("in",e)}matches(t){return this.keys.some((e=>e.isEqual(t.key)))}}class Cf extends rt{constructor(t,e){super(t,"not-in",e),this.keys=Eu("not-in",e)}matches(t){return!this.keys.some((e=>e.isEqual(t.key)))}}function Eu(n,t){var e;return(((e=t.arrayValue)==null?void 0:e.values)||[]).map((r=>x.fromName(r.referenceValue)))}class Nf extends rt{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return Qs(e)&&Sn(e.arrayValue,this.value)}}class Df extends rt{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&Sn(this.value.arrayValue,e)}}class Mf extends rt{constructor(t,e){super(t,"not-in",e)}matches(t){if(Sn(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&e.nullValue===void 0&&!Sn(this.value.arrayValue,e)}}class kf extends rt{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!Qs(e)||!e.arrayValue.values)&&e.arrayValue.values.some((r=>Sn(this.value.arrayValue,r)))}}/**
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
 */class xf{constructor(t,e=null,r=[],s=[],o=null,a=null,l=null){this.path=t,this.collectionGroup=e,this.orderBy=r,this.filters=s,this.limit=o,this.startAt=a,this.endAt=l,this.Te=null}}function ra(n,t=null,e=[],r=[],s=null,o=null,a=null){return new xf(n,t,e,r,s,o,a)}function Ys(n){const t=U(n);if(t.Te===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map((r=>Cs(r))).join(","),e+="|ob:",e+=t.orderBy.map((r=>(function(o){return o.field.canonicalString()+o.dir})(r))).join(","),Pr(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map((r=>Be(r))).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map((r=>Be(r))).join(",")),t.Te=e}return t.Te}function Js(n,t){if(n.limit!==t.limit||n.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<n.orderBy.length;e++)if(!bf(n.orderBy[e],t.orderBy[e]))return!1;if(n.filters.length!==t.filters.length)return!1;for(let e=0;e<n.filters.length;e++)if(!_u(n.filters[e],t.filters[e]))return!1;return n.collectionGroup===t.collectionGroup&&!!n.path.isEqual(t.path)&&!!na(n.startAt,t.startAt)&&na(n.endAt,t.endAt)}function Ns(n){return x.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
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
 */class Ke{constructor(t,e=null,r=[],s=[],o=null,a="F",l=null,h=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=r,this.filters=s,this.limit=o,this.limitType=a,this.startAt=l,this.endAt=h,this.Ie=null,this.Ee=null,this.Re=null,this.startAt,this.endAt}}function Of(n,t,e,r,s,o,a,l){return new Ke(n,t,e,r,s,o,a,l)}function Tu(n){return new Ke(n)}function sa(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function Lf(n){return x.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}function Iu(n){return n.collectionGroup!==null}function yn(n){const t=U(n);if(t.Ie===null){t.Ie=[];const e=new Set;for(const o of t.explicitOrderBy)t.Ie.push(o),e.add(o.field.canonicalString());const r=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(a){let l=new at(ht.comparator);return a.filters.forEach((h=>{h.getFlattenedFilters().forEach((d=>{d.isInequality()&&(l=l.add(d.field))}))})),l})(t).forEach((o=>{e.has(o.canonicalString())||o.isKeyField()||t.Ie.push(new Pn(o,r))})),e.has(ht.keyField().canonicalString())||t.Ie.push(new Pn(ht.keyField(),r))}return t.Ie}function xt(n){const t=U(n);return t.Ee||(t.Ee=Ff(t,yn(n))),t.Ee}function Ff(n,t){if(n.limitType==="F")return ra(n.path,n.collectionGroup,t,n.filters,n.limit,n.startAt,n.endAt);{t=t.map((s=>{const o=s.dir==="desc"?"asc":"desc";return new Pn(s.field,o)}));const e=n.endAt?new yr(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new yr(n.startAt.position,n.startAt.inclusive):null;return ra(n.path,n.collectionGroup,t,n.filters,n.limit,e,r)}}function Ds(n,t){const e=n.filters.concat([t]);return new Ke(n.path,n.collectionGroup,n.explicitOrderBy.slice(),e,n.limit,n.limitType,n.startAt,n.endAt)}function Uf(n,t){const e=n.explicitOrderBy.concat([t]);return new Ke(n.path,n.collectionGroup,e,n.filters.slice(),n.limit,n.limitType,n.startAt,n.endAt)}function Er(n,t,e){return new Ke(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),t,e,n.startAt,n.endAt)}function Cr(n,t){return Js(xt(n),xt(t))&&n.limitType===t.limitType}function vu(n){return`${Ys(xt(n))}|lt:${n.limitType}`}function Pe(n){return`Query(target=${(function(e){let r=e.path.canonicalString();return e.collectionGroup!==null&&(r+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(r+=`, filters: [${e.filters.map((s=>yu(s))).join(", ")}]`),Pr(e.limit)||(r+=", limit: "+e.limit),e.orderBy.length>0&&(r+=`, orderBy: [${e.orderBy.map((s=>(function(a){return`${a.field.canonicalString()} (${a.dir})`})(s))).join(", ")}]`),e.startAt&&(r+=", startAt: ",r+=e.startAt.inclusive?"b:":"a:",r+=e.startAt.position.map((s=>Be(s))).join(",")),e.endAt&&(r+=", endAt: ",r+=e.endAt.inclusive?"a:":"b:",r+=e.endAt.position.map((s=>Be(s))).join(",")),`Target(${r})`})(xt(n))}; limitType=${n.limitType})`}function Nr(n,t){return t.isFoundDocument()&&(function(r,s){const o=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(o):x.isDocumentKey(r.path)?r.path.isEqual(o):r.path.isImmediateParentOf(o)})(n,t)&&(function(r,s){for(const o of yn(r))if(!o.field.isKeyField()&&s.data.field(o.field)===null)return!1;return!0})(n,t)&&(function(r,s){for(const o of r.filters)if(!o.matches(s))return!1;return!0})(n,t)&&(function(r,s){return!(r.startAt&&!(function(a,l,h){const d=ea(a,l,h);return a.inclusive?d<=0:d<0})(r.startAt,yn(r),s)||r.endAt&&!(function(a,l,h){const d=ea(a,l,h);return a.inclusive?d>=0:d>0})(r.endAt,yn(r),s))})(n,t)}function Bf(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function wu(n){return(t,e)=>{let r=!1;for(const s of yn(n)){const o=qf(s,t,e);if(o!==0)return o;r=r||s.field.isKeyField()}return 0}}function qf(n,t,e){const r=n.field.isKeyField()?x.comparator(t.key,e.key):(function(o,a,l){const h=a.data.field(o),d=l.data.field(o);return h!==null&&d!==null?Ue(h,d):L(42886)})(n.field,t,e);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return L(19790,{direction:n.dir})}}/**
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
 */class Ie{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r!==void 0){for(const[s,o]of r)if(this.equalsFn(s,t))return o}}has(t){return this.get(t)!==void 0}set(t,e){const r=this.mapKeyFn(t),s=this.inner[r];if(s===void 0)return this.inner[r]=[[t,e]],void this.innerSize++;for(let o=0;o<s.length;o++)if(this.equalsFn(s[o][0],t))return void(s[o]=[t,e]);s.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],t))return r.length===1?delete this.inner[e]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(t){Te(this.inner,((e,r)=>{for(const[s,o]of r)t(s,o)}))}isEmpty(){return iu(this.inner)}size(){return this.innerSize}}/**
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
 */const jf=new Z(x.comparator);function jt(){return jf}const Au=new Z(x.comparator);function mn(...n){let t=Au;for(const e of n)t=t.insert(e.key,e);return t}function Ru(n){let t=Au;return n.forEach(((e,r)=>t=t.insert(e,r.overlayedDocument))),t}function ge(){return En()}function bu(){return En()}function En(){return new Ie((n=>n.toString()),((n,t)=>n.isEqual(t)))}const $f=new Z(x.comparator),zf=new at(x.comparator);function j(...n){let t=zf;for(const e of n)t=t.add(e);return t}const Gf=new at(q);function Hf(){return Gf}/**
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
 */function Xs(n,t){if(n.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:pr(t)?"-0":t}}function Su(n){return{integerValue:""+n}}function Kf(n,t){return _f(t)?Su(t):Xs(n,t)}/**
 * @license
 * Copyright 2018 Google LLC
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
 */class Dr{constructor(){this._=void 0}}function Wf(n,t,e){return n instanceof Vn?(function(s,o){const a={fields:{[uu]:{stringValue:au},[lu]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return o&&Ws(o)&&(o=Vr(o)),o&&(a.fields[cu]=o),{mapValue:a}})(e,t):n instanceof Cn?Vu(n,t):n instanceof Nn?Cu(n,t):(function(s,o){const a=Pu(s,o),l=ia(a)+ia(s.Ae);return Vs(a)&&Vs(s.Ae)?Su(l):Xs(s.serializer,l)})(n,t)}function Qf(n,t,e){return n instanceof Cn?Vu(n,t):n instanceof Nn?Cu(n,t):e}function Pu(n,t){return n instanceof Tr?(function(r){return Vs(r)||(function(o){return!!o&&"doubleValue"in o})(r)})(t)?t:{integerValue:0}:null}class Vn extends Dr{}class Cn extends Dr{constructor(t){super(),this.elements=t}}function Vu(n,t){const e=Nu(t);for(const r of n.elements)e.some((s=>Ft(s,r)))||e.push(r);return{arrayValue:{values:e}}}class Nn extends Dr{constructor(t){super(),this.elements=t}}function Cu(n,t){let e=Nu(t);for(const r of n.elements)e=e.filter((s=>!Ft(s,r)));return{arrayValue:{values:e}}}class Tr extends Dr{constructor(t,e){super(),this.serializer=t,this.Ae=e}}function ia(n){return et(n.integerValue||n.doubleValue)}function Nu(n){return Qs(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
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
 */class Yf{constructor(t,e){this.field=t,this.transform=e}}function Jf(n,t){return n.field.isEqual(t.field)&&(function(r,s){return r instanceof Cn&&s instanceof Cn||r instanceof Nn&&s instanceof Nn?Fe(r.elements,s.elements,Ft):r instanceof Tr&&s instanceof Tr?Ft(r.Ae,s.Ae):r instanceof Vn&&s instanceof Vn})(n.transform,t.transform)}class Xf{constructor(t,e){this.version=t,this.transformResults=e}}class Ut{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new Ut}static exists(t){return new Ut(void 0,t)}static updateTime(t){return new Ut(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function ur(n,t){return n.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(n.updateTime):n.exists===void 0||n.exists===t.isFoundDocument()}class Mr{}function Du(n,t){if(!n.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return n.isNoDocument()?new ku(n.key,Ut.none()):new Mn(n.key,n.data,Ut.none());{const e=n.data,r=bt.empty();let s=new at(ht.comparator);for(let o of t.fields)if(!s.has(o)){let a=e.field(o);a===null&&o.length>1&&(o=o.popLast(),a=e.field(o)),a===null?r.delete(o):r.set(o,a),s=s.add(o)}return new ve(n.key,r,new Pt(s.toArray()),Ut.none())}}function Zf(n,t,e){n instanceof Mn?(function(s,o,a){const l=s.value.clone(),h=aa(s.fieldTransforms,o,a.transformResults);l.setAll(h),o.convertToFoundDocument(a.version,l).setHasCommittedMutations()})(n,t,e):n instanceof ve?(function(s,o,a){if(!ur(s.precondition,o))return void o.convertToUnknownDocument(a.version);const l=aa(s.fieldTransforms,o,a.transformResults),h=o.data;h.setAll(Mu(s)),h.setAll(l),o.convertToFoundDocument(a.version,h).setHasCommittedMutations()})(n,t,e):(function(s,o,a){o.convertToNoDocument(a.version).setHasCommittedMutations()})(0,t,e)}function Tn(n,t,e,r){return n instanceof Mn?(function(o,a,l,h){if(!ur(o.precondition,a))return l;const d=o.value.clone(),m=ua(o.fieldTransforms,h,a);return d.setAll(m),a.convertToFoundDocument(a.version,d).setHasLocalMutations(),null})(n,t,e,r):n instanceof ve?(function(o,a,l,h){if(!ur(o.precondition,a))return l;const d=ua(o.fieldTransforms,h,a),m=a.data;return m.setAll(Mu(o)),m.setAll(d),a.convertToFoundDocument(a.version,m).setHasLocalMutations(),l===null?null:l.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map((I=>I.field)))})(n,t,e,r):(function(o,a,l){return ur(o.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):l})(n,t,e)}function td(n,t){let e=null;for(const r of n.fieldTransforms){const s=t.data.field(r.field),o=Pu(r.transform,s||null);o!=null&&(e===null&&(e=bt.empty()),e.set(r.field,o))}return e||null}function oa(n,t){return n.type===t.type&&!!n.key.isEqual(t.key)&&!!n.precondition.isEqual(t.precondition)&&!!(function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Fe(r,s,((o,a)=>Jf(o,a)))})(n.fieldTransforms,t.fieldTransforms)&&(n.type===0?n.value.isEqual(t.value):n.type!==1||n.data.isEqual(t.data)&&n.fieldMask.isEqual(t.fieldMask))}class Mn extends Mr{constructor(t,e,r,s=[]){super(),this.key=t,this.value=e,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class ve extends Mr{constructor(t,e,r,s,o=[]){super(),this.key=t,this.data=e,this.fieldMask=r,this.precondition=s,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function Mu(n){const t=new Map;return n.fieldMask.fields.forEach((e=>{if(!e.isEmpty()){const r=n.data.field(e);t.set(e,r)}})),t}function aa(n,t,e){const r=new Map;H(n.length===e.length,32656,{Ve:e.length,de:n.length});for(let s=0;s<e.length;s++){const o=n[s],a=o.transform,l=t.data.field(o.field);r.set(o.field,Qf(a,l,e[s]))}return r}function ua(n,t,e){const r=new Map;for(const s of n){const o=s.transform,a=e.data.field(s.field);r.set(s.field,Wf(o,a,t))}return r}class ku extends Mr{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class ed extends Mr{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class nd{constructor(t,e,r,s){this.batchId=t,this.localWriteTime=e,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(t,e){const r=e.mutationResults;for(let s=0;s<this.mutations.length;s++){const o=this.mutations[s];o.key.isEqual(t.key)&&Zf(o,t,r[s])}}applyToLocalView(t,e){for(const r of this.baseMutations)r.key.isEqual(t.key)&&(e=Tn(r,t,e,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(t.key)&&(e=Tn(r,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const r=bu();return this.mutations.forEach((s=>{const o=t.get(s.key),a=o.overlayedDocument;let l=this.applyToLocalView(a,o.mutatedFields);l=e.has(s.key)?null:l;const h=Du(a,l);h!==null&&r.set(s.key,h),a.isValidDocument()||a.convertToNoDocument(F.min())})),r}keys(){return this.mutations.reduce(((t,e)=>t.add(e.key)),j())}isEqual(t){return this.batchId===t.batchId&&Fe(this.mutations,t.mutations,((e,r)=>oa(e,r)))&&Fe(this.baseMutations,t.baseMutations,((e,r)=>oa(e,r)))}}class Zs{constructor(t,e,r,s){this.batch=t,this.commitVersion=e,this.mutationResults=r,this.docVersions=s}static from(t,e,r){H(t.mutations.length===r.length,58842,{me:t.mutations.length,fe:r.length});let s=(function(){return $f})();const o=t.mutations;for(let a=0;a<o.length;a++)s=s.insert(o[a].key,r[a].version);return new Zs(t,e,r,s)}}/**
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
 */class rd{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
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
 */class sd{constructor(t,e){this.count=t,this.unchangedNames=e}}/**
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
 */var nt,$;function id(n){switch(n){case b.OK:return L(64938);case b.CANCELLED:case b.UNKNOWN:case b.DEADLINE_EXCEEDED:case b.RESOURCE_EXHAUSTED:case b.INTERNAL:case b.UNAVAILABLE:case b.UNAUTHENTICATED:return!1;case b.INVALID_ARGUMENT:case b.NOT_FOUND:case b.ALREADY_EXISTS:case b.PERMISSION_DENIED:case b.FAILED_PRECONDITION:case b.ABORTED:case b.OUT_OF_RANGE:case b.UNIMPLEMENTED:case b.DATA_LOSS:return!0;default:return L(15467,{code:n})}}function xu(n){if(n===void 0)return qt("GRPC error has no .code"),b.UNKNOWN;switch(n){case nt.OK:return b.OK;case nt.CANCELLED:return b.CANCELLED;case nt.UNKNOWN:return b.UNKNOWN;case nt.DEADLINE_EXCEEDED:return b.DEADLINE_EXCEEDED;case nt.RESOURCE_EXHAUSTED:return b.RESOURCE_EXHAUSTED;case nt.INTERNAL:return b.INTERNAL;case nt.UNAVAILABLE:return b.UNAVAILABLE;case nt.UNAUTHENTICATED:return b.UNAUTHENTICATED;case nt.INVALID_ARGUMENT:return b.INVALID_ARGUMENT;case nt.NOT_FOUND:return b.NOT_FOUND;case nt.ALREADY_EXISTS:return b.ALREADY_EXISTS;case nt.PERMISSION_DENIED:return b.PERMISSION_DENIED;case nt.FAILED_PRECONDITION:return b.FAILED_PRECONDITION;case nt.ABORTED:return b.ABORTED;case nt.OUT_OF_RANGE:return b.OUT_OF_RANGE;case nt.UNIMPLEMENTED:return b.UNIMPLEMENTED;case nt.DATA_LOSS:return b.DATA_LOSS;default:return L(39323,{code:n})}}($=nt||(nt={}))[$.OK=0]="OK",$[$.CANCELLED=1]="CANCELLED",$[$.UNKNOWN=2]="UNKNOWN",$[$.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",$[$.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",$[$.NOT_FOUND=5]="NOT_FOUND",$[$.ALREADY_EXISTS=6]="ALREADY_EXISTS",$[$.PERMISSION_DENIED=7]="PERMISSION_DENIED",$[$.UNAUTHENTICATED=16]="UNAUTHENTICATED",$[$.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",$[$.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",$[$.ABORTED=10]="ABORTED",$[$.OUT_OF_RANGE=11]="OUT_OF_RANGE",$[$.UNIMPLEMENTED=12]="UNIMPLEMENTED",$[$.INTERNAL=13]="INTERNAL",$[$.UNAVAILABLE=14]="UNAVAILABLE",$[$.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function od(){return new TextEncoder}/**
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
 */const ad=new Xt([4294967295,4294967295],0);function ca(n){const t=od().encode(n),e=new Wa;return e.update(t),new Uint8Array(e.digest())}function la(n){const t=new DataView(n.buffer),e=t.getUint32(0,!0),r=t.getUint32(4,!0),s=t.getUint32(8,!0),o=t.getUint32(12,!0);return[new Xt([e,r],0),new Xt([s,o],0)]}class ti{constructor(t,e,r){if(this.bitmap=t,this.padding=e,this.hashCount=r,e<0||e>=8)throw new pn(`Invalid padding: ${e}`);if(r<0)throw new pn(`Invalid hash count: ${r}`);if(t.length>0&&this.hashCount===0)throw new pn(`Invalid hash count: ${r}`);if(t.length===0&&e!==0)throw new pn(`Invalid padding when bitmap length is 0: ${e}`);this.ge=8*t.length-e,this.pe=Xt.fromNumber(this.ge)}ye(t,e,r){let s=t.add(e.multiply(Xt.fromNumber(r)));return s.compare(ad)===1&&(s=new Xt([s.getBits(0),s.getBits(1)],0)),s.modulo(this.pe).toNumber()}we(t){return!!(this.bitmap[Math.floor(t/8)]&1<<t%8)}mightContain(t){if(this.ge===0)return!1;const e=ca(t),[r,s]=la(e);for(let o=0;o<this.hashCount;o++){const a=this.ye(r,s,o);if(!this.we(a))return!1}return!0}static create(t,e,r){const s=t%8==0?0:8-t%8,o=new Uint8Array(Math.ceil(t/8)),a=new ti(o,s,e);return r.forEach((l=>a.insert(l))),a}insert(t){if(this.ge===0)return;const e=ca(t),[r,s]=la(e);for(let o=0;o<this.hashCount;o++){const a=this.ye(r,s,o);this.be(a)}}be(t){const e=Math.floor(t/8),r=t%8;this.bitmap[e]|=1<<r}}class pn extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class kr{constructor(t,e,r,s,o){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=o}static createSynthesizedRemoteEventForCurrentChange(t,e,r){const s=new Map;return s.set(t,kn.createSynthesizedTargetChangeForCurrentChange(t,e,r)),new kr(F.min(),s,new Z(q),jt(),j())}}class kn{constructor(t,e,r,s,o){this.resumeToken=t,this.current=e,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=o}static createSynthesizedTargetChangeForCurrentChange(t,e,r){return new kn(r,e,j(),j(),j())}}/**
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
 */class cr{constructor(t,e,r,s){this.Se=t,this.removedTargetIds=e,this.key=r,this.De=s}}class Ou{constructor(t,e){this.targetId=t,this.Ce=e}}class Lu{constructor(t,e,r=ft.EMPTY_BYTE_STRING,s=null){this.state=t,this.targetIds=e,this.resumeToken=r,this.cause=s}}class ha{constructor(){this.ve=0,this.Fe=fa(),this.Me=ft.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(t){t.approximateByteSize()>0&&(this.Oe=!0,this.Me=t)}ke(){let t=j(),e=j(),r=j();return this.Fe.forEach(((s,o)=>{switch(o){case 0:t=t.add(s);break;case 2:e=e.add(s);break;case 1:r=r.add(s);break;default:L(38017,{changeType:o})}})),new kn(this.Me,this.xe,t,e,r)}Ke(){this.Oe=!1,this.Fe=fa()}qe(t,e){this.Oe=!0,this.Fe=this.Fe.insert(t,e)}Ue(t){this.Oe=!0,this.Fe=this.Fe.remove(t)}$e(){this.ve+=1}We(){this.ve-=1,H(this.ve>=0,3241,{ve:this.ve})}Qe(){this.Oe=!0,this.xe=!0}}class ud{constructor(t){this.Ge=t,this.ze=new Map,this.je=jt(),this.He=nr(),this.Je=nr(),this.Ze=new Z(q)}Xe(t){for(const e of t.Se)t.De&&t.De.isFoundDocument()?this.Ye(e,t.De):this.et(e,t.key,t.De);for(const e of t.removedTargetIds)this.et(e,t.key,t.De)}tt(t){this.forEachTarget(t,(e=>{const r=this.nt(e);switch(t.state){case 0:this.rt(e)&&r.Le(t.resumeToken);break;case 1:r.We(),r.Ne||r.Ke(),r.Le(t.resumeToken);break;case 2:r.We(),r.Ne||this.removeTarget(e);break;case 3:this.rt(e)&&(r.Qe(),r.Le(t.resumeToken));break;case 4:this.rt(e)&&(this.it(e),r.Le(t.resumeToken));break;default:L(56790,{state:t.state})}}))}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.ze.forEach(((r,s)=>{this.rt(s)&&e(s)}))}st(t){const e=t.targetId,r=t.Ce.count,s=this.ot(e);if(s){const o=s.target;if(Ns(o))if(r===0){const a=new x(o.path);this.et(e,a,_t.newNoDocument(a,F.min()))}else H(r===1,20013,{expectedCount:r});else{const a=this._t(e);if(a!==r){const l=this.ut(t),h=l?this.ct(l,t,a):1;if(h!==0){this.it(e);const d=h===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(e,d)}}}}}ut(t){const e=t.Ce.unchangedNames;if(!e||!e.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:o=0}=e;let a,l;try{a=re(r).toUint8Array()}catch(h){if(h instanceof ou)return Le("Decoding the base64 bloom filter in existence filter failed ("+h.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw h}try{l=new ti(a,s,o)}catch(h){return Le(h instanceof pn?"BloomFilter error: ":"Applying bloom filter failed: ",h),null}return l.ge===0?null:l}ct(t,e,r){return e.Ce.count===r-this.Pt(t,e.targetId)?0:2}Pt(t,e){const r=this.Ge.getRemoteKeysForTarget(e);let s=0;return r.forEach((o=>{const a=this.Ge.ht(),l=`projects/${a.projectId}/databases/${a.database}/documents/${o.path.canonicalString()}`;t.mightContain(l)||(this.et(e,o,null),s++)})),s}Tt(t){const e=new Map;this.ze.forEach(((o,a)=>{const l=this.ot(a);if(l){if(o.current&&Ns(l.target)){const h=new x(l.target.path);this.It(h).has(a)||this.Et(a,h)||this.et(a,h,_t.newNoDocument(h,t))}o.Be&&(e.set(a,o.ke()),o.Ke())}}));let r=j();this.Je.forEach(((o,a)=>{let l=!0;a.forEachWhile((h=>{const d=this.ot(h);return!d||d.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)})),l&&(r=r.add(o))})),this.je.forEach(((o,a)=>a.setReadTime(t)));const s=new kr(t,e,this.Ze,this.je,r);return this.je=jt(),this.He=nr(),this.Je=nr(),this.Ze=new Z(q),s}Ye(t,e){if(!this.rt(t))return;const r=this.Et(t,e.key)?2:0;this.nt(t).qe(e.key,r),this.je=this.je.insert(e.key,e),this.He=this.He.insert(e.key,this.It(e.key).add(t)),this.Je=this.Je.insert(e.key,this.Rt(e.key).add(t))}et(t,e,r){if(!this.rt(t))return;const s=this.nt(t);this.Et(t,e)?s.qe(e,1):s.Ue(e),this.Je=this.Je.insert(e,this.Rt(e).delete(t)),this.Je=this.Je.insert(e,this.Rt(e).add(t)),r&&(this.je=this.je.insert(e,r))}removeTarget(t){this.ze.delete(t)}_t(t){const e=this.nt(t).ke();return this.Ge.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}$e(t){this.nt(t).$e()}nt(t){let e=this.ze.get(t);return e||(e=new ha,this.ze.set(t,e)),e}Rt(t){let e=this.Je.get(t);return e||(e=new at(q),this.Je=this.Je.insert(t,e)),e}It(t){let e=this.He.get(t);return e||(e=new at(q),this.He=this.He.insert(t,e)),e}rt(t){const e=this.ot(t)!==null;return e||D("WatchChangeAggregator","Detected inactive target",t),e}ot(t){const e=this.ze.get(t);return e&&e.Ne?null:this.Ge.At(t)}it(t){this.ze.set(t,new ha),this.Ge.getRemoteKeysForTarget(t).forEach((e=>{this.et(t,e,null)}))}Et(t,e){return this.Ge.getRemoteKeysForTarget(t).has(e)}}function nr(){return new Z(x.comparator)}function fa(){return new Z(x.comparator)}const cd={asc:"ASCENDING",desc:"DESCENDING"},ld={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},hd={and:"AND",or:"OR"};class fd{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function Ms(n,t){return n.useProto3Json||Pr(t)?t:{value:t}}function Ir(n,t){return n.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Fu(n,t){return n.useProto3Json?t.toBase64():t.toUint8Array()}function dd(n,t){return Ir(n,t.toTimestamp())}function Ot(n){return H(!!n,49232),F.fromTimestamp((function(e){const r=ne(e);return new X(r.seconds,r.nanos)})(n))}function ei(n,t){return ks(n,t).canonicalString()}function ks(n,t){const e=(function(s){return new Q(["projects",s.projectId,"databases",s.database])})(n).child("documents");return t===void 0?e:e.child(t)}function Uu(n){const t=Q.fromString(n);return H(zu(t),10190,{key:t.toString()}),t}function xs(n,t){return ei(n.databaseId,t.path)}function _s(n,t){const e=Uu(t);if(e.get(1)!==n.databaseId.projectId)throw new N(b.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+e.get(1)+" vs "+n.databaseId.projectId);if(e.get(3)!==n.databaseId.database)throw new N(b.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+e.get(3)+" vs "+n.databaseId.database);return new x(qu(e))}function Bu(n,t){return ei(n.databaseId,t)}function md(n){const t=Uu(n);return t.length===4?Q.emptyPath():qu(t)}function Os(n){return new Q(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function qu(n){return H(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function da(n,t,e){return{name:xs(n,t),fields:e.value.mapValue.fields}}function pd(n,t){let e;if("targetChange"in t){t.targetChange;const r=(function(d){return d==="NO_CHANGE"?0:d==="ADD"?1:d==="REMOVE"?2:d==="CURRENT"?3:d==="RESET"?4:L(39313,{state:d})})(t.targetChange.targetChangeType||"NO_CHANGE"),s=t.targetChange.targetIds||[],o=(function(d,m){return d.useProto3Json?(H(m===void 0||typeof m=="string",58123),ft.fromBase64String(m||"")):(H(m===void 0||m instanceof Buffer||m instanceof Uint8Array,16193),ft.fromUint8Array(m||new Uint8Array))})(n,t.targetChange.resumeToken),a=t.targetChange.cause,l=a&&(function(d){const m=d.code===void 0?b.UNKNOWN:xu(d.code);return new N(m,d.message||"")})(a);e=new Lu(r,s,o,l||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const s=_s(n,r.document.name),o=Ot(r.document.updateTime),a=r.document.createTime?Ot(r.document.createTime):F.min(),l=new bt({mapValue:{fields:r.document.fields}}),h=_t.newFoundDocument(s,o,a,l),d=r.targetIds||[],m=r.removedTargetIds||[];e=new cr(d,m,h.key,h)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const s=_s(n,r.document),o=r.readTime?Ot(r.readTime):F.min(),a=_t.newNoDocument(s,o),l=r.removedTargetIds||[];e=new cr([],l,a.key,a)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const s=_s(n,r.document),o=r.removedTargetIds||[];e=new cr([],o,s,null)}else{if(!("filter"in t))return L(11601,{Vt:t});{t.filter;const r=t.filter;r.targetId;const{count:s=0,unchangedNames:o}=r,a=new sd(s,o),l=r.targetId;e=new Ou(l,a)}}return e}function gd(n,t){let e;if(t instanceof Mn)e={update:da(n,t.key,t.value)};else if(t instanceof ku)e={delete:xs(n,t.key)};else if(t instanceof ve)e={update:da(n,t.key,t.data),updateMask:Rd(t.fieldMask)};else{if(!(t instanceof ed))return L(16599,{dt:t.type});e={verify:xs(n,t.key)}}return t.fieldTransforms.length>0&&(e.updateTransforms=t.fieldTransforms.map((r=>(function(o,a){const l=a.transform;if(l instanceof Vn)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof Cn)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof Nn)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof Tr)return{fieldPath:a.field.canonicalString(),increment:l.Ae};throw L(20930,{transform:a.transform})})(0,r)))),t.precondition.isNone||(e.currentDocument=(function(s,o){return o.updateTime!==void 0?{updateTime:dd(s,o.updateTime)}:o.exists!==void 0?{exists:o.exists}:L(27497)})(n,t.precondition)),e}function _d(n,t){return n&&n.length>0?(H(t!==void 0,14353),n.map((e=>(function(s,o){let a=s.updateTime?Ot(s.updateTime):Ot(o);return a.isEqual(F.min())&&(a=Ot(o)),new Xf(a,s.transformResults||[])})(e,t)))):[]}function yd(n,t){return{documents:[Bu(n,t.path)]}}function Ed(n,t){const e={structuredQuery:{}},r=t.path;let s;t.collectionGroup!==null?(s=r,e.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(s=r.popLast(),e.structuredQuery.from=[{collectionId:r.lastSegment()}]),e.parent=Bu(n,s);const o=(function(d){if(d.length!==0)return $u(Ct.create(d,"and"))})(t.filters);o&&(e.structuredQuery.where=o);const a=(function(d){if(d.length!==0)return d.map((m=>(function(A){return{field:Ve(A.field),direction:vd(A.dir)}})(m)))})(t.orderBy);a&&(e.structuredQuery.orderBy=a);const l=Ms(n,t.limit);return l!==null&&(e.structuredQuery.limit=l),t.startAt&&(e.structuredQuery.startAt=(function(d){return{before:d.inclusive,values:d.position}})(t.startAt)),t.endAt&&(e.structuredQuery.endAt=(function(d){return{before:!d.inclusive,values:d.position}})(t.endAt)),{ft:e,parent:s}}function Td(n){let t=md(n.parent);const e=n.structuredQuery,r=e.from?e.from.length:0;let s=null;if(r>0){H(r===1,65062);const m=e.from[0];m.allDescendants?s=m.collectionId:t=t.child(m.collectionId)}let o=[];e.where&&(o=(function(I){const A=ju(I);return A instanceof Ct&&gu(A)?A.getFilters():[A]})(e.where));let a=[];e.orderBy&&(a=(function(I){return I.map((A=>(function(M){return new Pn(Ce(M.field),(function(k){switch(k){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(M.direction))})(A)))})(e.orderBy));let l=null;e.limit&&(l=(function(I){let A;return A=typeof I=="object"?I.value:I,Pr(A)?null:A})(e.limit));let h=null;e.startAt&&(h=(function(I){const A=!!I.before,V=I.values||[];return new yr(V,A)})(e.startAt));let d=null;return e.endAt&&(d=(function(I){const A=!I.before,V=I.values||[];return new yr(V,A)})(e.endAt)),Of(t,s,a,o,l,"F",h,d)}function Id(n,t){const e=(function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return L(28987,{purpose:s})}})(t.purpose);return e==null?null:{"goog-listen-tags":e}}function ju(n){return n.unaryFilter!==void 0?(function(e){switch(e.unaryFilter.op){case"IS_NAN":const r=Ce(e.unaryFilter.field);return rt.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Ce(e.unaryFilter.field);return rt.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=Ce(e.unaryFilter.field);return rt.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=Ce(e.unaryFilter.field);return rt.create(a,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return L(61313);default:return L(60726)}})(n):n.fieldFilter!==void 0?(function(e){return rt.create(Ce(e.fieldFilter.field),(function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return L(58110);default:return L(50506)}})(e.fieldFilter.op),e.fieldFilter.value)})(n):n.compositeFilter!==void 0?(function(e){return Ct.create(e.compositeFilter.filters.map((r=>ju(r))),(function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return L(1026)}})(e.compositeFilter.op))})(n):L(30097,{filter:n})}function vd(n){return cd[n]}function wd(n){return ld[n]}function Ad(n){return hd[n]}function Ve(n){return{fieldPath:n.canonicalString()}}function Ce(n){return ht.fromServerFormat(n.fieldPath)}function $u(n){return n instanceof rt?(function(e){if(e.op==="=="){if(ta(e.value))return{unaryFilter:{field:Ve(e.field),op:"IS_NAN"}};if(Zo(e.value))return{unaryFilter:{field:Ve(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(ta(e.value))return{unaryFilter:{field:Ve(e.field),op:"IS_NOT_NAN"}};if(Zo(e.value))return{unaryFilter:{field:Ve(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ve(e.field),op:wd(e.op),value:e.value}}})(n):n instanceof Ct?(function(e){const r=e.getFilters().map((s=>$u(s)));return r.length===1?r[0]:{compositeFilter:{op:Ad(e.op),filters:r}}})(n):L(54877,{filter:n})}function Rd(n){const t=[];return n.fields.forEach((e=>t.push(e.canonicalString()))),{fieldPaths:t}}function zu(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}function Gu(n){return!!n&&typeof n._toProto=="function"&&n._protoValueType==="ProtoValue"}/**
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
 */class Qt{constructor(t,e,r,s,o=F.min(),a=F.min(),l=ft.EMPTY_BYTE_STRING,h=null){this.target=t,this.targetId=e,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=o,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=l,this.expectedCount=h}withSequenceNumber(t){return new Qt(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new Qt(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new Qt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new Qt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
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
 */class bd{constructor(t){this.yt=t}}function Sd(n){const t=Td({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Er(t,t.limit,"L"):t}/**
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
 */class Pd{constructor(){this.Sn=new Vd}addToCollectionParentIndex(t,e){return this.Sn.add(e),S.resolve()}getCollectionParents(t,e){return S.resolve(this.Sn.getEntries(e))}addFieldIndex(t,e){return S.resolve()}deleteFieldIndex(t,e){return S.resolve()}deleteAllFieldIndexes(t){return S.resolve()}createTargetIndexes(t,e){return S.resolve()}getDocumentsMatchingTarget(t,e){return S.resolve(null)}getIndexType(t,e){return S.resolve(0)}getFieldIndexes(t,e){return S.resolve([])}getNextCollectionGroupToUpdate(t){return S.resolve(null)}getMinOffset(t,e){return S.resolve(ee.min())}getMinOffsetFromCollectionGroup(t,e){return S.resolve(ee.min())}updateCollectionGroup(t,e,r){return S.resolve()}updateIndexEntries(t,e){return S.resolve()}}class Vd{constructor(){this.index={}}add(t){const e=t.lastSegment(),r=t.popLast(),s=this.index[e]||new at(Q.comparator),o=!s.has(r);return this.index[e]=s.add(r),o}has(t){const e=t.lastSegment(),r=t.popLast(),s=this.index[e];return s&&s.has(r)}getEntries(t){return(this.index[t]||new at(Q.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
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
 */const ma={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Hu=41943040;class wt{static withCacheSize(t){return new wt(t,wt.DEFAULT_COLLECTION_PERCENTILE,wt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(t,e,r){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=r}}/**
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
 */wt.DEFAULT_COLLECTION_PERCENTILE=10,wt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,wt.DEFAULT=new wt(Hu,wt.DEFAULT_COLLECTION_PERCENTILE,wt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),wt.DISABLED=new wt(-1,0,0);/**
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
 */class qe{constructor(t){this.sr=t}next(){return this.sr+=2,this.sr}static _r(){return new qe(0)}static ar(){return new qe(-1)}}/**
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
 */const pa="LruGarbageCollector",Cd=1048576;function ga([n,t],[e,r]){const s=q(n,e);return s===0?q(t,r):s}class Nd{constructor(t){this.Pr=t,this.buffer=new at(ga),this.Tr=0}Ir(){return++this.Tr}Er(t){const e=[t,this.Ir()];if(this.buffer.size<this.Pr)this.buffer=this.buffer.add(e);else{const r=this.buffer.last();ga(e,r)<0&&(this.buffer=this.buffer.delete(r).add(e))}}get maxValue(){return this.buffer.last()[0]}}class Dd{constructor(t,e,r){this.garbageCollector=t,this.asyncQueue=e,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Ar(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Ar(t){D(pa,`Garbage collection scheduled in ${t}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",t,(async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(e){He(e)?D(pa,"Ignoring IndexedDB error during garbage collection: ",e):await Ge(e)}await this.Ar(3e5)}))}}class Md{constructor(t,e){this.Vr=t,this.params=e}calculateTargetCount(t,e){return this.Vr.dr(t).next((r=>Math.floor(e/100*r)))}nthSequenceNumber(t,e){if(e===0)return S.resolve(Sr.ce);const r=new Nd(e);return this.Vr.forEachTarget(t,(s=>r.Er(s.sequenceNumber))).next((()=>this.Vr.mr(t,(s=>r.Er(s))))).next((()=>r.maxValue))}removeTargets(t,e,r){return this.Vr.removeTargets(t,e,r)}removeOrphanedDocuments(t,e){return this.Vr.removeOrphanedDocuments(t,e)}collect(t,e){return this.params.cacheSizeCollectionThreshold===-1?(D("LruGarbageCollector","Garbage collection skipped; disabled"),S.resolve(ma)):this.getCacheSize(t).next((r=>r<this.params.cacheSizeCollectionThreshold?(D("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),ma):this.gr(t,e)))}getCacheSize(t){return this.Vr.getCacheSize(t)}gr(t,e){let r,s,o,a,l,h,d;const m=Date.now();return this.calculateTargetCount(t,this.params.percentileToCollect).next((I=>(I>this.params.maximumSequenceNumbersToCollect?(D("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${I}`),s=this.params.maximumSequenceNumbersToCollect):s=I,a=Date.now(),this.nthSequenceNumber(t,s)))).next((I=>(r=I,l=Date.now(),this.removeTargets(t,r,e)))).next((I=>(o=I,h=Date.now(),this.removeOrphanedDocuments(t,r)))).next((I=>(d=Date.now(),Se()<=z.DEBUG&&D("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-m}ms
	Determined least recently used ${s} in `+(l-a)+`ms
	Removed ${o} targets in `+(h-l)+`ms
	Removed ${I} documents in `+(d-h)+`ms
Total Duration: ${d-m}ms`),S.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:o,documentsRemoved:I}))))}}function kd(n,t){return new Md(n,t)}/**
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
 */class xd{constructor(){this.changes=new Ie((t=>t.toString()),((t,e)=>t.isEqual(e))),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,_t.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const r=this.changes.get(e);return r!==void 0?S.resolve(r):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
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
 *//**
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
 */class Od{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}/**
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
 */class Ld{constructor(t,e,r,s){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=r,this.indexManager=s}getDocument(t,e){let r=null;return this.documentOverlayCache.getOverlay(t,e).next((s=>(r=s,this.remoteDocumentCache.getEntry(t,e)))).next((s=>(r!==null&&Tn(r.mutation,s,Pt.empty(),X.now()),s)))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next((r=>this.getLocalViewOfDocuments(t,r,j()).next((()=>r))))}getLocalViewOfDocuments(t,e,r=j()){const s=ge();return this.populateOverlays(t,s,e).next((()=>this.computeViews(t,e,s,r).next((o=>{let a=mn();return o.forEach(((l,h)=>{a=a.insert(l,h.overlayedDocument)})),a}))))}getOverlayedDocuments(t,e){const r=ge();return this.populateOverlays(t,r,e).next((()=>this.computeViews(t,e,r,j())))}populateOverlays(t,e,r){const s=[];return r.forEach((o=>{e.has(o)||s.push(o)})),this.documentOverlayCache.getOverlays(t,s).next((o=>{o.forEach(((a,l)=>{e.set(a,l)}))}))}computeViews(t,e,r,s){let o=jt();const a=En(),l=(function(){return En()})();return e.forEach(((h,d)=>{const m=r.get(d.key);s.has(d.key)&&(m===void 0||m.mutation instanceof ve)?o=o.insert(d.key,d):m!==void 0?(a.set(d.key,m.mutation.getFieldMask()),Tn(m.mutation,d,m.mutation.getFieldMask(),X.now())):a.set(d.key,Pt.empty())})),this.recalculateAndSaveOverlays(t,o).next((h=>(h.forEach(((d,m)=>a.set(d,m))),e.forEach(((d,m)=>l.set(d,new Od(m,a.get(d)??null)))),l)))}recalculateAndSaveOverlays(t,e){const r=En();let s=new Z(((a,l)=>a-l)),o=j();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next((a=>{for(const l of a)l.keys().forEach((h=>{const d=e.get(h);if(d===null)return;let m=r.get(h)||Pt.empty();m=l.applyToLocalView(d,m),r.set(h,m);const I=(s.get(l.batchId)||j()).add(h);s=s.insert(l.batchId,I)}))})).next((()=>{const a=[],l=s.getReverseIterator();for(;l.hasNext();){const h=l.getNext(),d=h.key,m=h.value,I=bu();m.forEach((A=>{if(!o.has(A)){const V=Du(e.get(A),r.get(A));V!==null&&I.set(A,V),o=o.add(A)}})),a.push(this.documentOverlayCache.saveOverlays(t,d,I))}return S.waitFor(a)})).next((()=>r))}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next((r=>this.recalculateAndSaveOverlays(t,r)))}getDocumentsMatchingQuery(t,e,r,s){return Lf(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):Iu(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,r,s):this.getDocumentsMatchingCollectionQuery(t,e,r,s)}getNextDocuments(t,e,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,r,s).next((o=>{const a=s-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,r.largestBatchId,s-o.size):S.resolve(ge());let l=An,h=o;return a.next((d=>S.forEach(d,((m,I)=>(l<I.largestBatchId&&(l=I.largestBatchId),o.get(m)?S.resolve():this.remoteDocumentCache.getEntry(t,m).next((A=>{h=h.insert(m,A)}))))).next((()=>this.populateOverlays(t,d,o))).next((()=>this.computeViews(t,h,d,j()))).next((m=>({batchId:l,changes:Ru(m)})))))}))}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new x(e)).next((r=>{let s=mn();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s}))}getDocumentsMatchingCollectionGroupQuery(t,e,r,s){const o=e.collectionGroup;let a=mn();return this.indexManager.getCollectionParents(t,o).next((l=>S.forEach(l,(h=>{const d=(function(I,A){return new Ke(A,null,I.explicitOrderBy.slice(),I.filters.slice(),I.limit,I.limitType,I.startAt,I.endAt)})(e,h.child(o));return this.getDocumentsMatchingCollectionQuery(t,d,r,s).next((m=>{m.forEach(((I,A)=>{a=a.insert(I,A)}))}))})).next((()=>a))))}getDocumentsMatchingCollectionQuery(t,e,r,s){let o;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,r.largestBatchId).next((a=>(o=a,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,r,o,s)))).next((a=>{o.forEach(((h,d)=>{const m=d.getKey();a.get(m)===null&&(a=a.insert(m,_t.newInvalidDocument(m)))}));let l=mn();return a.forEach(((h,d)=>{const m=o.get(h);m!==void 0&&Tn(m.mutation,d,Pt.empty(),X.now()),Nr(e,d)&&(l=l.insert(h,d))})),l}))}}/**
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
 */class Fd{constructor(t){this.serializer=t,this.Nr=new Map,this.Br=new Map}getBundleMetadata(t,e){return S.resolve(this.Nr.get(e))}saveBundleMetadata(t,e){return this.Nr.set(e.id,(function(s){return{id:s.id,version:s.version,createTime:Ot(s.createTime)}})(e)),S.resolve()}getNamedQuery(t,e){return S.resolve(this.Br.get(e))}saveNamedQuery(t,e){return this.Br.set(e.name,(function(s){return{name:s.name,query:Sd(s.bundledQuery),readTime:Ot(s.readTime)}})(e)),S.resolve()}}/**
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
 */class Ud{constructor(){this.overlays=new Z(x.comparator),this.Lr=new Map}getOverlay(t,e){return S.resolve(this.overlays.get(e))}getOverlays(t,e){const r=ge();return S.forEach(e,(s=>this.getOverlay(t,s).next((o=>{o!==null&&r.set(s,o)})))).next((()=>r))}saveOverlays(t,e,r){return r.forEach(((s,o)=>{this.bt(t,e,o)})),S.resolve()}removeOverlaysForBatchId(t,e,r){const s=this.Lr.get(r);return s!==void 0&&(s.forEach((o=>this.overlays=this.overlays.remove(o))),this.Lr.delete(r)),S.resolve()}getOverlaysForCollection(t,e,r){const s=ge(),o=e.length+1,a=new x(e.child("")),l=this.overlays.getIteratorFrom(a);for(;l.hasNext();){const h=l.getNext().value,d=h.getKey();if(!e.isPrefixOf(d.path))break;d.path.length===o&&h.largestBatchId>r&&s.set(h.getKey(),h)}return S.resolve(s)}getOverlaysForCollectionGroup(t,e,r,s){let o=new Z(((d,m)=>d-m));const a=this.overlays.getIterator();for(;a.hasNext();){const d=a.getNext().value;if(d.getKey().getCollectionGroup()===e&&d.largestBatchId>r){let m=o.get(d.largestBatchId);m===null&&(m=ge(),o=o.insert(d.largestBatchId,m)),m.set(d.getKey(),d)}}const l=ge(),h=o.getIterator();for(;h.hasNext()&&(h.getNext().value.forEach(((d,m)=>l.set(d,m))),!(l.size()>=s)););return S.resolve(l)}bt(t,e,r){const s=this.overlays.get(r.key);if(s!==null){const a=this.Lr.get(s.largestBatchId).delete(r.key);this.Lr.set(s.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new rd(e,r));let o=this.Lr.get(e);o===void 0&&(o=j(),this.Lr.set(e,o)),this.Lr.set(e,o.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
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
 */class Bd{constructor(){this.sessionToken=ft.EMPTY_BYTE_STRING}getSessionToken(t){return S.resolve(this.sessionToken)}setSessionToken(t,e){return this.sessionToken=e,S.resolve()}}/**
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
 */class ni{constructor(){this.kr=new at(ct.Kr),this.qr=new at(ct.Ur)}isEmpty(){return this.kr.isEmpty()}addReference(t,e){const r=new ct(t,e);this.kr=this.kr.add(r),this.qr=this.qr.add(r)}$r(t,e){t.forEach((r=>this.addReference(r,e)))}removeReference(t,e){this.Wr(new ct(t,e))}Qr(t,e){t.forEach((r=>this.removeReference(r,e)))}Gr(t){const e=new x(new Q([])),r=new ct(e,t),s=new ct(e,t+1),o=[];return this.qr.forEachInRange([r,s],(a=>{this.Wr(a),o.push(a.key)})),o}zr(){this.kr.forEach((t=>this.Wr(t)))}Wr(t){this.kr=this.kr.delete(t),this.qr=this.qr.delete(t)}jr(t){const e=new x(new Q([])),r=new ct(e,t),s=new ct(e,t+1);let o=j();return this.qr.forEachInRange([r,s],(a=>{o=o.add(a.key)})),o}containsKey(t){const e=new ct(t,0),r=this.kr.firstAfterOrEqual(e);return r!==null&&t.isEqual(r.key)}}class ct{constructor(t,e){this.key=t,this.Hr=e}static Kr(t,e){return x.comparator(t.key,e.key)||q(t.Hr,e.Hr)}static Ur(t,e){return q(t.Hr,e.Hr)||x.comparator(t.key,e.key)}}/**
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
 */class qd{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.Yn=1,this.Jr=new at(ct.Kr)}checkEmpty(t){return S.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,r,s){const o=this.Yn;this.Yn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new nd(o,e,r,s);this.mutationQueue.push(a);for(const l of s)this.Jr=this.Jr.add(new ct(l.key,o)),this.indexManager.addToCollectionParentIndex(t,l.key.path.popLast());return S.resolve(a)}lookupMutationBatch(t,e){return S.resolve(this.Zr(e))}getNextMutationBatchAfterBatchId(t,e){const r=e+1,s=this.Xr(r),o=s<0?0:s;return S.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return S.resolve(this.mutationQueue.length===0?Ks:this.Yn-1)}getAllMutationBatches(t){return S.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const r=new ct(e,0),s=new ct(e,Number.POSITIVE_INFINITY),o=[];return this.Jr.forEachInRange([r,s],(a=>{const l=this.Zr(a.Hr);o.push(l)})),S.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(t,e){let r=new at(q);return e.forEach((s=>{const o=new ct(s,0),a=new ct(s,Number.POSITIVE_INFINITY);this.Jr.forEachInRange([o,a],(l=>{r=r.add(l.Hr)}))})),S.resolve(this.Yr(r))}getAllMutationBatchesAffectingQuery(t,e){const r=e.path,s=r.length+1;let o=r;x.isDocumentKey(o)||(o=o.child(""));const a=new ct(new x(o),0);let l=new at(q);return this.Jr.forEachWhile((h=>{const d=h.key.path;return!!r.isPrefixOf(d)&&(d.length===s&&(l=l.add(h.Hr)),!0)}),a),S.resolve(this.Yr(l))}Yr(t){const e=[];return t.forEach((r=>{const s=this.Zr(r);s!==null&&e.push(s)})),e}removeMutationBatch(t,e){H(this.ei(e.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Jr;return S.forEach(e.mutations,(s=>{const o=new ct(s.key,e.batchId);return r=r.delete(o),this.referenceDelegate.markPotentiallyOrphaned(t,s.key)})).next((()=>{this.Jr=r}))}nr(t){}containsKey(t,e){const r=new ct(e,0),s=this.Jr.firstAfterOrEqual(r);return S.resolve(e.isEqual(s&&s.key))}performConsistencyCheck(t){return this.mutationQueue.length,S.resolve()}ei(t,e){return this.Xr(t)}Xr(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Zr(t){const e=this.Xr(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
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
 */class jd{constructor(t){this.ti=t,this.docs=(function(){return new Z(x.comparator)})(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const r=e.key,s=this.docs.get(r),o=s?s.size:0,a=this.ti(e);return this.docs=this.docs.insert(r,{document:e.mutableCopy(),size:a}),this.size+=a-o,this.indexManager.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const r=this.docs.get(e);return S.resolve(r?r.document.mutableCopy():_t.newInvalidDocument(e))}getEntries(t,e){let r=jt();return e.forEach((s=>{const o=this.docs.get(s);r=r.insert(s,o?o.document.mutableCopy():_t.newInvalidDocument(s))})),S.resolve(r)}getDocumentsMatchingQuery(t,e,r,s){let o=jt();const a=e.path,l=new x(a.child("__id-9223372036854775808__")),h=this.docs.getIteratorFrom(l);for(;h.hasNext();){const{key:d,value:{document:m}}=h.getNext();if(!a.isPrefixOf(d.path))break;d.path.length>a.length+1||df(ff(m),r)<=0||(s.has(m.key)||Nr(e,m))&&(o=o.insert(m.key,m.mutableCopy()))}return S.resolve(o)}getAllFromCollectionGroup(t,e,r,s){L(9500)}ni(t,e){return S.forEach(this.docs,(r=>e(r)))}newChangeBuffer(t){return new $d(this)}getSize(t){return S.resolve(this.size)}}class $d extends xd{constructor(t){super(),this.Mr=t}applyChanges(t){const e=[];return this.changes.forEach(((r,s)=>{s.isValidDocument()?e.push(this.Mr.addEntry(t,s)):this.Mr.removeEntry(r)})),S.waitFor(e)}getFromCache(t,e){return this.Mr.getEntry(t,e)}getAllFromCache(t,e){return this.Mr.getEntries(t,e)}}/**
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
 */class zd{constructor(t){this.persistence=t,this.ri=new Ie((e=>Ys(e)),Js),this.lastRemoteSnapshotVersion=F.min(),this.highestTargetId=0,this.ii=0,this.si=new ni,this.targetCount=0,this.oi=qe._r()}forEachTarget(t,e){return this.ri.forEach(((r,s)=>e(s))),S.resolve()}getLastRemoteSnapshotVersion(t){return S.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return S.resolve(this.ii)}allocateTargetId(t){return this.highestTargetId=this.oi.next(),S.resolve(this.highestTargetId)}setTargetsMetadata(t,e,r){return r&&(this.lastRemoteSnapshotVersion=r),e>this.ii&&(this.ii=e),S.resolve()}lr(t){this.ri.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.oi=new qe(e),this.highestTargetId=e),t.sequenceNumber>this.ii&&(this.ii=t.sequenceNumber)}addTargetData(t,e){return this.lr(e),this.targetCount+=1,S.resolve()}updateTargetData(t,e){return this.lr(e),S.resolve()}removeTargetData(t,e){return this.ri.delete(e.target),this.si.Gr(e.targetId),this.targetCount-=1,S.resolve()}removeTargets(t,e,r){let s=0;const o=[];return this.ri.forEach(((a,l)=>{l.sequenceNumber<=e&&r.get(l.targetId)===null&&(this.ri.delete(a),o.push(this.removeMatchingKeysForTargetId(t,l.targetId)),s++)})),S.waitFor(o).next((()=>s))}getTargetCount(t){return S.resolve(this.targetCount)}getTargetData(t,e){const r=this.ri.get(e)||null;return S.resolve(r)}addMatchingKeys(t,e,r){return this.si.$r(e,r),S.resolve()}removeMatchingKeys(t,e,r){this.si.Qr(e,r);const s=this.persistence.referenceDelegate,o=[];return s&&e.forEach((a=>{o.push(s.markPotentiallyOrphaned(t,a))})),S.waitFor(o)}removeMatchingKeysForTargetId(t,e){return this.si.Gr(e),S.resolve()}getMatchingKeysForTargetId(t,e){const r=this.si.jr(e);return S.resolve(r)}containsKey(t,e){return S.resolve(this.si.containsKey(e))}}/**
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
 */class Ku{constructor(t,e){this._i={},this.overlays={},this.ai=new Sr(0),this.ui=!1,this.ui=!0,this.ci=new Bd,this.referenceDelegate=t(this),this.li=new zd(this),this.indexManager=new Pd,this.remoteDocumentCache=(function(s){return new jd(s)})((r=>this.referenceDelegate.hi(r))),this.serializer=new bd(e),this.Pi=new Fd(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ui=!1,Promise.resolve()}get started(){return this.ui}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new Ud,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let r=this._i[t.toKey()];return r||(r=new qd(e,this.referenceDelegate),this._i[t.toKey()]=r),r}getGlobalsCache(){return this.ci}getTargetCache(){return this.li}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Pi}runTransaction(t,e,r){D("MemoryPersistence","Starting transaction:",t);const s=new Gd(this.ai.next());return this.referenceDelegate.Ti(),r(s).next((o=>this.referenceDelegate.Ii(s).next((()=>o)))).toPromise().then((o=>(s.raiseOnCommittedEvent(),o)))}Ei(t,e){return S.or(Object.values(this._i).map((r=>()=>r.containsKey(t,e))))}}class Gd extends pf{constructor(t){super(),this.currentSequenceNumber=t}}class ri{constructor(t){this.persistence=t,this.Ri=new ni,this.Ai=null}static Vi(t){return new ri(t)}get di(){if(this.Ai)return this.Ai;throw L(60996)}addReference(t,e,r){return this.Ri.addReference(r,e),this.di.delete(r.toString()),S.resolve()}removeReference(t,e,r){return this.Ri.removeReference(r,e),this.di.add(r.toString()),S.resolve()}markPotentiallyOrphaned(t,e){return this.di.add(e.toString()),S.resolve()}removeTarget(t,e){this.Ri.Gr(e.targetId).forEach((s=>this.di.add(s.toString())));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(t,e.targetId).next((s=>{s.forEach((o=>this.di.add(o.toString())))})).next((()=>r.removeTargetData(t,e)))}Ti(){this.Ai=new Set}Ii(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return S.forEach(this.di,(r=>{const s=x.fromPath(r);return this.mi(t,s).next((o=>{o||e.removeEntry(s,F.min())}))})).next((()=>(this.Ai=null,e.apply(t))))}updateLimboDocument(t,e){return this.mi(t,e).next((r=>{r?this.di.delete(e.toString()):this.di.add(e.toString())}))}hi(t){return 0}mi(t,e){return S.or([()=>S.resolve(this.Ri.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Ei(t,e)])}}class vr{constructor(t,e){this.persistence=t,this.fi=new Ie((r=>yf(r.path)),((r,s)=>r.isEqual(s))),this.garbageCollector=kd(this,e)}static Vi(t,e){return new vr(t,e)}Ti(){}Ii(t){return S.resolve()}forEachTarget(t,e){return this.persistence.getTargetCache().forEachTarget(t,e)}dr(t){const e=this.pr(t);return this.persistence.getTargetCache().getTargetCount(t).next((r=>e.next((s=>r+s))))}pr(t){let e=0;return this.mr(t,(r=>{e++})).next((()=>e))}mr(t,e){return S.forEach(this.fi,((r,s)=>this.wr(t,r,s).next((o=>o?S.resolve():e(s)))))}removeTargets(t,e,r){return this.persistence.getTargetCache().removeTargets(t,e,r)}removeOrphanedDocuments(t,e){let r=0;const s=this.persistence.getRemoteDocumentCache(),o=s.newChangeBuffer();return s.ni(t,(a=>this.wr(t,a,e).next((l=>{l||(r++,o.removeEntry(a,F.min()))})))).next((()=>o.apply(t))).next((()=>r))}markPotentiallyOrphaned(t,e){return this.fi.set(e,t.currentSequenceNumber),S.resolve()}removeTarget(t,e){const r=e.withSequenceNumber(t.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(t,r)}addReference(t,e,r){return this.fi.set(r,t.currentSequenceNumber),S.resolve()}removeReference(t,e,r){return this.fi.set(r,t.currentSequenceNumber),S.resolve()}updateLimboDocument(t,e){return this.fi.set(e,t.currentSequenceNumber),S.resolve()}hi(t){let e=t.key.toString().length;return t.isFoundDocument()&&(e+=or(t.data.value)),e}wr(t,e,r){return S.or([()=>this.persistence.Ei(t,e),()=>this.persistence.getTargetCache().containsKey(t,e),()=>{const s=this.fi.get(e);return S.resolve(s!==void 0&&s>r)}])}getCacheSize(t){return this.persistence.getRemoteDocumentCache().getSize(t)}}/**
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
 */class si{constructor(t,e,r,s){this.targetId=t,this.fromCache=e,this.Ts=r,this.Is=s}static Es(t,e){let r=j(),s=j();for(const o of e.docChanges)switch(o.type){case 0:r=r.add(o.doc.key);break;case 1:s=s.add(o.doc.key)}return new si(t,e.fromCache,r,s)}}/**
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
 */class Hd{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
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
 */class Kd{constructor(){this.Rs=!1,this.As=!1,this.Vs=100,this.ds=(function(){return Cl()?8:gf(Pl())>0?6:4})()}initialize(t,e){this.fs=t,this.indexManager=e,this.Rs=!0}getDocumentsMatchingQuery(t,e,r,s){const o={result:null};return this.gs(t,e).next((a=>{o.result=a})).next((()=>{if(!o.result)return this.ps(t,e,s,r).next((a=>{o.result=a}))})).next((()=>{if(o.result)return;const a=new Hd;return this.ys(t,e,a).next((l=>{if(o.result=l,this.As)return this.ws(t,e,a,l.size)}))})).next((()=>o.result))}ws(t,e,r,s){return r.documentReadCount<this.Vs?(Se()<=z.DEBUG&&D("QueryEngine","SDK will not create cache indexes for query:",Pe(e),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),S.resolve()):(Se()<=z.DEBUG&&D("QueryEngine","Query:",Pe(e),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.ds*s?(Se()<=z.DEBUG&&D("QueryEngine","The SDK decides to create cache indexes for query:",Pe(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,xt(e))):S.resolve())}gs(t,e){if(sa(e))return S.resolve(null);let r=xt(e);return this.indexManager.getIndexType(t,r).next((s=>s===0?null:(e.limit!==null&&s===1&&(e=Er(e,null,"F"),r=xt(e)),this.indexManager.getDocumentsMatchingTarget(t,r).next((o=>{const a=j(...o);return this.fs.getDocuments(t,a).next((l=>this.indexManager.getMinOffset(t,r).next((h=>{const d=this.bs(e,l);return this.Ss(e,d,a,h.readTime)?this.gs(t,Er(e,null,"F")):this.Ds(t,d,e,h)}))))})))))}ps(t,e,r,s){return sa(e)||s.isEqual(F.min())?S.resolve(null):this.fs.getDocuments(t,r).next((o=>{const a=this.bs(e,o);return this.Ss(e,a,r,s)?S.resolve(null):(Se()<=z.DEBUG&&D("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Pe(e)),this.Ds(t,a,e,hf(s,An)).next((l=>l)))}))}bs(t,e){let r=new at(wu(t));return e.forEach(((s,o)=>{Nr(t,o)&&(r=r.add(o))})),r}Ss(t,e,r,s){if(t.limit===null)return!1;if(r.size!==e.size)return!0;const o=t.limitType==="F"?e.last():e.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(s)>0)}ys(t,e,r){return Se()<=z.DEBUG&&D("QueryEngine","Using full collection scan to execute query:",Pe(e)),this.fs.getDocumentsMatchingQuery(t,e,ee.min(),r)}Ds(t,e,r,s){return this.fs.getDocumentsMatchingQuery(t,r,s).next((o=>(e.forEach((a=>{o=o.insert(a.key,a)})),o)))}}/**
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
 */const ii="LocalStore",Wd=3e8;class Qd{constructor(t,e,r,s){this.persistence=t,this.Cs=e,this.serializer=s,this.vs=new Z(q),this.Fs=new Ie((o=>Ys(o)),Js),this.Ms=new Map,this.xs=t.getRemoteDocumentCache(),this.li=t.getTargetCache(),this.Pi=t.getBundleCache(),this.Os(r)}Os(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new Ld(this.xs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.xs.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(e=>t.collect(e,this.vs)))}}function Yd(n,t,e,r){return new Qd(n,t,e,r)}async function Wu(n,t){const e=U(n);return await e.persistence.runTransaction("Handle user change","readonly",(r=>{let s;return e.mutationQueue.getAllMutationBatches(r).next((o=>(s=o,e.Os(t),e.mutationQueue.getAllMutationBatches(r)))).next((o=>{const a=[],l=[];let h=j();for(const d of s){a.push(d.batchId);for(const m of d.mutations)h=h.add(m.key)}for(const d of o){l.push(d.batchId);for(const m of d.mutations)h=h.add(m.key)}return e.localDocuments.getDocuments(r,h).next((d=>({Ns:d,removedBatchIds:a,addedBatchIds:l})))}))}))}function Jd(n,t){const e=U(n);return e.persistence.runTransaction("Acknowledge batch","readwrite-primary",(r=>{const s=t.batch.keys(),o=e.xs.newChangeBuffer({trackRemovals:!0});return(function(l,h,d,m){const I=d.batch,A=I.keys();let V=S.resolve();return A.forEach((M=>{V=V.next((()=>m.getEntry(h,M))).next((O=>{const k=d.docVersions.get(M);H(k!==null,48541),O.version.compareTo(k)<0&&(I.applyToRemoteDocument(O,d),O.isValidDocument()&&(O.setReadTime(d.commitVersion),m.addEntry(O)))}))})),V.next((()=>l.mutationQueue.removeMutationBatch(h,I)))})(e,r,t,o).next((()=>o.apply(r))).next((()=>e.mutationQueue.performConsistencyCheck(r))).next((()=>e.documentOverlayCache.removeOverlaysForBatchId(r,s,t.batch.batchId))).next((()=>e.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,(function(l){let h=j();for(let d=0;d<l.mutationResults.length;++d)l.mutationResults[d].transformResults.length>0&&(h=h.add(l.batch.mutations[d].key));return h})(t)))).next((()=>e.localDocuments.getDocuments(r,s)))}))}function Qu(n){const t=U(n);return t.persistence.runTransaction("Get last remote snapshot version","readonly",(e=>t.li.getLastRemoteSnapshotVersion(e)))}function Xd(n,t){const e=U(n),r=t.snapshotVersion;let s=e.vs;return e.persistence.runTransaction("Apply remote event","readwrite-primary",(o=>{const a=e.xs.newChangeBuffer({trackRemovals:!0});s=e.vs;const l=[];t.targetChanges.forEach(((m,I)=>{const A=s.get(I);if(!A)return;l.push(e.li.removeMatchingKeys(o,m.removedDocuments,I).next((()=>e.li.addMatchingKeys(o,m.addedDocuments,I))));let V=A.withSequenceNumber(o.currentSequenceNumber);t.targetMismatches.get(I)!==null?V=V.withResumeToken(ft.EMPTY_BYTE_STRING,F.min()).withLastLimboFreeSnapshotVersion(F.min()):m.resumeToken.approximateByteSize()>0&&(V=V.withResumeToken(m.resumeToken,r)),s=s.insert(I,V),(function(O,k,K){return O.resumeToken.approximateByteSize()===0||k.snapshotVersion.toMicroseconds()-O.snapshotVersion.toMicroseconds()>=Wd?!0:K.addedDocuments.size+K.modifiedDocuments.size+K.removedDocuments.size>0})(A,V,m)&&l.push(e.li.updateTargetData(o,V))}));let h=jt(),d=j();if(t.documentUpdates.forEach((m=>{t.resolvedLimboDocuments.has(m)&&l.push(e.persistence.referenceDelegate.updateLimboDocument(o,m))})),l.push(Zd(o,a,t.documentUpdates).next((m=>{h=m.Bs,d=m.Ls}))),!r.isEqual(F.min())){const m=e.li.getLastRemoteSnapshotVersion(o).next((I=>e.li.setTargetsMetadata(o,o.currentSequenceNumber,r)));l.push(m)}return S.waitFor(l).next((()=>a.apply(o))).next((()=>e.localDocuments.getLocalViewOfDocuments(o,h,d))).next((()=>h))})).then((o=>(e.vs=s,o)))}function Zd(n,t,e){let r=j(),s=j();return e.forEach((o=>r=r.add(o))),t.getEntries(n,r).next((o=>{let a=jt();return e.forEach(((l,h)=>{const d=o.get(l);h.isFoundDocument()!==d.isFoundDocument()&&(s=s.add(l)),h.isNoDocument()&&h.version.isEqual(F.min())?(t.removeEntry(l,h.readTime),a=a.insert(l,h)):!d.isValidDocument()||h.version.compareTo(d.version)>0||h.version.compareTo(d.version)===0&&d.hasPendingWrites?(t.addEntry(h),a=a.insert(l,h)):D(ii,"Ignoring outdated watch update for ",l,". Current version:",d.version," Watch version:",h.version)})),{Bs:a,Ls:s}}))}function tm(n,t){const e=U(n);return e.persistence.runTransaction("Get next mutation batch","readonly",(r=>(t===void 0&&(t=Ks),e.mutationQueue.getNextMutationBatchAfterBatchId(r,t))))}function em(n,t){const e=U(n);return e.persistence.runTransaction("Allocate target","readwrite",(r=>{let s;return e.li.getTargetData(r,t).next((o=>o?(s=o,S.resolve(s)):e.li.allocateTargetId(r).next((a=>(s=new Qt(t,a,"TargetPurposeListen",r.currentSequenceNumber),e.li.addTargetData(r,s).next((()=>s)))))))})).then((r=>{const s=e.vs.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(e.vs=e.vs.insert(r.targetId,r),e.Fs.set(t,r.targetId)),r}))}async function Ls(n,t,e){const r=U(n),s=r.vs.get(t),o=e?"readwrite":"readwrite-primary";try{e||await r.persistence.runTransaction("Release target",o,(a=>r.persistence.referenceDelegate.removeTarget(a,s)))}catch(a){if(!He(a))throw a;D(ii,`Failed to update sequence numbers for target ${t}: ${a}`)}r.vs=r.vs.remove(t),r.Fs.delete(s.target)}function _a(n,t,e){const r=U(n);let s=F.min(),o=j();return r.persistence.runTransaction("Execute query","readwrite",(a=>(function(h,d,m){const I=U(h),A=I.Fs.get(m);return A!==void 0?S.resolve(I.vs.get(A)):I.li.getTargetData(d,m)})(r,a,xt(t)).next((l=>{if(l)return s=l.lastLimboFreeSnapshotVersion,r.li.getMatchingKeysForTargetId(a,l.targetId).next((h=>{o=h}))})).next((()=>r.Cs.getDocumentsMatchingQuery(a,t,e?s:F.min(),e?o:j()))).next((l=>(nm(r,Bf(t),l),{documents:l,ks:o})))))}function nm(n,t,e){let r=n.Ms.get(t)||F.min();e.forEach(((s,o)=>{o.readTime.compareTo(r)>0&&(r=o.readTime)})),n.Ms.set(t,r)}class ya{constructor(){this.activeTargetIds=Hf()}Qs(t){this.activeTargetIds=this.activeTargetIds.add(t)}Gs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Ws(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class rm{constructor(){this.vo=new ya,this.Fo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,r){}addLocalQueryTarget(t,e=!0){return e&&this.vo.Qs(t),this.Fo[t]||"not-current"}updateQueryState(t,e,r){this.Fo[t]=e}removeLocalQueryTarget(t){this.vo.Gs(t)}isLocalQueryTarget(t){return this.vo.activeTargetIds.has(t)}clearQueryState(t){delete this.Fo[t]}getAllActiveQueryTargets(){return this.vo.activeTargetIds}isActiveQueryTarget(t){return this.vo.activeTargetIds.has(t)}start(){return this.vo=new ya,Promise.resolve()}handleUserChange(t,e,r){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
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
 */class sm{Mo(t){}shutdown(){}}/**
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
 */const Ea="ConnectivityMonitor";class Ta{constructor(){this.xo=()=>this.Oo(),this.No=()=>this.Bo(),this.Lo=[],this.ko()}Mo(t){this.Lo.push(t)}shutdown(){window.removeEventListener("online",this.xo),window.removeEventListener("offline",this.No)}ko(){window.addEventListener("online",this.xo),window.addEventListener("offline",this.No)}Oo(){D(Ea,"Network connectivity changed: AVAILABLE");for(const t of this.Lo)t(0)}Bo(){D(Ea,"Network connectivity changed: UNAVAILABLE");for(const t of this.Lo)t(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let rr=null;function Fs(){return rr===null?rr=(function(){return 268435456+Math.round(2147483648*Math.random())})():rr++,"0x"+rr.toString(16)}/**
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
 */const ys="RestConnection",im={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class om{get Ko(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.qo=e+"://"+t.host,this.Uo=`projects/${r}/databases/${s}`,this.$o=this.databaseId.database===gr?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Wo(t,e,r,s,o){const a=Fs(),l=this.Qo(t,e.toUriEncodedString());D(ys,`Sending RPC '${t}' ${a}:`,l,r);const h={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.$o};this.Go(h,s,o);const{host:d}=new URL(l),m=$s(d);return this.zo(t,l,h,r,m).then((I=>(D(ys,`Received RPC '${t}' ${a}: `,I),I)),(I=>{throw Le(ys,`RPC '${t}' ${a} failed with error: `,I,"url: ",l,"request:",r),I}))}jo(t,e,r,s,o,a){return this.Wo(t,e,r,s,o)}Go(t,e,r){t["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+ze})(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach(((s,o)=>t[o]=s)),r&&r.headers.forEach(((s,o)=>t[o]=s))}Qo(t,e){const r=im[t];let s=`${this.qo}/v1/${e}:${r}`;return this.databaseInfo.apiKey&&(s=`${s}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),s}terminate(){}}/**
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
 */class am{constructor(t){this.Ho=t.Ho,this.Jo=t.Jo}Zo(t){this.Xo=t}Yo(t){this.e_=t}t_(t){this.n_=t}onMessage(t){this.r_=t}close(){this.Jo()}send(t){this.Ho(t)}i_(){this.Xo()}s_(){this.e_()}o_(t){this.n_(t)}__(t){this.r_(t)}}/**
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
 */const pt="WebChannelConnection",fn=(n,t,e)=>{n.listen(t,(r=>{try{e(r)}catch(s){setTimeout((()=>{throw s}),0)}}))};class De extends om{constructor(t){super(t),this.a_=[],this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}static u_(){if(!De.c_){const t=Xa();fn(t,Ja.STAT_EVENT,(e=>{e.stat===bs.PROXY?D(pt,"STAT_EVENT: detected buffering proxy"):e.stat===bs.NOPROXY&&D(pt,"STAT_EVENT: detected no buffering proxy")})),De.c_=!0}}zo(t,e,r,s,o){const a=Fs();return new Promise(((l,h)=>{const d=new Qa;d.setWithCredentials(!0),d.listenOnce(Ya.COMPLETE,(()=>{try{switch(d.getLastErrorCode()){case ir.NO_ERROR:const I=d.getResponseJson();D(pt,`XHR for RPC '${t}' ${a} received:`,JSON.stringify(I)),l(I);break;case ir.TIMEOUT:D(pt,`RPC '${t}' ${a} timed out`),h(new N(b.DEADLINE_EXCEEDED,"Request time out"));break;case ir.HTTP_ERROR:const A=d.getStatus();if(D(pt,`RPC '${t}' ${a} failed with status:`,A,"response text:",d.getResponseText()),A>0){let V=d.getResponseJson();Array.isArray(V)&&(V=V[0]);const M=V==null?void 0:V.error;if(M&&M.status&&M.message){const O=(function(K){const G=K.toLowerCase().replace(/_/g,"-");return Object.values(b).indexOf(G)>=0?G:b.UNKNOWN})(M.status);h(new N(O,M.message))}else h(new N(b.UNKNOWN,"Server responded with status "+d.getStatus()))}else h(new N(b.UNAVAILABLE,"Connection failed."));break;default:L(9055,{l_:t,streamId:a,h_:d.getLastErrorCode(),P_:d.getLastError()})}}finally{D(pt,`RPC '${t}' ${a} completed.`)}}));const m=JSON.stringify(s);D(pt,`RPC '${t}' ${a} sending request:`,s),d.send(e,"POST",m,r,15)}))}T_(t,e,r){const s=Fs(),o=[this.qo,"/","google.firestore.v1.Firestore","/",t,"/channel"],a=this.createWebChannelTransport(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(l.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Go(l.initMessageHeaders,e,r),l.encodeInitMessageHeaders=!0;const d=o.join("");D(pt,`Creating RPC '${t}' stream ${s}: ${d}`,l);const m=a.createWebChannel(d,l);this.I_(m);let I=!1,A=!1;const V=new am({Ho:M=>{A?D(pt,`Not sending because RPC '${t}' stream ${s} is closed:`,M):(I||(D(pt,`Opening RPC '${t}' stream ${s} transport.`),m.open(),I=!0),D(pt,`RPC '${t}' stream ${s} sending:`,M),m.send(M))},Jo:()=>m.close()});return fn(m,dn.EventType.OPEN,(()=>{A||(D(pt,`RPC '${t}' stream ${s} transport opened.`),V.i_())})),fn(m,dn.EventType.CLOSE,(()=>{A||(A=!0,D(pt,`RPC '${t}' stream ${s} transport closed`),V.o_(),this.E_(m))})),fn(m,dn.EventType.ERROR,(M=>{A||(A=!0,Le(pt,`RPC '${t}' stream ${s} transport errored. Name:`,M.name,"Message:",M.message),V.o_(new N(b.UNAVAILABLE,"The operation could not be completed")))})),fn(m,dn.EventType.MESSAGE,(M=>{var O;if(!A){const k=M.data[0];H(!!k,16349);const K=k,G=(K==null?void 0:K.error)||((O=K[0])==null?void 0:O.error);if(G){D(pt,`RPC '${t}' stream ${s} received error:`,G);const Y=G.status;let Tt=(function(E){const p=nt[E];if(p!==void 0)return xu(p)})(Y),At=G.message;Tt===void 0&&(Tt=b.INTERNAL,At="Unknown error status: "+Y+" with message "+G.message),A=!0,V.o_(new N(Tt,At)),m.close()}else D(pt,`RPC '${t}' stream ${s} received:`,k),V.__(k)}})),De.u_(),setTimeout((()=>{V.s_()}),0),V}terminate(){this.a_.forEach((t=>t.close())),this.a_=[]}I_(t){this.a_.push(t)}E_(t){this.a_=this.a_.filter((e=>e===t))}Go(t,e,r){super.Go(t,e,r),this.databaseInfo.apiKey&&(t["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return Za()}}/**
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
 */function um(n){return new De(n)}function Es(){return typeof document<"u"?document:null}/**
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
 */function xr(n){return new fd(n,!0)}/**
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
 */De.c_=!1;class Yu{constructor(t,e,r=1e3,s=1.5,o=6e4){this.Ci=t,this.timerId=e,this.R_=r,this.A_=s,this.V_=o,this.d_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.d_=0}g_(){this.d_=this.V_}p_(t){this.cancel();const e=Math.floor(this.d_+this.y_()),r=Math.max(0,Date.now()-this.f_),s=Math.max(0,e-r);s>0&&D("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.d_} ms, delay with jitter: ${e} ms, last attempt: ${r} ms ago)`),this.m_=this.Ci.enqueueAfterDelay(this.timerId,s,(()=>(this.f_=Date.now(),t()))),this.d_*=this.A_,this.d_<this.R_&&(this.d_=this.R_),this.d_>this.V_&&(this.d_=this.V_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.d_}}/**
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
 */const Ia="PersistentStream";class Ju{constructor(t,e,r,s,o,a,l,h){this.Ci=t,this.b_=r,this.S_=s,this.connection=o,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=l,this.listener=h,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new Yu(t,e)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Ci.enqueueAfterDelay(this.b_,6e4,(()=>this.k_())))}K_(t){this.q_(),this.stream.send(t)}async k_(){if(this.O_())return this.close(0)}q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(t,e){this.q_(),this.U_(),this.M_.cancel(),this.D_++,t!==4?this.M_.reset():e&&e.code===b.RESOURCE_EXHAUSTED?(qt(e.toString()),qt("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):e&&e.code===b.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.W_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.t_(e)}W_(){}auth(){this.state=1;const t=this.Q_(this.D_),e=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([r,s])=>{this.D_===e&&this.G_(r,s)}),(r=>{t((()=>{const s=new N(b.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(s)}))}))}G_(t,e){const r=this.Q_(this.D_);this.stream=this.j_(t,e),this.stream.Zo((()=>{r((()=>this.listener.Zo()))})),this.stream.Yo((()=>{r((()=>(this.state=2,this.v_=this.Ci.enqueueAfterDelay(this.S_,1e4,(()=>(this.O_()&&(this.state=3),Promise.resolve()))),this.listener.Yo())))})),this.stream.t_((s=>{r((()=>this.z_(s)))})),this.stream.onMessage((s=>{r((()=>++this.F_==1?this.H_(s):this.onNext(s)))}))}N_(){this.state=5,this.M_.p_((async()=>{this.state=0,this.start()}))}z_(t){return D(Ia,`close with error: ${t}`),this.stream=null,this.close(4,t)}Q_(t){return e=>{this.Ci.enqueueAndForget((()=>this.D_===t?e():(D(Ia,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class cm extends Ju{constructor(t,e,r,s,o,a){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,r,s,a),this.serializer=o}j_(t,e){return this.connection.T_("Listen",t,e)}H_(t){return this.onNext(t)}onNext(t){this.M_.reset();const e=pd(this.serializer,t),r=(function(o){if(!("targetChange"in o))return F.min();const a=o.targetChange;return a.targetIds&&a.targetIds.length?F.min():a.readTime?Ot(a.readTime):F.min()})(t);return this.listener.J_(e,r)}Z_(t){const e={};e.database=Os(this.serializer),e.addTarget=(function(o,a){let l;const h=a.target;if(l=Ns(h)?{documents:yd(o,h)}:{query:Ed(o,h).ft},l.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){l.resumeToken=Fu(o,a.resumeToken);const d=Ms(o,a.expectedCount);d!==null&&(l.expectedCount=d)}else if(a.snapshotVersion.compareTo(F.min())>0){l.readTime=Ir(o,a.snapshotVersion.toTimestamp());const d=Ms(o,a.expectedCount);d!==null&&(l.expectedCount=d)}return l})(this.serializer,t);const r=Id(this.serializer,t);r&&(e.labels=r),this.K_(e)}X_(t){const e={};e.database=Os(this.serializer),e.removeTarget=t,this.K_(e)}}class lm extends Ju{constructor(t,e,r,s,o,a){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,r,s,a),this.serializer=o}get Y_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}W_(){this.Y_&&this.ea([])}j_(t,e){return this.connection.T_("Write",t,e)}H_(t){return H(!!t.streamToken,31322),this.lastStreamToken=t.streamToken,H(!t.writeResults||t.writeResults.length===0,55816),this.listener.ta()}onNext(t){H(!!t.streamToken,12678),this.lastStreamToken=t.streamToken,this.M_.reset();const e=_d(t.writeResults,t.commitTime),r=Ot(t.commitTime);return this.listener.na(r,e)}ra(){const t={};t.database=Os(this.serializer),this.K_(t)}ea(t){const e={streamToken:this.lastStreamToken,writes:t.map((r=>gd(this.serializer,r)))};this.K_(e)}}/**
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
 */class hm{}class fm extends hm{constructor(t,e,r,s){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=r,this.serializer=s,this.ia=!1}sa(){if(this.ia)throw new N(b.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(t,e,r,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([o,a])=>this.connection.Wo(t,ks(e,r),s,o,a))).catch((o=>{throw o.name==="FirebaseError"?(o.code===b.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new N(b.UNKNOWN,o.toString())}))}jo(t,e,r,s,o){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([a,l])=>this.connection.jo(t,ks(e,r),s,a,l,o))).catch((a=>{throw a.name==="FirebaseError"?(a.code===b.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new N(b.UNKNOWN,a.toString())}))}terminate(){this.ia=!0,this.connection.terminate()}}function dm(n,t,e,r){return new fm(n,t,e,r)}class mm{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve()))))}ha(t){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.ca("Offline")))}set(t){this.Pa(),this.oa=0,t==="Online"&&(this.aa=!1),this.ca(t)}ca(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}la(t){const e=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(qt(e),this.aa=!1):D("OnlineStateTracker",e)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
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
 */const Ee="RemoteStore";class pm{constructor(t,e,r,s,o){this.localStore=t,this.datastore=e,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.Ra=[],this.Aa=o,this.Aa.Mo((a=>{r.enqueueAndForget((async()=>{we(this)&&(D(Ee,"Restarting streams for network reachability change."),await(async function(h){const d=U(h);d.Ea.add(4),await xn(d),d.Va.set("Unknown"),d.Ea.delete(4),await Or(d)})(this))}))})),this.Va=new mm(r,s)}}async function Or(n){if(we(n))for(const t of n.Ra)await t(!0)}async function xn(n){for(const t of n.Ra)await t(!1)}function Xu(n,t){const e=U(n);e.Ia.has(t.targetId)||(e.Ia.set(t.targetId,t),ci(e)?ui(e):We(e).O_()&&ai(e,t))}function oi(n,t){const e=U(n),r=We(e);e.Ia.delete(t),r.O_()&&Zu(e,t),e.Ia.size===0&&(r.O_()?r.L_():we(e)&&e.Va.set("Unknown"))}function ai(n,t){if(n.da.$e(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(F.min())>0){const e=n.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(e)}We(n).Z_(t)}function Zu(n,t){n.da.$e(t),We(n).X_(t)}function ui(n){n.da=new ud({getRemoteKeysForTarget:t=>n.remoteSyncer.getRemoteKeysForTarget(t),At:t=>n.Ia.get(t)||null,ht:()=>n.datastore.serializer.databaseId}),We(n).start(),n.Va.ua()}function ci(n){return we(n)&&!We(n).x_()&&n.Ia.size>0}function we(n){return U(n).Ea.size===0}function tc(n){n.da=void 0}async function gm(n){n.Va.set("Online")}async function _m(n){n.Ia.forEach(((t,e)=>{ai(n,t)}))}async function ym(n,t){tc(n),ci(n)?(n.Va.ha(t),ui(n)):n.Va.set("Unknown")}async function Em(n,t,e){if(n.Va.set("Online"),t instanceof Lu&&t.state===2&&t.cause)try{await(async function(s,o){const a=o.cause;for(const l of o.targetIds)s.Ia.has(l)&&(await s.remoteSyncer.rejectListen(l,a),s.Ia.delete(l),s.da.removeTarget(l))})(n,t)}catch(r){D(Ee,"Failed to remove targets %s: %s ",t.targetIds.join(","),r),await wr(n,r)}else if(t instanceof cr?n.da.Xe(t):t instanceof Ou?n.da.st(t):n.da.tt(t),!e.isEqual(F.min()))try{const r=await Qu(n.localStore);e.compareTo(r)>=0&&await(function(o,a){const l=o.da.Tt(a);return l.targetChanges.forEach(((h,d)=>{if(h.resumeToken.approximateByteSize()>0){const m=o.Ia.get(d);m&&o.Ia.set(d,m.withResumeToken(h.resumeToken,a))}})),l.targetMismatches.forEach(((h,d)=>{const m=o.Ia.get(h);if(!m)return;o.Ia.set(h,m.withResumeToken(ft.EMPTY_BYTE_STRING,m.snapshotVersion)),Zu(o,h);const I=new Qt(m.target,h,d,m.sequenceNumber);ai(o,I)})),o.remoteSyncer.applyRemoteEvent(l)})(n,e)}catch(r){D(Ee,"Failed to raise snapshot:",r),await wr(n,r)}}async function wr(n,t,e){if(!He(t))throw t;n.Ea.add(1),await xn(n),n.Va.set("Offline"),e||(e=()=>Qu(n.localStore)),n.asyncQueue.enqueueRetryable((async()=>{D(Ee,"Retrying IndexedDB access"),await e(),n.Ea.delete(1),await Or(n)}))}function ec(n,t){return t().catch((e=>wr(n,e,t)))}async function Lr(n){const t=U(n),e=ie(t);let r=t.Ta.length>0?t.Ta[t.Ta.length-1].batchId:Ks;for(;Tm(t);)try{const s=await tm(t.localStore,r);if(s===null){t.Ta.length===0&&e.L_();break}r=s.batchId,Im(t,s)}catch(s){await wr(t,s)}nc(t)&&rc(t)}function Tm(n){return we(n)&&n.Ta.length<10}function Im(n,t){n.Ta.push(t);const e=ie(n);e.O_()&&e.Y_&&e.ea(t.mutations)}function nc(n){return we(n)&&!ie(n).x_()&&n.Ta.length>0}function rc(n){ie(n).start()}async function vm(n){ie(n).ra()}async function wm(n){const t=ie(n);for(const e of n.Ta)t.ea(e.mutations)}async function Am(n,t,e){const r=n.Ta.shift(),s=Zs.from(r,t,e);await ec(n,(()=>n.remoteSyncer.applySuccessfulWrite(s))),await Lr(n)}async function Rm(n,t){t&&ie(n).Y_&&await(async function(r,s){if((function(a){return id(a)&&a!==b.ABORTED})(s.code)){const o=r.Ta.shift();ie(r).B_(),await ec(r,(()=>r.remoteSyncer.rejectFailedWrite(o.batchId,s))),await Lr(r)}})(n,t),nc(n)&&rc(n)}async function va(n,t){const e=U(n);e.asyncQueue.verifyOperationInProgress(),D(Ee,"RemoteStore received new credentials");const r=we(e);e.Ea.add(3),await xn(e),r&&e.Va.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.Ea.delete(3),await Or(e)}async function bm(n,t){const e=U(n);t?(e.Ea.delete(2),await Or(e)):t||(e.Ea.add(2),await xn(e),e.Va.set("Unknown"))}function We(n){return n.ma||(n.ma=(function(e,r,s){const o=U(e);return o.sa(),new cm(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,s)})(n.datastore,n.asyncQueue,{Zo:gm.bind(null,n),Yo:_m.bind(null,n),t_:ym.bind(null,n),J_:Em.bind(null,n)}),n.Ra.push((async t=>{t?(n.ma.B_(),ci(n)?ui(n):n.Va.set("Unknown")):(await n.ma.stop(),tc(n))}))),n.ma}function ie(n){return n.fa||(n.fa=(function(e,r,s){const o=U(e);return o.sa(),new lm(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,s)})(n.datastore,n.asyncQueue,{Zo:()=>Promise.resolve(),Yo:vm.bind(null,n),t_:Rm.bind(null,n),ta:wm.bind(null,n),na:Am.bind(null,n)}),n.Ra.push((async t=>{t?(n.fa.B_(),await Lr(n)):(await n.fa.stop(),n.Ta.length>0&&(D(Ee,`Stopping write stream with ${n.Ta.length} pending writes`),n.Ta=[]))}))),n.fa}/**
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
 */class li{constructor(t,e,r,s,o){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=r,this.op=s,this.removalCallback=o,this.deferred=new Zt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((a=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(t,e,r,s,o){const a=Date.now()+r,l=new li(t,e,a,s,o);return l.start(r),l}start(t){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new N(b.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((t=>this.deferred.resolve(t)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function hi(n,t){if(qt("AsyncQueue",`${t}: ${n}`),He(n))return new N(b.UNAVAILABLE,`${t}: ${n}`);throw n}/**
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
 */class Me{static emptySet(t){return new Me(t.comparator)}constructor(t){this.comparator=t?(e,r)=>t(e,r)||x.comparator(e.key,r.key):(e,r)=>x.comparator(e.key,r.key),this.keyedMap=mn(),this.sortedSet=new Z(this.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal(((e,r)=>(t(e),!1)))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof Me)||this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),r=t.sortedSet.getIterator();for(;e.hasNext();){const s=e.getNext().key,o=r.getNext().key;if(!s.isEqual(o))return!1}return!0}toString(){const t=[];return this.forEach((e=>{t.push(e.toString())})),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,e){const r=new Me;return r.comparator=this.comparator,r.keyedMap=t,r.sortedSet=e,r}}/**
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
 */class wa{constructor(){this.ga=new Z(x.comparator)}track(t){const e=t.doc.key,r=this.ga.get(e);r?t.type!==0&&r.type===3?this.ga=this.ga.insert(e,t):t.type===3&&r.type!==1?this.ga=this.ga.insert(e,{type:r.type,doc:t.doc}):t.type===2&&r.type===2?this.ga=this.ga.insert(e,{type:2,doc:t.doc}):t.type===2&&r.type===0?this.ga=this.ga.insert(e,{type:0,doc:t.doc}):t.type===1&&r.type===0?this.ga=this.ga.remove(e):t.type===1&&r.type===2?this.ga=this.ga.insert(e,{type:1,doc:r.doc}):t.type===0&&r.type===1?this.ga=this.ga.insert(e,{type:2,doc:t.doc}):L(63341,{Vt:t,pa:r}):this.ga=this.ga.insert(e,t)}ya(){const t=[];return this.ga.inorderTraversal(((e,r)=>{t.push(r)})),t}}class je{constructor(t,e,r,s,o,a,l,h,d){this.query=t,this.docs=e,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=o,this.fromCache=a,this.syncStateChanged=l,this.excludesMetadataChanges=h,this.hasCachedResults=d}static fromInitialDocuments(t,e,r,s,o){const a=[];return e.forEach((l=>{a.push({type:0,doc:l})})),new je(t,e,Me.emptySet(e),a,r,s,!0,!1,o)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&Cr(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,r=t.docChanges;if(e.length!==r.length)return!1;for(let s=0;s<e.length;s++)if(e[s].type!==r[s].type||!e[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class Sm{constructor(){this.wa=void 0,this.ba=[]}Sa(){return this.ba.some((t=>t.Da()))}}class Pm{constructor(){this.queries=Aa(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(e,r){const s=U(e),o=s.queries;s.queries=Aa(),o.forEach(((a,l)=>{for(const h of l.ba)h.onError(r)}))})(this,new N(b.ABORTED,"Firestore shutting down"))}}function Aa(){return new Ie((n=>vu(n)),Cr)}async function Vm(n,t){const e=U(n);let r=3;const s=t.query;let o=e.queries.get(s);o?!o.Sa()&&t.Da()&&(r=2):(o=new Sm,r=t.Da()?0:1);try{switch(r){case 0:o.wa=await e.onListen(s,!0);break;case 1:o.wa=await e.onListen(s,!1);break;case 2:await e.onFirstRemoteStoreListen(s)}}catch(a){const l=hi(a,`Initialization of query '${Pe(t.query)}' failed`);return void t.onError(l)}e.queries.set(s,o),o.ba.push(t),t.va(e.onlineState),o.wa&&t.Fa(o.wa)&&fi(e)}async function Cm(n,t){const e=U(n),r=t.query;let s=3;const o=e.queries.get(r);if(o){const a=o.ba.indexOf(t);a>=0&&(o.ba.splice(a,1),o.ba.length===0?s=t.Da()?0:1:!o.Sa()&&t.Da()&&(s=2))}switch(s){case 0:return e.queries.delete(r),e.onUnlisten(r,!0);case 1:return e.queries.delete(r),e.onUnlisten(r,!1);case 2:return e.onLastRemoteStoreUnlisten(r);default:return}}function Nm(n,t){const e=U(n);let r=!1;for(const s of t){const o=s.query,a=e.queries.get(o);if(a){for(const l of a.ba)l.Fa(s)&&(r=!0);a.wa=s}}r&&fi(e)}function Dm(n,t,e){const r=U(n),s=r.queries.get(t);if(s)for(const o of s.ba)o.onError(e);r.queries.delete(t)}function fi(n){n.Ca.forEach((t=>{t.next()}))}var Us,Ra;(Ra=Us||(Us={})).Ma="default",Ra.Cache="cache";class Mm{constructor(t,e,r){this.query=t,this.xa=e,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=r||{}}Fa(t){if(!this.options.includeMetadataChanges){const r=[];for(const s of t.docChanges)s.type!==3&&r.push(s);t=new je(t.query,t.docs,t.oldDocs,r,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.Oa?this.Ba(t)&&(this.xa.next(t),e=!0):this.La(t,this.onlineState)&&(this.ka(t),e=!0),this.Na=t,e}onError(t){this.xa.error(t)}va(t){this.onlineState=t;let e=!1;return this.Na&&!this.Oa&&this.La(this.Na,t)&&(this.ka(this.Na),e=!0),e}La(t,e){if(!t.fromCache||!this.Da())return!0;const r=e!=="Offline";return(!this.options.Ka||!r)&&(!t.docs.isEmpty()||t.hasCachedResults||e==="Offline")}Ba(t){if(t.docChanges.length>0)return!0;const e=this.Na&&this.Na.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&this.options.includeMetadataChanges===!0}ka(t){t=je.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.Oa=!0,this.xa.next(t)}Da(){return this.options.source!==Us.Cache}}/**
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
 */class sc{constructor(t){this.key=t}}class ic{constructor(t){this.key=t}}class km{constructor(t,e){this.query=t,this.Za=e,this.Xa=null,this.hasCachedResults=!1,this.current=!1,this.Ya=j(),this.mutatedKeys=j(),this.eu=wu(t),this.tu=new Me(this.eu)}get nu(){return this.Za}ru(t,e){const r=e?e.iu:new wa,s=e?e.tu:this.tu;let o=e?e.mutatedKeys:this.mutatedKeys,a=s,l=!1;const h=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,d=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(t.inorderTraversal(((m,I)=>{const A=s.get(m),V=Nr(this.query,I)?I:null,M=!!A&&this.mutatedKeys.has(A.key),O=!!V&&(V.hasLocalMutations||this.mutatedKeys.has(V.key)&&V.hasCommittedMutations);let k=!1;A&&V?A.data.isEqual(V.data)?M!==O&&(r.track({type:3,doc:V}),k=!0):this.su(A,V)||(r.track({type:2,doc:V}),k=!0,(h&&this.eu(V,h)>0||d&&this.eu(V,d)<0)&&(l=!0)):!A&&V?(r.track({type:0,doc:V}),k=!0):A&&!V&&(r.track({type:1,doc:A}),k=!0,(h||d)&&(l=!0)),k&&(V?(a=a.add(V),o=O?o.add(m):o.delete(m)):(a=a.delete(m),o=o.delete(m)))})),this.query.limit!==null)for(;a.size>this.query.limit;){const m=this.query.limitType==="F"?a.last():a.first();a=a.delete(m.key),o=o.delete(m.key),r.track({type:1,doc:m})}return{tu:a,iu:r,Ss:l,mutatedKeys:o}}su(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,r,s){const o=this.tu;this.tu=t.tu,this.mutatedKeys=t.mutatedKeys;const a=t.iu.ya();a.sort(((m,I)=>(function(V,M){const O=k=>{switch(k){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return L(20277,{Vt:k})}};return O(V)-O(M)})(m.type,I.type)||this.eu(m.doc,I.doc))),this.ou(r),s=s??!1;const l=e&&!s?this._u():[],h=this.Ya.size===0&&this.current&&!s?1:0,d=h!==this.Xa;return this.Xa=h,a.length!==0||d?{snapshot:new je(this.query,t.tu,o,a,t.mutatedKeys,h===0,d,!1,!!r&&r.resumeToken.approximateByteSize()>0),au:l}:{au:l}}va(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new wa,mutatedKeys:this.mutatedKeys,Ss:!1},!1)):{au:[]}}uu(t){return!this.Za.has(t)&&!!this.tu.has(t)&&!this.tu.get(t).hasLocalMutations}ou(t){t&&(t.addedDocuments.forEach((e=>this.Za=this.Za.add(e))),t.modifiedDocuments.forEach((e=>{})),t.removedDocuments.forEach((e=>this.Za=this.Za.delete(e))),this.current=t.current)}_u(){if(!this.current)return[];const t=this.Ya;this.Ya=j(),this.tu.forEach((r=>{this.uu(r.key)&&(this.Ya=this.Ya.add(r.key))}));const e=[];return t.forEach((r=>{this.Ya.has(r)||e.push(new ic(r))})),this.Ya.forEach((r=>{t.has(r)||e.push(new sc(r))})),e}cu(t){this.Za=t.ks,this.Ya=j();const e=this.ru(t.documents);return this.applyChanges(e,!0)}lu(){return je.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Xa===0,this.hasCachedResults)}}const di="SyncEngine";class xm{constructor(t,e,r){this.query=t,this.targetId=e,this.view=r}}class Om{constructor(t){this.key=t,this.hu=!1}}class Lm{constructor(t,e,r,s,o,a){this.localStore=t,this.remoteStore=e,this.eventManager=r,this.sharedClientState=s,this.currentUser=o,this.maxConcurrentLimboResolutions=a,this.Pu={},this.Tu=new Ie((l=>vu(l)),Cr),this.Iu=new Map,this.Eu=new Set,this.Ru=new Z(x.comparator),this.Au=new Map,this.Vu=new ni,this.du={},this.mu=new Map,this.fu=qe.ar(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function Fm(n,t,e=!0){const r=hc(n);let s;const o=r.Tu.get(t);return o?(r.sharedClientState.addLocalQueryTarget(o.targetId),s=o.view.lu()):s=await oc(r,t,e,!0),s}async function Um(n,t){const e=hc(n);await oc(e,t,!0,!1)}async function oc(n,t,e,r){const s=await em(n.localStore,xt(t)),o=s.targetId,a=n.sharedClientState.addLocalQueryTarget(o,e);let l;return r&&(l=await Bm(n,t,o,a==="current",s.resumeToken)),n.isPrimaryClient&&e&&Xu(n.remoteStore,s),l}async function Bm(n,t,e,r,s){n.pu=(I,A,V)=>(async function(O,k,K,G){let Y=k.view.ru(K);Y.Ss&&(Y=await _a(O.localStore,k.query,!1).then((({documents:E})=>k.view.ru(E,Y))));const Tt=G&&G.targetChanges.get(k.targetId),At=G&&G.targetMismatches.get(k.targetId)!=null,dt=k.view.applyChanges(Y,O.isPrimaryClient,Tt,At);return Sa(O,k.targetId,dt.au),dt.snapshot})(n,I,A,V);const o=await _a(n.localStore,t,!0),a=new km(t,o.ks),l=a.ru(o.documents),h=kn.createSynthesizedTargetChangeForCurrentChange(e,r&&n.onlineState!=="Offline",s),d=a.applyChanges(l,n.isPrimaryClient,h);Sa(n,e,d.au);const m=new xm(t,e,a);return n.Tu.set(t,m),n.Iu.has(e)?n.Iu.get(e).push(t):n.Iu.set(e,[t]),d.snapshot}async function qm(n,t,e){const r=U(n),s=r.Tu.get(t),o=r.Iu.get(s.targetId);if(o.length>1)return r.Iu.set(s.targetId,o.filter((a=>!Cr(a,t)))),void r.Tu.delete(t);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await Ls(r.localStore,s.targetId,!1).then((()=>{r.sharedClientState.clearQueryState(s.targetId),e&&oi(r.remoteStore,s.targetId),Bs(r,s.targetId)})).catch(Ge)):(Bs(r,s.targetId),await Ls(r.localStore,s.targetId,!0))}async function jm(n,t){const e=U(n),r=e.Tu.get(t),s=e.Iu.get(r.targetId);e.isPrimaryClient&&s.length===1&&(e.sharedClientState.removeLocalQueryTarget(r.targetId),oi(e.remoteStore,r.targetId))}async function $m(n,t,e){const r=Ym(n);try{const s=await(function(a,l){const h=U(a),d=X.now(),m=l.reduce(((V,M)=>V.add(M.key)),j());let I,A;return h.persistence.runTransaction("Locally write mutations","readwrite",(V=>{let M=jt(),O=j();return h.xs.getEntries(V,m).next((k=>{M=k,M.forEach(((K,G)=>{G.isValidDocument()||(O=O.add(K))}))})).next((()=>h.localDocuments.getOverlayedDocuments(V,M))).next((k=>{I=k;const K=[];for(const G of l){const Y=td(G,I.get(G.key).overlayedDocument);Y!=null&&K.push(new ve(G.key,Y,du(Y.value.mapValue),Ut.exists(!0)))}return h.mutationQueue.addMutationBatch(V,d,K,l)})).next((k=>{A=k;const K=k.applyToLocalDocumentSet(I,O);return h.documentOverlayCache.saveOverlays(V,k.batchId,K)}))})).then((()=>({batchId:A.batchId,changes:Ru(I)})))})(r.localStore,t);r.sharedClientState.addPendingMutation(s.batchId),(function(a,l,h){let d=a.du[a.currentUser.toKey()];d||(d=new Z(q)),d=d.insert(l,h),a.du[a.currentUser.toKey()]=d})(r,s.batchId,e),await On(r,s.changes),await Lr(r.remoteStore)}catch(s){const o=hi(s,"Failed to persist write");e.reject(o)}}async function ac(n,t){const e=U(n);try{const r=await Xd(e.localStore,t);t.targetChanges.forEach(((s,o)=>{const a=e.Au.get(o);a&&(H(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?a.hu=!0:s.modifiedDocuments.size>0?H(a.hu,14607):s.removedDocuments.size>0&&(H(a.hu,42227),a.hu=!1))})),await On(e,r,t)}catch(r){await Ge(r)}}function ba(n,t,e){const r=U(n);if(r.isPrimaryClient&&e===0||!r.isPrimaryClient&&e===1){const s=[];r.Tu.forEach(((o,a)=>{const l=a.view.va(t);l.snapshot&&s.push(l.snapshot)})),(function(a,l){const h=U(a);h.onlineState=l;let d=!1;h.queries.forEach(((m,I)=>{for(const A of I.ba)A.va(l)&&(d=!0)})),d&&fi(h)})(r.eventManager,t),s.length&&r.Pu.J_(s),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function zm(n,t,e){const r=U(n);r.sharedClientState.updateQueryState(t,"rejected",e);const s=r.Au.get(t),o=s&&s.key;if(o){let a=new Z(x.comparator);a=a.insert(o,_t.newNoDocument(o,F.min()));const l=j().add(o),h=new kr(F.min(),new Map,new Z(q),a,l);await ac(r,h),r.Ru=r.Ru.remove(o),r.Au.delete(t),mi(r)}else await Ls(r.localStore,t,!1).then((()=>Bs(r,t,e))).catch(Ge)}async function Gm(n,t){const e=U(n),r=t.batch.batchId;try{const s=await Jd(e.localStore,t);cc(e,r,null),uc(e,r),e.sharedClientState.updateMutationState(r,"acknowledged"),await On(e,s)}catch(s){await Ge(s)}}async function Hm(n,t,e){const r=U(n);try{const s=await(function(a,l){const h=U(a);return h.persistence.runTransaction("Reject batch","readwrite-primary",(d=>{let m;return h.mutationQueue.lookupMutationBatch(d,l).next((I=>(H(I!==null,37113),m=I.keys(),h.mutationQueue.removeMutationBatch(d,I)))).next((()=>h.mutationQueue.performConsistencyCheck(d))).next((()=>h.documentOverlayCache.removeOverlaysForBatchId(d,m,l))).next((()=>h.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(d,m))).next((()=>h.localDocuments.getDocuments(d,m)))}))})(r.localStore,t);cc(r,t,e),uc(r,t),r.sharedClientState.updateMutationState(t,"rejected",e),await On(r,s)}catch(s){await Ge(s)}}function uc(n,t){(n.mu.get(t)||[]).forEach((e=>{e.resolve()})),n.mu.delete(t)}function cc(n,t,e){const r=U(n);let s=r.du[r.currentUser.toKey()];if(s){const o=s.get(t);o&&(e?o.reject(e):o.resolve(),s=s.remove(t)),r.du[r.currentUser.toKey()]=s}}function Bs(n,t,e=null){n.sharedClientState.removeLocalQueryTarget(t);for(const r of n.Iu.get(t))n.Tu.delete(r),e&&n.Pu.yu(r,e);n.Iu.delete(t),n.isPrimaryClient&&n.Vu.Gr(t).forEach((r=>{n.Vu.containsKey(r)||lc(n,r)}))}function lc(n,t){n.Eu.delete(t.path.canonicalString());const e=n.Ru.get(t);e!==null&&(oi(n.remoteStore,e),n.Ru=n.Ru.remove(t),n.Au.delete(e),mi(n))}function Sa(n,t,e){for(const r of e)r instanceof sc?(n.Vu.addReference(r.key,t),Km(n,r)):r instanceof ic?(D(di,"Document no longer in limbo: "+r.key),n.Vu.removeReference(r.key,t),n.Vu.containsKey(r.key)||lc(n,r.key)):L(19791,{wu:r})}function Km(n,t){const e=t.key,r=e.path.canonicalString();n.Ru.get(e)||n.Eu.has(r)||(D(di,"New document in limbo: "+e),n.Eu.add(r),mi(n))}function mi(n){for(;n.Eu.size>0&&n.Ru.size<n.maxConcurrentLimboResolutions;){const t=n.Eu.values().next().value;n.Eu.delete(t);const e=new x(Q.fromString(t)),r=n.fu.next();n.Au.set(r,new Om(e)),n.Ru=n.Ru.insert(e,r),Xu(n.remoteStore,new Qt(xt(Tu(e.path)),r,"TargetPurposeLimboResolution",Sr.ce))}}async function On(n,t,e){const r=U(n),s=[],o=[],a=[];r.Tu.isEmpty()||(r.Tu.forEach(((l,h)=>{a.push(r.pu(h,t,e).then((d=>{var m;if((d||e)&&r.isPrimaryClient){const I=d?!d.fromCache:(m=e==null?void 0:e.targetChanges.get(h.targetId))==null?void 0:m.current;r.sharedClientState.updateQueryState(h.targetId,I?"current":"not-current")}if(d){s.push(d);const I=si.Es(h.targetId,d);o.push(I)}})))})),await Promise.all(a),r.Pu.J_(s),await(async function(h,d){const m=U(h);try{await m.persistence.runTransaction("notifyLocalViewChanges","readwrite",(I=>S.forEach(d,(A=>S.forEach(A.Ts,(V=>m.persistence.referenceDelegate.addReference(I,A.targetId,V))).next((()=>S.forEach(A.Is,(V=>m.persistence.referenceDelegate.removeReference(I,A.targetId,V)))))))))}catch(I){if(!He(I))throw I;D(ii,"Failed to update sequence numbers: "+I)}for(const I of d){const A=I.targetId;if(!I.fromCache){const V=m.vs.get(A),M=V.snapshotVersion,O=V.withLastLimboFreeSnapshotVersion(M);m.vs=m.vs.insert(A,O)}}})(r.localStore,o))}async function Wm(n,t){const e=U(n);if(!e.currentUser.isEqual(t)){D(di,"User change. New user:",t.toKey());const r=await Wu(e.localStore,t);e.currentUser=t,(function(o,a){o.mu.forEach((l=>{l.forEach((h=>{h.reject(new N(b.CANCELLED,a))}))})),o.mu.clear()})(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await On(e,r.Ns)}}function Qm(n,t){const e=U(n),r=e.Au.get(t);if(r&&r.hu)return j().add(r.key);{let s=j();const o=e.Iu.get(t);if(!o)return s;for(const a of o){const l=e.Tu.get(a);s=s.unionWith(l.view.nu)}return s}}function hc(n){const t=U(n);return t.remoteStore.remoteSyncer.applyRemoteEvent=ac.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=Qm.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=zm.bind(null,t),t.Pu.J_=Nm.bind(null,t.eventManager),t.Pu.yu=Dm.bind(null,t.eventManager),t}function Ym(n){const t=U(n);return t.remoteStore.remoteSyncer.applySuccessfulWrite=Gm.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=Hm.bind(null,t),t}class Ar{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=xr(t.databaseInfo.databaseId),this.sharedClientState=this.Du(t),this.persistence=this.Cu(t),await this.persistence.start(),this.localStore=this.vu(t),this.gcScheduler=this.Fu(t,this.localStore),this.indexBackfillerScheduler=this.Mu(t,this.localStore)}Fu(t,e){return null}Mu(t,e){return null}vu(t){return Yd(this.persistence,new Kd,t.initialUser,this.serializer)}Cu(t){return new Ku(ri.Vi,this.serializer)}Du(t){return new rm}async terminate(){var t,e;(t=this.gcScheduler)==null||t.stop(),(e=this.indexBackfillerScheduler)==null||e.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Ar.provider={build:()=>new Ar};class Jm extends Ar{constructor(t){super(),this.cacheSizeBytes=t}Fu(t,e){H(this.persistence.referenceDelegate instanceof vr,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new Dd(r,t.asyncQueue,e)}Cu(t){const e=this.cacheSizeBytes!==void 0?wt.withCacheSize(this.cacheSizeBytes):wt.DEFAULT;return new Ku((r=>vr.Vi(r,e)),this.serializer)}}class qs{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>ba(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=Wm.bind(null,this.syncEngine),await bm(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return(function(){return new Pm})()}createDatastore(t){const e=xr(t.databaseInfo.databaseId),r=um(t.databaseInfo);return dm(t.authCredentials,t.appCheckCredentials,r,e)}createRemoteStore(t){return(function(r,s,o,a,l){return new pm(r,s,o,a,l)})(this.localStore,this.datastore,t.asyncQueue,(e=>ba(this.syncEngine,e,0)),(function(){return Ta.v()?new Ta:new sm})())}createSyncEngine(t,e){return(function(s,o,a,l,h,d,m){const I=new Lm(s,o,a,l,h,d);return m&&(I.gu=!0),I})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){var t,e;await(async function(s){const o=U(s);D(Ee,"RemoteStore shutting down."),o.Ea.add(5),await xn(o),o.Aa.shutdown(),o.Va.set("Unknown")})(this.remoteStore),(t=this.datastore)==null||t.terminate(),(e=this.eventManager)==null||e.terminate()}}qs.provider={build:()=>new qs};/**
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
 *//**
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
 */class Xm{constructor(t){this.observer=t,this.muted=!1}next(t){this.muted||this.observer.next&&this.Ou(this.observer.next,t)}error(t){this.muted||(this.observer.error?this.Ou(this.observer.error,t):qt("Uncaught Error in snapshot listener:",t.toString()))}Nu(){this.muted=!0}Ou(t,e){setTimeout((()=>{this.muted||t(e)}),0)}}/**
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
 */const oe="FirestoreClient";class Zm{constructor(t,e,r,s,o){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=r,this._databaseInfo=s,this.user=gt.UNAUTHENTICATED,this.clientId=Hs.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=o,this.authCredentials.start(r,(async a=>{D(oe,"Received user=",a.uid),await this.authCredentialListener(a),this.user=a})),this.appCheckCredentials.start(r,(a=>(D(oe,"Received new app check token=",a),this.appCheckCredentialListener(a,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Zt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const r=hi(e,"Failed to shutdown persistence");t.reject(r)}})),t.promise}}async function Ts(n,t){n.asyncQueue.verifyOperationInProgress(),D(oe,"Initializing OfflineComponentProvider");const e=n.configuration;await t.initialize(e);let r=e.initialUser;n.setCredentialChangeListener((async s=>{r.isEqual(s)||(await Wu(t.localStore,s),r=s)})),t.persistence.setDatabaseDeletedListener((()=>n.terminate())),n._offlineComponents=t}async function Pa(n,t){n.asyncQueue.verifyOperationInProgress();const e=await tp(n);D(oe,"Initializing OnlineComponentProvider"),await t.initialize(e,n.configuration),n.setCredentialChangeListener((r=>va(t.remoteStore,r))),n.setAppCheckTokenChangeListener(((r,s)=>va(t.remoteStore,s))),n._onlineComponents=t}async function tp(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){D(oe,"Using user provided OfflineComponentProvider");try{await Ts(n,n._uninitializedComponentsProvider._offline)}catch(t){const e=t;if(!(function(s){return s.name==="FirebaseError"?s.code===b.FAILED_PRECONDITION||s.code===b.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11})(e))throw e;Le("Error using user provided cache. Falling back to memory cache: "+e),await Ts(n,new Ar)}}else D(oe,"Using default OfflineComponentProvider"),await Ts(n,new Jm(void 0));return n._offlineComponents}async function fc(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(D(oe,"Using user provided OnlineComponentProvider"),await Pa(n,n._uninitializedComponentsProvider._online)):(D(oe,"Using default OnlineComponentProvider"),await Pa(n,new qs))),n._onlineComponents}function ep(n){return fc(n).then((t=>t.syncEngine))}async function np(n){const t=await fc(n),e=t.eventManager;return e.onListen=Fm.bind(null,t.syncEngine),e.onUnlisten=qm.bind(null,t.syncEngine),e.onFirstRemoteStoreListen=Um.bind(null,t.syncEngine),e.onLastRemoteStoreUnlisten=jm.bind(null,t.syncEngine),e}function rp(n,t,e={}){const r=new Zt;return n.asyncQueue.enqueueAndForget((async()=>(function(o,a,l,h,d){const m=new Xm({next:A=>{m.Nu(),a.enqueueAndForget((()=>Cm(o,I))),A.fromCache&&h.source==="server"?d.reject(new N(b.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):d.resolve(A)},error:A=>d.reject(A)}),I=new Mm(l,m,{includeMetadataChanges:!0,Ka:!0});return Vm(o,I)})(await np(n),n.asyncQueue,t,e,r))),r.promise}function sp(n,t){const e=new Zt;return n.asyncQueue.enqueueAndForget((async()=>$m(await ep(n),t,e))),e.promise}/**
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
 */function dc(n){const t={};return n.timeoutSeconds!==void 0&&(t.timeoutSeconds=n.timeoutSeconds),t}/**
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
 */const ip="ComponentProvider",Va=new Map;function op(n,t,e,r,s){return new If(n,t,e,s.host,s.ssl,s.experimentalForceLongPolling,s.experimentalAutoDetectLongPolling,dc(s.experimentalLongPollingOptions),s.useFetchStreams,s.isUsingEmulator,r)}/**
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
 */const mc="firestore.googleapis.com",Ca=!0;class Na{constructor(t){if(t.host===void 0){if(t.ssl!==void 0)throw new N(b.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=mc,this.ssl=Ca}else this.host=t.host,this.ssl=t.ssl??Ca;if(this.isUsingEmulator=t.emulatorOptions!==void 0,this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=Hu;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<Cd)throw new N(b.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}cf("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=dc(t.experimentalLongPollingOptions??{}),(function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new N(b.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new N(b.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new N(b.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&(function(r,s){return r.timeoutSeconds===s.timeoutSeconds})(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class Fr{constructor(t,e,r,s){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Na({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new N(b.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new N(b.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Na(t),this._emulatorOptions=t.emulatorOptions||{},t.credentials!==void 0&&(this._authCredentials=(function(r){if(!r)return new Xh;switch(r.type){case"firstParty":return new nf(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new N(b.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(t.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(e){const r=Va.get(e);r&&(D(ip,"Removing Datastore"),Va.delete(e),r.terminate())})(this),Promise.resolve()}}function ap(n,t,e,r={}){var d;n=wn(n,Fr);const s=$s(t),o=n._getSettings(),a={...o,emulatorOptions:n._getEmulatorOptions()},l=`${t}:${e}`;s&&(wl(`https://${l}`),Sl("Firestore",!0)),o.host!==mc&&o.host!==l&&Le("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const h={...o,host:l,ssl:s,emulatorOptions:r};if(!fr(h,a)&&(n._setSettings(h),r.mockUserToken)){let m,I;if(typeof r.mockUserToken=="string")m=r.mockUserToken,I=gt.MOCK_USER;else{m=Al(r.mockUserToken,(d=n._app)==null?void 0:d.options.projectId);const A=r.mockUserToken.sub||r.mockUserToken.user_id;if(!A)throw new N(b.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");I=new gt(A)}n._authCredentials=new Zh(new eu(m,I))}}/**
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
 */class ae{constructor(t,e,r){this.converter=e,this._query=r,this.type="query",this.firestore=t}withConverter(t){return new ae(this.firestore,t,this._query)}}class ot{constructor(t,e,r){this.converter=e,this._key=r,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new te(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new ot(this.firestore,t,this._key)}toJSON(){return{type:ot._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(t,e,r){if(Dn(e,ot._jsonSchema))return new ot(t,r||null,new x(Q.fromString(e.referencePath)))}}ot._jsonSchemaVersion="firestore/documentReference/1.0",ot._jsonSchema={type:st("string",ot._jsonSchemaVersion),referencePath:st("string")};class te extends ae{constructor(t,e,r){super(t,e,Tu(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new ot(this.firestore,null,new x(t))}withConverter(t){return new te(this.firestore,t,this._path)}}function bp(n,t,...e){if(n=Oe(n),nu("collection","path",t),n instanceof Fr){const r=Q.fromString(t,...e);return zo(r),new te(n,null,r)}{if(!(n instanceof ot||n instanceof te))throw new N(b.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(Q.fromString(t,...e));return zo(r),new te(n.firestore,null,r)}}function Sp(n,t,...e){if(n=Oe(n),arguments.length===1&&(t=Hs.newId()),nu("doc","path",t),n instanceof Fr){const r=Q.fromString(t,...e);return $o(r),new ot(n,null,new x(r))}{if(!(n instanceof ot||n instanceof te))throw new N(b.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(Q.fromString(t,...e));return $o(r),new ot(n.firestore,n instanceof te?n.converter:null,new x(r))}}/**
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
 */const Da="AsyncQueue";class Ma{constructor(t=Promise.resolve()){this.Yu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new Yu(this,"async_queue_retry"),this._c=()=>{const r=Es();r&&D(Da,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=t;const e=Es();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.uc(),this.cc(t)}enterRestrictedMode(t){if(!this.ec){this.ec=!0,this.sc=t||!1;const e=Es();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this._c)}}enqueue(t){if(this.uc(),this.ec)return new Promise((()=>{}));const e=new Zt;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(t().then(e.resolve,e.reject),e.promise))).then((()=>e.promise))}enqueueRetryable(t){this.enqueueAndForget((()=>(this.Yu.push(t),this.lc())))}async lc(){if(this.Yu.length!==0){try{await this.Yu[0](),this.Yu.shift(),this.M_.reset()}catch(t){if(!He(t))throw t;D(Da,"Operation failed with retryable error: "+t)}this.Yu.length>0&&this.M_.p_((()=>this.lc()))}}cc(t){const e=this.ac.then((()=>(this.rc=!0,t().catch((r=>{throw this.nc=r,this.rc=!1,qt("INTERNAL UNHANDLED ERROR: ",ka(r)),r})).then((r=>(this.rc=!1,r))))));return this.ac=e,e}enqueueAfterDelay(t,e,r){this.uc(),this.oc.indexOf(t)>-1&&(e=0);const s=li.createAndSchedule(this,t,e,r,(o=>this.hc(o)));return this.tc.push(s),s}uc(){this.nc&&L(47125,{Pc:ka(this.nc)})}verifyOperationInProgress(){}async Tc(){let t;do t=this.ac,await t;while(t!==this.ac)}Ic(t){for(const e of this.tc)if(e.timerId===t)return!0;return!1}Ec(t){return this.Tc().then((()=>{this.tc.sort(((e,r)=>e.targetTimeMs-r.targetTimeMs));for(const e of this.tc)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.Tc()}))}Rc(t){this.oc.push(t)}hc(t){const e=this.tc.indexOf(t);this.tc.splice(e,1)}}function ka(n){let t=n.message||"";return n.stack&&(t=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),t}class pi extends Fr{constructor(t,e,r,s){super(t,e,r,s),this.type="firestore",this._queue=new Ma,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new Ma(t),this._firestoreClient=void 0,await t}}}function Pp(n,t){const e=typeof n=="object"?n:Fh(),r=typeof n=="string"?n:gr,s=Dh(e,"firestore").getImmediate({identifier:r});if(!s._initialized){const o=Il("firestore");o&&ap(s,...o)}return s}function pc(n){if(n._terminated)throw new N(b.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||up(n),n._firestoreClient}function up(n){var r,s,o,a;const t=n._freezeSettings(),e=op(n._databaseId,((r=n._app)==null?void 0:r.options.appId)||"",n._persistenceKey,(s=n._app)==null?void 0:s.options.apiKey,t);n._componentsProvider||(o=t.localCache)!=null&&o._offlineComponentProvider&&((a=t.localCache)!=null&&a._onlineComponentProvider)&&(n._componentsProvider={_offline:t.localCache._offlineComponentProvider,_online:t.localCache._onlineComponentProvider}),n._firestoreClient=new Zm(n._authCredentials,n._appCheckCredentials,n._queue,e,n._componentsProvider&&(function(h){const d=h==null?void 0:h._online.build();return{_offline:h==null?void 0:h._offline.build(d),_online:d}})(n._componentsProvider))}/**
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
 */class St{constructor(t){this._byteString=t}static fromBase64String(t){try{return new St(ft.fromBase64String(t))}catch(e){throw new N(b.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new St(ft.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}toJSON(){return{type:St._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(t){if(Dn(t,St._jsonSchema))return St.fromBase64String(t.bytes)}}St._jsonSchemaVersion="firestore/bytes/1.0",St._jsonSchema={type:st("string",St._jsonSchemaVersion),bytes:st("string")};/**
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
 */class gc{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new N(b.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ht(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
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
 */class gi{constructor(t){this._methodName=t}}/**
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
 */class Lt{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new N(b.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new N(b.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}_compareTo(t){return q(this._lat,t._lat)||q(this._long,t._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Lt._jsonSchemaVersion}}static fromJSON(t){if(Dn(t,Lt._jsonSchema))return new Lt(t.latitude,t.longitude)}}Lt._jsonSchemaVersion="firestore/geoPoint/1.0",Lt._jsonSchema={type:st("string",Lt._jsonSchemaVersion),latitude:st("number"),longitude:st("number")};/**
 * @license
 * Copyright 2024 Google LLC
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
 */class Vt{constructor(t){this._values=(t||[]).map((e=>e))}toArray(){return this._values.map((t=>t))}isEqual(t){return(function(r,s){if(r.length!==s.length)return!1;for(let o=0;o<r.length;++o)if(r[o]!==s[o])return!1;return!0})(this._values,t._values)}toJSON(){return{type:Vt._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(t){if(Dn(t,Vt._jsonSchema)){if(Array.isArray(t.vectorValues)&&t.vectorValues.every((e=>typeof e=="number")))return new Vt(t.vectorValues);throw new N(b.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Vt._jsonSchemaVersion="firestore/vectorValue/1.0",Vt._jsonSchema={type:st("string",Vt._jsonSchemaVersion),vectorValues:st("object")};/**
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
 */const cp=/^__.*__$/;class lp{constructor(t,e,r){this.data=t,this.fieldMask=e,this.fieldTransforms=r}toMutation(t,e){return this.fieldMask!==null?new ve(t,this.data,this.fieldMask,e,this.fieldTransforms):new Mn(t,this.data,e,this.fieldTransforms)}}function _c(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw L(40011,{dataSource:n})}}class _i{constructor(t,e,r,s,o,a){this.settings=t,this.databaseId=e,this.serializer=r,this.ignoreUndefinedProperties=s,o===void 0&&this.validatePath(),this.fieldTransforms=o||[],this.fieldMask=a||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}contextWith(t){return new _i({...this.settings,...t},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}childContextForField(t){var s;const e=(s=this.path)==null?void 0:s.child(t),r=this.contextWith({path:e,arrayElement:!1});return r.validatePathSegment(t),r}childContextForFieldPath(t){var s;const e=(s=this.path)==null?void 0:s.child(t),r=this.contextWith({path:e,arrayElement:!1});return r.validatePath(),r}childContextForArray(t){return this.contextWith({path:void 0,arrayElement:!0})}createError(t){return Rr(t,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(t){return this.fieldMask.find((e=>t.isPrefixOf(e)))!==void 0||this.fieldTransforms.find((e=>t.isPrefixOf(e.field)))!==void 0}validatePath(){if(this.path)for(let t=0;t<this.path.length;t++)this.validatePathSegment(this.path.get(t))}validatePathSegment(t){if(t.length===0)throw this.createError("Document fields must not be empty");if(_c(this.dataSource)&&cp.test(t))throw this.createError('Document fields cannot begin and end with "__"')}}class hp{constructor(t,e,r){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=r||xr(t)}createContext(t,e,r,s=!1){return new _i({dataSource:t,methodName:e,targetDoc:r,path:ht.emptyPath(),arrayElement:!1,hasConverter:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function yc(n){const t=n._freezeSettings(),e=xr(n._databaseId);return new hp(n._databaseId,!!t.ignoreUndefinedProperties,e)}function fp(n,t,e,r,s,o={}){const a=n.createContext(o.merge||o.mergeFields?2:0,t,e,s);Ic("Data must be an object, but it was:",a,r);const l=Ec(r,a);let h,d;if(o.merge)h=new Pt(a.fieldMask),d=a.fieldTransforms;else if(o.mergeFields){const m=[];for(const I of o.mergeFields){const A=Ur(t,I,e);if(!a.contains(A))throw new N(b.INVALID_ARGUMENT,`Field '${A}' is specified in your field mask but missing from your input data.`);gp(m,A)||m.push(A)}h=new Pt(m),d=a.fieldTransforms.filter((I=>h.covers(I.field)))}else h=null,d=a.fieldTransforms;return new lp(new bt(l),h,d)}class yi extends gi{_toFieldTransform(t){return new Yf(t.path,new Vn)}isEqual(t){return t instanceof yi}}function dp(n,t,e,r=!1){return Ei(e,n.createContext(r?4:3,t))}function Ei(n,t){if(Tc(n=Oe(n)))return Ic("Unsupported field value:",t,n),Ec(n,t);if(n instanceof gi)return(function(r,s){if(!_c(s.dataSource))throw s.createError(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.createError(`${r._methodName}() is not currently supported inside arrays`);const o=r._toFieldTransform(s);o&&s.fieldTransforms.push(o)})(n,t),null;if(n===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),n instanceof Array){if(t.settings.arrayElement&&t.dataSource!==4)throw t.createError("Nested arrays are not supported");return(function(r,s){const o=[];let a=0;for(const l of r){let h=Ei(l,s.childContextForArray(a));h==null&&(h={nullValue:"NULL_VALUE"}),o.push(h),a++}return{arrayValue:{values:o}}})(n,t)}return(function(r,s){if((r=Oe(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return Kf(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const o=X.fromDate(r);return{timestampValue:Ir(s.serializer,o)}}if(r instanceof X){const o=new X(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Ir(s.serializer,o)}}if(r instanceof Lt)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof St)return{bytesValue:Fu(s.serializer,r._byteString)};if(r instanceof ot){const o=s.databaseId,a=r.firestore._databaseId;if(!a.isEqual(o))throw s.createError(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${o.projectId}/${o.database}`);return{referenceValue:ei(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof Vt)return(function(a,l){const h=a instanceof Vt?a.toArray():a;return{mapValue:{fields:{[hu]:{stringValue:fu},[_r]:{arrayValue:{values:h.map((m=>{if(typeof m!="number")throw l.createError("VectorValues must only contain numeric values.");return Xs(l.serializer,m)}))}}}}}})(r,s);if(Gu(r))return r._toProto(s.serializer);throw s.createError(`Unsupported field value: ${br(r)}`)})(n,t)}function Ec(n,t){const e={};return iu(n)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):Te(n,((r,s)=>{const o=Ei(s,t.childContextForField(r));o!=null&&(e[r]=o)})),{mapValue:{fields:e}}}function Tc(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof X||n instanceof Lt||n instanceof St||n instanceof ot||n instanceof gi||n instanceof Vt||Gu(n))}function Ic(n,t,e){if(!Tc(e)||!ru(e)){const r=br(e);throw r==="an object"?t.createError(n+" a custom object"):t.createError(n+" "+r)}}function Ur(n,t,e){if((t=Oe(t))instanceof gc)return t._internalPath;if(typeof t=="string")return pp(n,t);throw Rr("Field path arguments must be of type string or ",n,!1,void 0,e)}const mp=new RegExp("[~\\*/\\[\\]]");function pp(n,t,e){if(t.search(mp)>=0)throw Rr(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,e);try{return new gc(...t.split("."))._internalPath}catch{throw Rr(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,e)}}function Rr(n,t,e,r,s){const o=r&&!r.isEmpty(),a=s!==void 0;let l=`Function ${t}() called with invalid data`;e&&(l+=" (via `toFirestore()`)"),l+=". ";let h="";return(o||a)&&(h+=" (found",o&&(h+=` in field ${r}`),a&&(h+=` in document ${s}`),h+=")"),new N(b.INVALID_ARGUMENT,l+n+h)}function gp(n,t){return n.some((e=>e.isEqual(t)))}/**
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
 */class _p{convertValue(t,e="none"){switch(se(t)){case 0:return null;case 1:return t.booleanValue;case 2:return et(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(re(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 11:return this.convertObject(t.mapValue,e);case 10:return this.convertVectorValue(t.mapValue);default:throw L(62114,{value:t})}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const r={};return Te(t,((s,o)=>{r[s]=this.convertValue(o,e)})),r}convertVectorValue(t){var r,s,o;const e=(o=(s=(r=t.fields)==null?void 0:r[_r].arrayValue)==null?void 0:s.values)==null?void 0:o.map((a=>et(a.doubleValue)));return new Vt(e)}convertGeoPoint(t){return new Lt(et(t.latitude),et(t.longitude))}convertArray(t,e){return(t.values||[]).map((r=>this.convertValue(r,e)))}convertServerTimestamp(t,e){switch(e){case"previous":const r=Vr(t);return r==null?null:this.convertValue(r,e);case"estimate":return this.convertTimestamp(Rn(t));default:return null}}convertTimestamp(t){const e=ne(t);return new X(e.seconds,e.nanos)}convertDocumentKey(t,e){const r=Q.fromString(t);H(zu(r),9688,{name:t});const s=new bn(r.get(1),r.get(3)),o=new x(r.popFirst(5));return s.isEqual(e)||qt(`Document ${o} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),o}}/**
 * @license
 * Copyright 2024 Google LLC
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
 */class yp extends _p{constructor(t){super(),this.firestore=t}convertBytes(t){return new St(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new ot(this.firestore,null,e)}}function Vp(){return new yi("serverTimestamp")}const xa="@firebase/firestore",Oa="4.10.0";/**
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
 */class vc{constructor(t,e,r,s,o){this._firestore=t,this._userDataWriter=e,this._key=r,this._document=s,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new ot(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new Ep(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){var t;return((t=this._document)==null?void 0:t.data.clone().value.mapValue.fields)??void 0}get(t){if(this._document){const e=this._document.data.field(Ur("DocumentSnapshot.get",t));if(e!==null)return this._userDataWriter.convertValue(e)}}}class Ep extends vc{data(){return super.data()}}/**
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
 */function Tp(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new N(b.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Ti{}class Ii extends Ti{}function Cp(n,t,...e){let r=[];t instanceof Ti&&r.push(t),r=r.concat(e),(function(o){const a=o.filter((h=>h instanceof wi)).length,l=o.filter((h=>h instanceof vi)).length;if(a>1||a>0&&l>0)throw new N(b.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(r);for(const s of r)n=s._apply(n);return n}class vi extends Ii{constructor(t,e,r){super(),this._field=t,this._op=e,this._value=r,this.type="where"}static _create(t,e,r){return new vi(t,e,r)}_apply(t){const e=this._parse(t);return wc(t._query,e),new ae(t.firestore,t.converter,Ds(t._query,e))}_parse(t){const e=yc(t.firestore);return(function(o,a,l,h,d,m,I){let A;if(d.isKeyField()){if(m==="array-contains"||m==="array-contains-any")throw new N(b.INVALID_ARGUMENT,`Invalid Query. You can't perform '${m}' queries on documentId().`);if(m==="in"||m==="not-in"){Fa(I,m);const M=[];for(const O of I)M.push(La(h,o,O));A={arrayValue:{values:M}}}else A=La(h,o,I)}else m!=="in"&&m!=="not-in"&&m!=="array-contains-any"||Fa(I,m),A=dp(l,a,I,m==="in"||m==="not-in");return rt.create(d,m,A)})(t._query,"where",e,t.firestore._databaseId,this._field,this._op,this._value)}}class wi extends Ti{constructor(t,e){super(),this.type=t,this._queryConstraints=e}static _create(t,e){return new wi(t,e)}_parse(t){const e=this._queryConstraints.map((r=>r._parse(t))).filter((r=>r.getFilters().length>0));return e.length===1?e[0]:Ct.create(e,this._getOperator())}_apply(t){const e=this._parse(t);return e.getFilters().length===0?t:((function(s,o){let a=s;const l=o.getFlattenedFilters();for(const h of l)wc(a,h),a=Ds(a,h)})(t._query,e),new ae(t.firestore,t.converter,Ds(t._query,e)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Ai extends Ii{constructor(t,e){super(),this._field=t,this._direction=e,this.type="orderBy"}static _create(t,e){return new Ai(t,e)}_apply(t){const e=(function(s,o,a){if(s.startAt!==null)throw new N(b.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new N(b.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Pn(o,a)})(t._query,this._field,this._direction);return new ae(t.firestore,t.converter,Uf(t._query,e))}}function Np(n,t="asc"){const e=t,r=Ur("orderBy",n);return Ai._create(r,e)}class Ri extends Ii{constructor(t,e,r){super(),this.type=t,this._limit=e,this._limitType=r}static _create(t,e,r){return new Ri(t,e,r)}_apply(t){return new ae(t.firestore,t.converter,Er(t._query,this._limit,this._limitType))}}function Dp(n){return lf("limit",n),Ri._create("limit",n,"F")}function La(n,t,e){if(typeof(e=Oe(e))=="string"){if(e==="")throw new N(b.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Iu(t)&&e.indexOf("/")!==-1)throw new N(b.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${e}' contains a '/' character.`);const r=t.path.child(Q.fromString(e));if(!x.isDocumentKey(r))throw new N(b.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Xo(n,new x(r))}if(e instanceof ot)return Xo(n,e._key);throw new N(b.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${br(e)}.`)}function Fa(n,t){if(!Array.isArray(n)||n.length===0)throw new N(b.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function wc(n,t){const e=(function(s,o){for(const a of s)for(const l of a.getFlattenedFilters())if(o.indexOf(l.op)>=0)return l.op;return null})(n.filters,(function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(t.op));if(e!==null)throw e===t.op?new N(b.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new N(b.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${e.toString()}' filters.`)}function Ip(n,t,e){let r;return r=n?n.toFirestore(t):t,r}class sr{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class ke extends vc{constructor(t,e,r,s,o,a){super(t,e,r,s,a),this._firestore=t,this._firestoreImpl=t,this.metadata=o}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new lr(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const r=this._document.data.field(Ur("DocumentSnapshot.get",t));if(r!==null)return this._userDataWriter.convertValue(r,e.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new N(b.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t=this._document,e={};return e.type=ke._jsonSchemaVersion,e.bundle="",e.bundleSource="DocumentSnapshot",e.bundleName=this._key.toString(),!t||!t.isValidDocument()||!t.isFoundDocument()?e:(this._userDataWriter.convertObjectMap(t.data.value.mapValue.fields,"previous"),e.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),e)}}ke._jsonSchemaVersion="firestore/documentSnapshot/1.0",ke._jsonSchema={type:st("string",ke._jsonSchemaVersion),bundleSource:st("string","DocumentSnapshot"),bundleName:st("string"),bundle:st("string")};class lr extends ke{data(t={}){return super.data(t)}}class xe{constructor(t,e,r,s){this._firestore=t,this._userDataWriter=e,this._snapshot=s,this.metadata=new sr(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const t=[];return this.forEach((e=>t.push(e))),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,e){this._snapshot.docs.forEach((r=>{t.call(e,new lr(this._firestore,this._userDataWriter,r.key,r,new sr(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new N(b.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=(function(s,o){if(s._snapshot.oldDocs.isEmpty()){let a=0;return s._snapshot.docChanges.map((l=>{const h=new lr(s._firestore,s._userDataWriter,l.doc.key,l.doc,new sr(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);return l.doc,{type:"added",doc:h,oldIndex:-1,newIndex:a++}}))}{let a=s._snapshot.oldDocs;return s._snapshot.docChanges.filter((l=>o||l.type!==3)).map((l=>{const h=new lr(s._firestore,s._userDataWriter,l.doc.key,l.doc,new sr(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);let d=-1,m=-1;return l.type!==0&&(d=a.indexOf(l.doc.key),a=a.delete(l.doc.key)),l.type!==1&&(a=a.add(l.doc),m=a.indexOf(l.doc.key)),{type:vp(l.type),doc:h,oldIndex:d,newIndex:m}}))}})(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new N(b.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t={};t.type=xe._jsonSchemaVersion,t.bundleSource="QuerySnapshot",t.bundleName=Hs.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const e=[],r=[],s=[];return this.docs.forEach((o=>{o._document!==null&&(e.push(o._document),r.push(this._userDataWriter.convertObjectMap(o._document.data.value.mapValue.fields,"previous")),s.push(o.ref.path))})),t.bundle=(this._firestore,this.query._query,t.bundleName,"NOT SUPPORTED"),t}}function vp(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return L(61501,{type:n})}}/**
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
 */xe._jsonSchemaVersion="firestore/querySnapshot/1.0",xe._jsonSchema={type:st("string",xe._jsonSchemaVersion),bundleSource:st("string","QuerySnapshot"),bundleName:st("string"),bundle:st("string")};function Mp(n){n=wn(n,ae);const t=wn(n.firestore,pi),e=pc(t),r=new yp(t);return Tp(n._query),rp(e,n._query).then((s=>new xe(t,r,n,s)))}function kp(n,t,e){n=wn(n,ot);const r=wn(n.firestore,pi),s=Ip(n.converter,t),o=yc(r);return wp(r,[fp(o,"setDoc",n._key,s,n.converter!==null,e).toMutation(n._key,Ut.none())])}function wp(n,t){const e=pc(n);return sp(e,t)}(function(t,e=!0){Jh(Oh),mr(new In("firestore",((r,{instanceIdentifier:s,options:o})=>{const a=r.getProvider("app").getImmediate(),l=new pi(new tf(r.getProvider("auth-internal")),new rf(a,r.getProvider("app-check-internal")),vf(a,s),a);return o={useFetchStreams:e,...o},l._setSettings(o),l}),"PUBLIC").setMultipleInstances(!0)),Ne(xa,Oa,t),Ne(xa,Oa,"esm2020")})();export{_e as a,Vp as b,bp as c,Sp as d,Mp as e,Pp as g,Lh as i,Dp as l,Np as o,Cp as q,kp as s};
