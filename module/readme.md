## 命令行环境

Babel的命令行版本通过下面的命令安装：

```
$ npm install --glabal babel-cli
$ npm install --save babel-preset-es2015
```

然后在当前目录下新建配置文件 .babelrc

```js
// .babelrc
{
    "presets": ['es2015']
}
```

babel-node命令直接运行脚本，例如：

```
$ babel-node es6.js
```