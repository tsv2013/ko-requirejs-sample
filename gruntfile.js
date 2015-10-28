module.exports = function(grunt) {

    grunt.initConfig({
        connect: {
            dev: {
                options: {
                    hostname: "localhost",
                    keepalive: true,
                    port: 8080,
                    base: './'
                }
            }
        }
    });

    grunt.registerTask('default', ['connect:dev']);

    grunt.loadNpmTasks("grunt-contrib-connect");

};
