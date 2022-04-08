/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { Fragment, useEffect, useState, useMemo } from "react";
import { Row, Col, Form, Input, Select, Radio, Button } from "antd";


const { Option } = Select;

const insureType = [
  {
    code: 1,
    name: '医疗险'
  },
  {
    code: 2,
    name: '重疾险'
  },
  {
    code: 3,
    name: '意外险'
  },
  {
    code: 4,
    name: '家财险'
  }
]

const RadioFormTest = () => {
  const [form] = Form.useForm();
  const [conType, setConType] = useState(1);

  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const PRODUCTLINK = useMemo(
    () => (
      <Form.Item

        label="产品链接"
        name="productLink"
        rules={[
          {
            required: true,
            message: '请输入产品链接',
          },
        ]}
      >
        <Input
          // onChange={productLink => {
          //   setSubmitData(prev => ({ ...prev, productLink }));
          // }}
          placeholder="请输入产品链接"
          allowClear
        />
      </Form.Item>
    ),
    [],
  );

  const PRODUCTDESCRIBE = useMemo(
    () => (
      <Form.Item
        label="产品描述"
        name="productDescribe"
        rules={[
          {
            required: true,
            message: '请输入产品描述',
          },
        ]}
      >
        <Input
          // onChange={productDescribe => {
          // 	setSubmitData(prev => ({ ...prev, productDescribe }));
          // }}
          placeholder="请填写产品描述"
        // maxLength={30}
        // suffix={
        //   <span>
        //     {form.getFieldValue()?.productDescribe?.length}/30
        //   </span>
        // }
        />
      </Form.Item>
    ),
    [form.getFieldValue()],
  );

  // 小程序AppID
  const APPLETID = useMemo(
    () => (
      <Form.Item
        // {...formSecondLevelLayout}
        label="小程序AID"
        name="appletId"
      // rules={[
      //   {
      //     required: true,
      //     message: '请填写小程序app ID',
      //   },
      // ]}
      >
        <Input
          // onChange={appletId => {
          // 	setSubmitData(prev => ({ ...prev, appletId }));
          // }}
          placeholder="小程序app ID"
          allowClear
        />
      </Form.Item>
    ),
    [form.getFieldValue()],
  );

  // 小程序路径
  const APPLETIDROUTE = useMemo(
    () => (
      <div style={{ position: 'relative' }}>
        <Form.Item
          // {...formSecondLevelLayout}
          label="小程序路径"
          name="appletRoute"
        // rules={[
        //   {
        //     required: true,
        //     message: '请填写小程序路径',
        //   },
        // ]}
        >
          <Input
            // onChange={appletRoute => {
            // 	setSubmitData(prev => ({ ...prev, appletRoute }));
            // }}
            placeholder="小程序路径"
            allowClear
          />
        </Form.Item>

      </div>
    ),
    [],
  );

  // 价格描述需求变更为 '备注'
  const PRICEDESCRIBE_2 = useMemo(
    () => (
      <Form.Item
        // {...formSecondLevelLayout}
        label="小程序备注"
        name="priceDescribe_2"
        rules={[
          {
            required: false,
            message: '请输入产品备注',
          },
        ]}
      >
        <Input
          // onChange={priceDescribe_2 => {
          // 	setSubmitData(prev => ({ ...prev, priceDescribe_2 }));
          // }}
          placeholder="请输入产品备注"
        // maxLength={10}
        // suffix={
        // 	<span className={styles.limitNumber}>
        // 		{form.getFieldValue()?.priceDescribe_2?.length}/10
        // 	</span>
        // }
        />
      </Form.Item>
    ),
    [form.getFieldValue()],
  );

  return (
    <div style={{ width: '100%' }}>
      <h3>单选切换表单提交</h3>
      <br /><br />
      <Form
        name="goodsform"
        form={form}
        labelAlign="right"
        colon={false}
        onFinish={onFinish}
      >

        <Form.Item
          label="产品名称"
          name="productName"
        >

          <Input s placeholder="请输入产品名称" />

        </Form.Item>
        <Form.Item
          label="险种类型"
          name="insuretype"
        >
          <Select
            allowClear
            placeholder="险种类型"
          >
            {insureType.length > 0 &&
              insureType.map(item => {
                return (
                  <Option value={item.code} key={item.code}>
                    {item.name}
                  </Option>
                );
              })}
          </Select>
        </Form.Item>

        <Form.Item
          label="内容类型"
          name="cardType"
          rules={[
            {
              required: true,
              message: '',
            },
          ]}
          initialValue={1}
        >
          <Radio.Group
            // onChange={e => {
            // 	setSubmitData({
            // 		...submitData,
            // 		cardType: e.target.value,
            // 	});
            // }}
            onChange={e => {
              console.log(e.target.value);
              setConType(e.target.value);
            }}
          >
            <Radio value={1}>图文链接</Radio>
            <Radio value={2}>小程序卡片</Radio>
          </Radio.Group>
        </Form.Item>

        <Form.Item
          noStyle
          shouldUpdate={(prevValues, currentValues) =>
            prevValues.gender !== currentValues.gender
          }
        >
          {({ getFieldValue }) =>
            // getFieldValue('cardType') === 1 ? (
            conType === 1 ? (
              <>
                {PRODUCTLINK}
                {PRODUCTDESCRIBE}

              </>
            ) : (
              <Col>
                <>
                  {APPLETID}
                  {APPLETIDROUTE}
                  {PRICEDESCRIBE_2}
                </>
              </Col>
            )
          }
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>

      </Form>

    </div>
  );
};



export default RadioFormTest;