import { getCurrentBreakPointId } from "./adaptivity.js";

import { AnimateMoon } from './orbit.js';

/**
 * A token to replace with animated text value.
 * 
 * See {@link AnimateMoon.injectValue()}.
 */
export const injectToken = '{animated}';

/**
 * A maximum speed of moon at the orbit.
 * 
 * @constant maxSpeed
 * @type {number}
 */
export const maxSpeed = 5;

/**
 * An alias for {@link Number.POSITIVE_INFINITY}.
 */
export const inf = Number.POSITIVE_INFINITY;

/**
 * Defines a breakpoints for planet orbit graphics.
 * 
 * @constant breakPoints
 * @type {[number, number][]} A tuple of `min-width` and `max-width` values in `px` units.
 */
export const breakPoints = [
  [0, 480],
  [480, 834],
  [834, 1300],
  [1300, inf],
];

/**
 * The duration of each moon at the orbit animation.
 *
 * @type {number} The duration of animation in seconds.
 *
 */
const numberAnimationDurationSeconds = 5;

/**
 * `5 years on the market` moon title animation duration.
 * 
 * Starts with `1 years` and ends with `5 years`.
 * 
 * @type {number} The duration of animation in seconds.
 */
const fiveYearsAnimationDurationSeconds = 1;

/**
 * The delay of `5 years on the market` moon title animation.
 * 
 * @type {number} The duration of delay in seconds.
 */
const fiveYearsDelaySeconds = 4;

/**
 * Defines a partial data for orbit graphics.
 * 
 * Missing part is `renderToElement` property, which is added dynamically.
 */
const orbitsPartialData = [
  // [0, 428],
  [{
    width: 672,
    height: 672,
    gradientString: '65% 50% at 50% 50%, #6E40F2 0%, rgba(110, 64, 242, 0) 100%',
    borderWidth: 2,
    data: {
      // Starting angle
      angleDegrees: 130,
      maxAngle: 210,
      title: `${injectToken} years`,
      animateNumber: {
        start: 1,
        end: 5,
        seconds: fiveYearsAnimationDurationSeconds,
        delay: fiveYearsDelaySeconds,
      },
      subtitle: 'on the market',
    },
  }, {
    width: 672,
    height: 672,
    gradientString: '65% 50% at 50% 50%, #6E40F2 0%, rgba(110, 64, 242, 0) 100%',
    borderWidth: 2,
    data: {
      // Starting angle
      angleDegrees: 100,
      maxAngle: 180,
      title: `\$${injectToken}`,
      animateNumber: {
        start: 0,
        end: 864000,
        seconds: numberAnimationDurationSeconds,
      },
      subtitle: 'changed this month'
    },
  }, {
    width: 506,
    height: 506,
    gradientString: '65% 50% at 50% 50%, #6E40F2 0%, rgba(110, 64, 242, 0) 100%',
    borderWidth: 2,
    data: {
      // Starting angle
      angleDegrees: 90,
      maxAngle: 140,
      title: `${injectToken}`,
      animateNumber: {
        start: 0,
        end: 3545,
        seconds: numberAnimationDurationSeconds,
      },
      subtitle: 'users'
    },
  }],

  // [480, 834],
  [{
    width: 636,
    height: 636,
    gradientString: '65% 50% at 50% 50%, #6E40F2 0%, rgba(110, 64, 242, 0) 100%',
    borderWidth: 2,
    data: {
      // Starting angle
      angleDegrees: 200,
      maxAngle: 285,
      title: `${injectToken} years`,
      animateNumber: {
        start: 1,
        end: 5,
        seconds: fiveYearsAnimationDurationSeconds,
        delay: fiveYearsDelaySeconds,
      },
      subtitle: 'on the market',
    },
  }, {
    width: 536,
    height: 536,
    gradientString: '65% 50% at 50% 50%, #6E40F2 0%, rgba(110, 64, 242, 0) 100%',
    borderWidth: 2,
    data: {
      // Starting angle
      angleDegrees: 130,
      maxAngle: 220,
      title: `\$${injectToken}`,
      animateNumber: {
        start: 0,
        end: 864000,
        seconds: numberAnimationDurationSeconds,
      },
      subtitle: 'changed this month'
    },
  }, {
    width: 536,
    height: 536,
    gradientString: '65% 50% at 50% 50%, #6E40F2 0%, rgba(110, 64, 242, 0) 100%',
    borderWidth: 2,
    data: {
      // Starting angle
      angleDegrees: 90,
      maxAngle: 160,
      title: `${injectToken}`,
      animateNumber: {
        start: 0,
        end: 3545,
        seconds: numberAnimationDurationSeconds,
      },
      subtitle: 'users'
    },
  }],

  // [834, 1300],
  [{
    width: 976,
    height: 976,
    gradientString: '65% 50% at 50% 50%, #6E40F2 0%, rgba(110, 64, 242, 0) 100%',
    borderWidth: 2,
    data: {
      // Starting angle
      angleDegrees: 200,
      maxAngle: 310,
      title: `${injectToken} years`,
      animateNumber: {
        start: 1,
        end: 5,
        seconds: fiveYearsAnimationDurationSeconds,
        delay: fiveYearsDelaySeconds,
      },
      subtitle: 'on the market',
    },
  }, {
    width: 736,
    height: 736,
    gradientString: '65% 50% at 50% 50%, #6E40F2 0%, rgba(110, 64, 242, 0) 100%',
    borderWidth: 2,
    data: {
      // Starting angle
      angleDegrees: 130,
      maxAngle: 220,
      title: `\$${injectToken}`,
      animateNumber: {
        start: 0,
        end: 864000,
        seconds: numberAnimationDurationSeconds,
      },
      subtitle: 'changed this month'
    },
  }, {
    width: 736,
    height: 736,
    gradientString: '65% 50% at 50% 50%, #6E40F2 0%, rgba(110, 64, 242, 0) 100%',
    borderWidth: 2,
    data: {
      // Starting angle
      angleDegrees: 90,
      maxAngle: 160,
      title: `${injectToken}`,
      animateNumber: {
        start: 0,
        end: 3545,
        seconds: numberAnimationDurationSeconds,
      },
      subtitle: 'users'
    },
  }],

  // [1300, inf],
  [{
    width: 1238,
    height: 1238,
    gradientString: '65% 50% at 50% 50%, #6E40F2 0%, rgba(110, 64, 242, 0) 100%',
    borderWidth: 2,
    data: {
      // Starting angle
      angleDegrees: 90,
      maxAngle: 190,
      title: `${injectToken} years`,
      animateNumber: {
        start: 1,
        end: 5,
        seconds: fiveYearsAnimationDurationSeconds,
        delay: fiveYearsDelaySeconds,
      },
      subtitle: 'on the market',
    },
  }, {
    width: 976,
    height: 976,
    gradientString: '65% 50% at 50% 50%, #6E40F2 0%, rgba(110, 64, 242, 0) 100%',
    borderWidth: 2,
    data: {
      // Starting angle
      angleDegrees: 90,
      maxAngle: 170,
      title: `\$${injectToken}`,
      animateNumber: {
        start: 0,
        end: 864000,
        seconds: numberAnimationDurationSeconds,
      },
      subtitle: 'changed this month'
    },
  }, {
    width: 736,
    height: 736,
    gradientString: '65% 50% at 50% 50%, #6E40F2 0%, rgba(110, 64, 242, 0) 100%',
    borderWidth: 2,
    data: {
      // Starting angle
      angleDegrees: 90,
      maxAngle: 130,
      title: `${injectToken}`,
      animateNumber: {
        start: 0,
        end: 3545,
        seconds: numberAnimationDurationSeconds,
      },
      subtitle: 'users'
    },
  }],
];

/**
 * Gets the partial orbit graphics data for current breakpoint.
 * 
 * @returns An object containing partial orbit graphics data for current breakpoint.
 */
export function getOrbitsPartialData() {
  const id = getCurrentBreakPointId();

  return orbitsPartialData[id];
}
