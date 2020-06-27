function processForm(e) {
    if (e.preventDefault) e.preventDefault();

    let settings = [
        {
            from: document.getElementById('redirect-from-0').value,
            to: document.getElementById('redirect-to-0').value
        }
    ];  

    chrome.storage.sync.set({'settings': settings}, function(result) {
        window.alert("Saved!");
    });

    return false;
}

var form = document.getElementById('my-form');
if (form.attachEvent) {
    form.attachEvent("submit", processForm);
} else {
    form.addEventListener("submit", processForm);
}

chrome.storage.sync.get(['settings'], function(result) {
    if (result.settings[0].from) {
        let el = document.getElementById('redirect-from-0')
        el.value = result.settings[0].from;
    }
    if (result.settings[0].to) {
        let el = document.getElementById('redirect-to-0')
        el.value = result.settings[0].to;
    }
});
  