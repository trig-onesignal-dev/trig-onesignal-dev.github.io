// OneSignal service worker
importScripts("https://cdn.onesignal.com/sdks/web/v16/OneSignalSDK.sw.js");
// custom service worker
importScripts(`${self.origin}/sw.js`);