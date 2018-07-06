'use strict';

const Acr = require('acr');

module.exports = app => {
    const ctx = app.createAnonymousContext();

    const config = app.config.acr;
    config.context = Object.assign({}, config.context, {
        ctx, app,
    });

    app.acr = new Acr(config);
};
