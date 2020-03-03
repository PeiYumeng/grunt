module.exports = function(grunt){
    grunt.initConfig({
      htmlmin:{
        options:{
          removeComments:true,
          colla
        },
        files:{
        }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.registerTask('default',['csslint'])
}
