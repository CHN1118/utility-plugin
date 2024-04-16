/* eslint-disable no-unused-vars */
import browser from "webextension-polyfill";
browser.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  console.log("Hello from the background");
});
// browser.tabs.executeScript({
//   file: "js/content-script.js",
// });
