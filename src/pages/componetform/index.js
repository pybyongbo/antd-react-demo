import React from "react";
import { Form, Card, Button, } from "antd";

import moment from 'moment';

import BasicInfoForm from "../../components/BasicInfoForm";
//工作经验组件
import WorkExpForm from "../../components/WorkExpForm";

//项目经验组件
import ProjectExpForm from "../../components/ProjectExpForm";

class App extends React.Component {

    save = () => {
        const { validateFieldsAndScroll } = this.props.form;
        validateFieldsAndScroll((err, values) => {
            if (err) {
                return;
            }
            console.log(111,values);
            const body = JSON.stringify(values, null, 2);
            console.log(body);
        });
        //基本信息
        // this.basicInfoForm.props.form.validateFieldsAndScroll((err, values) => {
        //     if (err) {
        //         return;
        //     }
        //     console.log(values)
        // });

        // this.workInfoForm.props.form.validateFieldsAndScroll((err, values) => {
        //     if (err) {
        //         return;
        //     }
        //     console.log("workdsInfo:",values)
        // });

        // this.projectInfoForm.props.form.validateFieldsAndScroll((err, values) => {
        //     if (err) {
        //         return;
        //     }
        //     console.log("projectInfo:",values)
        // });
    };

    savebasicinfo = () =>{
         this.basicInfoForm.props.form.validateFieldsAndScroll((err, values) => {
            if (err) {
                return;
            }
            values.birthday = moment(values.birthday).format("YYYY-MM-DD")
            // console.log(moment(values.birthday).format("YYYY-MM-DD"))
            // console.log(values);
            console.log(values,moment(moment(values.birthday).format('YYYY-MM-DD')).valueOf())
        });
    }

    saveworkinfo = () =>{
         this.workInfoForm.props.form.validateFieldsAndScroll((err, values) => {
            if (err) {
                return;
            }
            console.log("workdsInfo:",values)
        });
    }

    saveprojectinfo = () =>{
        this.projectInfoForm.props.form.validateFieldsAndScroll((err, values) => {
           if (err) {
               return;
           }
           console.log("projectInfo:",values)
       });
   }
    reset = () => {
        // const { resetFields,setFieldsValue } = this.props.form;
        //resetFields();
        // this.props.form.resetFields();
        this.basicInfoForm.props.form.resetFields();
        this.workInfoForm.props.form.resetFields();
        this.projectInfoForm.props.form.resetFields();
    };

    checkBasicInfo = (rule, values, callback) => {
        if (!values) {
            callback('请输入基本信息');
            return;
        }
        if (!values.birthday) {
            callback('请选择出生年月');
            return;
        }
        if (!values.sex) {
            callback('请选择性别');
            return;
        }
        if (!values.city) {
            callback('请填写所在城市');
            return;
        }
        const emailRegexp = /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/;
        if (!values.email) {
            callback('请输入邮箱');
            return;
        } else if (values.email && !emailRegexp.exec(values.email)) {
            callback('请检查邮箱格式');
            return;
        } else {
            callback();
        }
        callback();
    }

    render() {
        const { getFieldDecorator } = this.props.form;

        return (
            <div className="resume" style={{ width: 980, marginTop: 20 }}>
                <Card
                    title="基本信息表单组件"
                    className="resume__basic"
                    style={{ marginBottom: 10 }}
                >
                    <div className="basic__content">
                        <Form.Item>
                            {getFieldDecorator("basic", {
                            // rules: [{
                            //     validator: this.checkBasicInfo
                            // }],
                            normalize: function(value) {
                                return {...value}
                            }
                            })(<BasicInfoForm  wrappedComponentRef={(basicInfo) => this.basicInfoForm = basicInfo}/>)}
                        </Form.Item>
                    </div>

                    {/* <div className="basic__content">
                        <Form.Item>
                            {getFieldDecorator("basic", {
                               
                                rules: [{
                                    validator: this.checkBasicInfo
                                }],
                                // validateTrigger: 'onBlur'
                               
                            })(<BasicInfoForm />)}
                        </Form.Item>
                    </div> */}

                </Card>

                <Card
                    title="工作经历表单组件"
                    style={{ marginBottom: 10 }}
                    className="resume__work"
                >

                <WorkExpForm wrappedComponentRef={(workInfo) => this.workInfoForm = workInfo}/>
                    
                </Card>
                <Card
                    title="项目经历表单组件"
                    style={{ marginBottom: 10 }}
                    className="resume__education"
                >
                    <ProjectExpForm wrappedComponentRef={(projectInfo) => this.projectInfoForm = projectInfo} />
                    
                    {/* {getFieldDecorator("projectInfo", {
                       
                    })(<ProjectExpForm />)} */}
                
                </Card>
                <Button type="primary" onClick={this.save}>
                    保存
                </Button>

                <Button type="primary" onClick={this.savebasicinfo}>
                    保存基本信息
                </Button>

                <Button type="danger" onClick={this.saveworkinfo}>
                    获取工作经历表单值
                </Button>

                <Button type="danger" onClick={this.saveprojectinfo}>
                    获取项目经历表单值
                </Button>

                <Button onClick={this.reset}>重置</Button>
            </div>
        );
    }
}

export default Form.create({})(App);

// wrappedComponentRef={(workInfo) => this.workInfoForm = workInfo}