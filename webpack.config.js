const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = () => {
    const rules = {
        module: {
            rules: [
                {
                    test: /\.jsx$|\.js$/,
                    loader: 'babel-loader',
                    include: [
                        path.resolve(__dirname, 'assets/js'),
                        path.resolve(__dirname, 'components')
                    ],
                    options: {
                        presets: [
                            ['@babel/preset-env', { targets: '> 0.5% in US' }],
                            '@babel/react'
                        ]
                    }

                },
                {
                    test: /\.scss$/,
                    use: [
                      {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                          hmr: process.env.NODE_ENV === 'development'
                        },
                      },
                      'css-loader?modules&sourceMap',
                      'sass-loader'
                    ],
                    include: [
                        path.resolve(__dirname, 'assets/sass'),
                        path.resolve(__dirname, 'assets/js/prototypes'),
                        path.resolve(__dirname, 'components')
                    ]
                }
            ]
        },
        plugins: [
            new MiniCssExtractPlugin({
                filename: '[name].scss',
                ignoreOrder: false
            }),
        ]
    };

    return [
        {
            entry: {
                components: path.resolve(__dirname, 'components/index.js')
            },
            output: {
                path: path.resolve(__dirname, 'dist'),
                filename: '[name].js',
                libraryTarget: 'commonjs2'
            },
            ...rules
        },
        {
            entry: {
                main: path.resolve(__dirname, 'assets/js/main.js')
            },
            output: {
                path: path.resolve(__dirname, 'public/static/scripts'),
                filename: '[name].js'
            },
            ...rules
        }
    ];
};
