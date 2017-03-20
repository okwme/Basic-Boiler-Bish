module.exports = function (grunt) {
    grunt.initConfig({
        sass: {
            dist: {
                files: {
                    'style.css' : 'sass/style.scss'
                }
            }
        },
        browserSync: {
          default_options: {
            bsFiles: {
              src: [
                "js/app.js",
                "style.css",
                "*.html"
              ]
            },
            options: {
              watchTask: true,
              server: {
                baseDir: "./"
              }
            }
          }
        },
        postcss: {
            options: {
                map: true,
                processors: [
                    require('autoprefixer')
                ]
            },
            dist: {
                files: {
                    'style.css': 'style.css'
                }
            }
        },
        watch: {
            files: 'sass/*.scss',
            tasks: ['sass'],           
        }
    });
    grunt.loadNpmTasks('grunt-browser-sync');
    grunt.loadNpmTasks('grunt-postcss');
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['browserSync', 'watch']);
    grunt.registerTask('build', ['postcss']);

};