module.exports = {
    main: {
        context: '${__dirname}/../',
        entry: './assets/js/main.js',
        output: {
            path: 'public/static/scripts',
            filename: 'main.js'
        }
    }
};
