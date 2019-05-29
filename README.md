# outside-cli
#### 1. 创建项目
创建一个项目，新建一个package.json文件
#### 2. 新建一个index.js
#### 3. 新建一个bin/outside
```bash
$ chmod +x bin/outside
$ npm install -g outside-cli
#会创建一个symlink到系统path
$ npm link
```

#### 4. 解析命令行参数
```bash
$ npm install --save minimist
$ outside tody --location "Brooklyn, NY"
{ _: [ 'tody' ], location: 'Brooklyn, NY' }
```



