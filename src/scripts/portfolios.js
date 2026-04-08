if (window.innerWidth <= 393) {
  document.querySelectorAll('.ellipse ellipse').forEach(el => {
    el.setAttribute('rx', 4);
    el.setAttribute('ry', 4);
  });
}