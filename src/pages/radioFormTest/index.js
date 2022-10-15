/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { Fragment, useEffect, useState, useMemo } from "react";
import { Row, Col, Form, Input, Select, Radio, Button, InputNumber } from "antd";


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

  // const [otherform] = Form.useForm();

  const [conType, setConType] = useState(1);

  const [formType, setFormType] = useState('');

  const [submitData, setSubmitData] = useState({
    cardType: 1, //卡片类型 1 IMAGELINK 2 APPLETCARD
    productDescribe: '', //产品描述(图文链接)
    productDescribe_2: '', //产品描述(小程序卡片)
    priceDescribe: '', // 价格描述(图文链接)
    priceDescribe_2: '', // 价格描述(小程序卡片)
    productName: '', // 产品价格(图文链接)
    productName_2: '', // 产品价格(小程序卡片)
    productIcon: '', // 封面(图文链接)
    productIcon_2: '', // 封面(小程序卡片)
    productLink: '', // 产品链接(图文链接)
    appletId: '', // appId(小程序卡片)
    appletRoute: '', // appPath(小程序卡片)
  });

  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const [postData, setPostData] = useState({
    uname: '',
    uage: ''
  });

  //当前操作的表单元素
  const changeValueType = (valueType) => {
    setFormType(valueType);
  };

  //注意：当前操作的表单元素和进行验证的表单元素不能为同一个，否则会陷入死循环  
  //最小值函数
  const minValueFn = (rule, value, callback) => {
    const { getFieldValue, validateFields } = form;
    const maxValue = getFieldValue('creditEndRange');
    if (value != null && value !== '') {
      if (maxValue != null && maxValue !== '' && value >= maxValue) {
        // callback('最小值需小于最大值');
        return Promise.reject(new Error('最小值需小于最大值'));
      }
    }
    // if (formType === rule.field) {
    //   validateFields(['creditEndRange']);
    // }
    // callback();
    return Promise.resolve();
  };
  //最大值函数
  const maxValueFn = (rule, value, callback) => {
    const { getFieldValue, validateFields } = form;
    const minValue = getFieldValue('creditStartRange');
    if (value != null && value !== '') {
      if (minValue != null && minValue !== '' && value <= minValue) {
        // callback('最大值需大于最小值');
        return Promise.reject(new Error('最大值需大于最小值'));
      }
    }
    // if (formType === rule.field) {
    //   validateFields(['creditStartRange']);
    // }
    // callback();
    return Promise.resolve();
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
      <>

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

        <Form.Item
          label="意向分"
          labelCol={8}
        >
          <Form.Item
            name="creditStartRange"
            rules={[
              {
                required: form.getFieldValue('creditEndRange'),
                message: '请输入最小值'
              },
              { validator: minValueFn }
            ]}
            style={{ float: 'left' }}
          >
            <InputNumber
              min={1}
              style={{ width: '100%' }}
              placeholder="请输入最小值"
              onClick={() => {
                changeValueType('creditStartRange');
              }}
            />
          </Form.Item>
          <span style={{ float: 'left', margin: '0 20px' }}>至</span>
          <Form.Item
            name="creditEndRange"
            rules={[
              { required: form.getFieldValue('creditStartRange'), message: '请输入最大值' },
              { validator: maxValueFn },
            ]}
            style={{ float: 'left' }}
          >
            <InputNumber
              min={1}
              style={{ width: '100%' }}
              placeholder="请输入最大值"
              onClick={() => {
                changeValueType('creditEndRange');
              }}
            />
          </Form.Item>
        </Form.Item>
      </>


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

          <Input placeholder="请输入产品名称" />

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
          <Button
            type="primary"
            htmlType="submit"
          >
            Submit
          </Button>
        </Form.Item>

      </Form>

      <br />
      <hr />

      <h3>Form的component属性设置为false,不创建form元素DOM节点</h3>
      <br />

      <Form

        component={false}
      >

        <Form.Item
          label="姓名"
        // name="uname"
        >

          <Input
            placeholder="请输入姓名"
            allowClear
            onChange={e => {
              setPostData({ ...postData, uname: e.target.value });
            }}
          />

        </Form.Item>

        <Form.Item
          label="年龄"
        // name="uage"
        >

          <Input
            placeholder="请输入年龄"
            allowClear
            onChange={e => {
              setPostData({ ...postData, uage: e.target.value });
            }}
          />

        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button
            type="primary"
            // htmlType="submit"
            onClick={() => {
              console.log({ ...postData })
            }}
          >
            提交
          </Button>
        </Form.Item>

      </Form>


    </div>
  );
};



export default RadioFormTest;