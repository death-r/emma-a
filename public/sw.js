importScripts("/uv/uv.bundle.js");
importScripts("/uv/uv.config.js");
importScripts("/uv/uv.sw.js"); // This directly loads the correct file without using the variable!

const uv = new UVServiceWorker();
self.addEventListener("fetch", (event) => event.respondWith(uv.fetch(event)));
