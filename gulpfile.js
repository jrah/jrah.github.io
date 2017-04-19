var gulp        = require('gulp');

gulp.task('copy', function() {
        gulp.src('bower_components/**/*')
        .pipe(gulp.dest('_sass/dependency'))
});

gulp.task('default', ['copy']);
