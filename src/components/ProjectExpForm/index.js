import React from 'react';
import { Form, Select, Input, Icon, Button, Card } from 'antd';


// 项目经历
let projectUid = 0;
const formItemLayout = {
    labelCol: {
        xs: { span: 24 },
        sm: { span: 4 }
    },
    wrapperCol: {
        xs: { span: 24 },
        sm: { span: 20 }
    }
};
const formItemLayoutWithOutLabel = {
    wrapperCol: {
        xs: { span: 24, offset: 0 },
        sm: { span: 20, offset: 4 }
    }
};
const { Option } = Select;
class ProjectExpForm extends React.PureComponent {
    constructor(props) {
        super(props);
        const { value } = props;
        this.state = {
            value
        };
    }
    //移除项目经验
    removeProjectExp = k => {
        const { form } = this.props;
        const keys = form.getFieldValue("projectKeys");
        form.setFieldsValue({
            projectKeys: keys.filter(key => key !== k)
        });
    };
    //添加项目经验
    addProjectExp = () => {
        const { form } = this.props;
        const keys = form.getFieldValue("projectKeys");
        const nextKeys = keys.concat(projectUid);
        projectUid++;
        form.setFieldsValue({
            projectKeys: nextKeys
        });
    };

    render() {
        const { getFieldDecorator, getFieldValue } = this.props.form;
        getFieldDecorator("projectKeys", { initialValue: [] });

        const projectKeys = getFieldValue("projectKeys");

        const projectItems = projectKeys.map((k, index) => {
            return (
                <Card
                    key={k}
                    extra={<a onClick={() => this.removeProjectExp(k)}>删除</a>}
                >
                    <Form.Item {...formItemLayout} label="项目名称">
                        {getFieldDecorator(`projects[${k}].title`, {
                            validateTrigger: ["onChange", "onBlur"],
                            rules: [
                                {
                                    required: true,
                                    whitespace: true,
                                    message: "请输入项目名称"
                                }
                            ]
                        })(
                            <Input
                                placeholder="项目名称"
                                style={{ width: "60%", marginRight: 8 }}
                            />
                        )}
                    </Form.Item>
                    <Form.Item {...formItemLayout} label="项目类型">
                        {getFieldDecorator(`projects[${k}].type`, {
                            validateTrigger: ["onChange", "onBlur"],
                            rules: [
                                {
                                    required: true,
                                    message: "请输入项目类型"
                                }
                            ]
                        })(
                            <Select
                                style={{ width: "100%" }}
                                placeholder="请选择项目类型（公司项目需要填写公司）"
                            >
                                <Option value={0}>个人项目</Option>
                                <Option value={1}>公司项目</Option>
                            </Select>
                        )}
                        {getFieldValue(`projects[${k}].type`) === 1 &&
                            getFieldDecorator(`projects[${k}].company`, {
                                validateTrigger: ["onChange", "onBlur"],
                                rules: [
                                    {
                                        required: true,
                                        message: "请输入公司名称"
                                    }
                                ]
                            })(<Input placeholder="请输入公司名称" />)}
                    </Form.Item>
                </Card>
            );
        });
        return (
            <div>
                {projectItems}
                <Form.Item {...formItemLayoutWithOutLabel}>
                    <Button
                        type="dashed"
                        onClick={this.addProjectExp}
                        style={{ width: "60%" }}
                    >
                        <Icon type="plus" /> 添加
                    </Button>
                </Form.Item>
            </div>
        );
    }
}

export default Form.create({
     // 当表单值发生改变时都会调用该方法
  onValuesChange(props, changed, values) {
    const { onChange } = props;
    if (onChange) {
      onChange({
        ...values,
        // ...changed,
      });
      console.log({
        ...values,
      })
    }
  },
})(ProjectExpForm)