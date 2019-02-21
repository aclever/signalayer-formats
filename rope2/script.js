
var activeClass = 'chain';

var tm1 = setTimeout(function () {
    Array.prototype.forEach.call(document.getElementsByClassName('chain'), function (ch) {
        ch.className = ch.className.replace('chain', 'chain-interval')
    })
    //periodical-n-swing /// new class name


    activeClass = 'chain-interval';

}, 5000);

var button = document.getElementById('activePull');
button.addEventListener('click', function () {
    clearTimeout(tm1);
    showConfetti();


    Signalayer.API.show("5b79109b26df76000fcd226a");


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