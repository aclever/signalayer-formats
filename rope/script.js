var intervalTimeout = null;
var ropeMain = document.getElementById('ropeMain');
var soundTaDa = new Audio('TaDasound.mp3');


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
}


function badgeClick() {
    clearTimeout(intervalTimeout);
    addCollapseStyle();
    startConfetti();     //starts the confetti animation


    setTimeout(function () {
        Signalayer.API.show("5b79109b26df76000fcd226a");
        soundTaDa.play();
    }, 200);

    setTimeout(function () {
        stopConfetti();      //stops adding confetti
    }, 3000);
}


function runApp() {
    setTimeout(function () {
        addStartStype();

        intervalTimeout = setTimeout(function () {
            addIntervalStyle();
        }, 3500);

        listenBadgeClick();
    }, 3000);
}