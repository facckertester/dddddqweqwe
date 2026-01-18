var Bc=Object.defineProperty,qc=Object.defineProperties;var jc=Object.getOwnPropertyDescriptors;var go=Object.getOwnPropertySymbols;var $c=Object.prototype.hasOwnProperty,zc=Object.prototype.propertyIsEnumerable;var _o=(n,t,e)=>t in n?Bc(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e,Rt=(n,t)=>{for(var e in t||(t={}))$c.call(t,e)&&_o(n,e,t[e]);if(go)for(var e of go(t))zc.call(t,e)&&_o(n,e,t[e]);return n},is=(n,t)=>qc(n,jc(t));var b=(n,t,e)=>new Promise((r,s)=>{var o=h=>{try{l(e.next(h))}catch(d){s(d)}},a=h=>{try{l(e.throw(h))}catch(d){s(d)}},l=h=>h.done?r(h.value):Promise.resolve(h.value).then(o,a);l((e=e.apply(n,t)).next())});import{o as Gc}from"./vendor-DdgGw12P.js";const Hc=()=>{};var yo={};/**
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
 */const Ra=function(n){const t=[];let e=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?t[e++]=s:s<2048?(t[e++]=s>>6|192,t[e++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),t[e++]=s>>18|240,t[e++]=s>>12&63|128,t[e++]=s>>6&63|128,t[e++]=s&63|128):(t[e++]=s>>12|224,t[e++]=s>>6&63|128,t[e++]=s&63|128)}return t},Kc=function(n){const t=[];let e=0,r=0;for(;e<n.length;){const s=n[e++];if(s<128)t[r++]=String.fromCharCode(s);else if(s>191&&s<224){const o=n[e++];t[r++]=String.fromCharCode((s&31)<<6|o&63)}else if(s>239&&s<365){const o=n[e++],a=n[e++],l=n[e++],h=((s&7)<<18|(o&63)<<12|(a&63)<<6|l&63)-65536;t[r++]=String.fromCharCode(55296+(h>>10)),t[r++]=String.fromCharCode(56320+(h&1023))}else{const o=n[e++],a=n[e++];t[r++]=String.fromCharCode((s&15)<<12|(o&63)<<6|a&63)}}return t.join("")},Sa={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,t){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const e=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const o=n[s],a=s+1<n.length,l=a?n[s+1]:0,h=s+2<n.length,d=h?n[s+2]:0,p=o>>2,I=(o&3)<<4|l>>4;let w=(l&15)<<2|d>>6,V=d&63;h||(V=64,a||(w=64)),r.push(e[p],e[I],e[w],e[V])}return r.join("")},encodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(n):this.encodeByteArray(Ra(n),t)},decodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(n):Kc(this.decodeStringToByteArray(n,t))},decodeStringToByteArray(n,t){this.init_();const e=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const o=e[n.charAt(s++)],l=s<n.length?e[n.charAt(s)]:0;++s;const d=s<n.length?e[n.charAt(s)]:64;++s;const I=s<n.length?e[n.charAt(s)]:64;if(++s,o==null||l==null||d==null||I==null)throw new Wc;const w=o<<2|l>>4;if(r.push(w),d!==64){const V=l<<4&240|d>>2;if(r.push(V),I!==64){const k=d<<6&192|I;r.push(k)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Wc extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Qc=function(n){const t=Ra(n);return Sa.encodeByteArray(t,!0)},or=function(n){return Qc(n).replace(/\./g,"")},Yc=function(n){try{return Sa.decodeString(n,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function Jc(){if(typeof self!="undefined")return self;if(typeof window!="undefined")return window;if(typeof global!="undefined")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Xc=()=>Jc().__FIREBASE_DEFAULTS__,Zc=()=>{if(typeof process=="undefined"||typeof yo=="undefined")return;const n=yo.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},tl=()=>{if(typeof document=="undefined")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(e){return}const t=n&&Yc(n[1]);return t&&JSON.parse(t)},Ds=()=>{try{return Hc()||Xc()||Zc()||tl()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},el=n=>{var t,e;return(e=(t=Ds())==null?void 0:t.emulatorHosts)==null?void 0:e[n]},nl=n=>{const t=el(n);if(!t)return;const e=t.lastIndexOf(":");if(e<=0||e+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(e+1),10);return t[0]==="["?[t.substring(1,e-1),r]:[t.substring(0,e),r]},Ca=()=>{var n;return(n=Ds())==null?void 0:n.config};/**
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
 */class rl{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}wrapCallback(t){return(e,r)=>{e?this.reject(e):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(e):t(e,r))}}}/**
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
 */function Ns(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch(t){return!1}}function sl(n){return b(this,null,function*(){return(yield fetch(n,{credentials:"include"})).ok})}/**
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
 */function il(n,t){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const e={alg:"none",type:"JWT"},r=t||"demo-project",s=n.iat||0,o=n.sub||n.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Rt({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},n);return[or(JSON.stringify(e)),or(JSON.stringify(a)),""].join(".")}const fn={};function ol(){const n={prod:[],emulator:[]};for(const t of Object.keys(fn))fn[t]?n.emulator.push(t):n.prod.push(t);return n}function al(n){let t=document.getElementById(n),e=!1;return t||(t=document.createElement("div"),t.setAttribute("id",n),e=!0),{created:e,element:t}}let Eo=!1;function ul(n,t){if(typeof window=="undefined"||typeof document=="undefined"||!Ns(window.location.host)||fn[n]===t||fn[n]||Eo)return;fn[n]=t;function e(w){return`__firebase__banner__${w}`}const r="__firebase__banner",o=ol().prod.length>0;function a(){const w=document.getElementById(r);w&&w.remove()}function l(w){w.style.display="flex",w.style.background="#7faaf0",w.style.position="fixed",w.style.bottom="5px",w.style.left="5px",w.style.padding=".5em",w.style.borderRadius="5px",w.style.alignItems="center"}function h(w,V){w.setAttribute("width","24"),w.setAttribute("id",V),w.setAttribute("height","24"),w.setAttribute("viewBox","0 0 24 24"),w.setAttribute("fill","none"),w.style.marginLeft="-6px"}function d(){const w=document.createElement("span");return w.style.cursor="pointer",w.style.marginLeft="16px",w.style.fontSize="24px",w.innerHTML=" &times;",w.onclick=()=>{Eo=!0,a()},w}function p(w,V){w.setAttribute("id",V),w.innerText="Learn more",w.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",w.setAttribute("target","__blank"),w.style.paddingLeft="5px",w.style.textDecoration="underline"}function I(){const w=al(r),V=e("text"),k=document.getElementById(V)||document.createElement("span"),M=e("learnmore"),x=document.getElementById(M)||document.createElement("a"),K=e("preprendIcon"),G=document.getElementById(K)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(w.created){const Y=w.element;l(Y),p(x,M);const Tt=d();h(G,K),Y.append(G,k,x,Tt),document.body.appendChild(Y)}o?(k.innerText="Preview backend disconnected.",G.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
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
</defs>`,k.innerText="Preview backend running in this workspace."),k.setAttribute("id",V)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",I):I()}/**
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
 */function cl(){return typeof navigator!="undefined"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function ll(){var t;const n=(t=Ds())==null?void 0:t.forceEnvironment;if(n==="node")return!0;if(n==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch(e){return!1}}function hl(){return!ll()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function fl(){try{return typeof indexedDB=="object"}catch(n){return!1}}function dl(){return new Promise((n,t)=>{try{let e=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),e||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{e=!1},s.onerror=()=>{var o;t(((o=s.error)==null?void 0:o.message)||"")}}catch(e){t(e)}})}/**
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
 */const ml="FirebaseError";class Ue extends Error{constructor(t,e,r){super(e),this.code=t,this.customData=r,this.name=ml,Object.setPrototypeOf(this,Ue.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Va.prototype.create)}}class Va{constructor(t,e,r){this.service=t,this.serviceName=e,this.errors=r}create(t,...e){const r=e[0]||{},s=`${this.service}/${t}`,o=this.errors[t],a=o?pl(o,r):"Error",l=`${this.serviceName}: ${a} (${s}).`;return new Ue(s,l,r)}}function pl(n,t){return n.replace(gl,(e,r)=>{const s=t[r];return s!=null?String(s):`<${r}?>`})}const gl=/\{\$([^}]+)}/g;function ar(n,t){if(n===t)return!0;const e=Object.keys(n),r=Object.keys(t);for(const s of e){if(!r.includes(s))return!1;const o=n[s],a=t[s];if(To(o)&&To(a)){if(!ar(o,a))return!1}else if(o!==a)return!1}for(const s of r)if(!e.includes(s))return!1;return!0}function To(n){return n!==null&&typeof n=="object"}/**
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
 */function Ne(n){return n&&n._delegate?n._delegate:n}class _n{constructor(t,e,r){this.name=t,this.instanceFactory=e,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const fe="[DEFAULT]";/**
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
 */class _l{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const r=new rl;if(this.instancesDeferred.set(e,r),this.isInitialized(e)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:e});s&&r.resolve(s)}catch(s){}}return this.instancesDeferred.get(e).promise}getImmediate(t){var s;const e=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),r=(s=t==null?void 0:t.optional)!=null?s:!1;if(this.isInitialized(e)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:e})}catch(o){if(r)return null;throw o}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(El(t))try{this.getOrInitializeService({instanceIdentifier:fe})}catch(e){}for(const[e,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(e);try{const o=this.getOrInitializeService({instanceIdentifier:s});r.resolve(o)}catch(o){}}}}clearInstance(t=fe){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}delete(){return b(this,null,function*(){const t=Array.from(this.instances.values());yield Promise.all([...t.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...t.filter(e=>"_delete"in e).map(e=>e._delete())])})}isComponentSet(){return this.component!=null}isInitialized(t=fe){return this.instances.has(t)}getOptions(t=fe){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:e});for(const[o,a]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(o);r===l&&a.resolve(s)}return s}onInit(t,e){var a;const r=this.normalizeInstanceIdentifier(e),s=(a=this.onInitCallbacks.get(r))!=null?a:new Set;s.add(t),this.onInitCallbacks.set(r,s);const o=this.instances.get(r);return o&&t(o,r),()=>{s.delete(t)}}invokeOnInitCallbacks(t,e){const r=this.onInitCallbacks.get(e);if(r)for(const s of r)try{s(t,e)}catch(o){}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:yl(t),options:e}),this.instances.set(t,r),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch(s){}return r||null}normalizeInstanceIdentifier(t=fe){return this.component?this.component.multipleInstances?t:fe:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function yl(n){return n===fe?void 0:n}function El(n){return n.instantiationMode==="EAGER"}/**
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
 */class Tl{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new _l(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var z;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(z||(z={}));const Il={debug:z.DEBUG,verbose:z.VERBOSE,info:z.INFO,warn:z.WARN,error:z.ERROR,silent:z.SILENT},vl=z.INFO,Al={[z.DEBUG]:"log",[z.VERBOSE]:"log",[z.INFO]:"info",[z.WARN]:"warn",[z.ERROR]:"error"},wl=(n,t,...e)=>{if(t<n.logLevel)return;const r=new Date().toISOString(),s=Al[t];if(s)console[s](`[${r}]  ${n.name}:`,...e);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Pa{constructor(t){this.name=t,this._logLevel=vl,this._logHandler=wl,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in z))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?Il[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,z.DEBUG,...t),this._logHandler(this,z.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,z.VERBOSE,...t),this._logHandler(this,z.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,z.INFO,...t),this._logHandler(this,z.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,z.WARN,...t),this._logHandler(this,z.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,z.ERROR,...t),this._logHandler(this,z.ERROR,...t)}}/**
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
 */class Rl{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(Sl(e)){const r=e.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(e=>e).join(" ")}}function Sl(n){const t=n.getComponent();return(t==null?void 0:t.type)==="VERSION"}const fs="@firebase/app",Io="0.14.7";/**
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
 */const Ut=new Pa("@firebase/app"),Cl="@firebase/app-compat",Vl="@firebase/analytics-compat",Pl="@firebase/analytics",bl="@firebase/app-check-compat",Dl="@firebase/app-check",Nl="@firebase/auth",kl="@firebase/auth-compat",xl="@firebase/database",Ol="@firebase/data-connect",Ml="@firebase/database-compat",Ll="@firebase/functions",Fl="@firebase/functions-compat",Ul="@firebase/installations",Bl="@firebase/installations-compat",ql="@firebase/messaging",jl="@firebase/messaging-compat",$l="@firebase/performance",zl="@firebase/performance-compat",Gl="@firebase/remote-config",Hl="@firebase/remote-config-compat",Kl="@firebase/storage",Wl="@firebase/storage-compat",Ql="@firebase/firestore",Yl="@firebase/ai",Jl="@firebase/firestore-compat",Xl="firebase",Zl="12.8.0";/**
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
 */const ds="[DEFAULT]",th={[fs]:"fire-core",[Cl]:"fire-core-compat",[Pl]:"fire-analytics",[Vl]:"fire-analytics-compat",[Dl]:"fire-app-check",[bl]:"fire-app-check-compat",[Nl]:"fire-auth",[kl]:"fire-auth-compat",[xl]:"fire-rtdb",[Ol]:"fire-data-connect",[Ml]:"fire-rtdb-compat",[Ll]:"fire-fn",[Fl]:"fire-fn-compat",[Ul]:"fire-iid",[Bl]:"fire-iid-compat",[ql]:"fire-fcm",[jl]:"fire-fcm-compat",[$l]:"fire-perf",[zl]:"fire-perf-compat",[Gl]:"fire-rc",[Hl]:"fire-rc-compat",[Kl]:"fire-gcs",[Wl]:"fire-gcs-compat",[Ql]:"fire-fst",[Jl]:"fire-fst-compat",[Yl]:"fire-vertex","fire-js":"fire-js",[Xl]:"fire-js-all"};/**
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
 */const ur=new Map,eh=new Map,ms=new Map;function vo(n,t){try{n.container.addComponent(t)}catch(e){Ut.debug(`Component ${t.name} failed to register with FirebaseApp ${n.name}`,e)}}function cr(n){const t=n.name;if(ms.has(t))return Ut.debug(`There were multiple attempts to register component ${t}.`),!1;ms.set(t,n);for(const e of ur.values())vo(e,n);for(const e of eh.values())vo(e,n);return!0}function nh(n,t){const e=n.container.getProvider("heartbeat").getImmediate({optional:!0});return e&&e.triggerHeartbeat(),n.container.getProvider(t)}function rh(n){return n==null?!1:n.settings!==void 0}/**
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
 */const sh={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Qt=new Va("app","Firebase",sh);/**
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
 */class ih{constructor(t,e,r){this._isDeleted=!1,this._options=Rt({},t),this._config=Rt({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new _n("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Qt.create("app-deleted",{appName:this._name})}}/**
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
 */const oh=Zl;function ah(n,t={}){let e=n;typeof t!="object"&&(t={name:t});const r=Rt({name:ds,automaticDataCollectionEnabled:!0},t),s=r.name;if(typeof s!="string"||!s)throw Qt.create("bad-app-name",{appName:String(s)});if(e||(e=Ca()),!e)throw Qt.create("no-options");const o=ur.get(s);if(o){if(ar(e,o.options)&&ar(r,o.config))return o;throw Qt.create("duplicate-app",{appName:s})}const a=new Tl(s);for(const h of ms.values())a.addComponent(h);const l=new ih(e,r,a);return ur.set(s,l),l}function uh(n=ds){const t=ur.get(n);if(!t&&n===ds&&Ca())return ah();if(!t)throw Qt.create("no-app",{appName:n});return t}function Ce(n,t,e){var a;let r=(a=th[n])!=null?a:n;e&&(r+=`-${e}`);const s=r.match(/\s|\//),o=t.match(/\s|\//);if(s||o){const l=[`Unable to register library "${r}" with version "${t}":`];s&&l.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&o&&l.push("and"),o&&l.push(`version name "${t}" contains illegal characters (whitespace or "/")`),Ut.warn(l.join(" "));return}cr(new _n(`${r}-version`,()=>({library:r,version:t}),"VERSION"))}/**
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
 */const ch="firebase-heartbeat-database",lh=1,yn="firebase-heartbeat-store";let os=null;function ba(){return os||(os=Gc(ch,lh,{upgrade:(n,t)=>{switch(t){case 0:try{n.createObjectStore(yn)}catch(e){console.warn(e)}}}}).catch(n=>{throw Qt.create("idb-open",{originalErrorMessage:n.message})})),os}function hh(n){return b(this,null,function*(){try{const e=(yield ba()).transaction(yn),r=yield e.objectStore(yn).get(Da(n));return yield e.done,r}catch(t){if(t instanceof Ue)Ut.warn(t.message);else{const e=Qt.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});Ut.warn(e.message)}}})}function Ao(n,t){return b(this,null,function*(){try{const r=(yield ba()).transaction(yn,"readwrite");yield r.objectStore(yn).put(t,Da(n)),yield r.done}catch(e){if(e instanceof Ue)Ut.warn(e.message);else{const r=Qt.create("idb-set",{originalErrorMessage:e==null?void 0:e.message});Ut.warn(r.message)}}})}function Da(n){return`${n.name}!${n.options.appId}`}/**
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
 */const fh=1024,dh=30;class mh{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new gh(e),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}triggerHeartbeat(){return b(this,null,function*(){var t,e;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=wo();if(((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null&&(this._heartbeatsCache=yield this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(a=>a.date===o))return;if(this._heartbeatsCache.heartbeats.push({date:o,agent:s}),this._heartbeatsCache.heartbeats.length>dh){const a=_h(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(a,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){Ut.warn(r)}})}getHeartbeatsHeader(){return b(this,null,function*(){var t;try{if(this._heartbeatsCache===null&&(yield this._heartbeatsCachePromise),((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=wo(),{heartbeatsToSend:r,unsentEntries:s}=ph(this._heartbeatsCache.heartbeats),o=or(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,yield this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(e){return Ut.warn(e),""}})}}function wo(){return new Date().toISOString().substring(0,10)}function ph(n,t=fh){const e=[];let r=n.slice();for(const s of n){const o=e.find(a=>a.agent===s.agent);if(o){if(o.dates.push(s.date),Ro(e)>t){o.dates.pop();break}}else if(e.push({agent:s.agent,dates:[s.date]}),Ro(e)>t){e.pop();break}r=r.slice(1)}return{heartbeatsToSend:e,unsentEntries:r}}class gh{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}runIndexedDBEnvironmentCheck(){return b(this,null,function*(){return fl()?dl().then(()=>!0).catch(()=>!1):!1})}read(){return b(this,null,function*(){if(yield this._canUseIndexedDBPromise){const e=yield hh(this.app);return e!=null&&e.heartbeats?e:{heartbeats:[]}}else return{heartbeats:[]}})}overwrite(t){return b(this,null,function*(){var r;if(yield this._canUseIndexedDBPromise){const s=yield this.read();return Ao(this.app,{lastSentHeartbeatDate:(r=t.lastSentHeartbeatDate)!=null?r:s.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return})}add(t){return b(this,null,function*(){var r;if(yield this._canUseIndexedDBPromise){const s=yield this.read();return Ao(this.app,{lastSentHeartbeatDate:(r=t.lastSentHeartbeatDate)!=null?r:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...t.heartbeats]})}else return})}}function Ro(n){return or(JSON.stringify({version:2,heartbeats:n})).length}function _h(n){if(n.length===0)return-1;let t=0,e=n[0].date;for(let r=1;r<n.length;r++)n[r].date<e&&(e=n[r].date,t=r);return t}/**
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
 */function yh(n){cr(new _n("platform-logger",t=>new Rl(t),"PRIVATE")),cr(new _n("heartbeat",t=>new mh(t),"PRIVATE")),Ce(fs,Io,n),Ce(fs,Io,"esm2020"),Ce("fire-js","")}yh("");var Eh="firebase",Th="12.8.0";/**
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
 */Ce(Eh,Th,"app");var So=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Yt,Na;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(E,m){function _(){}_.prototype=m.prototype,E.F=m.prototype,E.prototype=new _,E.prototype.constructor=E,E.D=function(T,y,A){for(var g=Array(arguments.length-2),It=2;It<arguments.length;It++)g[It-2]=arguments[It];return m.prototype[y].apply(T,g)}}function e(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}t(r,e),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(E,m,_){_||(_=0);const T=Array(16);if(typeof m=="string")for(var y=0;y<16;++y)T[y]=m.charCodeAt(_++)|m.charCodeAt(_++)<<8|m.charCodeAt(_++)<<16|m.charCodeAt(_++)<<24;else for(y=0;y<16;++y)T[y]=m[_++]|m[_++]<<8|m[_++]<<16|m[_++]<<24;m=E.g[0],_=E.g[1],y=E.g[2];let A=E.g[3],g;g=m+(A^_&(y^A))+T[0]+3614090360&4294967295,m=_+(g<<7&4294967295|g>>>25),g=A+(y^m&(_^y))+T[1]+3905402710&4294967295,A=m+(g<<12&4294967295|g>>>20),g=y+(_^A&(m^_))+T[2]+606105819&4294967295,y=A+(g<<17&4294967295|g>>>15),g=_+(m^y&(A^m))+T[3]+3250441966&4294967295,_=y+(g<<22&4294967295|g>>>10),g=m+(A^_&(y^A))+T[4]+4118548399&4294967295,m=_+(g<<7&4294967295|g>>>25),g=A+(y^m&(_^y))+T[5]+1200080426&4294967295,A=m+(g<<12&4294967295|g>>>20),g=y+(_^A&(m^_))+T[6]+2821735955&4294967295,y=A+(g<<17&4294967295|g>>>15),g=_+(m^y&(A^m))+T[7]+4249261313&4294967295,_=y+(g<<22&4294967295|g>>>10),g=m+(A^_&(y^A))+T[8]+1770035416&4294967295,m=_+(g<<7&4294967295|g>>>25),g=A+(y^m&(_^y))+T[9]+2336552879&4294967295,A=m+(g<<12&4294967295|g>>>20),g=y+(_^A&(m^_))+T[10]+4294925233&4294967295,y=A+(g<<17&4294967295|g>>>15),g=_+(m^y&(A^m))+T[11]+2304563134&4294967295,_=y+(g<<22&4294967295|g>>>10),g=m+(A^_&(y^A))+T[12]+1804603682&4294967295,m=_+(g<<7&4294967295|g>>>25),g=A+(y^m&(_^y))+T[13]+4254626195&4294967295,A=m+(g<<12&4294967295|g>>>20),g=y+(_^A&(m^_))+T[14]+2792965006&4294967295,y=A+(g<<17&4294967295|g>>>15),g=_+(m^y&(A^m))+T[15]+1236535329&4294967295,_=y+(g<<22&4294967295|g>>>10),g=m+(y^A&(_^y))+T[1]+4129170786&4294967295,m=_+(g<<5&4294967295|g>>>27),g=A+(_^y&(m^_))+T[6]+3225465664&4294967295,A=m+(g<<9&4294967295|g>>>23),g=y+(m^_&(A^m))+T[11]+643717713&4294967295,y=A+(g<<14&4294967295|g>>>18),g=_+(A^m&(y^A))+T[0]+3921069994&4294967295,_=y+(g<<20&4294967295|g>>>12),g=m+(y^A&(_^y))+T[5]+3593408605&4294967295,m=_+(g<<5&4294967295|g>>>27),g=A+(_^y&(m^_))+T[10]+38016083&4294967295,A=m+(g<<9&4294967295|g>>>23),g=y+(m^_&(A^m))+T[15]+3634488961&4294967295,y=A+(g<<14&4294967295|g>>>18),g=_+(A^m&(y^A))+T[4]+3889429448&4294967295,_=y+(g<<20&4294967295|g>>>12),g=m+(y^A&(_^y))+T[9]+568446438&4294967295,m=_+(g<<5&4294967295|g>>>27),g=A+(_^y&(m^_))+T[14]+3275163606&4294967295,A=m+(g<<9&4294967295|g>>>23),g=y+(m^_&(A^m))+T[3]+4107603335&4294967295,y=A+(g<<14&4294967295|g>>>18),g=_+(A^m&(y^A))+T[8]+1163531501&4294967295,_=y+(g<<20&4294967295|g>>>12),g=m+(y^A&(_^y))+T[13]+2850285829&4294967295,m=_+(g<<5&4294967295|g>>>27),g=A+(_^y&(m^_))+T[2]+4243563512&4294967295,A=m+(g<<9&4294967295|g>>>23),g=y+(m^_&(A^m))+T[7]+1735328473&4294967295,y=A+(g<<14&4294967295|g>>>18),g=_+(A^m&(y^A))+T[12]+2368359562&4294967295,_=y+(g<<20&4294967295|g>>>12),g=m+(_^y^A)+T[5]+4294588738&4294967295,m=_+(g<<4&4294967295|g>>>28),g=A+(m^_^y)+T[8]+2272392833&4294967295,A=m+(g<<11&4294967295|g>>>21),g=y+(A^m^_)+T[11]+1839030562&4294967295,y=A+(g<<16&4294967295|g>>>16),g=_+(y^A^m)+T[14]+4259657740&4294967295,_=y+(g<<23&4294967295|g>>>9),g=m+(_^y^A)+T[1]+2763975236&4294967295,m=_+(g<<4&4294967295|g>>>28),g=A+(m^_^y)+T[4]+1272893353&4294967295,A=m+(g<<11&4294967295|g>>>21),g=y+(A^m^_)+T[7]+4139469664&4294967295,y=A+(g<<16&4294967295|g>>>16),g=_+(y^A^m)+T[10]+3200236656&4294967295,_=y+(g<<23&4294967295|g>>>9),g=m+(_^y^A)+T[13]+681279174&4294967295,m=_+(g<<4&4294967295|g>>>28),g=A+(m^_^y)+T[0]+3936430074&4294967295,A=m+(g<<11&4294967295|g>>>21),g=y+(A^m^_)+T[3]+3572445317&4294967295,y=A+(g<<16&4294967295|g>>>16),g=_+(y^A^m)+T[6]+76029189&4294967295,_=y+(g<<23&4294967295|g>>>9),g=m+(_^y^A)+T[9]+3654602809&4294967295,m=_+(g<<4&4294967295|g>>>28),g=A+(m^_^y)+T[12]+3873151461&4294967295,A=m+(g<<11&4294967295|g>>>21),g=y+(A^m^_)+T[15]+530742520&4294967295,y=A+(g<<16&4294967295|g>>>16),g=_+(y^A^m)+T[2]+3299628645&4294967295,_=y+(g<<23&4294967295|g>>>9),g=m+(y^(_|~A))+T[0]+4096336452&4294967295,m=_+(g<<6&4294967295|g>>>26),g=A+(_^(m|~y))+T[7]+1126891415&4294967295,A=m+(g<<10&4294967295|g>>>22),g=y+(m^(A|~_))+T[14]+2878612391&4294967295,y=A+(g<<15&4294967295|g>>>17),g=_+(A^(y|~m))+T[5]+4237533241&4294967295,_=y+(g<<21&4294967295|g>>>11),g=m+(y^(_|~A))+T[12]+1700485571&4294967295,m=_+(g<<6&4294967295|g>>>26),g=A+(_^(m|~y))+T[3]+2399980690&4294967295,A=m+(g<<10&4294967295|g>>>22),g=y+(m^(A|~_))+T[10]+4293915773&4294967295,y=A+(g<<15&4294967295|g>>>17),g=_+(A^(y|~m))+T[1]+2240044497&4294967295,_=y+(g<<21&4294967295|g>>>11),g=m+(y^(_|~A))+T[8]+1873313359&4294967295,m=_+(g<<6&4294967295|g>>>26),g=A+(_^(m|~y))+T[15]+4264355552&4294967295,A=m+(g<<10&4294967295|g>>>22),g=y+(m^(A|~_))+T[6]+2734768916&4294967295,y=A+(g<<15&4294967295|g>>>17),g=_+(A^(y|~m))+T[13]+1309151649&4294967295,_=y+(g<<21&4294967295|g>>>11),g=m+(y^(_|~A))+T[4]+4149444226&4294967295,m=_+(g<<6&4294967295|g>>>26),g=A+(_^(m|~y))+T[11]+3174756917&4294967295,A=m+(g<<10&4294967295|g>>>22),g=y+(m^(A|~_))+T[2]+718787259&4294967295,y=A+(g<<15&4294967295|g>>>17),g=_+(A^(y|~m))+T[9]+3951481745&4294967295,E.g[0]=E.g[0]+m&4294967295,E.g[1]=E.g[1]+(y+(g<<21&4294967295|g>>>11))&4294967295,E.g[2]=E.g[2]+y&4294967295,E.g[3]=E.g[3]+A&4294967295}r.prototype.v=function(E,m){m===void 0&&(m=E.length);const _=m-this.blockSize,T=this.C;let y=this.h,A=0;for(;A<m;){if(y==0)for(;A<=_;)s(this,E,A),A+=this.blockSize;if(typeof E=="string"){for(;A<m;)if(T[y++]=E.charCodeAt(A++),y==this.blockSize){s(this,T),y=0;break}}else for(;A<m;)if(T[y++]=E[A++],y==this.blockSize){s(this,T),y=0;break}}this.h=y,this.o+=m},r.prototype.A=function(){var E=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);E[0]=128;for(var m=1;m<E.length-8;++m)E[m]=0;m=this.o*8;for(var _=E.length-8;_<E.length;++_)E[_]=m&255,m/=256;for(this.v(E),E=Array(16),m=0,_=0;_<4;++_)for(let T=0;T<32;T+=8)E[m++]=this.g[_]>>>T&255;return E};function o(E,m){var _=l;return Object.prototype.hasOwnProperty.call(_,E)?_[E]:_[E]=m(E)}function a(E,m){this.h=m;const _=[];let T=!0;for(let y=E.length-1;y>=0;y--){const A=E[y]|0;T&&A==m||(_[y]=A,T=!1)}this.g=_}var l={};function h(E){return-128<=E&&E<128?o(E,function(m){return new a([m|0],m<0?-1:0)}):new a([E|0],E<0?-1:0)}function d(E){if(isNaN(E)||!isFinite(E))return I;if(E<0)return x(d(-E));const m=[];let _=1;for(let T=0;E>=_;T++)m[T]=E/_|0,_*=4294967296;return new a(m,0)}function p(E,m){if(E.length==0)throw Error("number format error: empty string");if(m=m||10,m<2||36<m)throw Error("radix out of range: "+m);if(E.charAt(0)=="-")return x(p(E.substring(1),m));if(E.indexOf("-")>=0)throw Error('number format error: interior "-" character');const _=d(Math.pow(m,8));let T=I;for(let A=0;A<E.length;A+=8){var y=Math.min(8,E.length-A);const g=parseInt(E.substring(A,A+y),m);y<8?(y=d(Math.pow(m,y)),T=T.j(y).add(d(g))):(T=T.j(_),T=T.add(d(g)))}return T}var I=h(0),w=h(1),V=h(16777216);n=a.prototype,n.m=function(){if(M(this))return-x(this).m();let E=0,m=1;for(let _=0;_<this.g.length;_++){const T=this.i(_);E+=(T>=0?T:4294967296+T)*m,m*=4294967296}return E},n.toString=function(E){if(E=E||10,E<2||36<E)throw Error("radix out of range: "+E);if(k(this))return"0";if(M(this))return"-"+x(this).toString(E);const m=d(Math.pow(E,6));var _=this;let T="";for(;;){const y=Tt(_,m).g;_=K(_,y.j(m));let A=((_.g.length>0?_.g[0]:_.h)>>>0).toString(E);if(_=y,k(_))return A+T;for(;A.length<6;)A="0"+A;T=A+T}},n.i=function(E){return E<0?0:E<this.g.length?this.g[E]:this.h};function k(E){if(E.h!=0)return!1;for(let m=0;m<E.g.length;m++)if(E.g[m]!=0)return!1;return!0}function M(E){return E.h==-1}n.l=function(E){return E=K(this,E),M(E)?-1:k(E)?0:1};function x(E){const m=E.g.length,_=[];for(let T=0;T<m;T++)_[T]=~E.g[T];return new a(_,~E.h).add(w)}n.abs=function(){return M(this)?x(this):this},n.add=function(E){const m=Math.max(this.g.length,E.g.length),_=[];let T=0;for(let y=0;y<=m;y++){let A=T+(this.i(y)&65535)+(E.i(y)&65535),g=(A>>>16)+(this.i(y)>>>16)+(E.i(y)>>>16);T=g>>>16,A&=65535,g&=65535,_[y]=g<<16|A}return new a(_,_[_.length-1]&-2147483648?-1:0)};function K(E,m){return E.add(x(m))}n.j=function(E){if(k(this)||k(E))return I;if(M(this))return M(E)?x(this).j(x(E)):x(x(this).j(E));if(M(E))return x(this.j(x(E)));if(this.l(V)<0&&E.l(V)<0)return d(this.m()*E.m());const m=this.g.length+E.g.length,_=[];for(var T=0;T<2*m;T++)_[T]=0;for(T=0;T<this.g.length;T++)for(let y=0;y<E.g.length;y++){const A=this.i(T)>>>16,g=this.i(T)&65535,It=E.i(y)>>>16,oe=E.i(y)&65535;_[2*T+2*y]+=g*oe,G(_,2*T+2*y),_[2*T+2*y+1]+=A*oe,G(_,2*T+2*y+1),_[2*T+2*y+1]+=g*It,G(_,2*T+2*y+1),_[2*T+2*y+2]+=A*It,G(_,2*T+2*y+2)}for(E=0;E<m;E++)_[E]=_[2*E+1]<<16|_[2*E];for(E=m;E<2*m;E++)_[E]=0;return new a(_,0)};function G(E,m){for(;(E[m]&65535)!=E[m];)E[m+1]+=E[m]>>>16,E[m]&=65535,m++}function Y(E,m){this.g=E,this.h=m}function Tt(E,m){if(k(m))throw Error("division by zero");if(k(E))return new Y(I,I);if(M(E))return m=Tt(x(E),m),new Y(x(m.g),x(m.h));if(M(m))return m=Tt(E,x(m)),new Y(x(m.g),m.h);if(E.g.length>30){if(M(E)||M(m))throw Error("slowDivide_ only works with positive integers.");for(var _=w,T=m;T.l(E)<=0;)_=At(_),T=At(T);var y=dt(_,1),A=dt(T,1);for(T=dt(T,2),_=dt(_,2);!k(T);){var g=A.add(T);g.l(E)<=0&&(y=y.add(_),A=g),T=dt(T,1),_=dt(_,1)}return m=K(E,y.j(m)),new Y(y,m)}for(y=I;E.l(m)>=0;){for(_=Math.max(1,Math.floor(E.m()/m.m())),T=Math.ceil(Math.log(_)/Math.LN2),T=T<=48?1:Math.pow(2,T-48),A=d(_),g=A.j(m);M(g)||g.l(E)>0;)_-=T,A=d(_),g=A.j(m);k(A)&&(A=w),y=y.add(A),E=K(E,g)}return new Y(y,E)}n.B=function(E){return Tt(this,E).h},n.and=function(E){const m=Math.max(this.g.length,E.g.length),_=[];for(let T=0;T<m;T++)_[T]=this.i(T)&E.i(T);return new a(_,this.h&E.h)},n.or=function(E){const m=Math.max(this.g.length,E.g.length),_=[];for(let T=0;T<m;T++)_[T]=this.i(T)|E.i(T);return new a(_,this.h|E.h)},n.xor=function(E){const m=Math.max(this.g.length,E.g.length),_=[];for(let T=0;T<m;T++)_[T]=this.i(T)^E.i(T);return new a(_,this.h^E.h)};function At(E){const m=E.g.length+1,_=[];for(let T=0;T<m;T++)_[T]=E.i(T)<<1|E.i(T-1)>>>31;return new a(_,E.h)}function dt(E,m){const _=m>>5;m%=32;const T=E.g.length-_,y=[];for(let A=0;A<T;A++)y[A]=m>0?E.i(A+_)>>>m|E.i(A+_+1)<<32-m:E.i(A+_);return new a(y,E.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,Na=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.B,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=d,a.fromString=p,Yt=a}).apply(typeof So!="undefined"?So:typeof self!="undefined"?self:typeof window!="undefined"?window:{});var Wn=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ka,cn,xa,tr,ps,Oa,Ma,La;(function(){var n,t=Object.defineProperty;function e(i){i=[typeof globalThis=="object"&&globalThis,i,typeof window=="object"&&window,typeof self=="object"&&self,typeof Wn=="object"&&Wn];for(var u=0;u<i.length;++u){var c=i[u];if(c&&c.Math==Math)return c}throw Error("Cannot find global object")}var r=e(this);function s(i,u){if(u)t:{var c=r;i=i.split(".");for(var f=0;f<i.length-1;f++){var v=i[f];if(!(v in c))break t;c=c[v]}i=i[i.length-1],f=c[i],u=u(f),u!=f&&u!=null&&t(c,i,{configurable:!0,writable:!0,value:u})}}s("Symbol.dispose",function(i){return i||Symbol("Symbol.dispose")}),s("Array.prototype.values",function(i){return i||function(){return this[Symbol.iterator]()}}),s("Object.entries",function(i){return i||function(u){var c=[],f;for(f in u)Object.prototype.hasOwnProperty.call(u,f)&&c.push([f,u[f]]);return c}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},a=this||self;function l(i){var u=typeof i;return u=="object"&&i!=null||u=="function"}function h(i,u,c){return i.call.apply(i.bind,arguments)}function d(i,u,c){return d=h,d.apply(null,arguments)}function p(i,u){var c=Array.prototype.slice.call(arguments,1);return function(){var f=c.slice();return f.push.apply(f,arguments),i.apply(this,f)}}function I(i,u){function c(){}c.prototype=u.prototype,i.Z=u.prototype,i.prototype=new c,i.prototype.constructor=i,i.Ob=function(f,v,R){for(var P=Array(arguments.length-2),B=2;B<arguments.length;B++)P[B-2]=arguments[B];return u.prototype[v].apply(f,P)}}var w=typeof AsyncContext!="undefined"&&typeof AsyncContext.Snapshot=="function"?i=>i&&AsyncContext.Snapshot.wrap(i):i=>i;function V(i){const u=i.length;if(u>0){const c=Array(u);for(let f=0;f<u;f++)c[f]=i[f];return c}return[]}function k(i,u){for(let f=1;f<arguments.length;f++){const v=arguments[f];var c=typeof v;if(c=c!="object"?c:v?Array.isArray(v)?"array":c:"null",c=="array"||c=="object"&&typeof v.length=="number"){c=i.length||0;const R=v.length||0;i.length=c+R;for(let P=0;P<R;P++)i[c+P]=v[P]}else i.push(v)}}class M{constructor(u,c){this.i=u,this.j=c,this.h=0,this.g=null}get(){let u;return this.h>0?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function x(i){a.setTimeout(()=>{throw i},0)}function K(){var i=E;let u=null;return i.g&&(u=i.g,i.g=i.g.next,i.g||(i.h=null),u.next=null),u}class G{constructor(){this.h=this.g=null}add(u,c){const f=Y.get();f.set(u,c),this.h?this.h.next=f:this.g=f,this.h=f}}var Y=new M(()=>new Tt,i=>i.reset());class Tt{constructor(){this.next=this.g=this.h=null}set(u,c){this.h=u,this.g=c,this.next=null}reset(){this.next=this.g=this.h=null}}let At,dt=!1,E=new G,m=()=>{const i=Promise.resolve(void 0);At=()=>{i.then(_)}};function _(){for(var i;i=K();){try{i.h.call(i.g)}catch(c){x(c)}var u=Y;u.j(i),u.h<100&&(u.h++,i.next=u.g,u.g=i)}dt=!1}function T(){this.u=this.u,this.C=this.C}T.prototype.u=!1,T.prototype.dispose=function(){this.u||(this.u=!0,this.N())},T.prototype[Symbol.dispose]=function(){this.dispose()},T.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function y(i,u){this.type=i,this.g=this.target=u,this.defaultPrevented=!1}y.prototype.h=function(){this.defaultPrevented=!0};var A=(function(){if(!a.addEventListener||!Object.defineProperty)return!1;var i=!1,u=Object.defineProperty({},"passive",{get:function(){i=!0}});try{const c=()=>{};a.addEventListener("test",c,u),a.removeEventListener("test",c,u)}catch(c){}return i})();function g(i){return/^[\s\xa0]*$/.test(i)}function It(i,u){y.call(this,i?i.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,i&&this.init(i,u)}I(It,y),It.prototype.init=function(i,u){const c=this.type=i.type,f=i.changedTouches&&i.changedTouches.length?i.changedTouches[0]:null;this.target=i.target||i.srcElement,this.g=u,u=i.relatedTarget,u||(c=="mouseover"?u=i.fromElement:c=="mouseout"&&(u=i.toElement)),this.relatedTarget=u,f?(this.clientX=f.clientX!==void 0?f.clientX:f.pageX,this.clientY=f.clientY!==void 0?f.clientY:f.pageY,this.screenX=f.screenX||0,this.screenY=f.screenY||0):(this.clientX=i.clientX!==void 0?i.clientX:i.pageX,this.clientY=i.clientY!==void 0?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0),this.button=i.button,this.key=i.key||"",this.ctrlKey=i.ctrlKey,this.altKey=i.altKey,this.shiftKey=i.shiftKey,this.metaKey=i.metaKey,this.pointerId=i.pointerId||0,this.pointerType=i.pointerType,this.state=i.state,this.i=i,i.defaultPrevented&&It.Z.h.call(this)},It.prototype.h=function(){It.Z.h.call(this);const i=this.i;i.preventDefault?i.preventDefault():i.returnValue=!1};var oe="closure_listenable_"+(Math.random()*1e6|0),uc=0;function cc(i,u,c,f,v){this.listener=i,this.proxy=null,this.src=u,this.type=c,this.capture=!!f,this.ha=v,this.key=++uc,this.da=this.fa=!1}function kn(i){i.da=!0,i.listener=null,i.proxy=null,i.src=null,i.ha=null}function xn(i,u,c){for(const f in i)u.call(c,i[f],f,i)}function lc(i,u){for(const c in i)u.call(void 0,i[c],c,i)}function mi(i){const u={};for(const c in i)u[c]=i[c];return u}const pi="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function gi(i,u){let c,f;for(let v=1;v<arguments.length;v++){f=arguments[v];for(c in f)i[c]=f[c];for(let R=0;R<pi.length;R++)c=pi[R],Object.prototype.hasOwnProperty.call(f,c)&&(i[c]=f[c])}}function On(i){this.src=i,this.g={},this.h=0}On.prototype.add=function(i,u,c,f,v){const R=i.toString();i=this.g[R],i||(i=this.g[R]=[],this.h++);const P=Mr(i,u,f,v);return P>-1?(u=i[P],c||(u.fa=!1)):(u=new cc(u,this.src,R,!!f,v),u.fa=c,i.push(u)),u};function Or(i,u){const c=u.type;if(c in i.g){var f=i.g[c],v=Array.prototype.indexOf.call(f,u,void 0),R;(R=v>=0)&&Array.prototype.splice.call(f,v,1),R&&(kn(u),i.g[c].length==0&&(delete i.g[c],i.h--))}}function Mr(i,u,c,f){for(let v=0;v<i.length;++v){const R=i[v];if(!R.da&&R.listener==u&&R.capture==!!c&&R.ha==f)return v}return-1}var Lr="closure_lm_"+(Math.random()*1e6|0),Fr={};function _i(i,u,c,f,v){if(Array.isArray(u)){for(let R=0;R<u.length;R++)_i(i,u[R],c,f,v);return null}return c=Ti(c),i&&i[oe]?i.J(u,c,l(f)?!!f.capture:!1,v):hc(i,u,c,!1,f,v)}function hc(i,u,c,f,v,R){if(!u)throw Error("Invalid event type");const P=l(v)?!!v.capture:!!v;let B=Br(i);if(B||(i[Lr]=B=new On(i)),c=B.add(u,c,f,P,R),c.proxy)return c;if(f=fc(),c.proxy=f,f.src=i,f.listener=c,i.addEventListener)A||(v=P),v===void 0&&(v=!1),i.addEventListener(u.toString(),f,v);else if(i.attachEvent)i.attachEvent(Ei(u.toString()),f);else if(i.addListener&&i.removeListener)i.addListener(f);else throw Error("addEventListener and attachEvent are unavailable.");return c}function fc(){function i(c){return u.call(i.src,i.listener,c)}const u=dc;return i}function yi(i,u,c,f,v){if(Array.isArray(u))for(var R=0;R<u.length;R++)yi(i,u[R],c,f,v);else f=l(f)?!!f.capture:!!f,c=Ti(c),i&&i[oe]?(i=i.i,R=String(u).toString(),R in i.g&&(u=i.g[R],c=Mr(u,c,f,v),c>-1&&(kn(u[c]),Array.prototype.splice.call(u,c,1),u.length==0&&(delete i.g[R],i.h--)))):i&&(i=Br(i))&&(u=i.g[u.toString()],i=-1,u&&(i=Mr(u,c,f,v)),(c=i>-1?u[i]:null)&&Ur(c))}function Ur(i){if(typeof i!="number"&&i&&!i.da){var u=i.src;if(u&&u[oe])Or(u.i,i);else{var c=i.type,f=i.proxy;u.removeEventListener?u.removeEventListener(c,f,i.capture):u.detachEvent?u.detachEvent(Ei(c),f):u.addListener&&u.removeListener&&u.removeListener(f),(c=Br(u))?(Or(c,i),c.h==0&&(c.src=null,u[Lr]=null)):kn(i)}}}function Ei(i){return i in Fr?Fr[i]:Fr[i]="on"+i}function dc(i,u){if(i.da)i=!0;else{u=new It(u,this);const c=i.listener,f=i.ha||i.src;i.fa&&Ur(i),i=c.call(f,u)}return i}function Br(i){return i=i[Lr],i instanceof On?i:null}var qr="__closure_events_fn_"+(Math.random()*1e9>>>0);function Ti(i){return typeof i=="function"?i:(i[qr]||(i[qr]=function(u){return i.handleEvent(u)}),i[qr])}function mt(){T.call(this),this.i=new On(this),this.M=this,this.G=null}I(mt,T),mt.prototype[oe]=!0,mt.prototype.removeEventListener=function(i,u,c,f){yi(this,i,u,c,f)};function yt(i,u){var c,f=i.G;if(f)for(c=[];f;f=f.G)c.push(f);if(i=i.M,f=u.type||u,typeof u=="string")u=new y(u,i);else if(u instanceof y)u.target=u.target||i;else{var v=u;u=new y(f,i),gi(u,v)}v=!0;let R,P;if(c)for(P=c.length-1;P>=0;P--)R=u.g=c[P],v=Mn(R,f,!0,u)&&v;if(R=u.g=i,v=Mn(R,f,!0,u)&&v,v=Mn(R,f,!1,u)&&v,c)for(P=0;P<c.length;P++)R=u.g=c[P],v=Mn(R,f,!1,u)&&v}mt.prototype.N=function(){if(mt.Z.N.call(this),this.i){var i=this.i;for(const u in i.g){const c=i.g[u];for(let f=0;f<c.length;f++)kn(c[f]);delete i.g[u],i.h--}}this.G=null},mt.prototype.J=function(i,u,c,f){return this.i.add(String(i),u,!1,c,f)},mt.prototype.K=function(i,u,c,f){return this.i.add(String(i),u,!0,c,f)};function Mn(i,u,c,f){if(u=i.i.g[String(u)],!u)return!0;u=u.concat();let v=!0;for(let R=0;R<u.length;++R){const P=u[R];if(P&&!P.da&&P.capture==c){const B=P.listener,it=P.ha||P.src;P.fa&&Or(i.i,P),v=B.call(it,f)!==!1&&v}}return v&&!f.defaultPrevented}function mc(i,u){if(typeof i!="function")if(i&&typeof i.handleEvent=="function")i=d(i.handleEvent,i);else throw Error("Invalid listener argument");return Number(u)>2147483647?-1:a.setTimeout(i,u||0)}function Ii(i){i.g=mc(()=>{i.g=null,i.i&&(i.i=!1,Ii(i))},i.l);const u=i.h;i.h=null,i.m.apply(null,u)}class pc extends T{constructor(u,c){super(),this.m=u,this.l=c,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:Ii(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ge(i){T.call(this),this.h=i,this.g={}}I(Ge,T);var vi=[];function Ai(i){xn(i.g,function(u,c){this.g.hasOwnProperty(c)&&Ur(u)},i),i.g={}}Ge.prototype.N=function(){Ge.Z.N.call(this),Ai(this)},Ge.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var jr=a.JSON.stringify,gc=a.JSON.parse,_c=class{stringify(i){return a.JSON.stringify(i,void 0)}parse(i){return a.JSON.parse(i,void 0)}};function wi(){}function Ri(){}var He={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function $r(){y.call(this,"d")}I($r,y);function zr(){y.call(this,"c")}I(zr,y);var ae={},Si=null;function Ln(){return Si=Si||new mt}ae.Ia="serverreachability";function Ci(i){y.call(this,ae.Ia,i)}I(Ci,y);function Ke(i){const u=Ln();yt(u,new Ci(u))}ae.STAT_EVENT="statevent";function Vi(i,u){y.call(this,ae.STAT_EVENT,i),this.stat=u}I(Vi,y);function Et(i){const u=Ln();yt(u,new Vi(u,i))}ae.Ja="timingevent";function Pi(i,u){y.call(this,ae.Ja,i),this.size=u}I(Pi,y);function We(i,u){if(typeof i!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){i()},u)}function Qe(){this.g=!0}Qe.prototype.ua=function(){this.g=!1};function yc(i,u,c,f,v,R){i.info(function(){if(i.g)if(R){var P="",B=R.split("&");for(let W=0;W<B.length;W++){var it=B[W].split("=");if(it.length>1){const ut=it[0];it=it[1];const Nt=ut.split("_");P=Nt.length>=2&&Nt[1]=="type"?P+(ut+"="+it+"&"):P+(ut+"=redacted&")}}}else P=null;else P=R;return"XMLHTTP REQ ("+f+") [attempt "+v+"]: "+u+`
`+c+`
`+P})}function Ec(i,u,c,f,v,R,P){i.info(function(){return"XMLHTTP RESP ("+f+") [ attempt "+v+"]: "+u+`
`+c+`
`+R+" "+P})}function Te(i,u,c,f){i.info(function(){return"XMLHTTP TEXT ("+u+"): "+Ic(i,c)+(f?" "+f:"")})}function Tc(i,u){i.info(function(){return"TIMEOUT: "+u})}Qe.prototype.info=function(){};function Ic(i,u){if(!i.g)return u;if(!u)return null;try{const R=JSON.parse(u);if(R){for(i=0;i<R.length;i++)if(Array.isArray(R[i])){var c=R[i];if(!(c.length<2)){var f=c[1];if(Array.isArray(f)&&!(f.length<1)){var v=f[0];if(v!="noop"&&v!="stop"&&v!="close")for(let P=1;P<f.length;P++)f[P]=""}}}}return jr(R)}catch(R){return u}}var Fn={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},bi={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},Di;function Gr(){}I(Gr,wi),Gr.prototype.g=function(){return new XMLHttpRequest},Di=new Gr;function Ye(i){return encodeURIComponent(String(i))}function vc(i){var u=1;i=i.split(":");const c=[];for(;u>0&&i.length;)c.push(i.shift()),u--;return i.length&&c.push(i.join(":")),c}function jt(i,u,c,f){this.j=i,this.i=u,this.l=c,this.S=f||1,this.V=new Ge(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new Ni}function Ni(){this.i=null,this.g="",this.h=!1}var ki={},Hr={};function Kr(i,u,c){i.M=1,i.A=Bn(Dt(u)),i.u=c,i.R=!0,xi(i,null)}function xi(i,u){i.F=Date.now(),Un(i),i.B=Dt(i.A);var c=i.B,f=i.S;Array.isArray(f)||(f=[String(f)]),Ki(c.i,"t",f),i.C=0,c=i.j.L,i.h=new Ni,i.g=ho(i.j,c?u:null,!i.u),i.P>0&&(i.O=new pc(d(i.Y,i,i.g),i.P)),u=i.V,c=i.g,f=i.ba;var v="readystatechange";Array.isArray(v)||(v&&(vi[0]=v.toString()),v=vi);for(let R=0;R<v.length;R++){const P=_i(c,v[R],f||u.handleEvent,!1,u.h||u);if(!P)break;u.g[P.key]=P}u=i.J?mi(i.J):{},i.u?(i.v||(i.v="POST"),u["Content-Type"]="application/x-www-form-urlencoded",i.g.ea(i.B,i.v,i.u,u)):(i.v="GET",i.g.ea(i.B,i.v,null,u)),Ke(),yc(i.i,i.v,i.B,i.l,i.S,i.u)}jt.prototype.ba=function(i){i=i.target;const u=this.O;u&&Gt(i)==3?u.j():this.Y(i)},jt.prototype.Y=function(i){try{if(i==this.g)t:{const B=Gt(this.g),it=this.g.ya(),W=this.g.ca();if(!(B<3)&&(B!=3||this.g&&(this.h.h||this.g.la()||to(this.g)))){this.K||B!=4||it==7||(it==8||W<=0?Ke(3):Ke(2)),Wr(this);var u=this.g.ca();this.X=u;var c=Ac(this);if(this.o=u==200,Ec(this.i,this.v,this.B,this.l,this.S,B,u),this.o){if(this.U&&!this.L){e:{if(this.g){var f,v=this.g;if((f=v.g?v.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!g(f)){var R=f;break e}}R=null}if(i=R)Te(this.i,this.l,i,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,Qr(this,i);else{this.o=!1,this.m=3,Et(12),ue(this),Je(this);break t}}if(this.R){i=!0;let ut;for(;!this.K&&this.C<c.length;)if(ut=wc(this,c),ut==Hr){B==4&&(this.m=4,Et(14),i=!1),Te(this.i,this.l,null,"[Incomplete Response]");break}else if(ut==ki){this.m=4,Et(15),Te(this.i,this.l,c,"[Invalid Chunk]"),i=!1;break}else Te(this.i,this.l,ut,null),Qr(this,ut);if(Oi(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),B!=4||c.length!=0||this.h.h||(this.m=1,Et(16),i=!1),this.o=this.o&&i,!i)Te(this.i,this.l,c,"[Invalid Chunked Response]"),ue(this),Je(this);else if(c.length>0&&!this.W){this.W=!0;var P=this.j;P.g==this&&P.aa&&!P.P&&(P.j.info("Great, no buffering proxy detected. Bytes received: "+c.length),rs(P),P.P=!0,Et(11))}}else Te(this.i,this.l,c,null),Qr(this,c);B==4&&ue(this),this.o&&!this.K&&(B==4?ao(this.j,this):(this.o=!1,Un(this)))}else Fc(this.g),u==400&&c.indexOf("Unknown SID")>0?(this.m=3,Et(12)):(this.m=0,Et(13)),ue(this),Je(this)}}}catch(B){}finally{}};function Ac(i){if(!Oi(i))return i.g.la();const u=to(i.g);if(u==="")return"";let c="";const f=u.length,v=Gt(i.g)==4;if(!i.h.i){if(typeof TextDecoder=="undefined")return ue(i),Je(i),"";i.h.i=new a.TextDecoder}for(let R=0;R<f;R++)i.h.h=!0,c+=i.h.i.decode(u[R],{stream:!(v&&R==f-1)});return u.length=0,i.h.g+=c,i.C=0,i.h.g}function Oi(i){return i.g?i.v=="GET"&&i.M!=2&&i.j.Aa:!1}function wc(i,u){var c=i.C,f=u.indexOf(`
`,c);return f==-1?Hr:(c=Number(u.substring(c,f)),isNaN(c)?ki:(f+=1,f+c>u.length?Hr:(u=u.slice(f,f+c),i.C=f+c,u)))}jt.prototype.cancel=function(){this.K=!0,ue(this)};function Un(i){i.T=Date.now()+i.H,Mi(i,i.H)}function Mi(i,u){if(i.D!=null)throw Error("WatchDog timer not null");i.D=We(d(i.aa,i),u)}function Wr(i){i.D&&(a.clearTimeout(i.D),i.D=null)}jt.prototype.aa=function(){this.D=null;const i=Date.now();i-this.T>=0?(Tc(this.i,this.B),this.M!=2&&(Ke(),Et(17)),ue(this),this.m=2,Je(this)):Mi(this,this.T-i)};function Je(i){i.j.I==0||i.K||ao(i.j,i)}function ue(i){Wr(i);var u=i.O;u&&typeof u.dispose=="function"&&u.dispose(),i.O=null,Ai(i.V),i.g&&(u=i.g,i.g=null,u.abort(),u.dispose())}function Qr(i,u){try{var c=i.j;if(c.I!=0&&(c.g==i||Yr(c.h,i))){if(!i.L&&Yr(c.h,i)&&c.I==3){try{var f=c.Ba.g.parse(u)}catch(W){f=null}if(Array.isArray(f)&&f.length==3){var v=f;if(v[0]==0){t:if(!c.v){if(c.g)if(c.g.F+3e3<i.F)Gn(c),$n(c);else break t;ns(c),Et(18)}}else c.xa=v[1],0<c.xa-c.K&&v[2]<37500&&c.F&&c.A==0&&!c.C&&(c.C=We(d(c.Va,c),6e3));Ui(c.h)<=1&&c.ta&&(c.ta=void 0)}else le(c,11)}else if((i.L||c.g==i)&&Gn(c),!g(u))for(v=c.Ba.g.parse(u),u=0;u<v.length;u++){let W=v[u];const ut=W[0];if(!(ut<=c.K))if(c.K=ut,W=W[1],c.I==2)if(W[0]=="c"){c.M=W[1],c.ba=W[2];const Nt=W[3];Nt!=null&&(c.ka=Nt,c.j.info("VER="+c.ka));const he=W[4];he!=null&&(c.za=he,c.j.info("SVER="+c.za));const Ht=W[5];Ht!=null&&typeof Ht=="number"&&Ht>0&&(f=1.5*Ht,c.O=f,c.j.info("backChannelRequestTimeoutMs_="+f)),f=c;const Kt=i.g;if(Kt){const Kn=Kt.g?Kt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Kn){var R=f.h;R.g||Kn.indexOf("spdy")==-1&&Kn.indexOf("quic")==-1&&Kn.indexOf("h2")==-1||(R.j=R.l,R.g=new Set,R.h&&(Jr(R,R.h),R.h=null))}if(f.G){const ss=Kt.g?Kt.g.getResponseHeader("X-HTTP-Session-Id"):null;ss&&(f.wa=ss,J(f.J,f.G,ss))}}c.I=3,c.l&&c.l.ra(),c.aa&&(c.T=Date.now()-i.F,c.j.info("Handshake RTT: "+c.T+"ms")),f=c;var P=i;if(f.na=lo(f,f.L?f.ba:null,f.W),P.L){Bi(f.h,P);var B=P,it=f.O;it&&(B.H=it),B.D&&(Wr(B),Un(B)),f.g=P}else io(f);c.i.length>0&&zn(c)}else W[0]!="stop"&&W[0]!="close"||le(c,7);else c.I==3&&(W[0]=="stop"||W[0]=="close"?W[0]=="stop"?le(c,7):es(c):W[0]!="noop"&&c.l&&c.l.qa(W),c.A=0)}}Ke(4)}catch(W){}}var Rc=class{constructor(i,u){this.g=i,this.map=u}};function Li(i){this.l=i||10,a.PerformanceNavigationTiming?(i=a.performance.getEntriesByType("navigation"),i=i.length>0&&(i[0].nextHopProtocol=="hq"||i[0].nextHopProtocol=="h2")):i=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=i?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function Fi(i){return i.h?!0:i.g?i.g.size>=i.j:!1}function Ui(i){return i.h?1:i.g?i.g.size:0}function Yr(i,u){return i.h?i.h==u:i.g?i.g.has(u):!1}function Jr(i,u){i.g?i.g.add(u):i.h=u}function Bi(i,u){i.h&&i.h==u?i.h=null:i.g&&i.g.has(u)&&i.g.delete(u)}Li.prototype.cancel=function(){if(this.i=qi(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const i of this.g.values())i.cancel();this.g.clear()}};function qi(i){if(i.h!=null)return i.i.concat(i.h.G);if(i.g!=null&&i.g.size!==0){let u=i.i;for(const c of i.g.values())u=u.concat(c.G);return u}return V(i.i)}var ji=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Sc(i,u){if(i){i=i.split("&");for(let c=0;c<i.length;c++){const f=i[c].indexOf("=");let v,R=null;f>=0?(v=i[c].substring(0,f),R=i[c].substring(f+1)):v=i[c],u(v,R?decodeURIComponent(R.replace(/\+/g," ")):"")}}}function $t(i){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let u;i instanceof $t?(this.l=i.l,Xe(this,i.j),this.o=i.o,this.g=i.g,Ze(this,i.u),this.h=i.h,Xr(this,Wi(i.i)),this.m=i.m):i&&(u=String(i).match(ji))?(this.l=!1,Xe(this,u[1]||"",!0),this.o=tn(u[2]||""),this.g=tn(u[3]||"",!0),Ze(this,u[4]),this.h=tn(u[5]||"",!0),Xr(this,u[6]||"",!0),this.m=tn(u[7]||"")):(this.l=!1,this.i=new nn(null,this.l))}$t.prototype.toString=function(){const i=[];var u=this.j;u&&i.push(en(u,$i,!0),":");var c=this.g;return(c||u=="file")&&(i.push("//"),(u=this.o)&&i.push(en(u,$i,!0),"@"),i.push(Ye(c).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c=this.u,c!=null&&i.push(":",String(c))),(c=this.h)&&(this.g&&c.charAt(0)!="/"&&i.push("/"),i.push(en(c,c.charAt(0)=="/"?Pc:Vc,!0))),(c=this.i.toString())&&i.push("?",c),(c=this.m)&&i.push("#",en(c,Dc)),i.join("")},$t.prototype.resolve=function(i){const u=Dt(this);let c=!!i.j;c?Xe(u,i.j):c=!!i.o,c?u.o=i.o:c=!!i.g,c?u.g=i.g:c=i.u!=null;var f=i.h;if(c)Ze(u,i.u);else if(c=!!i.h){if(f.charAt(0)!="/")if(this.g&&!this.h)f="/"+f;else{var v=u.h.lastIndexOf("/");v!=-1&&(f=u.h.slice(0,v+1)+f)}if(v=f,v==".."||v==".")f="";else if(v.indexOf("./")!=-1||v.indexOf("/.")!=-1){f=v.lastIndexOf("/",0)==0,v=v.split("/");const R=[];for(let P=0;P<v.length;){const B=v[P++];B=="."?f&&P==v.length&&R.push(""):B==".."?((R.length>1||R.length==1&&R[0]!="")&&R.pop(),f&&P==v.length&&R.push("")):(R.push(B),f=!0)}f=R.join("/")}else f=v}return c?u.h=f:c=i.i.toString()!=="",c?Xr(u,Wi(i.i)):c=!!i.m,c&&(u.m=i.m),u};function Dt(i){return new $t(i)}function Xe(i,u,c){i.j=c?tn(u,!0):u,i.j&&(i.j=i.j.replace(/:$/,""))}function Ze(i,u){if(u){if(u=Number(u),isNaN(u)||u<0)throw Error("Bad port number "+u);i.u=u}else i.u=null}function Xr(i,u,c){u instanceof nn?(i.i=u,Nc(i.i,i.l)):(c||(u=en(u,bc)),i.i=new nn(u,i.l))}function J(i,u,c){i.i.set(u,c)}function Bn(i){return J(i,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),i}function tn(i,u){return i?u?decodeURI(i.replace(/%25/g,"%2525")):decodeURIComponent(i):""}function en(i,u,c){return typeof i=="string"?(i=encodeURI(i).replace(u,Cc),c&&(i=i.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),i):null}function Cc(i){return i=i.charCodeAt(0),"%"+(i>>4&15).toString(16)+(i&15).toString(16)}var $i=/[#\/\?@]/g,Vc=/[#\?:]/g,Pc=/[#\?]/g,bc=/[#\?@]/g,Dc=/#/g;function nn(i,u){this.h=this.g=null,this.i=i||null,this.j=!!u}function ce(i){i.g||(i.g=new Map,i.h=0,i.i&&Sc(i.i,function(u,c){i.add(decodeURIComponent(u.replace(/\+/g," ")),c)}))}n=nn.prototype,n.add=function(i,u){ce(this),this.i=null,i=Ie(this,i);let c=this.g.get(i);return c||this.g.set(i,c=[]),c.push(u),this.h+=1,this};function zi(i,u){ce(i),u=Ie(i,u),i.g.has(u)&&(i.i=null,i.h-=i.g.get(u).length,i.g.delete(u))}function Gi(i,u){return ce(i),u=Ie(i,u),i.g.has(u)}n.forEach=function(i,u){ce(this),this.g.forEach(function(c,f){c.forEach(function(v){i.call(u,v,f,this)},this)},this)};function Hi(i,u){ce(i);let c=[];if(typeof u=="string")Gi(i,u)&&(c=c.concat(i.g.get(Ie(i,u))));else for(i=Array.from(i.g.values()),u=0;u<i.length;u++)c=c.concat(i[u]);return c}n.set=function(i,u){return ce(this),this.i=null,i=Ie(this,i),Gi(this,i)&&(this.h-=this.g.get(i).length),this.g.set(i,[u]),this.h+=1,this},n.get=function(i,u){return i?(i=Hi(this,i),i.length>0?String(i[0]):u):u};function Ki(i,u,c){zi(i,u),c.length>0&&(i.i=null,i.g.set(Ie(i,u),V(c)),i.h+=c.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const i=[],u=Array.from(this.g.keys());for(let f=0;f<u.length;f++){var c=u[f];const v=Ye(c);c=Hi(this,c);for(let R=0;R<c.length;R++){let P=v;c[R]!==""&&(P+="="+Ye(c[R])),i.push(P)}}return this.i=i.join("&")};function Wi(i){const u=new nn;return u.i=i.i,i.g&&(u.g=new Map(i.g),u.h=i.h),u}function Ie(i,u){return u=String(u),i.j&&(u=u.toLowerCase()),u}function Nc(i,u){u&&!i.j&&(ce(i),i.i=null,i.g.forEach(function(c,f){const v=f.toLowerCase();f!=v&&(zi(this,f),Ki(this,v,c))},i)),i.j=u}function kc(i,u){const c=new Qe;if(a.Image){const f=new Image;f.onload=p(zt,c,"TestLoadImage: loaded",!0,u,f),f.onerror=p(zt,c,"TestLoadImage: error",!1,u,f),f.onabort=p(zt,c,"TestLoadImage: abort",!1,u,f),f.ontimeout=p(zt,c,"TestLoadImage: timeout",!1,u,f),a.setTimeout(function(){f.ontimeout&&f.ontimeout()},1e4),f.src=i}else u(!1)}function xc(i,u){const c=new Qe,f=new AbortController,v=setTimeout(()=>{f.abort(),zt(c,"TestPingServer: timeout",!1,u)},1e4);fetch(i,{signal:f.signal}).then(R=>{clearTimeout(v),R.ok?zt(c,"TestPingServer: ok",!0,u):zt(c,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(v),zt(c,"TestPingServer: error",!1,u)})}function zt(i,u,c,f,v){try{v&&(v.onload=null,v.onerror=null,v.onabort=null,v.ontimeout=null),f(c)}catch(R){}}function Oc(){this.g=new _c}function Zr(i){this.i=i.Sb||null,this.h=i.ab||!1}I(Zr,wi),Zr.prototype.g=function(){return new qn(this.i,this.h)};function qn(i,u){mt.call(this),this.H=i,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}I(qn,mt),n=qn.prototype,n.open=function(i,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=i,this.D=u,this.readyState=1,sn(this)},n.send=function(i){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const u={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};i&&(u.body=i),(this.H||a).fetch(new Request(this.D,u)).then(this.Pa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,rn(this)),this.readyState=0},n.Pa=function(i){if(this.g&&(this.l=i,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=i.headers,this.readyState=2,sn(this)),this.g&&(this.readyState=3,sn(this),this.g)))if(this.responseType==="arraybuffer")i.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream!="undefined"&&"body"in i){if(this.j=i.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;Qi(this)}else i.text().then(this.Oa.bind(this),this.ga.bind(this))};function Qi(i){i.j.read().then(i.Ma.bind(i)).catch(i.ga.bind(i))}n.Ma=function(i){if(this.g){if(this.o&&i.value)this.response.push(i.value);else if(!this.o){var u=i.value?i.value:new Uint8Array(0);(u=this.B.decode(u,{stream:!i.done}))&&(this.response=this.responseText+=u)}i.done?rn(this):sn(this),this.readyState==3&&Qi(this)}},n.Oa=function(i){this.g&&(this.response=this.responseText=i,rn(this))},n.Na=function(i){this.g&&(this.response=i,rn(this))},n.ga=function(){this.g&&rn(this)};function rn(i){i.readyState=4,i.l=null,i.j=null,i.B=null,sn(i)}n.setRequestHeader=function(i,u){this.A.append(i,u)},n.getResponseHeader=function(i){return this.h&&this.h.get(i.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const i=[],u=this.h.entries();for(var c=u.next();!c.done;)c=c.value,i.push(c[0]+": "+c[1]),c=u.next();return i.join(`\r
`)};function sn(i){i.onreadystatechange&&i.onreadystatechange.call(i)}Object.defineProperty(qn.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(i){this.m=i?"include":"same-origin"}});function Yi(i){let u="";return xn(i,function(c,f){u+=f,u+=":",u+=c,u+=`\r
`}),u}function ts(i,u,c){t:{for(f in c){var f=!1;break t}f=!0}f||(c=Yi(c),typeof i=="string"?c!=null&&Ye(c):J(i,u,c))}function tt(i){mt.call(this),this.headers=new Map,this.L=i||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}I(tt,mt);var Mc=/^https?$/i,Lc=["POST","PUT"];n=tt.prototype,n.Fa=function(i){this.H=i},n.ea=function(i,u,c,f){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+i);u=u?u.toUpperCase():"GET",this.D=i,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():Di.g(),this.g.onreadystatechange=w(d(this.Ca,this));try{this.B=!0,this.g.open(u,String(i),!0),this.B=!1}catch(R){Ji(this,R);return}if(i=c||"",c=new Map(this.headers),f)if(Object.getPrototypeOf(f)===Object.prototype)for(var v in f)c.set(v,f[v]);else if(typeof f.keys=="function"&&typeof f.get=="function")for(const R of f.keys())c.set(R,f.get(R));else throw Error("Unknown input type for opt_headers: "+String(f));f=Array.from(c.keys()).find(R=>R.toLowerCase()=="content-type"),v=a.FormData&&i instanceof a.FormData,!(Array.prototype.indexOf.call(Lc,u,void 0)>=0)||f||v||c.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[R,P]of c)this.g.setRequestHeader(R,P);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(i),this.v=!1}catch(R){Ji(this,R)}};function Ji(i,u){i.h=!1,i.g&&(i.j=!0,i.g.abort(),i.j=!1),i.l=u,i.o=5,Xi(i),jn(i)}function Xi(i){i.A||(i.A=!0,yt(i,"complete"),yt(i,"error"))}n.abort=function(i){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=i||7,yt(this,"complete"),yt(this,"abort"),jn(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),jn(this,!0)),tt.Z.N.call(this)},n.Ca=function(){this.u||(this.B||this.v||this.j?Zi(this):this.Xa())},n.Xa=function(){Zi(this)};function Zi(i){if(i.h&&typeof o!="undefined"){if(i.v&&Gt(i)==4)setTimeout(i.Ca.bind(i),0);else if(yt(i,"readystatechange"),Gt(i)==4){i.h=!1;try{const R=i.ca();t:switch(R){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break t;default:u=!1}var c;if(!(c=u)){var f;if(f=R===0){let P=String(i.D).match(ji)[1]||null;!P&&a.self&&a.self.location&&(P=a.self.location.protocol.slice(0,-1)),f=!Mc.test(P?P.toLowerCase():"")}c=f}if(c)yt(i,"complete"),yt(i,"success");else{i.o=6;try{var v=Gt(i)>2?i.g.statusText:""}catch(P){v=""}i.l=v+" ["+i.ca()+"]",Xi(i)}}finally{jn(i)}}}}function jn(i,u){if(i.g){i.m&&(clearTimeout(i.m),i.m=null);const c=i.g;i.g=null,u||yt(i,"ready");try{c.onreadystatechange=null}catch(f){}}}n.isActive=function(){return!!this.g};function Gt(i){return i.g?i.g.readyState:0}n.ca=function(){try{return Gt(this)>2?this.g.status:-1}catch(i){return-1}},n.la=function(){try{return this.g?this.g.responseText:""}catch(i){return""}},n.La=function(i){if(this.g){var u=this.g.responseText;return i&&u.indexOf(i)==0&&(u=u.substring(i.length)),gc(u)}};function to(i){try{if(!i.g)return null;if("response"in i.g)return i.g.response;switch(i.F){case"":case"text":return i.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in i.g)return i.g.mozResponseArrayBuffer}return null}catch(u){return null}}function Fc(i){const u={};i=(i.g&&Gt(i)>=2&&i.g.getAllResponseHeaders()||"").split(`\r
`);for(let f=0;f<i.length;f++){if(g(i[f]))continue;var c=vc(i[f]);const v=c[0];if(c=c[1],typeof c!="string")continue;c=c.trim();const R=u[v]||[];u[v]=R,R.push(c)}lc(u,function(f){return f.join(", ")})}n.ya=function(){return this.o},n.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function on(i,u,c){return c&&c.internalChannelParams&&c.internalChannelParams[i]||u}function eo(i){this.za=0,this.i=[],this.j=new Qe,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=on("failFast",!1,i),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=on("baseRetryDelayMs",5e3,i),this.Za=on("retryDelaySeedMs",1e4,i),this.Ta=on("forwardChannelMaxRetries",2,i),this.va=on("forwardChannelRequestTimeoutMs",2e4,i),this.ma=i&&i.xmlHttpFactory||void 0,this.Ua=i&&i.Rb||void 0,this.Aa=i&&i.useFetchStreams||!1,this.O=void 0,this.L=i&&i.supportsCrossDomainXhr||!1,this.M="",this.h=new Li(i&&i.concurrentRequestLimit),this.Ba=new Oc,this.S=i&&i.fastHandshake||!1,this.R=i&&i.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=i&&i.Pb||!1,i&&i.ua&&this.j.ua(),i&&i.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&i&&i.detectBufferingProxy||!1,this.ia=void 0,i&&i.longPollingTimeout&&i.longPollingTimeout>0&&(this.ia=i.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}n=eo.prototype,n.ka=8,n.I=1,n.connect=function(i,u,c,f){Et(0),this.W=i,this.H=u||{},c&&f!==void 0&&(this.H.OSID=c,this.H.OAID=f),this.F=this.X,this.J=lo(this,null,this.W),zn(this)};function es(i){if(no(i),i.I==3){var u=i.V++,c=Dt(i.J);if(J(c,"SID",i.M),J(c,"RID",u),J(c,"TYPE","terminate"),an(i,c),u=new jt(i,i.j,u),u.M=2,u.A=Bn(Dt(c)),c=!1,a.navigator&&a.navigator.sendBeacon)try{c=a.navigator.sendBeacon(u.A.toString(),"")}catch(f){}!c&&a.Image&&(new Image().src=u.A,c=!0),c||(u.g=ho(u.j,null),u.g.ea(u.A)),u.F=Date.now(),Un(u)}co(i)}function $n(i){i.g&&(rs(i),i.g.cancel(),i.g=null)}function no(i){$n(i),i.v&&(a.clearTimeout(i.v),i.v=null),Gn(i),i.h.cancel(),i.m&&(typeof i.m=="number"&&a.clearTimeout(i.m),i.m=null)}function zn(i){if(!Fi(i.h)&&!i.m){i.m=!0;var u=i.Ea;At||m(),dt||(At(),dt=!0),E.add(u,i),i.D=0}}function Uc(i,u){return Ui(i.h)>=i.h.j-(i.m?1:0)?!1:i.m?(i.i=u.G.concat(i.i),!0):i.I==1||i.I==2||i.D>=(i.Sa?0:i.Ta)?!1:(i.m=We(d(i.Ea,i,u),uo(i,i.D)),i.D++,!0)}n.Ea=function(i){if(this.m)if(this.m=null,this.I==1){if(!i){this.V=Math.floor(Math.random()*1e5),i=this.V++;const v=new jt(this,this.j,i);let R=this.o;if(this.U&&(R?(R=mi(R),gi(R,this.U)):R=this.U),this.u!==null||this.R||(v.J=R,R=null),this.S)t:{for(var u=0,c=0;c<this.i.length;c++){e:{var f=this.i[c];if("__data__"in f.map&&(f=f.map.__data__,typeof f=="string")){f=f.length;break e}f=void 0}if(f===void 0)break;if(u+=f,u>4096){u=c;break t}if(u===4096||c===this.i.length-1){u=c+1;break t}}u=1e3}else u=1e3;u=so(this,v,u),c=Dt(this.J),J(c,"RID",i),J(c,"CVER",22),this.G&&J(c,"X-HTTP-Session-Id",this.G),an(this,c),R&&(this.R?u="headers="+Ye(Yi(R))+"&"+u:this.u&&ts(c,this.u,R)),Jr(this.h,v),this.Ra&&J(c,"TYPE","init"),this.S?(J(c,"$req",u),J(c,"SID","null"),v.U=!0,Kr(v,c,null)):Kr(v,c,u),this.I=2}}else this.I==3&&(i?ro(this,i):this.i.length==0||Fi(this.h)||ro(this))};function ro(i,u){var c;u?c=u.l:c=i.V++;const f=Dt(i.J);J(f,"SID",i.M),J(f,"RID",c),J(f,"AID",i.K),an(i,f),i.u&&i.o&&ts(f,i.u,i.o),c=new jt(i,i.j,c,i.D+1),i.u===null&&(c.J=i.o),u&&(i.i=u.G.concat(i.i)),u=so(i,c,1e3),c.H=Math.round(i.va*.5)+Math.round(i.va*.5*Math.random()),Jr(i.h,c),Kr(c,f,u)}function an(i,u){i.H&&xn(i.H,function(c,f){J(u,f,c)}),i.l&&xn({},function(c,f){J(u,f,c)})}function so(i,u,c){c=Math.min(i.i.length,c);const f=i.l?d(i.l.Ka,i.l,i):null;t:{var v=i.i;let B=-1;for(;;){const it=["count="+c];B==-1?c>0?(B=v[0].g,it.push("ofs="+B)):B=0:it.push("ofs="+B);let W=!0;for(let ut=0;ut<c;ut++){var R=v[ut].g;const Nt=v[ut].map;if(R-=B,R<0)B=Math.max(0,v[ut].g-100),W=!1;else try{R="req"+R+"_"||"";try{var P=Nt instanceof Map?Nt:Object.entries(Nt);for(const[he,Ht]of P){let Kt=Ht;l(Ht)&&(Kt=jr(Ht)),it.push(R+he+"="+encodeURIComponent(Kt))}}catch(he){throw it.push(R+"type="+encodeURIComponent("_badmap")),he}}catch(he){f&&f(Nt)}}if(W){P=it.join("&");break t}}P=void 0}return i=i.i.splice(0,c),u.G=i,P}function io(i){if(!i.g&&!i.v){i.Y=1;var u=i.Da;At||m(),dt||(At(),dt=!0),E.add(u,i),i.A=0}}function ns(i){return i.g||i.v||i.A>=3?!1:(i.Y++,i.v=We(d(i.Da,i),uo(i,i.A)),i.A++,!0)}n.Da=function(){if(this.v=null,oo(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var i=4*this.T;this.j.info("BP detection timer enabled: "+i),this.B=We(d(this.Wa,this),i)}},n.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,Et(10),$n(this),oo(this))};function rs(i){i.B!=null&&(a.clearTimeout(i.B),i.B=null)}function oo(i){i.g=new jt(i,i.j,"rpc",i.Y),i.u===null&&(i.g.J=i.o),i.g.P=0;var u=Dt(i.na);J(u,"RID","rpc"),J(u,"SID",i.M),J(u,"AID",i.K),J(u,"CI",i.F?"0":"1"),!i.F&&i.ia&&J(u,"TO",i.ia),J(u,"TYPE","xmlhttp"),an(i,u),i.u&&i.o&&ts(u,i.u,i.o),i.O&&(i.g.H=i.O);var c=i.g;i=i.ba,c.M=1,c.A=Bn(Dt(u)),c.u=null,c.R=!0,xi(c,i)}n.Va=function(){this.C!=null&&(this.C=null,$n(this),ns(this),Et(19))};function Gn(i){i.C!=null&&(a.clearTimeout(i.C),i.C=null)}function ao(i,u){var c=null;if(i.g==u){Gn(i),rs(i),i.g=null;var f=2}else if(Yr(i.h,u))c=u.G,Bi(i.h,u),f=1;else return;if(i.I!=0){if(u.o)if(f==1){c=u.u?u.u.length:0,u=Date.now()-u.F;var v=i.D;f=Ln(),yt(f,new Pi(f,c)),zn(i)}else io(i);else if(v=u.m,v==3||v==0&&u.X>0||!(f==1&&Uc(i,u)||f==2&&ns(i)))switch(c&&c.length>0&&(u=i.h,u.i=u.i.concat(c)),v){case 1:le(i,5);break;case 4:le(i,10);break;case 3:le(i,6);break;default:le(i,2)}}}function uo(i,u){let c=i.Qa+Math.floor(Math.random()*i.Za);return i.isActive()||(c*=2),c*u}function le(i,u){if(i.j.info("Error code "+u),u==2){var c=d(i.bb,i),f=i.Ua;const v=!f;f=new $t(f||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||Xe(f,"https"),Bn(f),v?kc(f.toString(),c):xc(f.toString(),c)}else Et(2);i.I=0,i.l&&i.l.pa(u),co(i),no(i)}n.bb=function(i){i?(this.j.info("Successfully pinged google.com"),Et(2)):(this.j.info("Failed to ping google.com"),Et(1))};function co(i){if(i.I=0,i.ja=[],i.l){const u=qi(i.h);(u.length!=0||i.i.length!=0)&&(k(i.ja,u),k(i.ja,i.i),i.h.i.length=0,V(i.i),i.i.length=0),i.l.oa()}}function lo(i,u,c){var f=c instanceof $t?Dt(c):new $t(c);if(f.g!="")u&&(f.g=u+"."+f.g),Ze(f,f.u);else{var v=a.location;f=v.protocol,u=u?u+"."+v.hostname:v.hostname,v=+v.port;const R=new $t(null);f&&Xe(R,f),u&&(R.g=u),v&&Ze(R,v),c&&(R.h=c),f=R}return c=i.G,u=i.wa,c&&u&&J(f,c,u),J(f,"VER",i.ka),an(i,f),f}function ho(i,u,c){if(u&&!i.L)throw Error("Can't create secondary domain capable XhrIo object.");return u=i.Aa&&!i.ma?new tt(new Zr({ab:c})):new tt(i.ma),u.Fa(i.L),u}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function fo(){}n=fo.prototype,n.ra=function(){},n.qa=function(){},n.pa=function(){},n.oa=function(){},n.isActive=function(){return!0},n.Ka=function(){};function Hn(){}Hn.prototype.g=function(i,u){return new wt(i,u)};function wt(i,u){mt.call(this),this.g=new eo(u),this.l=i,this.h=u&&u.messageUrlParams||null,i=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(i?i["X-Client-Protocol"]="webchannel":i={"X-Client-Protocol":"webchannel"}),this.g.o=i,i=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(i?i["X-WebChannel-Content-Type"]=u.messageContentType:i={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.sa&&(i?i["X-WebChannel-Client-Profile"]=u.sa:i={"X-WebChannel-Client-Profile":u.sa}),this.g.U=i,(i=u&&u.Qb)&&!g(i)&&(this.g.u=i),this.A=u&&u.supportsCrossDomainXhr||!1,this.v=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!g(u)&&(this.g.G=u,i=this.h,i!==null&&u in i&&(i=this.h,u in i&&delete i[u])),this.j=new ve(this)}I(wt,mt),wt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},wt.prototype.close=function(){es(this.g)},wt.prototype.o=function(i){var u=this.g;if(typeof i=="string"){var c={};c.__data__=i,i=c}else this.v&&(c={},c.__data__=jr(i),i=c);u.i.push(new Rc(u.Ya++,i)),u.I==3&&zn(u)},wt.prototype.N=function(){this.g.l=null,delete this.j,es(this.g),delete this.g,wt.Z.N.call(this)};function mo(i){$r.call(this),i.__headers__&&(this.headers=i.__headers__,this.statusCode=i.__status__,delete i.__headers__,delete i.__status__);var u=i.__sm__;if(u){t:{for(const c in u){i=c;break t}i=void 0}(this.i=i)&&(i=this.i,u=u!==null&&i in u?u[i]:void 0),this.data=u}else this.data=i}I(mo,$r);function po(){zr.call(this),this.status=1}I(po,zr);function ve(i){this.g=i}I(ve,fo),ve.prototype.ra=function(){yt(this.g,"a")},ve.prototype.qa=function(i){yt(this.g,new mo(i))},ve.prototype.pa=function(i){yt(this.g,new po)},ve.prototype.oa=function(){yt(this.g,"b")},Hn.prototype.createWebChannel=Hn.prototype.g,wt.prototype.send=wt.prototype.o,wt.prototype.open=wt.prototype.m,wt.prototype.close=wt.prototype.close,La=function(){return new Hn},Ma=function(){return Ln()},Oa=ae,ps={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},Fn.NO_ERROR=0,Fn.TIMEOUT=8,Fn.HTTP_ERROR=6,tr=Fn,bi.COMPLETE="complete",xa=bi,Ri.EventType=He,He.OPEN="a",He.CLOSE="b",He.ERROR="c",He.MESSAGE="d",mt.prototype.listen=mt.prototype.J,cn=Ri,tt.prototype.listenOnce=tt.prototype.K,tt.prototype.getLastError=tt.prototype.Ha,tt.prototype.getLastErrorCode=tt.prototype.ya,tt.prototype.getStatus=tt.prototype.ca,tt.prototype.getResponseJson=tt.prototype.La,tt.prototype.getResponseText=tt.prototype.la,tt.prototype.send=tt.prototype.ea,tt.prototype.setWithCredentials=tt.prototype.Fa,ka=tt}).apply(typeof Wn!="undefined"?Wn:typeof self!="undefined"?self:typeof window!="undefined"?window:{});/**
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
 */let Be="12.8.0";function Ih(n){Be=n}/**
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
 */const me=new Pa("@firebase/firestore");function Ae(){return me.logLevel}function N(n,...t){if(me.logLevel<=z.DEBUG){const e=t.map(ks);me.debug(`Firestore (${Be}): ${n}`,...e)}}function Bt(n,...t){if(me.logLevel<=z.ERROR){const e=t.map(ks);me.error(`Firestore (${Be}): ${n}`,...e)}}function ke(n,...t){if(me.logLevel<=z.WARN){const e=t.map(ks);me.warn(`Firestore (${Be}): ${n}`,...e)}}function ks(n){if(typeof n=="string")return n;try{return(function(e){return JSON.stringify(e)})(n)}catch(t){return n}}/**
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
 */function L(n,t,e){let r="Unexpected state";typeof t=="string"?r=t:e=t,Fa(n,r,e)}function Fa(n,t,e){let r=`FIRESTORE (${Be}) INTERNAL ASSERTION FAILED: ${t} (ID: ${n.toString(16)})`;if(e!==void 0)try{r+=" CONTEXT: "+JSON.stringify(e)}catch(s){r+=" CONTEXT: "+e}throw Bt(r),new Error(r)}function H(n,t,e,r){let s="Unexpected state";typeof e=="string"?s=e:r=e,n||Fa(t,s,r)}function U(n,t){return n}/**
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
 */const S={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class D extends Ue{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Jt{constructor(){this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}}/**
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
 */class Ua{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class vh{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable((()=>e(gt.UNAUTHENTICATED)))}shutdown(){}}class Ah{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable((()=>e(this.token.user)))}shutdown(){this.changeListener=null}}class wh{constructor(t){this.t=t,this.currentUser=gt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){H(this.o===void 0,42304);let r=this.i;const s=h=>this.i!==r?(r=this.i,e(h)):Promise.resolve();let o=new Jt;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new Jt,t.enqueueRetryable((()=>s(this.currentUser)))};const a=()=>{const h=o;t.enqueueRetryable((()=>b(this,null,function*(){yield h.promise,yield s(this.currentUser)})))},l=h=>{N("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=h,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit((h=>l(h))),setTimeout((()=>{if(!this.auth){const h=this.t.getImmediate({optional:!0});h?l(h):(N("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new Jt)}}),0),a()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then((r=>this.i!==t?(N("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(H(typeof r.accessToken=="string",31837,{l:r}),new Ua(r.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return H(t===null||typeof t=="string",2055,{h:t}),new gt(t)}}class Rh{constructor(t,e,r){this.P=t,this.T=e,this.I=r,this.type="FirstParty",this.user=gt.FIRST_PARTY,this.R=new Map}A(){return this.I?this.I():null}get headers(){this.R.set("X-Goog-AuthUser",this.P);const t=this.A();return t&&this.R.set("Authorization",t),this.T&&this.R.set("X-Goog-Iam-Authorization-Token",this.T),this.R}}class Sh{constructor(t,e,r){this.P=t,this.T=e,this.I=r}getToken(){return Promise.resolve(new Rh(this.P,this.T,this.I))}start(t,e){t.enqueueRetryable((()=>e(gt.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Co{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Ch{constructor(t,e){this.V=e,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,rh(t)&&t.settings.appCheckToken&&(this.p=t.settings.appCheckToken)}start(t,e){H(this.o===void 0,3512);const r=o=>{o.error!=null&&N("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const a=o.token!==this.m;return this.m=o.token,N("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?e(o.token):Promise.resolve()};this.o=o=>{t.enqueueRetryable((()=>r(o)))};const s=o=>{N("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((o=>s(o))),setTimeout((()=>{if(!this.appCheck){const o=this.V.getImmediate({optional:!0});o?s(o):N("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new Co(this.p));const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then((e=>e?(H(typeof e.token=="string",44558,{tokenResult:e}),this.m=e.token,new Co(e.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function Vh(n){const t=typeof self!="undefined"&&(self.crypto||self.msCrypto),e=new Uint8Array(n);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(e);else for(let r=0;r<n;r++)e[r]=Math.floor(256*Math.random());return e}/**
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
 */class xs{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=Vh(40);for(let o=0;o<s.length;++o)r.length<20&&s[o]<e&&(r+=t.charAt(s[o]%62))}return r}}function q(n,t){return n<t?-1:n>t?1:0}function gs(n,t){const e=Math.min(n.length,t.length);for(let r=0;r<e;r++){const s=n.charAt(r),o=t.charAt(r);if(s!==o)return as(s)===as(o)?q(s,o):as(s)?1:-1}return q(n.length,t.length)}const Ph=55296,bh=57343;function as(n){const t=n.charCodeAt(0);return t>=Ph&&t<=bh}function xe(n,t,e){return n.length===t.length&&n.every(((r,s)=>e(r,t[s])))}/**
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
 */const Vo="__name__";class kt{constructor(t,e,r){e===void 0?e=0:e>t.length&&L(637,{offset:e,range:t.length}),r===void 0?r=t.length-e:r>t.length-e&&L(1746,{length:r,range:t.length-e}),this.segments=t,this.offset=e,this.len=r}get length(){return this.len}isEqual(t){return kt.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof kt?t.forEach((r=>{e.push(r)})):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,r=this.limit();e<r;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const r=Math.min(t.length,e.length);for(let s=0;s<r;s++){const o=kt.compareSegments(t.get(s),e.get(s));if(o!==0)return o}return q(t.length,e.length)}static compareSegments(t,e){const r=kt.isNumericId(t),s=kt.isNumericId(e);return r&&!s?-1:!r&&s?1:r&&s?kt.extractNumericId(t).compare(kt.extractNumericId(e)):gs(t,e)}static isNumericId(t){return t.startsWith("__id")&&t.endsWith("__")}static extractNumericId(t){return Yt.fromString(t.substring(4,t.length-2))}}class Q extends kt{construct(t,e,r){return new Q(t,e,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const r of t){if(r.indexOf("//")>=0)throw new D(S.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);e.push(...r.split("/").filter((s=>s.length>0)))}return new Q(e)}static emptyPath(){return new Q([])}}const Dh=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ht extends kt{construct(t,e,r){return new ht(t,e,r)}static isValidIdentifier(t){return Dh.test(t)}canonicalString(){return this.toArray().map((t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ht.isValidIdentifier(t)||(t="`"+t+"`"),t))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Vo}static keyField(){return new ht([Vo])}static fromServerFormat(t){const e=[];let r="",s=0;const o=()=>{if(r.length===0)throw new D(S.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(r),r=""};let a=!1;for(;s<t.length;){const l=t[s];if(l==="\\"){if(s+1===t.length)throw new D(S.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const h=t[s+1];if(h!=="\\"&&h!=="."&&h!=="`")throw new D(S.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);r+=h,s+=2}else l==="`"?(a=!a,s++):l!=="."||a?(r+=l,s++):(o(),s++)}if(o(),a)throw new D(S.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new ht(e)}static emptyPath(){return new ht([])}}/**
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
 */class O{constructor(t){this.path=t}static fromPath(t){return new O(Q.fromString(t))}static fromName(t){return new O(Q.fromString(t).popFirst(5))}static empty(){return new O(Q.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&Q.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return Q.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new O(new Q(t.slice()))}}/**
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
 */function Ba(n,t,e){if(!e)throw new D(S.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${t}.`)}function Nh(n,t,e,r){if(t===!0&&r===!0)throw new D(S.INVALID_ARGUMENT,`${n} and ${e} cannot be used together.`)}function Po(n){if(!O.isDocumentKey(n))throw new D(S.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function bo(n){if(O.isDocumentKey(n))throw new D(S.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function qa(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function Ir(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const t=(function(r){return r.constructor?r.constructor.name:null})(n);return t?`a custom ${t} object`:"an object"}}return typeof n=="function"?"a function":L(12329,{type:typeof n})}function En(n,t){if("_delegate"in n&&(n=n._delegate),!(n instanceof t)){if(t.name===n.constructor.name)throw new D(S.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=Ir(n);throw new D(S.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return n}function kh(n,t){if(t<=0)throw new D(S.INVALID_ARGUMENT,`Function ${n}() requires a positive number, but it was: ${t}.`)}/**
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
 */function st(n,t){const e={typeString:n};return t&&(e.value=t),e}function Vn(n,t){if(!qa(n))throw new D(S.INVALID_ARGUMENT,"JSON must be an object");let e;for(const r in t)if(t[r]){const s=t[r].typeString,o="value"in t[r]?{value:t[r].value}:void 0;if(!(r in n)){e=`JSON missing required field: '${r}'`;break}const a=n[r];if(s&&typeof a!==s){e=`JSON field '${r}' must be a ${s}.`;break}if(o!==void 0&&a!==o.value){e=`Expected '${r}' field to equal '${o.value}'`;break}}if(e)throw new D(S.INVALID_ARGUMENT,e);return!0}/**
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
 */const Do=-62135596800,No=1e6;class X{static now(){return X.fromMillis(Date.now())}static fromDate(t){return X.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),r=Math.floor((t-1e3*e)*No);return new X(e,r)}constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new D(S.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new D(S.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<Do)throw new D(S.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new D(S.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/No}_compareTo(t){return this.seconds===t.seconds?q(this.nanoseconds,t.nanoseconds):q(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:X._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(t){if(Vn(t,X._jsonSchema))return new X(t.seconds,t.nanoseconds)}valueOf(){const t=this.seconds-Do;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}X._jsonSchemaVersion="firestore/timestamp/1.0",X._jsonSchema={type:st("string",X._jsonSchemaVersion),seconds:st("number"),nanoseconds:st("number")};/**
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
 */const Tn=-1;function xh(n,t){const e=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=F.fromTimestamp(r===1e9?new X(e+1,0):new X(e,r));return new Zt(s,O.empty(),t)}function Oh(n){return new Zt(n.readTime,n.key,Tn)}class Zt{constructor(t,e,r){this.readTime=t,this.documentKey=e,this.largestBatchId=r}static min(){return new Zt(F.min(),O.empty(),Tn)}static max(){return new Zt(F.max(),O.empty(),Tn)}}function Mh(n,t){let e=n.readTime.compareTo(t.readTime);return e!==0?e:(e=O.comparator(n.documentKey,t.documentKey),e!==0?e:q(n.largestBatchId,t.largestBatchId))}/**
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
 */const Lh="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Fh{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((t=>t()))}}/**
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
 */function qe(n){return b(this,null,function*(){if(n.code!==S.FAILED_PRECONDITION||n.message!==Lh)throw n;N("LocalStore","Unexpectedly lost primary lease")})}/**
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
 */class C{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t((e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)}),(e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)}))}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&L(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new C(((r,s)=>{this.nextCallback=o=>{this.wrapSuccess(t,o).next(r,s)},this.catchCallback=o=>{this.wrapFailure(e,o).next(r,s)}}))}toPromise(){return new Promise(((t,e)=>{this.next(t,e)}))}wrapUserFunction(t){try{const e=t();return e instanceof C?e:C.resolve(e)}catch(e){return C.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction((()=>t(e))):C.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction((()=>t(e))):C.reject(e)}static resolve(t){return new C(((e,r)=>{e(t)}))}static reject(t){return new C(((e,r)=>{r(t)}))}static waitFor(t){return new C(((e,r)=>{let s=0,o=0,a=!1;t.forEach((l=>{++s,l.next((()=>{++o,a&&o===s&&e()}),(h=>r(h)))})),a=!0,o===s&&e()}))}static or(t){let e=C.resolve(!1);for(const r of t)e=e.next((s=>s?C.resolve(s):r()));return e}static forEach(t,e){const r=[];return t.forEach(((s,o)=>{r.push(e.call(this,s,o))})),this.waitFor(r)}static mapArray(t,e){return new C(((r,s)=>{const o=t.length,a=new Array(o);let l=0;for(let h=0;h<o;h++){const d=h;e(t[d]).next((p=>{a[d]=p,++l,l===o&&r(a)}),(p=>s(p)))}}))}static doWhile(t,e){return new C(((r,s)=>{const o=()=>{t()===!0?e().next((()=>{o()}),s):r()};o()}))}}function Uh(n){const t=n.match(/Android ([\d.]+)/i),e=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(e)}function je(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class vr{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>e.writeSequenceNumber(r))}ae(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.ue&&this.ue(t),t}}vr.ce=-1;/**
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
 */const Os=-1;function Ar(n){return n==null}function lr(n){return n===0&&1/n==-1/0}function Bh(n){return typeof n=="number"&&Number.isInteger(n)&&!lr(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
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
 */const ja="";function qh(n){let t="";for(let e=0;e<n.length;e++)t.length>0&&(t=ko(t)),t=jh(n.get(e),t);return ko(t)}function jh(n,t){let e=t;const r=n.length;for(let s=0;s<r;s++){const o=n.charAt(s);switch(o){case"\0":e+="";break;case ja:e+="";break;default:e+=o}}return e}function ko(n){return n+ja+""}/**
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
 */function xo(n){let t=0;for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t++;return t}function ge(n,t){for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t(e,n[e])}function $a(n){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t))return!1;return!0}/**
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
 */class Z{constructor(t,e){this.comparator=t,this.root=e||lt.EMPTY}insert(t,e){return new Z(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,lt.BLACK,null,null))}remove(t){return new Z(this.comparator,this.root.remove(t,this.comparator).copy(null,null,lt.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const r=this.comparator(t,e.key);if(r===0)return e.value;r<0?e=e.left:r>0&&(e=e.right)}return null}indexOf(t){let e=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(t,r.key);if(s===0)return e+r.left.size;s<0?r=r.left:(e+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal(((e,r)=>(t(e,r),!1)))}toString(){const t=[];return this.inorderTraversal(((e,r)=>(t.push(`${e}:${r}`),!1))),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Qn(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Qn(this.root,t,this.comparator,!1)}getReverseIterator(){return new Qn(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Qn(this.root,t,this.comparator,!0)}}class Qn{constructor(t,e,r,s){this.isReverse=s,this.nodeStack=[];let o=1;for(;!t.isEmpty();)if(o=e?r(t.key,e):1,e&&s&&(o*=-1),o<0)t=this.isReverse?t.left:t.right;else{if(o===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class lt{constructor(t,e,r,s,o){this.key=t,this.value=e,this.color=r!=null?r:lt.RED,this.left=s!=null?s:lt.EMPTY,this.right=o!=null?o:lt.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,r,s,o){return new lt(t!=null?t:this.key,e!=null?e:this.value,r!=null?r:this.color,s!=null?s:this.left,o!=null?o:this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,r){let s=this;const o=r(t,s.key);return s=o<0?s.copy(null,null,null,s.left.insert(t,e,r),null):o===0?s.copy(null,e,null,null,null):s.copy(null,null,null,null,s.right.insert(t,e,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return lt.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let r,s=this;if(e(t,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(t,e),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),e(t,s.key)===0){if(s.right.isEmpty())return lt.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(t,e))}return s.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,lt.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,lt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw L(43730,{key:this.key,value:this.value});if(this.right.isRed())throw L(14113,{key:this.key,value:this.value});const t=this.left.check();if(t!==this.right.check())throw L(27949);return t+(this.isRed()?0:1)}}lt.EMPTY=null,lt.RED=!0,lt.BLACK=!1;lt.EMPTY=new class{constructor(){this.size=0}get key(){throw L(57766)}get value(){throw L(16141)}get color(){throw L(16727)}get left(){throw L(29726)}get right(){throw L(36894)}copy(t,e,r,s,o){return this}insert(t,e,r){return new lt(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class at{constructor(t){this.comparator=t,this.data=new Z(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal(((e,r)=>(t(e),!1)))}forEachInRange(t,e){const r=this.data.getIteratorFrom(t[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,t[1])>=0)return;e(s.key)}}forEachWhile(t,e){let r;for(r=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();r.hasNext();)if(!t(r.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new Oo(this.data.getIterator())}getIteratorFrom(t){return new Oo(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach((r=>{e=e.add(r)})),e}isEqual(t){if(!(t instanceof at)||this.size!==t.size)return!1;const e=this.data.getIterator(),r=t.data.getIterator();for(;e.hasNext();){const s=e.getNext().key,o=r.getNext().key;if(this.comparator(s,o)!==0)return!1}return!0}toArray(){const t=[];return this.forEach((e=>{t.push(e)})),t}toString(){const t=[];return this.forEach((e=>t.push(e))),"SortedSet("+t.toString()+")"}copy(t){const e=new at(this.comparator);return e.data=t,e}}class Oo{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Vt{constructor(t){this.fields=t,t.sort(ht.comparator)}static empty(){return new Vt([])}unionWith(t){let e=new at(ht.comparator);for(const r of this.fields)e=e.add(r);for(const r of t)e=e.add(r);return new Vt(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return xe(this.fields,t.fields,((e,r)=>e.isEqual(r)))}}/**
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
 */class za extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class ft{constructor(t){this.binaryString=t}static fromBase64String(t){const e=(function(s){try{return atob(s)}catch(o){throw typeof DOMException!="undefined"&&o instanceof DOMException?new za("Invalid base64 string: "+o):o}})(t);return new ft(e)}static fromUint8Array(t){const e=(function(s){let o="";for(let a=0;a<s.length;++a)o+=String.fromCharCode(s[a]);return o})(t);return new ft(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(e){return btoa(e)})(this.binaryString)}toUint8Array(){return(function(e){const r=new Uint8Array(e.length);for(let s=0;s<e.length;s++)r[s]=e.charCodeAt(s);return r})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return q(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}ft.EMPTY_BYTE_STRING=new ft("");const $h=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function te(n){if(H(!!n,39018),typeof n=="string"){let t=0;const e=$h.exec(n);if(H(!!e,46558,{timestamp:n}),e[1]){let s=e[1];s=(s+"000000000").substr(0,9),t=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:et(n.seconds),nanos:et(n.nanos)}}function et(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function ee(n){return typeof n=="string"?ft.fromBase64String(n):ft.fromUint8Array(n)}/**
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
 */const Ga="server_timestamp",Ha="__type__",Ka="__previous_value__",Wa="__local_write_time__";function Ms(n){var e,r;return((r=(((e=n==null?void 0:n.mapValue)==null?void 0:e.fields)||{})[Ha])==null?void 0:r.stringValue)===Ga}function wr(n){const t=n.mapValue.fields[Ka];return Ms(t)?wr(t):t}function In(n){const t=te(n.mapValue.fields[Wa].timestampValue);return new X(t.seconds,t.nanos)}/**
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
 */class zh{constructor(t,e,r,s,o,a,l,h,d,p,I){this.databaseId=t,this.appId=e,this.persistenceKey=r,this.host=s,this.ssl=o,this.forceLongPolling=a,this.autoDetectLongPolling=l,this.longPollingOptions=h,this.useFetchStreams=d,this.isUsingEmulator=p,this.apiKey=I}}const hr="(default)";class vn{constructor(t,e){this.projectId=t,this.database=e||hr}static empty(){return new vn("","")}get isDefaultDatabase(){return this.database===hr}isEqual(t){return t instanceof vn&&t.projectId===this.projectId&&t.database===this.database}}function Gh(n,t){if(!Object.prototype.hasOwnProperty.apply(n.options,["projectId"]))throw new D(S.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new vn(n.options.projectId,t)}/**
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
 */const Qa="__type__",Hh="__max__",Yn={mapValue:{}},Ya="__vector__",fr="value";function ne(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Ms(n)?4:Wh(n)?9007199254740991:Kh(n)?10:11:L(28295,{value:n})}function Lt(n,t){if(n===t)return!0;const e=ne(n);if(e!==ne(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===t.booleanValue;case 4:return In(n).isEqual(In(t));case 3:return(function(s,o){if(typeof s.timestampValue=="string"&&typeof o.timestampValue=="string"&&s.timestampValue.length===o.timestampValue.length)return s.timestampValue===o.timestampValue;const a=te(s.timestampValue),l=te(o.timestampValue);return a.seconds===l.seconds&&a.nanos===l.nanos})(n,t);case 5:return n.stringValue===t.stringValue;case 6:return(function(s,o){return ee(s.bytesValue).isEqual(ee(o.bytesValue))})(n,t);case 7:return n.referenceValue===t.referenceValue;case 8:return(function(s,o){return et(s.geoPointValue.latitude)===et(o.geoPointValue.latitude)&&et(s.geoPointValue.longitude)===et(o.geoPointValue.longitude)})(n,t);case 2:return(function(s,o){if("integerValue"in s&&"integerValue"in o)return et(s.integerValue)===et(o.integerValue);if("doubleValue"in s&&"doubleValue"in o){const a=et(s.doubleValue),l=et(o.doubleValue);return a===l?lr(a)===lr(l):isNaN(a)&&isNaN(l)}return!1})(n,t);case 9:return xe(n.arrayValue.values||[],t.arrayValue.values||[],Lt);case 10:case 11:return(function(s,o){const a=s.mapValue.fields||{},l=o.mapValue.fields||{};if(xo(a)!==xo(l))return!1;for(const h in a)if(a.hasOwnProperty(h)&&(l[h]===void 0||!Lt(a[h],l[h])))return!1;return!0})(n,t);default:return L(52216,{left:n})}}function An(n,t){return(n.values||[]).find((e=>Lt(e,t)))!==void 0}function Oe(n,t){if(n===t)return 0;const e=ne(n),r=ne(t);if(e!==r)return q(e,r);switch(e){case 0:case 9007199254740991:return 0;case 1:return q(n.booleanValue,t.booleanValue);case 2:return(function(o,a){const l=et(o.integerValue||o.doubleValue),h=et(a.integerValue||a.doubleValue);return l<h?-1:l>h?1:l===h?0:isNaN(l)?isNaN(h)?0:-1:1})(n,t);case 3:return Mo(n.timestampValue,t.timestampValue);case 4:return Mo(In(n),In(t));case 5:return gs(n.stringValue,t.stringValue);case 6:return(function(o,a){const l=ee(o),h=ee(a);return l.compareTo(h)})(n.bytesValue,t.bytesValue);case 7:return(function(o,a){const l=o.split("/"),h=a.split("/");for(let d=0;d<l.length&&d<h.length;d++){const p=q(l[d],h[d]);if(p!==0)return p}return q(l.length,h.length)})(n.referenceValue,t.referenceValue);case 8:return(function(o,a){const l=q(et(o.latitude),et(a.latitude));return l!==0?l:q(et(o.longitude),et(a.longitude))})(n.geoPointValue,t.geoPointValue);case 9:return Lo(n.arrayValue,t.arrayValue);case 10:return(function(o,a){var w,V,k,M;const l=o.fields||{},h=a.fields||{},d=(w=l[fr])==null?void 0:w.arrayValue,p=(V=h[fr])==null?void 0:V.arrayValue,I=q(((k=d==null?void 0:d.values)==null?void 0:k.length)||0,((M=p==null?void 0:p.values)==null?void 0:M.length)||0);return I!==0?I:Lo(d,p)})(n.mapValue,t.mapValue);case 11:return(function(o,a){if(o===Yn.mapValue&&a===Yn.mapValue)return 0;if(o===Yn.mapValue)return 1;if(a===Yn.mapValue)return-1;const l=o.fields||{},h=Object.keys(l),d=a.fields||{},p=Object.keys(d);h.sort(),p.sort();for(let I=0;I<h.length&&I<p.length;++I){const w=gs(h[I],p[I]);if(w!==0)return w;const V=Oe(l[h[I]],d[p[I]]);if(V!==0)return V}return q(h.length,p.length)})(n.mapValue,t.mapValue);default:throw L(23264,{he:e})}}function Mo(n,t){if(typeof n=="string"&&typeof t=="string"&&n.length===t.length)return q(n,t);const e=te(n),r=te(t),s=q(e.seconds,r.seconds);return s!==0?s:q(e.nanos,r.nanos)}function Lo(n,t){const e=n.values||[],r=t.values||[];for(let s=0;s<e.length&&s<r.length;++s){const o=Oe(e[s],r[s]);if(o)return o}return q(e.length,r.length)}function Me(n){return _s(n)}function _s(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?(function(e){const r=te(e);return`time(${r.seconds},${r.nanos})`})(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?(function(e){return ee(e).toBase64()})(n.bytesValue):"referenceValue"in n?(function(e){return O.fromName(e).toString()})(n.referenceValue):"geoPointValue"in n?(function(e){return`geo(${e.latitude},${e.longitude})`})(n.geoPointValue):"arrayValue"in n?(function(e){let r="[",s=!0;for(const o of e.values||[])s?s=!1:r+=",",r+=_s(o);return r+"]"})(n.arrayValue):"mapValue"in n?(function(e){const r=Object.keys(e.fields||{}).sort();let s="{",o=!0;for(const a of r)o?o=!1:s+=",",s+=`${a}:${_s(e.fields[a])}`;return s+"}"})(n.mapValue):L(61005,{value:n})}function er(n){switch(ne(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const t=wr(n);return t?16+er(t):16;case 5:return 2*n.stringValue.length;case 6:return ee(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return(function(r){return(r.values||[]).reduce(((s,o)=>s+er(o)),0)})(n.arrayValue);case 10:case 11:return(function(r){let s=0;return ge(r.fields,((o,a)=>{s+=o.length+er(a)})),s})(n.mapValue);default:throw L(13486,{value:n})}}function Fo(n,t){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${t.path.canonicalString()}`}}function ys(n){return!!n&&"integerValue"in n}function Ls(n){return!!n&&"arrayValue"in n}function Uo(n){return!!n&&"nullValue"in n}function Bo(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function nr(n){return!!n&&"mapValue"in n}function Kh(n){var e,r;return((r=(((e=n==null?void 0:n.mapValue)==null?void 0:e.fields)||{})[Qa])==null?void 0:r.stringValue)===Ya}function dn(n){if(n.geoPointValue)return{geoPointValue:Rt({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Rt({},n.timestampValue)};if(n.mapValue){const t={mapValue:{fields:{}}};return ge(n.mapValue.fields,((e,r)=>t.mapValue.fields[e]=dn(r))),t}if(n.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(n.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=dn(n.arrayValue.values[e]);return t}return Rt({},n)}function Wh(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===Hh}/**
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
 */class St{constructor(t){this.value=t}static empty(){return new St({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let r=0;r<t.length-1;++r)if(e=(e.mapValue.fields||{})[t.get(r)],!nr(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=dn(e)}setAll(t){let e=ht.emptyPath(),r={},s=[];t.forEach(((a,l)=>{if(!e.isImmediateParentOf(l)){const h=this.getFieldsMap(e);this.applyChanges(h,r,s),r={},s=[],e=l.popLast()}a?r[l.lastSegment()]=dn(a):s.push(l.lastSegment())}));const o=this.getFieldsMap(e);this.applyChanges(o,r,s)}delete(t){const e=this.field(t.popLast());nr(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return Lt(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let r=0;r<t.length;++r){let s=e.mapValue.fields[t.get(r)];nr(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},e.mapValue.fields[t.get(r)]=s),e=s}return e.mapValue.fields}applyChanges(t,e,r){ge(e,((s,o)=>t[s]=o));for(const s of r)delete t[s]}clone(){return new St(dn(this.value))}}function Ja(n){const t=[];return ge(n.fields,((e,r)=>{const s=new ht([e]);if(nr(r)){const o=Ja(r.mapValue).fields;if(o.length===0)t.push(s);else for(const a of o)t.push(s.child(a))}else t.push(s)})),new Vt(t)}/**
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
 */class _t{constructor(t,e,r,s,o,a,l){this.key=t,this.documentType=e,this.version=r,this.readTime=s,this.createTime=o,this.data=a,this.documentState=l}static newInvalidDocument(t){return new _t(t,0,F.min(),F.min(),F.min(),St.empty(),0)}static newFoundDocument(t,e,r,s){return new _t(t,1,e,F.min(),r,s,0)}static newNoDocument(t,e){return new _t(t,2,e,F.min(),F.min(),St.empty(),0)}static newUnknownDocument(t,e){return new _t(t,3,e,F.min(),F.min(),St.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(F.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=St.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=St.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=F.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof _t&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new _t(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class dr{constructor(t,e){this.position=t,this.inclusive=e}}function qo(n,t,e){let r=0;for(let s=0;s<n.position.length;s++){const o=t[s],a=n.position[s];if(o.field.isKeyField()?r=O.comparator(O.fromName(a.referenceValue),e.key):r=Oe(a,e.data.field(o.field)),o.dir==="desc"&&(r*=-1),r!==0)break}return r}function jo(n,t){if(n===null)return t===null;if(t===null||n.inclusive!==t.inclusive||n.position.length!==t.position.length)return!1;for(let e=0;e<n.position.length;e++)if(!Lt(n.position[e],t.position[e]))return!1;return!0}/**
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
 */class wn{constructor(t,e="asc"){this.field=t,this.dir=e}}function Qh(n,t){return n.dir===t.dir&&n.field.isEqual(t.field)}/**
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
 */class Xa{}class rt extends Xa{constructor(t,e,r){super(),this.field=t,this.op=e,this.value=r}static create(t,e,r){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,r):new Jh(t,e,r):e==="array-contains"?new tf(t,r):e==="in"?new ef(t,r):e==="not-in"?new nf(t,r):e==="array-contains-any"?new rf(t,r):new rt(t,e,r)}static createKeyFieldInFilter(t,e,r){return e==="in"?new Xh(t,r):new Zh(t,r)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&e.nullValue===void 0&&this.matchesComparison(Oe(e,this.value)):e!==null&&ne(this.value)===ne(e)&&this.matchesComparison(Oe(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return L(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class bt extends Xa{constructor(t,e){super(),this.filters=t,this.op=e,this.Pe=null}static create(t,e){return new bt(t,e)}matches(t){return Za(this)?this.filters.find((e=>!e.matches(t)))===void 0:this.filters.find((e=>e.matches(t)))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce(((t,e)=>t.concat(e.getFlattenedFilters())),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function Za(n){return n.op==="and"}function tu(n){return Yh(n)&&Za(n)}function Yh(n){for(const t of n.filters)if(t instanceof bt)return!1;return!0}function Es(n){if(n instanceof rt)return n.field.canonicalString()+n.op.toString()+Me(n.value);if(tu(n))return n.filters.map((t=>Es(t))).join(",");{const t=n.filters.map((e=>Es(e))).join(",");return`${n.op}(${t})`}}function eu(n,t){return n instanceof rt?(function(r,s){return s instanceof rt&&r.op===s.op&&r.field.isEqual(s.field)&&Lt(r.value,s.value)})(n,t):n instanceof bt?(function(r,s){return s instanceof bt&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce(((o,a,l)=>o&&eu(a,s.filters[l])),!0):!1})(n,t):void L(19439)}function nu(n){return n instanceof rt?(function(e){return`${e.field.canonicalString()} ${e.op} ${Me(e.value)}`})(n):n instanceof bt?(function(e){return e.op.toString()+" {"+e.getFilters().map(nu).join(" ,")+"}"})(n):"Filter"}class Jh extends rt{constructor(t,e,r){super(t,e,r),this.key=O.fromName(r.referenceValue)}matches(t){const e=O.comparator(t.key,this.key);return this.matchesComparison(e)}}class Xh extends rt{constructor(t,e){super(t,"in",e),this.keys=ru("in",e)}matches(t){return this.keys.some((e=>e.isEqual(t.key)))}}class Zh extends rt{constructor(t,e){super(t,"not-in",e),this.keys=ru("not-in",e)}matches(t){return!this.keys.some((e=>e.isEqual(t.key)))}}function ru(n,t){var e;return(((e=t.arrayValue)==null?void 0:e.values)||[]).map((r=>O.fromName(r.referenceValue)))}class tf extends rt{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return Ls(e)&&An(e.arrayValue,this.value)}}class ef extends rt{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&An(this.value.arrayValue,e)}}class nf extends rt{constructor(t,e){super(t,"not-in",e)}matches(t){if(An(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&e.nullValue===void 0&&!An(this.value.arrayValue,e)}}class rf extends rt{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!Ls(e)||!e.arrayValue.values)&&e.arrayValue.values.some((r=>An(this.value.arrayValue,r)))}}/**
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
 */class sf{constructor(t,e=null,r=[],s=[],o=null,a=null,l=null){this.path=t,this.collectionGroup=e,this.orderBy=r,this.filters=s,this.limit=o,this.startAt=a,this.endAt=l,this.Te=null}}function $o(n,t=null,e=[],r=[],s=null,o=null,a=null){return new sf(n,t,e,r,s,o,a)}function Fs(n){const t=U(n);if(t.Te===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map((r=>Es(r))).join(","),e+="|ob:",e+=t.orderBy.map((r=>(function(o){return o.field.canonicalString()+o.dir})(r))).join(","),Ar(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map((r=>Me(r))).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map((r=>Me(r))).join(",")),t.Te=e}return t.Te}function Us(n,t){if(n.limit!==t.limit||n.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<n.orderBy.length;e++)if(!Qh(n.orderBy[e],t.orderBy[e]))return!1;if(n.filters.length!==t.filters.length)return!1;for(let e=0;e<n.filters.length;e++)if(!eu(n.filters[e],t.filters[e]))return!1;return n.collectionGroup===t.collectionGroup&&!!n.path.isEqual(t.path)&&!!jo(n.startAt,t.startAt)&&jo(n.endAt,t.endAt)}function Ts(n){return O.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
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
 */class $e{constructor(t,e=null,r=[],s=[],o=null,a="F",l=null,h=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=r,this.filters=s,this.limit=o,this.limitType=a,this.startAt=l,this.endAt=h,this.Ie=null,this.Ee=null,this.Re=null,this.startAt,this.endAt}}function of(n,t,e,r,s,o,a,l){return new $e(n,t,e,r,s,o,a,l)}function su(n){return new $e(n)}function zo(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function af(n){return O.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}function iu(n){return n.collectionGroup!==null}function mn(n){const t=U(n);if(t.Ie===null){t.Ie=[];const e=new Set;for(const o of t.explicitOrderBy)t.Ie.push(o),e.add(o.field.canonicalString());const r=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(a){let l=new at(ht.comparator);return a.filters.forEach((h=>{h.getFlattenedFilters().forEach((d=>{d.isInequality()&&(l=l.add(d.field))}))})),l})(t).forEach((o=>{e.has(o.canonicalString())||o.isKeyField()||t.Ie.push(new wn(o,r))})),e.has(ht.keyField().canonicalString())||t.Ie.push(new wn(ht.keyField(),r))}return t.Ie}function xt(n){const t=U(n);return t.Ee||(t.Ee=uf(t,mn(n))),t.Ee}function uf(n,t){if(n.limitType==="F")return $o(n.path,n.collectionGroup,t,n.filters,n.limit,n.startAt,n.endAt);{t=t.map((s=>{const o=s.dir==="desc"?"asc":"desc";return new wn(s.field,o)}));const e=n.endAt?new dr(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new dr(n.startAt.position,n.startAt.inclusive):null;return $o(n.path,n.collectionGroup,t,n.filters,n.limit,e,r)}}function Is(n,t){const e=n.filters.concat([t]);return new $e(n.path,n.collectionGroup,n.explicitOrderBy.slice(),e,n.limit,n.limitType,n.startAt,n.endAt)}function cf(n,t){const e=n.explicitOrderBy.concat([t]);return new $e(n.path,n.collectionGroup,e,n.filters.slice(),n.limit,n.limitType,n.startAt,n.endAt)}function mr(n,t,e){return new $e(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),t,e,n.startAt,n.endAt)}function Rr(n,t){return Us(xt(n),xt(t))&&n.limitType===t.limitType}function ou(n){return`${Fs(xt(n))}|lt:${n.limitType}`}function we(n){return`Query(target=${(function(e){let r=e.path.canonicalString();return e.collectionGroup!==null&&(r+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(r+=`, filters: [${e.filters.map((s=>nu(s))).join(", ")}]`),Ar(e.limit)||(r+=", limit: "+e.limit),e.orderBy.length>0&&(r+=`, orderBy: [${e.orderBy.map((s=>(function(a){return`${a.field.canonicalString()} (${a.dir})`})(s))).join(", ")}]`),e.startAt&&(r+=", startAt: ",r+=e.startAt.inclusive?"b:":"a:",r+=e.startAt.position.map((s=>Me(s))).join(",")),e.endAt&&(r+=", endAt: ",r+=e.endAt.inclusive?"a:":"b:",r+=e.endAt.position.map((s=>Me(s))).join(",")),`Target(${r})`})(xt(n))}; limitType=${n.limitType})`}function Sr(n,t){return t.isFoundDocument()&&(function(r,s){const o=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(o):O.isDocumentKey(r.path)?r.path.isEqual(o):r.path.isImmediateParentOf(o)})(n,t)&&(function(r,s){for(const o of mn(r))if(!o.field.isKeyField()&&s.data.field(o.field)===null)return!1;return!0})(n,t)&&(function(r,s){for(const o of r.filters)if(!o.matches(s))return!1;return!0})(n,t)&&(function(r,s){return!(r.startAt&&!(function(a,l,h){const d=qo(a,l,h);return a.inclusive?d<=0:d<0})(r.startAt,mn(r),s)||r.endAt&&!(function(a,l,h){const d=qo(a,l,h);return a.inclusive?d>=0:d>0})(r.endAt,mn(r),s))})(n,t)}function lf(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function au(n){return(t,e)=>{let r=!1;for(const s of mn(n)){const o=hf(s,t,e);if(o!==0)return o;r=r||s.field.isKeyField()}return 0}}function hf(n,t,e){const r=n.field.isKeyField()?O.comparator(t.key,e.key):(function(o,a,l){const h=a.data.field(o),d=l.data.field(o);return h!==null&&d!==null?Oe(h,d):L(42886)})(n.field,t,e);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return L(19790,{direction:n.dir})}}/**
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
 */class _e{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r!==void 0){for(const[s,o]of r)if(this.equalsFn(s,t))return o}}has(t){return this.get(t)!==void 0}set(t,e){const r=this.mapKeyFn(t),s=this.inner[r];if(s===void 0)return this.inner[r]=[[t,e]],void this.innerSize++;for(let o=0;o<s.length;o++)if(this.equalsFn(s[o][0],t))return void(s[o]=[t,e]);s.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],t))return r.length===1?delete this.inner[e]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(t){ge(this.inner,((e,r)=>{for(const[s,o]of r)t(s,o)}))}isEmpty(){return $a(this.inner)}size(){return this.innerSize}}/**
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
 */const ff=new Z(O.comparator);function qt(){return ff}const uu=new Z(O.comparator);function ln(...n){let t=uu;for(const e of n)t=t.insert(e.key,e);return t}function cu(n){let t=uu;return n.forEach(((e,r)=>t=t.insert(e,r.overlayedDocument))),t}function de(){return pn()}function lu(){return pn()}function pn(){return new _e((n=>n.toString()),((n,t)=>n.isEqual(t)))}const df=new Z(O.comparator),mf=new at(O.comparator);function j(...n){let t=mf;for(const e of n)t=t.add(e);return t}const pf=new at(q);function gf(){return pf}/**
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
 */function Bs(n,t){if(n.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:lr(t)?"-0":t}}function hu(n){return{integerValue:""+n}}function _f(n,t){return Bh(t)?hu(t):Bs(n,t)}/**
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
 */class Cr{constructor(){this._=void 0}}function yf(n,t,e){return n instanceof Rn?(function(s,o){const a={fields:{[Ha]:{stringValue:Ga},[Wa]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return o&&Ms(o)&&(o=wr(o)),o&&(a.fields[Ka]=o),{mapValue:a}})(e,t):n instanceof Sn?du(n,t):n instanceof Cn?mu(n,t):(function(s,o){const a=fu(s,o),l=Go(a)+Go(s.Ae);return ys(a)&&ys(s.Ae)?hu(l):Bs(s.serializer,l)})(n,t)}function Ef(n,t,e){return n instanceof Sn?du(n,t):n instanceof Cn?mu(n,t):e}function fu(n,t){return n instanceof pr?(function(r){return ys(r)||(function(o){return!!o&&"doubleValue"in o})(r)})(t)?t:{integerValue:0}:null}class Rn extends Cr{}class Sn extends Cr{constructor(t){super(),this.elements=t}}function du(n,t){const e=pu(t);for(const r of n.elements)e.some((s=>Lt(s,r)))||e.push(r);return{arrayValue:{values:e}}}class Cn extends Cr{constructor(t){super(),this.elements=t}}function mu(n,t){let e=pu(t);for(const r of n.elements)e=e.filter((s=>!Lt(s,r)));return{arrayValue:{values:e}}}class pr extends Cr{constructor(t,e){super(),this.serializer=t,this.Ae=e}}function Go(n){return et(n.integerValue||n.doubleValue)}function pu(n){return Ls(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
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
 */class Tf{constructor(t,e){this.field=t,this.transform=e}}function If(n,t){return n.field.isEqual(t.field)&&(function(r,s){return r instanceof Sn&&s instanceof Sn||r instanceof Cn&&s instanceof Cn?xe(r.elements,s.elements,Lt):r instanceof pr&&s instanceof pr?Lt(r.Ae,s.Ae):r instanceof Rn&&s instanceof Rn})(n.transform,t.transform)}class vf{constructor(t,e){this.version=t,this.transformResults=e}}class Ft{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new Ft}static exists(t){return new Ft(void 0,t)}static updateTime(t){return new Ft(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function rr(n,t){return n.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(n.updateTime):n.exists===void 0||n.exists===t.isFoundDocument()}class Vr{}function gu(n,t){if(!n.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return n.isNoDocument()?new yu(n.key,Ft.none()):new Pn(n.key,n.data,Ft.none());{const e=n.data,r=St.empty();let s=new at(ht.comparator);for(let o of t.fields)if(!s.has(o)){let a=e.field(o);a===null&&o.length>1&&(o=o.popLast(),a=e.field(o)),a===null?r.delete(o):r.set(o,a),s=s.add(o)}return new ye(n.key,r,new Vt(s.toArray()),Ft.none())}}function Af(n,t,e){n instanceof Pn?(function(s,o,a){const l=s.value.clone(),h=Ko(s.fieldTransforms,o,a.transformResults);l.setAll(h),o.convertToFoundDocument(a.version,l).setHasCommittedMutations()})(n,t,e):n instanceof ye?(function(s,o,a){if(!rr(s.precondition,o))return void o.convertToUnknownDocument(a.version);const l=Ko(s.fieldTransforms,o,a.transformResults),h=o.data;h.setAll(_u(s)),h.setAll(l),o.convertToFoundDocument(a.version,h).setHasCommittedMutations()})(n,t,e):(function(s,o,a){o.convertToNoDocument(a.version).setHasCommittedMutations()})(0,t,e)}function gn(n,t,e,r){return n instanceof Pn?(function(o,a,l,h){if(!rr(o.precondition,a))return l;const d=o.value.clone(),p=Wo(o.fieldTransforms,h,a);return d.setAll(p),a.convertToFoundDocument(a.version,d).setHasLocalMutations(),null})(n,t,e,r):n instanceof ye?(function(o,a,l,h){if(!rr(o.precondition,a))return l;const d=Wo(o.fieldTransforms,h,a),p=a.data;return p.setAll(_u(o)),p.setAll(d),a.convertToFoundDocument(a.version,p).setHasLocalMutations(),l===null?null:l.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map((I=>I.field)))})(n,t,e,r):(function(o,a,l){return rr(o.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):l})(n,t,e)}function wf(n,t){let e=null;for(const r of n.fieldTransforms){const s=t.data.field(r.field),o=fu(r.transform,s||null);o!=null&&(e===null&&(e=St.empty()),e.set(r.field,o))}return e||null}function Ho(n,t){return n.type===t.type&&!!n.key.isEqual(t.key)&&!!n.precondition.isEqual(t.precondition)&&!!(function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&xe(r,s,((o,a)=>If(o,a)))})(n.fieldTransforms,t.fieldTransforms)&&(n.type===0?n.value.isEqual(t.value):n.type!==1||n.data.isEqual(t.data)&&n.fieldMask.isEqual(t.fieldMask))}class Pn extends Vr{constructor(t,e,r,s=[]){super(),this.key=t,this.value=e,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class ye extends Vr{constructor(t,e,r,s,o=[]){super(),this.key=t,this.data=e,this.fieldMask=r,this.precondition=s,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function _u(n){const t=new Map;return n.fieldMask.fields.forEach((e=>{if(!e.isEmpty()){const r=n.data.field(e);t.set(e,r)}})),t}function Ko(n,t,e){const r=new Map;H(n.length===e.length,32656,{Ve:e.length,de:n.length});for(let s=0;s<e.length;s++){const o=n[s],a=o.transform,l=t.data.field(o.field);r.set(o.field,Ef(a,l,e[s]))}return r}function Wo(n,t,e){const r=new Map;for(const s of n){const o=s.transform,a=e.data.field(s.field);r.set(s.field,yf(o,a,t))}return r}class yu extends Vr{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Rf extends Vr{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class Sf{constructor(t,e,r,s){this.batchId=t,this.localWriteTime=e,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(t,e){const r=e.mutationResults;for(let s=0;s<this.mutations.length;s++){const o=this.mutations[s];o.key.isEqual(t.key)&&Af(o,t,r[s])}}applyToLocalView(t,e){for(const r of this.baseMutations)r.key.isEqual(t.key)&&(e=gn(r,t,e,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(t.key)&&(e=gn(r,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const r=lu();return this.mutations.forEach((s=>{const o=t.get(s.key),a=o.overlayedDocument;let l=this.applyToLocalView(a,o.mutatedFields);l=e.has(s.key)?null:l;const h=gu(a,l);h!==null&&r.set(s.key,h),a.isValidDocument()||a.convertToNoDocument(F.min())})),r}keys(){return this.mutations.reduce(((t,e)=>t.add(e.key)),j())}isEqual(t){return this.batchId===t.batchId&&xe(this.mutations,t.mutations,((e,r)=>Ho(e,r)))&&xe(this.baseMutations,t.baseMutations,((e,r)=>Ho(e,r)))}}class qs{constructor(t,e,r,s){this.batch=t,this.commitVersion=e,this.mutationResults=r,this.docVersions=s}static from(t,e,r){H(t.mutations.length===r.length,58842,{me:t.mutations.length,fe:r.length});let s=(function(){return df})();const o=t.mutations;for(let a=0;a<o.length;a++)s=s.insert(o[a].key,r[a].version);return new qs(t,e,r,s)}}/**
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
 */class Cf{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
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
 */class Vf{constructor(t,e){this.count=t,this.unchangedNames=e}}/**
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
 */var nt,$;function Pf(n){switch(n){case S.OK:return L(64938);case S.CANCELLED:case S.UNKNOWN:case S.DEADLINE_EXCEEDED:case S.RESOURCE_EXHAUSTED:case S.INTERNAL:case S.UNAVAILABLE:case S.UNAUTHENTICATED:return!1;case S.INVALID_ARGUMENT:case S.NOT_FOUND:case S.ALREADY_EXISTS:case S.PERMISSION_DENIED:case S.FAILED_PRECONDITION:case S.ABORTED:case S.OUT_OF_RANGE:case S.UNIMPLEMENTED:case S.DATA_LOSS:return!0;default:return L(15467,{code:n})}}function Eu(n){if(n===void 0)return Bt("GRPC error has no .code"),S.UNKNOWN;switch(n){case nt.OK:return S.OK;case nt.CANCELLED:return S.CANCELLED;case nt.UNKNOWN:return S.UNKNOWN;case nt.DEADLINE_EXCEEDED:return S.DEADLINE_EXCEEDED;case nt.RESOURCE_EXHAUSTED:return S.RESOURCE_EXHAUSTED;case nt.INTERNAL:return S.INTERNAL;case nt.UNAVAILABLE:return S.UNAVAILABLE;case nt.UNAUTHENTICATED:return S.UNAUTHENTICATED;case nt.INVALID_ARGUMENT:return S.INVALID_ARGUMENT;case nt.NOT_FOUND:return S.NOT_FOUND;case nt.ALREADY_EXISTS:return S.ALREADY_EXISTS;case nt.PERMISSION_DENIED:return S.PERMISSION_DENIED;case nt.FAILED_PRECONDITION:return S.FAILED_PRECONDITION;case nt.ABORTED:return S.ABORTED;case nt.OUT_OF_RANGE:return S.OUT_OF_RANGE;case nt.UNIMPLEMENTED:return S.UNIMPLEMENTED;case nt.DATA_LOSS:return S.DATA_LOSS;default:return L(39323,{code:n})}}($=nt||(nt={}))[$.OK=0]="OK",$[$.CANCELLED=1]="CANCELLED",$[$.UNKNOWN=2]="UNKNOWN",$[$.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",$[$.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",$[$.NOT_FOUND=5]="NOT_FOUND",$[$.ALREADY_EXISTS=6]="ALREADY_EXISTS",$[$.PERMISSION_DENIED=7]="PERMISSION_DENIED",$[$.UNAUTHENTICATED=16]="UNAUTHENTICATED",$[$.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",$[$.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",$[$.ABORTED=10]="ABORTED",$[$.OUT_OF_RANGE=11]="OUT_OF_RANGE",$[$.UNIMPLEMENTED=12]="UNIMPLEMENTED",$[$.INTERNAL=13]="INTERNAL",$[$.UNAVAILABLE=14]="UNAVAILABLE",$[$.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function bf(){return new TextEncoder}/**
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
 */const Df=new Yt([4294967295,4294967295],0);function Qo(n){const t=bf().encode(n),e=new Na;return e.update(t),new Uint8Array(e.digest())}function Yo(n){const t=new DataView(n.buffer),e=t.getUint32(0,!0),r=t.getUint32(4,!0),s=t.getUint32(8,!0),o=t.getUint32(12,!0);return[new Yt([e,r],0),new Yt([s,o],0)]}class js{constructor(t,e,r){if(this.bitmap=t,this.padding=e,this.hashCount=r,e<0||e>=8)throw new hn(`Invalid padding: ${e}`);if(r<0)throw new hn(`Invalid hash count: ${r}`);if(t.length>0&&this.hashCount===0)throw new hn(`Invalid hash count: ${r}`);if(t.length===0&&e!==0)throw new hn(`Invalid padding when bitmap length is 0: ${e}`);this.ge=8*t.length-e,this.pe=Yt.fromNumber(this.ge)}ye(t,e,r){let s=t.add(e.multiply(Yt.fromNumber(r)));return s.compare(Df)===1&&(s=new Yt([s.getBits(0),s.getBits(1)],0)),s.modulo(this.pe).toNumber()}we(t){return!!(this.bitmap[Math.floor(t/8)]&1<<t%8)}mightContain(t){if(this.ge===0)return!1;const e=Qo(t),[r,s]=Yo(e);for(let o=0;o<this.hashCount;o++){const a=this.ye(r,s,o);if(!this.we(a))return!1}return!0}static create(t,e,r){const s=t%8==0?0:8-t%8,o=new Uint8Array(Math.ceil(t/8)),a=new js(o,s,e);return r.forEach((l=>a.insert(l))),a}insert(t){if(this.ge===0)return;const e=Qo(t),[r,s]=Yo(e);for(let o=0;o<this.hashCount;o++){const a=this.ye(r,s,o);this.be(a)}}be(t){const e=Math.floor(t/8),r=t%8;this.bitmap[e]|=1<<r}}class hn extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Pr{constructor(t,e,r,s,o){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=o}static createSynthesizedRemoteEventForCurrentChange(t,e,r){const s=new Map;return s.set(t,bn.createSynthesizedTargetChangeForCurrentChange(t,e,r)),new Pr(F.min(),s,new Z(q),qt(),j())}}class bn{constructor(t,e,r,s,o){this.resumeToken=t,this.current=e,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=o}static createSynthesizedTargetChangeForCurrentChange(t,e,r){return new bn(r,e,j(),j(),j())}}/**
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
 */class sr{constructor(t,e,r,s){this.Se=t,this.removedTargetIds=e,this.key=r,this.De=s}}class Tu{constructor(t,e){this.targetId=t,this.Ce=e}}class Iu{constructor(t,e,r=ft.EMPTY_BYTE_STRING,s=null){this.state=t,this.targetIds=e,this.resumeToken=r,this.cause=s}}class Jo{constructor(){this.ve=0,this.Fe=Xo(),this.Me=ft.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(t){t.approximateByteSize()>0&&(this.Oe=!0,this.Me=t)}ke(){let t=j(),e=j(),r=j();return this.Fe.forEach(((s,o)=>{switch(o){case 0:t=t.add(s);break;case 2:e=e.add(s);break;case 1:r=r.add(s);break;default:L(38017,{changeType:o})}})),new bn(this.Me,this.xe,t,e,r)}Ke(){this.Oe=!1,this.Fe=Xo()}qe(t,e){this.Oe=!0,this.Fe=this.Fe.insert(t,e)}Ue(t){this.Oe=!0,this.Fe=this.Fe.remove(t)}$e(){this.ve+=1}We(){this.ve-=1,H(this.ve>=0,3241,{ve:this.ve})}Qe(){this.Oe=!0,this.xe=!0}}class Nf{constructor(t){this.Ge=t,this.ze=new Map,this.je=qt(),this.He=Jn(),this.Je=Jn(),this.Ze=new Z(q)}Xe(t){for(const e of t.Se)t.De&&t.De.isFoundDocument()?this.Ye(e,t.De):this.et(e,t.key,t.De);for(const e of t.removedTargetIds)this.et(e,t.key,t.De)}tt(t){this.forEachTarget(t,(e=>{const r=this.nt(e);switch(t.state){case 0:this.rt(e)&&r.Le(t.resumeToken);break;case 1:r.We(),r.Ne||r.Ke(),r.Le(t.resumeToken);break;case 2:r.We(),r.Ne||this.removeTarget(e);break;case 3:this.rt(e)&&(r.Qe(),r.Le(t.resumeToken));break;case 4:this.rt(e)&&(this.it(e),r.Le(t.resumeToken));break;default:L(56790,{state:t.state})}}))}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.ze.forEach(((r,s)=>{this.rt(s)&&e(s)}))}st(t){const e=t.targetId,r=t.Ce.count,s=this.ot(e);if(s){const o=s.target;if(Ts(o))if(r===0){const a=new O(o.path);this.et(e,a,_t.newNoDocument(a,F.min()))}else H(r===1,20013,{expectedCount:r});else{const a=this._t(e);if(a!==r){const l=this.ut(t),h=l?this.ct(l,t,a):1;if(h!==0){this.it(e);const d=h===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(e,d)}}}}}ut(t){const e=t.Ce.unchangedNames;if(!e||!e.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:o=0}=e;let a,l;try{a=ee(r).toUint8Array()}catch(h){if(h instanceof za)return ke("Decoding the base64 bloom filter in existence filter failed ("+h.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw h}try{l=new js(a,s,o)}catch(h){return ke(h instanceof hn?"BloomFilter error: ":"Applying bloom filter failed: ",h),null}return l.ge===0?null:l}ct(t,e,r){return e.Ce.count===r-this.Pt(t,e.targetId)?0:2}Pt(t,e){const r=this.Ge.getRemoteKeysForTarget(e);let s=0;return r.forEach((o=>{const a=this.Ge.ht(),l=`projects/${a.projectId}/databases/${a.database}/documents/${o.path.canonicalString()}`;t.mightContain(l)||(this.et(e,o,null),s++)})),s}Tt(t){const e=new Map;this.ze.forEach(((o,a)=>{const l=this.ot(a);if(l){if(o.current&&Ts(l.target)){const h=new O(l.target.path);this.It(h).has(a)||this.Et(a,h)||this.et(a,h,_t.newNoDocument(h,t))}o.Be&&(e.set(a,o.ke()),o.Ke())}}));let r=j();this.Je.forEach(((o,a)=>{let l=!0;a.forEachWhile((h=>{const d=this.ot(h);return!d||d.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)})),l&&(r=r.add(o))})),this.je.forEach(((o,a)=>a.setReadTime(t)));const s=new Pr(t,e,this.Ze,this.je,r);return this.je=qt(),this.He=Jn(),this.Je=Jn(),this.Ze=new Z(q),s}Ye(t,e){if(!this.rt(t))return;const r=this.Et(t,e.key)?2:0;this.nt(t).qe(e.key,r),this.je=this.je.insert(e.key,e),this.He=this.He.insert(e.key,this.It(e.key).add(t)),this.Je=this.Je.insert(e.key,this.Rt(e.key).add(t))}et(t,e,r){if(!this.rt(t))return;const s=this.nt(t);this.Et(t,e)?s.qe(e,1):s.Ue(e),this.Je=this.Je.insert(e,this.Rt(e).delete(t)),this.Je=this.Je.insert(e,this.Rt(e).add(t)),r&&(this.je=this.je.insert(e,r))}removeTarget(t){this.ze.delete(t)}_t(t){const e=this.nt(t).ke();return this.Ge.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}$e(t){this.nt(t).$e()}nt(t){let e=this.ze.get(t);return e||(e=new Jo,this.ze.set(t,e)),e}Rt(t){let e=this.Je.get(t);return e||(e=new at(q),this.Je=this.Je.insert(t,e)),e}It(t){let e=this.He.get(t);return e||(e=new at(q),this.He=this.He.insert(t,e)),e}rt(t){const e=this.ot(t)!==null;return e||N("WatchChangeAggregator","Detected inactive target",t),e}ot(t){const e=this.ze.get(t);return e&&e.Ne?null:this.Ge.At(t)}it(t){this.ze.set(t,new Jo),this.Ge.getRemoteKeysForTarget(t).forEach((e=>{this.et(t,e,null)}))}Et(t,e){return this.Ge.getRemoteKeysForTarget(t).has(e)}}function Jn(){return new Z(O.comparator)}function Xo(){return new Z(O.comparator)}const kf={asc:"ASCENDING",desc:"DESCENDING"},xf={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Of={and:"AND",or:"OR"};class Mf{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function vs(n,t){return n.useProto3Json||Ar(t)?t:{value:t}}function gr(n,t){return n.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function vu(n,t){return n.useProto3Json?t.toBase64():t.toUint8Array()}function Lf(n,t){return gr(n,t.toTimestamp())}function Ot(n){return H(!!n,49232),F.fromTimestamp((function(e){const r=te(e);return new X(r.seconds,r.nanos)})(n))}function $s(n,t){return As(n,t).canonicalString()}function As(n,t){const e=(function(s){return new Q(["projects",s.projectId,"databases",s.database])})(n).child("documents");return t===void 0?e:e.child(t)}function Au(n){const t=Q.fromString(n);return H(Vu(t),10190,{key:t.toString()}),t}function ws(n,t){return $s(n.databaseId,t.path)}function us(n,t){const e=Au(t);if(e.get(1)!==n.databaseId.projectId)throw new D(S.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+e.get(1)+" vs "+n.databaseId.projectId);if(e.get(3)!==n.databaseId.database)throw new D(S.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+e.get(3)+" vs "+n.databaseId.database);return new O(Ru(e))}function wu(n,t){return $s(n.databaseId,t)}function Ff(n){const t=Au(n);return t.length===4?Q.emptyPath():Ru(t)}function Rs(n){return new Q(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Ru(n){return H(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function Zo(n,t,e){return{name:ws(n,t),fields:e.value.mapValue.fields}}function Uf(n,t){let e;if("targetChange"in t){t.targetChange;const r=(function(d){return d==="NO_CHANGE"?0:d==="ADD"?1:d==="REMOVE"?2:d==="CURRENT"?3:d==="RESET"?4:L(39313,{state:d})})(t.targetChange.targetChangeType||"NO_CHANGE"),s=t.targetChange.targetIds||[],o=(function(d,p){return d.useProto3Json?(H(p===void 0||typeof p=="string",58123),ft.fromBase64String(p||"")):(H(p===void 0||p instanceof Buffer||p instanceof Uint8Array,16193),ft.fromUint8Array(p||new Uint8Array))})(n,t.targetChange.resumeToken),a=t.targetChange.cause,l=a&&(function(d){const p=d.code===void 0?S.UNKNOWN:Eu(d.code);return new D(p,d.message||"")})(a);e=new Iu(r,s,o,l||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const s=us(n,r.document.name),o=Ot(r.document.updateTime),a=r.document.createTime?Ot(r.document.createTime):F.min(),l=new St({mapValue:{fields:r.document.fields}}),h=_t.newFoundDocument(s,o,a,l),d=r.targetIds||[],p=r.removedTargetIds||[];e=new sr(d,p,h.key,h)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const s=us(n,r.document),o=r.readTime?Ot(r.readTime):F.min(),a=_t.newNoDocument(s,o),l=r.removedTargetIds||[];e=new sr([],l,a.key,a)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const s=us(n,r.document),o=r.removedTargetIds||[];e=new sr([],o,s,null)}else{if(!("filter"in t))return L(11601,{Vt:t});{t.filter;const r=t.filter;r.targetId;const{count:s=0,unchangedNames:o}=r,a=new Vf(s,o),l=r.targetId;e=new Tu(l,a)}}return e}function Bf(n,t){let e;if(t instanceof Pn)e={update:Zo(n,t.key,t.value)};else if(t instanceof yu)e={delete:ws(n,t.key)};else if(t instanceof ye)e={update:Zo(n,t.key,t.data),updateMask:Qf(t.fieldMask)};else{if(!(t instanceof Rf))return L(16599,{dt:t.type});e={verify:ws(n,t.key)}}return t.fieldTransforms.length>0&&(e.updateTransforms=t.fieldTransforms.map((r=>(function(o,a){const l=a.transform;if(l instanceof Rn)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof Sn)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof Cn)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof pr)return{fieldPath:a.field.canonicalString(),increment:l.Ae};throw L(20930,{transform:a.transform})})(0,r)))),t.precondition.isNone||(e.currentDocument=(function(s,o){return o.updateTime!==void 0?{updateTime:Lf(s,o.updateTime)}:o.exists!==void 0?{exists:o.exists}:L(27497)})(n,t.precondition)),e}function qf(n,t){return n&&n.length>0?(H(t!==void 0,14353),n.map((e=>(function(s,o){let a=s.updateTime?Ot(s.updateTime):Ot(o);return a.isEqual(F.min())&&(a=Ot(o)),new vf(a,s.transformResults||[])})(e,t)))):[]}function jf(n,t){return{documents:[wu(n,t.path)]}}function $f(n,t){const e={structuredQuery:{}},r=t.path;let s;t.collectionGroup!==null?(s=r,e.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(s=r.popLast(),e.structuredQuery.from=[{collectionId:r.lastSegment()}]),e.parent=wu(n,s);const o=(function(d){if(d.length!==0)return Cu(bt.create(d,"and"))})(t.filters);o&&(e.structuredQuery.where=o);const a=(function(d){if(d.length!==0)return d.map((p=>(function(w){return{field:Re(w.field),direction:Hf(w.dir)}})(p)))})(t.orderBy);a&&(e.structuredQuery.orderBy=a);const l=vs(n,t.limit);return l!==null&&(e.structuredQuery.limit=l),t.startAt&&(e.structuredQuery.startAt=(function(d){return{before:d.inclusive,values:d.position}})(t.startAt)),t.endAt&&(e.structuredQuery.endAt=(function(d){return{before:!d.inclusive,values:d.position}})(t.endAt)),{ft:e,parent:s}}function zf(n){let t=Ff(n.parent);const e=n.structuredQuery,r=e.from?e.from.length:0;let s=null;if(r>0){H(r===1,65062);const p=e.from[0];p.allDescendants?s=p.collectionId:t=t.child(p.collectionId)}let o=[];e.where&&(o=(function(I){const w=Su(I);return w instanceof bt&&tu(w)?w.getFilters():[w]})(e.where));let a=[];e.orderBy&&(a=(function(I){return I.map((w=>(function(k){return new wn(Se(k.field),(function(x){switch(x){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(k.direction))})(w)))})(e.orderBy));let l=null;e.limit&&(l=(function(I){let w;return w=typeof I=="object"?I.value:I,Ar(w)?null:w})(e.limit));let h=null;e.startAt&&(h=(function(I){const w=!!I.before,V=I.values||[];return new dr(V,w)})(e.startAt));let d=null;return e.endAt&&(d=(function(I){const w=!I.before,V=I.values||[];return new dr(V,w)})(e.endAt)),of(t,s,a,o,l,"F",h,d)}function Gf(n,t){const e=(function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return L(28987,{purpose:s})}})(t.purpose);return e==null?null:{"goog-listen-tags":e}}function Su(n){return n.unaryFilter!==void 0?(function(e){switch(e.unaryFilter.op){case"IS_NAN":const r=Se(e.unaryFilter.field);return rt.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Se(e.unaryFilter.field);return rt.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=Se(e.unaryFilter.field);return rt.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=Se(e.unaryFilter.field);return rt.create(a,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return L(61313);default:return L(60726)}})(n):n.fieldFilter!==void 0?(function(e){return rt.create(Se(e.fieldFilter.field),(function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return L(58110);default:return L(50506)}})(e.fieldFilter.op),e.fieldFilter.value)})(n):n.compositeFilter!==void 0?(function(e){return bt.create(e.compositeFilter.filters.map((r=>Su(r))),(function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return L(1026)}})(e.compositeFilter.op))})(n):L(30097,{filter:n})}function Hf(n){return kf[n]}function Kf(n){return xf[n]}function Wf(n){return Of[n]}function Re(n){return{fieldPath:n.canonicalString()}}function Se(n){return ht.fromServerFormat(n.fieldPath)}function Cu(n){return n instanceof rt?(function(e){if(e.op==="=="){if(Bo(e.value))return{unaryFilter:{field:Re(e.field),op:"IS_NAN"}};if(Uo(e.value))return{unaryFilter:{field:Re(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(Bo(e.value))return{unaryFilter:{field:Re(e.field),op:"IS_NOT_NAN"}};if(Uo(e.value))return{unaryFilter:{field:Re(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Re(e.field),op:Kf(e.op),value:e.value}}})(n):n instanceof bt?(function(e){const r=e.getFilters().map((s=>Cu(s)));return r.length===1?r[0]:{compositeFilter:{op:Wf(e.op),filters:r}}})(n):L(54877,{filter:n})}function Qf(n){const t=[];return n.fields.forEach((e=>t.push(e.canonicalString()))),{fieldPaths:t}}function Vu(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}function Pu(n){return!!n&&typeof n._toProto=="function"&&n._protoValueType==="ProtoValue"}/**
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
 */class Wt{constructor(t,e,r,s,o=F.min(),a=F.min(),l=ft.EMPTY_BYTE_STRING,h=null){this.target=t,this.targetId=e,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=o,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=l,this.expectedCount=h}withSequenceNumber(t){return new Wt(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new Wt(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new Wt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new Wt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
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
 */class Yf{constructor(t){this.yt=t}}function Jf(n){const t=zf({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?mr(t,t.limit,"L"):t}/**
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
 */class Xf{constructor(){this.Sn=new Zf}addToCollectionParentIndex(t,e){return this.Sn.add(e),C.resolve()}getCollectionParents(t,e){return C.resolve(this.Sn.getEntries(e))}addFieldIndex(t,e){return C.resolve()}deleteFieldIndex(t,e){return C.resolve()}deleteAllFieldIndexes(t){return C.resolve()}createTargetIndexes(t,e){return C.resolve()}getDocumentsMatchingTarget(t,e){return C.resolve(null)}getIndexType(t,e){return C.resolve(0)}getFieldIndexes(t,e){return C.resolve([])}getNextCollectionGroupToUpdate(t){return C.resolve(null)}getMinOffset(t,e){return C.resolve(Zt.min())}getMinOffsetFromCollectionGroup(t,e){return C.resolve(Zt.min())}updateCollectionGroup(t,e,r){return C.resolve()}updateIndexEntries(t,e){return C.resolve()}}class Zf{constructor(){this.index={}}add(t){const e=t.lastSegment(),r=t.popLast(),s=this.index[e]||new at(Q.comparator),o=!s.has(r);return this.index[e]=s.add(r),o}has(t){const e=t.lastSegment(),r=t.popLast(),s=this.index[e];return s&&s.has(r)}getEntries(t){return(this.index[t]||new at(Q.comparator)).toArray()}}/**
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
 */const ta={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},bu=41943040;class vt{static withCacheSize(t){return new vt(t,vt.DEFAULT_COLLECTION_PERCENTILE,vt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(t,e,r){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=r}}/**
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
 */vt.DEFAULT_COLLECTION_PERCENTILE=10,vt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,vt.DEFAULT=new vt(bu,vt.DEFAULT_COLLECTION_PERCENTILE,vt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),vt.DISABLED=new vt(-1,0,0);/**
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
 */class Le{constructor(t){this.sr=t}next(){return this.sr+=2,this.sr}static _r(){return new Le(0)}static ar(){return new Le(-1)}}/**
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
 */const ea="LruGarbageCollector",td=1048576;function na([n,t],[e,r]){const s=q(n,e);return s===0?q(t,r):s}class ed{constructor(t){this.Pr=t,this.buffer=new at(na),this.Tr=0}Ir(){return++this.Tr}Er(t){const e=[t,this.Ir()];if(this.buffer.size<this.Pr)this.buffer=this.buffer.add(e);else{const r=this.buffer.last();na(e,r)<0&&(this.buffer=this.buffer.delete(r).add(e))}}get maxValue(){return this.buffer.last()[0]}}class nd{constructor(t,e,r){this.garbageCollector=t,this.asyncQueue=e,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Ar(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Ar(t){N(ea,`Garbage collection scheduled in ${t}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",t,(()=>b(this,null,function*(){this.Rr=null;try{yield this.localStore.collectGarbage(this.garbageCollector)}catch(e){je(e)?N(ea,"Ignoring IndexedDB error during garbage collection: ",e):yield qe(e)}yield this.Ar(3e5)})))}}class rd{constructor(t,e){this.Vr=t,this.params=e}calculateTargetCount(t,e){return this.Vr.dr(t).next((r=>Math.floor(e/100*r)))}nthSequenceNumber(t,e){if(e===0)return C.resolve(vr.ce);const r=new ed(e);return this.Vr.forEachTarget(t,(s=>r.Er(s.sequenceNumber))).next((()=>this.Vr.mr(t,(s=>r.Er(s))))).next((()=>r.maxValue))}removeTargets(t,e,r){return this.Vr.removeTargets(t,e,r)}removeOrphanedDocuments(t,e){return this.Vr.removeOrphanedDocuments(t,e)}collect(t,e){return this.params.cacheSizeCollectionThreshold===-1?(N("LruGarbageCollector","Garbage collection skipped; disabled"),C.resolve(ta)):this.getCacheSize(t).next((r=>r<this.params.cacheSizeCollectionThreshold?(N("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),ta):this.gr(t,e)))}getCacheSize(t){return this.Vr.getCacheSize(t)}gr(t,e){let r,s,o,a,l,h,d;const p=Date.now();return this.calculateTargetCount(t,this.params.percentileToCollect).next((I=>(I>this.params.maximumSequenceNumbersToCollect?(N("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${I}`),s=this.params.maximumSequenceNumbersToCollect):s=I,a=Date.now(),this.nthSequenceNumber(t,s)))).next((I=>(r=I,l=Date.now(),this.removeTargets(t,r,e)))).next((I=>(o=I,h=Date.now(),this.removeOrphanedDocuments(t,r)))).next((I=>(d=Date.now(),Ae()<=z.DEBUG&&N("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-p}ms
	Determined least recently used ${s} in `+(l-a)+`ms
	Removed ${o} targets in `+(h-l)+`ms
	Removed ${I} documents in `+(d-h)+`ms
Total Duration: ${d-p}ms`),C.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:o,documentsRemoved:I}))))}}function sd(n,t){return new rd(n,t)}/**
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
 */class id{constructor(){this.changes=new _e((t=>t.toString()),((t,e)=>t.isEqual(e))),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,_t.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const r=this.changes.get(e);return r!==void 0?C.resolve(r):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
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
 */class od{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}/**
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
 */class ad{constructor(t,e,r,s){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=r,this.indexManager=s}getDocument(t,e){let r=null;return this.documentOverlayCache.getOverlay(t,e).next((s=>(r=s,this.remoteDocumentCache.getEntry(t,e)))).next((s=>(r!==null&&gn(r.mutation,s,Vt.empty(),X.now()),s)))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next((r=>this.getLocalViewOfDocuments(t,r,j()).next((()=>r))))}getLocalViewOfDocuments(t,e,r=j()){const s=de();return this.populateOverlays(t,s,e).next((()=>this.computeViews(t,e,s,r).next((o=>{let a=ln();return o.forEach(((l,h)=>{a=a.insert(l,h.overlayedDocument)})),a}))))}getOverlayedDocuments(t,e){const r=de();return this.populateOverlays(t,r,e).next((()=>this.computeViews(t,e,r,j())))}populateOverlays(t,e,r){const s=[];return r.forEach((o=>{e.has(o)||s.push(o)})),this.documentOverlayCache.getOverlays(t,s).next((o=>{o.forEach(((a,l)=>{e.set(a,l)}))}))}computeViews(t,e,r,s){let o=qt();const a=pn(),l=(function(){return pn()})();return e.forEach(((h,d)=>{const p=r.get(d.key);s.has(d.key)&&(p===void 0||p.mutation instanceof ye)?o=o.insert(d.key,d):p!==void 0?(a.set(d.key,p.mutation.getFieldMask()),gn(p.mutation,d,p.mutation.getFieldMask(),X.now())):a.set(d.key,Vt.empty())})),this.recalculateAndSaveOverlays(t,o).next((h=>(h.forEach(((d,p)=>a.set(d,p))),e.forEach(((d,p)=>{var I;return l.set(d,new od(p,(I=a.get(d))!=null?I:null))})),l)))}recalculateAndSaveOverlays(t,e){const r=pn();let s=new Z(((a,l)=>a-l)),o=j();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next((a=>{for(const l of a)l.keys().forEach((h=>{const d=e.get(h);if(d===null)return;let p=r.get(h)||Vt.empty();p=l.applyToLocalView(d,p),r.set(h,p);const I=(s.get(l.batchId)||j()).add(h);s=s.insert(l.batchId,I)}))})).next((()=>{const a=[],l=s.getReverseIterator();for(;l.hasNext();){const h=l.getNext(),d=h.key,p=h.value,I=lu();p.forEach((w=>{if(!o.has(w)){const V=gu(e.get(w),r.get(w));V!==null&&I.set(w,V),o=o.add(w)}})),a.push(this.documentOverlayCache.saveOverlays(t,d,I))}return C.waitFor(a)})).next((()=>r))}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next((r=>this.recalculateAndSaveOverlays(t,r)))}getDocumentsMatchingQuery(t,e,r,s){return af(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):iu(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,r,s):this.getDocumentsMatchingCollectionQuery(t,e,r,s)}getNextDocuments(t,e,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,r,s).next((o=>{const a=s-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,r.largestBatchId,s-o.size):C.resolve(de());let l=Tn,h=o;return a.next((d=>C.forEach(d,((p,I)=>(l<I.largestBatchId&&(l=I.largestBatchId),o.get(p)?C.resolve():this.remoteDocumentCache.getEntry(t,p).next((w=>{h=h.insert(p,w)}))))).next((()=>this.populateOverlays(t,d,o))).next((()=>this.computeViews(t,h,d,j()))).next((p=>({batchId:l,changes:cu(p)})))))}))}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new O(e)).next((r=>{let s=ln();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s}))}getDocumentsMatchingCollectionGroupQuery(t,e,r,s){const o=e.collectionGroup;let a=ln();return this.indexManager.getCollectionParents(t,o).next((l=>C.forEach(l,(h=>{const d=(function(I,w){return new $e(w,null,I.explicitOrderBy.slice(),I.filters.slice(),I.limit,I.limitType,I.startAt,I.endAt)})(e,h.child(o));return this.getDocumentsMatchingCollectionQuery(t,d,r,s).next((p=>{p.forEach(((I,w)=>{a=a.insert(I,w)}))}))})).next((()=>a))))}getDocumentsMatchingCollectionQuery(t,e,r,s){let o;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,r.largestBatchId).next((a=>(o=a,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,r,o,s)))).next((a=>{o.forEach(((h,d)=>{const p=d.getKey();a.get(p)===null&&(a=a.insert(p,_t.newInvalidDocument(p)))}));let l=ln();return a.forEach(((h,d)=>{const p=o.get(h);p!==void 0&&gn(p.mutation,d,Vt.empty(),X.now()),Sr(e,d)&&(l=l.insert(h,d))})),l}))}}/**
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
 */class ud{constructor(t){this.serializer=t,this.Nr=new Map,this.Br=new Map}getBundleMetadata(t,e){return C.resolve(this.Nr.get(e))}saveBundleMetadata(t,e){return this.Nr.set(e.id,(function(s){return{id:s.id,version:s.version,createTime:Ot(s.createTime)}})(e)),C.resolve()}getNamedQuery(t,e){return C.resolve(this.Br.get(e))}saveNamedQuery(t,e){return this.Br.set(e.name,(function(s){return{name:s.name,query:Jf(s.bundledQuery),readTime:Ot(s.readTime)}})(e)),C.resolve()}}/**
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
 */class cd{constructor(){this.overlays=new Z(O.comparator),this.Lr=new Map}getOverlay(t,e){return C.resolve(this.overlays.get(e))}getOverlays(t,e){const r=de();return C.forEach(e,(s=>this.getOverlay(t,s).next((o=>{o!==null&&r.set(s,o)})))).next((()=>r))}saveOverlays(t,e,r){return r.forEach(((s,o)=>{this.bt(t,e,o)})),C.resolve()}removeOverlaysForBatchId(t,e,r){const s=this.Lr.get(r);return s!==void 0&&(s.forEach((o=>this.overlays=this.overlays.remove(o))),this.Lr.delete(r)),C.resolve()}getOverlaysForCollection(t,e,r){const s=de(),o=e.length+1,a=new O(e.child("")),l=this.overlays.getIteratorFrom(a);for(;l.hasNext();){const h=l.getNext().value,d=h.getKey();if(!e.isPrefixOf(d.path))break;d.path.length===o&&h.largestBatchId>r&&s.set(h.getKey(),h)}return C.resolve(s)}getOverlaysForCollectionGroup(t,e,r,s){let o=new Z(((d,p)=>d-p));const a=this.overlays.getIterator();for(;a.hasNext();){const d=a.getNext().value;if(d.getKey().getCollectionGroup()===e&&d.largestBatchId>r){let p=o.get(d.largestBatchId);p===null&&(p=de(),o=o.insert(d.largestBatchId,p)),p.set(d.getKey(),d)}}const l=de(),h=o.getIterator();for(;h.hasNext()&&(h.getNext().value.forEach(((d,p)=>l.set(d,p))),!(l.size()>=s)););return C.resolve(l)}bt(t,e,r){const s=this.overlays.get(r.key);if(s!==null){const a=this.Lr.get(s.largestBatchId).delete(r.key);this.Lr.set(s.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new Cf(e,r));let o=this.Lr.get(e);o===void 0&&(o=j(),this.Lr.set(e,o)),this.Lr.set(e,o.add(r.key))}}/**
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
 */class ld{constructor(){this.sessionToken=ft.EMPTY_BYTE_STRING}getSessionToken(t){return C.resolve(this.sessionToken)}setSessionToken(t,e){return this.sessionToken=e,C.resolve()}}/**
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
 */class zs{constructor(){this.kr=new at(ct.Kr),this.qr=new at(ct.Ur)}isEmpty(){return this.kr.isEmpty()}addReference(t,e){const r=new ct(t,e);this.kr=this.kr.add(r),this.qr=this.qr.add(r)}$r(t,e){t.forEach((r=>this.addReference(r,e)))}removeReference(t,e){this.Wr(new ct(t,e))}Qr(t,e){t.forEach((r=>this.removeReference(r,e)))}Gr(t){const e=new O(new Q([])),r=new ct(e,t),s=new ct(e,t+1),o=[];return this.qr.forEachInRange([r,s],(a=>{this.Wr(a),o.push(a.key)})),o}zr(){this.kr.forEach((t=>this.Wr(t)))}Wr(t){this.kr=this.kr.delete(t),this.qr=this.qr.delete(t)}jr(t){const e=new O(new Q([])),r=new ct(e,t),s=new ct(e,t+1);let o=j();return this.qr.forEachInRange([r,s],(a=>{o=o.add(a.key)})),o}containsKey(t){const e=new ct(t,0),r=this.kr.firstAfterOrEqual(e);return r!==null&&t.isEqual(r.key)}}class ct{constructor(t,e){this.key=t,this.Hr=e}static Kr(t,e){return O.comparator(t.key,e.key)||q(t.Hr,e.Hr)}static Ur(t,e){return q(t.Hr,e.Hr)||O.comparator(t.key,e.key)}}/**
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
 */class hd{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.Yn=1,this.Jr=new at(ct.Kr)}checkEmpty(t){return C.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,r,s){const o=this.Yn;this.Yn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new Sf(o,e,r,s);this.mutationQueue.push(a);for(const l of s)this.Jr=this.Jr.add(new ct(l.key,o)),this.indexManager.addToCollectionParentIndex(t,l.key.path.popLast());return C.resolve(a)}lookupMutationBatch(t,e){return C.resolve(this.Zr(e))}getNextMutationBatchAfterBatchId(t,e){const r=e+1,s=this.Xr(r),o=s<0?0:s;return C.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return C.resolve(this.mutationQueue.length===0?Os:this.Yn-1)}getAllMutationBatches(t){return C.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const r=new ct(e,0),s=new ct(e,Number.POSITIVE_INFINITY),o=[];return this.Jr.forEachInRange([r,s],(a=>{const l=this.Zr(a.Hr);o.push(l)})),C.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(t,e){let r=new at(q);return e.forEach((s=>{const o=new ct(s,0),a=new ct(s,Number.POSITIVE_INFINITY);this.Jr.forEachInRange([o,a],(l=>{r=r.add(l.Hr)}))})),C.resolve(this.Yr(r))}getAllMutationBatchesAffectingQuery(t,e){const r=e.path,s=r.length+1;let o=r;O.isDocumentKey(o)||(o=o.child(""));const a=new ct(new O(o),0);let l=new at(q);return this.Jr.forEachWhile((h=>{const d=h.key.path;return!!r.isPrefixOf(d)&&(d.length===s&&(l=l.add(h.Hr)),!0)}),a),C.resolve(this.Yr(l))}Yr(t){const e=[];return t.forEach((r=>{const s=this.Zr(r);s!==null&&e.push(s)})),e}removeMutationBatch(t,e){H(this.ei(e.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Jr;return C.forEach(e.mutations,(s=>{const o=new ct(s.key,e.batchId);return r=r.delete(o),this.referenceDelegate.markPotentiallyOrphaned(t,s.key)})).next((()=>{this.Jr=r}))}nr(t){}containsKey(t,e){const r=new ct(e,0),s=this.Jr.firstAfterOrEqual(r);return C.resolve(e.isEqual(s&&s.key))}performConsistencyCheck(t){return this.mutationQueue.length,C.resolve()}ei(t,e){return this.Xr(t)}Xr(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Zr(t){const e=this.Xr(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
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
 */class fd{constructor(t){this.ti=t,this.docs=(function(){return new Z(O.comparator)})(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const r=e.key,s=this.docs.get(r),o=s?s.size:0,a=this.ti(e);return this.docs=this.docs.insert(r,{document:e.mutableCopy(),size:a}),this.size+=a-o,this.indexManager.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const r=this.docs.get(e);return C.resolve(r?r.document.mutableCopy():_t.newInvalidDocument(e))}getEntries(t,e){let r=qt();return e.forEach((s=>{const o=this.docs.get(s);r=r.insert(s,o?o.document.mutableCopy():_t.newInvalidDocument(s))})),C.resolve(r)}getDocumentsMatchingQuery(t,e,r,s){let o=qt();const a=e.path,l=new O(a.child("__id-9223372036854775808__")),h=this.docs.getIteratorFrom(l);for(;h.hasNext();){const{key:d,value:{document:p}}=h.getNext();if(!a.isPrefixOf(d.path))break;d.path.length>a.length+1||Mh(Oh(p),r)<=0||(s.has(p.key)||Sr(e,p))&&(o=o.insert(p.key,p.mutableCopy()))}return C.resolve(o)}getAllFromCollectionGroup(t,e,r,s){L(9500)}ni(t,e){return C.forEach(this.docs,(r=>e(r)))}newChangeBuffer(t){return new dd(this)}getSize(t){return C.resolve(this.size)}}class dd extends id{constructor(t){super(),this.Mr=t}applyChanges(t){const e=[];return this.changes.forEach(((r,s)=>{s.isValidDocument()?e.push(this.Mr.addEntry(t,s)):this.Mr.removeEntry(r)})),C.waitFor(e)}getFromCache(t,e){return this.Mr.getEntry(t,e)}getAllFromCache(t,e){return this.Mr.getEntries(t,e)}}/**
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
 */class md{constructor(t){this.persistence=t,this.ri=new _e((e=>Fs(e)),Us),this.lastRemoteSnapshotVersion=F.min(),this.highestTargetId=0,this.ii=0,this.si=new zs,this.targetCount=0,this.oi=Le._r()}forEachTarget(t,e){return this.ri.forEach(((r,s)=>e(s))),C.resolve()}getLastRemoteSnapshotVersion(t){return C.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return C.resolve(this.ii)}allocateTargetId(t){return this.highestTargetId=this.oi.next(),C.resolve(this.highestTargetId)}setTargetsMetadata(t,e,r){return r&&(this.lastRemoteSnapshotVersion=r),e>this.ii&&(this.ii=e),C.resolve()}lr(t){this.ri.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.oi=new Le(e),this.highestTargetId=e),t.sequenceNumber>this.ii&&(this.ii=t.sequenceNumber)}addTargetData(t,e){return this.lr(e),this.targetCount+=1,C.resolve()}updateTargetData(t,e){return this.lr(e),C.resolve()}removeTargetData(t,e){return this.ri.delete(e.target),this.si.Gr(e.targetId),this.targetCount-=1,C.resolve()}removeTargets(t,e,r){let s=0;const o=[];return this.ri.forEach(((a,l)=>{l.sequenceNumber<=e&&r.get(l.targetId)===null&&(this.ri.delete(a),o.push(this.removeMatchingKeysForTargetId(t,l.targetId)),s++)})),C.waitFor(o).next((()=>s))}getTargetCount(t){return C.resolve(this.targetCount)}getTargetData(t,e){const r=this.ri.get(e)||null;return C.resolve(r)}addMatchingKeys(t,e,r){return this.si.$r(e,r),C.resolve()}removeMatchingKeys(t,e,r){this.si.Qr(e,r);const s=this.persistence.referenceDelegate,o=[];return s&&e.forEach((a=>{o.push(s.markPotentiallyOrphaned(t,a))})),C.waitFor(o)}removeMatchingKeysForTargetId(t,e){return this.si.Gr(e),C.resolve()}getMatchingKeysForTargetId(t,e){const r=this.si.jr(e);return C.resolve(r)}containsKey(t,e){return C.resolve(this.si.containsKey(e))}}/**
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
 */class Du{constructor(t,e){this._i={},this.overlays={},this.ai=new vr(0),this.ui=!1,this.ui=!0,this.ci=new ld,this.referenceDelegate=t(this),this.li=new md(this),this.indexManager=new Xf,this.remoteDocumentCache=(function(s){return new fd(s)})((r=>this.referenceDelegate.hi(r))),this.serializer=new Yf(e),this.Pi=new ud(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ui=!1,Promise.resolve()}get started(){return this.ui}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new cd,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let r=this._i[t.toKey()];return r||(r=new hd(e,this.referenceDelegate),this._i[t.toKey()]=r),r}getGlobalsCache(){return this.ci}getTargetCache(){return this.li}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Pi}runTransaction(t,e,r){N("MemoryPersistence","Starting transaction:",t);const s=new pd(this.ai.next());return this.referenceDelegate.Ti(),r(s).next((o=>this.referenceDelegate.Ii(s).next((()=>o)))).toPromise().then((o=>(s.raiseOnCommittedEvent(),o)))}Ei(t,e){return C.or(Object.values(this._i).map((r=>()=>r.containsKey(t,e))))}}class pd extends Fh{constructor(t){super(),this.currentSequenceNumber=t}}class Gs{constructor(t){this.persistence=t,this.Ri=new zs,this.Ai=null}static Vi(t){return new Gs(t)}get di(){if(this.Ai)return this.Ai;throw L(60996)}addReference(t,e,r){return this.Ri.addReference(r,e),this.di.delete(r.toString()),C.resolve()}removeReference(t,e,r){return this.Ri.removeReference(r,e),this.di.add(r.toString()),C.resolve()}markPotentiallyOrphaned(t,e){return this.di.add(e.toString()),C.resolve()}removeTarget(t,e){this.Ri.Gr(e.targetId).forEach((s=>this.di.add(s.toString())));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(t,e.targetId).next((s=>{s.forEach((o=>this.di.add(o.toString())))})).next((()=>r.removeTargetData(t,e)))}Ti(){this.Ai=new Set}Ii(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return C.forEach(this.di,(r=>{const s=O.fromPath(r);return this.mi(t,s).next((o=>{o||e.removeEntry(s,F.min())}))})).next((()=>(this.Ai=null,e.apply(t))))}updateLimboDocument(t,e){return this.mi(t,e).next((r=>{r?this.di.delete(e.toString()):this.di.add(e.toString())}))}hi(t){return 0}mi(t,e){return C.or([()=>C.resolve(this.Ri.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Ei(t,e)])}}class _r{constructor(t,e){this.persistence=t,this.fi=new _e((r=>qh(r.path)),((r,s)=>r.isEqual(s))),this.garbageCollector=sd(this,e)}static Vi(t,e){return new _r(t,e)}Ti(){}Ii(t){return C.resolve()}forEachTarget(t,e){return this.persistence.getTargetCache().forEachTarget(t,e)}dr(t){const e=this.pr(t);return this.persistence.getTargetCache().getTargetCount(t).next((r=>e.next((s=>r+s))))}pr(t){let e=0;return this.mr(t,(r=>{e++})).next((()=>e))}mr(t,e){return C.forEach(this.fi,((r,s)=>this.wr(t,r,s).next((o=>o?C.resolve():e(s)))))}removeTargets(t,e,r){return this.persistence.getTargetCache().removeTargets(t,e,r)}removeOrphanedDocuments(t,e){let r=0;const s=this.persistence.getRemoteDocumentCache(),o=s.newChangeBuffer();return s.ni(t,(a=>this.wr(t,a,e).next((l=>{l||(r++,o.removeEntry(a,F.min()))})))).next((()=>o.apply(t))).next((()=>r))}markPotentiallyOrphaned(t,e){return this.fi.set(e,t.currentSequenceNumber),C.resolve()}removeTarget(t,e){const r=e.withSequenceNumber(t.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(t,r)}addReference(t,e,r){return this.fi.set(r,t.currentSequenceNumber),C.resolve()}removeReference(t,e,r){return this.fi.set(r,t.currentSequenceNumber),C.resolve()}updateLimboDocument(t,e){return this.fi.set(e,t.currentSequenceNumber),C.resolve()}hi(t){let e=t.key.toString().length;return t.isFoundDocument()&&(e+=er(t.data.value)),e}wr(t,e,r){return C.or([()=>this.persistence.Ei(t,e),()=>this.persistence.getTargetCache().containsKey(t,e),()=>{const s=this.fi.get(e);return C.resolve(s!==void 0&&s>r)}])}getCacheSize(t){return this.persistence.getRemoteDocumentCache().getSize(t)}}/**
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
 */class Hs{constructor(t,e,r,s){this.targetId=t,this.fromCache=e,this.Ts=r,this.Is=s}static Es(t,e){let r=j(),s=j();for(const o of e.docChanges)switch(o.type){case 0:r=r.add(o.doc.key);break;case 1:s=s.add(o.doc.key)}return new Hs(t,e.fromCache,r,s)}}/**
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
 */class gd{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
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
 */class _d{constructor(){this.Rs=!1,this.As=!1,this.Vs=100,this.ds=(function(){return hl()?8:Uh(cl())>0?6:4})()}initialize(t,e){this.fs=t,this.indexManager=e,this.Rs=!0}getDocumentsMatchingQuery(t,e,r,s){const o={result:null};return this.gs(t,e).next((a=>{o.result=a})).next((()=>{if(!o.result)return this.ps(t,e,s,r).next((a=>{o.result=a}))})).next((()=>{if(o.result)return;const a=new gd;return this.ys(t,e,a).next((l=>{if(o.result=l,this.As)return this.ws(t,e,a,l.size)}))})).next((()=>o.result))}ws(t,e,r,s){return r.documentReadCount<this.Vs?(Ae()<=z.DEBUG&&N("QueryEngine","SDK will not create cache indexes for query:",we(e),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),C.resolve()):(Ae()<=z.DEBUG&&N("QueryEngine","Query:",we(e),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.ds*s?(Ae()<=z.DEBUG&&N("QueryEngine","The SDK decides to create cache indexes for query:",we(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,xt(e))):C.resolve())}gs(t,e){if(zo(e))return C.resolve(null);let r=xt(e);return this.indexManager.getIndexType(t,r).next((s=>s===0?null:(e.limit!==null&&s===1&&(e=mr(e,null,"F"),r=xt(e)),this.indexManager.getDocumentsMatchingTarget(t,r).next((o=>{const a=j(...o);return this.fs.getDocuments(t,a).next((l=>this.indexManager.getMinOffset(t,r).next((h=>{const d=this.bs(e,l);return this.Ss(e,d,a,h.readTime)?this.gs(t,mr(e,null,"F")):this.Ds(t,d,e,h)}))))})))))}ps(t,e,r,s){return zo(e)||s.isEqual(F.min())?C.resolve(null):this.fs.getDocuments(t,r).next((o=>{const a=this.bs(e,o);return this.Ss(e,a,r,s)?C.resolve(null):(Ae()<=z.DEBUG&&N("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),we(e)),this.Ds(t,a,e,xh(s,Tn)).next((l=>l)))}))}bs(t,e){let r=new at(au(t));return e.forEach(((s,o)=>{Sr(t,o)&&(r=r.add(o))})),r}Ss(t,e,r,s){if(t.limit===null)return!1;if(r.size!==e.size)return!0;const o=t.limitType==="F"?e.last():e.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(s)>0)}ys(t,e,r){return Ae()<=z.DEBUG&&N("QueryEngine","Using full collection scan to execute query:",we(e)),this.fs.getDocumentsMatchingQuery(t,e,Zt.min(),r)}Ds(t,e,r,s){return this.fs.getDocumentsMatchingQuery(t,r,s).next((o=>(e.forEach((a=>{o=o.insert(a.key,a)})),o)))}}/**
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
 */const Ks="LocalStore",yd=3e8;class Ed{constructor(t,e,r,s){this.persistence=t,this.Cs=e,this.serializer=s,this.vs=new Z(q),this.Fs=new _e((o=>Fs(o)),Us),this.Ms=new Map,this.xs=t.getRemoteDocumentCache(),this.li=t.getTargetCache(),this.Pi=t.getBundleCache(),this.Os(r)}Os(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new ad(this.xs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.xs.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(e=>t.collect(e,this.vs)))}}function Td(n,t,e,r){return new Ed(n,t,e,r)}function Nu(n,t){return b(this,null,function*(){const e=U(n);return yield e.persistence.runTransaction("Handle user change","readonly",(r=>{let s;return e.mutationQueue.getAllMutationBatches(r).next((o=>(s=o,e.Os(t),e.mutationQueue.getAllMutationBatches(r)))).next((o=>{const a=[],l=[];let h=j();for(const d of s){a.push(d.batchId);for(const p of d.mutations)h=h.add(p.key)}for(const d of o){l.push(d.batchId);for(const p of d.mutations)h=h.add(p.key)}return e.localDocuments.getDocuments(r,h).next((d=>({Ns:d,removedBatchIds:a,addedBatchIds:l})))}))}))})}function Id(n,t){const e=U(n);return e.persistence.runTransaction("Acknowledge batch","readwrite-primary",(r=>{const s=t.batch.keys(),o=e.xs.newChangeBuffer({trackRemovals:!0});return(function(l,h,d,p){const I=d.batch,w=I.keys();let V=C.resolve();return w.forEach((k=>{V=V.next((()=>p.getEntry(h,k))).next((M=>{const x=d.docVersions.get(k);H(x!==null,48541),M.version.compareTo(x)<0&&(I.applyToRemoteDocument(M,d),M.isValidDocument()&&(M.setReadTime(d.commitVersion),p.addEntry(M)))}))})),V.next((()=>l.mutationQueue.removeMutationBatch(h,I)))})(e,r,t,o).next((()=>o.apply(r))).next((()=>e.mutationQueue.performConsistencyCheck(r))).next((()=>e.documentOverlayCache.removeOverlaysForBatchId(r,s,t.batch.batchId))).next((()=>e.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,(function(l){let h=j();for(let d=0;d<l.mutationResults.length;++d)l.mutationResults[d].transformResults.length>0&&(h=h.add(l.batch.mutations[d].key));return h})(t)))).next((()=>e.localDocuments.getDocuments(r,s)))}))}function ku(n){const t=U(n);return t.persistence.runTransaction("Get last remote snapshot version","readonly",(e=>t.li.getLastRemoteSnapshotVersion(e)))}function vd(n,t){const e=U(n),r=t.snapshotVersion;let s=e.vs;return e.persistence.runTransaction("Apply remote event","readwrite-primary",(o=>{const a=e.xs.newChangeBuffer({trackRemovals:!0});s=e.vs;const l=[];t.targetChanges.forEach(((p,I)=>{const w=s.get(I);if(!w)return;l.push(e.li.removeMatchingKeys(o,p.removedDocuments,I).next((()=>e.li.addMatchingKeys(o,p.addedDocuments,I))));let V=w.withSequenceNumber(o.currentSequenceNumber);t.targetMismatches.get(I)!==null?V=V.withResumeToken(ft.EMPTY_BYTE_STRING,F.min()).withLastLimboFreeSnapshotVersion(F.min()):p.resumeToken.approximateByteSize()>0&&(V=V.withResumeToken(p.resumeToken,r)),s=s.insert(I,V),(function(M,x,K){return M.resumeToken.approximateByteSize()===0||x.snapshotVersion.toMicroseconds()-M.snapshotVersion.toMicroseconds()>=yd?!0:K.addedDocuments.size+K.modifiedDocuments.size+K.removedDocuments.size>0})(w,V,p)&&l.push(e.li.updateTargetData(o,V))}));let h=qt(),d=j();if(t.documentUpdates.forEach((p=>{t.resolvedLimboDocuments.has(p)&&l.push(e.persistence.referenceDelegate.updateLimboDocument(o,p))})),l.push(Ad(o,a,t.documentUpdates).next((p=>{h=p.Bs,d=p.Ls}))),!r.isEqual(F.min())){const p=e.li.getLastRemoteSnapshotVersion(o).next((I=>e.li.setTargetsMetadata(o,o.currentSequenceNumber,r)));l.push(p)}return C.waitFor(l).next((()=>a.apply(o))).next((()=>e.localDocuments.getLocalViewOfDocuments(o,h,d))).next((()=>h))})).then((o=>(e.vs=s,o)))}function Ad(n,t,e){let r=j(),s=j();return e.forEach((o=>r=r.add(o))),t.getEntries(n,r).next((o=>{let a=qt();return e.forEach(((l,h)=>{const d=o.get(l);h.isFoundDocument()!==d.isFoundDocument()&&(s=s.add(l)),h.isNoDocument()&&h.version.isEqual(F.min())?(t.removeEntry(l,h.readTime),a=a.insert(l,h)):!d.isValidDocument()||h.version.compareTo(d.version)>0||h.version.compareTo(d.version)===0&&d.hasPendingWrites?(t.addEntry(h),a=a.insert(l,h)):N(Ks,"Ignoring outdated watch update for ",l,". Current version:",d.version," Watch version:",h.version)})),{Bs:a,Ls:s}}))}function wd(n,t){const e=U(n);return e.persistence.runTransaction("Get next mutation batch","readonly",(r=>(t===void 0&&(t=Os),e.mutationQueue.getNextMutationBatchAfterBatchId(r,t))))}function Rd(n,t){const e=U(n);return e.persistence.runTransaction("Allocate target","readwrite",(r=>{let s;return e.li.getTargetData(r,t).next((o=>o?(s=o,C.resolve(s)):e.li.allocateTargetId(r).next((a=>(s=new Wt(t,a,"TargetPurposeListen",r.currentSequenceNumber),e.li.addTargetData(r,s).next((()=>s)))))))})).then((r=>{const s=e.vs.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(e.vs=e.vs.insert(r.targetId,r),e.Fs.set(t,r.targetId)),r}))}function Ss(n,t,e){return b(this,null,function*(){const r=U(n),s=r.vs.get(t),o=e?"readwrite":"readwrite-primary";try{e||(yield r.persistence.runTransaction("Release target",o,(a=>r.persistence.referenceDelegate.removeTarget(a,s))))}catch(a){if(!je(a))throw a;N(Ks,`Failed to update sequence numbers for target ${t}: ${a}`)}r.vs=r.vs.remove(t),r.Fs.delete(s.target)})}function ra(n,t,e){const r=U(n);let s=F.min(),o=j();return r.persistence.runTransaction("Execute query","readwrite",(a=>(function(h,d,p){const I=U(h),w=I.Fs.get(p);return w!==void 0?C.resolve(I.vs.get(w)):I.li.getTargetData(d,p)})(r,a,xt(t)).next((l=>{if(l)return s=l.lastLimboFreeSnapshotVersion,r.li.getMatchingKeysForTargetId(a,l.targetId).next((h=>{o=h}))})).next((()=>r.Cs.getDocumentsMatchingQuery(a,t,e?s:F.min(),e?o:j()))).next((l=>(Sd(r,lf(t),l),{documents:l,ks:o})))))}function Sd(n,t,e){let r=n.Ms.get(t)||F.min();e.forEach(((s,o)=>{o.readTime.compareTo(r)>0&&(r=o.readTime)})),n.Ms.set(t,r)}class sa{constructor(){this.activeTargetIds=gf()}Qs(t){this.activeTargetIds=this.activeTargetIds.add(t)}Gs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Ws(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class Cd{constructor(){this.vo=new sa,this.Fo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,r){}addLocalQueryTarget(t,e=!0){return e&&this.vo.Qs(t),this.Fo[t]||"not-current"}updateQueryState(t,e,r){this.Fo[t]=e}removeLocalQueryTarget(t){this.vo.Gs(t)}isLocalQueryTarget(t){return this.vo.activeTargetIds.has(t)}clearQueryState(t){delete this.Fo[t]}getAllActiveQueryTargets(){return this.vo.activeTargetIds}isActiveQueryTarget(t){return this.vo.activeTargetIds.has(t)}start(){return this.vo=new sa,Promise.resolve()}handleUserChange(t,e,r){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
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
 */class Vd{Mo(t){}shutdown(){}}/**
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
 */const ia="ConnectivityMonitor";class oa{constructor(){this.xo=()=>this.Oo(),this.No=()=>this.Bo(),this.Lo=[],this.ko()}Mo(t){this.Lo.push(t)}shutdown(){window.removeEventListener("online",this.xo),window.removeEventListener("offline",this.No)}ko(){window.addEventListener("online",this.xo),window.addEventListener("offline",this.No)}Oo(){N(ia,"Network connectivity changed: AVAILABLE");for(const t of this.Lo)t(0)}Bo(){N(ia,"Network connectivity changed: UNAVAILABLE");for(const t of this.Lo)t(1)}static v(){return typeof window!="undefined"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Xn=null;function Cs(){return Xn===null?Xn=(function(){return 268435456+Math.round(2147483648*Math.random())})():Xn++,"0x"+Xn.toString(16)}/**
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
 */const cs="RestConnection",Pd={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class bd{get Ko(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.qo=e+"://"+t.host,this.Uo=`projects/${r}/databases/${s}`,this.$o=this.databaseId.database===hr?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Wo(t,e,r,s,o){const a=Cs(),l=this.Qo(t,e.toUriEncodedString());N(cs,`Sending RPC '${t}' ${a}:`,l,r);const h={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.$o};this.Go(h,s,o);const{host:d}=new URL(l),p=Ns(d);return this.zo(t,l,h,r,p).then((I=>(N(cs,`Received RPC '${t}' ${a}: `,I),I)),(I=>{throw ke(cs,`RPC '${t}' ${a} failed with error: `,I,"url: ",l,"request:",r),I}))}jo(t,e,r,s,o,a){return this.Wo(t,e,r,s,o)}Go(t,e,r){t["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+Be})(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach(((s,o)=>t[o]=s)),r&&r.headers.forEach(((s,o)=>t[o]=s))}Qo(t,e){const r=Pd[t];let s=`${this.qo}/v1/${e}:${r}`;return this.databaseInfo.apiKey&&(s=`${s}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),s}terminate(){}}/**
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
 */class Dd{constructor(t){this.Ho=t.Ho,this.Jo=t.Jo}Zo(t){this.Xo=t}Yo(t){this.e_=t}t_(t){this.n_=t}onMessage(t){this.r_=t}close(){this.Jo()}send(t){this.Ho(t)}i_(){this.Xo()}s_(){this.e_()}o_(t){this.n_(t)}__(t){this.r_(t)}}/**
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
 */const pt="WebChannelConnection",un=(n,t,e)=>{n.listen(t,(r=>{try{e(r)}catch(s){setTimeout((()=>{throw s}),0)}}))};class Ve extends bd{constructor(t){super(t),this.a_=[],this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}static u_(){if(!Ve.c_){const t=Ma();un(t,Oa.STAT_EVENT,(e=>{e.stat===ps.PROXY?N(pt,"STAT_EVENT: detected buffering proxy"):e.stat===ps.NOPROXY&&N(pt,"STAT_EVENT: detected no buffering proxy")})),Ve.c_=!0}}zo(t,e,r,s,o){const a=Cs();return new Promise(((l,h)=>{const d=new ka;d.setWithCredentials(!0),d.listenOnce(xa.COMPLETE,(()=>{try{switch(d.getLastErrorCode()){case tr.NO_ERROR:const I=d.getResponseJson();N(pt,`XHR for RPC '${t}' ${a} received:`,JSON.stringify(I)),l(I);break;case tr.TIMEOUT:N(pt,`RPC '${t}' ${a} timed out`),h(new D(S.DEADLINE_EXCEEDED,"Request time out"));break;case tr.HTTP_ERROR:const w=d.getStatus();if(N(pt,`RPC '${t}' ${a} failed with status:`,w,"response text:",d.getResponseText()),w>0){let V=d.getResponseJson();Array.isArray(V)&&(V=V[0]);const k=V==null?void 0:V.error;if(k&&k.status&&k.message){const M=(function(K){const G=K.toLowerCase().replace(/_/g,"-");return Object.values(S).indexOf(G)>=0?G:S.UNKNOWN})(k.status);h(new D(M,k.message))}else h(new D(S.UNKNOWN,"Server responded with status "+d.getStatus()))}else h(new D(S.UNAVAILABLE,"Connection failed."));break;default:L(9055,{l_:t,streamId:a,h_:d.getLastErrorCode(),P_:d.getLastError()})}}finally{N(pt,`RPC '${t}' ${a} completed.`)}}));const p=JSON.stringify(s);N(pt,`RPC '${t}' ${a} sending request:`,s),d.send(e,"POST",p,r,15)}))}T_(t,e,r){const s=Cs(),o=[this.qo,"/","google.firestore.v1.Firestore","/",t,"/channel"],a=this.createWebChannelTransport(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(l.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Go(l.initMessageHeaders,e,r),l.encodeInitMessageHeaders=!0;const d=o.join("");N(pt,`Creating RPC '${t}' stream ${s}: ${d}`,l);const p=a.createWebChannel(d,l);this.I_(p);let I=!1,w=!1;const V=new Dd({Ho:k=>{w?N(pt,`Not sending because RPC '${t}' stream ${s} is closed:`,k):(I||(N(pt,`Opening RPC '${t}' stream ${s} transport.`),p.open(),I=!0),N(pt,`RPC '${t}' stream ${s} sending:`,k),p.send(k))},Jo:()=>p.close()});return un(p,cn.EventType.OPEN,(()=>{w||(N(pt,`RPC '${t}' stream ${s} transport opened.`),V.i_())})),un(p,cn.EventType.CLOSE,(()=>{w||(w=!0,N(pt,`RPC '${t}' stream ${s} transport closed`),V.o_(),this.E_(p))})),un(p,cn.EventType.ERROR,(k=>{w||(w=!0,ke(pt,`RPC '${t}' stream ${s} transport errored. Name:`,k.name,"Message:",k.message),V.o_(new D(S.UNAVAILABLE,"The operation could not be completed")))})),un(p,cn.EventType.MESSAGE,(k=>{var M;if(!w){const x=k.data[0];H(!!x,16349);const K=x,G=(K==null?void 0:K.error)||((M=K[0])==null?void 0:M.error);if(G){N(pt,`RPC '${t}' stream ${s} received error:`,G);const Y=G.status;let Tt=(function(E){const m=nt[E];if(m!==void 0)return Eu(m)})(Y),At=G.message;Tt===void 0&&(Tt=S.INTERNAL,At="Unknown error status: "+Y+" with message "+G.message),w=!0,V.o_(new D(Tt,At)),p.close()}else N(pt,`RPC '${t}' stream ${s} received:`,x),V.__(x)}})),Ve.u_(),setTimeout((()=>{V.s_()}),0),V}terminate(){this.a_.forEach((t=>t.close())),this.a_=[]}I_(t){this.a_.push(t)}E_(t){this.a_=this.a_.filter((e=>e===t))}Go(t,e,r){super.Go(t,e,r),this.databaseInfo.apiKey&&(t["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return La()}}/**
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
 */function Nd(n){return new Ve(n)}function ls(){return typeof document!="undefined"?document:null}/**
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
 */function br(n){return new Mf(n,!0)}/**
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
 */Ve.c_=!1;class xu{constructor(t,e,r=1e3,s=1.5,o=6e4){this.Ci=t,this.timerId=e,this.R_=r,this.A_=s,this.V_=o,this.d_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.d_=0}g_(){this.d_=this.V_}p_(t){this.cancel();const e=Math.floor(this.d_+this.y_()),r=Math.max(0,Date.now()-this.f_),s=Math.max(0,e-r);s>0&&N("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.d_} ms, delay with jitter: ${e} ms, last attempt: ${r} ms ago)`),this.m_=this.Ci.enqueueAfterDelay(this.timerId,s,(()=>(this.f_=Date.now(),t()))),this.d_*=this.A_,this.d_<this.R_&&(this.d_=this.R_),this.d_>this.V_&&(this.d_=this.V_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.d_}}/**
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
 */const aa="PersistentStream";class Ou{constructor(t,e,r,s,o,a,l,h){this.Ci=t,this.b_=r,this.S_=s,this.connection=o,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=l,this.listener=h,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new xu(t,e)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}stop(){return b(this,null,function*(){this.x_()&&(yield this.close(0))})}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Ci.enqueueAfterDelay(this.b_,6e4,(()=>this.k_())))}K_(t){this.q_(),this.stream.send(t)}k_(){return b(this,null,function*(){if(this.O_())return this.close(0)})}q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}close(t,e){return b(this,null,function*(){this.q_(),this.U_(),this.M_.cancel(),this.D_++,t!==4?this.M_.reset():e&&e.code===S.RESOURCE_EXHAUSTED?(Bt(e.toString()),Bt("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):e&&e.code===S.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.W_(),this.stream.close(),this.stream=null),this.state=t,yield this.listener.t_(e)})}W_(){}auth(){this.state=1;const t=this.Q_(this.D_),e=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([r,s])=>{this.D_===e&&this.G_(r,s)}),(r=>{t((()=>{const s=new D(S.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(s)}))}))}G_(t,e){const r=this.Q_(this.D_);this.stream=this.j_(t,e),this.stream.Zo((()=>{r((()=>this.listener.Zo()))})),this.stream.Yo((()=>{r((()=>(this.state=2,this.v_=this.Ci.enqueueAfterDelay(this.S_,1e4,(()=>(this.O_()&&(this.state=3),Promise.resolve()))),this.listener.Yo())))})),this.stream.t_((s=>{r((()=>this.z_(s)))})),this.stream.onMessage((s=>{r((()=>++this.F_==1?this.H_(s):this.onNext(s)))}))}N_(){this.state=5,this.M_.p_((()=>b(this,null,function*(){this.state=0,this.start()})))}z_(t){return N(aa,`close with error: ${t}`),this.stream=null,this.close(4,t)}Q_(t){return e=>{this.Ci.enqueueAndForget((()=>this.D_===t?e():(N(aa,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class kd extends Ou{constructor(t,e,r,s,o,a){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,r,s,a),this.serializer=o}j_(t,e){return this.connection.T_("Listen",t,e)}H_(t){return this.onNext(t)}onNext(t){this.M_.reset();const e=Uf(this.serializer,t),r=(function(o){if(!("targetChange"in o))return F.min();const a=o.targetChange;return a.targetIds&&a.targetIds.length?F.min():a.readTime?Ot(a.readTime):F.min()})(t);return this.listener.J_(e,r)}Z_(t){const e={};e.database=Rs(this.serializer),e.addTarget=(function(o,a){let l;const h=a.target;if(l=Ts(h)?{documents:jf(o,h)}:{query:$f(o,h).ft},l.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){l.resumeToken=vu(o,a.resumeToken);const d=vs(o,a.expectedCount);d!==null&&(l.expectedCount=d)}else if(a.snapshotVersion.compareTo(F.min())>0){l.readTime=gr(o,a.snapshotVersion.toTimestamp());const d=vs(o,a.expectedCount);d!==null&&(l.expectedCount=d)}return l})(this.serializer,t);const r=Gf(this.serializer,t);r&&(e.labels=r),this.K_(e)}X_(t){const e={};e.database=Rs(this.serializer),e.removeTarget=t,this.K_(e)}}class xd extends Ou{constructor(t,e,r,s,o,a){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,r,s,a),this.serializer=o}get Y_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}W_(){this.Y_&&this.ea([])}j_(t,e){return this.connection.T_("Write",t,e)}H_(t){return H(!!t.streamToken,31322),this.lastStreamToken=t.streamToken,H(!t.writeResults||t.writeResults.length===0,55816),this.listener.ta()}onNext(t){H(!!t.streamToken,12678),this.lastStreamToken=t.streamToken,this.M_.reset();const e=qf(t.writeResults,t.commitTime),r=Ot(t.commitTime);return this.listener.na(r,e)}ra(){const t={};t.database=Rs(this.serializer),this.K_(t)}ea(t){const e={streamToken:this.lastStreamToken,writes:t.map((r=>Bf(this.serializer,r)))};this.K_(e)}}/**
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
 */class Od{}class Md extends Od{constructor(t,e,r,s){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=r,this.serializer=s,this.ia=!1}sa(){if(this.ia)throw new D(S.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(t,e,r,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([o,a])=>this.connection.Wo(t,As(e,r),s,o,a))).catch((o=>{throw o.name==="FirebaseError"?(o.code===S.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new D(S.UNKNOWN,o.toString())}))}jo(t,e,r,s,o){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([a,l])=>this.connection.jo(t,As(e,r),s,a,l,o))).catch((a=>{throw a.name==="FirebaseError"?(a.code===S.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new D(S.UNKNOWN,a.toString())}))}terminate(){this.ia=!0,this.connection.terminate()}}function Ld(n,t,e,r){return new Md(n,t,e,r)}class Fd{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve()))))}ha(t){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.ca("Offline")))}set(t){this.Pa(),this.oa=0,t==="Online"&&(this.aa=!1),this.ca(t)}ca(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}la(t){const e=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(Bt(e),this.aa=!1):N("OnlineStateTracker",e)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
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
 */const pe="RemoteStore";class Ud{constructor(t,e,r,s,o){this.localStore=t,this.datastore=e,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.Ra=[],this.Aa=o,this.Aa.Mo((a=>{r.enqueueAndForget((()=>b(this,null,function*(){Ee(this)&&(N(pe,"Restarting streams for network reachability change."),yield(function(h){return b(this,null,function*(){const d=U(h);d.Ea.add(4),yield Dn(d),d.Va.set("Unknown"),d.Ea.delete(4),yield Dr(d)})})(this))})))})),this.Va=new Fd(r,s)}}function Dr(n){return b(this,null,function*(){if(Ee(n))for(const t of n.Ra)yield t(!0)})}function Dn(n){return b(this,null,function*(){for(const t of n.Ra)yield t(!1)})}function Mu(n,t){const e=U(n);e.Ia.has(t.targetId)||(e.Ia.set(t.targetId,t),Js(e)?Ys(e):ze(e).O_()&&Qs(e,t))}function Ws(n,t){const e=U(n),r=ze(e);e.Ia.delete(t),r.O_()&&Lu(e,t),e.Ia.size===0&&(r.O_()?r.L_():Ee(e)&&e.Va.set("Unknown"))}function Qs(n,t){if(n.da.$e(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(F.min())>0){const e=n.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(e)}ze(n).Z_(t)}function Lu(n,t){n.da.$e(t),ze(n).X_(t)}function Ys(n){n.da=new Nf({getRemoteKeysForTarget:t=>n.remoteSyncer.getRemoteKeysForTarget(t),At:t=>n.Ia.get(t)||null,ht:()=>n.datastore.serializer.databaseId}),ze(n).start(),n.Va.ua()}function Js(n){return Ee(n)&&!ze(n).x_()&&n.Ia.size>0}function Ee(n){return U(n).Ea.size===0}function Fu(n){n.da=void 0}function Bd(n){return b(this,null,function*(){n.Va.set("Online")})}function qd(n){return b(this,null,function*(){n.Ia.forEach(((t,e)=>{Qs(n,t)}))})}function jd(n,t){return b(this,null,function*(){Fu(n),Js(n)?(n.Va.ha(t),Ys(n)):n.Va.set("Unknown")})}function $d(n,t,e){return b(this,null,function*(){if(n.Va.set("Online"),t instanceof Iu&&t.state===2&&t.cause)try{yield(function(s,o){return b(this,null,function*(){const a=o.cause;for(const l of o.targetIds)s.Ia.has(l)&&(yield s.remoteSyncer.rejectListen(l,a),s.Ia.delete(l),s.da.removeTarget(l))})})(n,t)}catch(r){N(pe,"Failed to remove targets %s: %s ",t.targetIds.join(","),r),yield yr(n,r)}else if(t instanceof sr?n.da.Xe(t):t instanceof Tu?n.da.st(t):n.da.tt(t),!e.isEqual(F.min()))try{const r=yield ku(n.localStore);e.compareTo(r)>=0&&(yield(function(o,a){const l=o.da.Tt(a);return l.targetChanges.forEach(((h,d)=>{if(h.resumeToken.approximateByteSize()>0){const p=o.Ia.get(d);p&&o.Ia.set(d,p.withResumeToken(h.resumeToken,a))}})),l.targetMismatches.forEach(((h,d)=>{const p=o.Ia.get(h);if(!p)return;o.Ia.set(h,p.withResumeToken(ft.EMPTY_BYTE_STRING,p.snapshotVersion)),Lu(o,h);const I=new Wt(p.target,h,d,p.sequenceNumber);Qs(o,I)})),o.remoteSyncer.applyRemoteEvent(l)})(n,e))}catch(r){N(pe,"Failed to raise snapshot:",r),yield yr(n,r)}})}function yr(n,t,e){return b(this,null,function*(){if(!je(t))throw t;n.Ea.add(1),yield Dn(n),n.Va.set("Offline"),e||(e=()=>ku(n.localStore)),n.asyncQueue.enqueueRetryable((()=>b(null,null,function*(){N(pe,"Retrying IndexedDB access"),yield e(),n.Ea.delete(1),yield Dr(n)})))})}function Uu(n,t){return t().catch((e=>yr(n,e,t)))}function Nr(n){return b(this,null,function*(){const t=U(n),e=re(t);let r=t.Ta.length>0?t.Ta[t.Ta.length-1].batchId:Os;for(;zd(t);)try{const s=yield wd(t.localStore,r);if(s===null){t.Ta.length===0&&e.L_();break}r=s.batchId,Gd(t,s)}catch(s){yield yr(t,s)}Bu(t)&&qu(t)})}function zd(n){return Ee(n)&&n.Ta.length<10}function Gd(n,t){n.Ta.push(t);const e=re(n);e.O_()&&e.Y_&&e.ea(t.mutations)}function Bu(n){return Ee(n)&&!re(n).x_()&&n.Ta.length>0}function qu(n){re(n).start()}function Hd(n){return b(this,null,function*(){re(n).ra()})}function Kd(n){return b(this,null,function*(){const t=re(n);for(const e of n.Ta)t.ea(e.mutations)})}function Wd(n,t,e){return b(this,null,function*(){const r=n.Ta.shift(),s=qs.from(r,t,e);yield Uu(n,(()=>n.remoteSyncer.applySuccessfulWrite(s))),yield Nr(n)})}function Qd(n,t){return b(this,null,function*(){t&&re(n).Y_&&(yield(function(r,s){return b(this,null,function*(){if((function(a){return Pf(a)&&a!==S.ABORTED})(s.code)){const o=r.Ta.shift();re(r).B_(),yield Uu(r,(()=>r.remoteSyncer.rejectFailedWrite(o.batchId,s))),yield Nr(r)}})})(n,t)),Bu(n)&&qu(n)})}function ua(n,t){return b(this,null,function*(){const e=U(n);e.asyncQueue.verifyOperationInProgress(),N(pe,"RemoteStore received new credentials");const r=Ee(e);e.Ea.add(3),yield Dn(e),r&&e.Va.set("Unknown"),yield e.remoteSyncer.handleCredentialChange(t),e.Ea.delete(3),yield Dr(e)})}function Yd(n,t){return b(this,null,function*(){const e=U(n);t?(e.Ea.delete(2),yield Dr(e)):t||(e.Ea.add(2),yield Dn(e),e.Va.set("Unknown"))})}function ze(n){return n.ma||(n.ma=(function(e,r,s){const o=U(e);return o.sa(),new kd(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,s)})(n.datastore,n.asyncQueue,{Zo:Bd.bind(null,n),Yo:qd.bind(null,n),t_:jd.bind(null,n),J_:$d.bind(null,n)}),n.Ra.push((t=>b(null,null,function*(){t?(n.ma.B_(),Js(n)?Ys(n):n.Va.set("Unknown")):(yield n.ma.stop(),Fu(n))})))),n.ma}function re(n){return n.fa||(n.fa=(function(e,r,s){const o=U(e);return o.sa(),new xd(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,s)})(n.datastore,n.asyncQueue,{Zo:()=>Promise.resolve(),Yo:Hd.bind(null,n),t_:Qd.bind(null,n),ta:Kd.bind(null,n),na:Wd.bind(null,n)}),n.Ra.push((t=>b(null,null,function*(){t?(n.fa.B_(),yield Nr(n)):(yield n.fa.stop(),n.Ta.length>0&&(N(pe,`Stopping write stream with ${n.Ta.length} pending writes`),n.Ta=[]))})))),n.fa}/**
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
 */class Xs{constructor(t,e,r,s,o){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=r,this.op=s,this.removalCallback=o,this.deferred=new Jt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((a=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(t,e,r,s,o){const a=Date.now()+r,l=new Xs(t,e,a,s,o);return l.start(r),l}start(t){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new D(S.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((t=>this.deferred.resolve(t)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Zs(n,t){if(Bt("AsyncQueue",`${t}: ${n}`),je(n))return new D(S.UNAVAILABLE,`${t}: ${n}`);throw n}/**
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
 */class Pe{static emptySet(t){return new Pe(t.comparator)}constructor(t){this.comparator=t?(e,r)=>t(e,r)||O.comparator(e.key,r.key):(e,r)=>O.comparator(e.key,r.key),this.keyedMap=ln(),this.sortedSet=new Z(this.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal(((e,r)=>(t(e),!1)))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof Pe)||this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),r=t.sortedSet.getIterator();for(;e.hasNext();){const s=e.getNext().key,o=r.getNext().key;if(!s.isEqual(o))return!1}return!0}toString(){const t=[];return this.forEach((e=>{t.push(e.toString())})),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,e){const r=new Pe;return r.comparator=this.comparator,r.keyedMap=t,r.sortedSet=e,r}}/**
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
 */class ca{constructor(){this.ga=new Z(O.comparator)}track(t){const e=t.doc.key,r=this.ga.get(e);r?t.type!==0&&r.type===3?this.ga=this.ga.insert(e,t):t.type===3&&r.type!==1?this.ga=this.ga.insert(e,{type:r.type,doc:t.doc}):t.type===2&&r.type===2?this.ga=this.ga.insert(e,{type:2,doc:t.doc}):t.type===2&&r.type===0?this.ga=this.ga.insert(e,{type:0,doc:t.doc}):t.type===1&&r.type===0?this.ga=this.ga.remove(e):t.type===1&&r.type===2?this.ga=this.ga.insert(e,{type:1,doc:r.doc}):t.type===0&&r.type===1?this.ga=this.ga.insert(e,{type:2,doc:t.doc}):L(63341,{Vt:t,pa:r}):this.ga=this.ga.insert(e,t)}ya(){const t=[];return this.ga.inorderTraversal(((e,r)=>{t.push(r)})),t}}class Fe{constructor(t,e,r,s,o,a,l,h,d){this.query=t,this.docs=e,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=o,this.fromCache=a,this.syncStateChanged=l,this.excludesMetadataChanges=h,this.hasCachedResults=d}static fromInitialDocuments(t,e,r,s,o){const a=[];return e.forEach((l=>{a.push({type:0,doc:l})})),new Fe(t,e,Pe.emptySet(e),a,r,s,!0,!1,o)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&Rr(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,r=t.docChanges;if(e.length!==r.length)return!1;for(let s=0;s<e.length;s++)if(e[s].type!==r[s].type||!e[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class Jd{constructor(){this.wa=void 0,this.ba=[]}Sa(){return this.ba.some((t=>t.Da()))}}class Xd{constructor(){this.queries=la(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(e,r){const s=U(e),o=s.queries;s.queries=la(),o.forEach(((a,l)=>{for(const h of l.ba)h.onError(r)}))})(this,new D(S.ABORTED,"Firestore shutting down"))}}function la(){return new _e((n=>ou(n)),Rr)}function Zd(n,t){return b(this,null,function*(){const e=U(n);let r=3;const s=t.query;let o=e.queries.get(s);o?!o.Sa()&&t.Da()&&(r=2):(o=new Jd,r=t.Da()?0:1);try{switch(r){case 0:o.wa=yield e.onListen(s,!0);break;case 1:o.wa=yield e.onListen(s,!1);break;case 2:yield e.onFirstRemoteStoreListen(s)}}catch(a){const l=Zs(a,`Initialization of query '${we(t.query)}' failed`);return void t.onError(l)}e.queries.set(s,o),o.ba.push(t),t.va(e.onlineState),o.wa&&t.Fa(o.wa)&&ti(e)})}function tm(n,t){return b(this,null,function*(){const e=U(n),r=t.query;let s=3;const o=e.queries.get(r);if(o){const a=o.ba.indexOf(t);a>=0&&(o.ba.splice(a,1),o.ba.length===0?s=t.Da()?0:1:!o.Sa()&&t.Da()&&(s=2))}switch(s){case 0:return e.queries.delete(r),e.onUnlisten(r,!0);case 1:return e.queries.delete(r),e.onUnlisten(r,!1);case 2:return e.onLastRemoteStoreUnlisten(r);default:return}})}function em(n,t){const e=U(n);let r=!1;for(const s of t){const o=s.query,a=e.queries.get(o);if(a){for(const l of a.ba)l.Fa(s)&&(r=!0);a.wa=s}}r&&ti(e)}function nm(n,t,e){const r=U(n),s=r.queries.get(t);if(s)for(const o of s.ba)o.onError(e);r.queries.delete(t)}function ti(n){n.Ca.forEach((t=>{t.next()}))}var Vs,ha;(ha=Vs||(Vs={})).Ma="default",ha.Cache="cache";class rm{constructor(t,e,r){this.query=t,this.xa=e,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=r||{}}Fa(t){if(!this.options.includeMetadataChanges){const r=[];for(const s of t.docChanges)s.type!==3&&r.push(s);t=new Fe(t.query,t.docs,t.oldDocs,r,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.Oa?this.Ba(t)&&(this.xa.next(t),e=!0):this.La(t,this.onlineState)&&(this.ka(t),e=!0),this.Na=t,e}onError(t){this.xa.error(t)}va(t){this.onlineState=t;let e=!1;return this.Na&&!this.Oa&&this.La(this.Na,t)&&(this.ka(this.Na),e=!0),e}La(t,e){if(!t.fromCache||!this.Da())return!0;const r=e!=="Offline";return(!this.options.Ka||!r)&&(!t.docs.isEmpty()||t.hasCachedResults||e==="Offline")}Ba(t){if(t.docChanges.length>0)return!0;const e=this.Na&&this.Na.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&this.options.includeMetadataChanges===!0}ka(t){t=Fe.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.Oa=!0,this.xa.next(t)}Da(){return this.options.source!==Vs.Cache}}/**
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
 */class ju{constructor(t){this.key=t}}class $u{constructor(t){this.key=t}}class sm{constructor(t,e){this.query=t,this.Za=e,this.Xa=null,this.hasCachedResults=!1,this.current=!1,this.Ya=j(),this.mutatedKeys=j(),this.eu=au(t),this.tu=new Pe(this.eu)}get nu(){return this.Za}ru(t,e){const r=e?e.iu:new ca,s=e?e.tu:this.tu;let o=e?e.mutatedKeys:this.mutatedKeys,a=s,l=!1;const h=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,d=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(t.inorderTraversal(((p,I)=>{const w=s.get(p),V=Sr(this.query,I)?I:null,k=!!w&&this.mutatedKeys.has(w.key),M=!!V&&(V.hasLocalMutations||this.mutatedKeys.has(V.key)&&V.hasCommittedMutations);let x=!1;w&&V?w.data.isEqual(V.data)?k!==M&&(r.track({type:3,doc:V}),x=!0):this.su(w,V)||(r.track({type:2,doc:V}),x=!0,(h&&this.eu(V,h)>0||d&&this.eu(V,d)<0)&&(l=!0)):!w&&V?(r.track({type:0,doc:V}),x=!0):w&&!V&&(r.track({type:1,doc:w}),x=!0,(h||d)&&(l=!0)),x&&(V?(a=a.add(V),o=M?o.add(p):o.delete(p)):(a=a.delete(p),o=o.delete(p)))})),this.query.limit!==null)for(;a.size>this.query.limit;){const p=this.query.limitType==="F"?a.last():a.first();a=a.delete(p.key),o=o.delete(p.key),r.track({type:1,doc:p})}return{tu:a,iu:r,Ss:l,mutatedKeys:o}}su(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,r,s){const o=this.tu;this.tu=t.tu,this.mutatedKeys=t.mutatedKeys;const a=t.iu.ya();a.sort(((p,I)=>(function(V,k){const M=x=>{switch(x){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return L(20277,{Vt:x})}};return M(V)-M(k)})(p.type,I.type)||this.eu(p.doc,I.doc))),this.ou(r),s=s!=null?s:!1;const l=e&&!s?this._u():[],h=this.Ya.size===0&&this.current&&!s?1:0,d=h!==this.Xa;return this.Xa=h,a.length!==0||d?{snapshot:new Fe(this.query,t.tu,o,a,t.mutatedKeys,h===0,d,!1,!!r&&r.resumeToken.approximateByteSize()>0),au:l}:{au:l}}va(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new ca,mutatedKeys:this.mutatedKeys,Ss:!1},!1)):{au:[]}}uu(t){return!this.Za.has(t)&&!!this.tu.has(t)&&!this.tu.get(t).hasLocalMutations}ou(t){t&&(t.addedDocuments.forEach((e=>this.Za=this.Za.add(e))),t.modifiedDocuments.forEach((e=>{})),t.removedDocuments.forEach((e=>this.Za=this.Za.delete(e))),this.current=t.current)}_u(){if(!this.current)return[];const t=this.Ya;this.Ya=j(),this.tu.forEach((r=>{this.uu(r.key)&&(this.Ya=this.Ya.add(r.key))}));const e=[];return t.forEach((r=>{this.Ya.has(r)||e.push(new $u(r))})),this.Ya.forEach((r=>{t.has(r)||e.push(new ju(r))})),e}cu(t){this.Za=t.ks,this.Ya=j();const e=this.ru(t.documents);return this.applyChanges(e,!0)}lu(){return Fe.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Xa===0,this.hasCachedResults)}}const ei="SyncEngine";class im{constructor(t,e,r){this.query=t,this.targetId=e,this.view=r}}class om{constructor(t){this.key=t,this.hu=!1}}class am{constructor(t,e,r,s,o,a){this.localStore=t,this.remoteStore=e,this.eventManager=r,this.sharedClientState=s,this.currentUser=o,this.maxConcurrentLimboResolutions=a,this.Pu={},this.Tu=new _e((l=>ou(l)),Rr),this.Iu=new Map,this.Eu=new Set,this.Ru=new Z(O.comparator),this.Au=new Map,this.Vu=new zs,this.du={},this.mu=new Map,this.fu=Le.ar(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}function um(n,t,e=!0){return b(this,null,function*(){const r=Qu(n);let s;const o=r.Tu.get(t);return o?(r.sharedClientState.addLocalQueryTarget(o.targetId),s=o.view.lu()):s=yield zu(r,t,e,!0),s})}function cm(n,t){return b(this,null,function*(){const e=Qu(n);yield zu(e,t,!0,!1)})}function zu(n,t,e,r){return b(this,null,function*(){const s=yield Rd(n.localStore,xt(t)),o=s.targetId,a=n.sharedClientState.addLocalQueryTarget(o,e);let l;return r&&(l=yield lm(n,t,o,a==="current",s.resumeToken)),n.isPrimaryClient&&e&&Mu(n.remoteStore,s),l})}function lm(n,t,e,r,s){return b(this,null,function*(){n.pu=(I,w,V)=>(function(M,x,K,G){return b(this,null,function*(){let Y=x.view.ru(K);Y.Ss&&(Y=yield ra(M.localStore,x.query,!1).then((({documents:E})=>x.view.ru(E,Y))));const Tt=G&&G.targetChanges.get(x.targetId),At=G&&G.targetMismatches.get(x.targetId)!=null,dt=x.view.applyChanges(Y,M.isPrimaryClient,Tt,At);return da(M,x.targetId,dt.au),dt.snapshot})})(n,I,w,V);const o=yield ra(n.localStore,t,!0),a=new sm(t,o.ks),l=a.ru(o.documents),h=bn.createSynthesizedTargetChangeForCurrentChange(e,r&&n.onlineState!=="Offline",s),d=a.applyChanges(l,n.isPrimaryClient,h);da(n,e,d.au);const p=new im(t,e,a);return n.Tu.set(t,p),n.Iu.has(e)?n.Iu.get(e).push(t):n.Iu.set(e,[t]),d.snapshot})}function hm(n,t,e){return b(this,null,function*(){const r=U(n),s=r.Tu.get(t),o=r.Iu.get(s.targetId);if(o.length>1)return r.Iu.set(s.targetId,o.filter((a=>!Rr(a,t)))),void r.Tu.delete(t);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||(yield Ss(r.localStore,s.targetId,!1).then((()=>{r.sharedClientState.clearQueryState(s.targetId),e&&Ws(r.remoteStore,s.targetId),Ps(r,s.targetId)})).catch(qe))):(Ps(r,s.targetId),yield Ss(r.localStore,s.targetId,!0))})}function fm(n,t){return b(this,null,function*(){const e=U(n),r=e.Tu.get(t),s=e.Iu.get(r.targetId);e.isPrimaryClient&&s.length===1&&(e.sharedClientState.removeLocalQueryTarget(r.targetId),Ws(e.remoteStore,r.targetId))})}function dm(n,t,e){return b(this,null,function*(){const r=Tm(n);try{const s=yield(function(a,l){const h=U(a),d=X.now(),p=l.reduce(((V,k)=>V.add(k.key)),j());let I,w;return h.persistence.runTransaction("Locally write mutations","readwrite",(V=>{let k=qt(),M=j();return h.xs.getEntries(V,p).next((x=>{k=x,k.forEach(((K,G)=>{G.isValidDocument()||(M=M.add(K))}))})).next((()=>h.localDocuments.getOverlayedDocuments(V,k))).next((x=>{I=x;const K=[];for(const G of l){const Y=wf(G,I.get(G.key).overlayedDocument);Y!=null&&K.push(new ye(G.key,Y,Ja(Y.value.mapValue),Ft.exists(!0)))}return h.mutationQueue.addMutationBatch(V,d,K,l)})).next((x=>{w=x;const K=x.applyToLocalDocumentSet(I,M);return h.documentOverlayCache.saveOverlays(V,x.batchId,K)}))})).then((()=>({batchId:w.batchId,changes:cu(I)})))})(r.localStore,t);r.sharedClientState.addPendingMutation(s.batchId),(function(a,l,h){let d=a.du[a.currentUser.toKey()];d||(d=new Z(q)),d=d.insert(l,h),a.du[a.currentUser.toKey()]=d})(r,s.batchId,e),yield Nn(r,s.changes),yield Nr(r.remoteStore)}catch(s){const o=Zs(s,"Failed to persist write");e.reject(o)}})}function Gu(n,t){return b(this,null,function*(){const e=U(n);try{const r=yield vd(e.localStore,t);t.targetChanges.forEach(((s,o)=>{const a=e.Au.get(o);a&&(H(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?a.hu=!0:s.modifiedDocuments.size>0?H(a.hu,14607):s.removedDocuments.size>0&&(H(a.hu,42227),a.hu=!1))})),yield Nn(e,r,t)}catch(r){yield qe(r)}})}function fa(n,t,e){const r=U(n);if(r.isPrimaryClient&&e===0||!r.isPrimaryClient&&e===1){const s=[];r.Tu.forEach(((o,a)=>{const l=a.view.va(t);l.snapshot&&s.push(l.snapshot)})),(function(a,l){const h=U(a);h.onlineState=l;let d=!1;h.queries.forEach(((p,I)=>{for(const w of I.ba)w.va(l)&&(d=!0)})),d&&ti(h)})(r.eventManager,t),s.length&&r.Pu.J_(s),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}function mm(n,t,e){return b(this,null,function*(){const r=U(n);r.sharedClientState.updateQueryState(t,"rejected",e);const s=r.Au.get(t),o=s&&s.key;if(o){let a=new Z(O.comparator);a=a.insert(o,_t.newNoDocument(o,F.min()));const l=j().add(o),h=new Pr(F.min(),new Map,new Z(q),a,l);yield Gu(r,h),r.Ru=r.Ru.remove(o),r.Au.delete(t),ni(r)}else yield Ss(r.localStore,t,!1).then((()=>Ps(r,t,e))).catch(qe)})}function pm(n,t){return b(this,null,function*(){const e=U(n),r=t.batch.batchId;try{const s=yield Id(e.localStore,t);Ku(e,r,null),Hu(e,r),e.sharedClientState.updateMutationState(r,"acknowledged"),yield Nn(e,s)}catch(s){yield qe(s)}})}function gm(n,t,e){return b(this,null,function*(){const r=U(n);try{const s=yield(function(a,l){const h=U(a);return h.persistence.runTransaction("Reject batch","readwrite-primary",(d=>{let p;return h.mutationQueue.lookupMutationBatch(d,l).next((I=>(H(I!==null,37113),p=I.keys(),h.mutationQueue.removeMutationBatch(d,I)))).next((()=>h.mutationQueue.performConsistencyCheck(d))).next((()=>h.documentOverlayCache.removeOverlaysForBatchId(d,p,l))).next((()=>h.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(d,p))).next((()=>h.localDocuments.getDocuments(d,p)))}))})(r.localStore,t);Ku(r,t,e),Hu(r,t),r.sharedClientState.updateMutationState(t,"rejected",e),yield Nn(r,s)}catch(s){yield qe(s)}})}function Hu(n,t){(n.mu.get(t)||[]).forEach((e=>{e.resolve()})),n.mu.delete(t)}function Ku(n,t,e){const r=U(n);let s=r.du[r.currentUser.toKey()];if(s){const o=s.get(t);o&&(e?o.reject(e):o.resolve(),s=s.remove(t)),r.du[r.currentUser.toKey()]=s}}function Ps(n,t,e=null){n.sharedClientState.removeLocalQueryTarget(t);for(const r of n.Iu.get(t))n.Tu.delete(r),e&&n.Pu.yu(r,e);n.Iu.delete(t),n.isPrimaryClient&&n.Vu.Gr(t).forEach((r=>{n.Vu.containsKey(r)||Wu(n,r)}))}function Wu(n,t){n.Eu.delete(t.path.canonicalString());const e=n.Ru.get(t);e!==null&&(Ws(n.remoteStore,e),n.Ru=n.Ru.remove(t),n.Au.delete(e),ni(n))}function da(n,t,e){for(const r of e)r instanceof ju?(n.Vu.addReference(r.key,t),_m(n,r)):r instanceof $u?(N(ei,"Document no longer in limbo: "+r.key),n.Vu.removeReference(r.key,t),n.Vu.containsKey(r.key)||Wu(n,r.key)):L(19791,{wu:r})}function _m(n,t){const e=t.key,r=e.path.canonicalString();n.Ru.get(e)||n.Eu.has(r)||(N(ei,"New document in limbo: "+e),n.Eu.add(r),ni(n))}function ni(n){for(;n.Eu.size>0&&n.Ru.size<n.maxConcurrentLimboResolutions;){const t=n.Eu.values().next().value;n.Eu.delete(t);const e=new O(Q.fromString(t)),r=n.fu.next();n.Au.set(r,new om(e)),n.Ru=n.Ru.insert(e,r),Mu(n.remoteStore,new Wt(xt(su(e.path)),r,"TargetPurposeLimboResolution",vr.ce))}}function Nn(n,t,e){return b(this,null,function*(){const r=U(n),s=[],o=[],a=[];r.Tu.isEmpty()||(r.Tu.forEach(((l,h)=>{a.push(r.pu(h,t,e).then((d=>{var p;if((d||e)&&r.isPrimaryClient){const I=d?!d.fromCache:(p=e==null?void 0:e.targetChanges.get(h.targetId))==null?void 0:p.current;r.sharedClientState.updateQueryState(h.targetId,I?"current":"not-current")}if(d){s.push(d);const I=Hs.Es(h.targetId,d);o.push(I)}})))})),yield Promise.all(a),r.Pu.J_(s),yield(function(h,d){return b(this,null,function*(){const p=U(h);try{yield p.persistence.runTransaction("notifyLocalViewChanges","readwrite",(I=>C.forEach(d,(w=>C.forEach(w.Ts,(V=>p.persistence.referenceDelegate.addReference(I,w.targetId,V))).next((()=>C.forEach(w.Is,(V=>p.persistence.referenceDelegate.removeReference(I,w.targetId,V)))))))))}catch(I){if(!je(I))throw I;N(Ks,"Failed to update sequence numbers: "+I)}for(const I of d){const w=I.targetId;if(!I.fromCache){const V=p.vs.get(w),k=V.snapshotVersion,M=V.withLastLimboFreeSnapshotVersion(k);p.vs=p.vs.insert(w,M)}}})})(r.localStore,o))})}function ym(n,t){return b(this,null,function*(){const e=U(n);if(!e.currentUser.isEqual(t)){N(ei,"User change. New user:",t.toKey());const r=yield Nu(e.localStore,t);e.currentUser=t,(function(o,a){o.mu.forEach((l=>{l.forEach((h=>{h.reject(new D(S.CANCELLED,a))}))})),o.mu.clear()})(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),yield Nn(e,r.Ns)}})}function Em(n,t){const e=U(n),r=e.Au.get(t);if(r&&r.hu)return j().add(r.key);{let s=j();const o=e.Iu.get(t);if(!o)return s;for(const a of o){const l=e.Tu.get(a);s=s.unionWith(l.view.nu)}return s}}function Qu(n){const t=U(n);return t.remoteStore.remoteSyncer.applyRemoteEvent=Gu.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=Em.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=mm.bind(null,t),t.Pu.J_=em.bind(null,t.eventManager),t.Pu.yu=nm.bind(null,t.eventManager),t}function Tm(n){const t=U(n);return t.remoteStore.remoteSyncer.applySuccessfulWrite=pm.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=gm.bind(null,t),t}class Er{constructor(){this.kind="memory",this.synchronizeTabs=!1}initialize(t){return b(this,null,function*(){this.serializer=br(t.databaseInfo.databaseId),this.sharedClientState=this.Du(t),this.persistence=this.Cu(t),yield this.persistence.start(),this.localStore=this.vu(t),this.gcScheduler=this.Fu(t,this.localStore),this.indexBackfillerScheduler=this.Mu(t,this.localStore)})}Fu(t,e){return null}Mu(t,e){return null}vu(t){return Td(this.persistence,new _d,t.initialUser,this.serializer)}Cu(t){return new Du(Gs.Vi,this.serializer)}Du(t){return new Cd}terminate(){return b(this,null,function*(){var t,e;(t=this.gcScheduler)==null||t.stop(),(e=this.indexBackfillerScheduler)==null||e.stop(),this.sharedClientState.shutdown(),yield this.persistence.shutdown()})}}Er.provider={build:()=>new Er};class Im extends Er{constructor(t){super(),this.cacheSizeBytes=t}Fu(t,e){H(this.persistence.referenceDelegate instanceof _r,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new nd(r,t.asyncQueue,e)}Cu(t){const e=this.cacheSizeBytes!==void 0?vt.withCacheSize(this.cacheSizeBytes):vt.DEFAULT;return new Du((r=>_r.Vi(r,e)),this.serializer)}}class bs{initialize(t,e){return b(this,null,function*(){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>fa(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=ym.bind(null,this.syncEngine),yield Yd(this.remoteStore,this.syncEngine.isPrimaryClient))})}createEventManager(t){return(function(){return new Xd})()}createDatastore(t){const e=br(t.databaseInfo.databaseId),r=Nd(t.databaseInfo);return Ld(t.authCredentials,t.appCheckCredentials,r,e)}createRemoteStore(t){return(function(r,s,o,a,l){return new Ud(r,s,o,a,l)})(this.localStore,this.datastore,t.asyncQueue,(e=>fa(this.syncEngine,e,0)),(function(){return oa.v()?new oa:new Vd})())}createSyncEngine(t,e){return(function(s,o,a,l,h,d,p){const I=new am(s,o,a,l,h,d);return p&&(I.gu=!0),I})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}terminate(){return b(this,null,function*(){var t,e;yield(function(s){return b(this,null,function*(){const o=U(s);N(pe,"RemoteStore shutting down."),o.Ea.add(5),yield Dn(o),o.Aa.shutdown(),o.Va.set("Unknown")})})(this.remoteStore),(t=this.datastore)==null||t.terminate(),(e=this.eventManager)==null||e.terminate()})}}bs.provider={build:()=>new bs};/**
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
 */class vm{constructor(t){this.observer=t,this.muted=!1}next(t){this.muted||this.observer.next&&this.Ou(this.observer.next,t)}error(t){this.muted||(this.observer.error?this.Ou(this.observer.error,t):Bt("Uncaught Error in snapshot listener:",t.toString()))}Nu(){this.muted=!0}Ou(t,e){setTimeout((()=>{this.muted||t(e)}),0)}}/**
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
 */const se="FirestoreClient";class Am{constructor(t,e,r,s,o){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=r,this._databaseInfo=s,this.user=gt.UNAUTHENTICATED,this.clientId=xs.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=o,this.authCredentials.start(r,(a=>b(this,null,function*(){N(se,"Received user=",a.uid),yield this.authCredentialListener(a),this.user=a}))),this.appCheckCredentials.start(r,(a=>(N(se,"Received new app check token=",a),this.appCheckCredentialListener(a,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Jt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((()=>b(this,null,function*(){try{this._onlineComponents&&(yield this._onlineComponents.terminate()),this._offlineComponents&&(yield this._offlineComponents.terminate()),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const r=Zs(e,"Failed to shutdown persistence");t.reject(r)}}))),t.promise}}function hs(n,t){return b(this,null,function*(){n.asyncQueue.verifyOperationInProgress(),N(se,"Initializing OfflineComponentProvider");const e=n.configuration;yield t.initialize(e);let r=e.initialUser;n.setCredentialChangeListener((s=>b(null,null,function*(){r.isEqual(s)||(yield Nu(t.localStore,s),r=s)}))),t.persistence.setDatabaseDeletedListener((()=>n.terminate())),n._offlineComponents=t})}function ma(n,t){return b(this,null,function*(){n.asyncQueue.verifyOperationInProgress();const e=yield wm(n);N(se,"Initializing OnlineComponentProvider"),yield t.initialize(e,n.configuration),n.setCredentialChangeListener((r=>ua(t.remoteStore,r))),n.setAppCheckTokenChangeListener(((r,s)=>ua(t.remoteStore,s))),n._onlineComponents=t})}function wm(n){return b(this,null,function*(){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){N(se,"Using user provided OfflineComponentProvider");try{yield hs(n,n._uninitializedComponentsProvider._offline)}catch(t){const e=t;if(!(function(s){return s.name==="FirebaseError"?s.code===S.FAILED_PRECONDITION||s.code===S.UNIMPLEMENTED:!(typeof DOMException!="undefined"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11})(e))throw e;ke("Error using user provided cache. Falling back to memory cache: "+e),yield hs(n,new Er)}}else N(se,"Using default OfflineComponentProvider"),yield hs(n,new Im(void 0));return n._offlineComponents})}function Yu(n){return b(this,null,function*(){return n._onlineComponents||(n._uninitializedComponentsProvider?(N(se,"Using user provided OnlineComponentProvider"),yield ma(n,n._uninitializedComponentsProvider._online)):(N(se,"Using default OnlineComponentProvider"),yield ma(n,new bs))),n._onlineComponents})}function Rm(n){return Yu(n).then((t=>t.syncEngine))}function Sm(n){return b(this,null,function*(){const t=yield Yu(n),e=t.eventManager;return e.onListen=um.bind(null,t.syncEngine),e.onUnlisten=hm.bind(null,t.syncEngine),e.onFirstRemoteStoreListen=cm.bind(null,t.syncEngine),e.onLastRemoteStoreUnlisten=fm.bind(null,t.syncEngine),e})}function Cm(n,t,e={}){const r=new Jt;return n.asyncQueue.enqueueAndForget((()=>b(null,null,function*(){return(function(o,a,l,h,d){const p=new vm({next:w=>{p.Nu(),a.enqueueAndForget((()=>tm(o,I))),w.fromCache&&h.source==="server"?d.reject(new D(S.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):d.resolve(w)},error:w=>d.reject(w)}),I=new rm(l,p,{includeMetadataChanges:!0,Ka:!0});return Zd(o,I)})(yield Sm(n),n.asyncQueue,t,e,r)}))),r.promise}function Vm(n,t){const e=new Jt;return n.asyncQueue.enqueueAndForget((()=>b(null,null,function*(){return dm(yield Rm(n),t,e)}))),e.promise}/**
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
 */function Ju(n){const t={};return n.timeoutSeconds!==void 0&&(t.timeoutSeconds=n.timeoutSeconds),t}/**
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
 */const Pm="ComponentProvider",pa=new Map;function bm(n,t,e,r,s){return new zh(n,t,e,s.host,s.ssl,s.experimentalForceLongPolling,s.experimentalAutoDetectLongPolling,Ju(s.experimentalLongPollingOptions),s.useFetchStreams,s.isUsingEmulator,r)}/**
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
 */const Xu="firestore.googleapis.com",ga=!0;class _a{constructor(t){var e,r;if(t.host===void 0){if(t.ssl!==void 0)throw new D(S.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Xu,this.ssl=ga}else this.host=t.host,this.ssl=(e=t.ssl)!=null?e:ga;if(this.isUsingEmulator=t.emulatorOptions!==void 0,this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=bu;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<td)throw new D(S.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}Nh("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Ju((r=t.experimentalLongPollingOptions)!=null?r:{}),(function(o){if(o.timeoutSeconds!==void 0){if(isNaN(o.timeoutSeconds))throw new D(S.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (must not be NaN)`);if(o.timeoutSeconds<5)throw new D(S.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (minimum allowed value is 5)`);if(o.timeoutSeconds>30)throw new D(S.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&(function(r,s){return r.timeoutSeconds===s.timeoutSeconds})(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class kr{constructor(t,e,r,s){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new _a({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new D(S.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new D(S.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new _a(t),this._emulatorOptions=t.emulatorOptions||{},t.credentials!==void 0&&(this._authCredentials=(function(r){if(!r)return new vh;switch(r.type){case"firstParty":return new Sh(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new D(S.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(t.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}_restart(){return b(this,null,function*(){this._terminateTask==="notTerminated"?yield this._terminate():this._terminateTask="notTerminated"})}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(e){const r=pa.get(e);r&&(N(Pm,"Removing Datastore"),pa.delete(e),r.terminate())})(this),Promise.resolve()}}function Dm(n,t,e,r={}){var d;n=En(n,kr);const s=Ns(t),o=n._getSettings(),a=is(Rt({},o),{emulatorOptions:n._getEmulatorOptions()}),l=`${t}:${e}`;s&&(sl(`https://${l}`),ul("Firestore",!0)),o.host!==Xu&&o.host!==l&&ke("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const h=is(Rt({},o),{host:l,ssl:s,emulatorOptions:r});if(!ar(h,a)&&(n._setSettings(h),r.mockUserToken)){let p,I;if(typeof r.mockUserToken=="string")p=r.mockUserToken,I=gt.MOCK_USER;else{p=il(r.mockUserToken,(d=n._app)==null?void 0:d.options.projectId);const w=r.mockUserToken.sub||r.mockUserToken.user_id;if(!w)throw new D(S.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");I=new gt(w)}n._authCredentials=new Ah(new Ua(p,I))}}/**
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
 */class ie{constructor(t,e,r){this.converter=e,this._query=r,this.type="query",this.firestore=t}withConverter(t){return new ie(this.firestore,t,this._query)}}class ot{constructor(t,e,r){this.converter=e,this._key=r,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Xt(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new ot(this.firestore,t,this._key)}toJSON(){return{type:ot._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(t,e,r){if(Vn(e,ot._jsonSchema))return new ot(t,r||null,new O(Q.fromString(e.referencePath)))}}ot._jsonSchemaVersion="firestore/documentReference/1.0",ot._jsonSchema={type:st("string",ot._jsonSchemaVersion),referencePath:st("string")};class Xt extends ie{constructor(t,e,r){super(t,e,su(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new ot(this.firestore,null,new O(t))}withConverter(t){return new Xt(this.firestore,t,this._path)}}function Jm(n,t,...e){if(n=Ne(n),Ba("collection","path",t),n instanceof kr){const r=Q.fromString(t,...e);return bo(r),new Xt(n,null,r)}{if(!(n instanceof ot||n instanceof Xt))throw new D(S.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(Q.fromString(t,...e));return bo(r),new Xt(n.firestore,null,r)}}function Xm(n,t,...e){if(n=Ne(n),arguments.length===1&&(t=xs.newId()),Ba("doc","path",t),n instanceof kr){const r=Q.fromString(t,...e);return Po(r),new ot(n,null,new O(r))}{if(!(n instanceof ot||n instanceof Xt))throw new D(S.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(Q.fromString(t,...e));return Po(r),new ot(n.firestore,n instanceof Xt?n.converter:null,new O(r))}}/**
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
 */const ya="AsyncQueue";class Ea{constructor(t=Promise.resolve()){this.Yu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new xu(this,"async_queue_retry"),this._c=()=>{const r=ls();r&&N(ya,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=t;const e=ls();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.uc(),this.cc(t)}enterRestrictedMode(t){if(!this.ec){this.ec=!0,this.sc=t||!1;const e=ls();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this._c)}}enqueue(t){if(this.uc(),this.ec)return new Promise((()=>{}));const e=new Jt;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(t().then(e.resolve,e.reject),e.promise))).then((()=>e.promise))}enqueueRetryable(t){this.enqueueAndForget((()=>(this.Yu.push(t),this.lc())))}lc(){return b(this,null,function*(){if(this.Yu.length!==0){try{yield this.Yu[0](),this.Yu.shift(),this.M_.reset()}catch(t){if(!je(t))throw t;N(ya,"Operation failed with retryable error: "+t)}this.Yu.length>0&&this.M_.p_((()=>this.lc()))}})}cc(t){const e=this.ac.then((()=>(this.rc=!0,t().catch((r=>{throw this.nc=r,this.rc=!1,Bt("INTERNAL UNHANDLED ERROR: ",Ta(r)),r})).then((r=>(this.rc=!1,r))))));return this.ac=e,e}enqueueAfterDelay(t,e,r){this.uc(),this.oc.indexOf(t)>-1&&(e=0);const s=Xs.createAndSchedule(this,t,e,r,(o=>this.hc(o)));return this.tc.push(s),s}uc(){this.nc&&L(47125,{Pc:Ta(this.nc)})}verifyOperationInProgress(){}Tc(){return b(this,null,function*(){let t;do t=this.ac,yield t;while(t!==this.ac)})}Ic(t){for(const e of this.tc)if(e.timerId===t)return!0;return!1}Ec(t){return this.Tc().then((()=>{this.tc.sort(((e,r)=>e.targetTimeMs-r.targetTimeMs));for(const e of this.tc)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.Tc()}))}Rc(t){this.oc.push(t)}hc(t){const e=this.tc.indexOf(t);this.tc.splice(e,1)}}function Ta(n){let t=n.message||"";return n.stack&&(t=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),t}class ri extends kr{constructor(t,e,r,s){super(t,e,r,s),this.type="firestore",this._queue=new Ea,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}_terminate(){return b(this,null,function*(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new Ea(t),this._firestoreClient=void 0,yield t}})}}function Zm(n,t){const e=typeof n=="object"?n:uh(),r=typeof n=="string"?n:hr,s=nh(e,"firestore").getImmediate({identifier:r});if(!s._initialized){const o=nl("firestore");o&&Dm(s,...o)}return s}function Zu(n){if(n._terminated)throw new D(S.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||Nm(n),n._firestoreClient}function Nm(n){var r,s,o,a;const t=n._freezeSettings(),e=bm(n._databaseId,((r=n._app)==null?void 0:r.options.appId)||"",n._persistenceKey,(s=n._app)==null?void 0:s.options.apiKey,t);n._componentsProvider||(o=t.localCache)!=null&&o._offlineComponentProvider&&((a=t.localCache)!=null&&a._onlineComponentProvider)&&(n._componentsProvider={_offline:t.localCache._offlineComponentProvider,_online:t.localCache._onlineComponentProvider}),n._firestoreClient=new Am(n._authCredentials,n._appCheckCredentials,n._queue,e,n._componentsProvider&&(function(h){const d=h==null?void 0:h._online.build();return{_offline:h==null?void 0:h._offline.build(d),_online:d}})(n._componentsProvider))}/**
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
 */class Ct{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Ct(ft.fromBase64String(t))}catch(e){throw new D(S.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new Ct(ft.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}toJSON(){return{type:Ct._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(t){if(Vn(t,Ct._jsonSchema))return Ct.fromBase64String(t.bytes)}}Ct._jsonSchemaVersion="firestore/bytes/1.0",Ct._jsonSchema={type:st("string",Ct._jsonSchemaVersion),bytes:st("string")};/**
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
 */class tc{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new D(S.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ht(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
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
 */class si{constructor(t){this._methodName=t}}/**
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
 */class Mt{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new D(S.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new D(S.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}_compareTo(t){return q(this._lat,t._lat)||q(this._long,t._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Mt._jsonSchemaVersion}}static fromJSON(t){if(Vn(t,Mt._jsonSchema))return new Mt(t.latitude,t.longitude)}}Mt._jsonSchemaVersion="firestore/geoPoint/1.0",Mt._jsonSchema={type:st("string",Mt._jsonSchemaVersion),latitude:st("number"),longitude:st("number")};/**
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
 */class Pt{constructor(t){this._values=(t||[]).map((e=>e))}toArray(){return this._values.map((t=>t))}isEqual(t){return(function(r,s){if(r.length!==s.length)return!1;for(let o=0;o<r.length;++o)if(r[o]!==s[o])return!1;return!0})(this._values,t._values)}toJSON(){return{type:Pt._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(t){if(Vn(t,Pt._jsonSchema)){if(Array.isArray(t.vectorValues)&&t.vectorValues.every((e=>typeof e=="number")))return new Pt(t.vectorValues);throw new D(S.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Pt._jsonSchemaVersion="firestore/vectorValue/1.0",Pt._jsonSchema={type:st("string",Pt._jsonSchemaVersion),vectorValues:st("object")};/**
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
 */const km=/^__.*__$/;class xm{constructor(t,e,r){this.data=t,this.fieldMask=e,this.fieldTransforms=r}toMutation(t,e){return this.fieldMask!==null?new ye(t,this.data,this.fieldMask,e,this.fieldTransforms):new Pn(t,this.data,e,this.fieldTransforms)}}function ec(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw L(40011,{dataSource:n})}}class ii{constructor(t,e,r,s,o,a){this.settings=t,this.databaseId=e,this.serializer=r,this.ignoreUndefinedProperties=s,o===void 0&&this.validatePath(),this.fieldTransforms=o||[],this.fieldMask=a||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}contextWith(t){return new ii(Rt(Rt({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}childContextForField(t){var s;const e=(s=this.path)==null?void 0:s.child(t),r=this.contextWith({path:e,arrayElement:!1});return r.validatePathSegment(t),r}childContextForFieldPath(t){var s;const e=(s=this.path)==null?void 0:s.child(t),r=this.contextWith({path:e,arrayElement:!1});return r.validatePath(),r}childContextForArray(t){return this.contextWith({path:void 0,arrayElement:!0})}createError(t){return Tr(t,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(t){return this.fieldMask.find((e=>t.isPrefixOf(e)))!==void 0||this.fieldTransforms.find((e=>t.isPrefixOf(e.field)))!==void 0}validatePath(){if(this.path)for(let t=0;t<this.path.length;t++)this.validatePathSegment(this.path.get(t))}validatePathSegment(t){if(t.length===0)throw this.createError("Document fields must not be empty");if(ec(this.dataSource)&&km.test(t))throw this.createError('Document fields cannot begin and end with "__"')}}class Om{constructor(t,e,r){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=r||br(t)}createContext(t,e,r,s=!1){return new ii({dataSource:t,methodName:e,targetDoc:r,path:ht.emptyPath(),arrayElement:!1,hasConverter:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function nc(n){const t=n._freezeSettings(),e=br(n._databaseId);return new Om(n._databaseId,!!t.ignoreUndefinedProperties,e)}function Mm(n,t,e,r,s,o={}){const a=n.createContext(o.merge||o.mergeFields?2:0,t,e,s);ic("Data must be an object, but it was:",a,r);const l=rc(r,a);let h,d;if(o.merge)h=new Vt(a.fieldMask),d=a.fieldTransforms;else if(o.mergeFields){const p=[];for(const I of o.mergeFields){const w=xr(t,I,e);if(!a.contains(w))throw new D(S.INVALID_ARGUMENT,`Field '${w}' is specified in your field mask but missing from your input data.`);Bm(p,w)||p.push(w)}h=new Vt(p),d=a.fieldTransforms.filter((I=>h.covers(I.field)))}else h=null,d=a.fieldTransforms;return new xm(new St(l),h,d)}class oi extends si{_toFieldTransform(t){return new Tf(t.path,new Rn)}isEqual(t){return t instanceof oi}}function Lm(n,t,e,r=!1){return ai(e,n.createContext(r?4:3,t))}function ai(n,t){if(sc(n=Ne(n)))return ic("Unsupported field value:",t,n),rc(n,t);if(n instanceof si)return(function(r,s){if(!ec(s.dataSource))throw s.createError(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.createError(`${r._methodName}() is not currently supported inside arrays`);const o=r._toFieldTransform(s);o&&s.fieldTransforms.push(o)})(n,t),null;if(n===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),n instanceof Array){if(t.settings.arrayElement&&t.dataSource!==4)throw t.createError("Nested arrays are not supported");return(function(r,s){const o=[];let a=0;for(const l of r){let h=ai(l,s.childContextForArray(a));h==null&&(h={nullValue:"NULL_VALUE"}),o.push(h),a++}return{arrayValue:{values:o}}})(n,t)}return(function(r,s){if((r=Ne(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return _f(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const o=X.fromDate(r);return{timestampValue:gr(s.serializer,o)}}if(r instanceof X){const o=new X(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:gr(s.serializer,o)}}if(r instanceof Mt)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Ct)return{bytesValue:vu(s.serializer,r._byteString)};if(r instanceof ot){const o=s.databaseId,a=r.firestore._databaseId;if(!a.isEqual(o))throw s.createError(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${o.projectId}/${o.database}`);return{referenceValue:$s(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof Pt)return(function(a,l){const h=a instanceof Pt?a.toArray():a;return{mapValue:{fields:{[Qa]:{stringValue:Ya},[fr]:{arrayValue:{values:h.map((p=>{if(typeof p!="number")throw l.createError("VectorValues must only contain numeric values.");return Bs(l.serializer,p)}))}}}}}})(r,s);if(Pu(r))return r._toProto(s.serializer);throw s.createError(`Unsupported field value: ${Ir(r)}`)})(n,t)}function rc(n,t){const e={};return $a(n)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):ge(n,((r,s)=>{const o=ai(s,t.childContextForField(r));o!=null&&(e[r]=o)})),{mapValue:{fields:e}}}function sc(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof X||n instanceof Mt||n instanceof Ct||n instanceof ot||n instanceof si||n instanceof Pt||Pu(n))}function ic(n,t,e){if(!sc(e)||!qa(e)){const r=Ir(e);throw r==="an object"?t.createError(n+" a custom object"):t.createError(n+" "+r)}}function xr(n,t,e){if((t=Ne(t))instanceof tc)return t._internalPath;if(typeof t=="string")return Um(n,t);throw Tr("Field path arguments must be of type string or ",n,!1,void 0,e)}const Fm=new RegExp("[~\\*/\\[\\]]");function Um(n,t,e){if(t.search(Fm)>=0)throw Tr(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,e);try{return new tc(...t.split("."))._internalPath}catch(r){throw Tr(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,e)}}function Tr(n,t,e,r,s){const o=r&&!r.isEmpty(),a=s!==void 0;let l=`Function ${t}() called with invalid data`;e&&(l+=" (via `toFirestore()`)"),l+=". ";let h="";return(o||a)&&(h+=" (found",o&&(h+=` in field ${r}`),a&&(h+=` in document ${s}`),h+=")"),new D(S.INVALID_ARGUMENT,l+n+h)}function Bm(n,t){return n.some((e=>e.isEqual(t)))}/**
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
 */class qm{convertValue(t,e="none"){switch(ne(t)){case 0:return null;case 1:return t.booleanValue;case 2:return et(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(ee(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 11:return this.convertObject(t.mapValue,e);case 10:return this.convertVectorValue(t.mapValue);default:throw L(62114,{value:t})}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const r={};return ge(t,((s,o)=>{r[s]=this.convertValue(o,e)})),r}convertVectorValue(t){var r,s,o;const e=(o=(s=(r=t.fields)==null?void 0:r[fr].arrayValue)==null?void 0:s.values)==null?void 0:o.map((a=>et(a.doubleValue)));return new Pt(e)}convertGeoPoint(t){return new Mt(et(t.latitude),et(t.longitude))}convertArray(t,e){return(t.values||[]).map((r=>this.convertValue(r,e)))}convertServerTimestamp(t,e){switch(e){case"previous":const r=wr(t);return r==null?null:this.convertValue(r,e);case"estimate":return this.convertTimestamp(In(t));default:return null}}convertTimestamp(t){const e=te(t);return new X(e.seconds,e.nanos)}convertDocumentKey(t,e){const r=Q.fromString(t);H(Vu(r),9688,{name:t});const s=new vn(r.get(1),r.get(3)),o=new O(r.popFirst(5));return s.isEqual(e)||Bt(`Document ${o} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),o}}/**
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
 */class jm extends qm{constructor(t){super(),this.firestore=t}convertBytes(t){return new Ct(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new ot(this.firestore,null,e)}}function tp(){return new oi("serverTimestamp")}const Ia="@firebase/firestore",va="4.10.0";/**
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
 */class oc{constructor(t,e,r,s,o){this._firestore=t,this._userDataWriter=e,this._key=r,this._document=s,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new ot(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new $m(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){var t,e;return(e=(t=this._document)==null?void 0:t.data.clone().value.mapValue.fields)!=null?e:void 0}get(t){if(this._document){const e=this._document.data.field(xr("DocumentSnapshot.get",t));if(e!==null)return this._userDataWriter.convertValue(e)}}}class $m extends oc{data(){return super.data()}}/**
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
 */function zm(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new D(S.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class ui{}class ci extends ui{}function ep(n,t,...e){let r=[];t instanceof ui&&r.push(t),r=r.concat(e),(function(o){const a=o.filter((h=>h instanceof hi)).length,l=o.filter((h=>h instanceof li)).length;if(a>1||a>0&&l>0)throw new D(S.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(r);for(const s of r)n=s._apply(n);return n}class li extends ci{constructor(t,e,r){super(),this._field=t,this._op=e,this._value=r,this.type="where"}static _create(t,e,r){return new li(t,e,r)}_apply(t){const e=this._parse(t);return ac(t._query,e),new ie(t.firestore,t.converter,Is(t._query,e))}_parse(t){const e=nc(t.firestore);return(function(o,a,l,h,d,p,I){let w;if(d.isKeyField()){if(p==="array-contains"||p==="array-contains-any")throw new D(S.INVALID_ARGUMENT,`Invalid Query. You can't perform '${p}' queries on documentId().`);if(p==="in"||p==="not-in"){wa(I,p);const k=[];for(const M of I)k.push(Aa(h,o,M));w={arrayValue:{values:k}}}else w=Aa(h,o,I)}else p!=="in"&&p!=="not-in"&&p!=="array-contains-any"||wa(I,p),w=Lm(l,a,I,p==="in"||p==="not-in");return rt.create(d,p,w)})(t._query,"where",e,t.firestore._databaseId,this._field,this._op,this._value)}}class hi extends ui{constructor(t,e){super(),this.type=t,this._queryConstraints=e}static _create(t,e){return new hi(t,e)}_parse(t){const e=this._queryConstraints.map((r=>r._parse(t))).filter((r=>r.getFilters().length>0));return e.length===1?e[0]:bt.create(e,this._getOperator())}_apply(t){const e=this._parse(t);return e.getFilters().length===0?t:((function(s,o){let a=s;const l=o.getFlattenedFilters();for(const h of l)ac(a,h),a=Is(a,h)})(t._query,e),new ie(t.firestore,t.converter,Is(t._query,e)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class fi extends ci{constructor(t,e){super(),this._field=t,this._direction=e,this.type="orderBy"}static _create(t,e){return new fi(t,e)}_apply(t){const e=(function(s,o,a){if(s.startAt!==null)throw new D(S.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new D(S.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new wn(o,a)})(t._query,this._field,this._direction);return new ie(t.firestore,t.converter,cf(t._query,e))}}function np(n,t="asc"){const e=t,r=xr("orderBy",n);return fi._create(r,e)}class di extends ci{constructor(t,e,r){super(),this.type=t,this._limit=e,this._limitType=r}static _create(t,e,r){return new di(t,e,r)}_apply(t){return new ie(t.firestore,t.converter,mr(t._query,this._limit,this._limitType))}}function rp(n){return kh("limit",n),di._create("limit",n,"F")}function Aa(n,t,e){if(typeof(e=Ne(e))=="string"){if(e==="")throw new D(S.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!iu(t)&&e.indexOf("/")!==-1)throw new D(S.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${e}' contains a '/' character.`);const r=t.path.child(Q.fromString(e));if(!O.isDocumentKey(r))throw new D(S.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Fo(n,new O(r))}if(e instanceof ot)return Fo(n,e._key);throw new D(S.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Ir(e)}.`)}function wa(n,t){if(!Array.isArray(n)||n.length===0)throw new D(S.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function ac(n,t){const e=(function(s,o){for(const a of s)for(const l of a.getFlattenedFilters())if(o.indexOf(l.op)>=0)return l.op;return null})(n.filters,(function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(t.op));if(e!==null)throw e===t.op?new D(S.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new D(S.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${e.toString()}' filters.`)}function Gm(n,t,e){let r;return r=n?n.toFirestore(t):t,r}class Zn{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class be extends oc{constructor(t,e,r,s,o,a){super(t,e,r,s,a),this._firestore=t,this._firestoreImpl=t,this.metadata=o}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new ir(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const r=this._document.data.field(xr("DocumentSnapshot.get",t));if(r!==null)return this._userDataWriter.convertValue(r,e.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new D(S.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t=this._document,e={};return e.type=be._jsonSchemaVersion,e.bundle="",e.bundleSource="DocumentSnapshot",e.bundleName=this._key.toString(),!t||!t.isValidDocument()||!t.isFoundDocument()?e:(this._userDataWriter.convertObjectMap(t.data.value.mapValue.fields,"previous"),e.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),e)}}be._jsonSchemaVersion="firestore/documentSnapshot/1.0",be._jsonSchema={type:st("string",be._jsonSchemaVersion),bundleSource:st("string","DocumentSnapshot"),bundleName:st("string"),bundle:st("string")};class ir extends be{data(t={}){return super.data(t)}}class De{constructor(t,e,r,s){this._firestore=t,this._userDataWriter=e,this._snapshot=s,this.metadata=new Zn(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const t=[];return this.forEach((e=>t.push(e))),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,e){this._snapshot.docs.forEach((r=>{t.call(e,new ir(this._firestore,this._userDataWriter,r.key,r,new Zn(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new D(S.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=(function(s,o){if(s._snapshot.oldDocs.isEmpty()){let a=0;return s._snapshot.docChanges.map((l=>{const h=new ir(s._firestore,s._userDataWriter,l.doc.key,l.doc,new Zn(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);return l.doc,{type:"added",doc:h,oldIndex:-1,newIndex:a++}}))}{let a=s._snapshot.oldDocs;return s._snapshot.docChanges.filter((l=>o||l.type!==3)).map((l=>{const h=new ir(s._firestore,s._userDataWriter,l.doc.key,l.doc,new Zn(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);let d=-1,p=-1;return l.type!==0&&(d=a.indexOf(l.doc.key),a=a.delete(l.doc.key)),l.type!==1&&(a=a.add(l.doc),p=a.indexOf(l.doc.key)),{type:Hm(l.type),doc:h,oldIndex:d,newIndex:p}}))}})(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new D(S.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t={};t.type=De._jsonSchemaVersion,t.bundleSource="QuerySnapshot",t.bundleName=xs.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const e=[],r=[],s=[];return this.docs.forEach((o=>{o._document!==null&&(e.push(o._document),r.push(this._userDataWriter.convertObjectMap(o._document.data.value.mapValue.fields,"previous")),s.push(o.ref.path))})),t.bundle=(this._firestore,this.query._query,t.bundleName,"NOT SUPPORTED"),t}}function Hm(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return L(61501,{type:n})}}/**
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
 */De._jsonSchemaVersion="firestore/querySnapshot/1.0",De._jsonSchema={type:st("string",De._jsonSchemaVersion),bundleSource:st("string","QuerySnapshot"),bundleName:st("string"),bundle:st("string")};function sp(n){n=En(n,ie);const t=En(n.firestore,ri),e=Zu(t),r=new jm(t);return zm(n._query),Cm(e,n._query).then((s=>new De(t,r,n,s)))}function ip(n,t,e){n=En(n,ot);const r=En(n.firestore,ri),s=Gm(n.converter,t),o=nc(r);return Km(r,[Mm(o,"setDoc",n._key,s,n.converter!==null,e).toMutation(n._key,Ft.none())])}function Km(n,t){const e=Zu(n);return Vm(e,t)}(function(t,e=!0){Ih(oh),cr(new _n("firestore",((r,{instanceIdentifier:s,options:o})=>{const a=r.getProvider("app").getImmediate(),l=new ri(new wh(r.getProvider("auth-internal")),new Ch(a,r.getProvider("app-check-internal")),Gh(a,s),a);return o=Rt({useFetchStreams:e},o),l._setSettings(o),l}),"PUBLIC").setMultipleInstances(!0)),Ce(Ia,va,t),Ce(Ia,va,"esm2020")})();export{ip as a,sp as b,Jm as c,Xm as d,Zm as g,ah as i,rp as l,np as o,ep as q,tp as s};
