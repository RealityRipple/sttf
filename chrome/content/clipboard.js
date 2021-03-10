function copySelectedTextURL() {
 var currentURL = gBrowser.contentWindow.location.href;
 var hashLoc = currentURL.indexOf("#");
 if (hashLoc > 0) {
  Components.classes["@mozilla.org/widget/clipboardhelper;1"].getService(Components.interfaces.nsIClipboardHelper).copyString(currentURL.substring(0, hashLoc) + "#:~:text=" + gBrowser.contentWindow.getSelection().toString());
 } else {
  Components.classes["@mozilla.org/widget/clipboardhelper;1"].getService(Components.interfaces.nsIClipboardHelper).copyString(currentURL + "#:~:text=" + gBrowser.contentWindow.getSelection().toString());
 }
}
