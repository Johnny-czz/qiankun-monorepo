import React from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';  // 注意：使用 Switch 而非 Routes

export default function App() {
    return (
        <BrowserRouter>
            <div>
                <h1>主应用 (React 16)</h1>
                <nav>
                    <Link to="/">Home</Link> |&nbsp;
                    <Link to="/webpack5">React 18 + Webpack5 子应用</Link> |&nbsp;
                    <Link to="/vite">React 18 + Vite 子应用</Link>
                </nav>
                <Switch>
                    <Route exact path="/" component={() => <div>主应用首页</div>} />
                    <Route path="/webpack5" component={() => <div id="subapp-container" />} />
                    <Route path="/vite" component={() => <div id="subapp-container" />} />
                </Switch>
            </div>
        </BrowserRouter>
    );
}