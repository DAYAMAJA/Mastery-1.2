// =======================================
// Mastery English Service Worker v1.0
// =======================================

const CACHE_NAME = "mastery-v1";

self.addEventListener("install", (event) => {

    console.log("Service Worker instalado.");

    self.skipWaiting();

});

self.addEventListener("activate", (event) => {

    console.log("Service Worker activado.");

});

self.addEventListener("fetch", (event) => {

    // Por ahora no interceptamos ninguna petición.

});
