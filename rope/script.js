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

        (window.analytics && window.analytics.track("[FORMATS] Click on Rope Format"));
    });

    var closeBtn = document.getElementById('closeBtn');

    closeBtn.addEventListener('click', function (e) {
        e.preventDefault();
        e.stopPropagation();

        (window.analytics && window.analytics.track("[FORMATS] Close the Rope Format"));
        addCollapseStyle();
    })
}


function badgeClick() {
    clearTimeout(intervalTimeout);
    addCollapseStyle();
    startConfetti();     //starts the confetti animation


    setTimeout(function () {
        Signalayer.API.show(CONFIG.thankId);
        soundTaDa.play();
    }, 200);

    setTimeout(function () {
        stopConfetti();      //stops adding confetti
    }, 3000);
}


function runApp() {
    listenBadgeClick();
    // listenBadgeEvents();
    setTimeout(function () {
        (window.analytics && analytics.track("[FORMATS] Start Rope format."));
        addStartStype();

        intervalTimeout = setTimeout(function () {
            addIntervalStyle();
        }, 3500);
    }, 3000);
}



