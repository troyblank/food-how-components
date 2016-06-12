module.exports = {
    assemble: {
        files: ['views/**/*.hbs'],
        tasks: ['assemble', 'notify:assemble']
    },
    webpack: {
        files: ['assets/js/**/*.js'],
        tasks: ['webpack', 'notify:webpack']
    }
};
