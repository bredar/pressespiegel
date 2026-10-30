const SHELL='ps-shell-v1',DATA='ps-data-v1';
const ASSETS=['./','index.html','app.webmanifest','favicon.svg','icons/icon-192.png','icons/icon-512.png','icons/apple-touch-icon.png'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(SHELL).then(c=>c.addAll(ASSETS)).then(()=>self.skipWaiting()))});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==SHELL&&k!==DATA).map(k=>caches.delete(k)))).then(()=>self.clients.claim()))});
async function networkFirst(req){
  const c=await caches.open(DATA);
  try{const r=await fetch(req);if(r.ok){const u=new URL(req.url);u.search='';c.put(u.href,r.clone())}return r}
  catch(e){const hit=await c.match(req,{ignoreSearch:true});if(hit)return hit;throw e}
}
async function cacheFirst(req){
  const hit=await caches.match(req,{ignoreSearch:true});
  const net=fetch(req).then(r=>{if(r.ok)caches.open(SHELL).then(c=>c.put(req,r.clone()));return r}).catch(()=>null);
  return hit||(await net)||(req.mode==='navigate'?caches.match('index.html'):Response.error());
}
self.addEventListener('fetch',e=>{
  const req=e.request;if(req.method!=='GET')return;
  const u=new URL(req.url);
  if(/\.(md|json)$/.test(u.pathname)&&!u.pathname.endsWith('app.webmanifest'))return e.respondWith(networkFirst(req));
  if(req.mode==='navigate')return e.respondWith(fetch(req).then(r=>{caches.open(SHELL).then(c=>c.put('index.html',r.clone()));return r}).catch(()=>caches.match('index.html')));
  if(u.origin===location.origin||u.host.includes('fonts.g'))return e.respondWith(cacheFirst(req));
});
