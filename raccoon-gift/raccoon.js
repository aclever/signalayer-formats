(window.analytics && analytics.track("[FORMATS] Visit to page [Raccoon Gift]"));

function runApp() {
    (window.analytics && analytics.track("[FORMATS] Start Raccoon Gift format."));
    var racContainer = document.createElement('div');
    var closeIcon = document.createElement('div');
    var closeIconImg = document.createElement('img');
    closeIcon.className = 'close-btn';
    closeIconImg.src = "cls.svg";
    closeIcon.appendChild(closeIconImg);
    racContainer.appendChild(closeIcon);

    racContainer.className = 'raccoon-container';
    var rac1 = document.createElement('img');
    rac1.src = 'animation-1-1_no-bg.gif';

    var rac2 = document.createElement('img');
    rac2.src = 'animation-1-3_no-bg.gif';
    rac2.className = 'above';

    racContainer.appendChild(rac1);
    document.body.appendChild(racContainer);

    var step = 1;
    var blocked = false;

    rac1.addEventListener('click', function () {
        if (blocked) return false;
        blocked = true;

        if (step === 1) {
            (window.analytics && analytics.track("[FORMATS] Click Help Raccoon [Step 1]"));

            setTimeout(function () {
                rac1.remove();
                racContainer.appendChild(rac2);
                blocked = false;
                step = 2;
            }, 800);

            rac1.src = 'animation-1-2_no-bg.gif';
        }
    });


    rac2.addEventListener('click', function () {
        rac2.src = 'animation-1-4_no-bg.gif';
        startConfetti(); //starts the confetti animation

        (window.analytics && analytics.track("[FORMATS] Click Open Raccoon Gift [Step 2]"));

        setTimeout(function () {
            racContainer.className = 'raccoon-container hide-out';
            Signalayer.API.show(CONFIG.thankId);
        }, 200);

        setTimeout(function () {
            stopConfetti();
        }, 2000);
    });


    function hideFormat() {
        racContainer.className = 'raccoon-container hide-out';
    }


    closeIcon.addEventListener('click', function (e) {
        (window.analytics && window.analytics.track("[FORMATS] Close the Raccoon Format"));
        hideFormat();
    });

}