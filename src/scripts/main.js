(function () {
  var section = document.getElementById("about");
  if (!section) return;

  var shootingStars = section.querySelectorAll(".shooting-star");
  if (!shootingStars.length) return;

  var maxTranslateX = 1000;
  var maxTranslateY = 300;

  function updateParallax() {
    var rect = section.getBoundingClientRect();
    var viewportHeight = window.innerHeight;
    var sectionHeight = rect.height;
    var scrollY = window.scrollY || window.pageYOffset;
    var sectionTop = section.offsetTop;

    // Progress 0 = section just entering from bottom, 1 = section scrolled past top
    var start = sectionTop - viewportHeight;
    var end = sectionTop + sectionHeight;
    var progress = (scrollY - start) / (end - start);
    progress = Math.max(0, Math.min(1, progress));

    var x = progress * maxTranslateX;
    var y = progress * maxTranslateY;

    shootingStars.forEach(function (star) {
      star.style.transform = "rotate(25deg) translate(" + x + "px, " + y + "px)";
    });
  }
  
  window.addEventListener("scroll", updateParallax, { passive: true });
  updateParallax();
})();
