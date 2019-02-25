var intervalTimeout = null;
var ropeMain = document.getElementById('ropeMain');
var soundTaDa = new Audio('TaDasound.mp3');


var getNodeStyle = function (oElm, strCssRule) {
    var strValue = "";
    if (document.defaultView && document.defaultView.getComputedStyle) {
        strValue = document.defaultView.getComputedStyle(oElm, "").getPropertyValue(strCssRule);
    }
    else if (oElm.currentStyle) {
        strCssRule = strCssRule.replace(/\-(\w)/g, function (strMatch, p1) {
            return p1.toUpperCase();
        });
        strValue = oElm.currentStyle[strCssRule];
    }
    return strValue;
};

var getNodeOffset = function (elem) {
    try {
        var box = elem.getBoundingClientRect();

        var body = document.body;
        var docEl = document.documentElement;

        var scrollTop = window.pageYOffset || docEl.scrollTop || body.scrollTop;
        var scrollLeft = window.pageXOffset || docEl.scrollLeft || body.scrollLeft;

        var clientTop = docEl.clientTop || body.clientTop || 0;
        var clientLeft = docEl.clientLeft || body.clientLeft || 0;

        var top = box.top + scrollTop - clientTop;
        var left = box.left + scrollLeft - clientLeft;

        return {y: Math.round(top), x: Math.round(left)};
    } catch (e) {

        return {y: 0, x: 0};
    }
};

function addStartStype() {
    ropeMain.className = 'chandelier-holder';
}

function addIntervalStyle() {
    ropeMain.className = 'chandelier-holder show-interval-animation';
}

function addCollapseStyle() {
    var ropeMain = document.getElementById('ropeMain');
    ropeMain.className = 'chandelier-holder show-collapse-animation';
}


function listenBadgeClick() {
    var badge = document.getElementById('badgeElement');

    badge.addEventListener('click', function () {
        badgeClick();
    });

    var closeBtn = document.getElementById('closeBtn');

    closeBtn.addEventListener('click', function () {
        addCollapseStyle();
    })
}


function badgeClick() {
    (window.analytics && window.analytics.track("Clicked op Rope"));
    clearTimeout(intervalTimeout);
    addCollapseStyle();
    startConfetti();     //starts the confetti animation


    setTimeout(function () {
        Signalayer.API.show("5c73f606d652cf000ffe06ee");
        soundTaDa.play();
    }, 200);

    setTimeout(function () {
        stopConfetti();      //stops adding confetti
    }, 3000);
}


function listenBadgeEvents() {
    var badgeElement = document.getElementById('badgeElement');

    var dragged;

    badgeElement.addEventListener("drag", function (event) {
        var shiftY = event.clientY - badgeElement.getBoundingClientRect().top;

        //badgeElement.style.position = 'fixed';
        //badgeElement.style.top = event.pageY + "px";
    }, false);


    badgeElement.addEventListener("dragstart", function (event) {
        // store a ref. on the dragged elem
        dragged = event.target;
        // make it half transparent
        //event.target.style.opacity = .5;
    }, false);

    badgeElement.addEventListener("", function (event) {
        // store a ref. on the dragged elem
        dragged = event.target;
        // make it half transparent
        //event.target.style.opacity = .5;

        let position = getNodeOffset(dragged);
    }, false);

    badgeElement.addEventListener("dragend", function (event) {
        // reset the transparency
        //event.target.style.opacity = "";
    }, false);
}


function runApp() {
    listenBadgeClick();
    // listenBadgeEvents();
    setTimeout(function () {
        addStartStype();

        intervalTimeout = setTimeout(function () {
            addIntervalStyle();
        }, 3500);
    }, 3000);
}



