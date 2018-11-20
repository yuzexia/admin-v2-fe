/*
 * @Author: yuze.xia 
 * @Date: 2018-11-20 15:27:11 
 * @Last Modified by: yuze.xia
 * @Last Modified time: 2018-11-20 17:41:27
 */
import React from 'react';
import FileUpload from './react-fileupload.jsx';

class FileUploader extends React.Component {
    constructor(props) {
        super(props);
    }

    render(){
        /*set properties*/
        const options={
            baseUrl: '/manage/product/upload.do',
            fileFieldName: 'upload_file',
            dataType: 'json',
            chooseAndUpload: true,
            uploadSuccess: (res) => {
                this.props.onSuccess(res.data);
            },
            uploadError: (err) => {
                this.props.onError(err.message || '上传图片出错啦！');
            }
        }
        /*Use FileUpload with options*/
        /*Set two dom with ref*/
        return (
            <FileUpload options={options}>
                <button ref='chooseAndUpload' className="btn btn-primary">请选择图片</button>
            </FileUpload>
            )	        
        }
}

export default FileUploader;
