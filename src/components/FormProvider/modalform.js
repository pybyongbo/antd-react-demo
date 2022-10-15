import React, { useState, useEffect, useRef } from 'react';

import { Form, Modal, Input, InputNumber } from 'antd';

const useResetFormOnCloseModal = ({ form, open, optType, record }) => {
  const prevOpenRef = useRef();
  useEffect(() => {
    prevOpenRef.current = open;
    if (optType === 'edit') {
      console.log({ ...record });
      form.setFieldsValue({
        ...record
      })
    }

  }, [form, open, optType, record]);
  const prevOpen = prevOpenRef.current;
  useEffect(() => {
    if (!open && prevOpen) {
      form.resetFields();
    }
  }, [form, prevOpen, open]);
};


const ModalForm = ({ open, onCancel, optType, record }) => {
  const [form] = Form.useForm();

  // useEffect(() => {
  //   if (optType === 'edit') {
  //     form.setFieldsValue({
  //       ...record
  //     })
  //   } else {
  //     form.setFieldsValue({
  //       id:new Date().getTime()
  //     })
  //   }
  // }, [form, optType, record])


  useResetFormOnCloseModal({
    form,
    open,
    optType, record
  });

  const onOk = () => {
    console.log('inner', form.getFieldsValue());
    form.submit();
  };

  return (
    <Modal title="Basic Drawer" visible={open} onOk={onOk} onCancel={onCancel}>
      <Form
        form={form}
        name="userForm"
        wrapperCol={{
          span: 18
        }}
        labelCol={{
          span: 6
        }}
      >

        <Form.Item
          name="uname"
          label="User Name"
          rules={[
            {
              required: true,
            },
          ]}
          validateFirst={true}
        >
          <Input placeholder='请输入用户名' />
        </Form.Item>
        <Form.Item
          name="uage"
          label="User Age"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <InputNumber placeholder='请输入年龄' min={1} max={100} style={{ width: '60%' }} />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default ModalForm;