var dragItem = document.querySelector("#badgeElement");
var container = document.querySelector("#ropeMain");

var active = false;
var currentX;
var currentY;
var initialX;
var initialY;
var xOffset = 0;
var yOffset = 0;

container.addEventListener("touchstart", dragStart, false);
container.addEventListener("touchend", dragEnd, false);
container.addEventListener("touchmove", drag, false);

container.addEventListener("mousedown", dragStart, false);
container.addEventListener("mouseup", dragEnd, false);
container.addEventListener("mousemove", drag, false);

function dragStart(e) {
    if (e.type === "touchstart") {
        initialX = e.touches[0].clientX - xOffset;
        initialY = e.touches[0].clientY - yOffset;
    } else {
        initialX = e.clientX - xOffset;
        initialY = e.clientY - yOffset;
    }

    if (e.target === dragItem) {
        active = true;
    }
}

function dragEnd(e) {
    initialX = currentX;
    initialY = currentY;

    active = false;

    if (e.target.id === "badgeElement") {
        badgeClick();
    }
}

function drag(e) {
    if (active) {
        e.preventDefault();

        if (e.type === "touchmove") {
            currentX = e.touches[0].clientX - initialX;
            currentY = e.touches[0].clientY - initialY;
        } else {
            currentX = e.clientX - initialX;
            currentY = e.clientY - initialY;
        }

        xOffset = currentX;
        yOffset = currentY;


        setTranslate(currentX, currentY, dragItem);
        setContainer(currentX, currentY, dragItem);
    }
}

function setTranslate(xPos, yPos, el) {
    //el.style.transform = "translate3d(" + 0 + "px, " + yPos + "px, 0)";
}

function setContainer(xPos, yPos, el) {
    var BOTTOM_VALUE = ((yPos) + (-190));

    if (BOTTOM_VALUE > -65) {
        badgeClick();
    } else {

        container.style.marginTop = BOTTOM_VALUE + "px";
    }
}