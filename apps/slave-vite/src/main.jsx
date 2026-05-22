import React from 'react';
import ReactDOM from 'react-dom/client';
import { renderWithQiankun, qiankunWindow } from 'vite-plugin-qiankun/dist/helper'; // 从指定路径导入
import { formatDate, add } from '@demo/shared-utils'
import App from './App';
console.log(add(1, 2))
let root = null;

function render(props) {
    const { container } = props;
    // 挂载到主应用提供的容器，若无则回退到自身的 #root
    const mountNode = container ? container.querySelector('#root') : document.getElementById('root');
    root = ReactDOM.createRoot(mountNode);
    root.render(<App />);
}

renderWithQiankun({
    mount(props) {
        render(props);
    },
    bootstrap() {},
    unmount() {
        if (root) {
            root.unmount();
            root = null;
        }
    },
});

// 独立运行时，直接渲染
if (!qiankunWindow.__POWERED_BY_QIANKUN__) {
    render({});
}