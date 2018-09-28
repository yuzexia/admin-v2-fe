/*
 * @Author: yuze.xia 
 * @Date: 2018-09-21 11:03:12 
 * @Last Modified by: yuze.xia
 * @Last Modified time: 2018-09-28 19:19:02
 */

import React from 'react';
import ReactDom from 'react-dom';

import 'font-awesome/css/font-awesome.min.css';
import './index.css';
import './index.scss'

ReactDom.render(
    <div>
        <div>hello world</div>
        <p>hello, react</p>
        <i className="fa fa-user-circle-o"></i>
    </div>,
    document.getElementById('app')
)
