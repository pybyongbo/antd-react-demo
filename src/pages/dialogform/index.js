import React, { PureComponent } from 'react';

import { Form, Input, Button, Modal, Row, Col, Card } from 'antd';

const FormItem = Form.Item;
class Dialogform extends PureComponent {

    state = {
        form1visible: false,
        form2visible: false,

    }

    showForm1 = () => {
        this.setState({
            form1visible: true
        })
    }

    showForm2 = () => {
        this.setState({
            form2visible: true
        })
    }

    handleform1Ok = () => {
        this.setState({
            form1visible: false
        })
    }

    handleform2Ok = () => {
        this.setState({
            form2visible: false
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log(values)
            }
        })
    }

    render() {
        const { getFieldDecorator, getFieldsError } = this.props.form;
        const { form1visible, form2visible } = this.state;
        const formItemLayout = {
            labelCol: {
                span: 6
            },
            wrapperCol: {
                span: 18
            }
        };
        return (

            <div style={{ marginTop: 20 }}>
                <Button onClick={this.showForm1}>表单1</Button>
                <Button onClick={this.showForm2}>表单2</Button>

                <Modal
                    title={`添加库位`}
                    visible={form1visible}
                    okText={`确认添加`}
                    onOk={this.handleSubmit}
                    onCancel={this.handleform1Ok}
                    bodyStyle={{ padding: '30px 60px 10px 10px' }}
                    centered={true}
                    destroyOnClose={true}
                    width={620}>

                    <Form {...formItemLayout}>
                        <Row>
                            <Col>
                                <FormItem label="库位名称">
                                    {getFieldDecorator('name', {
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

                                    })(
                                        <Input.TextArea style={{ height: 124 }} placeholder="请填写库位说明" maxLength={200} />
                                    )}
                                </FormItem>
                            </Col>
                        </Row>
                    </Form>
                </Modal>


                <Modal
                    title={`添加库位2`}
                    visible={form2visible}
                    okText={`确认添加`}
                    onOk={this.handleSubmit}
                    onCancel={this.handleform2Ok}
                    bodyStyle={{ padding: '30px 60px 10px 10px' }}
                    centered={true}
                    destroyOnClose={true}
                    width={620}>

                    <Form {...formItemLayout}>
                        <Row>
                            <Col>
                                <FormItem label="表单2">
                                    {getFieldDecorator('name2', {

                                    })(<Input placeholder="请输入库位名称" maxLength={50} />)}
                                </FormItem>

                                <FormItem label="表单库位说明">
                                    {getFieldDecorator('description2', {

                                    })(
                                        <Input.TextArea style={{ height: 124 }} placeholder="请填写库位说明" maxLength={200} />
                                    )}
                                </FormItem>
                            </Col>
                        </Row>
                    </Form>
                </Modal>

            </div>

        )
    }
}

export default Form.create({

})(Dialogform)