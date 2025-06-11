self.addEventListener("install", async event => {
  const cache = await caches.open("pwa-assets");
  // it stores all resources on first SW install
  cache.addAll([
    "./index.html",
    "./dokter.html",
    "./departemen.html",
    "./app.js",
    "./assets/css/style.css",
    "./assets/img/favicon.png",
    "./assets/img/hero-bg.jpg",
    "./assets/img/about.jpg",
    "./assets/img/testimonials/testimonials-1.jpg",
    "./assets/img/testimonials/testimonials-2.jpg",
    "./assets/img/testimonials/testimonials-3.jpg",
    "./assets/img/testimonials/testimonials-4.jpg",
    "./assets/img/testimonials/testimonials-5.jpg",
    "./assets/img/icon/facebook.png",
    "./assets/img/icon/instagram.png",
    "./assets/img/icon/linkedin.png",
    "./assets/img/service/service-1.jpg",
    "./assets/img/service/service-2.jpg",
    "./assets/img/service/service-3.jpg",
    "./assets/img/service/service-4.jpg",
    "./assets/img/service/service-5.jpg",
    "./assets/img/service/service-6.jpg",
    "./assets/img/doctors/doctors-1.jpg",
    "./assets/img/doctors/doctors-2.jpg",
    "./assets/img/doctors/doctors-3.jpg",
    "./assets/img/doctors/doctors-4.jpg",
    "./assets/img/doctors/doctors-5.jpg",
    "./assets/img/doctors/doctors-6.jpg",
    "./assets/img/departemen/departments-1.jpg",
    "./assets/img/departemen/departments-2.jpg",
    "./assets/img/departemen/departments-3.jpg",
    "./assets/img/departemen/departments-4.jpg",
    "./assets/img/departemen/departments-5.jpg"
  
  ]); 
});

self.addEventListener("fetch", event => {
   event.respondWith(
     caches.match(event.request).then(cachedResponse => {
	   // It can update the cache to serve updated content on the next request
         return cachedResponse || fetch(event.request);
     }
   )
  )
});