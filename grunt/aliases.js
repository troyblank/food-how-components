module.exports = {
    build: [
        'clean',
        'webpack',
        'assemble'
    ],
    test: [
        'eslint'
    ],
    default: 'build'
};
