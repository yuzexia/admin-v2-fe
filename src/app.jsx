/*
 * @Author: yuze.xia 
 * @Date: 2018-09-21 11:03:12 
 * @Last Modified by: yuze.xia
 * @Last Modified time: 2018-09-27 13:24:00
 */

import React from 'react';
import ReactDom from 'react-dom';

import 'font-awesome/css/font-awesome.min.css';
import './index.css';
import './index.scss'

ReactDom.render(
    <div>
        <h1>Hello, World!</h1>
        <i className="fa fa-user-circle-o"></i>
    </div>,
    document.getElementById('app')
)
