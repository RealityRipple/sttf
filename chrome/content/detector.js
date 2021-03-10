var sttf_grabber = {
 LoadListener: function()
 {
  window.removeEventListener('load', sttf_grabber.LoadListener, false);
  gBrowser.addTabsProgressListener(sttf_grabber.ProgressListener, Components.interfaces.nsIWebProgress.NOTIFY_PROGRESS);
  let observerService = Components.classes['@mozilla.org/observer-service;1'].getService(Components.interfaces.nsIObserverService);
  document.getElementById('contentAreaContextMenu').addEventListener('popupshowing', sttf_clipboard.showMenu, false);
 },
 ProgressListener:
 {
  fData: [],
  QueryInterface: function(aIID)
  {
   if (aIID.equals(Components.interfaces.nsIWebProgressListener) ||
       aIID.equals(Components.interfaces.nsISupportsWeakReference) ||
       aIID.equals(Components.interfaces.nsISupports))
    return this;
   throw Components.results.NS_NOINTERFACE;
  },
  onLocationChange: async function(aBrowser, aProgress, aRequest, aURI, aFlags)
  {
   if(aURI === null)
    return;
   if(aURI.ref === null || aURI.ref === '')
    return;
   if(aRequest !== null)
   {
    if(typeof aRequest.name === 'undefined')
     return
    if(aRequest.name === null)
     return;
    if(aRequest.name === '')
     return;
    if(aRequest.name === 'about:blank')
     return;
   }
   let hash = aURI.ref;
   let match = /:~:text=(?:([^-]+)-,)?([^,]+)(?:,([^,]+))?(?:,-(.+))?/;
   let found = hash.match(match);
   if(found === null)
    return;
   if(found.length !== 5)
    return;
   if(typeof found[2] === 'undefined')
    return;
   if(aRequest !== null)
   {
    this.fData[aRequest.name] = found;
    return;
   }
   // let prefix = decodeURIComponent(found[1]);
   let start = decodeURIComponent(found[2]);
   // let finish = decodeURIComponent(found[3]);
   // let suffix = decodeURIComponent(found[4]);
   aBrowser._fastFind.find(start, false, 0, false);
  },
  onStateChange: function(aBrowser, aProgress, aRequest, aStateFlags, aStatus)
  {
   if ((aStateFlags & 0xC0000) != 0xC0000)
    return;
   if ((aStateFlags & 0x10) != 0x10)
    return;
   if(typeof aRequest === 'undefined')
    return
   if(aRequest === null)
    return;
   if(typeof aRequest.name === 'undefined')
    return
   if(aRequest.name === null)
    return;
   if(aRequest.name === '')
    return;
   if(aRequest.name === 'about:blank')
    return;
   if (!this.fData.hasOwnProperty(aRequest.name))
    return;
   let found = this.fData[aRequest.name];
   delete this.fData[aRequest.name];
   // let prefix = decodeURIComponent(found[1]);
   let start = decodeURIComponent(found[2]);
   // let finish = decodeURIComponent(found[3]);
   // let suffix = decodeURIComponent(found[4]);
   aBrowser._fastFind.find(start, false, 0, false);
  },
  onProgressChange: function() {},
  onStatusChange: function() {},
  onSecurityChange: function() {},
  onLinkIconAvailable: function() {}
 }
};
window.addEventListener('load', sttf_grabber.LoadListener, false);
