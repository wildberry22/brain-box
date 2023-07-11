function isTouchDevice() {
  // Check for touch screen support based on the presence of touch events
  if (
    "ontouchstart" in window ||
    (window.DocumentTouch)
  ) {
    return true;
  }

  // Check for touch screen support based on the existence of a touch-capable media query
  var mediaQuery = window.matchMedia("(pointer: coarse)");
  if (mediaQuery.matches) {
    return true;
  }

  // Touch screen not detected
  return false;
}


export default isTouchDevice;
