var formatContainer = document.createElement('div');
var formatText = document.createElement('div');
var formatIMG = document.createElement("img");

formatContainer.id = 'formatContainer';
formatContainer.className = 'hidden';

formatText.id = 'formatText';
formatText.className = 'format-text';
formatIMG.id = 'formatIMG';

formatIMG.src = "ahorse.png";
formatText.innerHTML = '<section class="container">\n' +
    '  <h1 class="title">\n' +
    '    <span>DOUBLE YOUR</span>\n' +
    '    <span>DEPOSIT</span>\n' +
    '    <span>UP TO $100</span>\n' +
    '  </h1>\n' +

    '<button id="activateButton">JOIN NOW</button>' +
    '<button id="closeButton">Close</button>'
// '  \n' +
// '  <h2 class="title">\n' +
// '    <span>This is</span>\n' +
// '    <span>a long</span>\n' +
// '    <span>sub title</span>\n' +
// '    \n' +
// '    \n' +
// '  </h2>\n' +
'</section>';


formatContainer.appendChild(formatIMG);
formatContainer.appendChild(formatText);
document.body.appendChild(formatContainer);


function runApp() {
    setTimeout(function () {
        formatContainer.className = 'format-animation-show';

        setTimeout(function () {
            formatContainer.className = 'hidden';
            runAnimation2();
        }, 3000)
    }, 3000);
}

function runAnimation2() {

    formatContainer.className = 'format-animation-show-2';

    setTimeout(function () {
        formatContainer.className = 'hidden';

        runAnimation3();
    }, 2000)

}


function runAnimation3() {
    formatContainer.className = 'format-animation-show-3';

    setTimeout(function () {
        formatText.className = 'format-text format-text-show';
        var button = document.getElementById('activateButton');
        var closeButton = document.getElementById('closeButton');

        button.addEventListener('click', function () {
            (window.analytics && analytics.track("[FORMATS] Click on horse format."));

            setTimeout(function () {
                formatText.className = 'format-text format-text-hide';
                formatContainer.className = 'format-animation-hide';
                Signalayer.API.show(CONFIG.thankId);
            }, 200);
        });

        closeButton.addEventListener('click', function () {
            (window.analytics && analytics.track("[FORMATS] Cancel the horse format."));

            setTimeout(function () {
                formatText.className = 'format-text format-text-hide';
                formatContainer.className = 'format-animation-hide';
            }, 200);
        });
    }, 1000)
}
