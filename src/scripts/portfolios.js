if (window.innerWidth <= 393) {
  document.querySelectorAll(
    '.ellipse ellipse, .ellipse1 ellipse, .ellipse2 ellipse, .ellipse3 ellipse, .ellipse4 ellipse, .ellipse5 ellipse'
  ).forEach(el => {
    el.setAttribute('rx', 4);
    el.setAttribute('ry', 4);
  });
}