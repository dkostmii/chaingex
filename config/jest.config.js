import * as path from 'path'

const rootDir = path.resolve(".")

export default {
  "rootDir": path.join(rootDir, 'tests'),
  "testRegex": ".*\.(spec|test)\.(js|ts|jsx|tsx)$"
}