chrome.storage.sync.get(['settings'], function(result) {

  if (result.settings[0].from == window.document.URL)
  {
    let newurl = result.settings[0].to;
    chrome.extension.sendRequest({redirect: newurl});
  }
});

// Save latest access URL
chrome.storage.local.set({myURL: window.document.URL}, function() {

});