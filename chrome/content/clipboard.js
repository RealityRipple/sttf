var sttf_clipboard = {
 copySelectedTextURL: function()
 {
  let cWindow = gBrowser.contentWindow;
  let currentURL = cWindow.location.href;
  let hashLoc = currentURL.indexOf("#");
  let clipboardCopy = Components.classes["@mozilla.org/widget/clipboardhelper;1"].getService(Components.interfaces.nsIClipboardHelper).copyString;
  let appendToURL = "#:~:text=" + encodeURIComponent(cWindow.getSelection().toString());
  if (hashLoc > 0)
   clipboardCopy(currentURL.substring(0, hashLoc) + appendToURL);
  else
   clipboardCopy(currentURL + appendToURL);
 },
 showMenu: function()
 {
  let pfs = Components.classes['@mozilla.org/preferences-service;1'].getService(Components.interfaces.nsIPrefService).getBranch('extensions.sttf.');
  if (pfs.getBoolPref('addcontextmenuitem') === false)
  {
   document.getElementById('context-sttf').hidden = true;
   return;
  }
  let selStr = '';
  if ((typeof gContextMenu === 'object') && gContextMenu.searchSelected)
   selStr = gContextMenu.searchSelected;
  else if (typeof getBrowserSelection === 'function')
   selStr = getBrowserSelection();
  else if (typeof window._content !== 'undefined' || window._content === null)
   selStr = window._content.getSelection();
  else
  {
   let thisselection = document.commandDispatcher.focusedWindow.getSelection();
   selStr = thisselection.toString();
  }
  if (selStr.length > 0)
   document.getElementById('context-sttf').hidden = false;
  else
   document.getElementById('context-sttf').hidden = true;
 }
}
