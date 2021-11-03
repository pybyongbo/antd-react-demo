/* eslint-disable no-const-assign */
import React, { Fragment, useState, useEffect } from "react";
import { Row, Col, Form, Select, Input, Button, Table } from "antd";

const { Option } = Select;
const TestForm = (props) => {

  const [channelName, setChannelName] = useState('抖音');

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
  ];

  const [columnsArr,setColumnsArr] = useState(columns);

  useEffect(() => {

    form.setFieldsValue({
      channelName
    })

  })

  const [form] = Form.useForm();

  const onValuesChange = (values) => {
    console.log('result', values)
  };


  const onChangeChannelName = (newChannelName) => {
    setChannelName(newChannelName);
    setTimeout(() => {
      form.setFieldsValue({
        channelName
      })
    }, 0)

  }

  const onSelectChange = (val) => {

    console.log('result val', val);
    // val === 'other' && columns.push({
    //   title: 'Address',
    //   dataIndex: 'address',
    //   key: 'address',
    // });

    if (val === 'other') {
      setColumnsArr(columns.concat({
        title: 'Address',
        dataIndex: 'address',
        key: 'address',
      }))
    } else {
      setColumnsArr(columns);
    }

    console.log('result', columns);

  }

  return (
    <div>
      <br /><br />
      <h2>测试代码改变表单字段值,是否触发</h2>
      <br /><br />
      <Form
        form={form}
        onValuesChange={onValuesChange}
      >
        <Row gutter={[10, 10]} style={{ width: '100%' }}>
          <Col>
            <Form.Item
              label="一级渠道名称"
              name="channelName"
            >
              <Input placeholder="请输入一级渠道名称" allowClear />
            </Form.Item>
          </Col>
          <Col>
            <Form.Item
              label="一级渠道编码"
              name="channelCode"
            >
              <Input placeholder="请输入一级渠道名称" allowClear />
            </Form.Item>
          </Col>

        </Row>

        <Row>
          <Col>
            <Form.Item
              label="下拉可搜可选"
              name="searchVal"
            >
              <Select
                showSearch
                style={{ width: 200 }}
                placeholder="Search to Select"
                optionFilterProp="children"
              >
                <Option value="1">Not Identified</Option>
                <Option value="2">Closed</Option>
                <Option value="3">Communicated</Option>
                <Option value="4">Identified</Option>
                <Option value="5">Resolved</Option>
                <Option value="6">Cancelled</Option>
              </Select>
            </Form.Item>
          </Col>



        </Row>


        <Row>
          <Col>
            <Form.Item
              label="下拉选择测试"
              name="shhw"
            >
              <Select
                style={{ width: 200 }}
                placeholder="Search to Select"
                onChange={onSelectChange}
              >
                <Option value="hhw">化合物</Option>
                <Option value="other">其他</Option>
              </Select>
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Item label="">
              <Button
                type="primary"
                // htmlType="submit"
                style={{ marginRight: 12, marginTop: 30 }}
                onClick={() => onChangeChannelName('头条')}
              >
                改变值
              </Button>

            </Form.Item>
          </Col>
        </Row>

      </Form>


      <Table
        columns={columnsArr}
        dataSource={[]}
      />
    </div>
  );

}

export default TestForm;