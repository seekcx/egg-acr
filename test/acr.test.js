'use strict';

const assert = require('assert');
const mock = require('egg-mock');

describe('test/acr.test.js', () => {
    let app;
    before(() => {
        app = mock.app({
            baseDir: 'apps/acr-test',
        });
        return app.ready();
    });

    after(() => app.close());
    afterEach(mock.restore);

    it('should GET /', () => {
        return app.httpRequest()
            .post('/')
            .send({
                name: 'abel',
                age: 18,
            })
            .expect('hi, seeker')
            .expect(200);
    });

    it('should throw Validation Failed', async () => {
        const { body } = await app.httpRequest().post('/')
            .set('Accept', 'application/json')
            .send({ })
            .expect(422);

        assert.deepEqual(body, {
            code: 'invalid_param',
            message: 'Validation Failed',
            errors: [
                { path: 'name', identity: 'string.required', message: '姓名必填' },
                { path: 'age', identity: 'number.required', message: '年龄必填' },
            ],
        });
    });

    it('should throw other error', async () => {
        await app.httpRequest().post('/')
            .set('Accept', 'application/json')
            .send({
                name: 'tom',
                age: 20,
            })
            .expect(500)
            .expect(/who are you\?/);
    });
});
