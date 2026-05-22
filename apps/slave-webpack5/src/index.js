import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

let root = null;

function render(props) {
    const container = props?.container;
    const mountNode = container ? container.querySelector('#root') : document.getElementById('root');
    root = ReactDOM.createRoot(mountNode);
    root.render(<App />);
}

if (!window.__POWERED_BY_QIANKUN__) {
    render({});
}

export async function bootstrap() {
    console.log('[Webpack5] 子应用启动');
}

export async function mount(props) {
    console.log('[Webpack5] 进入子应用', props);
    render(props);
}

export async function unmount() {
    if (root) {
        root.unmount();
        root = null;
    }
}