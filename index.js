const minimist = require('minimist');

module.exports = () => {
    //从第二个参数开始解析，因为第一个永远是文件所在路径
    const args = minimist(process.argv.slice(2));
    const cmd = args._[0];

    switch (cmd) {
        case 'today':
            require('./cmds/today')(args);
            break;
        default:
            console.error(`"${cmd}" is not a valid command!`);
            break;
    }
};