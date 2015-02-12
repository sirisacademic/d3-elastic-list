module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: '<%= pkg.name %>.js',
        dest: '<%= pkg.name %>.min.js'
      }
    },
    copy: {
      main: {
        src: ['*', 'img/*','!**/bower_components/**', '!bower.json', '!elastic-list.js', '!Gruntfile.js', '!**/node_modules/**', '!package.json', '!styles.less', '!README.md'],
        expand: true,
        cwd: '.',
        dest: 'dist/',
      },
    },
    bowercopy: {
      options: {
        srcPrefix: 'bower_components'
      },
      scripts: {
        options: {
          destPrefix: 'dist/bower_components'
        },
        files: {
          'd3/d3.min.js': 'd3/d3.min.js',
          'jquery/dist/jquery.js': 'jquery/dist/jquery.js',
          'bootstrap/dist/js/bootstrap.js': 'bootstrap/dist/js/bootstrap.js',
          'bootstrap/dist/css/bootstrap.min.css': 'bootstrap/dist/css/bootstrap.min.css'
        }
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-bowercopy');

  // Default task(s).
  grunt.registerTask('default', ['uglify','copy','bowercopy']);
};