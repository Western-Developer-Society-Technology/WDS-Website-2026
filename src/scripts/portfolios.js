const circles = document.querySelectorAll('.neon-circle');
    circles.forEach(circle => {
        circle.addEventListener('click', () => {
            const isActive = circle.classList.contains('active');
            circles.forEach(c => c.classList.remove('active')); // close others
            if (!isActive) circle.classList.add('active'); // open clicked one
        });
    });