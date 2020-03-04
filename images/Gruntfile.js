module.exports = function(grunt){
  grunt.initConfig({
    imagemin:{
      files:{
        expend:true,
        src:['image/*.{png,jpg,gif}'],
        dest:'dist/'
      }
    }
  });
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.registerTask('defaulte',['imagemin']);
}
