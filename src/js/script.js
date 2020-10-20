gulp.task("html", function() {
  return gulp.src("src/*.html")
    .pipe(gulpif(!isDevelopment, replace("/style", "/style.min")))
    .pipe(gulpif(!isDevelopment, replace("/script", "/script.min")))
    .pipe(gulp.dest("build"))
});