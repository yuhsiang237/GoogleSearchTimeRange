chrome.runtime.onInstalled.addListener(async() => {
  await chrome.storage.sync.get("defaultTimeRange", ({ defaultTimeRange }) => {
    if(defaultTimeRange){
      chrome.storage.sync.set({ defaultTimeRange : defaultTimeRange });  
      console.log(`Time range : `, defaultTimeRange);
    }else{
      const defaultTimeRange ={
        start: {
          year:'1995',
          month:'10',
          day:'10',
        },
        end: {
          year: (new Date()).getFullYear(),
          month: ((new Date()).getMonth()+1),
          day:(new Date()).getDate(),
        }
      }
      chrome.storage.sync.set({ defaultTimeRange : defaultTimeRange });
    }
  });
});

const input = document.getElementById('startDate');

input.addEventListener('change', updateValue);

function updateValue(e) {
  log.textContent = e.target.value;
}