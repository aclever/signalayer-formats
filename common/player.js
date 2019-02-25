var CONFIG = {
    thankId: "5c73f606d652cf000ffe06ee",  //
    thankId2: "", //
    thankId3: "", //
    thankId4: ""  //
};

window.Signalayer || function (t, e) {
    var o = {
        url: "https://cdn.signalayer.com/static/player.js",
        key: "1oho_OxrKSMNiqy6Gwk8kgTqA2q1oEsuuEylNEDXTs9",
        async: true
    };
    window.Signalayer = {cs: [], _apiKey: o.key};
    for (var r = ["identify", "goal", "updateUserData", "start", "stop", "refresh", "show", "hide", "on"], i = {}, n = 0; n < r.length; n++) {
        var a = r[n];
        i[a] = function (t) {
            return function () {
                var e = Array.prototype.slice.call(arguments);
                window.Signalayer.cs.push({method: t, args: e})
            }
        }(a)
    }
    window.Signalayer.API = i;
    var n = t.createElement(e), s = t.getElementsByTagName(e)[0];
    n.type = "text/javascript", n.async = o.async, s.parentNode.insertBefore(n, s), n.src = o.url
}(document, "script");