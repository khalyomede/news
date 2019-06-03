import "workbox-sw";
import { workbox as core } from "workbox-core";
import { workbox as strategies } from "workbox-strategies";
import { workbox as routing } from "workbox-routing";

const networkFirst = new strategies.strategies.NetworkFirst();
const cacheFirst = new strategies.strategies.CacheFirst();

core.core.clientsClaim();
core.core.skipWaiting();

routing.routing.registerRoute("/", networkFirst);
routing.routing.registerRoute("/bookmarked", networkFirst);
routing.routing.registerRoute("/setting", networkFirst);
routing.routing.registerRoute("/setting/language", networkFirst);
routing.routing.registerRoute(/\.(js|css)/, networkFirst);
routing.routing.registerRoute(/\.(jpg|jpeg|png|svg|webp)/, cacheFirst);
