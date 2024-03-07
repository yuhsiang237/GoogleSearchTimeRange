chrome.runtime.onInstalled.addListener(() => {
  console.log('setup')
});

const rotateEvent = () => {
  console.log('r');
  alert('x1');
};
const reset = () => {
  console.log('d');
  alert('xy');
}

const onMessage = (message) => {
  switch (message.action) {
    case 'ROTATE':
      rotateEvent();
      break;
    case 'RESET':
      reset();
      break;
    default:
      break;
  }
}

chrome.runtime.onMessage.addListener(onMessage);
