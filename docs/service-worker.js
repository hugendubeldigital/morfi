"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/morfi/index.html","8bdfdf79c27e3ae68b052d1d01b6fd2a"],["/morfi/static/css/main.cf16a416.css","d89565eacfa5c4797faa61fe25d876fb"],["/morfi/static/js/main.b2749e14.js","dceaad99e7cbfdda737f90d25b2673ea"],["/morfi/static/media/fa-brands-400.2324cf82.svg","2324cf820010c10e0bc35b2b99f9b568"],["/morfi/static/media/fa-brands-400.3189f3e1.woff2","3189f3e1d3b91f842e3aa647c7728bfe"],["/morfi/static/media/fa-brands-400.951e024f.ttf","951e024f1f7cfe33c4838a3c146d5408"],["/morfi/static/media/fa-brands-400.bf6522fe.eot","bf6522fea650fffa9a4ca3f2fc6c5062"],["/morfi/static/media/fa-brands-400.df6b6c39.woff","df6b6c3900c43cafe91cdaa5caa39c71"],["/morfi/static/media/fa-regular-400.17b76241.woff","17b7624171b4b447d2e783a88a016391"],["/morfi/static/media/fa-regular-400.32837fb7.svg","32837fb71c7b475d67795d4260af454b"],["/morfi/static/media/fa-regular-400.57036b12.woff2","57036b128ae0c649e364c581ce450970"],["/morfi/static/media/fa-regular-400.72ca8dd9.ttf","72ca8dd93f526b4f21e3e39aa79d9bcc"],["/morfi/static/media/fa-regular-400.77f20321.eot","77f203215b127bbbf1028a0b90d1c73a"],["/morfi/static/media/fa-solid-900.4194be4b.eot","4194be4b16699db0db223f40060f661f"],["/morfi/static/media/fa-solid-900.60e625f3.woff","60e625f3538c9e9aa2a955a6994156fc"],["/morfi/static/media/fa-solid-900.6ae956a3.woff2","6ae956a36625015a447446e8f489f267"],["/morfi/static/media/fa-solid-900.e9aa29f3.svg","e9aa29f32b2bdbb9988fb97b37f16e42"],["/morfi/static/media/fa-solid-900.eb1e2d8f.ttf","eb1e2d8f80107f26e5ba6fdce5ea4fe3"],["/morfi/static/media/form-logo.98e9ccc0.svg","98e9ccc0f78682a59c6e27abadb418d7"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(e){if(!e.redirected)return Promise.resolve(e);return("body"in e?Promise.resolve(e.body):e.blob()).then(function(a){return new Response(a,{headers:e.headers,status:e.status,statusText:e.statusText})})},createCacheKey=function(e,a,t,r){var n=new URL(e);return r&&n.pathname.match(r)||(n.search+=(n.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),n.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return a.every(function(a){return!a.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],r=new URL(a,self.location),n=createCacheKey(r,hashParamName,t,/\.\w{8}\./);return[r.toString(),n]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var r=new Request(t,{credentials:"same-origin"});return fetch(r).then(function(a){if(!a.ok)throw new Error("Request for "+t+" returned a response with status "+a.status);return cleanResponse(a).then(function(a){return e.put(t,a)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(t){return Promise.all(t.map(function(t){if(!a.has(t.url))return e.delete(t)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var a,t=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(a=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,"index.html"),a=urlsToCacheKeys.has(t));!a&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(t=new URL("/morfi/index.html",self.location).toString(),a=urlsToCacheKeys.has(t)),a&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(a){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,a),fetch(e.request)}))}});