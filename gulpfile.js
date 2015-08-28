var gulp  = require('gulp');
var shell = require('gulp-shell');

gulp.task('compile', shell.task([
  'docker run -v `pwd`:/tmp cvdlab/texlive pdflatex tesi',
  'docker rm $(docker ps -a -q -l)',
  'docker run -v `pwd`:/tmp cvdlab/texlive bibtex tesi',
  'docker rm $(docker ps -a -q -l)',
  'docker run -v `pwd`:/tmp cvdlab/texlive pdflatex tesi',
  'docker rm $(docker ps -a -q -l)'
]));

gulp.task('default', ['compile'], function() {
  gulp.watch('**/*.tex', ['compile']);
});