const fs = require('fs')
const path = require('path')

test('style.min.css exists', () => {
  // Arrange
  const targetFile = path.join('.', 'dist', 'css', 'style.min.css')

  // Assert
  expect(fs.existsSync(targetFile)).toBe(true)
})
