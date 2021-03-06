var gulp = require('gulp');

'use strict';

require('./tasks/build');
require('./tasks/release');

gulp.task('build-app', function () {
    var NwBuilder = require('nw-builder');
    var nw = new NwBuilder({
        files: './**/**', // use the glob format
        platforms: ['win64'],
        buildDir: 'exe',
        buildType: 'versioned',
        forceDownload: false
    });

    //Log stuff you want

    nw.on('log',  console.log);

    // Build returns a promise
    nw.build().then(function () {
        console.log('all done!');
    }).catch(function (error) {
        console.error(error);
    });
});
