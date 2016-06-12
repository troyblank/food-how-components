// takes a file path and returns a md5 hash for example:
// <link href="/static/styles/modules/avatar-upload.css?{{fileHasher 'web/static/styles/modules/avatar-upload.css'}}">
// becomes
// <link href="/static/styles/modules/avatar-upload.css?cf2bd1e851ff1cca2ea3f0e8a08b5814"

var crypto = require('crypto'),
    fs = require('fs');

module.exports.register = function (Handlebars, options)  { 
  Handlebars.registerHelper('fileHasher', function (url) {
        var contents = fs.readFileSync(url).toString();
        return crypto.createHash('md5').update(contents).digest("hex");
    });
};