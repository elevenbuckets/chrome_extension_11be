chrome.runtime.sendNativeMessage('ping_pong',
  { text: "ping" },
  function(response) {
    console.log("Received " + response);
  });

  chrome.runtime.onMessage.addListener(function(message, callback) {
    console.log(message)
  });