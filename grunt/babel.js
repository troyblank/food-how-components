module.exports = {
    options: {
        sourceMap: true
    },
    dist: {
        expand: true,
        cwd: 'components',
        src: '**/*.js',
        dest: 'lib'
    }
};
