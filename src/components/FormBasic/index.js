/* eslint-disable react/prop-types */
import React, { useEffect, useImperativeHandle, forwardRef } from 'react';
import { Form, Input, Row, Col } from 'antd';

const BasicinfoFrom = forwardRef((props, ref) => {
  // 营销渠道
  const {
    form,

  } = props;

  useEffect(() => {
    form.setFieldsValue({
      id: '1231'
    })
  }, [])

  useImperativeHandle(ref, () => ({

    validatabasicform: async () => {
      const result = await form.validateFields();
      return result;
    }

  }));

  const phoneReplace = (e) => {
    let value = e.target.value;
    value = value.replace(/\D/g, "").substring(0, 11);
    const length = value.length;
    if (length > 3 && length < 8) {
      value = `${value.substr(0, 3)} ${value.substr(3)}`;
    } else if (length >= 8) {
      value = `${value.substr(0, 3)} ${value.substr(3, 4)} ${value.substr(7,)}`;
    }
    console.log('result', value)
    e.target.value = value;
    form.setFieldsValue({
      mobileNo: value
    })
  }

  const onValuesChange = (changedValues, allValues) => {
    console.log('result', changedValues, allValues);
  }


  return (
    <div>
      <Form
        form={form}
        labelAlign="right"
        labelCol={{ span: 6 }}
        onValuesChange={onValuesChange}
      >
        <Row style={{ display: 'none' }}>
          <Col span={12}>
            <Form.Item
              label="ID"
              name="id"
            >
              <Input type="hidden" disabled placeholder="请输入线索ID" maxLength={20} allowClear />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={[20, 5]}>
          <Col span={12}>
            <Form.Item
              label="线索名称"
              labelCol={4}
              name="cluename"
              rules={[{ required: true, message: '请输入线索名称' }]}
            >
              <Input placeholder="请输入线索名称" maxLength={20} allowClear />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label="手机号"
              name="mobileNo"
            >
              <Input
                placeholder="请输入手机号"
                allowClear
                type="tel"
                maxLength={13}
                onBlur={e => { phoneReplace(e) }}
              />
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </div>
  )
});

export default BasicinfoFrom;