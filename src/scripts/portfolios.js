if (window.innerWidth <= 393) {
  document.querySelectorAll('#ellipse, #ellipse1, #ellipse2, #ellipse3, #ellipse4, #ellipse5').forEach(el => {
    el.setAttribute('rx', 4);
    el.setAttribute('ry', 4);
  });
}