const express = require('express');

const server = {

    app: express(),

    initialize() {
        server.urlConfs();
        server.startWebServer();
    },

    startWebServer() {
        server.app.listen(8000);
        console.log('Listening on port 8000');
    },

    //---------------------------------------------------------------------------------------------
    // URL CONFS
    //---------------------------------------------------------------------------------------------
    urlConfs() {
        server.app.use(express.static(__dirname + '/public'));
    }
};

server.initialize();
