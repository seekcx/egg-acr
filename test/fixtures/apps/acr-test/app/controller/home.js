'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
    async index() {
        const { ctx, app } = this;

        const { name } = await ctx.validate({
            name: app.acr.string({ name: '姓名', transform: () => 'seeker' })
                .required()
                .min(2)
                .max(6)
                .test()
                .equal('abel'),
            age: app.acr.number('年龄')
                .required()
                .max(80)
                .min(18),
        });

        ctx.body = 'hi, ' + name;
    }
}

module.exports = HomeController;
