# egg-acr

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][codecov-image]][codecov-url]
[![license](https://img.shields.io/github/license/seekcx/acr.svg?style=flat-square)](LICENSE)

[npm-image]: https://img.shields.io/npm/v/egg-acr.svg?style=flat-square
[npm-url]: https://npmjs.org/package/egg-acr
[travis-image]: https://img.shields.io/travis/seekcx/egg-acr.svg?style=flat-square
[travis-url]: https://travis-ci.org/seekcx/egg-acr
[codecov-image]: https://img.shields.io/codecov/c/github/seekcx/egg-acr.svg?style=flat-square
[codecov-url]: https://codecov.io/github/seekcx/egg-acr?branch=master

基于 [acr](https://github.com/seekcx/acr) 开发的验证组件。

## 安装

```bash
$ npm i egg-acr
```

## 使用

```js
// {app_root}/config/plugin.js
exports.acr = {
  enable: true,
  package: 'egg-acr',
};
```

## 配置

```js
// {app_root}/config/config.default.js
exports.acr = {
    lang: 'zh-cn',
};
```

查看 [acr#配置](https://github.com/seekcx/acr#%E9%85%8D%E7%BD%AE) 获取更多配置信息。

## 示例

```js
// 在控制器的方法中

const { ctx, app: { acr } } = this;
const { name } = await ctx.validate({
    name: acr.string('昵称').required().equal('abel'),
});

```

更详细的例子可以参考：[测试用例](test/fixtures/apps/acr-test/app/controller/home.js)

了解 acr 才能更好的使用此组件，相关信息请移步 [acr](https://github.com/seekcx/acr#%E9%85%8D%E7%BD%AE)

## 问题和建议

请到 [Issues](https://github.com/seekcx/egg-acr/issues) 提问交流.

## License

[MIT](LICENSE)
