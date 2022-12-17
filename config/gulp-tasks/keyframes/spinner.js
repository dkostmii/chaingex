import fs from 'fs'
import path from 'path'

const steps = 5
const keyframesName = 'spinner-animation'

function normalize(value, min, max) {
  return value / (max - min)
}

function rescale(value, min, max, toMin, toMax) {
  return normalize(value, min, max) * (toMax - toMin) + toMin
}

function getPercentage(i) {
  return (rescale(i, 0, steps - 1, 0, 100)).toFixed(2) + '%'
}

function getTurns(i) {
  return (normalize(i, 0, steps - 1)).toFixed(2) + 'turn'
}

const keyframesSpinner = () => {
  const keyframesLines = []
  keyframesLines.push(`@keyframes ${keyframesName}`)
  
  for (let i = 0; i < steps; i++) {
    keyframesLines.push(' '.repeat(2) + getPercentage(i))
    keyframesLines.push(' '.repeat(4) + `transform: rotate(${getTurns(i)})`)
    keyframesLines.push(' '.repeat(2))
  }
  
  keyframesLines.push(`@keyframes ${keyframesName}-compensate`)
  for (let i = 0; i < steps; i++) {
    keyframesLines.push(' '.repeat(2) + getPercentage(i))
    keyframesLines.push(' '.repeat(4) + `transform: rotate(${i > 0 ? '-' + getTurns(i) : getTurns(i)})`)
    keyframesLines.push(' '.repeat(2))
  }
  
  const file = path.join(app.path.src.keyframesFolder, 'spinner.sass')

  try {
    fs.readdirSync(app.path.src.keyframesFolder)
  } catch (e) {
    fs.mkdirSync(app.path.src.keyframesFolder)
  }
  
  fs.writeFileSync(file, keyframesLines.join('\n'))

  return app.gulp.src(file);
}

export default keyframesSpinner
