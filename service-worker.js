"use strict";var precacheConfig=[["/index.html","563244c7c05ae44d7002efb71e6a97a7"],["/static/css/main.027abe14.css","a7f6db798a4591035534945b0d7e8511"],["/static/js/main.fc5e6622.js","85a462f14306e851819d73d5648137f3"],["/static/media/Neil_Ferman_Resume.f90aff6f.docx","f90aff6f2516087a96461bc664ccdc55"],["/static/media/icon-arrow-down.156bc3e9.svg","156bc3e9950409b4acc42ca5be1d1422"],["/static/media/icon-facebook.0a8c05b5.svg","0a8c05b537d16f923e52b7feb18b677d"],["/static/media/icon-hamburger.20b4bfdd.svg","20b4bfdd816b1c6206621364c0633fd7"],["/static/media/icon-instagram.a999f303.svg","a999f303676f78954b9ed22fc271e54c"],["/static/media/icon-pinterest.fa813e07.svg","fa813e071e0c8fbfb8e373f8a2b7f6da"],["/static/media/icon-twitter.38fd11ef.svg","38fd11efcca5a5255628ce28aa6bfdd7"],["/static/media/image-graphic-design.4fc0a96c.jpg","4fc0a96cc5409bce3b94a25f35447fbd"],["/static/media/image-header.63a3b253.jpg","63a3b2534dcf12a0277e06dd091d8fc3"],["/static/media/image-header.ff7d0ec7.jpg","ff7d0ec73d3eeb8374d90ddfa184ae5d"],["/static/media/image-photography.0d242767.jpg","0d2427676c2640fbf6003e95748df0b3"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,n){var r=new URL(e);return n&&r.pathname.match(n)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),r=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,n),e=urlsToCacheKeys.has(a));var r="/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(a=new URL(r,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});