/* eslint-disable no-unused-vars */
import React, { Fragment, useEffect, useState } from "react";
import { Table, Form, Input } from "antd";
import { connect } from 'react-redux';

import { getNewsListByParams } from '../../store/actions';

function PageinationNews(props) {

  const [form] = Form.useForm();

  const [selectedRowKeys, setSelectedRowKeys] = useState([]);

  const [detail, setDetail] = useState({});

  const [apiloading, setApiLoading] = useState(true);

  useEffect(() => {
    const { dispatch } = props;
    dispatch(getNewsListByParams({ page: 1, pageSize: 10 })).then(res => {
      console.log('res', res?.list[0]);
      setDetail(res?.list[0]);
      // setApiLoading(false);
      form.resetFields();

    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [form]);

  const { todolist: { newsList, total, loading } } = props;

  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: '标题',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: '描述',
      dataIndex: 'description',
      key: 'description',
    }
  ];

  const onSelectChange = (selectedRowKeys, selectedRows) => {
    setSelectedRowKeys(selectedRowKeys)
  }

  const onChange = (page, pageSize) => {

    props.dispatch(getNewsListByParams({ page, pageSize }));

  }

  const onShowSizeChange = (current, size) => {
    // props.dispatch(getNewsListByParams({ pageSize: size }));
  }


  return (
    <div>
      <h2>接口分页测试2</h2>

      <Table
        rowKey="id"
        rowSelection={{
          type: 'radio',
          onChange: onSelectChange,
          selectedRowKeys: selectedRowKeys
        }}
        loading={loading}
        columns={columns}
        dataSource={newsList}
        pagination={{
          total: total,
          pageSize: 5,
          showSizeChanger: false,
          onChange: onChange,
          // pageSizeOptions: [5, 10],
          // onShowSizeChange: onShowSizeChange
        }}
      />
      {/* <p>{detail.title}</p> */}
      {/* {!apiloading && (<Form initialValues={ detail }>
        <Form.Item label="标题" name="title" >
          <Input  />
        </Form.Item>
      </Form>
      )} */}

      <Form form={form} initialValues={detail}>
        <Form.Item label="标题" name="title" >
          <Input />
        </Form.Item>
      </Form>

    </div>

  )

}


const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = dispatch => ({ dispatch });

export default connect(mapStateToProps, mapDispatchToProps)(PageinationNews);