import React, { PureComponent } from 'react';

import { Form, Input, Button } from 'antd';
import styles from './index.less'
class Dynamicform extends PureComponent {

    resetForm = () =>{

        this.props.form.resetFields()

    }

    save = () => {
        const { validateFieldsAndScroll } = this.props.form;
        validateFieldsAndScroll((err, values) => {
            if (err) {
                return;
            }
            const body = JSON.stringify(values, null, 2);
            // console.log(values);
            let arr = [];
            let arrGroup = [];
            Object.keys(values).forEach((v) => {
                let index = v.split('_')[1];
                let key = v.split('_')[0];
                arr[index] = arr[index] || {}
                arr[index][v] = values[v];
                // console.log(values[v]);

                arrGroup[index] = arrGroup[index] || {}
                arrGroup[index][key] = values[v];
                // console.log(key);
               
            })
            console.log('不同name值提交',arr);

            console.log('分组name值提交',arrGroup);

            // let postData = [];
            // arr.map(item=>{
            //     console.log(item.name,item.value,item.age)
            // })
        });
    };

    render() {
        const data = [{
            name: '名称1',
            value: 1,
            age:''
        }, {
            name: '名称2',
            value: 2,
            age:''
        }];
        return (

            <div>
                {data.map((item, index) => (
                    <Form key={index} style={{ marginBottom: 30, width: 680 }}>
                        <h2>表单{index + 1}</h2>
                        <div>
                            <Form.Item label={`name${index+1}`}>
                                {this.props.form.getFieldDecorator('name_'+index)(
                                    <Input autoComplete="off" />
                                )}
                            </Form.Item>
                        </div>
                        <div>
                            <Form.Item label={`value${index+1}`}>
                                {this.props.form.getFieldDecorator('value_'+index)(
                                    <Input autoComplete="off" />
                                )}
                            </Form.Item>
                        </div>
                        <div>
                            <Form.Item label={`age${index+1}`}>
                                {this.props.form.getFieldDecorator('age_'+index)(
                                    <Input autoComplete="off" />
                                )}
                            </Form.Item>
                        </div>
                 
                    </Form>
                ))
                }
                <div className={styles.btngroup}>
                    <Button type="primary" onClick={this.save}>
                        保存
                     </Button>
                    <Button onClick={this.resetForm}>重置</Button>
                </div>
            </div>
        )
    }

}


export default Form.create({})(Dynamicform)