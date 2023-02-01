import { isNumber } from "./identity/index.js";

function mapConstrain(constrain) {
  switch (constrain) {
    case "minutes":
      return 0;
    case "hours":
      return 1;
    case "days":
      return 2;

    default:
      throw new Error(`Invalid constrain value: ${constrain}. Expected "minutes", "hours" or "days".`);
  }
}

/**
 * 
 * @param {number} secondsInterval
 * @param {"minutes" | "hours" | "days"} constrain
 * 
 * @returns {string} Formatted string containing timestamp.
 */
export function getTimestamp(secondsInterval, constrain = "minutes") {
  isNumber(secondsInterval).nonNegative().throw(secondsInterval);

  const constrainLevel = mapConstrain(constrain);

  const ss = secondsInterval % 60;
  let mm = Math.floor(secondsInterval / 60);

  if (constrainLevel > mapConstrain("minutes")) {
    mm = mm % 60;
  }

  let hh = Math.floor(secondsInterval / 3600);

  if (constrainLevel > mapConstrain("hours")) {
    hh = hh % 24;
  }

  const dd = Math.floor(secondsInterval / 3600 / 24);

  switch (constrain) {
    case "minutes":
      return `${mm.toString().padStart(2, "0")}:${ss.toString().padStart(2, "0")}`;

    case "hours":
      return `${hh.toString().padStart(2, "0")}:${mm.toString().padStart(2, "0")}:${ss.toString().padStart(2, "0")}`;

    case "days":
      return `${dd}.${hh.toString().padStart(2, "0")}:${mm.toString().padStart(2, "0")}:${ss.toString().padStart(2, "0")}`;

    default:
      throw new Error(`Invalid constrain value: ${constrain}. Expected "minutes", "hours" or "days".`);
  }
}

/**
 * 
 * @param {number} seconds 
 * @param {number} minutes 
 * @param {number} hours 
 * @param {number} days 
 * 
 * @returns {number} Interval value in seconds.
 */
export function getSecondsInterval(seconds = 0, minutes = 0, hours = 0, days = 0) {
  isNumber(seconds).nonNegative().throw('seconds');
  isNumber(minutes).nonNegative().throw('minutes');
  isNumber(hours).nonNegative().throw('hours');
  isNumber(days).nonNegative().throw('days');

  return seconds + minutes * 60 + hours * 3600 + days * 3600 * 24;
}
