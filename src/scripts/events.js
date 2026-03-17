document.addEventListener('DOMContentLoaded', () => {
    const track = document.getElementById('carouselTrack');
    const nextBtn = document.getElementById('nextBtn');
    const prevBtn = document.getElementById('prevBtn');
    const dots = document.querySelectorAll('.dot');
    
    let currentIndex = 0;
    const totalPanes = dots.length;
    let slideInterval; // Stores the timer

    // Core function to move the track
    function updateCarousel(index) {
        track.style.transform = `translateX(-${index * 100}vw)`;
        
        dots.forEach(dot => dot.classList.remove('active'));
        dots[index].classList.add('active');
        
        currentIndex = index;
    }

    // Directional logic
    function nextSlide() {
        let newIndex = (currentIndex + 1) % totalPanes;
        updateCarousel(newIndex);
    }

    function prevSlide() {
        let newIndex = (currentIndex - 1 + totalPanes) % totalPanes;
        updateCarousel(newIndex);
    }

    // Button Listeners (clicks reset the auto-timer)
    nextBtn.addEventListener('click', () => {
        nextSlide();
        resetInterval(); 
    });

    prevBtn.addEventListener('click', () => {
        prevSlide();
        resetInterval();
    });

    // Dot Listeners
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            updateCarousel(index);
            resetInterval();
        });
    });

    // Auto-slide setup (5.5 seconds)
    function startInterval() {
        slideInterval = setInterval(nextSlide, 5500); 
    }

    function resetInterval() {
        clearInterval(slideInterval);
        startInterval();
    }

    // Kick off the timer on load
    startInterval();
});