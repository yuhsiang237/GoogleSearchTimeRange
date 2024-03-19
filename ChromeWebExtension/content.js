async function getDateRange() {
  return new Promise(async function (res) {
    chrome.storage.local.get(['DATE_RANGE'], async function (result) {
      const dateRange = result.DATE_RANGE;
      dateRange.startDay = 10,
      dateRange.endDay = 10,
      res(dateRange);
    });
  });
}


async function init(){
  console.log("[info][content]: GoogleSearch DateRange is loading");
  const dateRange = await getDateRange();
  const queryString = window.location.search
  const urlParams = new URLSearchParams(queryString)
  const tbs = urlParams.get('tbs')

  if(!tbs){
    const directUrl = `${window.location.href}&tbs=cdr%3A1%2Ccd_min%3A${dateRange.startMonth}%2F${dateRange.startDay}%2F${dateRange.startYear}%2Ccd_max%3A${dateRange.endMonth}%2F${dateRange.endDay}%2F${dateRange.endYear}`
    window.location.href = directUrl
  }
  console.log("[info][content]: GoogleSearch DateRange is loading success");
}
init();