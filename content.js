var port = chrome.runtime.connect();

window.addEventListener("message", function(event) {
  // We only accept messages from ourselves
  if (event.source != window)
    return;

  if (event.data.type && (event.data.type == "Connect_WS_RPC")) {
    console.log("Content script received: " + event.data.text);
    port.postMessage(event.data.text);
  }
}, false);

port.onMessage.addListener(function(msg) {
    console.log(msg);
    alert(msg);
    window.postMessage({ type: "Connect_WS_RPC_Confirm", text: "Hello from server" }, "*");
});