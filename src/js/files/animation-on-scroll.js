import getTranslation from '../i18n/get.js';

function getAnimationStartScrollPosition(el) {
   const { innerHeight: windowHeight } = window;
   const { top } = el.getBoundingClientRect();

   return top + windowHeight / 2;
}

function animate(onAnimationStarted) {
   const animatedElements = document.querySelectorAll(".animation-on-scroll");
   const animationTimeMs = 4000;

   let onAnimationStartedCalled = false;
   const currentLanguage = window.detectUserLanguage();

   animatedElements.forEach(el => {
      const start = 0, end = parseInt(el.dataset.val);

      const timeoutDuration = animationTimeMs / end;

      let value = start;

      const incrementValue = () => {
         value += 1;
         const prevValue = parseInt(el.textContent | "0");

         if (value > prevValue) {
            if ('i18n' in el.dataset) {
               const translatedCaption = getTranslation(el.dataset.i18n, currentLanguage, value);
               el.textContent = translatedCaption;               
            } else {
               el.textContent = value;
            }
         }
      }

      const interval = setInterval(() => {
         if (!onAnimationStartedCalled && onAnimationStarted instanceof Function) {
            onAnimationStartedCalled = true;
            onAnimationStarted();
         }

         if (value >= end) {
            clearInterval(interval);
            return;
         }
   
         incrementValue();
      }, timeoutDuration);
   });
}

function scrollHandler() {
   const { scrollY } = window
   const triggerElement = document.querySelector('.features__content');

   if (triggerElement !== null) {
      if (scrollY >= getAnimationStartScrollPosition(triggerElement)) {
         animate(
            // onAnimationStarted
            () => window.removeEventListener('scroll', scrollHandler));
      }
   }
}

function prepareTranslatedElements() {
   const currentLanguage = window.detectUserLanguage();

   const translatedElements = [...document.querySelectorAll(".animation-on-scroll")]
      .filter(el => ('i18n' in el.dataset));

   translatedElements.forEach(el => { el.textContent = getTranslation(el.dataset.i18n, currentLanguage, 0); });
}

function useAnimationOnScroll() {
   prepareTranslatedElements();
   window.addEventListener('scroll', scrollHandler);
   scrollHandler();
}

export default useAnimationOnScroll;
