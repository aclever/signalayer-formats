var racContainer = document.createElement('div');
racContainer.className = 'raccoon-container';
var rac1 = document.createElement('img');
rac1.src = 'animation-sketch_1.gif';

var rac2 = document.createElement('img');
rac2.src = 'animation-sketch_1-3.gif';
rac2.className = 'above';

racContainer.appendChild(rac1);
document.body.appendChild(racContainer);


var step = 1;

var blocked = false;

rac1.addEventListener('click', function () {
    if (blocked) return false;
    blocked = true;

    if (step === 1) {

        setTimeout(function () {
            racContainer.appendChild(rac2);
            blocked = false;
            step = 2;
        }, 700);

        rac1.src = 'animation-sketch_1-2.gif';
    }

    if (step === 2) {
        step = 3;
        blocked = false;
        rac2.src = 'animation-sketch_1-4.gif';
    }
})


rac2.addEventListener('click', function () {
    rac2.src = 'animation-sketch_1-4.gif';
    startConfetti();     //starts the confetti animation

    Signalayer.API.show("5b79109b26df76000fcd226a");


    setTimeout(function(){
        racContainer.className = 'raccoon-container hidden';
    }, 800);

    setTimeout(function(){
        stopConfetti();
    }, 2000);
})