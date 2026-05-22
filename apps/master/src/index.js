import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { registerMicroApps, start } from 'qiankun';

ReactDOM.render(<App />, document.getElementById('root'));

// 注册子应用
registerMicroApps([
    {
        name: 'slave-webpack5',
        entry: '//localhost:3001',
        container: '#subapp-container',
        activeRule: '/webpack5',
    },
    {
        name: 'slave-vite',
        entry: '//localhost:3002',
        container: '#subapp-container',
        activeRule: '/vite',
    },
]);

// 启动 qiankun
start({
    sandbox: {
        // 开启样式隔离，防止样式冲突
        experimentalStyleIsolation: true,
        // 使用宽松的沙箱模式，有时可以解决一些意外的报错，通常不需要，如果仍遇到边界问题可尝试开启
        loose: true,
    },
});