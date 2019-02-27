var intervalTimeout = null;
var ropeMain = document.getElementById('ropeMain');
var soundTaDa = new Audio('TaDasound.mp3');

(window.analytics && analytics.track("[FORMATS] Visit to page [Rope]"));

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
        (window.analytics && window.analytics.track("[FORMATS] Click on Rope Format"));
        console.log('click');
        badgeClick();
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
        try {
            soundTaDa.play();
        } catch (e) {

        }
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



