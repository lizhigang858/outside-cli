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

#### 5. 运行命令
建立一些子模块和函数等，避免不必要的加载，是的命令执行更快
```bash
$ outside today
today is sunny
$ outside foobar
"foobar" is not a valid command!
```

#### 6. 常用必须的命令
添加一些常用的选项如，help，version等
```bash
$ outside

        outside [command] <options>
        
        today ................ show weather for today
        version .............. show package version
        help ................. show helpo menu for a command
$ outside help today

        outside today <options>

        --location, -l ....... the location to use

```

#### 7. 再添加一个命令
如果我们想添加命令，我们只要再cmds目录中创建相应的处理脚本，然后再index的swich和help文件中加入相应的内容就可以