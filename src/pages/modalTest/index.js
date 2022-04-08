import React, { useState } from 'react';
import './index.css';
import Modal from './components/modal.js';

import { Form, InputNumber, Button } from "antd";

function Modalapp() {
  const [form] = Form.useForm();
  const [modalVisible, setModalVisible] = useState(false);
  const modalConfig = {
    visible: modalVisible,
    closeModal: () => {
      setModalVisible(false);
    }
  }

  const onFinish = (values) => {
    console.log(values);
  };

  const onValuesChange = (values) => {
    if (values.min_price) {
      form.validateFields(["max_price"]);
    }
  };

  const modalChildren = (
    <div className="dialog">
      <span onClick={() => setModalVisible(false)} className="closeBtn">
        X
      </span>
      <div>
        这是内容
      </div>
    </div>
  )
  return (
    <div className="App" style={{width:'40%'}}>
      <button onClick={() => { setModalVisible(true) }} className="openBtn">open modal</button>
      <Modal {...modalConfig}>{modalChildren}</Modal>

      <br /><br />
      <Form
        form={form}
        name="create"
        preserve={false}
        initialValues={{
          min_price: 1,
          max_price: 2
        }}
        labelCol={{ span: 6 }}
        labelAlign="left"
        validateTrigger="onBlur"
        onFinish={onFinish}
        onValuesChange={onValuesChange}
      >

        <Form.Item
          name="min_price"
          label="最低价格"
          rules={[
            { required: true, message: "必须填写最低价格" },
            { type: "number", min: 1, max: 50000, message: "最低价格值错误" }
          ]}
        >
          <InputNumber className='w-full' />
        </Form.Item>

        <Form.Item
          name="max_price"
          label="最高价格"
          shouldUpdate={(prevValues, curValues) =>
            prevValues.min_price !== curValues.min_price
          }
          rules={[
            { required: true, message: "必须填写最高价格" },
            // { min: form.getFieldValue("min_price") }
            (form) => ({
              type: "number",
              min: form.getFieldValue("min_price"),
              message: "最高价格值错误"
            })
          ]}
        >
          <InputNumber className="w-full" />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 4 }}>
          <Button type="primary" size="large" htmlType="submit">
            提交
          </Button>
        </Form.Item>

      </Form>

    </div>
  )
}

export default Modalapp;