module.exports = function(grunt) {

  grunt.initConfig({
    responsive_images: {
      dev: {
        options: {
          engine: 'im',
          sizes: [{
            suffix: '_small',
            width: 320
          },{
            suffix: '_medium',
            width: 640
          },{
            suffix: '_large',
            width: 1024
          },{
            suffix: '_large_x1',
            width: 1024,
            quality: 50
          }]
        },
        files: [{
          expand: true,
          src: ['*.{gif,jpg,png}'],
          cwd: 'img_src/',
          dest: 'img/'
        }]
      }
    },
    
    copy: {
      dev: {
        files: [{
          expand: true,
          src: ['**/*', '!app/img/**/*.*'],
          cwd: 'img_src/',
          dest: 'img/'
        }]
      }
    },
  });

  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-responsive-images');
  grunt.registerTask('default', ['copy','responsive_images']);

};
