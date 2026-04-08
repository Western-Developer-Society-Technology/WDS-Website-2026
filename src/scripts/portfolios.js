if (window.innerWidth <= 393) {
  document.querySelectorAll(
    '.ellipse ellipse, .ellipse1 ellipse, .ellipse2 ellipse, .ellipse3 ellipse, .ellipse4 ellipse, .ellipse5 ellipse'
  ).forEach(el => {
    el.setAttribute('rx', 4);
    el.setAttribute('ry', 4);
  });
}
if (window.innerWidth <= 480) {
  document.querySelectorAll(
    '.ellipse ellipse, .ellipse1 ellipse, .ellipse2 ellipse, .ellipse3 ellipse, .ellipse4 ellipse, .ellipse5 ellipse'
  ).forEach(el => {
    el.setAttribute('rx', 4);
    el.setAttribute('ry', 4);
  });
}

// Touch tap to toggle circle info on mobile
const circles = document.querySelectorAll('.neon-circle');

circles.forEach(circle => {
    circle.addEventListener('click', function () {
        // Close all other circles first
        circles.forEach(other => {
            if (other !== circle) {
                other.classList.remove('tapped');
            }
        });
        // Toggle this circle
        this.classList.toggle('tapped');
    });
});

// Close circle if tapping outside
document.addEventListener('click', function (e) {
    if (!e.target.closest('.neon-circle')) {
        circles.forEach(circle => circle.classList.remove('tapped'));
    }
});