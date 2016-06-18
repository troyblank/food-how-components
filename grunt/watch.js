module.exports = {
    assemble: {
        files: ['views/**/*.hbs'],
        tasks: ['assemble', 'notify:assemble']
    },
    webpack: {
        files: ['assets/js/**/*.js', 'assets/sass/**/*.scss', 'components/**/*.js', 'components/**/*.scss'],
        tasks: ['webpack', 'notify:webpack']
    }
};
