// Import stylesheets
import "./style.css";

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById("app");
appDiv.innerHTML = `<h1>Window.postMessage() with token example: popup</h1>`;

/*
 * In the popup's scripts, running on <https://typescript-sipd27.stackblitz.io>:
 */
// Called sometime after postMessage is called
var url = new URL(window.location.href); //url example: https://typescript-sipd27.stackblitz.io?token=token1234
var token = url.searchParams.get("token");
function receiveMessage2(event) {
  // Do we trust the sender of this message?
  if (event.origin !== "https://typescript-dytzza.stackblitz.io") return;
  if (event.data && event.data.token !== token) return;
  //do something...
  console.log(event.data);
  var data = {
    token: token,
    message: "hello! My URL is " + window.location.href
  };
  event.source.postMessage(data, event.origin);
}
window.addEventListener("message", receiveMessage2, false);
