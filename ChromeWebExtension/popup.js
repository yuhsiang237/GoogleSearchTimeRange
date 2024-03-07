document.addEventListener('DOMContentLoaded', function () {
  populateYears('startYear');
  populateYears('endYear');
  populateMonths('startMonth');
  populateMonths('endMonth');

  document.querySelectorAll('.date-select').forEach(select => {
    select.addEventListener('change', adjustDays);
  });
});

function populateYears(selectorId) {
  const currentYear = new Date().getFullYear();
  for (let year = currentYear; year >= 1900; year--) {
    addOption(selectorId, year);
  }
}

function populateMonths(selectorId) {
  for (let month = 1; month <= 12; month++) {
    addOption(selectorId, month, month);
  }
}

function addOption(selectorId, value, text) {
  const option = new Option(text || value, value);
  document.getElementById(selectorId).appendChild(option);
}

function adjustDays() {
  chrome.tabs.getSelected(null, (tab) => {
    var tabId = tab.id;
    var sendMessage = (messageObj) => chrome.tabs.sendMessage(tabId, messageObj);
    sendMessage({ action: 'ROTATE' })
  });
}

