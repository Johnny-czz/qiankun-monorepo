import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import qiankun from 'vite-plugin-qiankun';

const useDevMode = true; // 开发模式下必须开启
const appName = 'slave-vite'; // 子应用名称，需与主应用注册时的 name 保持一致

export default defineConfig({
    plugins: [
        // 当 useDevMode = true 时，需手动移除 react 插件，避免插件冲突[reference:5]
        // 因为 react 插件无法在 qiankun 环境下检测到所需的 preamble 全局变量[reference:6]
        // ...(useDevMode ? [] : [react()]),
        // 当 useDevMode = true 时，需手动移除 react 插件，避免冲突[reference:7][reference:8]
        // 因为此模式下 react 插件无法正确运行，而 vite-plugin-qiankun 会接管模块加载
        ...(useDevMode ? [] : [react()]),
        qiankun(appName, { useDevMode }),
    ],
    server: {
        port: 3002,
        headers: { 'Access-Control-Allow-Origin': '*' }, // 必须，允许主应用跨域请求资源
    },
});