import React from 'react';
import { Form, Input, Icon,Button } from 'antd';

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

// 工作经历
let workUid = 0;

class WorkExpForm extends React.PureComponent {
    constructor(props) {
        super(props);
        const { value } = props;
        this.state = {
            value
        };
    }

    addWorkExp = () => {
        const { form } = this.props;
        const keys = form.getFieldValue("workKeys");
        const nextKeys = keys.concat(workUid);
        workUid++;
        form.setFieldsValue({
          workKeys: nextKeys
        });
      };
      removeWorkExp = k => {
        const { form } = this.props;
        const keys = form.getFieldValue("workKeys");
        form.setFieldsValue({
          workKeys: keys.filter(key => key !== k)
        });
      };

    render() {
        const { getFieldDecorator,getFieldValue } = this.props.form;
        getFieldDecorator("workKeys", { initialValue: [] });

        const workKeys = getFieldValue("workKeys");

        const workItems = workKeys.map((k, index) => {
            return (
                <Form.Item
                    {...(index === 0 ? formItemLayout : formItemLayoutWithOutLabel)}
                    label={index === 0 ? "公司名" : ""}
                    required={false}
                    key={k}
                >
                    {getFieldDecorator(`work[${k}]`, {
                        validateTrigger: ["onChange", "onBlur"],
                        rules: [
                            {
                                required: true,
                                whitespace: true,
                                message: "请输入公司名"
                            }
                        ]
                    })(
                        <Input
                            placeholder="公司名"
                            style={{ width: "60%", marginRight: 8 }}
                        />
                    )}
                    {workKeys.length > 1 ? (
                        <Icon
                            className="dynamic-delete-button"
                            type="minus-circle-o"
                            disabled={workKeys.length === 1}
                            onClick={() => this.removeWorkExp(k)}
                        />
                    ) : null}
                </Form.Item>
            );
        });
        return (
            <div>
                {workItems}
                <Form.Item {...formItemLayoutWithOutLabel}>
                    <Button
                        type="dashed"
                        onClick={this.addWorkExp}
                        style={{ width: "60%" }}
                    >
                        <Icon type="plus" /> 添加
                </Button>
                </Form.Item>
            </div>
        );
    }
}

export default Form.create({})(WorkExpForm)
