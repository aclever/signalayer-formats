function buildStyles() {
    var link = document.createElement('link');

    link.rel = "stylesheet";
    link.type = "text/css";
    link.href = "../common/embed.css";

    document.head.appendChild(link);
}

buildStyles();

(function onBodyReady() {
    if (document.body) {
        var url = document.location.hash;
        var frame = document.createElement("iframe");
        frame.id = "frameContainer";
        frame.src = url.substr(1, url.length);
        document.body.appendChild(frame);

        frame.addEventListener("load", function () {
            if (window.runApp) {
                window.runApp();
            }
        })

        appendTracker();

    } else {
        setTimeout(function () {
            onBodyReady();
        }, 200);
    }
})();


function appendTracker() {
    var script = document.createElement('script');
    script.src = '../comon/user.js';
    script.type = 'text/javascript;';
    document.body.appendChild(script);
}