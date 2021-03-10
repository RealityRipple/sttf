function copySelectedTextURL()
{
 let cWindow = gBrowser.contentWindow
 let currentURL = cWindow.location.href;
 let hashLoc = currentURL.indexOf("#");
 let clipboardCopy = Components.classes["@mozilla.org/widget/clipboardhelper;1"].getService(Components.interfaces.nsIClipboardHelper).copyString
 let appendToURL = "#:~:text=" + cWindow.getSelection().toString()
 if (hashLoc > 0)
  clipboardCopy(currentURL.substring(0, hashLoc) + appendToURL);
 else
  clipboardCopy(currentURL + appendToURL);
}
