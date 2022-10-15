/* eslint-disable no-unused-expressions */
import React, { useState, useRef } from 'react';
import './index.css';
import Modal from './components/modal.js';

import { Form, InputNumber, Button, Input, Checkbox, Col, Row, TimePicker, Drawer } from "antd";

import DrawerForm from './components/pagedrawer';
import DrawerFormOther from './components/pagedrawer2';


function Modalapp() {
  const [form] = Form.useForm();
  const checkboxEl = useRef(null);
  const [modalVisible, setModalVisible] = useState(false);

  const [drawerVisible, setDrawerVisible] = useState(false);

  const [checkArr, setCheckArr] = useState([]);
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
  );

  const onChange = (checkedValues) => {
    console.log('checked = ', checkedValues);
    form.setFieldsValue({
      groupName: checkedValues
    });
    setCheckArr(checkedValues)
  };

  const onChangeTime = (val) => {
    console.log(val)
  }

  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };

  const onClose = () => {
    setDrawerVisible(false);
  }

  const onHandleSubmit = (val) => {
    val && console.log(123, val);
  }

  const onHandleSubmitOther = (val) => {
    val && console.log(456, val);
  }

  return (
    <div className="App" style={{ width: '40%' }}>
      <button onClick={() => { setModalVisible(true) }} className="openBtn">open modal</button>
      <Modal {...modalConfig}>{modalChildren}</Modal>

      <br /><br />
      <Form
        form={form}
        name="create"
        // component={false}
        preserve={false}
        initialValues={{
          min_price: 1,
          max_price: 2
        }}
        labelCol={{ span: 6 }}
        wrapperCol={{ span: 18 }}
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


        <Form.Item
          label="测试"
          name="test"
          style={{ position: 'relative' }}
          extra={
            <Button name="btn" type='default' style={{ position: 'absolute', left: '200px', top: 0 }}>
              其他内容
            </Button>
          }
        >
          <Input placeholder='请输入' onChange={(e) => {
            console.log(e.target.value);
            form.setFieldsValue({
              test: e.target.value
            })
          }
          }
          />

        </Form.Item>

        <Form.Item wrapperCol={{ offset: 4 }} style={{ clear: 'both' }}>
          <Button type="primary" size="large" htmlType="submit">
            提交
          </Button>
        </Form.Item>

        <Form.Item
          name="groupName"
        >
          <Input type="text" />
        </Form.Item>


      </Form>

      <br /><br />

      <TimePicker onChange={onChangeTime} />

      <hr />

      <Checkbox.Group
        style={{
          width: '100%',
        }}
        onChange={onChange}
        // value={[].concat(form.getFieldValue('groupName'))}
        value={checkArr}
      >
        <Row>
          <Col span={8}>
            <Checkbox ref={checkboxEl} value="A">A</Checkbox>
          </Col>
          <Col span={8}>
            <Checkbox value="B">B</Checkbox>
          </Col>
          <Col span={8}>
            <Checkbox value="C">C</Checkbox>
          </Col>
          <Col span={8}>
            <Checkbox value="D">D</Checkbox>
          </Col>
          <Col span={8}>
            <Checkbox value="E">E</Checkbox>
          </Col>
        </Row>
      </Checkbox.Group>
      {/* checkboxEl.current.focus() */}
      <br /><br />
      <Button onClick={() => { console.log(checkboxEl.current.focus()) }}>聚焦测试</Button>

      <Button onClick={() => {
        // form.setFieldsValue({
        //   groupName: ['D']
        // });
        setCheckArr("C".concat(checkArr));
        console.log(form.getFieldValue('groupName'));
        // console.log();
      }}>
        选中C选项
      </Button>


      <br /><br />

      <Checkbox.Group value={[1, 2, 3]}>
        <Checkbox value={1}>1</Checkbox>
        <Checkbox value={2}>2</Checkbox>
        <Checkbox value={3}>3</Checkbox>
        <Checkbox value={4}>4</Checkbox>
      </Checkbox.Group>

      <br /><br />


      <Button onClick={() => { setDrawerVisible(true) }}>侧滑打开</Button>

      <Drawer
        title="Basic Drawer"
        placement="right"
        onClose={onClose}
        visible={drawerVisible}
        closable={false}
        extra={<Button
          htmlType='submit'
          form={'otherdrawerform'}
          onClick={() => onHandleSubmitOther()}
        >
          提交测试
        </Button>}
        footerStyle={{
          textAlign: 'right'
        }}
        footer={
          [
            <Button
              key="cancle"
              type="default"
              onClick={onClose}
              style={{ marginRight: 10 }}
            >
              取消
            </Button>,
            <Button
              type="primary"
              key="sure"
              htmlType='submit'
              form={'drawerform'}
              onClick={() => onHandleSubmit()}
            // loading={addBtnloading}
            >
              确定
            </Button>
          ]
        }

      >

        {drawerVisible &&

          <>
            <h3>表单1:</h3>
            <DrawerForm onHandleSubmit={onHandleSubmit} />
            <hr />
            <h3>表单2:</h3>
            <DrawerFormOther onHandleSubmit={onHandleSubmitOther}></DrawerFormOther>
          </>


        }

      </Drawer>

    </div>
  )
}

export default Modalapp;