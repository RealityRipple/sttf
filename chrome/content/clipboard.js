function copySelectedTextURL() {
 var currentURL = gBrowser.contentWindow.location.href;
 var hashLoc = currentURL.indexOf("#");
 if (hashLoc > 0) {
  Cc["@mozilla.org/widget/clipboardhelper;1"].getService(Ci.nsIClipboardHelper).copyString(currentURL.substring(0, hashLoc) + "#:~:text=" + gBrowser.contentWindow.getSelection().toString());
 } else {
  Cc["@mozilla.org/widget/clipboardhelper;1"].getService(Ci.nsIClipboardHelper).copyString(currentURL + "#:~:text=" + gBrowser.contentWindow.getSelection().toString());
 }
}