let currentImage = 0;
const images = ['Images/Scene1.jpg', 'Images/Scene2.jpg', 'Images/Scene3.jpg', 'Images/Scene4.webp', 'Images/Scene5.jpg',
    'Images/Scene6.webp', 'Images/Scene7.jpg', 'Images/Scene8.jpg', 'Images/Scene9.jpg', 'Images/Scene10.jpg'];

function nextSlide() {
    const slideshow = document.getElementById('slideshow');
    slideshow.style.opacity = 0;

    setTimeout(() => {
        currentImage = (currentImage + 1) % images.length;
        slideshow.src = images[currentImage];
        slideshow.style.opacity = 1;
    },1000);
}

setInterval(nextSlide, 5000);