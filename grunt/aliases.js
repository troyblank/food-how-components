module.exports = {
    build: [
        'clean',
        'webpack',
        'assemble'
    ],
    test: [
        'lint',
        'unit'
    ],
    lint: [
        'sasslint',
        'eslint'
    ],
    unit: 'mocha_istanbul',
    default: 'build'
};