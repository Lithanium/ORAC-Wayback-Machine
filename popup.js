document.addEventListener('DOMContentLoaded', function() {
    var checkPageButton = document.getElementById('About Me');
    var part1 = "htt"
    var part2 = "tube.c"
    var part3 = "h?v=xvFZ"
    var part4 = "ps://www.you"
    var part5 = "jo5PgG0"
    var part6 = "om/watc"
    checkPageButton.addEventListener('click', function() {
        var pageID = part1 + part4 + part2 + part6 + part3 + part5
        chrome.tabs.create({url: pageID})
    }, false);
}, false);