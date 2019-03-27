chrome.runtime.sendNativeMessage('ping_pong',
  { text: "ping" },
  function(response) {
    console.log("Received " + response);
  });


  chrome.runtime.onConnect.addListener(function(port) {
    port.onMessage.addListener(function(msg) {
        console.log(msg)
    });
  });