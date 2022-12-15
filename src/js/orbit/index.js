import { createOrbit } from './orbit.js';
import { aqerp } from './util.js';

import { getOrbitsPartialData, maxSpeed } from './config.js';

import { getCurrentBreakPointId } from './adaptivity.js';

import { addBreakPointChangeHandler } from './adaptivity.js';

// Use the styles implicitly
import '../../scss/orbit/orbit.scss';

/**
 * Gets a numeic value of CSS property.
 * 
 * @param {string} propStr A CSS property value.
 * @returns {number} A numeric value of CSS property.
 */
function getValue(propStr) {
  return parseFloat(propStr.replace(/[^\.\d,]/g, ""));
}

/**
 * An entry point for orbit graphics.
 * 
 * @returns A handle for orbit graphics
 */
function Orbit() {
  const root = document.getElementById("orbits");
  
  if (!(root instanceof HTMLElement)) {
    return;
  }

  const container = document.getElementsByClassName('main-block__container')[0];
  const contentEl = document.getElementsByClassName('main-block__content')[0];
  const imgEl = document.getElementsByClassName('main-block__image')[0];

  if (!(container instanceof HTMLElement)) {
    throw new TypeError(`Expected container to be HTMLElement. Got: ${typeof container}`);
  }

  if (!(contentEl instanceof HTMLElement)) {
    throw new TypeError(`Expected contentEl to be HTMLElement. Got: ${typeof contentEl}`);
  }
  const calcOffset = () => {
    const { width, paddingTop, paddingLeft } = window.getComputedStyle(container, null);

    const { width: imgWidth, height: imgHeight } = window.getComputedStyle(imgEl, null);

    // Default left for tablet, desktop
    let left = getValue(paddingLeft) + getValue(imgWidth);

    // Change positioning for the mobile
    if (getCurrentBreakPointId() === 0) {
      left = getValue(width) + getValue(paddingLeft);
    }

    // Orbits position on page
    // Based on the planet image inside .main-block__image
    const offset = {
      top: getValue(paddingTop) + getValue(imgHeight) / 2,
      left,
    };

    return offset;
  };

  // Create containers for each orbit
  const orbitsData = getOrbitsPartialData().map(orbit => {
    const planetOrbit = document.createElement('div');
    planetOrbit.className = 'planet-orbit';

    root.appendChild(planetOrbit);

    return {
      ...orbit, renderToElement: planetOrbit,
    };
  });

  // create an orbits with interpolants
  const orbits = orbitsData.map(orbit => {
    const { data: { angleDegrees, maxAngle } } = orbit;

    return {
      orbitData: orbit,
      handle: createOrbit(orbit),
      interpolant: aqerp(angleDegrees, maxAngle, maxSpeed),
    };
  });

  const resizeHandlers = [];

  orbits.forEach(({ orbitData }) => {
    const { width, height, renderToElement } = orbitData;

    const maxWidth = orbits.reduce((acc, { orbitData }) => {
      const { width } = orbitData;
  
      if (width > acc) {
        return width;
      }
  
      return acc;
    }, 0);
  
    const maxHeight = orbits.reduce((acc, { orbitData }) => {
      const { height } = orbitData;
  
      if (height > acc) {
        return height;
      }
  
      return acc;
    }, 0);

    if (maxWidth <= 0) {
      throw new TypeError('Expected maxWidth to be positive');
    }

    if (maxHeight <= 0) {
      throw new TypeError('Expected maxHeight to be positive');
    }

    const applyOffset = (width, height, renderToElement) => {
      const offset = calcOffset();

      // Center the orbit circles
      const style = {
        top: `${(maxWidth - width) / 2 + offset.top - maxWidth / 2}px`,
        left: `${(maxHeight - height) / 2 + offset.left - maxHeight / 2}px`,
      }

      Object.assign(renderToElement.style, style);
    };

    applyOffset(width, height, renderToElement);

    const resizeHandler = () => applyOffset(width, height, renderToElement);
    window.addEventListener('resize', resizeHandler);

    resizeHandlers.push(resizeHandler);
  });

  // Animate all moons within single interval
  const interval = setInterval(() => {
    const finished = [];

    orbits.forEach(orbit => {
      const { interpolant: interp, handle: { changeAngle } } = orbit;

      // Interpolate if not done
      const { angle, done } = interp();

      if (done) {
        finished.push({ angle, done });
        return;
      }

      changeAngle(angle);
    });
    
    // When all done strategy
    if (finished.every(({ done }) => done === true) && finished.length === orbits.length) {
      clearInterval(interval);
    }
  }, 100);

  return {
    detach: () => {
      clearInterval(interval);

      resizeHandlers.forEach(handler => {
        window.removeEventListener('resize', handler);
      });

      orbitsData.forEach(({ renderToElement }) => {
        renderToElement.remove();
      });
    }
  }
}

window.addEventListener('load', () => {
  // change the configuration in ./orbit/config.js
  let orbitHandle = Orbit();

  if (typeof orbitHandle === "object") {
    addBreakPointChangeHandler(id => {
      //console.trace(`Switching to breakpoint ${id}`);
    
      orbitHandle.detach();
      orbitHandle = Orbit();
    });
  }
});
