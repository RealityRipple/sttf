function copySelectedTextURL() {
 Cc["@mozilla.org/widget/clipboardhelper;1"].getService(Ci.nsIClipboardHelper).copyString(gBrowser.currentURI.spec + "#:~:text=" + gBrowser.contentWindow.getSelection().toString());
}