const slideshowImages = document.querySelectorAll(".slideshow-img");

const nextImageDelay = 3000;
let currImageIndex = 0;

slideshowImages[currImageIndex].style.opacity = 1;

setInterval(nextImage, nextImageDelay);

function nextImage() {
    slideshowImages[currImageIndex].style.opacity = 0;
    currImageIndex = (currImageIndex + 1) % slideshowImages.length;
    slideshowImages[currImageIndex].style.opacity = 1;
}