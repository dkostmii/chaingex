import { getPositionOnEllipse, parseGradientString } from './util.js';

import { injectToken } from './config.js';

/**
 * The result of animation.
 * 
 * @typedef {Object} animationResult
 * @property {string} title The title, is colored with accent color. Can contain {animated} value.
 * @property {string} subtitle The subtitle, is colored with default color. Can contain {animated} value.
 */

/**
 * Contains a range for animating a number
 * @typedef {Object} animateNumber
 * @property { number } start A number to start with. Must be positive.
 * @property { number } end Animate until number. Must be greater than start.
 * @property { number } seconds Length of animation in seconds.
 * @property { number | undefined } delay A delay for animation in seconds.
 */

/**
 * Contains a data for moon which is placed on the orbit circle.
 * @typedef {Object} moonData
 * @property { number } angleDegrees Position on the circle in degrees.
 * @property { animateNumber } animateNumber A range for animating a number (is inserted into title or subtitle using {animated}).
 * @property { string } title The title, is colored with accent color. Can contain {animated} value.
 * @property { string } subtitle The subtitle, is colored with default color. Can contain {animated} value.
 */

/**
 * Contains data to render orbit circle.
 * @typedef {Object} createOrbitConfiguration
 * @property { number } width The width of circle in px
 * @property { number } height The height of circle in px
 * @property { string } gradientString The contents of radialGradient() function in CSS. Example: '65% 50% at 50% 50%, #6E40F2 0%, rgba(110, 64, 242, 0) 100%'
 * @property { number } borderWidth Thickness of orbit line
 * @property { moonData } data Contains a data for moon which is placed on the orbit circle.
 * @property { HTMLElement } renderToElement The element to which result is rendered
 */

/**
 * Contains different methods for changing parameters of orbit
 * @typedef {Object} orbitHandle
 * @property {(newAngleDegrees: number) => void} changeAngle Changes the position of moon on the orbit circle.
 * @property {() => void} detach Clears all async operations inside element.
 */

/**
 * A class implementing title and subtitle text animation of moon.
 */
export class AnimateMoon {
  /**
   * Creates an instance of animation for the moon.
   * 
   * @param {(animationResult) => void} onAnimationStep A callback to call if the animation frame started.
   * @param {moonData} param1 
   */
  constructor(onAnimationStep, { title, subtitle, animateNumber }) {
    this.started = false;

    this.title = title;
    this.subtitle = subtitle;
    
    const { start, end, seconds } = animateNumber;

    if (seconds < 1) {
      throw new Error(`Expected seconds to be 1 or more. Got: ${seconds}`);
    }

    // ms - milliseconds
    this.animationFrame = 75;

    // s / ms
    const unit = 1000 * seconds / this.animationFrame;

    const increment = (end - start) / unit;

    if (start < 0) {
      throw new Error(`Expected start >= 0. Got: ${start}`);
    }

    if (end <= start) {
      throw new Error(`Expected end > start. Got end (${end}) <= start (${start}) `);
    }

    if (increment >= (end - start)) {
      throw new Error(`Expected increment < (end - start). Got ${increment} (increment) >= (${end} - ${start}) (end - start)`)
    }

    this.a = start;
    this.b = end;
    this.increment = increment;
    this.current = this.a;

    if (!(onAnimationStep instanceof Function)) {
      throw new TypeError(`Expected onAnimationStep to be a function. Got: ${typeof onAnimationStep}`);
    }

    this.onAnimationStep = onAnimationStep;

    if (typeof animateNumber.delay === 'number' && animateNumber.delay) {
      this.delay = animateNumber.delay;

      this.onAnimationStep({
        title: this.injectValue(this.title),
        subtitle: this.injectValue(this.subtitle),
      });
    }
  }

  /**
   * Replaces the {@link injectToken} in {@link str} with {@link AnimateMoon.current} value.
   * 
   * @param {string} str A string in which to replace the {@link injectToken}.
   * @returns {string} A string containing {@link AnimateMoon.current} value at {@link injectToken} place.
   */
  injectValue(str) {
    if (!(typeof str === 'string' || (str instanceof String))) {
      throw new TypeError(`Expected str to be a string. Got: ${typeof str}`);
    }

    return str.replace(injectToken, `${this.current.toFixed()}`);
  }

  /**
   * Creates an interval to perform animation with.
   */
  makeInterval() {
    this.interval = setInterval(() => {
      if (this.increment < (this.b - this.current)) {
        this.current += this.increment;
      } else {
        this.current = this.b;
        this.stop();
      }

      this.onAnimationStep({
        title: this.injectValue(this.title),
        subtitle: this.injectValue(this.subtitle),
      });
    }, this.animationFrame);
  }

  /**
   * Starts the animation immediately or after a delay.
   */
  start() {
    if (!this.started) {
      this.started = true;
      this.current = this.a;

      if (this.delay > 0) {
        this.timeout = setTimeout(() => this.makeInterval(), this.delay * 1000);
      } else {
        this.makeInterval();
      }
    }
  }

  /**
   * Stops the animation immediately.
   */
  stop() {
    if (this.started) {
      clearInterval(this.interval);

      if (this.timeout) {
        clearTimeout(this.timeout);
      }
      this.started = false;
    }
  }
}
/**
 * Creates SVG element with orbit circle and a moon with labels.
 * @param { createOrbitConfiguration } orbitConfiguration Contains data to render orbit circle.
 * @returns {orbitHandle} A {@link orbitHandle handle} to manipulate the rendered orbit (for animation purposes).
 */
export function createOrbit({
  width,
  height,
  gradientString,
  borderWidth,
  data: { angleDegrees, title, subtitle, animateNumber },
  renderToElement
}) {
  const ns = "http://www.w3.org/2000/svg";

  if (typeof width !== "number") {
    throw new TypeError(`Expected width to be number. Got: ${typeof width}`);
  }

  if (typeof height !== "number") {
    throw new TypeError(`Expected height to be number. Got: ${typeof height}`);
  }

  if (typeof borderWidth !== "number") {
    throw new TypeError(`Expected borderWidth to be number. Got: ${typeof borderWidth}`);
  }

  if (!(typeof title === "string" || title instanceof String)) {
    throw new TypeError(`Expected title to be a string. Got ${typeof title}`);
  }

  if (!(typeof subtitle === "string" || subtitle instanceof String)) {
    throw new TypeError(`Expected subtitle to be a string. Got ${typeof subtitle}`);
  }

  if (!(renderToElement instanceof HTMLElement)) {
    throw new TypeError(`Expected renderToElement to be HTMLElement. Got ${renderToElement.constructor.name}`);
  }

  // Orbit
  
  const svgEl = document.createElementNS(ns, 'svg');
  svgEl.setAttribute('width', `${width}`);
  svgEl.setAttribute('height', `${height}`);
  svgEl.setAttribute('viewBox', `0 0 ${width} ${height}`);

  const defs = document.createElementNS(ns, 'defs');
  svgEl.appendChild(defs);

  const parsedGradient = parseGradientString(gradientString);
  const { scaleX, scaleY, posX: cx, posY: cy, stops } = parsedGradient;

  const gradientTransform = `scale(${scaleX} ${scaleY}) translate(${(1 - scaleX) / 2} ${(1 - scaleY) / 2})`

  let gradientId = 'orbit-gradient';
  let counter = 1;

  if (document.getElementById(gradientId) !== null) {
    while (document.getElementById(`${gradientId}-${counter}`) !== null) {
      counter++;
    }

    gradientId = `${gradientId}-${counter}`;
  }

  const radialGraident = document.createElementNS(ns, 'radialGradient');
  radialGraident.setAttribute('id', gradientId);
  radialGraident.setAttribute('cx', cx);
  radialGraident.setAttribute('cy', cy);
  radialGraident.setAttribute('gradientTransform', gradientTransform);

  defs.appendChild(radialGraident);

  stops.forEach(stop => {
    const { offset, stopColor } = stop;

    const stopEl = document.createElementNS(ns, 'stop');
    stopEl.setAttribute('offset', offset);
    stopEl.setAttribute('stop-color', stopColor);

    radialGraident.appendChild(stopEl);
  });

  let maskId = 'orbit-mask';
  counter = 1;

  if (document.getElementById(maskId) !== null) {
    while (document.getElementById(`${maskId}-${counter}`) !== null) {
      counter++;
    }

    maskId = `${maskId}-${counter}`;
  }

  const mask = document.createElementNS(ns, 'mask');
  mask.setAttribute('x', '0');
  mask.setAttribute('y', '0');
  mask.setAttribute('width', `${width}`);
  mask.setAttribute('height', `${height}`);
  mask.setAttribute('id', maskId);

  const rect = document.createElementNS(ns, 'rect');
  rect.setAttribute('x', '0');
  rect.setAttribute('y', '0');
  rect.setAttribute('width', `${width}`);
  rect.setAttribute('height',  `${height}`);
  rect.setAttribute('fill',  '#000');

  const ellipseMask = document.createElementNS(ns, 'ellipse');
  ellipseMask.setAttribute('rx', `${width / 2}`);
  ellipseMask.setAttribute('ry',  `${height / 2}`);
  ellipseMask.setAttribute('cx',  `${width / 2}`);
  ellipseMask.setAttribute('cy',  `${height / 2}`);
  ellipseMask.setAttribute('stroke',  '#FFF');
  ellipseMask.setAttribute('stroke-width',  `${borderWidth}`);

  mask.append(rect, ellipseMask);
  defs.append(mask);

  const ellipse = document.createElementNS(ns, 'ellipse');
  ellipse.setAttribute('mask', `url(#${maskId})`);
  ellipse.setAttribute('fill', `url(#${gradientId})`);
  ellipse.setAttribute('rx', `${width / 2}`);
  ellipse.setAttribute('ry', `${height / 2}`);
  ellipse.setAttribute('cx', `${width / 2}`);
  ellipse.setAttribute('cy', `${height / 2}`);

  svgEl.appendChild(ellipse);

  // Moon and text

  const moonPosition = getPositionOnEllipse(width, height, angleDegrees);

  const moon = document.createElement('div');
  Object.assign(moon, {
    className: 'orbit-moon'
  });
  const moonRadius = 10;

  Object.assign(moon.style, {
    width: `${moonRadius * 2}px`,
    height: `${moonRadius * 2}px`,
  });

  const moonContainer = document.createElement('div');
  Object.assign(moonContainer, {
    className: 'orbit-moon-container',
  });
  Object.assign(moonContainer.style, {
    display: 'flex',
    gap: '10px',
    alignItems: 'center',
    position: 'absolute',
  });

  moonContainer.appendChild(moon);

  const description = document.createElement('div');
  Object.assign(description, {
    className: 'orbit-moon-description'
  });
  Object.assign(description.style, {
    display: 'flex',
    flexDirection: 'column',
  });

  const titleLabel = document.createElement('label');
  Object.assign(titleLabel, {
    className: 'description-title',
  });
  const subTitleLabel = document.createElement('label');
  Object.assign(subTitleLabel, {
    className: 'description-subtitle',
  });

  titleLabel.appendChild(document.createTextNode(title));
  subTitleLabel.appendChild(document.createTextNode(subtitle));

  // Animated the numbers
  if (typeof animateNumber === "object" && typeof animateNumber.start === "number" && typeof animateNumber.end === "number" && typeof animateNumber.seconds  === "number") {
    const animateMoon = new AnimateMoon(({ title, subtitle }) => {
      titleLabel.innerHTML = "";
      subTitleLabel.innerHTML = "";

      titleLabel.appendChild(document.createTextNode(title));
      subTitleLabel.appendChild(document.createTextNode(subtitle));
    }, {
      title, subtitle, animateNumber
    });

    animateMoon.start();
  }

  description.append(titleLabel, subTitleLabel);
  moonContainer.appendChild(description);

  renderToElement.append(svgEl, moonContainer);

  const { height: containerHeight } = moonContainer.getBoundingClientRect();

  //const { offsetTop: top, offsetLeft: left } = renderToElement;

  // Object.assign(moonContainer.style, {
  //   left: `${moonPosition.x - moonRadius + left}px`,
  //   top: `${moonPosition.y - containerHeight / 2 + top}px`,
  // });

  Object.assign(moonContainer.style, {
    left: `${moonPosition.x - moonRadius}px`,
    top: `${moonPosition.y - containerHeight / 2}px`,
  });

  return {
    /**
     * Changes the position of moon on the orbit circle.
     * @param {number} newAngleDegrees The new position on the orbit circle in degrees. Does nothing, if angle is the same.
     * @returns {void}
     */
    changeAngle(newAngleDegrees) {
      if (angleDegrees !== newAngleDegrees) {
        const moonPosition = getPositionOnEllipse(width, height, newAngleDegrees);
        //const { offsetTop: top, offsetLeft: left } = renderToElement;
  
        // Object.assign(moonContainer.style, {
        //   left: `${moonPosition.x - moonRadius + left}px`,
        //   top: `${moonPosition.y - containerHeight / 2 + top}px`,
        // });

        Object.assign(moonContainer.style, {
          left: `${moonPosition.x - moonRadius}px`,
          top: `${moonPosition.y - containerHeight / 2}px`,
        });
      }
    },

    /**
     * Clears all async operations inside element
     */
    detach() {
      animateMoon.stop();
    }
  }
}