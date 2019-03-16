chrome.runtime.sendNativeMessage('ping_pong',
  { text: "ping" },
  function(response) {
    console.log("Received " + response);
  });