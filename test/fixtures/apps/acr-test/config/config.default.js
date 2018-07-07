'use strict';

exports.security = {
    csrf: false,
};

exports.keys = '123456';

exports.acr = {
    lang: 'zh-cn',
    rules: acr => {
        acr.type('string')
            .define('test', value => {
                if (value !== 'abel') {
                    throw new Error('who are you?');
                }
            });
    },
};
