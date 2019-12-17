import React, { Component } from 'react';
import { Form, Input, Modal } from 'antd';

const FormItem = Form.Item;

class AddForms extends Component {

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                 this.props.handleSubmitAddstoragebin(values);
            }
        })
    }

    render() {
        const formItemLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 8 },
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 16 },
            },
        };
        const { getFieldDecorator } = this.props.form; // 校验控件
        const { locationDiaVisible, handlelocationOk } = this.props;
        return (
            <Modal title={`测试表单2`}
                visible={locationDiaVisible}
                okText={`确定`}
                cancelText="取消"
                onOk={this.handleSubmit}
                onCancel={handlelocationOk}
                bodyStyle={{ padding: '30px 60px 10px 10px' }}
                centered={true}
                destroyOnClose={true}
                width={620}>
                <Form {...formItemLayout} style={{ backgroundColor: '#fff', padding: '20px' }}>
                    <FormItem label="库位名称">
                        {getFieldDecorator('name', {
                            initialValue: '',
                            rules: [
                                {
                                    required: true,
                                    message: '请填写库位名称'
                                }
                            ]
                        })(<Input placeholder="请输入库位名称" maxLength={50} />)}
                    </FormItem>
                    <FormItem label="库位说明">
                        {getFieldDecorator('description', {
                            initialValue: '',
                        })(
                            <Input.TextArea style={{ height: 124 }} placeholder="请填写库位说明" maxLength={200} />
                        )}
                    </FormItem>
                </Form>
            </Modal>
        )
    }
}

export default Form.create()(AddForms);        //创建form实例