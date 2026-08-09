const images = document.querySelectorAll(".gallery-item img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.getElementById("close");
const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");

let currentIndex = 0;

// Open lightbox when an image is clicked
images.forEach((image, index) => {
    image.addEventListener("click", () => {
        currentIndex = index;
        showImage();
        lightbox.style.display = "flex";
    });
});

// Show selected image
function showImage() {
    lightboxImg.src = images[currentIndex].src;
}

// Next image
nextBtn.addEventListener("click", () => {
    currentIndex++;

    if (currentIndex >= images.length) {
        currentIndex = 0;
    }

    showImage();
});

// Previous image
prevBtn.addEventListener("click", () => {
    currentIndex--;

    if (currentIndex < 0) {
        currentIndex = images.length - 1;
    }

    showImage();
});

// Close lightbox
closeBtn.addEventListener("click", () => {
    lightbox.style.display = "none";
});

// Close when clicking outside the image
lightbox.addEventListener("click", (event) => {
    if (event.target === lightbox) {
        lightbox.style.display = "none";
    }
});

// Keyboard navigation
document.addEventListener("keydown", (event) => {
    if (lightbox.style.display === "flex") {

        if (event.key === "ArrowRight") {
            currentIndex++;

            if (currentIndex >= images.length) {
                currentIndex = 0;
            }

            showImage();
        }

        if (event.key === "ArrowLeft") {
            currentIndex--;

            if (currentIndex < 0) {
                currentIndex = images.length - 1;
            }

            showImage();
        }

        if (event.key === "Escape") {
            lightbox.style.display = "none";
        }
    }
});