self.addEventListener('fetch', function(event) {
  let url = new URL(event.request.url);
  if (url.origin === self.location.origin && url.pathname.startsWith('/play/')) {
    let newUrl = self.location.origin + '/mes-jeux' + url.pathname;
    event.respondWith(fetch(newUrl));
  }
});
