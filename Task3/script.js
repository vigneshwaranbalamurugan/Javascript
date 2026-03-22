const galleryImages = document.getElementsByClassName("gallery-image");
const overlayImg = document.getElementById("overlay-img");
const closeBtn = document.getElementById("close");

for (let i = 0; i < galleryImages.length; i++) {
    galleryImages[i].addEventListener("click", function () {
        overlay.classList.add("active");
        overlayImg.src = this.src;
    });

}

closeBtn.addEventListener("click", function () {
    overlay.classList.remove("active");
});
