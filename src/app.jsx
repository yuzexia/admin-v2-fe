/*
 * @Author: yuze.xia 
 * @Date: 2018-09-21 11:03:12 
 * @Last Modified by: yuze.xia
 * @Last Modified time: 2018-11-01 10:08:19
 */

import React from 'react';
import ReactDom from 'react-dom';
import {BrowserRouter as Router, Route, Redirect, Switch, Link} from 'react-router-dom';

import Home from 'page/home/index.jsx'; 


import 'font-awesome/css/font-awesome.min.css';
import './index.css';
import './index.scss'

class App extends React.Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Redirect from="*" to="/" />
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
