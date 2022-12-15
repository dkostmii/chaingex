export const manifest = () => {
  return app.gulp.src(`${app.path.src.manifest}`)
    .pipe(app.gulp.dest(`${app.path.build.manifest}`))
}