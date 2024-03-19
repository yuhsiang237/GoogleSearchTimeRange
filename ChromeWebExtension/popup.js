document.addEventListener('DOMContentLoaded', async function () {
  // Init form inputs
  initSelectYear('startYear');
  initSelectYear('endYear');
  initSelectMonth('startMonth');
  initSelectMonth('endMonth');
  
  // Set event for inputs
  document.querySelectorAll('.date-select')
    .forEach(select =>  select.addEventListener(
                        'change',
                        dateRangeChangeHandler));

  // Init user data
  const dateRange = await getDateRange();
  document.getElementById('startYear').value = dateRange.startYear ?? 2023;
  document.getElementById('startMonth').value = dateRange.startMonth ?? 1;
  document.getElementById('endYear').value = dateRange.endYear ?? 2024;
  document.getElementById('endMonth').value = dateRange.endMonth ?? 1;

});

function initSelectYear(selectorId) {
  const currentYear = new Date().getFullYear();
  for (let year = currentYear; year >= 1900; year--) 
    addOption(selectorId, year);
}

function initSelectMonth(selectorId) {
  for (let month = 1; month <= 12; month++)
    addOption(selectorId, month, month);
}

function addOption(selectorId, value, text) {
  const option = new Option(text || value, value);
  document.getElementById(selectorId).appendChild(option);
}

async function dateRangeChangeHandler() {
  const res = await chrome.runtime.sendMessage(
    { 
      action:"CHANGE_DATE_RANGE",
      payload:{
        startYear: document.getElementById("startYear").value,
        startMonth: document.getElementById("startMonth").value,
        endYear: document.getElementById("endYear").value,
        endMonth: document.getElementById("endMonth").value
      }
   });
  if(res.response == true){
    console.log('[info][popup]:receive from background script', res);
    location.reload();
  }
}

async function getDateRange() {
  return new Promise(async function (res, rej) {
    chrome.storage.local.get(['DATE_RANGE'], async function (result) {
      const dateRange = result.DATE_RANGE;
      dateRange.startDay = 10,
        dateRange.endDay = 10,
        res(dateRange);
    });
  });
}