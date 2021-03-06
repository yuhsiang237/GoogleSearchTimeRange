function init(){
  console.log("GoogleSearchTimeRange Load...")
  const queryString = window.location.search
  const urlParams = new URLSearchParams(queryString)
  const tbs = urlParams.get('tbs')
  const timeRange ={
    start: {
      year:'1995',
      month:'10',
      day:'10',
    },
    end: {
      year:'2000',
      month:'10',
      day:'10',
    }
  }
  if(!tbs){
    const directUrl = `${window.location.href}&tbs=cdr%3A1%2Ccd_min%3A${timeRange.start.month}%2F${timeRange.start.day}%2F${timeRange.start.year}%2Ccd_max%3A${timeRange.end.month}%2F${timeRange.end.day}%2F${timeRange.end.year}`
    window.location.href = directUrl
  }
}
init();