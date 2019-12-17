import React, { Component } from 'react';
import { Modal, Button,Card } from 'antd';
import Forms from '../../components/Formtest1/'

import AddForms from '../../components/Formtest2/'


export default class Modals extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false,
            locationDiaVisible:false,
            initValue1: 0,
            initValue2: '李云龙',
            initValueList: [{
                id: 1,
                name: "李云龙",
            }, {
                id: 2,
                name: "李荣基",
            }, {
                id: 3,
                name: "李达"
            }]
        };
    }
    handleClick = () => {
        this.setState({
            visible: true
        })
    };

    handlelocationshow = () =>{
        this.setState({
            locationDiaVisible:true
        })
    }
    handlelocationOk = () =>{
        this.setState({
            locationDiaVisible:false
        })
    }

    handleCreate = () => {
        // let values = this.formRef.getItemsValue();
        // 获取到子组件form的值，做进一步操作
        // console.log(values);
        this.formRef.props.form.validateFieldsAndScroll((err, values) => {
            if (err) {
                return;
            }
            console.log("formValues:", values)
            this.setState({
                visible: false
            });
        })
        //执行下子组件的方法
        // this.formRef.submitData({
        //     fatherInof:'pyb'
        // })
    };

    handleSubmitAddstoragebin =(values) =>{

        let postData = {
            ...values,
            no: '',
            status: 1
        };
        console.log("formValues:",postData)
    }
    render() {
        const { initValue1, initValue2, initValueList,locationDiaVisible } = this.state;

        let addStoragteform = {
            locationDiaVisible, //弹框显示属性
            handlelocationOk: this.handlelocationOk,
            handleSubmitAddstoragebin: this.handleSubmitAddstoragebin
        };
        return (
            <section>
                <Modal
                    visible={this.state.visible}
                    title="表单提交测试"
                    onOk={this.handleCreate}
                    centered
                    onCancel={() => {
                        this.setState({ visible: false });
                    }}
                    bodyStyle={{
                        padding:30
                    }}
                    okText="保存"
                    cancelText="取消"
                >
                    <Forms
                        initValue1={initValue1}
                        initValue2={initValue2}
                        initValueList={initValueList}
                        wrappedComponentRef={(form) => this.formRef = form}
                    />
                </Modal>

                {/* 表单二 */}
                <AddForms {...addStoragteform}></AddForms>

              
                <Button onClick={() => this.handleClick()} style={{ marginTop: 20 }}>点击弹框1</Button>
                <Button onClick={() => this.handlelocationshow()} style={{ marginTop: 20 }}>点击弹框2</Button>

                <Card title="一个页面多个表单操作说明:"  style={{ width: 650,marginTop:50 }}>
                    <p>1.页面多个表单操作建议放入不同的文件夹,作为组件引入.不同的功能拆分不同的组件</p>
                    <p>2.表单作为弹框展示,例如:显示影藏状态,调用接口方法建议都放入外层父组件.(传入子组件即可)</p>
                    <p>3.子组件拿到父组件传递的参数和方法进行操作(通过this.props获取)</p>
                    <p>4.直接将Modal,Form 都放到子组件中.外层组件直接引入(例如:试剂SAAS仓储物流模块,新增库位,仓储物流管理)</p>
                </Card>
            </section>
        );
    }
}