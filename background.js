// chrome.runtime.sendNativeMessage('ping_pong',
//   { text: "ping" },
//   function(response) {
//     console.log("Received " + response);
//   });

let port = chrome.runtime.connectNative('spear_iron');
// port.postMessage({ text: "Hello, my_application" });

port.onMessage.addListener(function(msg) {
  console.log("Received" + msg);
});
// port.onDisconnect.addListener(function() {
//   console.log("Disconnected");
// });



  chrome.runtime.onConnect.addListener(function(port) {
    port.onMessage.addListener(function(msg) {
       handleMessageFromContent(msg, port);
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