import cleanCss from 'gulp-clean-css';
import webpcss from 'gulp-webpcss';
import autoprefixer from 'gulp-autoprefixer';
import mqpack from './mqpack.js';

export const css = () => {
	return app.gulp.src(`${app.path.build.css}style.css`, {})
		.pipe(app.plugins.plumber(
			app.plugins.notify.onError({
				title: "CSS",
				message: "Error: <%= error.message %>"
			})))
		/*
		.pipe(
			app.plugins.if(
				app.isBuild,
				mqpack()
			)
		)
		*/
		.pipe(
			app.plugins.if(
				app.isBuild,
				autoprefixer({
					grid: true,
					overrideBrowserslist: ["last 3 versions"],
					cascade: true
				})
			)
		)
		.pipe(
			app.plugins.if(
				app.isWebP,
				app.plugins.if(
					app.isBuild,
					webpcss(
						{
							webpClass: ".webp",
							noWebpClass: ".no-webp"
						}
					)
				)
			)
		)
		.pipe(app.gulp.dest(app.path.build.css))
		.pipe(
			app.plugins.if(
				app.isBuild,
				cleanCss({ debug: true,  inline: ['all', '!fonts.googleapis.com'] }, details => {
					console.log(`[CSS]: ${details.name} ${(details.stats.originalSize / 1000).toFixed(1)} KB -> ${(details.stats.minifiedSize / 1000).toFixed(1)} KB`)
				})
			)
		)
		.pipe(app.plugins.rename({ suffix: ".min" }))
		.pipe(app.gulp.dest(app.path.build.css));
}