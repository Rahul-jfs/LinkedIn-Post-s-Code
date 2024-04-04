function loadScript(src) {
  let script = document.createElement("script");
  script.src = src;
  document.head.append(script);
}
// It inserts into the document a new, dynamically created, tag <script src="…"> with the given src. The browser automatically starts loading it and executes when complete.

// we need to use the new script as soon as it loads. It declares new functions, and we want to run them.
// But if we do that immediately after the loadScript(…) call, that wouldn’t work:

// eg:
loadScript("/my/script.js"); // the script has "function newFunction() {…}"
newFunction(); // no such function!

// Let’s add a callback function as a second argument to loadScript that should execute when the script loads:

function loadScript(src, callback) {
  let script = document.createElement("script");
  script.src = src;

  script.onload = () => callback(script);

  document.head.append(script);
}
