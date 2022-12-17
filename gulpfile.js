// Импорт основного модуля
import gulp from "gulp";
// Импорт общих плагинов
import { plugins } from "./config/gulp-plugins.js";
// Импорт путей
import { path } from "./config/gulp-settings.js";

// Передаем значения в глобальную переменную
global.app = {
	isBuild: process.argv.includes('--build'),
	isDev: !process.argv.includes('--build'),
	isWebP: !process.argv.includes('--nowebp'),
	isFontsReW: process.argv.includes('--rewrite'),
	gulp: gulp,
	path: path,
	plugins: plugins
}

// Импорт задач
import { reset } from "./config/gulp-tasks/reset.js";
import { html } from "./config/gulp-tasks/html.js";
import { css } from "./config/gulp-tasks/css.js";
import { js } from "./config/gulp-tasks/js.js";
import { jsDev } from "./config/gulp-tasks/js-dev.js";
import { images } from "./config/gulp-tasks/images.js";
import { ftp } from "./config/gulp-tasks/ftp.js";
import { zip } from "./config/gulp-tasks/zip.js";
import { sprite } from "./config/gulp-tasks/sprite.js";
import { gitignore } from "./config/gulp-tasks/gitignore.js";
import { otfToTtf, ttfToWoff, fonstStyle } from "./config/gulp-tasks/fonts.js";
import { manifest } from "./config/gulp-tasks/manifest.js";
import keyframesBlockAnimation from './config/gulp-tasks/keyframes/block-animation.js';
import keyframesSpinner from './config/gulp-tasks/keyframes/spinner.js';

// Tasks for generating SASS files with keyframes for animations
const keyframes = gulp.parallel(keyframesBlockAnimation, keyframesSpinner);

// Последовательная обработака шрифтов
const fonts = gulp.series(reset, otfToTtf, ttfToWoff, fonstStyle);
// Основные задачи будем выполнять параллельно после обработки шрифтов
const devTasks = gulp.series(keyframes, gulp.parallel(fonts, gitignore));
// Основные задачи будем выполнять параллельно после обработки шрифтов
const buildTasks = gulp.series(keyframes, fonts, jsDev, js, gulp.parallel(html, css, images, gitignore), manifest);

// Экспорт задач
export { html }
export { css }
export { js }
export { jsDev }
export { images }
export { fonts }
export { sprite }
export { ftp }
export { zip }
export { manifest }

// Построение сценариев выполнения задач
const development = gulp.series(devTasks);
const build = gulp.series(buildTasks);
const deployFTP = gulp.series(buildTasks, ftp);
const deployZIP = gulp.series(buildTasks, zip);

// Экспорт сценариев
export { development }
export { build }
export { deployFTP }
export { deployZIP }

// Выполнение сценария по умолчанию
gulp.task('default', development);






