var img = document.createElement('img');
img.src = 'rino.jpeg';

var imgContainer = document.createElement('div');


imgContainer.className = 'img-container';


setTimeout(function(){
    imgContainer.innerHTML = '<h3>Try Signalayer free for 14 days</h3>' +
        '<p>Start creating online marketing campaigns for your business with Signalayer’s 14-day free trial. No commitment.</p>'
        + '<button>Please NOW</button>';
}, 2400);

var placeForBanner = document.getElementById('placeForBanner');

placeForBanner.appendChild(imgContainer);


function runApp() {
    // document.body.appendChild(imgContainer);
}