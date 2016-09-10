module.exports = {
    main: {
        options: {
            partials: 'views/partials/**/*.hbs',
            helpers: ['views/helpers/fileHasher.js']
        },
        expand: true,
        cwd: 'views',
        src: [
            '*.hbs',
            'prototypes/*.hbs'
        ],
        dest: 'public'
    }
};
