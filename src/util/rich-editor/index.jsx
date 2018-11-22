/*
 * @Author: yuze.xia 
 * @Date: 2018-11-20 20:16:17 
 * @Last Modified by: yuze.xia
 * @Last Modified time: 2018-11-22 12:59:57
 */
import React from 'react';
import Simditor from 'simditor';

import 'simditor/styles/simditor.scss';
import './index.scss';
// 通用的富文本编辑器，依赖jquery
class RichEditor extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.loadEditor();
    }

    componentWillReceiveProps(nextProps) {
        console.log(this.props.detail);
        console.log('---------', nextProps);
        if (this.props.defaultDetail !== nextProps.defaultDetail) {
            this.simditor.setValue(nextProps.defaultDetail);
        }
    }
    // 初始化editor
    loadEditor() {
        let element = this.refs['textarea']; // 通过refs获取元素
        this.simditor = new Simditor({
            textarea: $(element),
            defaultValue: this.props.placeholder || '请输入内容',
            upload: {
                url: '/manage/product/richtext_img_upload.do',
                defaultImage: '',
                fileKey: 'upload_file'
            }
        });
        this.bindEditorEvent();
    }
    // 初始化富文本编辑器的事件
    bindEditorEvent() {
        this.simditor.on('valuechanged', e => {
            this.props.onValueChange(this.simditor.getValue());
        })
    }


    render() {
        return (
            <div className="rich-editor">
                <textarea ref="textarea"></textarea>
            </div>
        )
    }
}

export default RichEditor;
