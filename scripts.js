function scrollLeftButton() {
    const slider = document.getElementById('photo-slider');
    const imageWidth = slider.querySelector('.work').clientWidth; // Get the width of a work item
    slider.scrollBy({
        left: -imageWidth,
        behavior: 'smooth'
    });
}

function scrollRightButton() {
    const slider = document.getElementById('photo-slider');
    const imageWidth = slider.querySelector('.work').clientWidth; // Get the width of a work item
    slider.scrollBy({
        left: imageWidth,
        behavior: 'smooth'
    });
}

function updateDots() {
    const slider = document.getElementById('photo-slider');
    const dots = document.querySelectorAll('.dot');
    const imageWidth = slider.querySelector('.work').clientWidth;
    const scrollPosition = slider.scrollLeft;
    const activeIndex = Math.round(scrollPosition / imageWidth);
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === activeIndex);
    });
}

function navigateToSlide(index) {
    const slider = document.getElementById('photo-slider');
    const imageWidth = slider.querySelector('.work').clientWidth;
    slider.scrollTo({
        left: imageWidth * index,
        behavior: 'smooth'
    });
    updateDots();
}

// Initialize dots
document.addEventListener('DOMContentLoaded', () => {
    updateDots();
    const slider = document.getElementById('photo-slider');
    slider.addEventListener('scroll', () => {
        // Update dots only when the scrolling stops
        clearTimeout(slider.scrollTimeout);
        slider.scrollTimeout = setTimeout(updateDots, 150);
    });
});



        