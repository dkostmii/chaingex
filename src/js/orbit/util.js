/**
 * Splits a string by splitToken, but not inside parenthesis (), [], {}, <>
 * @param {string} splitToken A token by which inputString is split.
 * @param {string} inputString A string to split
 * @returns {string[]} An array containing chunks of inputString.
 */
function splitShallow(splitToken, inputString) {
  if (!(typeof splitToken === "string" || splitToken instanceof String)) {
    throw new TypeError(`Expected splitToken to be string. Got ${typeof splitToken}.`);
  }

  if (!(typeof inputString === "string" || inputString instanceof String)) {
    throw new TypeError(`Expected inputString to be string. Got ${typeof inputString}.`);
  }

  const openingParenthesis = [ '(', '[', '{', '<' ];
  const closingParenthesis = [ ')', ']', '}', '>' ];

  let currentLevel = 0;
  const result = [];
  let buffer = "";

  for (let i = 0; i < inputString.length; i++) {
    if (openingParenthesis.includes(inputString[i])) {
      buffer += inputString[i];
      currentLevel++;
    } else if (closingParenthesis.includes(inputString[i])) {
      buffer += inputString[i];
      currentLevel--;
    } else if (inputString[i] === splitToken && currentLevel === 0) {
      result.push(buffer);
      buffer = "";
    } else {
      buffer += inputString[i];
    }
  }

  result.push(buffer);

  return result;
}

/**
 * Defines a color stop for gradient.
 * @typedef {Object} stop
 * @property {string} stopColor A valid CSS color value.
 * @property {string} offset An offset for current stop. Can be in % (25%) or absolute (0.25).
 */

/**
 * Defines a gradient data.
 * @typedef {Object} gradientData
 * @property {number} scaleX The scale of gradient in X direction.
 * @property {number} scaleY The scale of gradient in Y direction.
 * @property {string} posX The x-position of gradient ellipse.
 * @property {string} posY The y-position of gradient ellipse.
 * @property {stop[]} stops The color stop for gradient.
 */

/**
 * 
 * @param {string} gradientString The contents of radialGradient() function in CSS. Example: '65% 50% at 50% 50%, #6E40F2 0%, rgba(110, 64, 242, 0) 100%'
 * @returns {gradientData}
 */
export function parseGradientString(gradientString) {
  if (!(typeof gradientString === "string" || gradientString instanceof String)) {
    throw new TypeError(`Expected gradientString to be a string. Got: ${typeof gradientString}`);
  }

  const [ circle, ...stops ] = splitShallow(',', gradientString).map(str => str.trim());

  const [ size, position ] = circle.split("at").map(str => str.trim());
  const [ scaleX, scaleY ] = size.replace("%", "").split(" ").map(str => {
    const strVal = str.trim();
    const percent = parseFloat(strVal);
    const abs = 2 * percent / 100;

    return abs;
  })
  const [ posX, posY ] = position.split(" ").map(str => str.trim());

  const parsedStops = stops.map(str => {
    const [ color, offset ] = splitShallow(" ", str).map(s => s.trim());

    return {
      stopColor: color,
      offset
    };
  });

  return {
    scaleX,
    scaleY,
    posX,
    posY,
    stops: parsedStops,
  };
}

/**
 * @typedef {Object} position
 * @property {number} x The x-coordinate of position.
 * @property {number} y The y-cooridinate of position.
 */

/**
 * Calculates the position on ellipse given an angle.
 * @param {number} width The width of ellipse.
 * @param {number} height The height of ellipse.
 * @param {number} angleDegrees The angle in degrees.
 * @returns {position} The position on an ellipse.
 */
export function getPositionOnEllipse(width, height, angleDegrees) {
  if (typeof width !== "number") {
    throw new TypeError(`Expected width to be a number. Got ${typeof width}.`);
  }
  if (typeof height !== "number") {
    throw new TypeError(`Expected height to be a number. Got ${typeof height}.`);
  }

  if (typeof angleDegrees !== "number") {
    throw new TypeError(`Expected angleDegrees to be a number. Got ${typeof angleDegrees}.`);
  }

  const screenCos = (angle) => (Math.cos(angle) + 1) / 2;
  const screenSin = (angle) => (-Math.sin(angle) + 1) / 2;

  const angle = 2 * angleDegrees / 360 * Math.PI;

  const x = width * screenCos(angle);
  const y = height * screenSin(angle);

  return { x, y };
}

/**
 * A function for linear interpolation between {@link value1} and {@link value2}.
 * 
 * @param {number} value1 A value to interpolate from ({@link time} === 0).
 * @param {number} value2 A value to interpolate to ({@link time} === 1).
 * @param {number} time A factor of interpolation. If {@link time} < 0 clamps to {@link value1}, or if {@link time} > 1 clamps to {@link value2}. Otherwise {@link lerp()} produces a linear combination of {@link value1} and {@link value2}.
 * @returns 
 */
export function lerp(value1, value2, time) {
  if (typeof value1 !== "number") {
    throw new TypeError(`Expected value1 to be number. Got ${typeof value1}`);
  }

  if (typeof value2 !== "number") {
    throw new TypeError(`Expected value2 to be number. Got ${typeof value2}`);
  }

  if (typeof time !== "number") {
    throw new TypeError(`Expected time to be number. Got ${typeof time}`);
  }

  if (time < 0) {
    return value1;
  }

  if (time > 1) {
    return value2;
  }

  return (1 - time) * value1 + time * value2;
}

/**
 * @typedef {Object} interpolationData
 * @property {number} angle The interpolated angle. Does not change if done: true.
 * @property {boolean} done The switch indicating if interpolation reached the maxAngle.
 */

/**
 * The quadratic interpolation result data. Is returned after calling {@link interpolant interpolant function}.
 * 
 * @typedef {Object} interpolationResult
 * @property {number} angle The current angle in `degrees`.
 * @property {boolean} done Indicates whether interpolation is finished.
 */

/**
 * The interpolant function for interpolating the angle.
 * @typedef {() => interpolationResult} interpolant
 * @returns {interpolationData} The interpolation data.
 */

/**
 * Get the quadratic interpolant to interpolate the angle. Quadratic means that speed is linear.
 * @param {number} minAngle Starting angle 
 * @param {number} maxAngle End angle
 * @param {number} maxSpeed Max rate of change of the angle.
 * @returns {interpolant} An {@link interpolant interpolant function}.
 */
export function aqerp(minAngle, maxAngle, maxSpeed) {
  if (maxAngle < minAngle) {
    throw new Error(`Expected maxAngle > minAngle. Got: ${maxAngle} (maxAngle) < ${minAngle} (minAngle).`)
  }

  const range = maxAngle - minAngle;
  const halfRange = range / 2;
  let speed = 0;
  let angle = minAngle;

  const getNormalizedAngle = (angle) => angle - minAngle;

  return () => {
    if (angle < minAngle) {
      throw new Error(`Angle outside a range. Got ${angle} (angle) < ${minAngle} (minAngle)`);
    }

    if (angle > maxAngle) {
      return {
        angle,
        done: true,
      }
    }
    
    const normAngle = getNormalizedAngle(angle);
    speed = normAngle < halfRange ? lerp(0.1, maxSpeed, normAngle / halfRange) : lerp(maxSpeed, 0.1, normAngle / halfRange - 1);

    angle += speed;

    return {
      angle,
      done: false
    };
  }
}
