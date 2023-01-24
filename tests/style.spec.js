const fs = require('fs')
const path = require('path')

describe('Tests for generated styles', () => {
  test('style.min.css exists', () => {
    const targetFile = path.join('.', 'dist', 'css', 'style.min.css');
    expect(fs.existsSync(targetFile)).toBe(true)
  });

  test('block-animation.sass exists', () => {
    const targetFile = path.join('.', 'src', 'scss', 'keyframes', 'block-animation.sass');
    expect(fs.existsSync(targetFile)).toBe(true)
  });

  test('spinner.sass exists', () => {
    const targetFile = path.join('.', 'src', 'scss', 'keyframes', 'spinner.sass');
    expect(fs.existsSync(targetFile)).toBe(true)
  });
});
