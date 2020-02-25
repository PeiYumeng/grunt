module.exports = function(grunt){
    grunt.initConfig({
        csslint:{
            options:{
              csslhintrc:'./.csslhintrc'
            },
            src:['*.css']
        }
    });
    grunt.loadNpmTasks('grunt-contrib-csslint');
    grunt.registerTask('default',['csslint'])
}
