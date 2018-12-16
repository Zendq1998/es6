## 命令行环境

[Babel转码](http://es6.ruanyifeng.com/#docs/intro#Babel-%E8%BD%AC%E7%A0%81%E5%99%A8)

Babel的命令行版本通过下面的命令安装：

```
$ npm install --glabal babel-cli
$ npm install --save babel-preset-es2015
```

然后在当前目录下新建配置文件 .babelrc

```js
// .babelrc
{
    "presets": ["es2015"]
}
```

babel-node命令直接运行脚本，例如：

```
$ babel-node es6.js
```

[my'blog](https://zendq1998.github.io/2018/03/15/ES6%E6%A8%A1%E5%9D%97%E5%8C%96/)

