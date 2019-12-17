import React, { Component } from 'react';
import {Form, Input, Select} from 'antd';
 
const FormItem = Form.Item;
const {Option}  = Select;
 
class Forms extends Component{
  getItemsValue = ()=>{
      const val= this.props.form.getFieldsValue(); // 获取from表单的值
      return val;
  }

  submitData = (info) =>{
    this.props.form.validateFieldsAndScroll((err, values) => {
        if (err) {
            return;
        }

        console.log({
            ...info,
            ...values
        })
        // console.log("son:", values)
    })
  }

  handleSelectChange = (val) =>{
      console.log(val)
  }
  render(){
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
    const { form, initValue1, initValue2, initValueList } = this.props;
    const { getFieldDecorator } = form; // 校验控件
    return(
      <Form style={{backgroundColor: '#fff', padding: '20px'}}>
        <FormItem
          {...formItemLayout}
          label={`相关数量`}
        >
          {getFieldDecorator(`amount`,{
            rules: [{
              message: '必填字段!',
              required: true
            }],
            initialValue: initValue1 ? initValue1 : undefined
          })(
            <Input placeholder="请输入"/>
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label={`选择相关名称`}
        >
          {getFieldDecorator(`name`,{
            rules: [{
              message: '必填字段!',
              required: false
            }],
            initialValue: initValue2 ? initValue2 : undefined
          })(
            <Select
              placeholder="请选择"
              onChange={this.handleSelectChange}
            >
              {
                initValueList && initValueList.map((x, i) => (
                  <Option value={x.name} key={x.id}>{x.name}</Option>
                ))
              }
            </Select>
          )}
        </FormItem>
      </Form>
    )
  }
}
 
export default Form.create()(Forms);        //创建form实例