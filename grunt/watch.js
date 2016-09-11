module.exports = {
    assemble: {
        files: ['views/**/*.hbs'],
        tasks: ['assemble', 'notify:assemble']
    },
    webpack: {
        files: ['assets/**/*.js', 'assets/**/*.scss', 'components/**/*.js', 'components/**/*.scss'],
        tasks: ['webpack', 'notify:webpack']
    }
};
