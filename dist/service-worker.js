if(!self.define){let e,n={};const l=(l,u)=>(l=new URL(l+".js",u).href,n[l]||new Promise((n=>{if("document"in self){const e=document.createElement("script");e.src=l,e.onload=n,document.head.appendChild(e)}else e=l,importScripts(l),n()})).then((()=>{let e=n[l];if(!e)throw new Error(`Module ${l} didn’t register its module`);return e})));self.define=(u,f)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(n[o])return;let s={};const r=e=>l(e,o),i={module:{uri:o},exports:s,require:r};n[o]=Promise.all(u.map((e=>i[e]||r(e)))).then((e=>(f(...e),s)))}}define(["./workbox-6567b62a"],(function(e){"use strict";e.setCacheNameDetails({prefix:"my-app"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"/vueapp/css/app.b081bd0d.css",revision:null},{url:"/vueapp/css/chunk-vendors.77026682.css",revision:null},{url:"/vueapp/fonts/KFOkCnqEu92Fr1MmgVxIIzQ.c51333cd.woff",revision:null},{url:"/vueapp/fonts/KFOlCnqEu92Fr1MmEU9fBBc-.e5748c3b.woff",revision:null},{url:"/vueapp/fonts/KFOlCnqEu92Fr1MmSU5fBBc-.006981bf.woff",revision:null},{url:"/vueapp/fonts/KFOlCnqEu92Fr1MmWUlfBBc-.bd41d1cd.woff",revision:null},{url:"/vueapp/fonts/KFOlCnqEu92Fr1MmYUtfBBc-.1ee24015.woff",revision:null},{url:"/vueapp/fonts/KFOmCnqEu92Fr1Mu4mxM.224e95b0.woff",revision:null},{url:"/vueapp/fonts/fa-brands-400.0e53fe4f.woff",revision:null},{url:"/vueapp/fonts/fa-brands-400.7edea186.woff2",revision:null},{url:"/vueapp/fonts/fa-regular-400.04dd5282.woff",revision:null},{url:"/vueapp/fonts/fa-regular-400.e2b3a9dc.woff2",revision:null},{url:"/vueapp/fonts/fa-solid-900.620019ed.woff2",revision:null},{url:"/vueapp/fonts/fa-solid-900.e67670b0.woff",revision:null},{url:"/vueapp/fonts/flUhRq6tzZclQEJ-Vdg-IuiaDsNa.4ad034d2.woff",revision:null},{url:"/vueapp/fonts/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.13749f83.woff2",revision:null},{url:"/vueapp/fonts/gok-H7zzDkdnRel8-DQ6KAXJ69wP1tGnf4ZGhUcY.78a93b20.woff",revision:null},{url:"/vueapp/fonts/gok-H7zzDkdnRel8-DQ6KAXJ69wP1tGnf4ZGhUcel5euIg.f86cb7b0.woff2",revision:null},{url:"/vueapp/index.html",revision:"6184f9ae32d852153d133ffee4e40ad0"},{url:"/vueapp/js/app.f5a728dc.js",revision:null},{url:"/vueapp/js/chunk-vendors.78a0b086.js",revision:null},{url:"/vueapp/manifest.json",revision:"bcece312d1a93cfd43972ed203239f0b"},{url:"/vueapp/robots.txt",revision:"735ab4f94fbcd57074377afca324c813"}],{})}));
//# sourceMappingURL=service-worker.js.map