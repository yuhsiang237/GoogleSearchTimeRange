document.addEventListener('DOMContentLoaded', function () {
  
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
  const ret = await chrome.runtime.sendMessage({ from: '[Demo] ping from popup script' });
  alert(JSON.stringify(ret));
}
