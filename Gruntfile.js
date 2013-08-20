module.exports = function(grunt) {
 
  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    watch: {
      // WATCH THE SASS FILES FOR CHNAGES AND COMPILE WITH COMPASS
      compass: {
        files: ['sass/**/*.{scss,sass}'],
        tasks: ['copyCSS']
      },
      // RELOAD THE CSS AND HTML IN THE SITE FOLDER
      // livereload: {
      //   files: ['_site/css/styles.css', '_site/*.html'],
      //   options: {
      //     livereload: true,
      //   },
      // },
      // WATCH ALL THE JEKYLL FILES EXCEPT CSS
      // jekyll: {
      //   files: [
      //     // capture all except css
      //     '*.html', '*.yml', 'js/**.js', '_posts/**',
      //     'projects/**', 'blog/**', 'about/**', '_includes/**',
      //     'atom.xml', '**/*.md'
      //   ],
      //   tasks: ['shell:jekyllDev']
      // }
    },
    shell: {
      // BUILD JEKYLL FOR DEV
      // jekyllDev: {
      //   command: 'rm -rf _site/*; jekyll build --drafts',
      //   stdout: true
      // },  
      // BUILD JEKYLL FOR STAGING
      // jekyllStage:  {
      //   command: 'rm -rf _staging/*; jekyll build -d _staging --config _config_staging.yml',
      //   stdout: true
      // }
    },
 
    compass: {
      dist: {
        options: {              
          sassDir: 'sass',
          cssDir: 'css',
          environment: 'development'
        }
      }
    },
    // connect: {
    //   server: {
    //     options: {
    //       base: '_site/',
    //       port: 9009
    //     }
    //   }
    // },
    // open: {
    //   server: {
    //     path: 'http://localhost:<%= connect.server.options.port %>/'
    //   }
    // },
    copy: {
      css : {
        files: {
          '_site/css/styles.css': 'css/styles.css'
        }
      }
    },
  });
  
  // INCLUDE ALL THE GRUNT TASKS
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-open');
  grunt.loadNpmTasks('grunt-shell');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-compass');
 
  // COPY STYLES TO _SITE
  grunt.registerTask('copyCSS', ['compass:dist', 'copy:css']);
  // RUN JEKYLL USING STAGING SETTINGS
  // grunt.registerTask('staging', ['shell:jekyllStage']);
  // Default task.
  grunt.registerTask('default', [
    // 'shell:jekyllDev',
    // 'connect:server',
    // 'open:server',
    'watch'
  ]);
 
};