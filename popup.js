chrome.storage.local.get(['myURL'], function(result) {
    var el = document.getElementById("myURL");
    if (el) {
        el.innerHTML = result.myURL;
    }
});

let button = document.getElementById("settings");
if (button) {
    button.addEventListener("click", function(){
        window.open("./options.html");
    });
}
