## 技术选型
qiankun + monorepo
```text

角色             	技术栈  	                          端口  	                      构建工具
主应用（基座）	React 16.14 + React Router DOM v5	  3000	                              Webpack 4
子应用1	           React 18.2	                          3001	                              Webpack 5
子应用2	           React 18.2	                          3002	                                Vite 4
```
## 目录结构
```text
react16-master-react18-slaves/
├── pnpm-workspace.yaml          # workspace配置 + overrides/allowBuilds
├── package.json                 # 根脚本
├── packages/                    # 公共方法包
│   ├── shared-utils/                  
│   │   ├── src/
│   │   │   ├── index.js         # @demo/shared-utils包
├── apps/
│   ├── master/                  # 主应用 (React 16)
│   │   ├── package.json
│   │   ├── webpack.config.js
│   │   ├── src/
│   │   │   ├── index.js         # 入口 + qiankun注册
│   │   │   ├── App.js           # 路由 + 容器
│   │   │   └── index.html
│   ├── slave-webpack5/          # 子应用1 (React 18 + Webpack5)
│   │   ├── package.json
│   │   ├── webpack.config.js
│   │   ├── src/
│   │   │   ├── index.js         # 生命周期导出
│   │   │   └── App.js
│   └── slave-vite/              # 子应用2 (React 18 + Vite)
│       ├── package.json
│       ├── vite.config.js
│       ├── index.html
│       └── src/
│           ├── main.jsx         # 生命周期 + 插件适配
│           └── App.jsx
```

**PowerShell命令：删除node_modules和pnpm-lock.yaml命令**
```text
Remove-Item -Recurse -Force node_modules, pnpm-lock.yaml -ErrorAction SilentlyContinue
```
```text
这个 PowerShell 命令用于强制删除当前目录下的 node_modules 文件夹和 pnpm-lock.yaml 文件，同时忽略可能出现的错误。

具体参数含义如下：

Remove-Item：删除文件或文件夹的 cmdlet。

-Recurse：递归删除子项，即删除 node_modules 文件夹内的所有文件、子文件夹及其内容。对于 pnpm-lock.yaml（单个文件）此参数无实际影响。

-Force：强制删除，包括只读、隐藏或系统属性的项目。例如，即使 node_modules 中有只读文件，也能删除。

node_modules, pnpm-lock.yaml：要删除的目标列表，中间用逗号分隔。前者是一个目录，后者是一个锁文件。

-ErrorAction SilentlyContinue：遇到任何错误（如文件不存在、无权限等）时不显示错误信息，继续执行命令。相当于“静默忽略错误”。
```