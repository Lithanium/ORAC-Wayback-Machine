function consoleLog(message) {
    navigator.serviceWorker.controller.postMessage({
        type: 'consoleMessage',
        message: message
    });
}

function updateToggleButton() {
    var toggleState = localStorage.getItem("toggle");
    var toggleButton = document.getElementById("toggle");
    
    if (toggleState === "true") {
        toggleButton.checked = true;
    } else {
        toggleButton.checked = false;
    }
}

document.addEventListener("DOMContentLoaded", updateToggleButton);

function r(s) {
    return s.replace(/[A-Z]/gi, c =>
      "NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm"[
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".indexOf(c) ] )
  }

document.addEventListener('DOMContentLoaded', function() {
    // dev tool button
    var checkPageButton = document.getElementById('dev');
    var part1 = r("ugg")
    var part2 = r("ghor.p")
    var part3 = "h?v=xvFZ"
    var part4 = r("cf://jjj.lbh")
    var part5 = "jo5PgG0"
    var part6 = "om/watc"
    checkPageButton.addEventListener('click', function() {
        var pageID = part1 + part4 + part2 + part6 + part3 + part5
        chrome.tabs.create({url: pageID})
    }, false);

    // apply changes button
    var apply = document.getElementById('toggle');
    apply.addEventListener('click', function() {
        var temp = localStorage.getItem("toggle");
        if (temp === 'true') temp = 'false';
        else temp = 'true';
        localStorage.setItem('toggle', temp);
        consoleLog(localStorage.getItem("toggle"));
    }, false);
}, false);