'use strict';

module.exports = {
    /**
     * 验证
     *
     * @param {any} schema 验证结构
     * @param {any} data 数据
     *
     * @return {Promise<any>} transform 后的数据
     */
    async validate(schema, data) {
        const { app, request: { body } } = this;

        try {
            return await app.acr.validate(data || body, schema);
        } catch (error) {
            if (error.name !== 'ValidationError') {
                throw error;
            }

            this.throw(422, 'Validation Failed', {
                code: 'invalid_param',
                errors: error.errors,
            });
        }
    },
};
