const gulp = require('gulp');

gulp.task('build', (cb)=>{
    console.log('building the web');
    setTimeout(cb,1000);
    cb()
})

gulp.task('serve', (cb)=>{
    console.log('serving the web');
    setTimeout(cb,1000);
    cb()
})

gulp.task('default', gulp.series('build', 'serve'))