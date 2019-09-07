chrome.runtime.sendNativeMessage('ping_pong',
  { text: "ping" },
  function(response) {
    console.log("Received " + response);
  });

// let tport = chrome.runtime.connectNative('spear_iron');

// console.dir("starting native app")
// let tport = chrome.runtime.connectNative('ping_pong');
// tport.postMessage({ text: "ping" });
// console.dir("native app started")
// tport.onMessage.addListener(function(msg) {
//   console.log("Received" + msg);
// });
// tport.postMessage({ text: "Hello, my_application" });
// port.onDisconnect.addListener(function() {
//   console.log("Disconnected");
// });



  chrome.runtime.onConnect.addListener(function(port) {
    port.onMessage.addListener(function(msg) {
       handleMessageFromContent(msg, port);
      //  tport.postMessage(msg);
    });
  });


  handleMessageFromContent = (msg, port) =>{
      try{
          let data = JSON.parse(msg);
          if(data.type == "Connect_WS-RPC"){
            console.log(msg);
            port.postMessage("Response from extension for : " + msg);
          }
      }catch(e){
        console.log(msg);
        port.postMessage("Response from extension for : " + msg);
      }
  }