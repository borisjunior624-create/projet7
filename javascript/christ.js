// Changer le fond d'écran de la section header
const header = document.getElementById('OUR BLOG');
const backgroundImages = [
    '../images/7.jpg',
    '../images/11.jpg',
    '../images/16.jpg',
];

let currentImageIndex = 0;

function changeBackground() {
    header.style.backgroundImage = `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.3)), url(${backgroundImages[currentImageIndex]})`;
    currentImageIndex = (currentImageIndex + 10) % backgroundImages.length;
}

// Changer le fond d'écran toutes les 10 secondes
setInterval(changeBackground, 10000);



