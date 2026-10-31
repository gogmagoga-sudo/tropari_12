const CACHE = 'tropari-v1';
const ASSETS = [
  './12_Тропари.html',
  './manifest.json',
  './icon-192.png',
  './icon-512.png',
  './tropar-rozhdestva-bogorodicy.mp3',
  './tropar-vozdvizheniju-kresta.mp3',
  './tropar-vvedeniju-vo-hram-presvjatoj-bogorodicy.mp3',
  './tropar-rozhdestva-hristova-raif.mp3',
  './tropar-bogojavlenija.mp3',
  './tropar-sreteniju-gospodnju.mp3',
  './tropar-blagoveshheniju.mp3',
  './056-Tropar-1-Glas-1.mp3',
  './tropar-vozneseniju-gospodnju.mp3',
  './tropar-na-den-svjatoj-troicy.mp3',
  './tropar-preobrazhenija-gospodnja.mp3',
  './tropar-presvjatoj-bogorodice-v-den-uspenija-ee.mp3'
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)));
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(r => r || fetch(e.request))
  );
});