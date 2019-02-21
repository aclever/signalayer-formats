var img = document.createElement('img');
img.src = 'rino.jpeg';

var imgContainer = document.createElement('div');


imgContainer.className = 'img-container';


setTimeout(function () {
    imgContainer.innerHTML = '<h3>Try Signalayer free for 14 days</h3>' +
        '<p>Start creating online marketing campaigns for your business with Signalayer’s 14-day free trial. No commitment.</p>'
        + '<button id="activeButton">Please NOW</button>';
}, 2400);

var placeForBanner = document.getElementById('placeForBanner');

placeForBanner.appendChild(imgContainer);


function runApp() {
    // document.body.appendChild(imgContainer);
}


var onSetupButton = document.getElementById('onSetupButton');

var activeButton = document.getElementById('activeButton');

activeButton.addEventListener('click', function () {
    analytics.track("click on embed button");
})

// onSetupButton.addEventListener('click', function () {
//     document.getElementsByClassName('')
//     document.body.addEventListener('mouseover', function (e) {
//         e.target.className = 'glowing';
//     })
// });