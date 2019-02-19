var formatContainer = document.createElement('div');
var formatText = document.createElement('div');
var formatIMG = document.createElement("img");

formatContainer.id = 'formatContainer';
formatContainer.className = 'hidden';

formatText.id = 'formatText';
formatText.className = 'format-text';
formatIMG.id = 'formatIMG';

formatIMG.src = "ahorse.png";
formatText.innerText = 'Join me in death';




formatContainer.appendChild(formatIMG);
formatContainer.appendChild(formatText);
document.body.appendChild(formatContainer);


function runAnimation1(){
    console.log('animation');
    formatContainer.className = 'format-animation-show';
}
