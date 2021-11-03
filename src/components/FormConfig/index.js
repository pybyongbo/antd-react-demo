/* eslint-disable react/prop-types */
import React, {  useEffect, useImperativeHandle, forwardRef } from 'react';
import { Form, Input, Space, Button } from 'antd';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
const DataconfigFrom = forwardRef((props, ref) => {

  // 营销渠道
  const {
    form,
  } = props;

  useImperativeHandle(ref, () => ({

    validataconfigform: async () => {
      const result = await form.validateFields();
      return result;
    }

  }));

  useEffect(() => {

    form.setFieldsValue({
      users: [{}]
    })
  }, [form])

  return (
    <div>
      <Form
        form={form}
        labelAlign="right"
      >
        <Form.List name="users">
          {(fields, { add, remove }) => (
            <>
              {fields.map(({ key, name, fieldKey, ...restField }) => (
                <Space key={key} style={{ display: 'flex', marginBottom: 8 }} align="baseline">
                  <Form.Item
                    {...restField}
                    label="FirstName"
                    name={[name, 'first']}
                    fieldKey={[fieldKey, 'first']}
                    rules={[{ required: true, message: 'Missing first name' }]}
                  >
                    <Input placeholder="First Name" />
                  </Form.Item>
                  <Form.Item
                    {...restField}
                    name={[name, 'last']}
                    label="LastName"
                    fieldKey={[fieldKey, 'last']}
                    rules={[{ required: true, message: 'Missing last name' }]}
                  >
                    <Input placeholder="Last Name" />
                  </Form.Item>
                  {console.log('name', { key, name, fieldKey, ...restField })}
                  {name > 0 && <MinusCircleOutlined onClick={() => remove(name)} />}
                </Space>
              ))}
              <Form.Item>
                <Button type="dashed" onClick={
                  () => {

                    add();
                    // const usersArr = form.getFieldsValue("users").users;
                    // console.log('usersArr', usersArr);
                    // const isEmpty = usersArr.filter(Boolean).map(item=>{
                    //   return item.first;
                    // }).filter(Boolean);
                    // console.log('isEmpty', isEmpty)
                  }
                }
                  block icon={<PlusOutlined />}>
                  Add field
              </Button>
              </Form.Item>
            </>
          )}
        </Form.List>

      </Form>
    </div>
  )
});

export default DataconfigFrom;