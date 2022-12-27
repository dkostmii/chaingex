`use strict`;
class Options {
   constructor(animationTime, pixelsFromBottom = 0, reverseFade = false) {
      this.pixelsFromBottom = -pixelsFromBottom;
      this.animationTime = animationTime;
      this.reverseFade = reverseFade;
   }
}

//Numbers
let scrolled = window.pageYOffset;
let windowHeight = window.innerHeight;

function rectObj(el) {
   let rect = el.getBoundingClientRect();
   return rect.top - windowHeight;
}

window.onscroll = function () {
   let valueDisplays = document.querySelectorAll(".num");
   let interval = 4000;
   valueDisplays.forEach((valueDisplay) => {
      let startValue = 0;
      let endValue = parseInt(valueDisplay.getAttribute("data-val"));
      let duration = Math.floor(interval / endValue);
      let counter = setInterval(function () {
         startValue += 1;
         valueDisplay.textContent = startValue;
         if (startValue == endValue) {
            clearInterval(counter);
         }
      }, duration);
   });
}

