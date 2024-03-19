chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  console.log('receive from popup script', request);
  sendResponse({ response: "pong from background" });
});