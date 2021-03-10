function copySelectedTextURL() {
 var cWindow = gBrowser.contentWindow
 var currentURL = cWindow.location.href;
 var hashLoc = currentURL.indexOf("#");
 var clipboardCopy = Components.classes["@mozilla.org/widget/clipboardhelper;1"].getService(Ci.nsIClipboardHelper).copyString
 var appendToURL = "#:~:text=" + cWindow.getSelection().toString()
 if (hashLoc > 0) {
  clipboardCopy(currentURL.substring(0, hashLoc) + appendToURL);
 } else {
  clipboardCopy(currentURL + appendToURL);
 }
}
