import React from 'react';

import {
    Icon,
    Form,
    Card,
    Button,
    Cascader,
    Select,
    Input,
    DatePicker
} from 'antd';
// import './index.less'
import styles from './index.less'
// import provinces from 'china-division/dist/provinces.json';
// import cities from 'china-division/dist/cities.json';
// import areas from 'china-division/dist/areas.json';

import options from '../../utils/cities'
import moment from 'moment';



const { Option } = Select;

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

// // 格式化城市数据
// areas.forEach(area => {
//     const matchCity = cities.filter(city => city.code === area.cityCode)[0];
//     if (matchCity) {
//         matchCity.children = matchCity.children || [];
//         matchCity.children.push({
//             label: area.name,
//             value: area.code
//         });
//     }
// });

// cities.forEach(city => {
//     const matchProvince = provinces.filter(
//         province => province.code === city.provinceCode
//     )[0];
//     console.log('matchProvince',matchProvince)
//     if (matchProvince) {
//         matchProvince.children = matchProvince.children || [];
//         matchProvince.children.push({
//             label: city.name,
//             value: city.code,
//             children: city.children
//         });
//     }
// });

// const options = provinces.map(province => ({
//     label: province.name,
//     value: province.code,
//     children: province.children
// }));

// console.log("options",options);

// 工作经历与项目经历
let workUid = 0;
let projectUid = 0;


class Basicform extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            cascader: [], // Cascader级联 当前省市区
            curCity:[]
            // province: getProvince[0].name, // 当前省
            // cities: getCity[getProvince[0].id], // 当前省下市
            // cityValue: getCity[getProvince[0].id][0].name, // 当前市
            // provinceCode: '', // 当前省code
            // cityCode: '', // 当前市code
        }
    }
    onChange = (value, i) => {

        // const { form } = this.props;
        console.log('value',value);
        let cityArr = [];
        let cityObj = i.map((item,index)=>{
            return {
                'id':item.code,
                'name':item.value
            }
        })
        console.log('cityObj',cityObj)
        this.setState({
            cascader: i,
            curCity:cityObj
        }, () => {
            console.log(value);
            console.log(i);

        })

        // form.setFieldsValue({
        //         city: value
        //     });
    }
    save = () => {
        const { validateFieldsAndScroll } = this.props.form;
        validateFieldsAndScroll((err, values) => {
            if (err) {
                return;
            }
            values = {
                curCity:this.state.curCity,
                ...values,
                
                birthday: moment(values.birthday).format('YYYY-MM-DD')
            }
            const body = JSON.stringify(values, null, 2);
            console.log(body);
        });
    };
    reset = () => {
        const { resetFields } = this.props.form;
        resetFields();
    };
    removeWorkExp = k => {
        const { form } = this.props;
        const keys = form.getFieldValue('workKeys');
        form.setFieldsValue({
            workKeys: keys.filter(key => key !== k)
        });
    };
    addWorkExp = () => {
        const { form } = this.props;
        const keys = form.getFieldValue('workKeys');
        const nextKeys = keys.concat(workUid);
        workUid++;
        form.setFieldsValue({
            workKeys: nextKeys
        });
    };
    removeProjectExp = k => {
        const { form } = this.props;
        const keys = form.getFieldValue('projectKeys');
        form.setFieldsValue({
            projectKeys: keys.filter(key => key !== k)
        });
    };
    addProjectExp = () => {
        const { form } = this.props;
        const keys = form.getFieldValue('projectKeys');
        const nextKeys = keys.concat(projectUid);
        console.log(nextKeys)
        projectUid++;
        form.setFieldsValue({
            projectKeys: nextKeys
        });
    };
    render() {
        const { cascader } = this.state;
        const { getFieldDecorator, getFieldValue } = this.props.form;
        getFieldDecorator('workKeys', { initialValue: [] });
        getFieldDecorator('projectKeys', { initialValue: [] });

        const workKeys = getFieldValue('workKeys');
        const projectKeys = getFieldValue('projectKeys');
        const workItems = workKeys.map((k, index) => {
            return (
                <Form.Item
                    {...(index === 0 ? formItemLayout : formItemLayoutWithOutLabel)}
                    label={index === 0 ? '公司名' : ''}
                    required={false}
                    key={k}
                >
                    {getFieldDecorator(`work[${k}]`, {
                        validateTrigger: ['onChange', 'onBlur'],
                        rules: [
                            {
                                required: true,
                                whitespace: true,
                                message: '请输入公司名'
                            }
                        ]
                    })(
                        <Input
                            placeholder="公司名"
                            style={{ width: '60%', marginRight: 8 }}
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
        const projectItems = projectKeys.map((k, index) => {
            return (
                <Card
                    key={k}
                    extra={<span onClick={() => this.removeProjectExp(k)}>删除</span>}
                    style={{ marginBottom: 10 }}
                >
                    <Form.Item {...formItemLayout} label="项目名称">
                        {getFieldDecorator(`projects[${k}].title`, {
                            validateTrigger: ['onChange', 'onBlur'],
                            rules: [
                                {
                                    required: true,
                                    whitespace: true,
                                    message: '请输入项目名称'
                                }
                            ]
                        })(
                            <Input
                                placeholder="项目名称"
                                style={{ width: '60%', marginRight: 8 }}
                            />
                        )}
                    </Form.Item>
                    <Form.Item {...formItemLayout} label="项目类型">
                        {getFieldDecorator(`projects[${k}].type`, {
                            validateTrigger: ['onChange', 'onBlur'],
                            rules: [
                                {
                                    required: true,
                                    message: '请输入项目类型'
                                }
                            ]
                        })(
                            <Select
                                style={{ width: '100%' }}
                                placeholder="请选择项目类型（公司项目需要填写公司）"
                            >
                                <Option value={0}>个人项目</Option>
                                <Option value={1}>公司项目</Option>
                            </Select>
                        )}
                        {getFieldValue(`projects[${k}].type`) === 1 &&
                            getFieldDecorator(`projects[${k}].company`, {
                                validateTrigger: ['onChange', 'onBlur'],
                                rules: [
                                    {
                                        required: true,
                                        message: '请输入公司名称'
                                    }
                                ]
                            })(<Input placeholder="请输入公司名称" />)}
                    </Form.Item>
                </Card>
            );
        });
        return (
            <div className={styles.resume}>
                <Card
                    title="基本信息"
                    style={{ marginBottom: 10 }}
                    className="resume__basic"
                >
                    <div className="basic__content">
                        <Form.Item label="姓名">
                            {getFieldDecorator('name', {
                                rules: [
                                    {
                                        required: true,
                                        message: '请输入姓名'
                                    },
                                    {
                                        max: 10,
                                        message: '长度不能超过 10 个字符'
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
                                ]
                            })(<DatePicker placeholder="请选择出生年月" />)}
                        </Form.Item>
                        <Form.Item label="性别">
                            {getFieldDecorator('sex', {
                                rules: [
                                    {
                                        required: true,
                                        message: '请选择性别'
                                    }
                                ]
                            })(
                                <Select style={{ width: '100%' }} placeholder="请选择性别">
                                    <Option value={0}>男</Option>
                                    <Option value={1}>女</Option>
                                </Select>
                            )}
                        </Form.Item>
                        <Form.Item label="所在城市">
                             {getFieldDecorator('city', {
                                rules: [
                                    {
                                        required: true,
                                        message: '请选择所在城市'
                                    }
                                ],
                                //normalize: function (value) {
                                    // console.log(value);
                                    // return value ? [value[value.length - 1]] : value;
                                //}
                            })( 
                                <Cascader
                                    options={options}
                                    placeholder="请选择地址"
                                    onChange={this.onChange}
                                    style={{ width: 400 }}
                                />
                             )} 
                        </Form.Item>
                        <Form.Item label="邮箱">
                            {getFieldDecorator('email', {
                                rules: [
                                    {
                                        required: true,
                                        message: '请输入邮箱'
                                    },
                                    {
                                        type: 'email',
                                        message: '邮箱格式不正确'
                                    }
                                ]
                            })(<Input placeholder="请输入邮箱" />)}
                        </Form.Item>
                    </div>
                </Card>
                <Card
                    title="工作经历"
                    style={{ marginBottom: 10 }}
                    className="resume__work"
                >
                    {workItems}
                    <Form.Item {...formItemLayoutWithOutLabel}>
                        <Button
                            type="dashed"
                            onClick={this.addWorkExp}
                            style={{ width: '60%' }}
                        >
                            <Icon type="plus" /> 添加
            </Button>
                    </Form.Item>
                </Card>
                <Card
                    title="项目经历"
                    style={{ marginBottom: 10 }}
                    className="resume__education"
                >
                    {projectItems}
                    <Form.Item {...formItemLayoutWithOutLabel}>
                        <Button
                            type="dashed"
                            onClick={this.addProjectExp}
                            style={{ width: '60%' }}
                        >
                            <Icon type="plus" /> 添加
                        </Button>
                    </Form.Item>
                </Card>

                <div className={styles.btngroup}>
                    <Button type="primary" onClick={this.save}>
                        保存
                </Button>
                    <Button onClick={this.reset}>重置</Button>
                </div>
            </div>
        );
    }
}

export default Form.create({})(Basicform)