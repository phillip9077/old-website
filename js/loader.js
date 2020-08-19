const slideshowIcons = document.querySelectorAll(".icon");

const nextIconDelay = 1000;
var currIconIndex = 0;

setInterval(nextIcon, nextIconDelay);
currIconIndex = 0;

function nextIcon() {
    if(currIconIndex < slideshowIcons.length){
        slideshowIcons[currIconIndex].style.opacity = 1;
        currIconIndex++;
    }
}
