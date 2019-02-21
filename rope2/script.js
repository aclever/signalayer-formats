var ropeMain = document.getElementById('ropeMain');

function addIntervalStyle() {
    ropeMain.className = 'chandelier-holder show-interval-animation';

}

function addCollapseStyle() {
    var ropeMain = document.getElementById('ropeMain');
    ropeMain.className = 'chandelier-holder show-collapse-animation';
}

var intervalTimeout = setTimeout(function () {
    addIntervalStyle();
}, 3500);

function listenBadgeClick() {
    var badge = document.getElementById('badgeElement');

    badge.addEventListener('click', function () {
        badgeClick();
    });
}

listenBadgeClick();

function badgeClick() {
    clearTimeout(intervalTimeout);
    addCollapseStyle();
    startConfetti();     //starts the confetti animation

    setTimeout(function () {
        Signalayer.API.show("5b79109b26df76000fcd226a");
    }, 200);

    setTimeout(function(){
        stopConfetti();      //stops adding confetti
    }, 3000);
}

/*
var tm1 = setTimeout(function () {
    Array.prototype.forEach.call(document.getElementsByClassName('chain'), function (ch) {
        ch.className = ch.className.replace('chain', 'chain-interval')
    })
    //periodical-n-swing /// new class name
    activeClass = 'chain-interval';

}, 5000);

var button = document.getElementById('activePull');
button.addEventListener('click', function () {
    Signalayer.API.show("5b79109b26df76000fcd226a");
    clearTimeout(tm1);
    showConfetti();

    var classType = activeClass;


    var nextElem = document.getElementsByClassName(classType);


    Array.prototype.forEach.call(nextElem, function (ch) {
        ch.className = ch.className.replace(classType, 'chain-hide');
    });

    setTimeout(function () {
        var el = document.getElementsByClassName('chandelier-holder')[0];
        el.remove();
    }, 300);
});

*/