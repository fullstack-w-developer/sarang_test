if(!self.define){let e,s={};const c=(c,t)=>(c=new URL(c+".js",t).href,s[c]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=c,e.onload=s,document.head.appendChild(e)}else e=c,importScripts(c),s()})).then((()=>{let e=s[c];if(!e)throw new Error(`Module ${c} didn’t register its module`);return e})));self.define=(t,i)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(s[n])return;let a={};const r=e=>c(e,n),u={module:{uri:n},exports:a,require:r};s[n]=Promise.all(t.map((e=>u[e]||r(e)))).then((e=>(i(...e),a)))}}define(["./workbox-7c2a5a06"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/app-build-manifest.json",revision:"270c60e1695de2ff3f1239dfa782c67f"},{url:"/_next/static/chunks/00cbbcb7-fdab5dc3317ab63e.js",revision:"kdcMWuhu6JYgNQEDrUpby"},{url:"/_next/static/chunks/07115393-e095433afd8ef75a.js",revision:"kdcMWuhu6JYgNQEDrUpby"},{url:"/_next/static/chunks/12038df7-b6a62db448e26c56.js",revision:"kdcMWuhu6JYgNQEDrUpby"},{url:"/_next/static/chunks/1468-ad149bb94a366e8a.js",revision:"kdcMWuhu6JYgNQEDrUpby"},{url:"/_next/static/chunks/2139-1452aa47633ccdf3.js",revision:"kdcMWuhu6JYgNQEDrUpby"},{url:"/_next/static/chunks/2484-72fa66a06e4fa1a0.js",revision:"kdcMWuhu6JYgNQEDrUpby"},{url:"/_next/static/chunks/276-fc224cd38fcbe535.js",revision:"kdcMWuhu6JYgNQEDrUpby"},{url:"/_next/static/chunks/3148-c2852987ebe61edb.js",revision:"kdcMWuhu6JYgNQEDrUpby"},{url:"/_next/static/chunks/3298-5bba0b3368b9ca14.js",revision:"kdcMWuhu6JYgNQEDrUpby"},{url:"/_next/static/chunks/335-65e4dd052e6e3533.js",revision:"kdcMWuhu6JYgNQEDrUpby"},{url:"/_next/static/chunks/3520-4b4d9fa70498d9e3.js",revision:"kdcMWuhu6JYgNQEDrUpby"},{url:"/_next/static/chunks/3627521c-9a2d23e3b0b68b4a.js",revision:"kdcMWuhu6JYgNQEDrUpby"},{url:"/_next/static/chunks/3834-0694b36017c723c0.js",revision:"kdcMWuhu6JYgNQEDrUpby"},{url:"/_next/static/chunks/4209.3459f735acc2ba19.js",revision:"3459f735acc2ba19"},{url:"/_next/static/chunks/4483-a72fc5cd7e05409d.js",revision:"kdcMWuhu6JYgNQEDrUpby"},{url:"/_next/static/chunks/4758-07f24c4bb5125e03.js",revision:"kdcMWuhu6JYgNQEDrUpby"},{url:"/_next/static/chunks/4cb6dfa8-8be1877d37c62e70.js",revision:"kdcMWuhu6JYgNQEDrUpby"},{url:"/_next/static/chunks/5551-6711a7b18645fad8.js",revision:"kdcMWuhu6JYgNQEDrUpby"},{url:"/_next/static/chunks/5691-3f9524639c5337d6.js",revision:"kdcMWuhu6JYgNQEDrUpby"},{url:"/_next/static/chunks/5732-88a12e49c1ec94c3.js",revision:"kdcMWuhu6JYgNQEDrUpby"},{url:"/_next/static/chunks/602-ea410bc9138816d9.js",revision:"kdcMWuhu6JYgNQEDrUpby"},{url:"/_next/static/chunks/6685-ee42d47d1a036698.js",revision:"kdcMWuhu6JYgNQEDrUpby"},{url:"/_next/static/chunks/6691-e408c453405c4e03.js",revision:"kdcMWuhu6JYgNQEDrUpby"},{url:"/_next/static/chunks/7043-93ed0bfc7c30e6a6.js",revision:"kdcMWuhu6JYgNQEDrUpby"},{url:"/_next/static/chunks/7369-41e5133d09e6db99.js",revision:"kdcMWuhu6JYgNQEDrUpby"},{url:"/_next/static/chunks/7567-495ab7f4cc39eeda.js",revision:"kdcMWuhu6JYgNQEDrUpby"},{url:"/_next/static/chunks/7658-f8eacb95ef558041.js",revision:"kdcMWuhu6JYgNQEDrUpby"},{url:"/_next/static/chunks/7cb1fa1f.d1e71aba3888f39d.js",revision:"d1e71aba3888f39d"},{url:"/_next/static/chunks/8114-150c7330c3eed916.js",revision:"kdcMWuhu6JYgNQEDrUpby"},{url:"/_next/static/chunks/816-45bc053366259c6e.js",revision:"kdcMWuhu6JYgNQEDrUpby"},{url:"/_next/static/chunks/8dc5345f-1cd1e3da344c9d85.js",revision:"kdcMWuhu6JYgNQEDrUpby"},{url:"/_next/static/chunks/9077-182424bff9da93e9.js",revision:"kdcMWuhu6JYgNQEDrUpby"},{url:"/_next/static/chunks/9081a741-f99a4fc10ff58e59.js",revision:"kdcMWuhu6JYgNQEDrUpby"},{url:"/_next/static/chunks/9111-9c0a577de5cafedf.js",revision:"kdcMWuhu6JYgNQEDrUpby"},{url:"/_next/static/chunks/9168.f8bb1988f58f48ab.js",revision:"f8bb1988f58f48ab"},{url:"/_next/static/chunks/93-18c3b42028a25c86.js",revision:"kdcMWuhu6JYgNQEDrUpby"},{url:"/_next/static/chunks/9636-54b2652f305b513f.js",revision:"kdcMWuhu6JYgNQEDrUpby"},{url:"/_next/static/chunks/9765-8403746ecf864ec4.js",revision:"kdcMWuhu6JYgNQEDrUpby"},{url:"/_next/static/chunks/app/auth/forget/page-23fd0c6b5a7dee0b.js",revision:"kdcMWuhu6JYgNQEDrUpby"},{url:"/_next/static/chunks/app/auth/signin/page-3e602df2b6048ebb.js",revision:"kdcMWuhu6JYgNQEDrUpby"},{url:"/_next/static/chunks/app/auth/signup/information/page-08d493568553a32a.js",revision:"kdcMWuhu6JYgNQEDrUpby"},{url:"/_next/static/chunks/app/auth/signup/page-abf1a0572b4d825e.js",revision:"kdcMWuhu6JYgNQEDrUpby"},{url:"/_next/static/chunks/app/auth/verify/page-121fd05b9f284436.js",revision:"kdcMWuhu6JYgNQEDrUpby"},{url:"/_next/static/chunks/app/driver/inquiry/not-found-5208dde10333dfa8.js",revision:"kdcMWuhu6JYgNQEDrUpby"},{url:"/_next/static/chunks/app/driver/inquiry/page-2737827169002ff4.js",revision:"kdcMWuhu6JYgNQEDrUpby"},{url:"/_next/static/chunks/app/driver/layout-6f0b46c48c72068b.js",revision:"kdcMWuhu6JYgNQEDrUpby"},{url:"/_next/static/chunks/app/driver/page-be0d213820445f60.js",revision:"kdcMWuhu6JYgNQEDrUpby"},{url:"/_next/static/chunks/app/driver/profile/page-f8e39d562c03c934.js",revision:"kdcMWuhu6JYgNQEDrUpby"},{url:"/_next/static/chunks/app/driver/result/page-dc4a9e0b2159f694.js",revision:"kdcMWuhu6JYgNQEDrUpby"},{url:"/_next/static/chunks/app/driver/scan/page-5d3066aaf8b084ca.js",revision:"kdcMWuhu6JYgNQEDrUpby"},{url:"/_next/static/chunks/app/driver/transactions/page-bd3478dcd61d5069.js",revision:"kdcMWuhu6JYgNQEDrUpby"},{url:"/_next/static/chunks/app/driver/trip/page-5b0c9bf840bbeac9.js",revision:"kdcMWuhu6JYgNQEDrUpby"},{url:"/_next/static/chunks/app/driver/username/page-ffd27e5be0b85420.js",revision:"kdcMWuhu6JYgNQEDrUpby"},{url:"/_next/static/chunks/app/error-05daf8f42429687f.js",revision:"kdcMWuhu6JYgNQEDrUpby"},{url:"/_next/static/chunks/app/layout-616a12393ae2daf4.js",revision:"kdcMWuhu6JYgNQEDrUpby"},{url:"/_next/static/chunks/app/loading-b7c15731b0bf1e58.js",revision:"kdcMWuhu6JYgNQEDrUpby"},{url:"/_next/static/chunks/app/notifications/page-e0c3cf25eac53598.js",revision:"kdcMWuhu6JYgNQEDrUpby"},{url:"/_next/static/chunks/app/page-3e20394f83c4523c.js",revision:"kdcMWuhu6JYgNQEDrUpby"},{url:"/_next/static/chunks/app/user/citynumber/page-15363864bc5edc2c.js",revision:"kdcMWuhu6JYgNQEDrUpby"},{url:"/_next/static/chunks/app/user/inquiry/not-found-c0f0d8c050a5b065.js",revision:"kdcMWuhu6JYgNQEDrUpby"},{url:"/_next/static/chunks/app/user/inquiry/page-1530db21201d51ef.js",revision:"kdcMWuhu6JYgNQEDrUpby"},{url:"/_next/static/chunks/app/user/layout-da3e848193317313.js",revision:"kdcMWuhu6JYgNQEDrUpby"},{url:"/_next/static/chunks/app/user/not-found-7e1db404f080b991.js",revision:"kdcMWuhu6JYgNQEDrUpby"},{url:"/_next/static/chunks/app/user/page-1dbcb158e511e346.js",revision:"kdcMWuhu6JYgNQEDrUpby"},{url:"/_next/static/chunks/app/user/profile/edit/page-c3fd34785be76c31.js",revision:"kdcMWuhu6JYgNQEDrUpby"},{url:"/_next/static/chunks/app/user/profile/page-1de6a59631f18710.js",revision:"kdcMWuhu6JYgNQEDrUpby"},{url:"/_next/static/chunks/app/user/result/page-f5351ed1046421cd.js",revision:"kdcMWuhu6JYgNQEDrUpby"},{url:"/_next/static/chunks/app/user/scan/page-88ba5017322be0e8.js",revision:"kdcMWuhu6JYgNQEDrUpby"},{url:"/_next/static/chunks/app/user/sharje/page-4fb5bf879a57bf77.js",revision:"kdcMWuhu6JYgNQEDrUpby"},{url:"/_next/static/chunks/app/user/transactions/layout-3c379fa94da5208b.js",revision:"kdcMWuhu6JYgNQEDrUpby"},{url:"/_next/static/chunks/app/user/transactions/page-585df9679594e4fa.js",revision:"kdcMWuhu6JYgNQEDrUpby"},{url:"/_next/static/chunks/app/user/trip/page-8ded1bc1c87baf46.js",revision:"kdcMWuhu6JYgNQEDrUpby"},{url:"/_next/static/chunks/bc9c3264-bdc68840f2b493b8.js",revision:"kdcMWuhu6JYgNQEDrUpby"},{url:"/_next/static/chunks/bf6a786c-939b7f7ec34b7ad9.js",revision:"kdcMWuhu6JYgNQEDrUpby"},{url:"/_next/static/chunks/dc112a36-a26ec11f6dfc39b0.js",revision:"kdcMWuhu6JYgNQEDrUpby"},{url:"/_next/static/chunks/framework-4498e84bb0ba1830.js",revision:"kdcMWuhu6JYgNQEDrUpby"},{url:"/_next/static/chunks/main-80af91b6ec7bde79.js",revision:"kdcMWuhu6JYgNQEDrUpby"},{url:"/_next/static/chunks/main-app-1cc9612f416e857e.js",revision:"kdcMWuhu6JYgNQEDrUpby"},{url:"/_next/static/chunks/pages/_app-8af45f6c5c3cbc8e.js",revision:"kdcMWuhu6JYgNQEDrUpby"},{url:"/_next/static/chunks/pages/_error-6aec2ce618e2a362.js",revision:"kdcMWuhu6JYgNQEDrUpby"},{url:"/_next/static/chunks/polyfills-78c92fac7aa8fdd8.js",revision:"79330112775102f91e1010318bae2bd3"},{url:"/_next/static/chunks/webpack-8e41d2b2345a8614.js",revision:"kdcMWuhu6JYgNQEDrUpby"},{url:"/_next/static/css/8a91d0a0033d1736.css",revision:"8a91d0a0033d1736"},{url:"/_next/static/kdcMWuhu6JYgNQEDrUpby/_buildManifest.js",revision:"f73e8c19daa8474d229371b8da40f744"},{url:"/_next/static/kdcMWuhu6JYgNQEDrUpby/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/media/ArtinSharpFN Black.c3d8259b.ttf",revision:"c3d8259b"},{url:"/_next/static/media/ArtinSharpFN Bold.cf2dcf97.ttf",revision:"cf2dcf97"},{url:"/_next/static/media/ArtinSharpFN Light.054da398.ttf",revision:"054da398"},{url:"/_next/static/media/ArtinSharpFN Regular.c263d3e0.ttf",revision:"c263d3e0"},{url:"/_next/static/media/ArtinSharpFN Thin.9d264b5c.ttf",revision:"9d264b5c"},{url:"/_next/static/media/Estedad-Bold.70557754.ttf",revision:"70557754"},{url:"/_next/static/media/Estedad-ExtraBold.f9685d63.ttf",revision:"f9685d63"},{url:"/_next/static/media/Estedad-Medium.1c8fdfab.ttf",revision:"1c8fdfab"},{url:"/_next/static/media/Estedad-Regular.79810656.ttf",revision:"79810656"},{url:"/_next/static/media/bg_line_bottom.22ab6e23.svg",revision:"22ab6e23"},{url:"/_next/static/media/flag_iran.faacd6e5.png",revision:"e5023d9bda76471fb0ca2bbbb182cd2d"},{url:"/_next/static/media/logo.af245689.svg",revision:"2b0a5e9b19be4f4e63573905cb53f10b"},{url:"/_next/static/media/logo_white.af245689.svg",revision:"2b0a5e9b19be4f4e63573905cb53f10b"},{url:"/_next/static/media/pay.bce6647e.jpg",revision:"fc13fe17d88472ee129e60b8632777b1"},{url:"/_next/static/media/repier.921459bc.png",revision:"89b74278d22af900a8a65753da478f17"},{url:"/_next/static/media/result.f8ff1c03.svg",revision:"5e36c9f4a05f337210744b9ced1fdd72"},{url:"/_next/static/media/user.3b37565d.png",revision:"93e883ffba9fda5802fad5266da44407"},{url:"/firebase-messaging-sw.js",revision:"56c1182914bf8f417cad91a47f84a1e2"},{url:"/manifest.json",revision:"1b90bcef5c628406bc740917b23cec54"},{url:"/next.svg",revision:"8e061864f388b47f33a1c3780831193e"},{url:"/vercel.svg",revision:"61c6b19abff40ea7acd577be818f3976"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:c,state:t})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
