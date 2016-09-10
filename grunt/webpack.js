module.exports = {
    main: {
        context: '${__dirname}/../',
        entry: './assets/js/main.js',
        output: {
            path: 'public/static/scripts',
            filename: 'main.js'
        },
        module: {
            loaders: [
                {
                    test: /\.jsx$|\.js$/,
                    loader: 'babel',
                    include: [
                        'assets/js',
                        'components'
                    ],
                    query: {
                        presets: ['react', 'es2015']
                    }
                },
                {
                    test: /\.scss$/,
                    loaders: [
                        'style',
                        'css?modules&sourceMap',
                        'sass'
                    ],
                    include: [
                        'assets/sass',
                        'assets/js/prototypes',
                        'components'
                    ]
                }
            ]
        }
    }
};
