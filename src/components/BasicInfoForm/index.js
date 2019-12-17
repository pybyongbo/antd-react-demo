import React from 'react';
import { Form, Input, DatePicker } from 'antd';
import SexSelect from '../SexSelect';
import EmailInput from '../EmailInput';
import CitySelect from '../CitySelect';

import moment from 'moment';

class BasicInfoForm extends React.PureComponent {

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div className="basic__content">
                <Form.Item label="姓名">
                    {getFieldDecorator('name', {
                        initialValue: 'pybyongbo',
                        rules: [
                            {
                                required: true,
                                message: '请输入姓名'
                            }
                        ]
                    })(<Input placeholder="请输入姓名" />)}
                </Form.Item>
                <Form.Item label="出生年月">
                    {getFieldDecorator('birthday', {
                        rules: [
                            {
                                required: true,
                                message: '请选择出生年月'
                            }
                        ],
                        //normalize: function(value) {
                            // return moment(value, 'YYYY-MM-DD')||null;
                            // return moment(value.format('YYYY-MM-DD')).valueOf()
                       // }
                    })(<DatePicker  placeholder="请选择出生年月" />)}
                </Form.Item>
                <Form.Item label="性别">
                    {getFieldDecorator('sex', {
                        initialValue: 1,
                        rules: [
                            {
                                required: true,
                                message: '请选择性别'
                            }
                        ]
                    })(
                        <SexSelect />
                    )}
                </Form.Item>
                <Form.Item label="所在城市">
                    {getFieldDecorator('city', {
                        rules: [
                            {
                                required: true,
                                message: '请选择所在城市'
                            }
                        ]
                    })(
                        <CitySelect />
                    )}
                </Form.Item>
                <Form.Item label="邮箱">
                    {getFieldDecorator('email', {
                        rules: [
                            {
                                required: true,
                                message: '请输入邮箱'
                            }
                        ]
                    })(<EmailInput placeholder="请输入邮箱" />)}
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
        ...changed,
      });
    }
  },
})(BasicInfoForm)