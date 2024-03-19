chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  console.log('[info][background]:receive from popup script', request);
  let result = null;
  switch (request.action) {
    case 'CHANGE_DATE_RANGE':
      result = saveDateRange(
          request.payload.startYear,
          request.payload.startMonth,
          request.payload.endYear,
          request.payload.endMonth
        );
      break;
    default:
      break;
  }
  sendResponse({ response: result });
});

function saveDateRange(
  startYear,
  startMonth,
  endYear,
  endMonth
){
  chrome.storage.local.set({ DATE_RANGE: {
    startYear,
    startMonth,
    endYear,
    endMonth
  }});
  return true;
}
