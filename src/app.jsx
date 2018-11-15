/*
 * @Author: yuze.xia 
 * @Date: 2018-09-21 11:03:12 
 * @Last Modified by: yuze.xia
 * @Last Modified time: 2018-11-15 15:31:47
 */

import React from 'react';
import ReactDom from 'react-dom';
import {BrowserRouter as Router, Route, Redirect, Switch, Link} from 'react-router-dom';

import Layout from 'component/layout/index.jsx';

// 页面
import Home from 'page/home/index.jsx'; 
import Login from 'page/login/index.jsx';
import UserList from 'page/user/index.jsx';
import ErrorPage from 'page/error/index.jsx';

import './index.css';
import './index.scss';

class App extends React.Component {

    render() {
        let LayoutRouter = (
            <Layout>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/product" component={Home}/>
                    <Route path="/product-category" component={Home}/>
                    <Route path="/user/index" component={UserList}/>
                    <Redirect exact from="/user" to="/user/index"/>
                    <Route path="/order" component={Home}/>
                    <Route component={ErrorPage}/>
                </Switch>
            </Layout>
        );
        
        return (
            <Router>
                <Switch>
                    <Route path="/login" component={Login}/>
                    <Route path="/" render={(props) => LayoutRouter} />
                </Switch>
            </Router>
        )
    }
}

ReactDom.render(
    <div>
        <App />
    </div>,
    document.getElementById('app')
)
